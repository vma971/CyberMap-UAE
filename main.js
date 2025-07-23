// JavaScript file for CyberMap UAE
var map = L.map('map').setView([24.4539, 54.3773], 7); // Abu Dhabi coordinates

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Add marker
L.marker([24.4539, 54.3773]).addTo(map)
  .bindPopup('Abu Dhabi')
  .openPopup();
