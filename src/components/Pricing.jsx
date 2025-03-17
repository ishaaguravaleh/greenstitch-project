
import { pricingOptions } from "../constants"; // Ensure this imports the sample data

const Pricing = () => {
  return (
    <>
      <div id="products" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider text-[#5A3E36]">
          Prod
          <span className="bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] text-transparent bg-clip-text">
            ucts
          </span>
        </h2>

        <div className="flex flex-wrap justify-center">
          {pricingOptions.map((option, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-2">
              <div className="p-6 border border-neutral-700 rounded-xl text-center">
                {/* Add image above the title */}
                {option.image && (
                  <img
                    src={option.image}
                    alt={option.title}
                    className="mb-4 mx-auto" // Center the image and add margin below
                    style={{ maxWidth: "100%", height: "auto" }} // Responsive image
                  />
                )}
                <p className="text-3xl text-[#A86A5C]">
                  {option.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Pricing;