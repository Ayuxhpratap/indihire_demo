'use client';
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";

import 'leaflet/dist/leaflet.css';

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const marker = [
    {
        position: [28.6917, 77.5533],
        title: 'Location 1',
        subtitle: 'to be uploaded',
        Image: '/map/1.png'
    },
    {
        position: [28.7123, 77.6550],
        title: 'Location 2',
        subtitle: 'to be uploaded',
        Image: '/map/2.png'
    },
    {
        position: [28.6674, 77.4090],
        title: 'Location 3',
        subtitle: 'to be uploaded',
        Image: '/map/3.png'
    },
]

const customIcon = new Icon({
    iconUrl: '/pin-solid.svg',
    iconSize: [40, 40],
})

const Map = () => {
    const isMobile = useMediaQuery({
        query: '(max-width: 768px)'
    });

    return (
        <section className="relative xl:after:w-full xl:after:h-[240px] xl:after:bg-gradient-to-b xl:after:from-white xl:after:via-white/80 xl:after:to-white/20 xl:after:absolute xl:after:top-0 xl:after:z-20" id="contact">
            <MapContainer center={[28.6916, 77.5601]} zoom={isMobile ? 10 : 12} className={` ${isMobile ? 'h-[300px]' : 'h-[900px]'}  z-10`} zoomControl={false}>
                <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">openStreetMaps</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
                {marker.map((marker, index) => {
                    return <Marker
                        key={index} position={marker.position} icon={customIcon}
                    >
                        <Popup>
                            <div className="flex gap-x-[30px]">
                                <div className="flex-1">
                                    <h3 className="text-black">{marker.title}</h3>
                                    <p className="leading-snug">{marker.subtitle}</p>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                })}
            </MapContainer>
        </section>
    )
}

export default Map