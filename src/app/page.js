import Link from "next/link";
import MainSlider from "./_components/MainSlider";
import CarouselService from "./_components/CarouselService";
import CarouselPartner from "./_components/CarouselPartner";
import SectionContact from "./_components/SectionContact";
import { partnerListAllAction } from "@/actions/PartnerActions";

export default async function Home() {
  const [partnerData, ] = await Promise.all([partnerListAllAction()])
  return (
    <>
    <MainSlider />


    <section className="w-full py-[5rem]">
      <div className="w-[70%] mx-auto flex flex-col items-center justify-center">
        <h2 className="text-center text-blue-900 text-[2rem] font-extrabold mb-4">WHO WE ARE?</h2>
        <hr className="w-[10rem] border-b border-[0.4rem]" />
        <p className="text-center text-[1.6rem] mt-4 mb-6">
          At Network Resilience, we specialize in delivering
          cutting-edge Information Communication
          Technology (ICT) and networking solutions. Our
          mission is to empower businesses and residences
          with robust, reliable, and secure connectivity that
          drives efficiency, productivity, and growth.
        </p>
        <Link href="/about">
          <button className="px-12 py-4 text-lg rounded-2xl bg-gradient-to-br from-green-500 to-blue-900 text-white ease-in-out duration-300 transition-all hover:drop-shadow-lg hover:scale-110 hover:bg-gradient-to-br hover:from-blue-500 hover:to-blue-950">
            View More
          </button>
        </Link>
      </div>
    </section>


    <section className="w-full py-[5rem] text-gray-50 bg-gradient-to-br from-blue-800 to-blue-950">
      <div className="w-[92%] mx-auto flex flex-col items-center justify-center ">
          <h2 className="text-center  text-[2rem] font-extrabold mb-4">WHAT WE DO?</h2>
          <hr className="w-[10rem] border-b border-[0.4rem]" />
      </div>

      <div className="w-[92%] mx-auto mt-12">
        <CarouselService />
      </div>

    </section>


    <section className="w-[100%] py-[5rem]">
      <div className="w-[92%] mx-auto flex flex-col items-center justify-center ">
          <h2 className="text-center text-blue-900 text-[2rem] font-extrabold mb-4">OUR PARTNERS?</h2>
          <hr className="w-[10rem] border-blue-900 border-b border-[0.4rem]" />
      </div>
      <div className="w-[92%] mx-auto mt-8">
        <CarouselPartner dbData={partnerData} />
      </div>
    </section>

    
    <SectionContact />


    </>
  );
}
