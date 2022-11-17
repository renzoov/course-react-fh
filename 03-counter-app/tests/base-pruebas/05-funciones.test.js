import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("Pruevas en 05-funciones", () => {
  test("getUser debe retornar un objeto", () => {
    const testUser = {
      uid: "ABC123",
      username: "El_Papi1502",
    };

    const user = getUser();

    expect(user).toEqual(testUser);
  });

  test("getUsuario debe de retornar un objeto", () => {
    const name = "Renzo";
    const userActive = getUsuarioActivo(name);

    expect(userActive).toEqual({
      uid: "ABC567",
      username: name,
    });
  });
});
