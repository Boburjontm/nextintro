export default function ContactShop() {
  return (
    <div>
      {/* Banner qismi */}
      <div className="relative h-64 bg-cover bg-center" style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/abstract-painting-on-grey-wall-260nw-1342056737.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-25"></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="text-4xl font-bold">Contact</h1>
          <p className="mt-2">
            <a href="#" className="hover:underline">Home</a> &gt; Contact
          </p>
        </div>
      </div>

      {/* Filter va natijalar */}
      <div className="py-4 px-6 bg-gray-100 border-t-2 border-yellow-500">
        <div className="flex justify-between items-center">
          {/* Filter tugmalari */}
          <div className="flex items-center space-x-4">
            <button className="flex items-center text-gray-700 hover:text-black">
              <svg className="h-6 w-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 000 2h18a1 1 0 100-2H3zM6 10a1 1 0 011-1h10a1 1 0 010 2H7a1 1 0 01-1-1zm-3 6a1 1 0 000 2h18a1 1 0 100-2H3z"></path>
              </svg>
              Filter
            </button>
            <button className="text-gray-700 hover:text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16"></path>
              </svg>
            </button>
            <button className="text-gray-700 hover:text-black">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6h18M3 10h18M3 14h18M3 18h18"></path>
              </svg>
            </button>
          </div>

          {/* Showing natijalar */}
          <div className="text-gray-700">
            Showing 1–16 of 32 results
          </div>

          {/* Show va Short by tugmalari */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="mr-2">Show</span>
              <input type="number" className="border px-2 py-1 w-16 text-center" value="16" />
            </div>
            <div className="flex items-center">
              <span className="mr-2">Short by</span>
              <select className="border px-2 py-1">
                <option>Default</option>
                {/* Qo'shimcha option qo'shishingiz mumkin */}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
