import { render, screen } from "@testing-library/react";
import Admin from "../pages/Admin";
import { MenuContext } from "../context/MenuContext";

test("renders admin panel", () => {
  render(
    <MenuContext.Provider value={{
      items: [],
      categories: [],
      setItems: () => {},
      setCategories: () => {}
    }}>
      <Admin />
    </MenuContext.Provider>
  );

  expect(screen.getByText("Admin Panel")).toBeInTheDocument();
});