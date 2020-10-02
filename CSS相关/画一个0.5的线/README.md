# 用div+css画一个0.5的线
![0.5px高的线](./img/QQ20200731-160008@2x.png)
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    .line{
      width: 500px;
      height: 0px;
      border-top: 1px solid red;
      transform: scale(0.5)
    }
  </style>
</head>
<body>
  <div class="line"></div>
</body>
</html>
```