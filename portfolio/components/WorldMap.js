import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Tooltip, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const defaultIcon = L.icon({
  iconUrl: markerIcon.src || markerIcon,
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  shadowUrl: markerShadow.src || markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const locations = [
  { title: 'Anchorage, AK', position: [61.2181, -149.9003], description: 'My birthplace. [1999]', category: 'early' },
  { title: 'West Point, NY', position: [41.3911, -73.9636], description: 'The source of many great leadership experiences. [2000-2002, 2017-2021]', category: 'early' },
  { title: 'Fort Leavenworth, KS', position: [39.3529, -94.9225], description: 'Graduated kindergarten, awh. [2004]', category: 'early' },
  { title: 'Fayetteville, NC', position: [35.0527, -78.8784], description: 'My 1st through 12th grade public school education. [2004–2017]', category: 'early' },
  { title: 'Columbia, SC', position: [34.0007, -81.0348], description: 'Research projects and MBA studies. [2022–2024]', category: 'education' },
  { title: 'Washington, DC', position: [38.9072, -77.0369], description: 'App developer. [2021–2022, 2024–2025]', category: 'professional' },
  { title: 'New York, NY', position: [40.7128, -74.0060], description: 'Corporate development internship. [Summer 2023]', category: 'professional' },
  { title: 'Ottawa, Canada', position: [45.4215, -75.6998], description: 'Domestic Affairs Forum trip with Canadian military leaders. [2019]', category: 'education' },
  { title: 'Paris, France', position: [48.8566, 2.3522], description: 'International business studies at ESCP. [Jan–Mar 2024]', category: 'education' },
  { title: 'Hohenfels, Germany', position: [49.2057, 11.8434], description: 'NATO leadership training. [2019]', category: 'training' },
  { title: 'Andermatt, Switzerland', position: [46.6331, 8.5946], description: 'Annual New Year ski trip destination.', category: 'travel' },
];

const categories = ['all', 'early', 'education', 'professional', 'training', 'travel', 'now'];

export default function WorldMap() {
  const [filter, setFilter] = useState('all');
  const [timelineIndex, setTimelineIndex] = useState(null);

  const filteredLocations = filter === 'all' ? locations : locations.filter(loc => loc.category === filter);

  const playTimeline = () => {
    setTimelineIndex(0);
    let i = 1;
    const interval = setInterval(() => {
      if (i < locations.length) {
        setTimelineIndex(i);
        i++;
      } else {
        clearInterval(interval);
        setTimelineIndex(null);
      }
    }, 3000);
  };

  return (
    <div className="relative w-full h-[600px] rounded-xl overflow-hidden shadow-xl font-sans">
      {/* Floating filter dropdown */}
      <div className="absolute top-4 left-4 bg-white shadow p-2 rounded z-[1000]">
        <label className="block text-sm font-medium mb-1">Filter by:</label>
        <select
          className="p-1 rounded border border-gray-300 text-sm"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat.charAt(0).toUpperCase() + cat.slice(1)}</option>
          ))}
        </select>
      </div>

      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {filteredLocations.map((loc, i) => (
          <Marker
            key={i}
            position={loc.position}
            icon={defaultIcon}
          >
            <Popup>
              <div className="font-outfit text-sm">
                <strong>{loc.title}</strong><br />
                {loc.description}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
