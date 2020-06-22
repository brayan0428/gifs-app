import React from "react";
import { shallow } from "enzyme";
import App from "../App";

describe("<App />", () => {
  test("Validando el componente", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
