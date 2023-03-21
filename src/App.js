import React, { useState } from "react";
import "./App.css";
import Counter from "./pages/Counter";
import Pricing from "./pages/Pricing";
import Cart from "./pages/Cart";

function App() {
  const [page] = useState("cart");
  return (
    <div className="App">
      <section className="pricing py-5">
        {page === "counter" && <Counter />}
        {page === "pricing" && <Pricing />}
        {page === "cart" && <Cart />}
      </section>
    </div>
  );
}

export default App;