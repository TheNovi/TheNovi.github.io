import os

if __name__ == "__main__":
	files = ['index', 'About', 'Contact', 'Projects']
	for i in range(1, len(files)):
		files[i] = f'html/{files[i]}'
	
	path = ''
	if not os.path.exists(f'{path}Php/{files[0]}.php'):
		path = 'backend/' + path
	
	for file in files:
		os.system(f'php {path}Php/{file}.php > {path}nudes/{file}.html')
