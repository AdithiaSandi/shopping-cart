/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { setTotal, getTotal } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";

const ProceedForm = ({ items }) => {
  const first = useRef(true);
  const total = useSelector(getTotal);
  const dispatch = useDispatch();

  const tempTotal = items
    .map((item) => parseFloat(item.price) * parseFloat(item.count))
    .reduce((total, num) => parseFloat((total += num)).toFixed(2));

  //   console.log(tempTotal);

  const handleCheckout = () => {
    dispatch(setTotal(tempTotal));
  };

  useEffect(() => {
    if (first.current) {
      first.current = false;
      return;
    }
    // alert(total);
  }, [total]);

  return (
    <div
      className="proceed-container"
      style={{
        // width: "30vw",
        display: "flex",
        flexDirection: "column",
        gap: "2vh",
        // minWidth: "160px",
        maxWidth: "60vw"
      }}
    >
      <div
        className="proceed-checkout-container"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "1rem",
          boxShadow: "1px 1px 10px whitesmoke, -1px -1px 10px whitesmoke",
          borderRadius: "7px",
        }}
      >
        <h4 style={{
            marginBottom: "2rem"
        }}>The total amount of</h4>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>Temporary amount</p>
          <p>{tempTotal}</p>
        </div>

        <div
          style={{
            boxShadow: "0px 3px whitesmoke",
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "1rem"
          }}
        >
          <p>Shipping</p>
          <p>Gratis</p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p>
            <b>The total amount of &#40;including VAT&#41;</b>
          </p>
          <p>
            <b>{tempTotal}</b>
          </p>
        </div>

        <Button onClick={() => handleCheckout()}>GO TO CHECKOUT</Button>
      </div>
      <div
        className="coupons-container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "1rem",
          boxShadow: "1px 1px 10px whitesmoke, -1px -1px 10px whitesmoke",
          borderRadius: "7px",
        }}
      >
        <span>Add discount code &#91;optional&#93;</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-chevron-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
    </div>
  );
};

export default ProceedForm;
