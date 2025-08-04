import vipLogoColor from '/lovable-uploads/3f9238d9-bd32-4bb8-8b40-f64b04e423fa.png';
import vipLogoWhite from '/lovable-uploads/1ba79ab5-e403-4bb6-af85-e076802d4948.png';

const VIPOnePager = () => {
  return (
    <div className="w-[612px] h-[792px] mx-auto bg-white font-sans text-xs leading-tight print:shadow-none shadow-lg">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-vip-purple-darker to-vip-purple text-white p-4 flex items-center justify-between">
        <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-12" />
        <div className="text-right">
          <h1 className="text-lg font-bold">VIP Improv One Pager</h1>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="p-3 grid grid-cols-12 gap-2 h-[calc(792px-80px)]">
        
        {/* Hero Question */}
        <div className="col-span-12 bg-gradient-to-r from-vip-orange to-vip-orange-light p-3 rounded text-white text-center mb-1">
          <h2 className="text-base font-bold">How can Improv *IMPROVE* you and your team?</h2>
        </div>

        {/* What is Improv Section - Full Width Row */}
        <div className="col-span-12 bg-vip-purple text-white p-3 rounded mb-1">
          <h3 className="text-sm font-bold mb-2">What is Improv?</h3>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs">• Improvisation is not just comedy – it's a way to cultivate vulnerability and connection within your team and beyond.</p>
            </div>
            <div>
              <p className="text-xs">• Add an engaging and creative dimension to your personal and professional development!</p>
            </div>
          </div>
        </div>

        {/* What can Improv elevate Section - Full Width Row */}
        <div className="col-span-12 space-y-2 mb-2">
          <div className="bg-muted p-2 rounded">
            <h3 className="text-sm font-bold text-vip-purple mb-1">What can Improv elevate?</h3>
          </div>
          
          <div className="grid grid-cols-4 gap-2">
            <div className="bg-vip-orange-light p-2 rounded">
              <h4 className="font-bold text-xs text-vip-purple-dark mb-1">Communication</h4>
              <p className="text-xs text-vip-purple-dark">Improv exercises offer experiential practice in speaking and listening, both verbally and non-verbally – learn how you come across to and perceive others.</p>
            </div>
            
            <div className="bg-vip-purple-light text-white p-2 rounded">
              <h4 className="font-bold text-xs mb-1">Storytelling</h4>
              <p className="text-xs">Step into the narrative of your ensemble and of others – learn how to engage with your personal story by gaining perspective from others.</p>
            </div>
            
            <div className="bg-vip-purple-light text-white p-2 rounded">
              <h4 className="font-bold text-xs mb-1">Team Building</h4>
              <p className="text-xs">Play, create, and discover with your team, building unforgettable connections that make working together fun and productive.</p>
            </div>
            
            <div className="bg-vip-orange-light p-2 rounded">
              <h4 className="font-bold text-xs text-vip-purple-dark mb-1">Presentation</h4>
              <p className="text-xs text-vip-purple-dark">Whether you are a public speaker, salesperson, healthcare provider, student, or just plain human, how you present yourself, your feelings, and your ideas matters – master yourself through improvisation.</p>
            </div>
          </div>
        </div>

        {/* Class Options Section */}
        <div className="col-span-7 bg-gradient-to-br from-vip-purple to-vip-purple-dark text-white p-3 rounded">
          <h3 className="text-sm font-bold mb-2 text-vip-orange">Class Options</h3>
          
          <div className="space-y-2">
            <div className="bg-white/10 p-2 rounded">
              <h4 className="font-bold text-xs mb-1">Private Workshop</h4>
              <p className="text-xs">Your team of 5-25 people experience up to two hours of customized improv exercises designed to develop your desired skill sets with an expert facilitator.</p>
            </div>
            
            <div className="bg-white/10 p-2 rounded">
              <h4 className="font-bold text-xs mb-1">Take a class for individuals</h4>
              <ul className="text-xs space-y-0.5">
                <li>• Take a six-week class, 2.5 hours each week.</li>
                <li>• Your class ensemble of individuals is up to 15 students.</li>
                <li>• Each week builds on the previous, giving you tools and practice for personal development and a group of new friends!</li>
              </ul>
            </div>
          </div>
        </div>

        {/* FAQs Section */}
        <div className="col-span-5 space-y-2">
          <div className="bg-vip-orange text-white p-2 rounded text-center">
            <h3 className="text-sm font-bold">FAQs</h3>
          </div>
          
          <div className="space-y-1">
            <div className="bg-muted p-2 rounded">
              <h4 className="font-bold text-xs text-vip-purple mb-1">Do I need to have improv experience?</h4>
              <p className="text-xs text-vip-purple-dark">No! Just come in with an open mind and be ready to play.</p>
            </div>
            
            <div className="bg-vip-orange-light p-2 rounded">
              <h4 className="font-bold text-xs text-vip-purple-dark mb-1">Does everyone need to be extroverts?</h4>
              <p className="text-xs text-vip-purple-dark">Definitely not. All personalities and skill sets add to the ensemble.</p>
            </div>
            
            <div className="bg-vip-purple text-white p-2 rounded">
              <h4 className="font-bold text-xs mb-1">How do we contact you?</h4>
              <p className="text-xs">Email <span className="font-bold text-vip-orange">info@vegasimprov.com</span> or call <span className="font-bold text-vip-orange">702-847-1111</span>.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="col-span-12 bg-vip-purple-darker text-white p-2 rounded text-center mt-1">
          <div className="flex items-center justify-center space-x-4">
            <img src={vipLogoWhite} alt="Vegas Improv Power" className="h-6" />
            <div className="text-xs">
              <p className="font-bold">Vegas Improv Power | Improv Comedy School in Las Vegas, NV</p>
              <p className="text-vip-orange">https://vegasimprov.com/</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VIPOnePager;