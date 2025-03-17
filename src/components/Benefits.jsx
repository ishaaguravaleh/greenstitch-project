import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const Benefits = () => {
  return (
    <>
      <div id="benefits" className="relative mt-20 border-gray-300 min-h-[600px]">
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide text-[#5A3E36]">
            Benefits of
            {" "}
            <span className="bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] text-transparent bg-clip-text">
              Sustainable Fashion
            </span>
          </h2>
        </div>

        <div className="flex flex-wrap justify-center mt-5 lg:mt-5">
          <div className="pt-12 w-full lg:w-1/2">
            {checklistItems.map((item, index) => (
              <div key={index} className="mb-12">
                <div className="flex items-center">
                  <div className="flex mx-6 h-10 w-10 p-2 bg-[#E3B7A0] text-[#5A3E36] justify-center items-center rounded-full">
                    <CheckCircle2 />
                  </div>
                  <h5 className="mt-1 text-xl font-semibold text-[#A86A5C]">
                    {item.title}
                  </h5>
                </div>
                {/* <p className="text-md text-[#7C5A50] ml-16">{item.description}</p> */}
                <ul className="ml-24 list-disc text-md text-[#7C5A50] mt-2">
                  {item.subpoints && item.subpoints.map((subpoint, subIndex) => (
                    <li key={subIndex}>{subpoint}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Benefits;
