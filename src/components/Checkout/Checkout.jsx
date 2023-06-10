import React, { useState } from "react";
import styles from "../../styles/styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { server } from "../../server";
import { toast } from "react-toastify";


const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cart } = useSelector((state) => state.cart);
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [userInfo, setUserInfo] = useState(false);
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [address3, setAddress3] = useState("");
  const [zipCode, setZipCode] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [couponCodeData, setCouponCodeData] = useState(null);
  const [discountPrice, setDiscountPrice] = useState(null);
  const navigate = useNavigate();


  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const paymentSubmit = () => {
    if (address1 === "" || address2 === "" || address3 === "" || zipCode === null || country === "" || city === "") {
      toast.error("Please choose your delivery address!")
    } else {
      const shippingAddress = {
        address1,
        address2,
        address3,
        zipCode,
        country,
        city,
      };

      const orderData = {
        cart,
        totalPrice,
        subTotalPrice,
        shipping,
        discountPrice,
        shippingAddress,
        user,
      }

      // update local storage with the updated orders array
      localStorage.setItem("latestOrder", JSON.stringify(orderData));
      navigate("/payment");
    }
  };

  const createaddress = () =>{
    navigate("/profile");
    toast.error("Please choose your delivery address!")
  }

  const subTotalPrice = cart.reduce(
    (acc, item) => acc + item.qty * item.discountPrice,
    0
  );

  // this is shipping cost variable
  const shipping = subTotalPrice + 300;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const name = couponCode;
  
    try {
      const response = await axios.get(`${server}/coupon/get-coupon-value/${name}`);
      const couponCode = response.data.couponCode;
  
      if (!couponCode) {
        // Coupon code doesn't exist
        toast.error("Coupon code doesn't exist!");
        setCouponCode("");
      } else if (couponCode.status !== "active") {
        // Coupon code is inactive
        toast.error("Coupon code is in valid");
        setCouponCode("");
      } else {
        const shopId = couponCode.shopId;
        const couponCodeValue = couponCode.value;
  
        const isCouponValid = cart && cart.filter((item) => item.shopId === shopId);
  
        if (isCouponValid.length === 0) {
          // Coupon code is not valid
          toast.error("Coupon code is not valid");
          setCouponCode("");
        } else {
          const eligiblePrice = isCouponValid.reduce(
            (acc, item) => acc + item.qty * item.discountPrice,
            0
          );
          const discountPrice = (eligiblePrice * couponCodeValue) / 100;
          setDiscountPrice(discountPrice);
          setCouponCodeData(couponCode);
          setCouponCode("");
        }
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid Code");
    }
  };


  const discountPercentenge = couponCodeData ? discountPrice : "";


  const totalPrice = couponCodeData
    ? (subTotalPrice - discountPercentenge + 300).toFixed(2)
    : (subTotalPrice + 300).toFixed(2);



  console.log(discountPercentenge);

  return (
    <div className="w-full flex flex-col items-center py-8">
      <div className="w-[90%] 1000px:w-[70%] block 800px:flex">
        <div className="w-full 800px:w-[65%]">
          <ShippingInfo
            user={user}
            country={country}
            setCountry={setCountry}
            city={city}
            setCity={setCity}
            userInfo={userInfo}
            setUserInfo={setUserInfo}
            address1={address1}
            setAddress1={setAddress1}
            address2={address2}
            setAddress2={setAddress2}
            address3={address3}
            setAddress3={setAddress3}
            zipCode={zipCode}
            setZipCode={setZipCode}
          />
        </div>
        <div className="w-full 800px:w-[35%] 800px:mt-0 mt-8">
          <CartData
            handleSubmit={handleSubmit}
            totalPrice={totalPrice}
            shipping={shipping}
            subTotalPrice={subTotalPrice}
            couponCode={couponCode}
            setCouponCode={setCouponCode}
            discountPercentenge={discountPercentenge}
          />
        </div>
      </div>
      <div
        className={`${styles.button} w-[150px] 800px:w-[280px] mt-10`}
        onClick={paymentSubmit}
      >
        <h5 className="text-white">Go to Payment</h5>
      </div>
    </div>
  );
};

const ShippingInfo = ({
  user,
  country,
  setCountry,
  city,
  setCity,
  userInfo,
  setUserInfo,
  address1,
  setAddress1,
  address2,
  setAddress2,
  address3,
  setAddress3,
  zipCode,
  setZipCode,
}) => {

  return (
    <div className="w-full 800px:w-[95%] bg-white rounded-md p-5 pb-8">
      <h5 className="text-[18px] font-[500]">Shipping Address</h5>
      <br />
      <form>
        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Full Name</label>
            <h5 className="text-[18px] font-[600]">{user && user.name}</h5>
            {/* <input
              type="text"
              value={user && user.name}
              required
              className={`${styles.input} !w-[95%] outline-0`}
            /> */}
          </div>
          <div className="w-[50%]">
            <label className="block pb-2">Email Address</label>
            <h5 className="text-[18px] font-[600]">{user && user.email}</h5>
            {/* <input
              type="email"
              value={user && user.email}
              required
              className={`${styles.input}`}
            /> */}
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2">Phone Number</label>
            <h5 className="text-[18px] font-[600]">{user && user.phoneNumber}</h5>
            {/* <input
              type="number"
              required
              value={user && user.phoneNumber}
              className={`${styles.input} !w-[95%]`}
            /> */}
          </div>
          <div className="w-[50%] hidden">
            <label className="block pb-2">Zip Code</label>
            <input
              type="number"
              value={zipCode}
              // onChange={(e) => setZipCode(e.target.value)}
              required
              disabled
              className={`${styles.input}`}
            />
          </div>
        </div>

        <div className="w-full flex pb-3">
          <div className="w-[50%]">
            <label className="block pb-2 hidden">Country</label>
            <h5 className="text-[18px] font-[600]">{country}</h5>
            {/* <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={country}
              disabled
            // onChange={(e) => setCountry(e.target.value)}
            >
              <option className="block pb-2" value="">
                country
              </option>
              {Country &&
                Country.getAllCountries().map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select> */}
          </div>
          <div className="w-[50%]">
            <label className="block pb-2 hidden">Province</label>
            <h5 className="text-[18px] font-[600]">{city}</h5>
            {/* <select
              className="w-[95%] border h-[40px] rounded-[5px]"
              value={city}
              disabled
            // onChange={(e) => setCity(e.target.value)}
            >
              <option className="block pb-2" value="">
                province
              </option>
              {State &&
                State.getStatesOfCountry(country).map((item) => (
                  <option key={item.isoCode} value={item.isoCode}>
                    {item.name}
                  </option>
                ))}
            </select> */}
          </div>
          <div className="w-[50%]">
            <label className="block pb-2 hidden">City / Municipality</label>
            <h5 className="text-[18px] font-[600]">{address1}</h5>
            {/* <input
              type="address"
              required
              disabled
              value={address1}
              // onChange={(e) => setAddress1(e.target.value)}
              className={`${styles.input} !w-[95%]`}
            /> */}
          </div>
        </div>

        <div className="w-full flex pb-3">

          <div className="w-[50%]">
            <label className="block pb-2 hidden">House # / Street </label>
            <h5 className="text-[18px] font-[600]">{address2}</h5>
            {/* <input
              type="address"
              value={address2}
              // onChange={(e) => setAddress2(e.target.value)}
              required
              disabled
              className={`${styles.input}`}
            /> */}
          </div>

          <div className="w-[50%]">
            <label className="block pb-2 hidden">House # / Street</label>
            <h5 className="text-[18px] font-[600]">{address3}</h5>
            {/* <input
              type="address"
              value={address2}
              // onChange={(e) => setAddress2(e.target.value)}
              required
              disabled
              className={`${styles.input}`}
            /> */}
          </div>
        </div>

        <div></div>
      </form>
      <div className="w-full flex pb-3 gap-5">
        <div
          className={`${styles.button} w-[50%] h-[40px] text-center rounded-[3px] mt-8 cursor-pointer`}
          onClick={() => setUserInfo(!userInfo)}
        >
          <h5 className="text-white"> Choose From saved address</h5>
        </div>
        {/* <div
          className={`${styles.button} w-[50%] h-[40px] text-center rounded-[3px] mt-8 cursor-pointer`}
        >
          <h5 className="text-white">Create Delivery Address</h5>
        </div> */}
      </div>

      {/* <h5
        className="text-[18px] cursor-pointer inline-block"
        onClick={() => setUserInfo(!userInfo)}
      >
        Choose From saved address
      </h5> */}
      
      {userInfo && (
        <div>
          {user &&
            user.addresses.map((item, index) => (
              <div className="w-full flex mt-1">
                <input
                  type="checkbox"
                  className="mr-3"
                  value={item.addressType}
                  onClick={() =>
                    setAddress1(item.address1) ||
                    setAddress2(item.address2) ||
                    setAddress3(item.address3) ||
                    setZipCode(item.zipCode) ||
                    setCountry(item.country) ||
                    setCity(item.city)
                  }
                />
                <h2>{item.addressType}</h2>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

const CartData = ({
  handleSubmit,
  totalPrice,
  shipping,
  subTotalPrice,
  couponCode,
  setCouponCode,
  discountPercentenge,
}) => {
  return (
    <div className="w-full bg-[#fff] rounded-md p-5 pb-8">
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">subtotal:</h3>
        <h5 className="text-[18px] font-[600]">₱ {subTotalPrice}</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">shipping:</h3>
        <h5 className="text-[18px] font-[600]">₱ 300</h5>
      </div>
      <br />
      <div className="flex justify-between">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Discount:</h3>
        <h5 className="text-[18px] font-[600] text-rose-700">
          - {discountPercentenge ? "₱" + discountPercentenge.toString() : null}
        </h5>
      </div>
      <br />
      <div className="flex justify-between border-t pt-3">
        <h3 className="text-[16px] font-[400] text-[#000000a4]">Total:</h3>
        <h5 className="text-[18px] font-[600]">₱ {totalPrice}</h5>
      </div>

      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className={`${styles.input} h-[40px] pl-2`}
          placeholder="Coupoun code"
          value={couponCode}
          onChange={(e) => setCouponCode(e.target.value)}
          required
        />
        <input
          className={`w-full h-[40px] border border-[#f63b60] text-center text-[#f63b60] rounded-[3px] mt-8 cursor-pointer`}
          required
          value="Apply code"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Checkout;
