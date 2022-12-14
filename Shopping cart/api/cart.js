import { size, includes, remove } from "lodash";

export function getProductsCart() {
  const cart = localStorage.getItem("cart");
  if (!cart) {
    return null;
  } else {
    const products = cart.split(",");
    return products;
  }
}

export function addProductCart(product) {
  const cart = getProductsCart();

  if (!cart) {
    localStorage.setItem("cart", product);
    console.log("Producto añadido al carrito");
  } else {
    const productFound = includes(cart, product);
    if (productFound) {
      console.warning("Este producto ya está en el carrito");
    } else {
      cart.push(product);
      localStorage.setItem("cart", cart);
      console.log("Producto añadido correctamente");
    }
  }
}

export function countProductsCart() {
  const cart = getProductsCart();

  if (!cart) {
    return 0;
  } else {
    return size(cart);
  }
}

export function removeProductCart(product) {
  const cart = getProductsCart();
  const cartFiltered = cart.filter(prod => prod != product)

  if (cart.length > 0) {
    localStorage.setItem("cart", cartFiltered);
  } else {
    localStorage.removeItem("cart");
  }
}