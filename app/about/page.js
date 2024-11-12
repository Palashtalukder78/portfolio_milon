import EducationalQualification from "../components/EducationalQualification";
import Skills from "../components/Skills";

export default function AboutPage() {
  return (
    <>
      <div className="flex gap-4  flex-col md:flex-col lg:flex-row  justify-center items-center min-h-screen">
        <div>
          <EducationalQualification />f
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </>
  );
}
