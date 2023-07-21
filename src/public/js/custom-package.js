function IDR(value) {
  let rupiah = '';
  const angkaRev = value.toString().split('').reverse().join('');
  for (let i = 0; i < angkaRev.length; i++) {
    if (i % 3 == 0) {
      rupiah += angkaRev.substr(i, 3) + '.';
    }
  }

  return (
    'Rp. ' +
    rupiah
      .split('', rupiah.length - 1)
      .reverse()
      .join('')
  );
}

function incrementProduct(id) {
  const product = document.getElementById(`name-product-${id}`);
  const price = document.getElementById(`price-product-${id}`);
  const amountPriceProduct = document.getElementById(
    `amount-price-product-${id}`
  );
  const quantity = parseInt(product.value);
  const elementQuantity = document.getElementsByClassName(
    `product-quantity-${id}`
  );
  const inputEstimatedCost = document.getElementById('input-estimated-costs');
  const estimatedCost = document.getElementById('estimated-costs');
  const btnRequest = document.getElementById('btn-request');

  if (quantity >= 0 && quantity < 20) {
    const totalQuantity = quantity + 1;
    product.value = totalQuantity;

    for (let index = 0; index < elementQuantity.length; index++) {
      elementQuantity[index].innerText = totalQuantity.toString();
    }

    const amountPrice = totalQuantity * parseInt(price.value);
    amountPriceProduct.innerText = IDR(amountPrice);

    const totalEstimatedCost =
      parseInt(inputEstimatedCost.value) + parseInt(price.value);
    inputEstimatedCost.value = totalEstimatedCost;
    estimatedCost.innerText = IDR(totalEstimatedCost);
  }

  if (parseInt(inputEstimatedCost.value) == 0) {
    btnRequest.disabled = true;
  } else {
    btnRequest.disabled = false;
  }
}

function decrementProduct(id) {
  const product = document.getElementById(`name-product-${id}`);
  const quantity = parseInt(product.value);
  const price = document.getElementById(`price-product-${id}`);
  const amountPriceProduct = document.getElementById(
    `amount-price-product-${id}`
  );
  const elementQuantity = document.getElementsByClassName(
    `product-quantity-${id}`
  );
  const inputEstimatedCost = document.getElementById('input-estimated-costs');
  const estimatedCost = document.getElementById('estimated-costs');
  const btnRequest = document.getElementById('btn-request');

  if (quantity > 0 && quantity <= 20) {
    const totalQuantity = quantity - 1;
    product.value = totalQuantity;

    for (let index = 0; index < elementQuantity.length; index++) {
      elementQuantity[index].innerText = totalQuantity.toString();
    }

    const amountPrice = totalQuantity * parseInt(price.value);
    amountPriceProduct.innerText = IDR(amountPrice);

    const totalEstimatedCost =
      parseInt(inputEstimatedCost.value) - parseInt(price.value);
    inputEstimatedCost.value = totalEstimatedCost;
    estimatedCost.innerText = IDR(totalEstimatedCost);
  }

  if (parseInt(inputEstimatedCost.value) == 0) {
    btnRequest.disabled = true;
  } else {
    btnRequest.disabled = false;
  }
}
