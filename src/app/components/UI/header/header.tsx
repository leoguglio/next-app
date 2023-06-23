"use client";
import Link from "next/link";
import Navbar from "../navbar/navbar";
import Image from "next/image";

const Header = () => {
  return (
    <header className="relative h-fit z-10 text-gray-400 bg-gray-800 body-font">
      <div className="absolute z-10 w-full xs:invisible opacity-30">
        <svg
          data-name="Layer 1"
          className="relative z-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
        
          ></path>
        </svg>
      </div>

      <div className="container h-500 relative z-20 mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <Image
            src={"/balanza_justicia2.png"}
            alt="Logo estudio"
            width={100}
            height={100}
          />
        </Link>
        <Image
          className="filter blur-md"
          src={"/logo_paredes.jpeg"}
          alt="Logo estudio"
          width={50}
          height={30}
        />
        <h1 className="font-sans text-5xl text-white text-center tracking-wider">
          Estudio Paredes
        </h1>
        <Navbar />
        <div className="divide-y divide-blue-200"></div>
      </div>
    </header>
  );
};

export default Header;
