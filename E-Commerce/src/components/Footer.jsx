import { faFacebookF, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#BCDDFE]">
      <div className="flex flex-col w-full pt-[180px] pb-10 ">
        <div className="flex ml-[185px]  gap-80 mb-10">
          <div className="w-[260px] ">
            <div className="flex justify-start items-center gap-2">
              <img src="./images/logo.png" alt="logo" />
              <span className="text-xl font-bold">E-Comm</span>
            </div>
            <p className="mt-2 font-light text-sm">
              Lorem ipsum is simply dummy text of the printing and typesetting
              industry.Lorem Ipsum has been the industry's standard dummy text
              ever.Since the 1500s, when an unknown printer.
            </p>
          </div>
          <div className="md:mr-12 mb-4 md:mb-0 w-[250px] text-sm ">
            <h4 className="text-lg mb-4">Follow Us</h4>
            <p className="mt-2">
              Since the 1500s when an unknown printer took a galley of type and
              scrambled.
            </p>
            <div className="flex mt-4 space-x-4">
              <a href="#" className="hover:text-[#ffff]">
                <FontAwesomeIcon
                  icon={faFacebookF}
                  style={{ color: "#385C8E" }}
                />
              </a>
              <a href="#" className="hover:text-light-blue-300"></a>
              <a href="#" className="hover:text-light-blue-300">
                <FontAwesomeIcon
                  icon={faTwitter}
                  style={{ color: "#03A9F4" }}
                />
              </a>
            </div>
          </div>
          <div className="w-40">
            <h4 className="text-lg mb-4">Contact Us</h4>
            <p className="mt-2 font-light">
              E-comm: 4578 Marmora Road, Glasgow D04 89GR
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4  place-items-center ml-5 mb-20 ">
          <div className="flex flex-col gap-5">
            <h4 className="text-lg ">Information</h4>
            <ul className="mt-2 font-light">
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg ">Service</h4>
            <ul className="mt-2 font-light">
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg ">My Account</h4>
            <ul className="mt-2 font-light">
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5">
            <h4 className="text-lg ">Our Offers</h4>
            <ul className="mt-2 font-light">
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Information
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-light-blue-300">
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mx-auto bg-[#ffff] w-[75%] h-[1px] mb-10"></div>
        <div className="flex justify-between mx-auto w-[74%]">
          <span className="text-[#C1C8CE]">
            &copy; 2018 Ecommerce theme by wwww.bisenbaev.com
          </span>
          <div className="flex">
            <img
              src="./images/brands.png"
              alt="payment cards"
              className="h-6 mr-4"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
