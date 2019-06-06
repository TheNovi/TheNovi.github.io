

class Tag:
	def __init__(self, name, content=None, par=""):
		self.name = name
		self.par = par
		self.content = content if content else []
		self.tab = 0

	def add_content(self, tag: 'Tag'):
		self.content.append(tag)
		self.content[-1].tab = self.tab + 1
		return self.content[-1]

	def __str__(self):
		t = ''.join(['\t' for _ in range(self.tab)])
		p = f" {self.par}" if self.par else ''
		con = (self.content if isinstance(self.content, str) else f"\n{''.join([str(x) for x in self.content])}{t}") if self.content else ''
		close = f"</{self.name}>" if self.name not in ['link', 'meta', 'br'] else ''
		return f"{t}<{self.name}{p}>{con}{close}\n"


class Page:
	def __init__(self):
		self.html = Tag('html')
		self.head = self.html.add_content(Tag('head'))
		self.body = self.html.add_content(Tag('body'))

	def out(self):
		return f"<!DOCTYPE html>\n{str(self.html)}"
