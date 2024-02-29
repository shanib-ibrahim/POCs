import { useDispatch } from "react-redux";
import { addToCarts } from "../store/Cart/CartSlice";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const Product = (props) => {
  const product = props.product;
  const showToastMessage = props.showToastMessage;
  const dispatch = useDispatch();

  const addToCart = (e) => {
    e.preventDefault();
    let item = {
      id: parseInt(product.id),
      quantity: 1,
      price: product.price,
    };
    dispatch(addToCarts(item));
    showToastMessage();
  };

  console.log(product);

  return (
    <div className="flex flex-col gap-4 items-center m-10 border-solid border-2 border-[#F6F7F8]">
      <div className="group relative flex justify-center items-center  bg-[#F6F6F6]  h-[272.5px] w-[294.5px]  overflow-hidden">
        {product.rating.rate > 4.5 && (
          <div className="absolute flex justify-center items-center top-5 left-5 bg-[#FF4858] h-[33px] text-[#FFFFFF] rounded-sm w-[64px]">
            <span>HOT</span>
          </div>
        )}
        <div className="flex-shrink-0 h-40 w-40 mb-10">
          <img className="h-40 w-40" src={product.image} alt={product.title} />
        </div>
        <div className="absolute flex  gap-2 justify-center items-center w-[90%] h-[80%] flex justify-center bg-[#FFFFFF] opacity-0 group-hover:opacity-[95%] duration-500">
          <div className="flex  cursor-pointer justify-center items-center rounded-full h-10 w-10 border-solid border-2 border-[#F1F8FE] hover:bg-[#D9D9D9] border-[#33A0FF]">
            <CiHeart
              style={{
                color: "#33A0FF",
                fontSize: "1.2em",
                strokeWidth: "2px",
              }}
            />
          </div>
          <div
            className="flex cursor-pointer justify-center items-center rounded-full h-10 w-10 border-solid border-2 border-[#F1F8FE] hover:bg-[#D9D9D9] border-[#33A0FF] "
            onClick={(e) => addToCart(e)}
          >
            <IoCartOutline
              style={{
                color: "#33A0FF",
                fontSize: "1.2em",
                strokeWidth: "5px",
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between h-[100px] ">
        <div className="flex justify-center  items-center ml-4">
          <div className="text-lg font-bold text-[#223263] text-gray-900 flex-shrink-0  w-60">
            {product.title.slice(0, 30)} ...
          </div>
        </div>
        <div className="flex justify-start px-[16px] py-[12px] w-full">
          <p className="flex justify-center items-center ">
            <span className="text-xl font-bold text-[#40BFFF] mr-2">
              ${product.price}
            </span>
            <span className=" text-[#9098B1] line-through mr-10">$7</span>
            <span className="font-bold text-[#FB7181]">24% off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
