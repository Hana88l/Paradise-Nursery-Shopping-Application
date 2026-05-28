import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";

const plantsData = [
  {
    id: 1,
    name: "Aloe Vera",
    price: 10,
    category: "Succulents",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 2,
    name: "Cactus",
    price: 12,
    category: "Succulents",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 15,
    category: "Indoor",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 4,
    name: "Peace Lily",
    price: 18,
    category: "Indoor",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 5,
    name: "Rose",
    price: 20,
    category: "Flowering",
    image: "https://via.placeholder.com/100",
  },
  {
    id: 6,
    name: "Tulip",
    price: 22,
    category: "Flowering",
    image: "https://via.placeholder.com/100",
  },
];

const ProductList = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const isAdded = (id) => cartItems.some(item => item.id === id);

  const categories = [...new Set(plantsData.map(p => p.category))];

  return (
    <div>
      {/* NAVBAR */}
      <nav style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>🌿 Paradise Nursery</h2>
        <div>
          <span style={{ marginRight: 20 }}>Home</span>
          <span style={{ marginRight: 20 }}>Plants</span>
          <span>🛒 {cartItems.length}</span>
        </div>
      </nav>

      {/* PRODUCT LIST */}
      {categories.map(category => (
        <div key={category}>
          <h2>{category}</h2>

          <div style={{ display: "flex", gap: "20px" }}>
            {plantsData
              .filter(p => p.category === category)
              .map(plant => (
                <div key={plant.id} style={{ border: "1px solid #ccc", padding: 10 }}>
                  <img src={plant.image} alt={plant.name} />
                  <h3>{plant.name}</h3>
                  <p>${plant.price}</p>

                  <button
                    onClick={() => dispatch(addItem(plant))}
                    disabled={isAdded(plant.id)}
                  >
                    {isAdded(plant.id) ? "Added" : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;