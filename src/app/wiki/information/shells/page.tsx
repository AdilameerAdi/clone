import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ShellsPage() {
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
              <Link href="/wiki/information" className="text-gray-400 hover:text-white">Information</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Shells</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Shell System Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🐚</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Shells are special consumable items that provide temporary powerful effects to enhance your character&apos;s 
              capabilities. They are essential for high-level content and competitive gameplay.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Provide significant temporary stat bonuses</li>
              <li>• Essential for raid encounters and PvP</li>
              <li>• Various types with different effects and durations</li>
              <li>• Can be stacked with other buffs and consumables</li>
            </ul>
          </div>
          
          {/* Shell Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SHELL TYPES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combat Shells</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Power Shell:</strong> +25% Physical Attack Power</li>
                  <li>• <strong>Magic Shell:</strong> +25% Magical Attack Power</li>
                  <li>• <strong>Critical Shell:</strong> +15% Critical Rate</li>
                  <li>• <strong>Accuracy Shell:</strong> +20% Accuracy Rate</li>
                  <li>• <strong>Speed Shell:</strong> +30% Attack Speed</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Defense Shells</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Shield Shell:</strong> +20% Physical Defense</li>
                  <li>• <strong>Mental Shell:</strong> +20% Mental Defense</li>
                  <li>• <strong>Resist Shell:</strong> +15% All Resistances</li>
                  <li>• <strong>Evasion Shell:</strong> +25% Evasion Rate</li>
                  <li>• <strong>HP Shell:</strong> +30% Maximum HP</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Utility Shells</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>MP Shell:</strong> +40% Maximum MP</li>
                  <li>• <strong>Recovery Shell:</strong> +50% HP/MP Recovery</li>
                  <li>• <strong>Movement Shell:</strong> +40% Movement Speed</li>
                  <li>• <strong>Casting Shell:</strong> +20% Casting Speed</li>
                  <li>• <strong>Weight Shell:</strong> +50% Carrying Capacity</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Shells</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Experience Shell:</strong> +100% EXP Gain</li>
                  <li>• <strong>Drop Shell:</strong> +50% Drop Rate</li>
                  <li>• <strong>Spoil Shell:</strong> +30% Spoil Success</li>
                  <li>• <strong>Adena Shell:</strong> +25% Adena Drop</li>
                  <li>• <strong>Craft Shell:</strong> +20% Craft Success</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shell Grades */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SHELL GRADES & DURATION</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Grade Classifications</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                    <span className="text-gray-300">Basic Shell (White)</span>
                    <span className="text-white font-semibold">30 minutes duration</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                    <span className="text-gray-300">Enhanced Shell (Green)</span>
                    <span className="text-green-400 font-semibold">45 minutes duration</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                    <span className="text-gray-300">Superior Shell (Blue)</span>
                    <span className="text-blue-400 font-semibold">60 minutes duration</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                    <span className="text-gray-300">Master Shell (Purple)</span>
                    <span className="text-purple-400 font-semibold">90 minutes duration</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Legendary Shell (Orange)</span>
                    <span className="text-orange-400 font-semibold">120 minutes duration</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Effect Scaling</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Higher grade shells provide stronger effects</li>
                  <li>• Duration increases with shell quality</li>
                  <li>• Some effects are exclusive to higher grades</li>
                  <li>• Legendary shells may have unique properties</li>
                </ul>
              </div>
            </div>
          </div>

          {/* How to Obtain */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO OBTAIN SHELLS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Monster Drops</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• High-level monsters (75+ level)</li>
                  <li>• Raid bosses and epic monsters</li>
                  <li>• Dungeon final bosses</li>
                  <li>• Special event monsters</li>
                  <li>• Drop rates vary by monster level</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Crafting & Trading</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Alchemy and advanced crafting</li>
                  <li>• Player trading and auction house</li>
                  <li>• Guild rewards and contributions</li>
                  <li>• Special NPC vendors</li>
                  <li>• Event rewards and competitions</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Quest Rewards</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• High-level quest completions</li>
                  <li>• Daily and weekly quest rewards</li>
                  <li>• Class change quest bonuses</li>
                  <li>• Territory and siege rewards</li>
                  <li>• Achievement milestone rewards</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Sources</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fishing rare catches</li>
                  <li>• Manor production rewards</li>
                  <li>• Lottery and gambling systems</li>
                  <li>• Donation reward packages</li>
                  <li>• Limited-time promotional events</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Usage Strategy */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white">USAGE STRATEGY</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">When to Use Shells</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Before engaging in raid boss encounters</li>
                  <li>• During important PvP battles or sieges</li>
                  <li>• When attempting difficult dungeon challenges</li>
                  <li>• For efficient grinding and leveling sessions</li>
                  <li>• During special events with limited time</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Stacking and Combinations</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Most shells stack with regular buffs</li>
                  <li>• Cannot use multiple shells of the same type</li>
                  <li>• Combine different shell types for maximum effect</li>
                  <li>• Time usage to maximize overlap with other buffs</li>
                  <li>• Consider cost vs. benefit for each situation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Information */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MARKET PRICES</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Basic Combat Shells</span>
                <span className="text-green-400 font-semibold">50,000 - 100,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Enhanced Defense Shells</span>
                <span className="text-blue-400 font-semibold">150,000 - 300,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Superior Utility Shells</span>
                <span className="text-purple-400 font-semibold">400,000 - 600,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Master Special Shells</span>
                <span className="text-orange-400 font-semibold">1,000,000 - 2,000,000 Adena</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Legendary Shells</span>
                <span className="text-red-400 font-semibold">5,000,000+ Adena</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}