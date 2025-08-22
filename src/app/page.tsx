import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Green Background */}
      <section className="bg-section-green relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-shadow text-white">
                  Welcome to <span className="text-yellow-300 text-glow">DIONISY</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-green-100">
                  The leading private server
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-200">
                  Try it now!
                </h3>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary mb-4 sm:mb-0">
                  DISCORD
                </button>
                <button className="btn-primary">
                  PLAY
                </button>
              </div>
            </div>
            
            {/* Right Content - DIONISY Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white-hero">
                <Image 
                  src="/logo.png" 
                  alt="DIONISY Logo"
                  width={320}
                  height={320}
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Bottom Section - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <h2 className="text-3xl font-bold text-green-800">
            DIONISY - one name, one legend.
          </h2>
          <p className="text-lg text-green-900 leading-relaxed font-medium">
            DIONISY is the <span className="text-green-800 font-bold">leading private server</span>, built with the objective to make the game enjoyable again.
          </p>
          <p className="text-lg text-green-900 leading-relaxed font-medium">
            The gameplay is designed around the idea of playing with only <span className="text-green-800 font-bold">one character</span>, no alts needed.
          </p>
        </div>
      </section>
    </div>
  )
}
