import ReactStars from "react-rating-stars-component";
import { useDispatch } from "react-redux";
import { addToCarts } from "../store/Cart/CartSlice";
import { CiHeart } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";

const FeaturedProduct = (props) => {
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
    <div className="flex gap-5 justify-center items-center w-[476px] h-[188px]">
      <div className="group relative flex justify-center items-center bg-[#F6F7F8] h-[154px] w-[154px] ">
        <div className="flex-shrink-0 h-[120px] w-[120px]">
          <img
            className="h-[120px] w-[120px]"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="absolute flex  gap-2 justify-center items-center w-[90%] h-[80%] flex justify-center bg-[#FFFFFF] opacity-0 group-hover:opacity-[95%] duration-500">
          <div className="flex cursor-pointer justify-center items-center rounded-full h-10 w-10 border-solid border-2 border-[#F1F8FE] hover:bg-[#D9D9D9] border-[#33A0FF]">
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
      <div className="flex flex-col gap-2 w-60">
        <span className="text-lg">{product.title.slice(0, 30)} ...</span>
        <ReactStars
          count={5}
          value={product.rating.rate}
          isHalf={true}
          emptyIcon={<i className="far fa-start"></i>}
          halfIcon={<i className="fa fa-star-half-alt"></i>}
          fullIcon={<i className="fa fa-star"></i>}
          activeColor="#ffd700"
        ></ReactStars>
        <p>
          <span className="text-xl font-bold text-[#40BFFF] mr-2">
            ${product.price}
          </span>
          <span className=" text-[#9098B1] line-through mr-10">$299</span>
        </p>
      </div>
    </div>
  );
};

export default FeaturedProduct;
