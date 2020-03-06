import os

import jinja2

# https://jinja.palletsprojects.com/en/2.11.x/templates/
if __name__ == '__main__':
	env = jinja2.Environment(loader=jinja2.FileSystemLoader('templates'), autoescape=True, trim_blocks=True)
	for t in filter(lambda x: 'inc/' not in x, env.list_templates()):
		print(t)
		name = t.replace('\\', '/').split('/')[-1]
		path = os.path.join(os.path.join('..', t.replace(name, '')))
		if not os.path.exists(path):
			os.makedirs(os.path.join(*path.replace('\\', '/').split('/')[:-1]))
		with open(os.path.join(path, name), 'w') as f:
			f.writelines(env.get_template(t).render(path=path.replace('..\\', '')))
