// 单元测试的三个步骤
// 安排（Arrange）：为测试做好设置。在我们的用例中，是渲染了组件
// 行动（Act）：对系统执行操作
// 断言（Assert）：确保真实的结果匹配你的期望，我们需要断言以确保组件运行正确（断言就是比较，判断正不正确，1+1是不是等于2，就是一个最简单的断言）

// Vue 组件单元测试的一般思路：渲染这个组件，然后断言这些标签是否匹配组件的状态。
import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

// describe块称为“测试套件”，表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称，第二个参数是实际执行的函数，分组让测试用例代码结构化，易于维护
describe('HelloWorld.vue', () => {
  // it块称为“测试用例”，表示一个单独的测试，是测试的最小单位
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })

    // expect是断言，它接受一个参数就是运行测试内容的结果，返回一个对象，这个对象来调用匹配器(toBe) ，匹配器的参数就是我们的预期结果，这样就可以对结果和预期进行对比了，也就可以判断对不对了，比如expect(1+1).toBe(2)。
    expect(wrapper.text()).toMatch(msg)
  })
})
