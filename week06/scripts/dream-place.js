const currentYearElement = document.getElementById("currentyear");
const lastModifiedElement = document.getElementById("lastmodified");

currentYearElement.textContent = new Date().getFullYear();

lastModifiedElement.textContent = document.lastModified;
// Update the current year
document.getElementById('currentyear').textContent = new Date().getFullYear();

// Update the last modified date
document.getElementById('lastmodified').textContent = document.lastModified;