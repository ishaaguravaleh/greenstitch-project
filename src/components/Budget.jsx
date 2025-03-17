
import { DollarSign } from "lucide-react"; // Import an icon from lucide-react or any other icon library

const Budget = () => {
  return (
    <div id="budget" className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider text-[#5A3E36]">
        Budget
      </h2>
      <div className="max-w-2xl mx-auto p-6 border border-[#D99B8F] rounded-lg shadow-lg flex flex-col items-center">
        <DollarSign className="w-12 h-12 text-[#D99B8F] mb-4" /> {/* Icon above the text */}
        <p className="text-lg text-gray-700 text-center">
          For initial sustainable fashion dropshipping, budget ₹75,000/month for 100 orders. Allocate 35% to supplier costs, 10% to shipping, 15% to marketing, 5% to platform fees, 10% to middleman commissions, and 25% as profit. Focus on premium pricing, eco-conscious branding, and influencer marketing to maximize sales and sustainability impact.

        </p>
      </div>
    </div>
  );
};

export default Budget;