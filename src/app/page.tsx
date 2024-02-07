"use client"

import { Client } from "@/components/Clients";
import { Community } from "@/components/Community";
import { HeroSection } from "@/components/HeroSection";
import { Nav } from "@/components/Nav";
import { Achievements } from "@/components/body/Achievements";
import { Calender } from "@/components/body/Calender";
import { Costumers } from "@/components/body/Costumers";
import { Unlock } from "@/components/body/Unlock";
import { Upadates } from "@/components/body/Updates";
import { Footer } from "@/components/footer/Footer";


const Page = () => {
  return (
    <div className=" text-black bg-white max-w-[1920px] mx-auto">
      
        <Nav>

        </Nav>
        <HeroSection>

        </HeroSection>

        <div className="py-8 px-6">
        <Client/>

        <Community/>

        <Unlock/>
      </div>
      
        <Achievements/>
        <Calender/>
        <Costumers/>
        <Upadates/>
        <Footer/>
    </div>
  )
}

export default Page;