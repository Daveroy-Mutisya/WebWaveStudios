"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { NavBar } from "./navbar";

export function LandingSection() {
  return (
    <>
    <section className="max-h-full max-w-full">
    <div>
        <NavBar />
    </div>
    <WavyBackground className="max-w-4xl mx-auto pb-40">
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      Web Wave Studios
    </h1>
    <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
      Crafting digital dreams 
    </h2>
    </WavyBackground>
    </section>
    </>
  );
}
