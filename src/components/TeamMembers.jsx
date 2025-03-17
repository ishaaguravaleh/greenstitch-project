import { teamMembers } from "../constants";

const TeamMembers = () => {
  return (
    <section id="team" className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        Meet Our Team
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/4 p-4">
            <div className="bg-white shadow-lg border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center transition-transform transform hover:scale-105">



              {/* Name & Role */}
              <h6 className="text-xl font-semibold text-[#5A3E36] ">
                {member.name}
              </h6>
              <p className="text-sm text-neutral-600 mt-1">{member.role}</p>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamMembers;
