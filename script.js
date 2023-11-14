var slides = document.querySelectorAll(".slide");
var currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = "none";
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = "block";
}

showSlide(currentSlide);

setInterval(function() {
  showSlide(currentSlide + 1);
}, 2000);







// the plus and minus buttons
const plusBtns = document.querySelectorAll(".plus-btn");
const minusBtns = document.querySelectorAll(".minus-btn");

// event listeners to each button
plusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputEl = btn.previousElementSibling;
    let quantity = parseInt(inputEl.value);
    quantity++;
    inputEl.value = quantity;
  });
});

minusBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const inputEl = btn.nextElementSibling;
    let quantity = parseInt(inputEl.value);
    if (quantity > 1) {
      quantity--;
      inputEl.value = quantity;
    }
  });
});

const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");

/*// event listeners to each add to cart button
addToCartBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const item = btn.closest(".item");
    const itemName = item.querySelector("h3").textContent;
    const itemPrice = item.querySelector("p").textContent;

    // new cart item element
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <h3>${itemName}</h3>
      <p>${itemPrice}</p>
      <button class="delete-btn" type="button" name="button">Delete</button>
    `;

    // Appending the cart item to the cart container
    const cartContainer = document.querySelector(".cart-container");
    cartContainer.appendChild(cartItem);

    // event listener to the delete button of the newly added cart item
    const deleteBtn = cartItem.querySelector(".delete-btn");
    deleteBtn.addEventListener("click", () => {
      cartItem.remove();
    });
  });
});



//delete button
const deleteBtns = document.querySelectorAll(".delete-btn");


deleteBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const cartItem = btn.closest(".cart-item");
    cartItem.remove();
  });
});*/

//heart button
const heartBtn = document.querySelector(".heart-btn");

heartBtn.addEventListener("click", () => {
  heartBtn.classList.toggle("clicked");
});


// calling the + and - button to change both the price and quantity on click
const priceDisplay = document.getElementById('price-display');
  const plusButton = document.getElementById('plus-button');
  const minusButton = document.getElementById('minus-button');
  
  let price = 10.00; // initial price
  

  plusButton.addEventListener('click', () => {
    price += 10.00; // increase price by $10.00
    priceDisplay.innerText = `$${price.toFixed(2)}`; // update price display
  });

  minusButton.addEventListener('click', ()=>{
    if (price > 10) {
    price -= 10.00; // decrease price by $10.00
    priceDisplay.innerText = `$${price.toFixed(2)}`;
     }
    
  })


/*
// select all cart items
const cartItems = document.querySelectorAll(".cart-item");

// initialize total price to zero
let totalPrice = 0;

// loop through each cart item
cartItems.forEach(item => {
  // get the item price and quantity
  const itemPrice = parseFloat(item.querySelector("p").textContent.replace("$", ""));
  const itemQuantity = parseInt(item.querySelector("input").value);

  // calculate the item total price
  const itemTotalPrice = itemPrice * itemQuantity;

  // add the item total price to the total price
  totalPrice += itemTotalPrice;
});

// display the total price
console.log(`Total Price: $${totalPrice.toFixed(2)}`);*/