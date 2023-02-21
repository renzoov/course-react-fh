import { render, screen } from "@testing-library/react";
import { UserContext } from "../../src/09-useContext/context/UserContext";
import { HomePage } from "../../src/09-useContext/HomePage";

describe("Pruebas en HomePage", () => {
  test("debe de mostrar el componente sin el usuario", () => {
    render(
      <UserContext value={{ user: null }}>
        <HomePage />
      </UserContext>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toBe("null");
  });

  test("debe de mostrar el componente con el usuario", () => {
    render(
      <UserContext value={{ user }}>
        <HomePage />
      </UserContext>
    );

    const preTag = screen.getByLabelText("pre");
    expect(preTag.innerHTML).toContain(user.name);
    expect(preTag.innerHTML).toContain(`${user.id}`);
  });
});
