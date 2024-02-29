import { useSelector } from "react-redux";
import { cartState } from "../store/Cart/CartSlice";
import {
  subTotalPrice,
  totalPrice,
  shippingFee,
} from "../store/Cart/CartSelector";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const shippingPrice = shippingFee(state);
  const totalAmmount = totalPrice(state);

  const formatCurrency = (currency) => {
    const num = parseFloat(currency);
    if (num % 1 !== 0) {
      return `$${num.toFixed(2)}`;
    } else {
      return `$${num.toFixed()}`;
    }
  };

  return !carts.length ? (
    <div className="flex justify-center items-center w-100 h-[600px] my-5 text-center text-2xl text-danger">
      <h3>
        <span>
          You don't have any products in your cart.
          <br />
        </span>
        <Link
          to="/POCs/E-Commerce/"
          className="text-dark text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          <span>Go for shoping</span>
        </Link>
      </h3>
    </div>
  ) : (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="my-20 mx-40">
        <table className="w-[100%]">
          <thead>
            <tr>
              <th className="border-b border-gray-200"></th>
              <th
                scope="col"
                className="w-[50%] px-6 py-3 text-xl font-mono text-left font-medium  uppercase tracking-wider border-b border-gray-200"
              >
                Product
              </th>
              <th
                scope="col"
                className="w-[10%] px-6 py-3 text-xl font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Price
              </th>
              <th
                scope="col"
                className="w-[20%] px-6 py-3 text-xl font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Qty
              </th>
              <th
                scope="col"
                className="w-[20%] px-6 py-3 text-xl font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Unit Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {carts.map((cart) => (
              <CartItem key={cart.id} cart={cart} />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-20 mx-40 mr-[280px]">
        <div className="relative w-[400px] h-[60px] overflow-hidden mb-2.5 border-[3px] border-solid border-[#F1F3F4] rounded">
          <input
            type="text"
            placeholder="Voucher Code"
            className="h-11 w-3/5 leading-[30px] text-xl ml-5 m-[3px] p-0 border-[none] focus:outline-none"
          />
          <button
            value="Save"
            className="flex items-center justify-center rounded absolute h-[60px] leading-[50px] text-[#FFFFFF] w-[35%] font-[bold] m-0 p-0 border-[none] right-0 top-0 hover:text-[#3c4a57] hover:cursor-pointer bg-[#33A0FF]"
          >
            <span className="text-xl font-mono">Redeem</span>
          </button>
        </div>
        <div className="flex flex-col justify-evenly w-[400px] h-[350px] p-10 ">
          <div className="flex justify-between">
            <span className="text-lg">Subtotal</span>
            <span className="text-lg">{formatCurrency(subTotal)}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg">Shipping fee</span>
            <span className="text-lg">{formatCurrency(shippingPrice)}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg">Coupon</span>
            <span className="text-lg">No</span>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-between mt-10 font-semibold font-mono">
            <span className="text-2xl">TOTAL</span>
            <span className="text-2xl">{formatCurrency(totalAmmount)}</span>
          </div>
          <button className="flex items-center mt-3 rounded justify-center w-full h-[50px] text-[#FFFFFF] font-[bold] bg-[#33A0FF] hover:text-[#3c4a57] hover:cursor-pointer">
            <span className="text-xl font-mono">Check out</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
