import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// ✅ Fix marker icons for Vercel/Next.js build
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: markerIcon.src || markerIcon,
  iconRetinaUrl: markerIcon2x.src || markerIcon2x,
  shadowUrl: markerShadow.src || markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;

// ✅ Your updated locations array
const locations = [
  {
    title: 'Anchorage, AK',
    position: [61.2181, -149.9003],
    description: 'My birthplace. [1999]',
  },
  {
    title: 'West Point, NY',
    position: [41.3911, -73.9636],
    description: 'My baby years while my dad was a professor — and later, the source of many great leadership experiences and rolling around in the mud. [2000-2002, 2017-2021]',
  },
  {
    title: 'Fort Leavenworth, KS',
    position: [39.3529, -94.9225],
    description: 'Where I graduated kindergarten. [2004]',
  },
  {
    title: 'Leesburg, VA',
    position: [39.1157, -77.5636],
    description: 'Spent my 4th grade year here. [2009]',
  },
  {
    title: 'Fayetteville, NC',
    position: [35.0527, -78.8784],
    description: '1st through 12th grade — public school foundation. [2004-2008, 2009-2017]',
  },
  {
    title: 'Columbia, SC',
    position: [34.0007, -81.0348],
    description: 'So many research projects, my favorite being the religious economy, and significant time spent building a global investment analytic algorithm. [2022-2024]',
  },
  {
    title: 'Charleston, SC',
    position: [32.7765, -79.9311],
    description: 'My current hometown — where creativity, history, and calm ocean walks fuel my day-to-day life. [2025]',
  },
  {
    title: 'Washington, DC',
    position: [38.9072, -77.0369],
    description: 'App Developer for the government. [2021-2022, 2024-2025]',
  },
  {
    title: 'New York, NY',
    position: [40.7128, -74.0060],
    description: 'Corporate Development Intern at Everest Insurance. [Summer 2023]',
  },
  {
    title: 'Ottawa, Canada',
    position: [45.4215, -75.6998],
    description: 'Met with senior military leaders as part of West Point’s Domestic Affairs Forum. [2019]',
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
    title: 'Andermatt, Switzerland',
    position: [46.6331, 8.5946],
    description: 'Annual New Year’s Eve family ski trip destination.',
  },
];
