
import { features } from "../constants";

const FeatureSection = () => {
  return (
    <>
      <div className="relative mt-10 min-h-[400px]"> {/* Reduced min-height */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mt-6 lg:mt-10 tracking-wide text-[#5A3E36]"> {/* Adjusted title size and margin */}
            Why  
            <span className="bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] text-transparent bg-clip-text">
              {" "} Sustainable Fashion
            </span> Matters ?
          </h2>
        </div>

        <div className="flex flex-wrap mt-6 lg:mt-10 justify-center"> {/* Adjusted margin */}
          {features.map((feature, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:shadow-xl text-center"> {/* Reduced padding */}
                <div className="flex justify-center mb-4">
                  <div className="flex h-12 w-12 p-2 bg-[#E3B7A0] text-[#5A3E36] justify-center items-center rounded-full">
                    {feature.icon}
                  </div>
                </div>
                <h5 className="text-lg text-[#A86A5C] font-semibold">{feature.text}</h5> {/* Adjusted title size */}
              </div>
            </div>
          ))}
        </div>

      
      </div>
    </>
  );
};

export default FeatureSection;