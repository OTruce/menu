
// import { useContext, useState } from "react";
// import { useLocation } from "react-router-dom";
// import { MenuContext } from "../context/MenuContext";

// import barImg from "../images/cocktails.jpg";
// import kitchenImg from "../images/kitchen.jpg";

// export default function Menu() {
//   const { items, categories } = useContext(MenuContext);
//   const location = useLocation();

//   const section = location.state?.section || "bar";
//   const [search, setSearch] = useState("");

//   const filtered = items.filter(i =>
//     i.name.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="page">

//       <h2 className="menu-title">
//         {section === "bar" ? "Bar Menu" : "Kitchen Menu"}
//       </h2>

//       <img
//         className="banner"
//         src={section === "bar" ? barImg : kitchenImg}
//       />

//       <input
//         className="search"
//         placeholder="Search items..."
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <div className="grid">
//         {categories
//           .filter(c => c.section === section)
//           .map(cat =>
//             filtered
//               .filter(i => i.categoryId === cat.id)
//               .map(item => (
//                 <div key={item.id} className="card">
                  
//                   {/* IMAGE PLACEHOLDER */}
//                   <div className="card-img" />

//                   <h3>{item.name}</h3>
//                   <p className="desc">{item.description}</p>
//                   <p className="origin">Origin: {item.origin}</p>

//                   <div className="price">
//                     Ksh {item.price}
//                   </div>

//                 </div>
//               ))
//           )}
//       </div>
//     </div>
//   );
// }


import { useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuContext } from "../context/MenuContext";

import barImg from "../images/drink.jpg";
import kitchenImg from "../images/kitchen.jpg";

export default function Menu() {
  const { items, categories } = useContext(MenuContext);
  const location = useLocation();

  const section = location.state?.section || "bar";
  const [search, setSearch] = useState("");

  return (
    <div className="page">
      <h2 className="menu-title">
        {section === "bar" ? "Bar Menu" : "Kitchen Menu"}
      </h2>

      <img
        className="banner"
        src={section === "bar" ? barImg : kitchenImg}
        alt="banner"
      />

      <input
        className="search"
        placeholder="Search items..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {categories
        .filter((cat) => cat.section === section)
        .map((cat) => {
          const categoryItems = items.filter(
            (item) =>
              item.categoryId === cat.id &&
              item.name.toLowerCase().includes(search.toLowerCase())
          );

          if (categoryItems.length === 0) return null;

          return (
            <div key={cat.id} className="category-section">
              <h2 className="category-title">{cat.name}</h2>

              <div className="grid">
                {categoryItems.map((item) => (
                  <div key={item.id} className="card">
                    <div
                      className={`card-img ${
                        section === "bar"
                          ? "drink-image"
                          : "food-image"
                      }`}
                    />

                    <h3>{item.name}</h3>

                    <p className="desc">
                      {item.description || "House Special"}
                    </p>

                    <p className="origin">
                      {item.origin || "Drafthaus Signature"}
                    </p>

                    <div className="price">
                      Ksh {item.price}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
    </div>
  );
}