import { useEffect, useRef, useState } from "react";
import Hero from "./Hero";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/products/productSlice";
import { Link } from "react-router-dom";

const Home = () => {
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.categories);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProduct(product.products);
  }, [product.products]);

  const getCatProduct = (category) => {
    setSelectedCategory(category);
    let filteredProducts = product.products.filter(
      (product) => product.category === category
    );
    filteredProducts = filteredProducts.length
      ? filteredProducts
      : product.products;
    setFilteredProduct(filteredProducts);
  };

  return (
    <main>
      <Hero />
      <div className="flex flex-col items-center mt-60">
        <div className="text-4xl font-medium mb-5">
          <h1>BEST SELLER</h1>
        </div>
        <div className="text-2xl mb-10">
          <ul className="flex gap-10">
            <li className="hover:text-[#40BFFF]">
              <button
                className={
                  selectedCategory === "All" ? "underline text-[#40BFFF]" : ""
                }
                onClick={() => getCatProduct("All")}
              >
                All
              </button>
            </li>
            {!category.loading &&
              category.categories.length &&
              category.categories.map((category) => (
                <li className="hover:text-[#40BFFF]" key={category}>
                  <button
                    className={
                      selectedCategory === category
                        ? "underline text-[#40BFFF]"
                        : ""
                    }
                    onClick={() => getCatProduct(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </button>
                </li>
              ))}
          </ul>
        </div>
        <div className="parent flex items-center justify-center w-full h-full mb-60">
          <div className="  grid grid-cols-4">
            {!product.loading &&
              product.products.length &&
              filteredProduct.length &&
              filteredProduct.map((p) => {
                return <Product key={p.id} product={p} />;
              })}
          </div>
        </div>
        <div className="relative w-[1920px] h-[600] bg-[#40BFFF] text-[#FFFFFF]">
          <div className="flex flex-col p-40">
            <span className="text-6xl mb-5">Adidas Men Running</span>
            <span className="text-6xl mb-10">Sneakers</span>
            <span className="text-2xl mb-2">
              Performance and design. Taken right to the edge.
            </span>
            <Link to={"/"} className="font-bold">
              <span>SHOP NOW</span>
              <hr className="border-b-[2px] w-[65px]" />
            </Link>
          </div>
          <img
            className="absolute top-[-110px] right-0"
            src="./images/shoe.png"
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
