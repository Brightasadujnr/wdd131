// Product array
const products = [
  { name: "Computer" },
  { name: "System" },
  { name: "Phone" },
  { name: "Keyboard" },
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