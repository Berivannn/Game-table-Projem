"use client";
import HeroSection from "../components/HomePages/HeroSection";
import GameTableSection from "../components/HomePages/GameTableSection";
import RekabetPages from "../components/HomePages/RekabetPages";
import OyunlarPages from "../components/HomePages/OyunlarPages"
import Header from "../components/Header/Header"
import Map from '../components/HomePages/Map'


export default function Home() {
  return (
    <div>
      <Header/> 
      <HeroSection />
      <GameTableSection />
      <RekabetPages />
      <OyunlarPages />
     <Map/>
    </div>
  );
}