import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
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
        <div className="lex gap-2 border-none ml-20 text-xl">
          <select className="bg-transparent" name="language" id="language">
            <option value="english">EN</option>
            <option value="arabic">AR</option>
          </select>
          <select className="bg-transparent" name="currency" id="currency">
            <option value="USD">USD</option>
            <option value="AED">AED</option>
          </select>
        </div>
        <div className="flex justify-evenly gap-10 mr-40 text-xl">
          <div>
            <FontAwesomeIcon className="mr-2" icon={faUser} />
            <span>My Profile</span>{" "}
          </div>
          <div className="relative">
            <Link to="/cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span
                className="absolute -top-2 -right-3 bg-[#FB7181] w-4 h-4 rounded-full  
                inline-flex items-center justify-center"
              >
                <span className="text-white text-xs font-bold">
                  {totalItems}
                </span>
              </span>
            </Link>
          </div>
          <div>Items</div>
          <div className="flex gap-2 items-center">
            <span className="text-[#939393]">$0.00</span>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </div>
        </div>
      </div>
      <hr />
      {/* header second-part */}
      <div className="flex justify-between p-10 pr-40">
        <div className="ml-10">
          <span className="text-xl font-bold">E-Comm</span>
        </div>
        <ul className="flex gap-[100px] text-2xl font-medium ">
          <li
            className={
              !breadcrumbs.length || breadcrumbs[0] === "cart"
                ? "text-[#40BFFF]"
                : ""
            }
          >
            <Link to="/">HOME</Link>
          </li>
          {categories &&
            categories
              .filter((item, index) => index < 3)
              .map((category) => (
                <li
                  key={category}
                  className={
                    breadcrumbs.length &&
                    breadcrumbs[0] === "category" &&
                    decodeURIComponent(breadcrumbs[1]) === category
                      ? "text-[#40BFFF]"
                      : ""
                  }
                >
                  <Link to={`/category/${category}`}>
                    {category.toUpperCase()}
                  </Link>
                </li>
              ))}
          <li
            className={
              breadcrumbs.length && breadcrumbs[0] === "contact"
                ? "text-[#40BFFF]"
                : ""
            }
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
