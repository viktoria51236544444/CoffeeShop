export const getLocalStorage = () => {
  const coffeeCart = JSON.parse(localStorage.getItem("coffeeCart"));
  return coffeeCart;
};

export const totalPriceResult = (products) => {
  const totalPrice = products.reduce((acc, curr) => acc + curr.subPrice, 0);
  return totalPrice;
};

export const getProductsCountInCoffeeCart = () => {
  let coffeeCart = getLocalStorage();
  return coffeeCart ? coffeeCart.products.length : 0;
};
export const getLikeCount = () => {
  let likeCoffee = getLocalStorage();
  return likeCoffee ? likeCoffee.likeCoffee : 0;
};

export const subPriceResult = (elem) => {
  return elem.item.price * elem.count;
};
