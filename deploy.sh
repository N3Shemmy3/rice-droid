set e-

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f git@github.com:N3Shemmy3/rice-droid.git master:gh-pages

cd C:\Users\Shemmy3\Dev\Projects\Web\Frontend\rice-droid