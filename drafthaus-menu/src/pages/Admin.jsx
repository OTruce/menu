import { useContext, useState } from "react";
import { MenuContext } from "../context/MenuContext";
import { addCategory, addItem, updateItem, deleteItem } from "../services/api";

export default function Admin() {
  const { categories, items, setItems, setCategories } =
    useContext(MenuContext);

  const [category, setCategory] = useState("");
  const [item, setItem] = useState({
    name: "",
    price: "",
    categoryId: ""
  });

  // CATEGORY
  const handleCategory = async () => {
    const res = await addCategory({ name: category, section: "bar" });
    const data = await res.json();
    setCategories([...categories, data]);
  };

  // ITEM
  const handleItem = async () => {
    const res = await addItem(item);
    const data = await res.json();
    setItems([...items, data]);
  };

  // PATCH
  const updatePrice = async (id) => {
    const price = prompt("New price");

    const res = await updateItem(id, { price: Number(price) });
    const updated = await res.json();

    setItems(items.map(i => i.id === id ? updated : i));
  };

  // DELETE
  const removeItem = async (id) => {
    await deleteItem(id);
    setItems(items.filter(i => i.id !== id));
  };

  return (
    <div className="page">
      <h2>Admin Panel</h2>

      <h3>Add Category</h3>
      <input onChange={(e) => setCategory(e.target.value)} />
      <button onClick={handleCategory}>Add</button>

      <h3>Add Item</h3>

      <input
        placeholder="Name"
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />

      <input
        placeholder="Price"
        onChange={(e) => setItem({ ...item, price: e.target.value })}
      />

      <select
        onChange={(e) =>
          setItem({ ...item, categoryId: Number(e.target.value) })
        }
      >
        <option>Select Category</option>
        {categories.map(c => (
          <option key={c.id} value={c.id}>{c.name}</option>
        ))}
      </select>

      <button onClick={handleItem}>Add Item</button>

      <h3>Manage Items</h3>

      {/* {items.map(i => (
        <div key={i.id} className="card">
          {i.name} - Ksh {i.price}

          <button onClick={() => updatePrice(i.id)}>
            Edit
          </button>

          <button onClick={() => removeItem(i.id)}>
            Delete
          </button>
        </div>
      ))} */}

      <div className="grid">
  {items.map((i) => {
    const category = categories.find(
      (c) => c.id === i.categoryId
    );

    return (
      <div key={i.id} className="card admin-card">
        <div
          className={`card-img ${
            category?.section === "bar"
              ? "drink-image"
              : "food-image"
          }`}
        />

        <h3>{i.name}</h3>

        <p className="desc">
          {i.description || "House Special"}
        </p>

        <p className="origin">
          {category?.name}
        </p>

        <div className="price">
          Ksh {i.price}
        </div>

        <div className="admin-actions">
          <button
            className="edit-btn"
            onClick={() => updatePrice(i.id)}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => removeItem(i.id)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  })}
</div>
    </div>
  );
}