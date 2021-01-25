会在全局下查找有没有 gulp 命令，如果没有，会在当前所在目录去找，如果还没有，则在当前目录安装 gulp 命令（临时文件夹，用完后会自动删除, 即全局下，package.json 都没有）

> npx gulp

强制使用本地模块，不下载远程模块

> npx --no-install http-server

忽略本地模块，强制安装使用远程模块

> npx --ignore-existing http-server
