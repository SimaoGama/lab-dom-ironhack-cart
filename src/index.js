// ITERATION 1

const cartProduct = document.querySelector('#cart tbody');

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotal = product.querySelector('.subtotal span');

  console.log(quantity.value); //loging to see the value amount

  let result = (subtotal.innerHTML = price.innerHTML * quantity.value);

  return result; // return de forma a poder usar os valores na proxima função
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.querySelectorAll('.product');
  const totalPrice = document.querySelector('#total-value span');

  // const productsArray = [...products] fazer spread se usar o getElementById que retorna uma HTML collection
  // console.log(productsArray)

  let grandTotal = 0;

  products.forEach(product => {
    let productSubtotal = updateSubtotal(product);
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

  const productRemove = target.parentNode.parentNode;

  cartProduct.removeChild(productRemove);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  console.log('creating a new product ...');
  //... your code goes here

  const newProductName = document.querySelector(
    '.create-product input[type="text"]'
  );
  const newProductValue = document.querySelector(
    `.create-product input[type="number"]`
  );

  console.log(newProductName);
  console.log(newProductValue);

  const newProductRow = document.createElement('tr');

  newProductRow.className = 'product';

  newProductRow.innerHTML = `<td class="name">
<span>${newProductName.value}</span>
</td>
<td class="price">$<span>${newProductValue.value}</span></td>
<td class="quantity">
<input type="number" value="0" min="0" placeholder="Quantity" />
</td>
<td class="subtotal">$<span>0</span></td>
<td class="action">
<button class="btn btn-remove">Remove</button>
</td>`;

  cartProduct.appendChild(newProductRow);

  // remove Btn

  const newRemoveBtn = newProductRow.querySelector('.btn-remove');
  newRemoveBtn.addEventListener('click', removeProduct);
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here part 4
  const removeBtn = document.querySelectorAll('.btn-remove');
  removeBtn.forEach(button => {
    button.addEventListener('click', removeProduct);
  });

  // part 5

  const createNewProduct = document.getElementById('create');
  createNewProduct.addEventListener('click', createProduct);
});
