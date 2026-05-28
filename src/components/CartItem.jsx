import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

const CartItem = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);
  const totalAmount = useSelector(state => state.cart.totalAmount);

  return (
    <div style={{ padding: 20 }}>
      <h2>🛒 Shopping Cart</h2>

      {items.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {/* CART ITEMS */}
          {items.map(item => (
            <div
              key={item.id}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                border: "1px solid #ccc",
                padding: 10,
                marginBottom: 10,
              }}
            >
              <img src={item.image} alt={item.name} width={80} />

              <div style={{ flex: 1 }}>
                <h3>{item.name}</h3>
                <p>Unit Price: ${item.price}</p>
                <p>Total: ${item.price * item.quantity}</p>
              </div>

              {/* QUANTITY CONTROL */}
              <div>
                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, type: "decrease" }))
                  }
                >
                  −
                </button>

                <span style={{ margin: "0 10px" }}>{item.quantity}</span>

                <button
                  onClick={() =>
                    dispatch(updateQuantity({ id: item.id, type: "increase" }))
                  }
                >
                  +
                </button>
              </div>

              {/* DELETE */}
              <button
                onClick={() => dispatch(removeItem(item.id))}
                style={{ marginLeft: 10 }}
              >
                Delete
              </button>
            </div>
          ))}

          {/* TOTAL */}
          <h3>Total Amount: ${totalAmount}</h3>

          {/* BUTTONS */}
          <div style={{ marginTop: 20 }}>
            <button onClick={() => alert("Coming Soon!")}>
              Checkout
            </button>

            <button
              style={{ marginLeft: 10 }}
              onClick={() => window.location.href = "/products"}
            >
              Continue Shopping
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItem;