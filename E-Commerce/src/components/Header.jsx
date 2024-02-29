import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FaRegUser } from "react-icons/fa";
import { BsCart2 } from "react-icons/bs";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllCategories } from "../store/Category/CategorySlice";
import { totalCartItem } from "../store/Cart/CartSelector";
import Breadcrumbs from "./Breadcrumbs";

const Header = () => {
  const { categories } = useSelector((state) => state.categories);
  const location = useLocation();
  let state = useSelector((state) => state);
  let totalItems = totalCartItem(state);
  let dispatch = useDispatch();

  const breadcrumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "");

  useEffect(() => {
    dispatch(fetchAllCategories());
  }, [dispatch]);

  return (
    <header>
      {/* header first-part */}
      <div className="p-5 flex justify-between">
        <div className="flex gap-2 border-none ml-20 text-xl xxl:text-lg xl:text-md lg:text-[1rem]">
          <select
            className="bg-transparent cursor-pointer"
            name="language"
            id="language"
          >
            <option value="english">EN</option>
            <option value="arabic">AR</option>
          </select>
          <select
            className="bg-transparent cursor-pointer"
            name="currency"
            id="currency"
          >
            <option value="USD">USD</option>
            <option value="AED">AED</option>
          </select>
        </div>
        <div className="flex justify-evenly items-center gap-10 mr-40 xxl:mr-30 xl:mr-20 lg:mr-20 text-xl xxl:text-lg xl:text-md lg:text-[1rem]">
          <div className="flex justify-center items-center gap-2 cursor-pointer">
            <FaRegUser />
            <span>My Profile</span>{" "}
          </div>
          <div className="relative cursor-pointer">
            <Link to="/cart">
              <BsCart2 size={24} />
              <span
                className="absolute -top-1.5 -right-2 bg-[#FB7181] w-4 h-4 rounded-full  
                inline-flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">
                  {totalItems}
                </span>
              </span>
            </Link>
          </div>
          <div className="cursor-pointer">Items</div>
          <div className="flex gap-2 items-center cursor-pointer">
            <span className="text-[#939393]">$0.00</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <hr />
      {/* header second-part */}
      <div className="flex justify-between items-center p-10 pr-40 xxl:pr-30 xl:pr-20 lg:pr-30">
        <div className="flex justify-center items-center gap-2 ml-10">
          <img src="./images/logo.png" alt="logo" />
          <span className="text-xl font-bold xxl:text-lg xl:text-[1.2rem] lg:text-[1rem]">
            E-Comm
          </span>
        </div>
        <ul className="flex gap-[8rem] xxl:gap-[6rem] xl:gap-[4rem] lg:gap-[2rem]  text-2xl font-medium xxl:text-xl xl:text-md lg:text-[1rem]">
          <li
            className={`${
              !breadcrumbs.length || breadcrumbs[0] === "cart"
                ? "text-[#40BFFF]"
                : ""
            } hover:text-[#40BFFF]`}
          >
            <Link to="/">HOME</Link>
          </li>
          {categories &&
            categories
              .filter((item, index) => index < 3)
              .map((category) => (
                <li
                  key={category}
                  className={`${
                    breadcrumbs.length &&
                    breadcrumbs[0] === "category" &&
                    decodeURIComponent(breadcrumbs[1]) === category
                      ? "text-[#40BFFF]"
                      : ""
                  }  hover:text-[#40BFFF]`}
                >
                  <Link to={`/category/${category}`}>
                    {category.toUpperCase()}
                  </Link>
                </li>
              ))}
          <li
            className={`${
              breadcrumbs.length && breadcrumbs[0] === "contact"
                ? "text-[#40BFFF]"
                : ""
            } hover:text-[#40BFFF]`}
          >
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      {/* header third part breadcrumbs */}
      {breadcrumbs.length && breadcrumbs[0] !== "category" ? (
        <Breadcrumbs />
      ) : (
        ""
      )}
    </header>
  );
};

export default Header;
