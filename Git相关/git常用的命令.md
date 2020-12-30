# Git 常见场景和命令

- 初始化本地仓库

  > git init

- 关联远程仓库

  > git remote add url

- 将仓库下载到本地

  > git clone url

- 将所有改动存到暂存区

  > git add .

- 提交本次修改

  > git commit -m "first commit"

- 将更改推送到远程分支

  > git push origin master

- --force 为强制推送

  > git push origin master --force

- 查看本地的修改

  > git status

- 保存暂存区的更改

  > git stash save "code change"

- 释放存储区的第一个 stash，执行后会在存储区中把它删除

  > git stash pop

- 释放存储区的第一个 stash，执行后不会在存储区中把它删除

  > git stash apply

- 查看存储区的 stash 列表

  > git stash list

- 拉取远程分支代码到本地

  > git pull origin master

- 切换到 Test 分支，-b 为远程分支， 如果没有 Test 分支则会创建 Test 分支

  > git checkout -b Test

- 查看所有分支（包括本地和远程）

  > git branch -a

- 新建 Test 分支

  > git branch Test

- 修改本地分支名称

  > git branch -D Test2

- 合并分支，不会产生新的 commit

  > git rebase master

- 合并分支，会产生新的 commit

  > git merge master

- 撤销 commit

  > git reset --soft HEAD^

- 查看历史提交记录
  > git log
