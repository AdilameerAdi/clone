import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SnackProductionPage() {
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
              <Link href="/wiki/qol" className="text-gray-400 hover:text-white">Quality of Life</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Snack Production</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Snack Production System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🍯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Snack Production System allows pets to automatically produce valuable consumable items over time. 
              Set up your pets to generate snacks, potions, and other useful items while you're online or offline.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Pets automatically produce snacks and consumables</li>
              <li>• No manual intervention required once set up</li>
              <li>• Production continues even while offline</li>
              <li>• Multiple production types available</li>
            </ul>
          </div>
          
          {/* Production Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏭</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PRODUCTION TYPES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Health Snacks</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Greater Healing Potions</li>
                  <li>• Pet Food (various grades)</li>
                  <li>• Emergency Health Packets</li>
                  <li>• Stamina Recovery Snacks</li>
                  <li>• Antidotes and Cure Potions</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Mana Consumables</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Greater Mana Potions</li>
                  <li>• Spirit Shots (grades D-S)</li>
                  <li>• Blessed Spirit Shots</li>
                  <li>• Magic Recovery Crystals</li>
                  <li>• Concentration Enhancers</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Buff Consumables</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Temporary Stat Boosters</li>
                  <li>• Resistance Potions</li>
                  <li>• Speed Enhancement Elixirs</li>
                  <li>• Combat Efficiency Drinks</li>
                  <li>• Special Event Consumables</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Utility Items</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Teleport Scrolls</li>
                  <li>• Return Scrolls</li>
                  <li>• Pet Summoning Items</li>
                  <li>• Storage Expansion Tickets</li>
                  <li>• Repair Tools and Kits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pet Requirements */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🐾</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PET REQUIREMENTS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Eligible Pet Types</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Service Pets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Baby Pets (all types)</li>
                      <li>• Improved Baby Pets</li>
                      <li>• Mechanical Pets</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Special Pets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Event Reward Pets</li>
                      <li>• Premium Pets</li>
                      <li>• Anniversary Pets</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Production Pets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Factory Pets</li>
                      <li>• Crafting Companions</li>
                      <li>• Alchemist Pets</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Pet Level Requirements</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Basic Production (Level 1-20)</span>
                    <span className="text-green-400">Common snacks and potions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Advanced Production (Level 21-50)</span>
                    <span className="text-blue-400">Rare consumables and scrolls</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Master Production (Level 51+)</span>
                    <span className="text-purple-400">Epic items and special consumables</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Setup Process */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SETUP PROCESS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 1: Pet Preparation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Summon your eligible pet</li>
                  <li>• Ensure pet has sufficient hunger/happiness</li>
                  <li>• Check pet level meets production requirements</li>
                  <li>• Verify pet has available inventory space</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 2: Production Selection</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Open pet management interface</li>
                  <li>• Choose production type and specific items</li>
                  <li>• Set production quantity and duration</li>
                  <li>• Configure automatic collection settings</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 3: Resource Investment</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Provide initial materials and components</li>
                  <li>• Pay setup fee (varies by production type)</li>
                  <li>• Set up automatic resource replenishment</li>
                  <li>• Confirm production start</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Production Rates */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PRODUCTION RATES</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Basic Health Potions</span>
                <span className="text-green-400 font-semibold">1 every 30 minutes</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Spirit Shots (D-grade)</span>
                <span className="text-green-400 font-semibold">10 every 1 hour</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Teleport Scrolls</span>
                <span className="text-blue-400 font-semibold">1 every 2 hours</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Blessed Consumables</span>
                <span className="text-purple-400 font-semibold">1 every 4 hours</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Special Event Items</span>
                <span className="text-orange-400 font-semibold">1 every 8 hours</span>
              </div>
            </div>
          </div>

          {/* Management */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MANAGEMENT & ACCESS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.petproduce</code> or <code className="bg-gray-800 px-2 py-1 rounded">.snacks</code></p>
              <p><strong>Pet Manager:</strong> Right-click your pet and select "Production Settings"</p>
              <p><strong>Collection:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.collect</code> to gather produced items</p>
              <p><strong>Status Check:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.producestatus</code> to view current production</p>
              <p><strong>Auto-Collection:</strong> Enable in pet settings for hands-free operation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}