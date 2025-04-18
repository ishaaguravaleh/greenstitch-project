
import { CheckCircle2 } from "lucide-react"; // Import an icon for the checklist
import { targetItems } from "../constants"; // Assuming you have an array of target items

const Target = () => {
  return (
    <div id="target" className="relative mt-20  min-h-[600px]">
      <div className="text-center">


        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-[#5A3E36]">
          Tar
          <span className="bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] text-transparent bg-clip-text">
            get
          </span>
        </h2>
      </div>

      <div className="flex flex-wrap justify-center mt-5 lg:mt-5">
        {/* <div className="p-2 w-full lg:w-1/2">
          <img src={targetImage} alt="Target" className="rounded-lg shadow-lg" />
        </div> */}
        <div className="pt-12 w-full lg:w-1/2">
          {targetItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="flex mx-6 h-10 w-10 p-2 bg-[#E3B7A0] text-[#5A3E36] justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div>
                <h5 className="mt-1 text-xl font-semibold text-[#A86A5C]">
                  {item.title}
                </h5>
                {/* <p className="text-md text-[#7C5A50]">
                  {item.description}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Target;