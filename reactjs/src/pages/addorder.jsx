import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Addorder = () => {
  const [pizza, setpizza] = useState("");
  const [sizes, setsizes] = useState("");
  const [notes, setnotes] = useState("");
  const [delivery, setdelivery] = useState("");
  const nav = useNavigate();

  const addorder = (e) => {
    e.preventDefault();

    axios
      .get("http://localhost:8000/order/able")
      .then((data) => {
        if (data.data) {
          axios
            .post("http://localhost:8000/order", {
              pizza,
              sizes,
              notes,
              deliveryTime: delivery,
            })
            .then(() => {
              alert("order added");
              nav("/");
            })
            .catch(() => {
              alert("something went wrong");
            });
        } else {
          alert("Max 10 deliveries, try again later!");
        }
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form style={{ width: "600px" }} onSubmit={addorder}>
        <h1 className="mb-5 text-center">Add order</h1>
        <div className="mb-3">
          <label htmlFor="pizza" className="form-label">
            Pizza
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setpizza(e.target.value)}
          >
            <option value="Papperoni">Papperoni</option>
            <option value="Chesse">Chesse</option>
            <option value="Combination">Combination</option>
            <option value="Philly Chesse steak">Philly Chesse steak</option>
            <option value="Hawaiiain">Hawaiiain</option>
            <option value="Veggie">Veggie</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="sizes" className="form-label">
            Sizes
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onChange={(e) => setsizes(e.target.value)}
          >
            <option value="Single">Single</option>
            <option value="Small">small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="notes" className="form-label">
            Notes
          </label>
          <textarea
            maxLength={25}
            className="form-control"
            rows={5}
            onChange={(e) => setnotes(e.target.value)}
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="delivery" className="form-label">
            Delivery
          </label>
          <input
            type="datetime-local"
            className="form-control"
            onChange={(e) => setdelivery(e.target.value)}
          />
        </div>

        <button type="submit" className="btn  w-100 btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addorder;
