// pages/_app.js
import '../styles/globals.css';
import 'leaflet/dist/leaflet.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
