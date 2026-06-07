import { render, screen } from "@testing-library/react";
import Menu from "../pages/Menu";
import { MenuContext } from "../context/MenuContext";

test("search input exists", () => {
  render(
    <MenuContext.Provider value={{ items: [], categories: [] }}>
      <Menu />
    </MenuContext.Provider>
  );

  expect(screen.getByPlaceholderText(/search/i)).toBeInTheDocument();
});