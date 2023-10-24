import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Homepage = () => {
  const [orders, setorders] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/order")
      .then((res) => {
        setorders(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e.message));
  }, []);

  const removeorder = (id) => {
    axios
      .delete("http://localhost:8000/order/" + id)
      .then(() => {
        alert("order deleted");
        window.location.reload();
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const toggle = (id) => {
    axios
      .put("http://localhost:8000/order/" + id)
      .then(() => {
        alert("order updated");
        window.location.reload();
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  const hide = () => {
    axios
      .get("http://localhost:8000/order/undelivered")
      .then((res) => {
        setorders(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e.message));
  };

  const show = () => {
    axios
      .get("http://localhost:8000/order/delivered")
      .then((res) => {
        setorders(res.data);
        console.log(res);
      })
      .catch((e) => console.log(e.message));
  };

  return (
    <div className="container pt-5">
      <div className="d-flex justify-content-between align-items-center my-4">
        <h1>Pizza Order</h1>
        <Link to="/new" className="btn btn-outline-dark">
          Order a pizza
        </Link>
      </div>
      <div className="d-flex justify-content-between align-items-center my-4">
        <p>Find stores in your area!</p>
        <div>
          <button className="btn btn-outline-dark" onClick={hide}>
            Hide delivered pizzas
          </button>
          <button className="btn btn-outline-dark ms-3" onClick={show}>
            Show delivered pizzas
          </button>
        </div>
      </div>

      <table className="table text-center mt-5">
        <thead>
          <th>Delivery Time</th>
          <th>Pizza</th>
          <th>Size</th>
          <th>Deliverd</th>
          <th>Actions</th>
        </thead>
        <tbody>
          {orders.map((el) => (
            <tr key={el._id}>
              <td>{new Date(el.deliveryTime).toLocaleString()}</td>
              <td>{el.pizza}</td>
              <td>{el.sizes}</td>
              <td>
                <input
                  type="checkbox"
                  checked={el.isdeliverd}
                  className="me-3"
                  onChange={() => toggle(el._id)}
                />
                <label>{el.isdeliverd.toString()}</label>
              </td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => removeorder(el._id)}
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Homepage;
