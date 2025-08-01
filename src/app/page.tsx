"use client"
import {useState} from "react";
import Image from "next/image";
import {X} from "lucide-react";
export default function ChamomileTea() {

    const [show, setShow] = useState(false);
    console.log(show)
  return (
      <main className="flex bg-neutral-100 w-full h-screen items-start justify-start">
          <div className="flex flex-row w-full h-full relative">
              {
                  show && (
                      <div className="flex flex-col w-full h-full bg-neutral-100 items-center z-200 absolute p-4">
                         <div className=" flex items-center justify-center absolute top-8 left-8">
                          <X className={"size-8 "}
                          onClick={() => setShow(false)}>
                          </X>
                         </div>
                          <h1 className="text-5xl font-serif text-neutral-950 mb-6 font-bold mt-12">
                              TELLIUM
                          </h1>
                         <ul className=" flex flex-col text-neutral-950 mb-4 mt-4 gap-4 text-center">
                             <li className="text-2xl font-serif text-neutral-950 mb-2 font-bold">
                                 WHITE TEA
                             </li>
                             <li className="text-2xl font-serif text-neutral-950 mb-2 font-bold">
                                 CHAMOMILLE TEA
                             </li>
                             <li className="text-2xl font-serif text-neutral-950 mb-2 font-bold">
                                 PEPPERMINT TEA
                             </li>
                             <li className="text-2xl font-serif text-neutral-950 mb-2 font-bold">
                                 HIBISCUS TEA
                             </li>
                         </ul>
                          <div className="flex w-8 h-8 rotate-45 bg-black mt-12"
                          onClick={() => {
                              setShow(true);
                          }}>
                          </div>
                          <div className=" md:relative flex flex-col absolute bottom-4 w-full rotate-180">
                              <Image className={"flex flex-col relative w-full h-full  object-cover md:object-scale-down md:opacity-100 absolute"}
                                     width={1200}
                                     height={800}
                                     alt={"imagen de planta de té"}
                                     src={"https://res.cloudinary.com/dioizs3xa/image/upload/v1754011352/flower1_sftnah.png"}/>
                          </div>
                      </div>

                  )
              }
              <div className="hidden flex flex-col justify-center items-center w-1/6 p-4 space-y-4 md:flex">
                  <div className="w-8 h-8 rotate-45 bg-black"/>
                  <ul className="mb-auto flex flex-col space-y-4 justify-between h-full">
              <li className="w-6 h-6 border-3 border-black rotate-45 bg-transparent"></li>
              <li className="w-6 h-6 border-3 border-black rotate-45 bg-transparent"></li>
              <li className="w-6 h-6 border-3 border-black rotate-45 bg-transparent"></li>
              <li className="w-6 h-6 border-3 border-black rotate-45 bg-transparent"></li>
          </ul>
          </div>
          <div className="flex flex-col w-full p-4 z-100">
              <div
                  className="w-8 h-8 rotate-45 bg-black mb-auto md:hidden"
                  onClick={() => {
                      setShow(true);
                  }}
                  ></div>
          <h1 className="hidden md:block font-serif text-neutral-950 mb-5 font-bold w-16 md:text-4xl z-100">TELLIUM</h1>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif text-neutral-950 font-bold w-16">CHAMOMILE TEA</h2>
          <div className="text-gray-700">
            <p className="mb-2 font-serif font-bold text-2xl text-neutral-950 md:text2xl">Countries</p>
              <p className="mb-2 font-serif md:"> China - Japan - Korea - Morocco</p>
            <p className="mb-2 font-serif text-2xl font-bold text-neutral-950 md:text2xl">Ingredients</p>
              <ul>
               <li className="mb-2 font-serif md:text-left">Camellia Sinensis leaves</li>
                  <li className="mb-2 font-serif md:text-left ">Steamed or pan-fired to prevent oxidation</li>
                  <li className="mb-2 font-serif md:text-left ">Fresh</li>
                  <li className="mb-2 font-serif md:text-left ">Vegetal</li>
                  <li className="mb-2 font-serif md:text-left "> Slightly astringent</li>
           </ul>
            <p className="mb-2 font-serif text-2xl font-bold text-neutral-950 md:text2xl">Flavor</p>
              <p className="mb-2 font-serif">Grassy, fresh, with subtle sweetness</p>
          </div>
          </div>
          <div className="absolute md:relative flex flex-col md:w-1/2 h-full z-1 ">
              <Image className={"flex flex-col relative w-full h-full opacity-25 object-cover md:object-scale-down md:opacity-100"}
                     width={1200}
                     height={800}
                     alt={"imagen de planta de té"}
                     src={"https://res.cloudinary.com/dioizs3xa/image/upload/v1746750092/Ibiscus_tvbr0f.png"}/>
          </div>
          </div>
</main>
  );
}