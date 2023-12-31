'use client'
import Image from "next/image"
import Link from "next/link"
import { IoMdArrowRoundForward } from "react-icons/io";

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const menu = [
  {
    img:'/menu/spot-2.jpg',
    title: 'Next Js developer',
    para: 'IndiBus is seeking a dynamic Next Developer to join our innovative team. The ideal candidate will possess strong coding skills and a passion for staying at the forefront of emerging technologies.',
    vacancies: 'Spot Available: 6',
  } ,
  {
    img:'/menu/spot-5.jpg',
    title: 'Senior Project Head',
    para: 'IndiBus is in search of a highly organized and results-driven Project Lead to oversee the successful execution of our development projects. The ideal candidate must have a proven track record.',
    vacancies: 'Spot Available: 3',
  } ,
  {
    img:'/menu/spot-3.jpg',
    title: 'UI/UX Designer',
    para: 'IndiBus is looking for a creative and detail-oriented UI/UX Designer to elevate the user experience of our products. The ideal candidate will have a keen understanding of design principles.',
    vacancies: 'Spot Available: 8',
  } ,
  {
    img:'/menu/spot-1.jpg',
    title: 'Team R. Cordinator',
    para: 'IndiBus is actively seeking a Team Relations Manager to foster a positive and collaborative work environment. The ideal candidate will possess excellent interpersonal and communication skills.',
    vacancies: 'Spot Available: 1',
  }
]

const Menu = () => {
  return (
  <section className="relative py-12 xl:py-24 bg-menu" id="menu">
    <div className="container mx-auto">
      <motion.div variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false , amount:0.2}} className="max-w-[570px] mx-auto text-center">
        <h2 className="mb-3">
          Top Oppurtunities
        </h2>
        <Link href='/' className="text-green flex justify-center xl:justify-center items-center mb-16">
          View All
          <IoMdArrowRoundForward className="text-xl" />
        </Link>
      </motion.div>
      {/* MENU - GRID */}
      <div className="rounded-lg grid grid-cols-1 gap-[30px] md:grid-cols-3 md:gap-[15px] xl:grid-cols-4">
        {menu.map((item, index) => {
          return (
            <div key={index} className="max-w-[270px] bg-white shadow-custom mx-auto xl:mx-0 group rounded-2xl">
              <div className="overflow-hidden rounded-b-[0px] rounded-2xl">
                <Image src={item.img} width={270} height={200} alt="" className="group-hover:scale-110 transition-all duration-300"/>
              </div>
              <div className="pt-[40px] pb-[28px] px-[30px]">
                <Link href='/'>
                  <h3 className="font-poppins text-black mb-[14px]">{item.title}</h3>
                </Link>
                <div className="font-poppins text-black mb-[12px]">{item.para}</div>
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

export default Menu