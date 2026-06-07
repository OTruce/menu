import { render, screen } from "@testing-library/react";
import Menu from "../pages/Menu";
import { MenuContext } from "../context/MenuContext";

test("renders menu item", () => {
  render(
    <MenuContext.Provider value={{
      items: [{ id: 1, name: "Beer", price: 200, categoryId: 1 }],
      categories: [{ id: 1, name: "Beer", section: "bar" }]
    }}>
      <Menu />
    </MenuContext.Provider>
  );

  expect(screen.getByText("Beer")).toBeInTheDocument();
});