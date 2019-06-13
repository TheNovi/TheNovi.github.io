

class Tag:
	def __init__(self, name, text: str = '', par=""):
		self.name = name
		self.par = par
		self.content = [Text(text)] if text else []
		self.__update_tab__(0)

	def __update_tab__(self, tab):
		self.tab = tab
		for x in self.content:
			x.__update_tab__(tab+1)

	def add_content(self, tag: 'Tag'):
		# noinspection PyTypeChecker
		self.content.append(tag)
		tag.__update_tab__(self.tab+1)
		return self.content[-1]

	def __str__(self):
		t = ''.join(['\t' for _ in range(self.tab)])
		p = f" {self.par}" if self.par else ''
		con = ''.join([str(x) for x in self.content])
		con = '\n' + con + t if con else con
		close = f"</{self.name}>" if self.name not in ['link', 'meta', 'br'] else ''
		return f"{t}<{self.name}{p}>{con}{close}\n"


class Text(Tag):
	def __init__(self, text):
		super().__init__(None)
		while '{' in text:
			s, e = text.index('{'), text.index('}')
			text = text[:s] + Text.__parse__(text[s+1:e].strip()) + text[e+1:]
		self.text = text

	@staticmethod
	def __parse__(text):
		print(f'"{text}"')
		return "HERE"

	def __str__(self):
		return ''.join(['\t' for _ in range(self.tab)]) + self.text + '\n'


class Page:
	def __init__(self):
		self.html = Tag('html')
		self.head = self.html.add_content(Tag('head'))
		self.body = self.html.add_content(Tag('body'))

	def out(self):
		return f"<!DOCTYPE html>\n{str(self.html)}"
