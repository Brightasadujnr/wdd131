const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastmodified");

currentYearElement.textContent = new Date().getFullYear();

lastModifiedElement.textContent = document.lastModified;
