"use client"
import { JSX } from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import { icon } from "leaflet"
import style from "./style.module.css";

type MapProps = {
    latitude: number
    longitude: number
}

const ICON = icon({
    iconUrl: "/assets/marker.png",
    iconSize: [48, 48],
});

export default function Map({latitude, longitude}: MapProps): JSX.Element {
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false} className={style.map}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker icon={ICON} position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}