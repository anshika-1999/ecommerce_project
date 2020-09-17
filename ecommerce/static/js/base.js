function updateCart(cart) {
    var sum = 0;
    for (var item in cart) {
        sum = sum + cart[item][0];
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    document.getElementById('cart').innerHTML = sum;
}

function clearCart() {
    cart = JSON.parse(localStorage.getItem('cart'));
    localStorage.clear();
    cart = {};
    updateCart(cart);
    updatingShoppingList(cart);
}
function closeButton(id) {
    var key = id.slice(6)
    delete cart[key];
    updateCart(cart);
    updatingShoppingList(cart);

}

if (localStorage.getItem('cart')==null) {
  var cart = {};
}
else {
  cart = JSON.parse(localStorage.getItem('cart'));
  updateCart(cart);
}
$('.scart').on('click','button.cart',function(){
  var idstr = this.id.toString();
  if (cart[idstr] !=undefined){
    qty = cart[idstr][0] + 1;
    cart[idstr][0]=qty;
  }
  else
  {
    var qty = 1;
    var name = document.getElementById('name'+idstr).innerHTML;
    var price = document.getElementById('price'+idstr).innerHTML;
    var image = document.getElementById('image'+idstr).src;
    console.log(name);
    cart[idstr]=[qty,name,price,image];
  }
updateCart(cart);

});

function updatingShoppingList(cart){
if (localStorage.getItem('cart')==null) {
  var cart = {};
}
else {
  cart = JSON.parse(localStorage.getItem('cart'));
}
if ($.isEmptyObject(cart)) {
  $('#shopping_items').empty();
  mystr = `<p>Your cart is empty, please add some items to your cart before checking out!</p>`
  $('#shopping_items').append(mystr);
    $('#ShoppingMethod').empty();
}
else{
$('#shopping_items').empty();
$('#ShoppingMethod').empty();
var total = 0;
for (item in cart) {
      let name = cart[item][1];
      let qty = cart[item][0];
      let price = cart[item][2];
      let img = cart[item][3].slice(21);
      let id = item;
      let tp = price*qty;
      total = total + price*qty;
      if(total >= 500){
        var shipping = 0;
        var total_full = total;
      } else {
        var shipping = 50;
        var total_full = total + 50;
      }
      mystr = `<tr>
          <td class="product-col">
              <img src="${img}" alt="">
              <div class="p-title">
                  <h5>${name}</h5>
              </div>
          </td>
          <td class="price-col">&#8377 ${price}</td>
          <td class="quantity-col">
              <div class="pro-qty">
                  <input type="text" value="${qty}">
              </div>
          </td>
          <td class="total">&#8377 ${tp}</td>
          <td class="product-close" id="close_${id}" onclick="closeButton(this.id)">x</td>
      </tr>`
      $('#shopping_items').append(mystr);
}

str = `<div class="container">
  <div class="row">
      <div class="col-lg-12">
          <div class="total-info">
              <div class="total-table">
                  <table>
                      <thead>
                          <tr>
                              <th>Total</th>
                              <th>Shipping</th>
                              <th class="total-cart">Total Cart</th>
                          </tr>
                      </thead>
                      <tbody>
                          <tr>
                              <td class="total">&#8377 ${total}</td>
                              <td class="shipping">&#8377 ${shipping}</td>
                              <td class="total-cart-p">&#8377 ${total_full}</td>
                          </tr>
                      </tbody>
                  </table>
              </div>
              <div class="row">
                  <div class="col-lg-12 text-right">
                      <a href="#" class="primary-btn chechout-btn">Proceed to checkout</a>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>`

$('#ShoppingMethod').append(str);

}

}
