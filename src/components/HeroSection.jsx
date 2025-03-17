import image1 from "../assets/Sakshiproject/img3.png";
import image2 from "../assets/Sakshiproject/img4.png";
import image3 from "../assets/Sakshiproject/img5.png";

const HeroSection = () => {

  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="flex flex-col items-center mt-5 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        GreenStitch
        <span className="bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          {" "}

          Where Sustainabililty meets fashion
        </span>
      </h1>

      <p className="mt-10 text-lg text-center text-text max-w-4xl">

        Clothing , Accesories , Home Decor and More
      </p>


      <div className="flex mt-10 justify-center">
        <img
          src={image1}
          alt="Image 1"
          className="rounded-lg w-1/3  mx-2 my-4"
        />

        <img
          src={image2}
          alt="Image 2"
          className="rounded-lg w-1/3  mx-2 my-4"
        />

        <img
          src={image3}
          alt="Image 3"
          className="rounded-lg w-1/3  mx-2 my-4"
        />
      </div>

      <button
        onClick={scrollToProducts}
        className="mt-10 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300 ease-in-out"
      >
        Shop Now
      </button>



    </div>
  );
};

export default HeroSection;
