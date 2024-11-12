import userImage from '@/public/assets/images/milon.png';
import Image from "next/image";

export default function RootLayOut() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen" >
      <Image
        src={userImage}
        className=" rounded-md"
        width={150}
        height={170}
        placeholder="blur"
        alt="Milon-Photo"
      />
      <h1 className="text-center text-2xl mt-4">মোঃ মিলন</h1>
      <h1 className="text-xl">বৈদ্যুতিক মেকানিক</h1>
      <a href="tel:+8801980458547" className="text-blue-500">
        01980458547
      </a>
    </div>
  );
}
