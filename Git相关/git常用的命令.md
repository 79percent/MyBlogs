## Git常用的命令

- 初始化本地仓库  
>git init

- 关联远程仓库
>git remote add url

- 将仓库下载到本地  
>git clone url

- 将所有改动存到暂存区
>git add .

- 提交本次修改
>git commit -m "first commit"

- 将更改推送的远程分支
>git push origin master

- --force为强制推送
>git push origin master --force

- 查看本地的修改
>git status

- 保存暂存区的更改
>git stash save "code change"

- 释放存储区的第一个stash，执行后会在存储区中把它删除
>git stash pop

- 释放存储区的第一个stash，执行后不会在存储区中把它删除
>git stash apply

- 查看存储区的stash 列表
>git stash list

- 拉取远程分支代码到本地
>git pull origin master

- 切换一个分支，-b为远程分支
>git checkout -b Test

- 查看本地分支
>git branch

- 修改本地分支名称
>git branch -D Test2

- 与master分支合并，合并完解决冲突后推送代码不会产生新的commit，优点是干净，缺点是如果之前有多次commit，则需要处理多次冲突
>git rebase master

- 与master分支合并，合并完解决冲突后推送代码会产生一个新的commit
>git merge master

- git commit之后，想撤销commit
>git reset --soft HEAD^
