import React from "react";
import classes from "./Header.module.css";
import { SlLocationPin } from "react-icons/sl";
import { BsSearch } from "react-icons/bs";
import { BiCart } from "react-icons/bi";
import LowerHeader from "./LowerHeader";
const Header = () => {
  return (
    <>
      <section>
        <div className={classes.header_container}>
          <div className={classes.logo_container}>
            {/* logo  */}
            <a href="/">
              <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="Amazon logo"
              />
            </a>
            {/* delivary  */}
            <div className={classes.delivary}>
              <span>
                <SlLocationPin />
              </span>
              <div>
                <p>Delevered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>
          {/* search section  */}
          <div className={classes.search}>
            <select name="" id="">
              <option value="">All</option>
            </select>
            <input type="text" />
            <BsSearch size={25} />
          </div>

          {/* right side link  */}
          <div className={classes.order_container}>
            <a href="" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_the_United_States_%281912-1959%29.svg/640px-Flag_of_the_United_States_%281912-1959%29.svg.png"
                alt=""
              />
              <select name="" id="">
                <option value="">EN</option>
              </select>
            </a>

            {/* three components  */}
            <a href="">
              <p>sign in</p>
              <span>Account & Lists</span>
            </a>
            {/* orders  */}
            <a href="">
              <p>returns</p>
              <span>& Orders</span>
            </a>
            {/* cart  */}
            <a href="" className={classes.cart}>
              <BiCart size={35} />
              <span>0</span>
            </a>
          </div>
        </div>
      </section>
      <LowerHeader/>
    </>
  );
};

export default Header;
