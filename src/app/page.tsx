import Navigation from '@/components/Navigation'
// ❌ Removed: import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-hero">
      <Navigation />
      
      {/* Hero Section */}
      <main className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-shadow">
                  Welcome to <span className="text-blue-400">Olympus</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-gray-300">
                  The leading private server
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-blue-400">
                  Try it now!
                </h3>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-secondary">
                  DISCORD
                </button>
                <button className="btn-primary">
                  PLAY
                </button>
              </div>
            </div>
            
            {/* Right Content - Trident Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <svg 
                  className="w-64 h-64 lg:w-80 lg:h-80 text-blue-400 opacity-80" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L8 8H4L12 22L20 8H16L12 2Z" opacity="0.6"/>
                  <path d="M12 2L10 6H8L12 14L16 6H14L12 2Z" opacity="0.8"/>
                  <path d="M12 2L11 4H10L12 8L14 4H13L12 2Z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="bg-gray-800/50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-3xl font-bold text-white">
              Olympus - one name, one legend.
            </h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              Olympus is the <span className="text-blue-400 font-semibold">leading private server</span>, built with the objective to make the game enjoyable again.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The gameplay is designed around the idea of playing with only <span className="text-blue-400 font-semibold">one character</span>, no alts needed.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}
