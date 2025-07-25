
import { Diamond } from 'lucide-react';
import Image from "next/image";
export default function ChamomileTea() {
  return (
      <main className="flex bg-neutral-100 w-full h-screen justify-center items-center star h-full p-4 md:items-start md:justify-start">
          <div className="flex flex-col mt-12 relative"><Diamond/>
      <div className="flex justify-center h-screen flex-col">
          <h1 className="hidden md:block font-serif text-neutral-950 mb-4 font-bold w-16 md:text-2xl">TELLIUM</h1>
          <h2 className="text-9xl font-serif text-neutral-950 mb-4 font-bold w-16 md:text-7xl">CHAMOMILE TEA</h2>
          <div className="text-gray-700 space -space-y-4">
            <p className="mb-6 font-serif font-bold text-2xl text-neutral-950 md:text2xl">Countries</p>
              <p className="mb-6 font-serif md:"> China - Japan - Korea - Morocco</p>
            <p className="mb-6 font-serif text-2xl font-bold text-neutral-950 md:text2xl">Ingredients</p>
              <ul>
               <li className="mb-6 font-serif md:text-left">Camellia Sinensis leaves</li>
                  <li className="mb-6 font-serif md:text-left ">Steamed or pan-fired to prevent oxidation</li>
                  <li className="mb-6 font-serif md:text-left ">Fresh</li>
                  <li className="mb-6 font-serif md:text-left ">Vegetal</li>
                  <li className="mb-6 font-serif md:text-left "> Slightly astringent</li>
           </ul>
            <p className="mb-6 font-serif text-2xl font-bold text-neutral-950 md:text2xl ">Flavor</p>
              <p className="mb-6 font-serif">Grassy, fresh, with subtle sweetness</p>
          </div>
         </div>
        </div>
          <div className="flex flex-col relative w-2/3 h-full">
              <Image className={"flex flex-col relative w-full h-full object-scale-down"} width={1200} height={800} alt={"imagen de planta de té"} src={"https://res.cloudinary.com/dioizs3xa/image/upload/v1746750092/Ibiscus_tvbr0f.png"}/>
          </div>
      </main>
  );
}
