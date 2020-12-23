/**
 * 准确判断一个变量是否为数字
 * @param {*} n 
 */
const verifyNum = (n) => {
  switch (n) {
    case null:
    case undefined:
      console.error('argument is not a number')
      return;
    default:
      const type_n = typeof n;
      switch (type_n) {
        case 'number':
        case 'string':
        case 'number':
          const num = Number(n);
          if (Number.isNaN(num)) {
            console.error('argument is not a number')
            return;
          }
          console.log(num)
          return num;
        case 'object':
          if (n instanceof Number) {
            console.log(Number(n))
            return Number(n);
          }
          console.error('argument is not a number')
          return;
        default:
          console.error('argument is not a number')
          return;
      }
  }
}

verifyNum(0)
verifyNum(-0)
verifyNum(+0)
verifyNum(1)
verifyNum(11.1)
verifyNum('2')
verifyNum('123e-1')
verifyNum('23.123')
verifyNum('23.123a')
verifyNum('0x11')
verifyNum(Number(3))
verifyNum(true)
verifyNum(false)
verifyNum(null)
verifyNum(undefined)
verifyNum(NaN)
verifyNum({})
verifyNum({ x: 1 })
verifyNum({ valueOf: function () { return 2 } })
verifyNum([])
verifyNum([1, 2, 3])
verifyNum(function () { })
verifyNum(Symbol(1))