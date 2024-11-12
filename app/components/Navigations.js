import logoImg from "@/public/assets/images/logo1.png";
import Image from "next/image";
import Link from "next/link";
export default  function Navigation() {

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-700 flex justify-between items-center p-3 md:w-8/12 lg:w-5/12 mx-auto  rounded-3xl">
      {/* Menu items */}
      <div className="flex space-x-6 mx-6">
        <Link className="text-white" href="/">
          Home
        </Link>
        <Link className="text-white" href="/about">
          About
        </Link>
      </div>

      {/* Centered Icon */}
      {/* <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-white p-1 rounded-full">
          <Image src={userThumb} alt="Centered Icon" width="60" height="60" />
        </div> */}

      <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-6 bg-blue-700 rounded-full lg:p-1 border-2 border-blue-700">
        <Image
          src={logoImg}
          alt="Centered Icon"
          width={60}
          height={60}
          className="w-14 h-14 mb-4 md:w-16 md:h-16 lg:w-20 lg:h-20 rounded-full"
        />
      </div>
      <div className="flex space-x-6 mx-6 align-middle">
        <Link className="text-white" href="/projects">
          Projects
        </Link>
        <Link className="text-white" href="/contact">
          Contact
        </Link>
        <button className="bg-white px-3 py-1 rounded-md text-sm hidden">
          Logout
        </button>
      </div>
    </div>
  );
}
