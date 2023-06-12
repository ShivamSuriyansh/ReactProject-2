require("dotenv").config();

const app = require("express")();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const cors = require("cors");

const shortid = require("shortid");
const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.KEY,
  key_secret: process.env.SECRET_KEY,
});
app.use(cors());

app.post("/razorpay", async (req, res) => {
  console.log(req.body.amt);
  const payment_capture = 1;
  const currency = "INR";
  const options = {
    amount: req.body.amt * 100,
    currency,
    receipt: shortid.generate(),
    payment_capture,
  };
  try {
    const response = await razorpay.orders.create(options);
    res.json({
      id: response.id,
      currency: response.currency,
      amount: response.amount,
    });
  } catch (error) {
    console.log(error);
  }
});

app.listen(4000, () => {
  console.log("server is running at 4000");
});
