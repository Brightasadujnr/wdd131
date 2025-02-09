// Product array
const products = [
  { name: "Product A" },
  { name: "Product B" },
  { name: "Product C" },
  { name: "Product D" },
];

// Dynamically populate the product select options
const productSelect = document.getElementById("Product");

products.forEach(product => {
  const option = document.createElement("option");
  option.value = product.name;
  option.textContent = product.name;
  productSelect.appendChild(option);
});

// Update footer with current year and last modified date
const currentYear = new Date().getFullYear();
document.getElementById("currentyear").textContent = currentYear;

const lastModified = document.lastModified;
document.getElementById("lastmodified").textContent = lastModified;