import React, { useState } from "react";
import { firebase, db } from "../Firebase";

const Add = () => {
  const [id, setId] = useState("");
  const [myname, setMyname] = useState("");
  const [myemail, setMyemail] = useState("");
  const [product, setProduct] = useState("");
  const [qty, setQty] = useState("");

  const handleAddData = (e) => {
    e.preventDefault();
    db.collection("dummyData")
      .add({
        id: id,
        myname: myname,
        myEmail: myemail,
        product: product,
        qty: qty,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        console.log("added");
      })
      .catch((err) => console.log(err));

    setId("");
    setMyemail("");
    setMyname("");
    setProduct("");
    setQty("");
  };
  return (
    <div>
      <h3>Add order : </h3>
      <form action="" onSubmit={handleAddData}>
        <input
          className="form-control"
          type="text"
          placeholder="Enter id"
          onChange={(e) => setId(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Enter customer name"
          onChange={(e) => setMyname(e.target.value)}
        />
        <input
          className="form-control"
          type="text"
          placeholder="Enter customer email"
          onChange={(e) => setMyemail(e.target.value)}
        />
        <select
          className="form-control"
          type="text"
          placeholder="Enter Product"
          onChange={(e) => setProduct(e.target.value)}
        >
          <option value="">---Select the product---</option>
          <option value="product1">Product1</option>
          <option value="product2">Product2</option>
          <option value="product3">Product3</option>
        </select>
        <input
          className="form-control"
          type="text"
          placeholder="Enter Qty"
          onChange={(e) => setQty(e.target.value)}
        />
        <button className="btn btn-secondary" type="submit">
          Add
        </button>
      </form>
    </div>
  );
};

export default Add;
