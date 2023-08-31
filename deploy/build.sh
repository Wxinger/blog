# 确保脚本抛出遇到的错误
set -e &&

# 生成静态文件
npm run docs:build &&
rm -r docs/* &&
cd main/.vitepress/dist &&
mv * ../../../docs/
cd ../../../ &&
rm -r main/.vitepress/dist
git add -A &&
git commit -m '更新' &&
git push -u origin master &&
ehco "更新成功"