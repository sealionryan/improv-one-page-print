import vipLogoColor from '/assets/vip-logo-color.png';
import vipLogoWhite from '/assets/vip-logo-white.png';

const VIPOnePager = () => {
  return (
    <div className="w-[612pt] h-[792pt] mx-auto bg-gradient-to-br from-vip-purple-50 via-white to-vip-coral-50 vip-body text-xs leading-tight print:shadow-none overflow-hidden flex flex-col">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-vip-purple-700 to-vip-purple-500 text-white p-2 flex items-center justify-between">
        <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-8" />
        <div className="text-right">
          <h1 className="text-base vip-heading text-vip-coral-300">VIP Improv One Pager</h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="flex-1 p-3 grid grid-cols-12 gap-1">
        
        {/* Hero Question */}
        <div className="col-span-12 vip-glass-card bg-vip-coral-100/60 text-vip-purple-800 text-center mb-0.5 p-2 rounded-2xl">
          <h2 className="text-base vip-heading font-bold">How can Improv *IMPROVE* you and your team?</h2>
        </div>

        {/* What is Improv Section - Full Width Row */}
        <div className="col-span-12 bg-gradient-to-r from-vip-purple-700 to-vip-purple-600 text-white p-2 rounded-2xl mb-0.5">
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
          <div className="bg-white/70 p-2 rounded-2xl border border-vip-purple-200">
            <h3 className="text-sm vip-heading text-vip-purple-800 mb-0 font-bold">What can Improv elevate?</h3>
          </div>
          
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-3 rounded-2xl border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Communication</h4>
              <p className="text-xs vip-body text-vip-purple-900">Improv exercises offer experiential practice in speaking and listening, both verbally and non-verbally - learn how you come across to and perceive others.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-3 rounded-2xl">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Storytelling</h4>
              <p className="text-xs vip-body">Step into the narrative of your ensemble and of others - learn how to engage with your personal story by gaining perspective from others.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-3 rounded-2xl">
              <h4 className="vip-heading text-xs mb-1 text-vip-coral-200 font-bold">Team Building</h4>
              <p className="text-xs vip-body">Play, create, and discover with your team, building unforgettable connections that make working together fun and productive.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-3 rounded-2xl border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-1 font-bold">Presentation</h4>
              <p className="text-xs vip-body text-vip-purple-900">Whether you are a public speaker, salesperson, healthcare provider, student, or just plain human, how you present yourself, your feelings, and your ideas matters - master yourself through improvisation.</p>
            </div>
          </div>
        </div>

        {/* Class Options Section */}
        <div className="col-span-7 bg-gradient-to-br from-vip-purple-700 to-vip-purple-800 text-white p-3 rounded-2xl">
          <h3 className="text-sm vip-heading mb-3 text-vip-coral-200 font-bold">Class Options</h3>
          
          <div className="space-y-3">
            <div className="bg-white/10 p-3 rounded-2xl border border-white/20">
              <h4 className="vip-heading text-xs mb-2 text-vip-coral-200 font-bold">Private Workshop</h4>
              <p className="text-xs vip-body">Your team of 5-25 people experience up to two hours of customized improv exercises designed to develop your desired skill sets with an expert facilitator.</p>
            </div>
            
            <div className="bg-white/10 p-3 rounded-2xl border border-white/20">
              <h4 className="vip-heading text-xs mb-2 text-vip-coral-200 font-bold">Take a class for individuals</h4>
              <ul className="text-xs vip-body space-y-1">
                <li>• Take a six-week class, 2.5 hours each week.</li>
                <li>• Your class ensemble of individuals is up to 15 students.</li>
                <li>• Each week builds on the previous, giving you tools and practice for personal development and a group of new friends!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="col-span-5 space-y-2">
          <div className="bg-vip-coral-700 text-white p-3 rounded-2xl text-center">
            <h3 className="text-sm vip-heading font-bold">FAQs</h3>
          </div>
          
          <div className="space-y-2">
            <div className="bg-white/70 p-3 rounded-2xl border border-vip-purple-200">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-2 font-bold">Do I need to have improv experience?</h4>
              <p className="text-xs vip-body text-vip-purple-900">No! Just come in with an open mind and be ready to play.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-coral-100 to-vip-coral-200 p-3 rounded-2xl border border-vip-coral-300">
              <h4 className="vip-heading text-xs text-vip-purple-800 mb-2 font-bold">Does everyone need to be extroverts?</h4>
              <p className="text-xs vip-body text-vip-purple-900">Definitely not. All personalities and skill sets add to the ensemble.</p>
            </div>
            
            <div className="bg-gradient-to-br from-vip-purple-600 to-vip-purple-700 text-white p-3 rounded-2xl">
              <h4 className="vip-heading text-xs mb-2 text-vip-coral-200 font-bold">How do we contact you?</h4>
              <p className="text-xs vip-body">Email <span className="vip-heading text-vip-coral font-bold">info@vegasimprov.com</span> or call <span className="vip-heading text-vip-coral font-bold">702-847-1111</span>.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-12 bg-gradient-to-r from-vip-purple-700 via-vip-purple-600 to-vip-purple-700 text-white p-1.5 rounded-2xl text-center mt-0.5">
          <div className="flex items-center justify-center space-x-4">
            <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-5" />
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