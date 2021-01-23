# node package versions

- 13.4.6
- major: 13, minor: 4, patch: 6  
  主版本号 次版本号 补丁号

# package.json 中的版本

- 写法 1  
  ^表示锁定主版本号 2，后面取最新的版本

```json
"dependencies": {
    "lodash": "^2.0.0",
  },
```

- 写法 2  
  ~表示锁定主版本号和次版本号 2.0，后面取最新的版本

```json
"dependencies": {
    "lodash": "~2.0.0",
  },
```

- 写法 3  
  不写则表示锁定版本号,即固定安装 2.0.0 这个版本

```json
"dependencies": {
    "lodash": "2.0.0",
  },
```

- 写法 4  
  `*`表示取最新发布的版本号

```json
"dependencies": {
    "lodash": "*",
  },
```
