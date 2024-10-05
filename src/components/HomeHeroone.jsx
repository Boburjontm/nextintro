import Image from 'next/image'
import Dining from "../img/diving.svg" 
import Living from "../img/living.svg" 
import Bedroom from "../img/bedroom.svg" 

export default function HomeHeroone() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-center text-3xl font-bold mb-6">Browse The Range</h1>
        <p className="text-center text-gray-500 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Dining */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer">
            <Image 
              src={Dining}
              width={300}
              height={200}
              alt="Dining"
              className="mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Dining</h2>
          </div>
          
          {/* Living */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer">
            <Image 
              src={Living}
              width={300}
              height={200}
              alt="Living"
              className="mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Living</h2>
          </div>

          {/* Bedroom */}
          <div className="bg-white rounded-lg shadow-md p-4 text-center cursor-pointer">
            <Image 
              src={Bedroom}
              width={300}
              height={200}
              alt="Bedroom"
              className="mx-auto"
            />
            <h2 className="text-xl font-semibold mt-4">Bedroom</h2>
          </div>
        </div>
      </div>
    </div>
  )
}
