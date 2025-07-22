// إعداد الخريطة
const map = L.map('map').setView([24.4539, 54.3773], 7); // إحداثيات أبوظبي

// إضافة الخريطة من OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; CyberMap UAE'
}).addTo(map);

// مثال على تهديد
const exampleThreat = L.marker([25.2048, 55.2708]) // دبي
  .addTo(map)
  .bindPopup('📢 Phishing Alert reported in Dubai!');
