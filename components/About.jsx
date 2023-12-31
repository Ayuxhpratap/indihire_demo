'use client'
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const About = () => {
    return (
        <section className="grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center" id="about">
            <motion.div

            variants={fadeIn('right', 0.2)} initial='hidden' whileInView={'show'} viewport={{once:false , amount:0.2}}

            className="xl:pl-[135px]">
                <h1 className="mb-9">What Are We ;</h1>
                <p className="mb-8">
                    Welcome to IndiHire, the innovative hiring web application under the umbrella of IndiBus, a renowned advertising company and parent company to various successful ventures, including IndiLearn. At IndiHire, we are dedicated to shaping the future by providing exceptional job opportunities, internships, and mentorship programs for young minds.
                </p>
                <p className="mb-10">
                    Our platform stands as a bridge between talented individuals and dynamic companies seeking the brightest talent. Unlike IndiBus, which focuses on advertising and diverse business ventures, IndiHire specializes in connecting ambitious professionals with exciting career paths, making strides towards a brighter future for both employers and job seekers. Join IndiHire to unlock a world of possibilities, where talent meets opportunity in a seamless and efficient manner.
                </p>
                <Button>Read More</Button>
            </motion.div>
            <div>
                <Image src="/about/img.png" width={705} height={771} alt="" className="hidden xl:flex" />
            </div>
        </section>
    )
}

export default About