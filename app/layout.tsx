"use client"
import Footer from "@/components/footer"
import FrontSection from "@/components/hero"
import Navbar from "@/components/navbar"
import { ChakraProvider } from "@chakra-ui/react"
import * as React from "react"
import Home from "./page"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body>
        <ChakraProvider>
          <Navbar />
          {children}
          <Footer />
        </ChakraProvider>
        </body>
    </html>
  )
}
