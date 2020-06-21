import React from "react";
import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";
import "@testing-library/jest-dom";

describe("<AddCategory />", () => {
  const addCategory = jest.fn();
  let wrapper = shallow(<AddCategory addCategory={addCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory addCategory={addCategory} />);
  });

  test("Validar componente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Cambio en el input", () => {
    const input = wrapper.find("input");
    const value = "Hola";
    input.simulate("change", { target: { value } });
  });

  test("No debe llamar la función addCategory", () => {
    const form = wrapper.find("form");
    form.simulate("submit", { preventDefault() {} });
    expect(addCategory).not.toHaveBeenCalled();
  });

  test("Se debe llamar la función addCategory", () => {
    const value = "Hola";
    wrapper.find("input").simulate("change", { target: { value } });
    wrapper.find("form").simulate("submit", { preventDefault() {} });
    expect(addCategory).toHaveBeenCalled();
  });
});
