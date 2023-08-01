/* eslint-disable react/prop-types */

import { useDispatch, useSelector } from "react-redux";
import {
  addWishlist,
  decrement,
  getWishlist,
  increment,
  removeItem,
} from "../features/counter/counterSlice";
import { useEffect } from "react";

const CartItem = ({ item, index }) => {
  const dispatch = useDispatch();
  const wishlist = useSelector(getWishlist);

  const handleRemove = () => {
    dispatch(removeItem(index));
  };

  const handleWishlist = () => {
    dispatch(addWishlist(index));
  };

  useEffect(() => {
    if (index !== 0) {
      document.getElementsByClassName("item-" + index)[0].style.borderTop =
        "3px solid whitesmoke";
    }
  }, []);

  return (
    <div
      className={"item-" + index}
      key={index}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        padding: "1rem 0rem",
      }}
    >
      <img
        src=""
        alt=""
        style={{
          minWidth: "160px",
          width: "20%",
          height: "15rem",
          backgroundColor: "grey",
        }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          width: "75%",
        }}
      >
        <div
          className="detail-left"
          style={{
            width: "70%",
            height: "max-content",
          }}
        >
          <h5>{item.name}</h5>
          <p>
            {item.type.toLocaleUpperCase()} {item.color.toLocaleUpperCase()}
          </p>
          <p>COLOR: {item.color.toLocaleUpperCase()}</p>
          <p>SIZE: {item.size}</p>
        </div>

        <div
          className="detail-right"
          style={{
            outline: "2px solid lightgray",
            borderRadius: "3px",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
            textAlign: "center",
            minWidth: "30%",
            height: "max-content",
            marginBottom: "1rem",
          }}
        >
          <button
            style={{
              backgroundColor: "white",
              border: "none",
              width: "35%",
            }}
            onClick={() => dispatch(decrement(index))}
          >
            -
          </button>
          <span
            style={{
              borderLeft: "2px solid lightgray",
              borderRight: "2px solid lightgray",
              minWidth: "30%",
            }}
          >
            {item.count}
          </span>
          <button
            onClick={() => dispatch(increment(index))}
            style={{
              backgroundColor: "white",
              border: "none",
              width: "35%",
            }}
          >
            +
          </button>
        </div>

        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          <div
            className="action-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "2rem",
            }}
          >
            <button
              className="action-remove"
              style={{
                backgroundColor: "white",
                border: "none",
                textAlign: "start",
              }}
              onClick={() => handleRemove()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
              </svg>{" "}
              REMOVE ITEM
            </button>
            <button
              className="action-wishlist"
              style={{
                backgroundColor: "white",
                border: "none",
                textAlign: "start",
              }}
              onClick={() => handleWishlist()}
            >
              {wishlist.indexOf(index) === -1 ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart"
                    viewBox="0 0 16 16"
                  >
                    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                  </svg>{" "}
                  MOVE TO WISHLIST
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-heart-fill"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                    />
                  </svg>{" "}
                  WISHLISTED
                </>
              )}
            </button>
          </div>
          <div className="item-total">
            <b>$ {item.price * item.count}</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
