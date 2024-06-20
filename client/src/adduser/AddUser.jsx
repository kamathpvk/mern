import React, { useState } from "react";
import "./adduser.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    number: "",
    designation: "",
    gender: "",
    courses: [],
    profileImage: null,
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    console.log(user);
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" });
        // console.log("user created successfully");
        navigate("/");
      })
      .catch((error) => {
        console.log("error submitting: " + error);
      });
  };

  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary">
        <i class="fa-solid fa-backward"></i> Back
      </Link>

      <h3>Add new employee</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your name"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="email">E-mail:</label>
          <input
            type="email"
            id="email"
            onChange={inputHandler}
            name="email"
            autoComplete="off"
            placeholder="Enter your e-mail"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="number">Number:</label>
          <input
            type="text"
            id="number"
            onChange={inputHandler}
            name="number"
            autoComplete="off"
            placeholder="Enter your number"
          />
        </div>
        <div className="inputGroup">
          <label htmlFor="designation">Designation:</label>
          <select
            id="designation"
            onChange={inputHandler}
            name="designation"
            defaultValue=""
          >
            <option value="" disabled>
              Select your designation
            </option>
            <option value="HR">HR</option>
            <option value="Manager">Manager</option>
            <option value="Sales">Sales</option>
          </select>
        </div>
        <div className="inputGroup">
          <label>Gender:</label>
          <div>
            <input
              type="radio"
              id="male"
              onChange={inputHandler}
              name="gender"
              value="M"
            />
            <label htmlFor="male">Male</label>
          </div>
          <div>
            <input
              type="radio"
              id="female"
              onChange={inputHandler}
              name="gender"
              value="F"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        {/* <div className="inputGroup">
          <label>Courses:</label>
          <div>
            <input
              type="checkbox"
              id="mca"
              onChange={inputHandler}
              name="courses"
              value="MCA"
            />
            <label htmlFor="mca">MCA</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bca"
              onChange={inputHandler}
              name="courses"
              value="BCA"
            />
            <label htmlFor="bca">BCA</label>
          </div>
          <div>
            <input
              type="checkbox"
              id="bsc"
              onChange={inputHandler}
              name="courses"
              value="BSC"
            />
            <label htmlFor="bsc">BSC</label>
          </div>
        </div>
        <div className="inputGroup">
          <label htmlFor="profileImage">Profile Image:</label>
          <div>(accepts only jpg png and jpeg format)</div>
          <input
            type="file"
            id="profileImage"
            onChange={inputHandler}
            name="profileImage"
            accept=".jpg, .jpeg, .png"
          />
        </div> */}
        <div className="inputGroup">
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
