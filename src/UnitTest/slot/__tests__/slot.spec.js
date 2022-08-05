import { mount } from "@vue/test-utils"
import Slot from "../slot.vue"
import Foo from "../components/Foo.vue"
import { h } from "@vue/runtime-core"

// slot 可接收:string、div、component、object、h -> vnode

describe("slot.vue", () => {

  // it("使用默认插槽", () => {
  //   const expectValue = "use default slot"
  //   const wrapper = mount(Slot, {
  //     slots: {
  //       default: expectValue
  //     }
  //   })
  //   // console.log(wrapper.text());
  //   expect(wrapper.text()).toContain(expectValue)
  // })

  // it("使用默认插槽接收多个值", () => {
  //   const wrapper = mount(Slot, {
  //     slots: {
  //       default: ["<div class='one'>one</div>", "<div class='two'>two</div>"]
  //     }
  //   })
  //   // console.log(wrapper.html());
  //   // console.log(wrapper.findAll(".one"));
  //   expect(wrapper.find(".one").text()).toContain("one")
  // })

  // it("使用具名插槽接", () => {
  //   const wrapper = mount(Slot, {
  //     slots: {
  //       header: "<div class='header'>header</div>",
  //       footer: "<div class='footer'>footer</div>"
  //     }
  //   })
  //   // console.log(wrapper.html());
  //   // console.log(wrapper.findAll(".one"));
  //   expect(wrapper.find("header").text()).toContain("header")
  //   expect(wrapper.find("header").text()).toContain("header")
  // })

  // it("作用域", () => {
  //   const wrapper = mount(Slot, {
  //     slots: {
  //       header: `
  //       <template #header="data">
  //         hello {{data.msg}}
  //       </template>

  //       `
  //     }
  //   })
  //   console.log(wrapper.html());
  //   expect(wrapper.find("header").text()).toContain("hello message")
  // })

  it("高级用法", () => {
    const wrapper = mount(Slot, {
      slots: {
        // default: Foo // 接收组件
        // default: { // 接收对象
        //   template: "<div>Foo</div>"
        // }
        default: h("div", "Foo") // 接收虚拟dom
      }
    })
    // console.log(wrapper.html());
    // console.log(window.navigator); // 返回为{},不能获取浏览器的配置
    expect(wrapper.text()).toContain("Foo")
  })
})