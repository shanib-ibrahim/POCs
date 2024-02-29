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

  return (
    <div className="flex flex-col gap-4 items-center m-10 border-solid border-2 border-[#F6F7F8] overflow-hidden">
      <div className="group relative flex justify-center items-center  bg-[#F6F6F6]  h-[17.031rem] w-[18.406rem] lg:h-[12rem]  overflow-hidden">
        {product.rating.rate > 4.5 && (
          <div className="absolute flex justify-center items-center top-4 left-4 lg:top-[1rem] xl:top-[0.8rem] lg:left-[2.5rem] bg-[#FF4858] h-[2.063rem] lg:h-[1.6rem] text-[#FFFFFF] rounded-sm w-[4rem] lg:w-[3.2rem]">
            <span>HOT</span>
          </div>
        )}
        <div className="flex-shrink-0 h-40 w-40 mb-10 lg:w-[8rem] lg:h-[8rem]">
          <img
            className="h-40 w-40 lg:w-[8rem] lg:h-[8rem]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="absolute flex  gap-2 justify-center items-center w-[90%] h-[80%] xl:w-[80%] xl:h-[80%] lg:w-[70%] lg:h-[80%] flex justify-center bg-[#FFFFFF] opacity-0 group-hover:opacity-[95%] duration-500">
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
      <div className="flex flex-col justify-between h-[6.25rem] ">
        <div className="flex justify-center  items-center ml-4">
          <div className="text-lg lg:text-[1rem] font-bold text-[#223263] text-gray-900 flex-shrink-0  w-60">
            {product.title.slice(0, 30)} ...
          </div>
        </div>
        <div className="flex justify-start px-[16px] py-[12px] w-full">
          <p className="flex justify-center items-center ">
            <span className="text-xl lg:text-lg font-bold text-[#40BFFF] mr-2">
              ${product.price}
            </span>
            <span className=" text-[#9098B1] lg:text-sm line-through mr-10 lg:mr-[4rem]">
              $7
            </span>
            <span className="font-bold text-[#FB7181] lg:text-sm">24% off</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Product;
