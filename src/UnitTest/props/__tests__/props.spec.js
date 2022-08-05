import { mount } from "@vue/test-utils"
import Props from "../props.vue"

describe("Props.spec.js", () => {
  it("判断input的value的长度", async () => {
    const wrapper = mount(Props, {
      props: {
        minLength: 10
      },
    })
    // 设置一个文本控件或 select 元素的值并更新 v-model 绑定的数据  异步的,返回一个promise,与vue的渲染有关,因为vue的渲染是异步的
    let inputDom = wrapper.get("input")
    await inputDom.setValue("hahaha")
    expect(wrapper.find("[data-test='error']").exists()).toBe(true)
    // 让tips消失的两种方法
    // 方法1 : 利用setProps修改data上的props 异步的,返回一个promise
    await wrapper.setProps({
      minLength: 2
    })

    // 方法2 : 修改input的value
    // await inputDom.setValue("1234567891011")

    expect(wrapper.find("[data-test='error']").exists()).toBe(false)
  })
})