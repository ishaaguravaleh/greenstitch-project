
import { successStories } from "../constants"; // Ensure this imports the sample data

const SuccessStory = () => {
  return (
    <>
      <div id="successstory" className="mt-20">
        <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider text-[#5A3E36]">
          Success{" "}
          <span className="bg-gradient-to-r from-[#D99B8F] to-[#A86A5C] text-transparent bg-clip-text">
            Stories
          </span>
        </h2>

        <div className="flex flex-wrap justify-center">
          {successStories.map((story, index) => (
            <div key={index} className="w-full sm:w-1/2 lg:w-1/2 p-2">
              <div className="p-6 border border-neutral-700 rounded-xl text-center">

                <p className="text-3xl text-[#A86A5C]">
                  {story.title}
                </p>
                <p className="text-md text-gray-600 mt-2">
                  {story.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SuccessStory;