import { useEffect, useState } from "react";
import Hero from "./Hero";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../store/products/productSlice";
import { Link } from "react-router-dom";
import FeaturedProduct from "./FeaturedProduct";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const product = useSelector((state) => state.product);
  const category = useSelector((state) => state.categories);
  const [filteredProduct, setFilteredProduct] = useState([]);
  const [featuredProduct, setFeaturedProduct] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    setFilteredProduct(product.products);
    const featuredProducts = product.products.filter(
      (product) => product.rating.rate > 4
    );
    setFeaturedProduct(featuredProducts);
  }, [product.products]);

  const notify = () =>
    toast.success("Item added to cart successfully !", {
      position: "top-right",
    });

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
    <>
      <main>
        <Hero />
        <div className="flex flex-col items-center mt-20 xl:mt-5 lg:mt-[160px]">
          <div className="text-4xl lg:text-3xl font-medium mb-5">
            <h1>BEST SELLER</h1>
          </div>
          <div className="text-2xl lg:text-xl mb-10">
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
                  return (
                    <Product key={p.id} product={p} showToastMessage={notify} />
                  );
                })}
            </div>
          </div>
          <div className="relative w-[120rem] h-[37.5rem] xl:w-[100rem] lg:w-[80rem]  bg-[#40BFFF] text-[#FFFFFF] mb-60">
            <div className="flex flex-col p-40 lg:p-20 lg:py-40">
              <span className="text-6xl lg:text-5xl mb-5">
                Adidas Men Running
              </span>
              <span className="text-6xl mb-10 lg:text-5xl lg:mb-[2rem]">
                Sneakers
              </span>
              <span className="text-2xl mb-2 lg:text-xl lg:mb-[0.5rem]">
                Performance and design. Taken right to the edge.
              </span>
              <Link to={"/"} className="font-bold lg:text-sm">
                <span>SHOP NOW</span>
                <hr className="border-b-[2px] w-[65px]" />
              </Link>
            </div>
            <img
              className="absolute top-[-110px] right-0 lg:w-[50rem] lg:-right-[2rem]"
              src="./images/shoe.png"
            />
          </div>
          <div className="flex w-full justify-evenly items-center mb-60">
            <div className="flex flex-col items-center gap-10">
              <img src="./images/shipping.png" alt="shipping" />
              <span className="text-[27px] font-medium xl:text-[25px] lg:text-[25px]">
                FREE SHIPPING
              </span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <img src="./images/refund.png" alt="refund" />
              <span className="text-[27px] font-medium xl:text-[25px] lg:text-[25px]">
                100% REFUND
              </span>
            </div>
            <div className="flex flex-col items-center gap-8">
              <img src="./images/support.png" alt="support" />
              <span className="text-[27px] font-medium xl:text-[25px] lg:text-[25px]">
                SUPPORT 24/7
              </span>
            </div>
          </div>
          <div className="text-4xl font-medium mb-20">
            <h1>FEATURED PRODUCTS</h1>
          </div>
          <div className="grid grid-cols-3 gap-10 mb-20 xl:gap-5 xl:p-10 lg:p-10">
            {!product.loading &&
              product.products.length &&
              featuredProduct.length &&
              featuredProduct.map((p) => {
                return (
                  <FeaturedProduct
                    key={p.id}
                    product={p}
                    showToastMessage={notify}
                  />
                );
              })}
          </div>
          <div className="relative w-[700px] lg:w-[600px] xl:w-[550px] h-[60px] overflow-hidden  border-[3px] border-solid border-[#BCDDFE] rounded mb-[120px]">
            <input
              type="text"
              placeholder="Search query..."
              className="h-11 w-3/5 leading-[30px] text-lg ml-5 m-[3px] p-0 border-[none] focus:outline-none"
            />
            <button
              value="Save"
              className="flex items-center justify-center rounded absolute h-[55px] leading-[50px] text-[#FFFFFF] w-[22%] font-[bold] m-0 p-0 border-[none] right-0 top-0 hover:text-[#3c4a57] hover:cursor-pointer bg-[#40BFFF] "
            >
              <span className="text-xl font-bold">Search</span>
            </button>
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default Home;
