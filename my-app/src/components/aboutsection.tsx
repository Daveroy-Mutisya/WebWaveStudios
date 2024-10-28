import React from 'react'
import { NavBar } from "./navbar";
import { ThreeDCardDave } from './davethreedemo'
import { ThreeDCardRonnie } from './ronniethreedemo'
import { WavyBackground } from './ui/wavy-background';

const AboutSection = () => {
  return (
    <div>
        <div>
            <NavBar />
        </div>
      <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
      About
    </h3>
    < WavyBackground className='max-w-4xl mx-auto pb-40'>
    <p className="leading-7 [&:not(:first-child)]:mt-6">
      We are a passionate team who are dedicated to creating innovative and effective solutions for our clients through web developments and getting them to reach new heighs in there business
    </p>
    <div>
        < ThreeDCardDave />
    </div>
    <div>
        < ThreeDCardRonnie />
    </div>
    </WavyBackground>
    </div>
  )
}

export default AboutSection;
