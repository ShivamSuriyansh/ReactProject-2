// import emailjs from "@emailjs/browser";
async function displayRazorpay(amt) {
  //   const date = new Date();
  //   const months = [
  //     "January",
  //     "February",
  //     "March",
  //     "April",
  //     "May",
  //     "June",
  //     "July",
  //     "August",
  //     "September",
  //     "October",
  //     "November",
  //     "December",
  //   ];

  console.log(amt, ">>>>>>>>>>>>>>>>>>>>");
  //   const txnDate =
  //     date.getDate() +
  //     " " +
  //     months[date.getMonth() + 1] +
  //     ", " +
  //     date.getFullYear();
  //   const txnTime = date.getTime();
  const data = await fetch("http://localhost:4000/razorpay", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ amt }),
  }).then((t) => t.json());
  console.log(data);
  const options = {
    key: process.env.KEY,
    currency: data.currency,
    amount: amt,
    name: "Good Will",
    description: "Wallet Transaction",
    image: "http://localhost:4000/logo.png",
    order_id: data.id,
    handler: function (res) {
      alert("PAYMENT ID ::" + res.razorpay_payment_id);
      alert("ORDER ID :: " + res.razorpay_order_id);
    },
    prefill: {
      name: "Anirudh Jwala",
      email: "suryansh@gmail.com",
      contact: "9999999999",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}
export default displayRazorpay;
