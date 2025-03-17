import sustainableFashionImg from "../assets/Sakshiproject/img1.png";

const SustainableFashion = () => {
  return (
    <section className="py-16 px-6 lg:px-20 bg-background">
      <div className="flex flex-col lg:flex-row items-center gap-12">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={sustainableFashionImg}
            alt="Sustainable Fashion"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl  tracking-wide">
            What is
            <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
              {" "}

              Sustainable Fashion ?
            </span>
          </h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            Sustainable fashion focuses on eco-friendly materials, ethical production, and reducing waste. It promotes slow fashion, fair wages, and minimal environmental impact, ensuring a responsible and long-lasting approach to clothing and accessories.


          </p>

          {/* <ul className="mt-4 space-y-3">
            <li className="flex items-center">
              ✅ Made from **organic & recycled materials**
            </li>
            <li className="flex items-center">
              ✅ Reduces **waste & pollution**
            </li>
            <li className="flex items-center">
              ✅ Supports **fair trade & ethical labor**
            </li>
          </ul> */}

          {/* <a
            href="#"
            className="inline-block mt-6 bg-secondary text-white py-3 px-5 rounded-md font-medium hover:bg-accent transition-all"
          >
            Learn More
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default SustainableFashion;
