"use client"
import { JSX } from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import { icon } from "leaflet"



const ICON = icon({
    iconUrl: "/assets/marker.png",
    iconSize: [48, 48],
});

export default function Map(): JSX.Element {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{height: 400}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={ICON} position={[51.505, -0.09]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}