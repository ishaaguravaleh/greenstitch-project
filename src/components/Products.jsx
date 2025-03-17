import { pricingOptions } from "../constants"; // Ensure this imports the sample data

const Products = () => {
  const viewMoreProducts = () => {
    // If there's a "More Products" section, scroll to it
    const moreProductsSection = document.getElementById("more-products");
    if (moreProductsSection) {
      moreProductsSection.scrollIntoView({ behavior: "smooth" });
    }
    // Otherwise, you can navigate to another page like "/products"
    // window.location.href = "/products";
  };

  return (
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
            <div className="p-6  border-neutral-700 rounded-xl text-center ">
              {/* Product Image */}
              {option.image && (
                <img
                  src={option.image}
                  alt={option.title}
                  className="mb-4 mx-auto "
                  style={{ maxWidth: "100%", height: "auto" }}
                />
              )}
              {/* Product Title */}
              <p className="text-3xl text-[#A86A5C] ">
                {option.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-10">
        <button
          onClick={viewMoreProducts}
          className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Products;
