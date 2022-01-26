const User = require("../models/User");
const jwt = require("jsonwebtoken");
// const Bus = require("../firebase");
const {
  initializeApp,
  applicationDefault,
  cert,
} = require("firebase-admin/app");
const {
  getFirestore,
  Timestamp,
  FieldValue,
} = require("firebase-admin/firestore");
const serviceAccount = require("../oyaanow-2021-firebase-adminsdk.json");
initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore();

// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: "", password: "" };

  // incorrect email
  if (err.message === "incorrect id") {
    errors.email = "That id is not registered";
  }

  // incorrect password
  if (err.message === "incorrect password") {
    errors.password = "That password is incorrect";
  }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = "that id is already registered";
    return errors;
  }

  // validation errors
  if (err.message.includes("user validation failed")) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
};

// create json web token
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, "Oyaanow secret", {
    expiresIn: maxAge,
  });
};


// The home page 

module.exports.homepage_get = (req, res)=>{
  res.render('home');
}
// controller actions
let globprice = "ok";
let user;

// getting items from firestore

let users = [];
module.exports.getbuses_get = async (reeq, res) => {
  const busRef = db.collection("Buses");
  const snapshot = await busRef.get();
  snapshot.forEach((doc) => {
    users.push({ ...doc.data(), id: doc.id });
  });
  res.render("getbuses", { bus: users });
};

// the bus form adding buses from the admin panel

// this bus_selected_get is to render id of the selcted bus on buy and the user flls the form
let paramsId;
module.exports.bus_selected_get = async (req, res) => {
  paramsId = req.params.id;
  // const busRef = db.collection("Buses");
  // const snapshot = await busRef.get();
  // snapshot.forEach((doc) => {
  //   users.push({ ...doc.data(), id: doc.id });
  // });
  // getting data from specific id
  const selectedID = db.collection("Buses").doc(paramsId);
  
  
  const doc = await selectedID.get();
  const dataPrice = doc.data().price;
  if (!doc.exists) {
    console.log("No such document!");
  } else {
    console.log("Document data:", doc.data());
    console.log(`you are to pay ${dataPrice}`);
  }
  res.render("bus", { details: users });
  console.log(paramsId);
};

module.exports.loadbus_post = async (req, res) => {
  const busdata = req.body;
  const company_name = busdata.name_of_company;
  const from = busdata.going_from;
  const to = busdata.going_to;
  const departure_date = busdata.departure_date;
  const departure_time = busdata.departure_time;
  let set_price = 0;
  const plate_number = busdata.plate_number;
  const number_of_seat = busdata.number_of_available_seat;
  const bus_type = busdata.bus__type;

  if (bus_type === "Hayas" && from === "Benin" && to === "Lagos") {
    set_price = 2000;
  } else if (bus_type === "Classic" && from === "Benin" && to === "Abuja") {
    set_price = 3000;
  } else {
    set_price = "Price error";
  }

  const fire = await db.collection("Buses").add({
    company: company_name,
    from: from,
    to: to,
    departure_date: departure_date,
    departure_time: departure_time,
    price: set_price,
    plate_number: plate_number,
    number_of_seat: number_of_seat,
    type: bus_type,
  });
  console.log("Added document with ID: ", fire.id);
  res.end();
};

module.exports.customer_post = (req, res) => {
  globprice = req.body.p;
  user = req.body;
  // At the top there i referenced user object which i need to convert to string
  res.render("customer", { price: globprice });
};
module.exports.customer_get = (req, res) => {
  res.render("customer", { price: globprice });
};
module.exports.details_get = (req, res) => {
  res.render("details");
};
module.exports.paid_post = (req, res) => {
  console.log(req.body);
  console.log("done it again");
  res.render("template");
};
module.exports.reg_get = (req, res) => {
  res.render("register");
};

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.choose_get = (req, res) => {
  res.render("choose_bus");
};

// global variable for the seats
let one;
let two;
let three;
let four;
let five;
module.exports.choose_post = async (req, res) => {
  one = req.body.one;
  two = req.body.two;
  three = req.body.three;
  four = req.body.four;
  five = req.body.five;
  console.log(paramsId);  
  // getting data from specific id
  db.collection("Buses").doc(paramsId).collection("Seats").doc().set({one, two, three, four, five })
  // const seatIndex = req.body.position;



  // const deres = await cityRef.update({ one, two, three, four, five});
  console.log(req.body);
  console.log(`This is ${one}`);
};

module.exports.book_get = (req, res) => {
  console.log("Working on it");
  res.send("This is booking rendered");
};


// This is the section am working on for the payment gateway
module.exports.book_post = (req, res) => {
  console.log(req.body);
};

// Express pdf generated
module.exports.pdf_get = (req, res) => {
  res.render("template", { user });
};

// For the registeration page am totally done with this part v
module.exports.reg_post = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create({ name, email, password });
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(201).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req, res) => {
  res.cookie("jwt", "", { maxAge: 1 });
  res.redirect("/login");
};
