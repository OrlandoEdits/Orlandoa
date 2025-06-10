import { useEffect } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

const beamngCars = [
  "https://imgur.com/1O0PPKV.jpg",
  "https://imgur.com/X1d8Jkh.jpg",
  "https://imgur.com/zGqcyLt.jpg",
  "https://imgur.com/cXRln0l.jpg",
  "https://imgur.com/D3xO0LF.jpg",
  "https://imgur.com/OLwJWCY.jpg",
  "https://imgur.com/B78ZAnl.jpg",
  "https://imgur.com/axNUiy2.jpg",
  "https://imgur.com/QzxHmHh.jpg"
];

const beamngTracks = [
  { src: "https://imgur.com/lCeeMFt.jpg", label: "Track 1" },
  { src: "https://imgur.com/Pf9zrO3.jpg", label: "Track 2" },
  { src: "https://imgur.com/oWQ456J.jpg", label: "Track 3" },
  { src: "https://imgur.com/1hzD8dZ.jpg", label: "Track 4" },
  { src: "https://imgur.com/Z2Vkl7x.jpg", label: "Track 5" }
];

const assettoCars = [
  "https://imgur.com/aOdwvtf.jpg",
  "https://imgur.com/A6rfsAf.jpg",
  "https://imgur.com/fubGsxS.jpg",
  "https://imgur.com/hlrWIJa.jpg",
  "https://imgur.com/iVRtxLs.jpg",
  "https://imgur.com/hhz1XiE.jpg"
];

const assettoTracks = [
  { src: "https://imgur.com/7EQWX4J.jpg", label: "OrlandoSpeedworld" },
  { src: "https://imgur.com/bJFsug0.jpg", label: "Salinas Speedway" },
  { src: "https://imgur.com/zMgndYy.jpg", label: "Rio Drag Park 1" },
  { src: "https://imgur.com/y3z4fCM.jpg", label: "Rio Drag Park 2" },
  { src: "https://imgur.com/dYbhn55.jpg", label: "Rio Drag Park 3" },
  { src: "https://imgur.com/l7A91VG.jpg", label: "Arecibo Motorsport 1" },
  { src: "https://imgur.com/PXtZg0I.jpg", label: "Arecibo Motorsport 2" },
  { src: "https://imgur.com/7p6azAe.jpg", label: "Aibonito 1" },
  { src: "https://imgur.com/vLBcJKy.jpg", label: "Aibonito 2" }
];

export default function HomePage() {
  useEffect(() => {
    document.title = "D&O Racing | Orlando Edits";
  }, []);

  const renderGallery = (images) => (
    <section className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
      {images.map((item, index) => {
        const src = typeof item === 'string' ? item : item.src;
        const label = typeof item === 'string' ? null : item.label;
        return (
          <Card key={index} className="bg-zinc-900">
            <CardContent className="p-2">
              <img
                src={src}
                alt={label || `Gallery ${index + 1}`}
                className="w-full h-60 object-cover rounded-xl"
              />
              {label && <p className="text-center mt-2 text-sm text-gray-300">{label}</p>}
            </CardContent>
          </Card>
        );
      })}
    </section>
  );

  return (
    <main className="min-h-screen bg-black text-white p-6 font-sans">
      <section className="flex flex-col items-center text-center py-20">
        <motion.img
          src="https://imgur.com/BlhVawC.jpg"
          alt="D&O Racing Logo"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="w-40 mb-4"
        />
        <motion.h1
          className="text-4xl md:text-6xl font-bold"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          BeamNG & Assetto Corsa Mods
        </motion.h1>
        <p className="mt-4 text-lg max-w-xl text-gray-400">
          Custom drag and street builds for BeamNG and Assetto Corsa. Available exclusively on Patreon.
        </p>
        <div className="flex gap-4 mt-6">
          <a href="https://www.patreon.com/OrlandoEdits" target="_blank" className="underline text-pink-500">Patreon</a>
          <a href="https://discord.gg/efQbWaKC" target="_blank" className="underline text-blue-400">Discord</a>
          <a href="https://www.instagram.com/domods21/" target="_blank" className="underline text-pink-400">Instagram</a>
          <a href="https://www.youtube.com/@xOrlandoPrVLTx/" target="_blank" className="underline text-red-500">YouTube</a>
        </div>
      </section>

      <section className="py-10 max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-300 text-lg">
          I'm Orlando, the creator behind D&O Racing. I specialize in building high-quality drag racing and street racing mods for BeamNG.drive and Assetto Corsa. My focus is on realistic performance, custom engine swaps, and detailed tuning options that elevate the sim racing experience. Whether you're into street builds or pro-level drag strips, I've got something for you. Check out my work and download it through my <a href="https://www.patreon.com/OrlandoEdits" className="underline text-pink-500">Patreon</a>.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">BeamNG Cars</h2>
        {renderGallery(beamngCars)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">BeamNG Tracks</h2>
        {renderGallery(beamngTracks)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Assetto Corsa Cars</h2>
        {renderGallery(assettoCars)}
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Assetto Corsa Tracks</h2>
        {renderGallery(assettoTracks)}
      </section>
    </main>
  );
}
