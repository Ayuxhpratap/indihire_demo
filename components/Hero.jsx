'use client';

import Image from "next/image";
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Button } from './ui/button';


const Hero = () => {
    return <section className="bg-black relative xl:bg-cover py-40 pb-32 xl:py-0" id="home">
    {/* return <section className="bg-black-heavy relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0" id="home"> */}
        <div className="container mx-auto">
            <div className="flex items-center xl:h-[960px]">
                {/* <div className="w-full xl:max-w-[460px] text-center xl:text-center"> */}
                <div className="w-full text-center">
                    <p className="text-white font-semibold">
                        We Are <span className="text-orange">IndiBus</span> , and
                    </p>
                    <motion.h1
                    variants={fadeIn('down', 0.2)}
                    initial='hidden'
                    whileInView={'show'}
                    viewport={{once:false , amount:0.4}}
                    className="text-white mb-7">
                        We Are Hiring <br /> Good Talent
                    </motion.h1>
                    <p className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0">
                    At Indi-Hire, we believe in connecting talent with incredible opportunities. Whether you're seeking a fulfilling job, an enriching internship, valuable mentorship, or an exclusive membership, your journey starts here.
                    <br />Discover a diverse range of opportunities offered by IndiBus and our esteemed partner companies.
                    </p>
                    <div>
                        <Button>Apply Now</Button>
                    </div>
                </div>
                {/* <motion.div
                variants={fadeIn('up', 0.2)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once:false , amount:0.4}}
                className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0">
                    <Image src='/hero/hire-5.jpg' width={756} height={682} alt=""/>
                </motion.div> */}
            </div>
        </div>
        {/* <div className="hidden xl:flex xl:relative xl:-top-36">
            <Image src='/hero/coffee.png' width={386} height={404} alt=""/>
        </div> */}
    </section>;
}

export default Hero