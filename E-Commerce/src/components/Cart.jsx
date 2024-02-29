import { useSelector } from "react-redux";
import { cartState } from "../store/Cart/CartSlice";
import {
  subTotalPrice,
  totalPrice,
  shippingFee,
} from "../store/Cart/CartSelector";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  let state = useSelector((state) => state);
  let { carts } = useSelector(cartState);
  const subTotal = subTotalPrice(state);
  const shippingPrice = shippingFee(state);
  const totalAmmount = totalPrice(state);

  const notify = () =>
    toast.success("Item added to cart successfully !", {
      position: "top-right",
    });

  const removeNotify = () =>
    toast.error("Item successfully removed from cart !", {
      position: "top-right",
    });

  const formatCurrency = (currency) => {
    const num = parseFloat(currency);
    if (num % 1 !== 0) {
      return `$${num.toFixed(2)}`;
    } else {
      return `$${num.toFixed()}`;
    }
  };

  return !carts.length ? (
    <div className="flex flex-col justify-center items-center w-100 h-[600px] my-5 text-center text-2xl lg:text-xl text-danger">
      <h3 className="mb-5">
        <span className="mb-5">
          You don't have any products in your cart.
          <br />
        </span>
      </h3>
      <h3>
        <Link
          to="/"
          className="text-dark cursor-pointer text-white hover:text-[#3c4a57] bg-[#40BFFF] hover:ring-blue-300 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 "
        >
          <span>Go for shoping</span>
        </Link>
      </h3>
    </div>
  ) : (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="my-20 mx-40 lg:mx-20 xl:mx-[6rem]">
        <table className="w-[100%]">
          <thead>
            <tr>
              <th className="border-b border-gray-200"></th>
              <th
                scope="col"
                className="w-[50%] px-6 py-3 text-xl lg:text-lg font-mono text-left font-medium  uppercase tracking-wider border-b border-gray-200"
              >
                Product
              </th>
              <th
                scope="col"
                className="w-[10%] px-6 py-3 text-xl lg:text-lg  font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Price
              </th>
              <th
                scope="col"
                className="w-[20%] px-6 py-3 text-xl lg:text-lg  font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Qty
              </th>
              <th
                scope="col"
                className="w-[20%] px-6 py-3 text-xl lg:text-lg  font-mono text-left font-medium uppercase tracking-wider border-b border-gray-200"
              >
                Unit Price
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {carts.map((cart) => (
              <CartItem
                key={cart.id}
                cart={cart}
                notify={notify}
                removeNotify={removeNotify}
              />
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between my-20 mx-40 xl:mx-[6rem] mr-[280px] xl:mr-[8rem]">
        <div className="relative w-[400px] xl:w-[22rem] lg:w-[20rem] h-[60px] overflow-hidden mb-2.5 border-[3px] border-solid border-[#F1F3F4] rounded">
          <input
            type="text"
            placeholder="Voucher Code"
            className="h-11 w-3/5 leading-[30px] text-xl xl:text-lg ml-5 m-[3px] p-0 border-[none] focus:outline-none"
          />
          <button
            value="Save"
            className="flex cursor-pointer items-center justify-center rounded absolute h-[60px] leading-[50px] text-[#FFFFFF] w-[35%] font-[bold] m-0 p-0 border-[none] right-0 top-0 hover:text-[#3c4a57] hover:cursor-pointer bg-[#40BFFF]"
          >
            <span className="text-xl xl:text-lg font-mono">Redeem</span>
          </button>
        </div>
        <div className="flex flex-col justify-evenly w-[400px] h-[350px] p-10 ">
          <div className="flex justify-between">
            <span className="text-lg xl:text-[1.2rem]">Subtotal</span>
            <span className="text-lg xl:text-[1.2rem]">
              {formatCurrency(subTotal)}
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg xl:text-[1.2rem]">Shipping fee</span>
            <span className="text-lg xl:text-[1.2rem]">
              {formatCurrency(shippingPrice)}
            </span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="text-lg xl:text-[1.2rem]">Coupon</span>
            <span className="text-lg xl:text-[1.2rem]">No</span>
          </div>
          <hr className="mt-5" />
          <div className="flex justify-between mt-10 font-semibold font-mono">
            <span className="text-2xl lg:text-[1.5rem]">TOTAL</span>
            <span className="text-2xl lg:text-[1.5rem]">
              {formatCurrency(totalAmmount)}
            </span>
          </div>
          <button className="flex cursor-pointer items-center mt-3 rounded justify-center w-full h-[50px] lg:h-[45px] text-[#FFFFFF] font-[bold] bg-[#40BFFF] hover:text-[#3c4a57] hover:cursor-pointer">
            <span className="text-xl font-mono">Check out</span>
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
export default Cart;
