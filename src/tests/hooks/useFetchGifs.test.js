import useFetchGifs from "../../hooks/useFetchGifs";
import { renderHook } from "@testing-library/react-hooks";

describe("Hook useFetchGifs", () => {
  const category = "Goku";
  test("Probando estado inicial", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    const { gifs, loading } = result.current;
    await waitForNextUpdate();
    expect(gifs).toEqual([]);
    expect(loading).toBe(true);
  });

  test("Probando el estado con data", async () => {
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetchGifs(category)
    );
    await waitForNextUpdate();
    const { gifs, loading } = result.current;
    expect(gifs.length).toBe(12);
    expect(loading).toBe(false);
  });
});
