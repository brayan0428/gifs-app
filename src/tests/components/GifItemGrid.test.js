import React from "react";
import { shallow } from "enzyme";
import { GifItemGrid } from "../../components/GifItemGrid";

describe("<GifItemGrid />", () => {
  const title = "Prueba";
  const url = "https://prueba.com";
  const wrapper = shallow(<GifItemGrid title={title} img={url} />);
  test("Debe mostrar el componente correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe mostrar un h4 con el title de la prop", () => {
    const h4 = wrapper.find("h4");
    expect(h4.text().trim()).toBe(title);
  });

  test("La imagen debe tener el src y el alt", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });
});
