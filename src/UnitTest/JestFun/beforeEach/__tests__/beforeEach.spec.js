describe("beforeEach", () => {
  let count = 1
  beforeEach(() => { // beforeEach函数或任何规范之前的任何beforeAll函数
    count++
    console.log(count);
  });
  test("测试一", () => {
    console.log(count);
  })
  test("测试二", () => {
    console.log(count);
  })
})
// 最终的输出结果为依次为: 2(beforeAll打印的) 2(测试一打印的) 3(beforeAll打印的) 3(测试二打印的)