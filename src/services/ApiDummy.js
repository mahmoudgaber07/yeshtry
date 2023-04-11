const api = 'https://dummyjson.com';
const headers = {
    Accept: "application/json",
  };

export const getAllProducts = () =>
  fetch(`${api}/products`,{headers})
    .then((res) => res.json())
    .then((data) => data.products);

export const getProduct = (productId) =>
  fetch(`${api}/products/${parseInt(productId)}`,{headers})
    .then((res) => res.json())
    .then((data) => data);
