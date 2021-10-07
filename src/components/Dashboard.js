import React, { useState, useEffect } from "react";
import { db, firebase } from "../Firebase";
import Add from "./Add";
import "./Dashboard.css";
import Data from "./DummyData.json";

const Dashboard = ({ name, email, img }) => {
  const [dataMain, setDataMain] = useState([]);
  console.log(name, email);
  const handleSubmit = () => {
    firebase.auth().signOut();
  };

  const deleteHandler = (id) => {
    const cardMain = document.getElementById("cardMain");
    cardMain.remove(id);
  };

  const handleAddOrder = () => {
    document.getElementById("add").style.display = "block";
  };

  useEffect(() => {
    db.collection("dummyData")
      .orderBy("timestamp", "desc")
      .onSnapshot((snaphot) => {
        setDataMain(
          snaphot.docs.map((doc) => ({
            dummyData: doc.data(),
            id: doc.id,
          }))
        );
      });
  }, []);

  return (
    <div className="App">
      <div className="row container">
        <div className="col-md-2 side-bar">
          <h4>Dashboard</h4>
          <span>User Details : </span>
          <img src={img} />
          <p>
            <strong>{name.toUpperCase()}</strong>
          </p>
          <p>{email}</p>
          <p>LoggedIn with Google✔</p>
          <button className="btn btn-primary" onClick={handleSubmit}>
            Sign out
          </button>
          <button className="btn btn-warning" onClick={handleAddOrder}>
            + Add order
          </button>
        </div>
        <div className="col-md-10 main-screen container">
          <div id="add" style={{ display: "none" }}>
            <Add />
          </div>
          <h1 className="text-center mb-4">Random Orders ⬇⬇</h1>
          {dataMain.map((data) => (
            <div id="cardMain" key={data.id} className="card mb-4">
              <div className="card-body">
                Order{" "}
                <span style={{ color: "blue" }}>#{data.dummyData.id}</span>
              </div>
              <div className="card-body">
                <strong>{data.dummyData.myname}</strong>
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {data.dummyData.myEmail}
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {data.dummyData.product}
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {data.dummyData.qty}
              </div>
              <div className="row container p-5">
                <button
                  className="btn btn-danger col-md-6"
                  style={{ width: "30%", borderRadius: "25px" }}
                  onClick={() => {
                    deleteHandler(data.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
          {Data.map((myData) => (
            <div id="cardMain" key={myData.id} className="card mb-4">
              <div className="card-body">
                Order <span style={{ color: "blue" }}>#{myData.id}</span>
              </div>
              <div className="card-body">
                <strong>{myData.customer_name}</strong>
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {myData.customer_email}
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {myData.product}
              </div>
              <div className="card-body" style={{ color: "gray" }}>
                {myData.quantity}
              </div>
              <div className="row container p-5">
                <button
                  className="btn btn-danger col-md-6"
                  style={{ width: "30%", borderRadius: "25px" }}
                  onClick={() => {
                    deleteHandler(myData.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
