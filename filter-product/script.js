const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const categoryBtns = document.querySelectorAll(".category-btn");

const filterProduct = () => {
  const searchValue = searchInput.ariaValueMax.toLocaleLowerCase();
  const productItems = document.querySelectorAll(".product-item");
  productItems.forEach(item=>{
    const title = 
  })
};

searchBtn.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", setCategory);
});
filterProduct();
