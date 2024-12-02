
import PrimarySearchAppBar from "./sections/nav";
import Hero from "./sections/hero";
import Hero2 from "./sections/hero2";
import PickUp from "./sections/Pick - Up";
import DropOff from "./sections/dropOff";
import AppFooter from "./sections/footer";


import axios from "axios";
import { useEffect, useRef, useState } from "react";
import Card from "./sections/card";
import "./app.css"

import "./app.css";
function App() {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const res = await axios.get("http://localhost:5000/products");
    setProducts(res.data.data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (


    <>
      <nav className="container">
        <PrimarySearchAppBar />
      </nav>

      <main>
        <section>
          <div className="container">
            <div className="wrapper">
              <Hero />
              <Hero2 />
            </div>

            <div className="wrapper2">
              <div className="mt-9 bg-white  py-6 px-12 rounded-[15px]">
                <PickUp />
              </div>

              <img className="mt-[50px]" src="./public/Switch.svg" alt="" />

              <div className="mt-9 bg-white  py-6 px-12 rounded-[15px]">
                <DropOff />
              </div>
            </div>
          </div>
        </section>

        <section>
          <p className="ml-40 py-12 text-[#90A3BF] text-[18px]">Popular Car</p>

          <div className="wrapper3 ">
        {products.map((item) => (
          <Card title={item.name} category={item.category} img={item.image}  price={item.price} rating={item.rating}/>
        ))}

      </div>
   
      <button className="bg-[#3563E9] py-[8px] text-center m-auto my-[65px] block px-[20px] text-[#fff] rounded-lg">Show more car</button>

        </section>
      </main>

      <footer className="bg-white my-6 p-8 ">
        <div className="container2">
          <AppFooter />
        </div>
      </footer>
    </>
  );
}

export default App;
