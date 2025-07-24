import { Diamond } from 'lucide-react';
export default function ChamomileTea() {
  return (
      <main className="flex bg-neutral-100 w-full h-screen justify-center items-center h-full p-4 ">
          <div className="flex flex-col mt-12 relative">
              <Diamond />
              <div className="">
      <div className="flex justify-center h-screen flex-col">
          <h1 className="text-6xl font-bold text-neutral-950 mb-4">CHAMOMILE TEA</h1>
          <div className="text-gray-700">
            <p className="mb-6"><span className="font-bold">Countries:</span> China - Japan - Korea - Morocco</p>
            <p className="mb-6"><span className="font-bold">Ingredients:</span> Camellia Sinensis leaves, Steamed or pan-fired to prevent oxidation, Fresh, vegetal, slightly astringent</p>
            <p className="mb-6"><span className="font-bold">Flavor:</span> Grassy, fresh, with subtle sweetness</p>
          </div>
         </div>
        </div>
      </div>
      </main>
  );
}
