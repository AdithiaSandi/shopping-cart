import "./App.css";
import { useSelector } from "react-redux";
import { getItems } from "./features/counter/counterSlice";
import CartItem from "./components/CartItem";
import ProceedForm from "./components/ProceedForm";

function App() {
  const items = useSelector(getItems);

  return (
    <>
      <header
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
          backgroundColor: "#fbfbfb",
        }}
      >
        <h3>Shopping Cart</h3>
      </header>
      <div
        className="cart-container"
        style={{
          paddingTop: "5vh",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <div
          className="items-container"
          style={{
            boxShadow: "1px 1px 5px whitesmoke, -1px -1px 5px whitesmoke",
            width: "60vw",
            padding: "1rem",
            borderRadius: "7px",
            marginBottom: "2rem",
          }}
        >
          <h4>Cart &#40;{items.length} items&#41;</h4>
          {items.map((item, index) => (
            <CartItem item={item} index={index} key={index} />
          ))}
        </div>
        <ProceedForm items={items} />
      </div>
    </>
  );
}

export default App;
