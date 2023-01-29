"use client"

import AICourse from "@/components/AIcourse"
import CloudComputing from "@/components/CloudCom"
import GenomeProgramming from "@/components/Genomics"
import FrontSection from "@/components/hero"
import IotProgramming from "@/components/IOT"
import NetworkProgramming from "@/components/NetworkProgramming"
import Web3Metaverse from "@/components/WEB3-MetaverseCourse"

export default function Home() {
  return (
    <>
    <FrontSection />
    <AICourse />
    <CloudComputing />
    <GenomeProgramming />
    <IotProgramming />
    <NetworkProgramming />
    <Web3Metaverse />
    </>
  )
}
