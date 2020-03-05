import jinja2

# https://jinja.palletsprojects.com/en/2.11.x/templates/
if __name__ == '__main__':
	env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'), autoescape=True, trim_blocks=True)
	for t in filter(lambda x: 'inc/' not in x, env.list_templates()):
		print(t)
		with open(f'../nudes/{t}', 'w') as f:
			f.writelines(env.get_template(t).render(body='Hi'))
