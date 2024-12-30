import Image from "next/image";
const Hero = () => {
  return (
    <div className="w-full max-h-screen mb-7 relative">
      <Image
        src="/images/banner2.jpeg"
        alt="banner image"
        width={500}
        height={500}
        className="w-full max-h-screen object-contain"
      />
      <div className="absolute top-0 w-full h-full  text-gray-100 flex flex-col items-center justify-center">
        <h2 className="text-7xl lg:text-[150px] font-bold">Pakistan Tours</h2>
        <p className="text-xl md:text-2xl lg:text-5xl font-semibold">
        </p>
      </div>
    </div>
  );
};

export default Hero;
