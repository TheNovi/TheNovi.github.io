import jinja2

if __name__ == '__main__':
	env = jinja2.Environment(loader=jinja2.PackageLoader('backend', 'jinja'), autoescape=True)
	print(env.get_template('index.html').render(body='Hello world!'))
