describe("beforeAll", () => {
  let count = 1
  beforeAll(() => { // beforeAll函数对包含它的describe块执行一次且只执行一次
    count++
    console.log(count);
  });
  test("测试一", () => {
    // console.log(count);
  })
  test("测试二", () => {
    // console.log(count);
  })
})
// 最终的输出结果为依次为: 2(beforeAll打印的) 2(测试一打印的) 2(测试二打印的)