import { mount } from "@vue/test-utils";
import header from "../MyHeader.vue"

describe("header.vue", () => {
  const wrapper = mount(header);
  it("header test", () => {
    const title = "标题";
    // expect(wrapper.text()).toMatch(title)
  })
})