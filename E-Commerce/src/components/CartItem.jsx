import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFormCart,
} from "../store/Cart/CartSlice";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const CartItem = ({ cart }) => {
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();

  const increaseItemQuantity = (e) => {
    e.preventDefault();
    dispatch(increaseQuantity(cart));
  };

  const decreaseItemQunaity = (e) => {
    e.preventDefault();
    dispatch(decreaseQuantity(cart));
  };

  const removeItem = (e) => {
    e.preventDefault();
    dispatch(removeFormCart(cart));
  };

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${cart.id}`).then((res) => {
      setProduct({ ...res.data, quantity: cart.quantity });
    });
  }, [cart]);
  return (
    <tr key={product.id}>
      <td>
        <div className="flex justify-center items-center bg-[#FFF7F8] rounded-full w-5 h-5">
          <button onClick={(e) => removeItem(e)} className="text-[#FF4252]">
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
      </td>
      <td className="px-6 py-20 whitespace-nowrap">
        <div className="flex items-center">
          <div className="bg-gray-200 p-4 rounded-lg mx-5">
            <div className="flex-shrink-0 h-20 w-20 mx-5">
              <img
                className="h-20 w-20"
                src={product.image}
                alt={product.title}
              />
            </div>
          </div>
          <div className="ml-4">
            <div className="text-lg text-gray-900">
              {product.title && product.title.slice(0, 30)} ...
            </div>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900">${product.price}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="flex items-center">
          <div className="flex justify-evenly items-center w-[120px] bg-gray-100 rounded">
            <button
              className="p-2 ml-2 text-2xl text-[#33A0FF]  "
              onClick={decreaseItemQunaity}
            >
              -
            </button>
            <input
              className="h-11 w-3/5 leading-[30px] text-xl m-[3px] p-0 appearance-none bg-transparent border-[none] focus:outline-none text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              type="number"
              disabled
              value={product.quantity}
            />
            <button
              className="p-2 mr-2 text-2xl text-[#33A0FF] "
              onClick={increaseItemQuantity}
            >
              +
            </button>
          </div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-lg text-gray-900">
          ${product.price ? (product.price * product.quantity).toFixed(2) : ""}
        </div>
      </td>
    </tr>
  );
};

export default CartItem;
