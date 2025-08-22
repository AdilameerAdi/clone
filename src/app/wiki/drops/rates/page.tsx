import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DropRatesPage() {

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
                <Link href="/wiki/drops" className="text-gray-400 hover:text-white">Drops</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li className="text-blue-400 font-medium">Drop Rates</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Drop Rates</h1>
            
            {/* Overview */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📊</span>
                </div>
                <h3 className="text-lg font-semibold text-white">DROP RATE OVERVIEW</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Understanding drop rates is crucial for efficient farming and planning your gameplay. This page provides comprehensive information about item drop probabilities across different content types and difficulty levels.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Drop rates vary by monster type, level, and location</li>
                <li>• Boss monsters typically have higher rates for rare items</li>
                <li>• Some items have guaranteed drops from specific sources</li>
                <li>• Drop rate bonuses can be applied through various means</li>
              </ul>
            </div>
            
            {/* Common Monster Drops */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🐗</span>
                </div>
                <h3 className="text-lg font-semibold text-white">COMMON MONSTER DROPS</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full bg-gray-800 rounded-lg">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left p-3 text-white font-semibold">Item Category</th>
                      <th className="text-left p-3 text-white font-semibold">Drop Rate</th>
                      <th className="text-left p-3 text-white font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-gray-700">
                      <td className="p-3">Gold Coins</td>
                      <td className="p-3 text-green-400">85-95%</td>
                      <td className="p-3">Amount varies by monster level</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">Health Potions</td>
                      <td className="p-3 text-green-400">35-45%</td>
                      <td className="p-3">Higher rates from undead monsters</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">Mana Potions</td>
                      <td className="p-3 text-green-400">25-35%</td>
                      <td className="p-3">Higher rates from magical creatures</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">Basic Equipment</td>
                      <td className="p-3 text-blue-400">15-25%</td>
                      <td className="p-3">Quality depends on monster tier</td>
                    </tr>
                    <tr className="border-b border-gray-700">
                      <td className="p-3">Crafting Materials</td>
                      <td className="p-3 text-blue-400">20-30%</td>
                      <td className="p-3">Type based on monster ecology</td>
                    </tr>
                    <tr>
                      <td className="p-3">Rare Materials</td>
                      <td className="p-3 text-purple-400">2-8%</td>
                      <td className="p-3">Elite monsters have higher rates</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Boss Drop Rates */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">👑</span>
                </div>
                <h3 className="text-lg font-semibold text-white">BOSS DROP RATES</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">World Boss Drops</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="text-yellow-400 font-semibold mb-2">Legendary Equipment</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• First Kill: 100% (guaranteed)</li>
                        <li>• Subsequent Kills: 15-25%</li>
                        <li>• Weekly Reset Bonus: +10%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Rare Materials</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Boss Essences: 80-90%</li>
                        <li>• Upgrade Crystals: 45-60%</li>
                        <li>• Ancient Fragments: 25-35%</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-3">Dungeon Boss Drops</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <h5 className="text-green-400 font-semibold mb-2">Normal Difficulty</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Rare Equipment: 40-50%</li>
                        <li>• Skill Books: 15-20%</li>
                        <li>• Enhancement Stones: 60-70%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-blue-400 font-semibold mb-2">Hard Difficulty</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Epic Equipment: 25-35%</li>
                        <li>• Advanced Skill Books: 20-30%</li>
                        <li>• Superior Stones: 45-55%</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-purple-400 font-semibold mb-2">Nightmare Difficulty</h5>
                      <ul className="text-gray-300 space-y-1 text-sm">
                        <li>• Legendary Equipment: 15-25%</li>
                        <li>• Master Skill Books: 25-35%</li>
                        <li>• Perfect Stones: 35-45%</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drop Rate Modifiers */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚡</span>
                </div>
                <h3 className="text-lg font-semibold text-white">DROP RATE MODIFIERS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Positive Modifiers</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <span className="text-green-400">Party Bonus:</span> +5% per party member (max 20%)</li>
                    <li>• <span className="text-green-400">VIP Status:</span> +10-25% based on tier</li>
                    <li>• <span className="text-green-400">Drop Rate Potions:</span> +15-50% temporary</li>
                    <li>• <span className="text-green-400">Guild Buffs:</span> +5-15% various types</li>
                    <li>• <span className="text-green-400">Event Bonuses:</span> +25-100% during events</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Equipment Bonuses</h4>
                  <ul className="text-gray-300 space-y-2">
                    <li>• <span className="text-blue-400">Lucky Items:</span> Special equipment with drop rate stats</li>
                    <li>• <span className="text-blue-400">Set Bonuses:</span> Some equipment sets provide drop rate bonuses</li>
                    <li>• <span className="text-blue-400">Enchantments:</span> Luck enchantments on weapons/accessories</li>
                    <li>• <span className="text-blue-400">Pet Abilities:</span> Certain pets boost drop rates</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Special Drop Conditions */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🎯</span>
                </div>
                <h3 className="text-lg font-semibold text-white">SPECIAL DROP CONDITIONS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-yellow-400 font-semibold mb-2">Guaranteed Drops</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Quest boss first kills always drop required quest items</li>
                    <li>• Daily boss kills guarantee specific materials</li>
                    <li>• Event monsters have 100% drop rate for event currencies</li>
                    <li>• Raid completion guarantees at least one rare item per player</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-red-400 font-semibold mb-2">Time-Based Modifiers</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Weekend bonuses: +25% drop rates Friday-Sunday</li>
                    <li>• Daily reset bonuses: First 3 kills have +50% rates</li>
                    <li>• Monthly events: Special drop rate periods</li>
                    <li>• Streak bonuses: Consecutive days of play increase rates</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-blue-400 font-semibold mb-2">Conditional Drops</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Some items only drop during specific weather conditions</li>
                    <li>• Night-time exclusive drops from certain monsters</li>
                    <li>• Seasonal items available only during specific months</li>
                    <li>• Level difference penalties reduce drop rates significantly</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}