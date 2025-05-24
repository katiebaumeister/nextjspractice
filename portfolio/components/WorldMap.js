import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';

// Fix default Leaflet marker icons (Vercel-safe)
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

L.Icon.Default.mergeOptions({
  iconUrl: icon.src || icon,
  shadowUrl: iconShadow.src || iconShadow,
});

// Location data
const locations = [
  {
    title: 'Anchorage, AK',
    position: [61.2181, -149.9003],
    description: 'My birthplace. [1999]',
  },
  {
    title: 'West Point, NY',
    position: [41.3911, -73.9636],
    description: 'The source of many great leadership experiences. This is also where my parents met back in 1992! [2000-2002, 2017-2021]',
  },
  {
    title: 'Fort Leavenworth, KS',
    position: [39.3529, -94.9225],
    description: 'Where I graduated kindergarten, awh... [2004]',
  },
  {
    title: 'Leesburg, VA',
    position: [39.1157, -77.5636],
    description: 'My 4th grade year. [2009]',
  },
  {
    title: 'Fayetteville, NC',
    position: [35.0527, -78.8784],
    description: 'My 1st through 12th grade public school education. [2004-2008, 2009-2017]',
  },
  {
    title: 'Columbia, SC',
    position: [34.0007, -81.0348],
    description: 'Where I spent significant time building a global investment analytic algorithm and attending business school. [2022-2024]',
  },
  {
    title: 'Paris, France',
    position: [48.8566, 2.3522],
    description: 'Studied international business at ESCP in early 2024. [January-March 2024]',
  },
  {
    title: 'Hohenfels, Germany',
    position: [49.2057, 11.8434],
    description: 'NATO leadership training at JMRC. [May-July 2019]',
  },
  {
    title: 'Washington, DC',
    position: [38.9072, -77.0369],
    description: 'App Developer for the government. [2021-2022, 2024-2025]',
  },
  {
    title: 'Andermatt, Switzerland',
    position: [46.6331, 8.5946],
    description: 'Annual New Year’s Eve family ski trip destination.',
  },
  {
  title: 'Charleston, SC',
  position: [32.7765, -79.9311],
  description: 'The hometown where my fam resides and I frequent.',
},
];

// Click-to-zoom component
function ZoomTo({ mapRef, position }) {
  const map = useMap();

  const handleClick = () => {
    map.setView(position, 6); // Zoom to city/state level
  };

  return (
    <Marker position={position} eventHandlers={{ click: handleClick }}>
      <Popup>
        <strong>{mapRef.current.title}</strong><br />
        {mapRef.current.description}
      </Popup>
    </Marker>
  );
}

export default function WorldMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc, i) => {
          const markerRef = useRef(loc);
          return (
            <Marker key={i} position={loc.position} eventHandlers={{
              click: () => {
                const map = markerRef.current._map;
                map.setView(loc.position, 6);
              }
            }}>
              <Popup>
                <strong>{loc.title}</strong><br />
                {loc.description}
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
