import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CustomFeaturesPage() {

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="p-8">
          {/* Breadcrumb */}
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">🏠</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li>
                <Link href="/wiki" className="text-gray-400 hover:text-white">Wiki</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li className="text-blue-400 font-medium">Custom Features</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Custom Features Overview</h1>
            
            {/* Introduction */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white">OLYMPUS CUSTOM FEATURES</h3>
              </div>
              <p className="text-gray-300">
                Olympus offers a wide range of custom features designed to enhance your gaming experience. 
                These features are unique to our server and provide additional gameplay mechanics, quality of life improvements, 
                and exclusive content not found in the original game.
              </p>
            </div>
            
            {/* Quality of Life Features */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🛠️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">QUALITY OF LIFE IMPROVEMENTS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-semibold">Interface Enhancements:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Enhanced inventory management</li>
                    <li>• Improved bazaar search functionality</li>
                    <li>• Advanced chat system with filters</li>
                    <li>• Customizable UI elements</li>
                    <li>• Auto-sort inventory options</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-semibold">Gameplay Improvements:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Auto-pickup for items</li>
                    <li>• Enhanced pet AI system</li>
                    <li>• Improved party management</li>
                    <li>• Advanced guild features</li>
                    <li>• Custom keybind options</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Custom Systems */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚙️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CUSTOM SYSTEMS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🏆 Achievement System</h4>
                  <p className="text-gray-300 text-sm">
                    Complete various challenges and unlock exclusive rewards, titles, and recognition for your accomplishments.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🎯 Daily Quest System</h4>
                  <p className="text-gray-300 text-sm">
                    Engage with daily challenges that provide experience, gold, and special rewards to keep gameplay fresh.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🏪 Enhanced Shop System</h4>
                  <p className="text-gray-300 text-sm">
                    Access rotating shop items, seasonal exclusives, and special promotions with our advanced shop system.
                  </p>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">🎮 Custom Events</h4>
                  <p className="text-gray-300 text-sm">
                    Participate in server-wide events with unique mechanics, exclusive rewards, and community competitions.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Exclusive Content */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🌟</span>
                </div>
                <h3 className="text-lg font-semibold text-white">EXCLUSIVE CONTENT</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-semibold">Custom Maps & Dungeons:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Olympus Citadel - Endgame dungeon</li>
                    <li>• Crystal Caverns - Mining expedition</li>
                    <li>• Shadow Realm - PvP battleground</li>
                    <li>• Mystic Gardens - Peaceful exploration</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <h4 className="text-blue-400 font-semibold">Unique Items & Equipment:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Olympus Legendary Weapons</li>
                    <li>• Custom costume designs</li>
                    <li>• Exclusive pet variants</li>
                    <li>• Special effect accessories</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Advanced Features */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-white">ADVANCED FEATURES</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-blue-400 font-semibold">Multi-Character Support:</span> Manage multiple characters with ease</li>
                <li>• <span className="text-blue-400 font-semibold">Advanced Statistics:</span> Detailed performance tracking and analytics</li>
                <li>• <span className="text-blue-400 font-semibold">Custom Macros:</span> Create personalized command sequences</li>
                <li>• <span className="text-blue-400 font-semibold">Enhanced Security:</span> Advanced anti-cheat and account protection</li>
                <li>• <span className="text-blue-400 font-semibold">Community Tools:</span> Built-in social features and communication tools</li>
              </ul>
            </div>
            
            {/* Getting Started */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white">GETTING STARTED</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Most custom features are automatically available once you create your character. Some advanced features 
                may require specific levels or quest completions to unlock.
              </p>
              <p className="text-gray-300">
                Check the individual feature guides in this wiki section for detailed information on how to use each system.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
