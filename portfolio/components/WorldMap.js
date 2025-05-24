import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import { useEffect } from 'react';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-shadow.png'),
});

// Your location data
const locations = [
  {
    title: 'Anchorage, AK',
    position: [61.2181, -149.9003],
    description: 'My birthplace.',
  },
  {
    title: 'West Point, NY',
    position: [41.3911, -73.9636],
    description: 'My baby years — and later, many great leadership experiences and research projects (plus rolling around in the mud).',
  },
  {
    title: 'Fort Leavenworth, KS',
    position: [39.3529, -94.9225],
    description: 'Where I graduated kindergarten.',
  },
  {
    title: 'Leesburg, VA',
    position: [39.1157, -77.5636],
    description: 'Spent my 4th grade year here.',
  },
  {
    title: 'Fayetteville, NC',
    position: [35.0527, -78.8784],
    description: '1st through 12th grade — public school foundation.',
  },
  {
    title: 'Columbia, SC',
    position: [34.0007, -81.0348],
    description: 'So many research projects, my favorite being the religious economy, and significant time spent building a global investment analytic algorithm.',
  },
  {
    title: 'Paris, France',
    position: [48.8566, 2.3522],
    description: 'Studied international business at ESCP in early 2024.',
  },
  {
    title: 'Hohenfels, Germany',
    position: [49.2057, 11.8434],
    description: 'NATO leadership training at JMRC.',
  },
  {
    title: 'Washington, DC',
    position: [38.9072, -77.0369],
    description: 'App Developer for the government.',
  },
  {
    title: 'Andermatt, Switzerland',
    position: [46.6331, 8.5946],
    description: 'Annual New Year’s Eve family ski trip destination.',
  },
];

// Component to fly to a marker on mount
function FlyToMarker({ position, delay }) {
  const map = useMap();

  useEffect(() => {
    const timeout = setTimeout(() => {
      map.flyTo(position, 5, { duration: 2 });
    }, delay);
    return () => clearTimeout(timeout);
  }, [map, position, delay]);

  return null;
}

export default function WorldMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc, i) => (
          <Marker key={i} position={loc.position}>
            <Popup>
              <strong>{loc.title}</strong><br />
              {loc.description}
            </Popup>
            {/* Fly animation staggered per marker */}
            <FlyToMarker position={loc.position} delay={i * 3000} />
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
