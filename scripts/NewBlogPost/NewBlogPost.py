import datetime
d, a, t, b = None, None, None, None
time = datetime.datetime.now().strftime("%d %B %Y -- %H:%M CEST")
post = '<!-- New blog post here -->\n\n\t\t\t<div id="p{}">\n\t\t\t\t<h2>{}</h2><br>\n\t\t\t\t{}<br>\n\t\t\t\t{}\n\t\t\t\t<p>{}</p>\n\t\t\t</div>'
with open("d") as f:
	d = int(f.read())
with open("newPost.txt") as f:
	a = f.read().split("\n")
if len(a) < 2:
	print(a)
	print("Error len(a) < 2")
	quit()
d += 1

with open("../../html/Blog.html") as f:
	b = f.read().replace("<!-- New blog post here -->", post.format(d, a[0], a[1], f'<a href="../blogPosts/{d}.html">More</a>' if len(a) >= 3 else "" , time))
if len(b) == 0:
	print(b)
	print("Error len(b) == 0")
	quit()

if len(a) >= 3:
	with open("../../blogPosts/.template.html") as f:
		t = f.read().replace("<!-- New blog post here -->", post.format(d, a[0], a[1]+"<br>", '<br>\n'.join(a[2:]), time)).replace("<!-- New blog post here -->\n\n\t\t\t", "")
	if len(t) == 0:
		print(t)
		print("Error len(t) == 0")
		quit()

	with open(f"../../blogPosts/{d}.html", 'w') as f:
		f.writelines(t)
	with open("d", 'w') as f:
		f.writelines(str(d))
	print("Post site created")
else:
	print("Skipped post site creation")

with open("../../html/Blog.html", "w") as f:
	f.writelines(b)

print("Post is posted. Congratz")
input()