
const heartButtons = document.querySelectorAll('.heart-button');
      
// Ajout d'un écouteur d'événement click sur chaque bouton en forme de cœur
heartButtons.forEach(button => {
  button.addEventListener('click', function() {
    this.classList.toggle('selected');
  });
});


const minusButtons = document.querySelectorAll('.minus-button');


minusButtons.forEach(button => {
  button.addEventListener('click', function() {
    const quantityEl = this.nextElementSibling;
    let quantity = parseInt(quantityEl.textContent);
    
    if (quantity > 0) {
      quantity--;
      quantityEl.textContent = quantity;
      
      updateTotalPrice();
    }
  });
});


const plusButtons = document.querySelectorAll('.plus-button');


plusButtons.forEach(button => {
  button.addEventListener('click', function() {
    const quantityEl = this.previousElementSibling;
    let quantity = parseInt(quantityEl.textContent);
    
    quantity++;
    quantityEl.textContent = quantity;
    
    updateTotalPrice();
  });
});


function updateTotalPrice() {
  const totalPriceEl = document.querySelector('#total-price');
  let totalPrice = 0;
  
  const cartItems = document.querySelectorAll('.cart-item');
  cartItems.forEach(item => {
    const priceEl = item.querySelector('p:nth-child(3)');
    const price = parseInt(priceEl.textContent.slice(1));
    
    const quantityEl = item.querySelector('.quantity');
    const quantity = parseInt(quantityEl.textContent);
    
    totalPrice += price * quantity;
  });
  
  totalPriceEl.textContent = '$' + totalPrice;
}