'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import ReservationForm from './ReservationForm'

const Reservation = () => {
  return (
    <section className="xl:my-0 xl:h-[1020px] xl:bg-reservation xl:bg-no-repeat xl:flex xl:flex-col xl:justify-end xl:items-end">
        <div className="bg-black w-full xl:max-w-[868px] min-h-[518px] p-8 md:m-14 xl:p-16 id='reservation">
            <h2 className="text-white mb-9 capitalize">Book Mentorship Session</h2>
            <ReservationForm/>
        </div>
    </section>
  )
}

export default Reservation