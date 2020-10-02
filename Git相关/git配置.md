## 问题 
从git仓库clone下来，安装依赖后，发现有2K多个变更，一看是把node_modules给算进去了
## 解决办法：
进入项目所在目录，右键选择Git Bash，输入 touch .gitignore ，生成“.gitignore”文件。  
```
node_modules/
```
添加到 .gitignore文件中去，即可