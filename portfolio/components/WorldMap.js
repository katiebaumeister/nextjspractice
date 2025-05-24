import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIconBlue from 'leaflet/dist/images/marker-icon.png';
import markerIconRed from 'leaflet/dist/images/marker-icon-2x.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

// Define different marker icons by group
const iconStyles = {
  early: L.icon({
    iconUrl: markerIconBlue.src || markerIconBlue,
    shadowUrl: markerShadow.src || markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
  professional: L.icon({
    iconUrl: markerIconRed.src || markerIconRed,
    shadowUrl: markerShadow.src || markerShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
  }),
};

// 🗺️ Grouped + categorized locations
const locations = [
  {
    group: 'early',
    title: 'Anchorage, AK',
    position: [61.2181, -149.9003],
    description: 'My birthplace. [1999]',
  },
  {
    group: 'early',
    title: 'West Point, NY',
    position: [41.3911, -73.9636],
    description: 'Early years and later leadership experiences. [2000-2002, 2017-2021]',
  },
  {
    group: 'early',
    title: 'Fort Leavenworth, KS',
    position: [39.3529, -94.9225],
    description: 'Graduated kindergarten. [2004]',
  },
  {
    group: 'early',
    title: 'Leesburg, VA',
    position: [39.1157, -77.5636],
    description: 'Spent my 4th grade year here. [2009]',
  },
  {
    group: 'early',
    title: 'Fayetteville, NC',
    position: [35.0527, -78.8784],
    description: '1st through 12th grade — public school foundation. [2004-2017]',
  },
  {
    group: 'education',
    title: 'Columbia, SC',
    position: [34.0007, -81.0348],
    description: 'Research projects and MBA studies. [2022-2024]',
  },
  {
    group: 'professional',
    title: 'Charleston, SC',
    position: [32.7765, -79.9311],
    description: 'Current hometown. [2025]',
  },
  {
    group: 'professional',
    title: 'Washington, DC',
    position: [38.9072, -77.0369],
    description: 'Government app developer. [2021-2022, 2024-2025]',
  },
  {
    group: 'professional',
    title: 'New York, NY',
    position: [40.7128, -74.0060],
    description: 'Corporate Development Intern at Everest. [Summer 2023]',
  },
  {
    group: 'education',
    title: 'Ottawa, Canada',
    position: [45.4215, -75.6998],
    description: 'Domestic Affairs Forum policy meetings. [2019]',
  },
  {
    group: 'education',
    title: 'Paris, France',
    position: [48.8566, 2.3522],
    description: 'Studied at ESCP. [Jan–Mar 2024]',
  },
  {
    group: 'education',
    title: 'Hohenfels, Germany',
    position: [49.2057, 11.8434],
    description: 'NATO leadership training. [2019]',
  },
  {
    group: 'travel',
    title: 'Andermatt, Switzerland',
    position: [46.6331, 8.5946],
    description: 'New Year ski trips.',
  },
];

export default function WorldMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {locations.map((loc, i) => (
          <Marker
            key={i}
            position={loc.position}
            icon={iconStyles[loc.group] || iconStyles.professional}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent>
              <span className="font-semibold">{loc.title}</span>
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
