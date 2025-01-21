// Get the current year for copyright
const currentYear = new Date().getFullYear();
document.getElementById("copyright-year").textContent = `© ${currentYear} Your Name or Company`;

// Get the last modified date of the document
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = `Last Modified: ${lastModified}`;
