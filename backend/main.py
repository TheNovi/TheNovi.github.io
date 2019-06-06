from htm import Page, Tag


def default(p: Page, pages: list, sub_folder=""):
	if sub_folder and not sub_folder.endswith('/'):
		sub_folder += '/'
	path = '' if sub_folder else '../'
	p.head.add_content(Tag('link', par=f"href='{path}css/main.css' rel='stylesheet' type='text/css'"))
	p.head.add_content(Tag('title', 'TheNovi'))
	p.head.add_content(Tag('link', par=f"rel='icon' href='{path}img/icon.png'"))
	p.head.add_content(Tag('meta', par="charset='utf-8'/"))

	header = p.body.add_content(Tag('div', par="id='header'"))
	header.add_content(Tag('h1', f"<a href='{path}index.html'>TheNovi</a>"))
	ul = header.add_content(Tag('div', par="id='nav")).add_content(Tag('ul'))
	ul.add_content(Tag('li', f"<a href='{path}index.html'>Home</a>"))
	for a in pages:
		ul.add_content(Tag('li', f"<a href='{sub_folder}{a}.html'>{a}</a>"))
	c = p.body.add_content(Tag('div', par="id='content"))
	p.body.add_content(Tag('div', "&copy; TheNovi 2218 -- Many thanks to <a href='https://github.com'>Github</a> for making this site possible.<br>", "id='footer"))
	return c


if __name__ == '__main__':
	page = Page()
	content = default(page, ['About', 'Contact', 'Projects', 'Support'], 'html')
	print(page.out())
