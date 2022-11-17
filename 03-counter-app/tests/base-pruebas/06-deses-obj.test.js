import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe("Pruevas en 06-deses-obj", () => {
  test("usContext debe de retornar un objeto", () => {
    let clave = "ROV";
    let edad = 35;

    const user = usContext({ clave, edad });

    expect(user).toEqual({
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232,
      },
    });
  });
});
