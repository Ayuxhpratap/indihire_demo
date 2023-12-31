'use client'
import Image from "next/image"
import Link from "next/link"
import { IoMdArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const menu2 = [
  {
    title: 'Front-End Developer + Internship',
    para: 'Unleash your creativity and technical prowess in the world of Frontend Development. Learn to craft visually appealing and user-friendly interfaces that captivate audiences.',
    fees: 'Fees: Free (For ABESITians)',
    duration: 'Course/Inter : 1month/3months',
    vacancies: 'Seats: 0 left',
  } ,
  {
    title: 'Back-End Developer + Internship',
    para: 'Dive into the backbone of technology with Backend Development. Gain expertise in server-side scripting, database management, and system architecture.',
    fees: 'Fees: Free (For ABESITians)',
    duration: 'Course/Inter: 2months/3months',
    vacancies: 'Seats: Soon..',
  } ,
  {
    title: 'UI/UX Designer + Internship',
    para: 'Combine aesthetics with functionality in the UI/UX Design field. Explore and capture the art of user-centric design and create seamless, intuitive experiences.',
    fees: 'Fees: Free (For ABESITians)',
    duration: 'Course/Inter: 2weeks/1month',
    vacancies: 'Seats: Soon..',
  } 
]

const Menu2 = () => {
  return (
  <section className="relative py-12 xl:py-24 bg-menu" id="menu">
    <div className="container mx-auto">
      <motion.div variants={fadeIn('left', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false , amount:0.2}} className="max-w-[570px] mx-auto text-center">
        <h2 className="mb-3">
          Intern-Employee Programme
        </h2>
        <p className="text-center text:sm mb-7">Under IE prog. , indibus provide you a detailed course in specific field for FREE and after succesful completion of the course ; candidates are given a chance to work as intern at Indibus and connected companies. Exciting , Right !!</p>
        <Link href='/' className="text-green flex justify-center xl:justify-center items-center mb-16">
          Learn More
          <IoMdArrowRoundForward className="text-xl" />
        </Link>
      </motion.div>
      {/* MENU - GRID */}
      <div className="rounded-lg grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
        {menu2.map((item, index) => {
          return (
            <div key={index} className="max-w-[270px] bg-white shadow-custom mx-auto xl:mx-0 group rounded-2xl">
              <div className="pt-[40px] pb-[28px] px-[30px]">
                <Link href='/'>
                  <h3 className="font-poppins text-black mb-[14px]">{item.title}</h3>
                </Link>
                <div className="font-poppins text-black mb-[12px]">{item.para}</div>
                <div className="font-poppins font-semibold text-black mb-[12px]">{item.fees}</div>
                <div className="font-poppins font-semibold text-black mb-[12px]">{item.duration}</div>
                <div className="text-xl font-poppins font-semibold text-orange">{item.vacancies}</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  </section>
  )
}

export default Menu2