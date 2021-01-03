call npm run build

rmdir /s/q .\dist-to-github
git clone https://github.com/TheNovi/TheNovi.github.io.git dist-to-github
cd dist-to-github
git checkout dist

xcopy /s/y ..\dist .\

git add -A
git commit -m "Vue deploy.bat"
git push

cd ..
rmdir /s/q .\dist-to-github
rmdir /s/q .\dist

