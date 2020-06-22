import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { GifGrid } from "../../components/GifGrid";
import useFetchGifs from "../../hooks/useFetchGifs";
jest.mock("../../hooks/useFetchGifs");

describe("<GifGrid />", () => {
  const category = "Goku";

  test("Validando el componente", () => {
    useFetchGifs.mockReturnValue({
      gifs: [],
      loading: true,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper).toMatchSnapshot();
  });

  test("Validando el componente con data cargada desde el useFetchGifs", () => {
    const gifs = [
      {
        id: "123",
        title: "Prueba",
        img: "http://prueba.com",
      },
    ];
    useFetchGifs.mockReturnValue({
      gifs,
      loading: false,
    });
    const wrapper = shallow(<GifGrid category={category} />);
    expect(wrapper.find("h4").exists()).toBe(false);
    expect(wrapper.find("GifItemGrid").length).toBe(gifs.length);
  });
});
