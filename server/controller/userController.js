import User from "../model/userModel.js";
import Employee from "../model/employeeModel.js";

export const create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists" });
    }
    const savedData = await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "User created successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData || userData.length === 0) {
      return res.status(404).json({ message: "no user data found." });
    }
    res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUserById = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found." });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found." });
    }
    const updatedData = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    // res.status(200).json(updatedData);
    res.status(200).json({ message: "User updated successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found." });
    }
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const registerEmployee = async (req, res) => {
  try {
    const newEmployee = new Employee(req.body);
    const { email } = newEmployee;

    const employeeExist = await Employee.findOne({ email });
    if (employeeExist) {
      return res.status(400).json({ message: "Employee already exists" });
    }
    const savedEmployee = await newEmployee.save();
    // res.status(200).json(savedData);
    res.status(200).json({ message: "Registration successful, please login." });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const loginEmployee = async (req, res) => {
  try {
    const { email, password } = req.body;
    const existingEmployee = await Employee.findOne({ email });

    if (existingEmployee) {
      if (req.body.password == existingEmployee.password) {
        res.send({ message: "Login Successfull", user: existingEmployee });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};
