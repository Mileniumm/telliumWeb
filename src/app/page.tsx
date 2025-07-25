import { Diamond } from 'lucide-react';
import Image from "next/image";
export default function ChamomileTea() {
  return (
      <main
          className=" relative flex bg-neutral-100 w-full h-screen h-full items-start justify-start">
      <div className="flex h-full flex-col justify-end h-screen p-4 w-full md:p-8">
          <div className="mb-auto w-8 h-8 mb:w-6 mb:h-6  rotate-45 bg-black">
          </div>
          <h1 className="hidden md:block font-serif text-neutral-950 mb-5 font-bold w-16 md:text-2xl">TELLIUM</h1>
          <h2 className="text-5xl font-serif  mb-4 text-neutral-950 font-bold w-16 md:text-7xl">CHAMOMILE TEA</h2>
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
          <div className="absolute md:relative flex flex-col md:w-1/2 h-full">
              <Image className={"flex flex-col relative w-full h-full opacity-25 object-cover md:object-scale-down md:opacity-100"} width={1200} height={800} alt={"imagen de planta de té"} src={"https://res.cloudinary.com/dioizs3xa/image/upload/v1746750092/Ibiscus_tvbr0f.png"}/>
          </div>
      </main>
  );
}
