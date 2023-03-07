// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

 const price = product.querySelector(".price span")
 const quantity = product.querySelector(".quantity input")
 let subtotal = product.querySelector(".subtotal span")

 console.log(quantity.value) //loging to see the value amount

 let result = subtotal.innerHTML = price.innerHTML * quantity.value;

 return result; // return de forma a poder usar os valores na proxima função
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll(".product")
  const totalPrice = document.querySelector("#total-value span")

  // const productsArray = [...products] fazer spread se usar o getElementById que retorna uma HTML collection
  // console.log(productsArray)

  let grandTotal = 0;
  
  products.forEach(product => {
    let productSubtotal = updateSubtotal(product)
    grandTotal += productSubtotal;
  });

  
  // ITERATION 3

  totalPrice.innerHTML = grandTotal;

}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
