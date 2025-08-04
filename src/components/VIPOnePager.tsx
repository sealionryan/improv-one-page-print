import vipLogoColor from '/assets/vip-logo-color.png';
import vipLogoWhite from '/assets/vip-logo-white.png';

const VIPOnePager = () => {
  return (
    <div className="w-[612px] h-[792px] mx-auto bg-gradient-to-br from-vip-purple-50 via-white to-vip-coral-50 vip-body text-xs leading-tight print:shadow-none overflow-hidden">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-vip-purple-900 to-vip-purple-800 text-white p-4 flex items-center justify-between">
        <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-12" />
        <div className="text-right">
          <h1 className="text-lg vip-heading text-vip-coral-300">VIP Improv One Pager</h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="p-4 grid grid-cols-12 gap-2 h-[calc(792px-80px)]">
        
        {/* Hero Question */}
        <div className="col-span-12 bg-vip-coral-700 text-white text-center mb-1 p-3 rounded-lg">
          <h2 className="text-base vip-heading font-bold">How can Improv *IMPROVE* you and your team?</h2>
        </div>

        {/* What is Improv Section - Full Width Row */}
        <div className="col-span-12 bg-gradient-to-r from-vip-purple-800 to-vip-purple-700 text-white p-3 rounded-lg mb-1">
          <h3 className="text-sm vip-heading mb-2 text-vip-coral-200 font-bold">What is Improv?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs vip-body">• Improvisation is not just comedy - it's a way to cultivate vulnerability and connection within your team and beyond.</p>
            </div>
            <div>
              <p className="text-xs vip-body">• Add an engaging and creative dimension to your personal and professional development!</p>
            </div>
          </div>
        </div>

        {/* What can Improv elevate Section - Full Width Row */}
        <div className="col-span-12 space-y-2 mb-2">
          <div className="bg-white/70 p-2 rounded-lg border border-vip-purple-200">
            <h3 className="text-sm vip-heading text-vip-purple-800 mb-0 font-bold">What can Improv elevate?</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-2 rounded-lg border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Communication</h4>
              <p className="text-xs vip-body text-vip-purple-900">Improv exercises offer experiential practice in speaking and listening, both verbally and non-verbally - learn how you come across to and perceive others.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-2 rounded-lg">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Storytelling</h4>
              <p className="text-xs vip-body">Step into the narrative of your ensemble and of others - learn how to engage with your personal story by gaining perspective from others.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-2 rounded-lg">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Team Building</h4>
              <p className="text-xs vip-body">Play, create, and discover with your team, building unforgettable connections that make working together fun and productive.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-2 rounded-lg border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Presentation</h4>
              <p className="text-xs vip-body text-vip-purple-900">Whether you are a public speaker, salesperson, healthcare provider, student, or just plain human, how you present yourself, your feelings, and your ideas matters - master yourself through improvisation.</p>
            </div>
          </div>
        </div>

        {/* Class Options Section */}
        <div className="col-span-7 bg-gradient-to-br from-vip-purple-800 to-vip-purple-900 text-white p-3 rounded-lg">
          <h3 className="text-sm vip-heading mb-2 text-vip-coral-200 font-bold">Class Options</h3>
          
          <div className="space-y-2">
            <div className="bg-white/10 p-2 rounded-lg border border-white/20">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Private Workshop</h4>
              <p className="text-xs vip-body">Your team of 5-25 people experience up to two hours of customized improv exercises designed to develop your desired skill sets with an expert facilitator.</p>
            </div>
            
            <div className="bg-white/10 p-2 rounded-lg border border-white/20">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Take a class for individuals</h4>
              <ul className="text-xs vip-body space-y-0.5">
                <li>• Take a six-week class, 2.5 hours each week.</li>
                <li>• Your class ensemble of individuals is up to 15 students.</li>
                <li>• Each week builds on the previous, giving you tools and practice for personal development and a group of new friends!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="col-span-5 space-y-2">
          <div className="bg-vip-coral-700 text-white p-2 rounded-lg text-center">
            <h3 className="text-sm vip-heading font-bold">FAQs</h3>
          </div>
          
          <div className="space-y-1">
            <div className="bg-white/70 p-2 rounded-lg border border-vip-purple-200">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Do I need to have improv experience?</h4>
              <p className="text-xs vip-body text-vip-purple-900">No! Just come in with an open mind and be ready to play.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-2 rounded-lg border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Does everyone need to be extroverts?</h4>
              <p className="text-xs vip-body text-vip-purple-900">Definitely not. All personalities and skill sets add to the ensemble.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-2 rounded-lg">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">How do we contact you?</h4>
              <p className="text-xs vip-body">Email <span className="vip-heading text-vip-coral font-bold">info@vegasimprov.com</span> or call <span className="vip-heading text-vip-coral font-bold">702-847-1111</span>.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-12 bg-gradient-to-r from-vip-purple-900 to-vip-purple-950 text-white p-2 rounded-lg text-center mt-1">
          <div className="flex items-center justify-center space-x-4">
            <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-6" />
            <div className="text-xs">
              <p className="vip-heading font-bold">Vegas Improv Power | Improv Comedy School in Las Vegas, NV</p>
              <p className="vip-body text-vip-coral-300">https://vegasimprov.com/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPOnePager;