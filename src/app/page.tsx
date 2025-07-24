import { Diamond } from 'lucide-react';
export default function ChamomileTea() {
  return (
      <main className="flex bg-neutral-100 w-full h-screen justify-center items-center h-full p-4 ">
          <div className="flex flex-col mt-12 relative">
              <Diamond/>
              <div className="">
      <div className="flex justify-center h-screen flex-col">
          <h1 className="text-6xl font-serif text-neutral-950 mb-4 font-bold w-16">CHAMOMILE TEA</h1>
          <div className="text-gray-700 space y-4">
            <p className="mb-6 font-serif font-bold text-2xl text-neutral-950">Countries</p>
              <p className="mb-6 font-serif"> China - Japan - Korea - Morocco</p>
            <p className="mb-6 font-serif text-2xl font-bold text-neutral-950">Ingredients</p>
               <p className="mb-6 font-serif">Camellia Sinensis leaves, Steamed or pan-fired to prevent oxidation, Fresh, vegetal, slightly astringent</p>
            <p className="mb-6 font-serif text-2xl font-bold text-neutral-950">Flavor</p>
              <p className="mb-6 font-serif">Grassy, fresh, with subtle sweetness</p>
          </div>
         </div>
        </div>
      </div>
      </main>
  );
}
