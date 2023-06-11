import React, { useEffect, useState } from "react";
import styles from "../../styles/styles";
import { BsFillBagFill } from "react-icons/bs";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllOrdersOfShop } from "../../redux/actions/order";
import { backend_url, server } from "../../server";
import axios from "axios";
import { toast } from "react-toastify";

const OrderDetails = () => {
  const { orders, isLoading } = useSelector((state) => state.order);
  const { seller } = useSelector((state) => state.seller);
  const dispatch = useDispatch();
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    dispatch(getAllOrdersOfShop(seller._id));
  }, [dispatch]);

  const data = orders && orders.find((item) => item._id === id);

  const orderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/update-order-status/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        navigate("/dashboard-orders");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  };

  const refundOrderUpdateHandler = async (e) => {
    await axios
      .put(
        `${server}/order/order-refund-success/${id}`,
        {
          status,
        },
        { withCredentials: true }
      )
      .then((res) => {
        toast.success("Order updated!");
        dispatch(getAllOrdersOfShop(seller._id));
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
  }

  console.log(data?.status);

  const formatTime = (time) => {
    if (time) {
      const options = {
        hour12: true,
        hour: 'numeric',
        minute: 'numeric',
        timeZone: 'Asia/Manila', // Change to Manila, Philippines timezone
      };

      return new Date(time).toLocaleString('en-US', options);
    }
    return "";
  }


  return (
    <div className={`py-4 min-h-screen ${styles.section}`}>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center">
          <BsFillBagFill size={30} color="crimson" />
          <h1 className="pl-2 text-[25px]">Order Details</h1>
        </div>
        <Link to="/dashboard-orders">
          <div
            className={`${styles.button} !bg-[#fce1e6] !rounded-[4px] text-[#e94560] font-[600] !h-[45px] text-[18px]`}
          >
            Order List
          </div>
        </Link>
      </div>

      <div className="w-full flex items-center justify-flex gap-16 pt-6">
        <h2 className="pt-3 text-[20px] font-[600]">Order Status:</h2>
        {data?.status !== "Processing refund" && data?.status !== "Refund Success" && data?.status !== "Cancel Refund" && (
          <>
            {(data?.status === "Cancelled Order" || data?.status === "Delivered" || data?.status === "Out of Stock") ? (
              <h2 className="pt-3 text-[20px] font-[600] text-red-500">{data?.status}</h2>
            ) : (
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
              >
                {data?.status === "Processing" && (
                  <>
                    <option value="Processing">Processing</option>
                    <option value="Packed">Packed</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </>
                )}
                {data?.status === "Packed" && (
                  <>
                    <option value="Packed">Packed</option>
                    <option value="In Transit">In Transit</option>
                  </>
                )}
                {data?.status === "In Transit" && (
                  <>
                    <option value="In Transit">In Transit</option>
                    <option value="Delivered">Delivered</option>
                  </>
                )}
              </select>
            )}
          </>
        )}

        {
          data?.status === "Processing refund" ? (
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
            >
              {["Processing refund", "Cancel Refund", "Refund Success"].map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
            </select>
          ) : (
            (data?.status === "Refund Success" || data?.status === "Cancel Refund") ? (
              <h2 className="pt-3 text-[20px] font-[600] text-red-500">{data?.status}</h2>
            ) : null
          )
        }

        {data?.status !== "Cancelled Order" && data?.status !== "Out of Stock" && data?.status !== "Delivered" && data?.status !== "Cancel Refund" && data?.status !== "Refund Success" && (
          <div
            className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#E94560] font-[600] !h-[45px] text-[18px]`}
            onClick={data?.status !== "Processing refund" ? orderUpdateHandler : refundOrderUpdateHandler}
          >
            Update Status
          </div>
        )}
      </div>

      <div className="w-full flex items-center gap-80 pt-6 ">
        <h5 className="text-black decoration-3">
          Order ID: <span >#{data?._id?.slice(0, 8)}</span>
        </h5>
        <h5 className="text-black decoration-3">
          Order Placed on: <span>{data?.createdAt?.slice(0, 10)}</span> <span>{formatTime(data?.createdAt)}</span>
        </h5>
      </div>
      <div className="w-full flex items-center justify-between pt-6 ">
        <h5 className="text-[#0000FF] decoration-3">
          Order Packed on: <span>{data?.packedAt?.slice(0, 10)}</span> <span>{formatTime(data?.packedAt)}</span>
        </h5>
        <h5 className="text-[#0000FF] decoration-3">
          Order In Transit on: <span>{data?.InTransitAt?.slice(0, 10)}</span> <span>{formatTime(data?.InTransitAt)}</span>
        </h5>
        <h5 className="text-[#0000FF] decoration-3" >
          Order Delivered on: <span>{data?.deliveredAt?.slice(0, 10)}</span> <span>{formatTime(data?.deliveredAt)}</span>
        </h5>
      </div>

      {/* order items */}
      <br />
      <br />
      {data &&
        data?.cart.map((item, index) => (
          <div className="w-full flex items-start mb-5">
            <img
              src={`${backend_url}/${item.images[0]}`}
              alt=""
              className="w-[80x] h-[80px]"
            />
            <div className="w-full">
              <h5 className="pl-3 text-[20px]">{item.name}</h5>
              <h5 className="pl-3 text-[20px] text-[#00000091]">
                ₱ {item.discountPrice} x {item.qty}
              </h5>
            </div>
          </div>
        ))}

      <div className="border-t w-full">
        <h5 className="pt-3 text-[18px] text-right">
          Shipping Fee: <strong>₱ 300</strong>
        </h5>
        <h5 className="pt-3 text-[18px] text-right">
          Total Price: <strong>₱ {data?.totalPrice}</strong>
        </h5>
      </div>
      <br />
      <br />
      <div className="w-full 800px:flex items-center">
        <div className="w-full 800px:w-[60%]">
          <h4 className="pt-3 text-[20px] font-[600]">Shipping Address:</h4>
          <h4 className="pt-3 text-[20px]">
            {data?.shippingAddress.address3 +
              " " +
              data?.shippingAddress.address1 +
              " " +
              data?.shippingAddress.address2}
          </h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.country}</h4>
          <h4 className=" text-[20px]">{data?.shippingAddress.city}</h4>
          <h4 className=" text-[20px]">{data?.user?.phoneNumber}</h4>
        </div>
        <div className="w-full 800px:w-[40%]">
          <h4 className="pt-3 text-[20px]">Payment Info:</h4>
          <h4>
            Status:{" "}
            {data?.paymentInfo?.status ? data?.paymentInfo?.status : "Not Paid"}
          </h4>
        </div>
      </div>
      <br />
      <br />
      {/* <h4 className="pt-3 text-[20px] font-[600]">Order Status:</h4>
      {data?.status !== "Processing refund" && data?.status !== "Refund Success" && data?.status !== "Cancel Refund" &&  (
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
        >
          {[
            "Processing",
            "Packed",
            "In Transit",
            "Cancel Order",
            "Out of Stock",
            "Delivered",
          ]
            .slice(
              [
                "Processing",
                "Packed",
                "In Transit",
                "Cancel Order",
                "Out of Stock",
                "Delivered",
              ].indexOf(data?.status)
            )
            .map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
        </select>
      )}
      {
        data?.status === "Processing refund" || data?.status === "Refund Success"  || data?.status === "Cancel Refund" ? (
          <select value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-[200px] mt-2 border h-[35px] rounded-[5px]"
          >
            {[
              "Processing refund",
              "Cancel Refund",
              "Refund Success",
            ]
              .slice(
                [
                  "Processing refund",
                  "Cancel Refund",
                  "Refund Success",
                ].indexOf(data?.status)
              )
              .map((option, index) => (
                <option value={option} key={index}>
                  {option}
                </option>
              ))}
          </select>
        ) : null
      }

      <div
        className={`${styles.button} mt-5 !bg-[#FCE1E6] !rounded-[4px] text-[#E94560] font-[600] !h-[45px] text-[18px]`}
        onClick={data?.status !== "Processing refund" ? orderUpdateHandler : refundOrderUpdateHandler}
      >
        Update Status
      </div> */}
    </div>
  );
};

export default OrderDetails;
