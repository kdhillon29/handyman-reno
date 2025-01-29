"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'; // leaflet default-icon
import 'leaflet-defaulticon-compatibility'; // leaflet default-icon

export default function Map() {
    const position:[number,number] = [-27.4705, 153.0260];
    return (
      <MapContainer center={position} zoom={13} scrollWheelZoom={true} className="w-full h-72 px-4 md:px-10 mt-[-20px]">
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <Marker position={position}>
    <Popup>
      NBG Contructions pty ltd. <br /> Contactus for all yours bulding maintenance needs.
    </Popup>
  </Marker>
</MapContainer>
    );
}