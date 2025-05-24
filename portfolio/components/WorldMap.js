import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { motion } from 'framer-motion';
import 'leaflet/dist/leaflet.css';

// Fix Leaflet icon issues in Next.js
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: typeof window !== 'undefined' && require('leaflet/dist/images/marker-shadow.png'),
});

const locations = [
  {
    title: 'Paris, France',
    position: [48.8566, 2.3522],
    description: 'Studied business and neuroscience at ESCP in early 2024.',
  },
  {
    title: 'Columbia, SC',
    position: [34.0007, -81.0348],
    description: 'MBA work, cinema project, and leadership roles.',
  },
  {
    title: 'West Point, NY',
    position: [41.3911, -73.9636],
    description: 'Military R&D, leadership training, research projects.',
  },
  {
    title: 'Hohenfels, Germany',
    position: [49.2057, 11.8434],
    description: 'NATO leadership training at JMRC.',
  },
  {
    title: 'Washington, DC',
    position: [38.9072, -77.0369],
    description: 'Developer roles and policy work.',
  },
];

export default function WorldMap() {
  return (
    <div className="w-full h-[600px] rounded-xl overflow-hidden shadow-xl">
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={true} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>'
          url="https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png"
        />
        {locations.map((loc, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <Marker position={loc.position}>
              <Popup>
                <strong>{loc.title}</strong>
                <br />
                {loc.description}
              </Popup>
            </Marker>
          </motion.div>
        ))}
      </MapContainer>
    </div>
  );
}
