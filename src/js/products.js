const response = await fetch("/db/productsData.json");
const productsData = await response.json();
export const products = productsData.products;
