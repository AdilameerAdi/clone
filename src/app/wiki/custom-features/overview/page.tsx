import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CustomFeaturesOverviewPage() {

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
              <li className="text-blue-400 font-medium">Custom Features Overview</li>
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
                <h3 className="text-lg font-semibold text-white">WHAT MAKES OLYMPUS UNIQUE?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Olympus features a comprehensive set of custom enhancements designed to improve gameplay, 
                balance, and overall player experience. These features have been carefully crafted to maintain 
                the nostalgic feel while adding modern conveniences.
              </p>
            </div>

            {/* Core Features */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CORE ENHANCEMENTS</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-400">Enhanced Banking System:</strong> Support for transactions up to 2 billion gold with improved security
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-400">Advanced Inventory Management:</strong> Scrollable inventories and improved organization
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-400">Optimized Bazaar System:</strong> Reduced search cooldowns and better performance
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-blue-400">Visual Enhancements:</strong> Legendary item drop effects and improved minimap rendering
                  </div>
                </li>
              </ul>
            </div>

            {/* Quality of Life */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white">QUALITY OF LIFE IMPROVEMENTS</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Persistent Settings:</strong> Chat height and UI preferences saved between sessions
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Pet AI Improvements:</strong> Better following behavior in crowded areas
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-green-400">Performance Optimizations:</strong> Reduced lag and improved server stability
                  </div>
                </li>
              </ul>
            </div>

            {/* Security Features */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🛡️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">SECURITY & ANTI-CHEAT</h3>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Advanced Anti-Duplication:</strong> Multiple layers of protection against item duplication
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Enhanced Security Protocols:</strong> Improved server security and monitoring
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <strong className="text-red-400">Comprehensive Logging:</strong> Better bug tracking and issue resolution
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
