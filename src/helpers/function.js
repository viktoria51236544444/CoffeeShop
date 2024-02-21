export const getLocalStorage = () => {
  const coffeeCart = JSON.parse(localStorage.getItem("coffeeCart"));
  return coffeeCart;
};
