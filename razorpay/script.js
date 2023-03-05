// Link for the documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration

// Add button code documentation:
// https://razorpay.com/docs/payments/payment-gateway/web-integration/standard/build-integration#code-to-add-pay-button


document.getElementById("rzp-button1").onclick = function (e) {
  let amt = JSON.parse(localStorage.getItem("payment") || "[]");

let total = amt[amt.length-1]
console.log(total);
  var options = {
    key: "rzp_test_zQU6sSczYVNA0O", // Enter the Key ID generated from the Dashboard
    amount: `${total}` * 100, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    currency: "INR",
    name: "MyShop Checkout",
    description: "This is your order", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    theme: {
      color: "#000",
    },
    callback_url : "../shop/index.html",
    image:
      "https://www.mintformations.co.uk/blog/wp-content/uploads/2020/05/shutterstock_583717939.jpg",
    "handler": function (response){
        localStorage.removeItem("cart");
        console.log(response.razorpay_payment_id);
        // window.location.hred = "../shop/index.html"
      }
  };

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  rzpy1.on('payment.failed', function (response){
    console.log(response);
})
  
  // clear mycart - localStorage
  e.preventDefault();
};
