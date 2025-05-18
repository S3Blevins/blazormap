let map = L.map('map', { cursor: true }).setView({ lon: -118.26544, lat: 34.23555 }, 16);
let pos;

export function load_map() {
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 9 }).addTo(map);
    map.on('mousemove', function (e) { pos = e.latlng.toString() });
}

export function on_move() {
    return pos;
}