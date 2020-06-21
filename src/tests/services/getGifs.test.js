import { getGifs } from "../../services";

describe("Servicio getGifs", () => {
  test("Se esperan 12 elementos", async () => {
    const data = await getGifs("Goku");
    expect(data.length).toBe(12);
  });
});
