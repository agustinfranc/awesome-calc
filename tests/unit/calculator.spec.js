import { mount } from "@vue/test-utils";
import Calculator from "@/components/Calculator.vue";

describe("Calculator.vue", () => {
  it("renders a greeting", () => {
    const wrapper = mount(Calculator);

    expect(wrapper.text()).toMatch("Vue and TDD");
  });
});
