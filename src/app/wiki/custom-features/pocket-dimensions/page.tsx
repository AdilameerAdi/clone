import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PocketDimensionsPage() {

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
              <li>
                <Link href="/wiki/custom-features" className="text-gray-400 hover:text-white">Custom Features</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li className="text-blue-400 font-medium">Pocket Dimensions</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Pocket Dimensions</h1>
            
            {/* Overview */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🌌</span>
                </div>
                <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Pocket Dimensions are private, customizable spaces that players can access and decorate. These personal realms offer unique storage solutions, training areas, and social spaces.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Personal dimensional space accessible through dimensional gates</li>
                <li>• Customizable terrain, decorations, and functional buildings</li>
                <li>• Enhanced storage capacity beyond regular warehouses</li>
                <li>• Private training areas with configurable monster spawns</li>
                <li>• Social features for inviting friends and guild members</li>
              </ul>
            </div>
            
            {/* Accessing Dimensions */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🚪</span>
                </div>
                <h3 className="text-lg font-semibold text-white">ACCESSING YOUR DIMENSION</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Requirements</h4>
                  <ul className="space-y-1">
                    <li>• Level 50+ character</li>
                    <li>• Complete the &apos;Dimensional Explorer&apos; quest</li>
                    <li>• Purchase a Dimension Key from the NPC shop (500,000 gold)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Entry Methods</h4>
                  <ul className="space-y-1">
                    <li>• Use Dimension Portal stones (craftable or purchasable)</li>
                    <li>• Access through Dimensional Gates in major cities</li>
                    <li>• Use the &apos;/dimension&apos; command from anywhere</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dimension Features */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🏗️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">DIMENSION FEATURES</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Storage Solutions</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Enhanced Warehouse (2x normal capacity)</li>
                    <li>• Specialized item vaults (equipment, consumables)</li>
                    <li>• Material storage for crafting supplies</li>
                    <li>• Trophy display cases for achievements</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Training Areas</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Configurable monster spawns</li>
                    <li>• PvP practice zones</li>
                    <li>• Skill training dummies</li>
                    <li>• Experience bonus areas</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Utilities</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Personal NPC vendors</li>
                    <li>• Repair and upgrade stations</li>
                    <li>• Buff shrines and altars</li>
                    <li>• Teleportation networks</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Customization</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Terrain modification tools</li>
                    <li>• Decorative buildings and objects</li>
                    <li>• Custom lighting and weather</li>
                    <li>• Background music selection</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dimension Types */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🎨</span>
                </div>
                <h3 className="text-lg font-semibold text-white">DIMENSION TYPES</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Basic Dimension</h4>
                    <span className="text-green-400 font-bold">Free</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• 50x50 grid space</li>
                    <li>• Basic storage and training features</li>
                    <li>• Limited decoration options</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Premium Dimension</h4>
                    <span className="text-blue-400 font-bold">2,000,000 Gold</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• 100x100 grid space</li>
                    <li>• Advanced utilities and features</li>
                    <li>• Full customization suite</li>
                    <li>• Guest access permissions</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Guild Dimension</h4>
                    <span className="text-purple-400 font-bold">Guild Feature</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• 200x200 shared guild space</li>
                    <li>• Guild-wide storage and utilities</li>
                    <li>• Meeting halls and event areas</li>
                    <li>• Guild buff shrines and training grounds</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}