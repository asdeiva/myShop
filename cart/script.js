var data = JSON.parse(localStorage.getItem("cart") || "[]");
let checkout = document.getElementById('checkout')

console.log(data);
// {
//     "id": 1,
//     "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
//     "price": 109.95
// }

fetchProduct(data)

function fetchProduct(data) {
    var output = document.getElementById('cartItems')
    var checkitems = document.getElementById('checkitems')
    checkitems.innerHTML = "";
    output.innerHTML = "";
    var totalprice = 0
    for (var i = 0; i < data.length; i++) {
      var product = `
                        <div class="item">
                          <img src="${data[i].image}" alt="Item" />
                          <div class="info">
                          <div class="price">${data[i].title}</div> <br>
                            <div class="row">
                              <div class="price">$${data[i].price}</div>
                            </div>
                            <button id="rmBtn" onclick="removeFromCart(${data[i].id})">Remove From Cart</button>
                        `;
    output.innerHTML += product;
    totalprice += parseInt(data[i].price);
    // let nameArr = data[i.title].split(' ')
    // console.log(nameArr);
    var items = `
                <li>
                ${data[i].title} $${data[i].price}
                </li>
        

    
                `
                checkitems.innerHTML += items;

    }
  
    document.getElementById('total').innerHTML = totalprice;
    var payment = JSON.parse(localStorage.getItem("payment") || "[]");
    payment.push(totalprice)
    localStorage.setItem("payment",JSON.stringify(payment))
    
  }

  function removeFromCart(id){
    var results = data.filter((obj) => obj.id == id);
    var toRm = results;
    data.splice(data.findIndex(a => a.id === toRm.id) , 1)
    localStorage.setItem("cart",JSON.stringify(data));
    location.reload();
    console.log(data);
  }

  function payNow(){
    if(!data.length){
      alert("<<== No Items In Your Cart \n Shop somthing==>>")
      window.location.href = "../shop/index.html"
    }
    else{
      window.location.href = "/razorpay/index.html"
    }
    
  }
  

//   <h6>Total:  $${totalprice}</h6>