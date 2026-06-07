import { useEffect, useState } from "react";
import { getCategories, getItems } from "../services/api";

export default function useMenu() {
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  useEffect(() => {
    getCategories().then(setCategories);
    getItems().then(setItems);
  }, []);

  return { categories, items, setCategories, setItems };
}