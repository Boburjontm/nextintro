import Image from 'next/image';
import Cup from "../img/cup.svg"
import Comunication from "../img/comunication.svg"
import Free from "../img/Free.svg"
import Ptichka from "../img/ptichka.svg"

const Features = () => {
  return (
    <div className="flex justify-between items-center bg-[#fef6ef] p-4 border border-dashed border-gray-200 px-8">
      <div className="flex items-center space-x-2">
        <Image src={Cup} alt="High Quality" width={32} height={32} />
        <div>
          <h3 className="text-lg font-bold">High Quality</h3>
          <p className="text-sm text-gray-500">crafted from top materials</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Image src={Ptichka} alt="Warranty Protection" width={32} height={32} />
        <div>
          <h3 className="text-lg font-bold">Warranty Protection</h3>
          <p className="text-sm text-gray-500">Over 2 years</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Image src={Free} alt="Free Shipping" width={32} height={32} />
        <div>
          <h3 className="text-lg font-bold">Free Shipping</h3>
          <p className="text-sm text-gray-500">Order over 150$</p>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <Image src={Comunication}alt="24/7 Support" width={32} height={32} />
        <div>
          <h3 className="text-lg font-bold">24 / 7 Support</h3>
          <p className="text-sm text-gray-500">Dedicated support</p>
        </div>
      </div>
    </div>
  );
};

export default Features;
