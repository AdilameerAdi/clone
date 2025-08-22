import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function FarmingGuidePage() {
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
              <Link href="/wiki/guides" className="text-gray-400 hover:text-white">Guides</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Farming</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Farming & Resource Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Master the art of efficient resource gathering and farming to maximize your wealth and materials. 
              Learn optimal locations, techniques, and strategies for different types of farming activities.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Adena farming locations and strategies</li>
              <li>• Material gathering and crafting resources</li>
              <li>• Spoiling and rare item acquisition</li>
              <li>• Manor system and passive income</li>
            </ul>
          </div>
          
          {/* Adena Farming */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ADENA FARMING</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Best Adena Locations by Level</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Levels 20-30: Windmill Hill</p>
                    <p className="text-gray-400 text-xs">Undead creatures drop decent Adena and materials</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 30-40: Forgotten Temple</p>
                    <p className="text-gray-400 text-xs">Temple Guards and Believers for steady income</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 40-50: Cruma Tower</p>
                    <p className="text-gray-400 text-xs">Consistent Adena drops plus valuable materials</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 50-60: Antharas Lair</p>
                    <p className="text-gray-400 text-xs">Dragons and drakes for high-value drops</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 60+: Tower of Insolence</p>
                    <p className="text-gray-400 text-xs">High-level monsters with excellent Adena rates</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Farming Optimization Tips</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Use area-of-effect skills to kill multiple monsters</li>
                  <li>• Optimize inventory space for longer farming sessions</li>
                  <li>• Bring plenty of consumables to minimize downtime</li>
                  <li>• Consider party farming for bonus experience and safety</li>
                  <li>• Use pets for automatic item pickup and extra storage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Material Gathering */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⛏️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MATERIAL GATHERING</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Crafting Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Iron Ore:</strong> Dwarven Village mines and Abandoned Mines</li>
                  <li>• <strong>Coal:</strong> Underground passages and dark caves</li>
                  <li>• <strong>Gemstones:</strong> High-level monster drops and mining</li>
                  <li>• <strong>Animal Materials:</strong> Specific creature hunting</li>
                  <li>• <strong>Plant Materials:</strong> Forest areas and herb gathering</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Enhancement Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Crystals:</strong> Monster drops and refining processes</li>
                  <li>• <strong>Life Stones:</strong> Raid bosses and special monsters</li>
                  <li>• <strong>Soul Crystals:</strong> Specific monster types and levels</li>
                  <li>• <strong>Enchant Scrolls:</strong> Rare drops and NPC shops</li>
                  <li>• <strong>Dyes:</strong> Crafting and special vendors</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Rare Resources</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Ancient Scrolls:</strong> Ancient ruins and libraries</li>
                  <li>• <strong>Dragon Scales:</strong> Dragon-type monsters only</li>
                  <li>• <strong>Blessed Gems:</strong> Divine creatures and events</li>
                  <li>• <strong>Meteor Fragments:</strong> Rare environmental spawns</li>
                  <li>• <strong>Time Crystals:</strong> Temporal anomaly areas</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Seasonal Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spring Flowers:</strong> Blooming meadows (March-May)</li>
                  <li>• <strong>Summer Fruits:</strong> Orchard areas (June-August)</li>
                  <li>• <strong>Autumn Leaves:</strong> Forest regions (September-November)</li>
                  <li>• <strong>Winter Crystals:</strong> Frozen areas (December-February)</li>
                  <li>• <strong>Event Items:</strong> Special holiday gatherings</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Spoiling System */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎒</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPOILING SYSTEM</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Spoiler Mechanics</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spoil Skill:</strong> Must be used before killing the monster</li>
                  <li>• <strong>Sweep Skill:</strong> Collect spoiled items after monster death</li>
                  <li>• <strong>Success Rate:</strong> Based on level difference and skill level</li>
                  <li>• <strong>Exclusive Access:</strong> Only the spoiler can collect items</li>
                  <li>• <strong>Time Limit:</strong> Corpses disappear after limited time</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Valuable Spoil Targets</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">High-Value Monsters</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Mandragoras → Rare herbs and potions</li>
                      <li>• Golems → Gemstones and crystals</li>
                      <li>• Dragons → Scales and rare materials</li>
                      <li>• Undead → Ancient coins and relics</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Common Spoil Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Crafting materials and components</li>
                      <li>• Enhancement scrolls and crystals</li>
                      <li>• Rare consumables and potions</li>
                      <li>• Recipe books and blueprints</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Manor System */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MANOR SYSTEM</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Manor Participation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Seed Purchase:</strong> Buy seeds from manor merchants</li>
                  <li>• <strong>Planting:</strong> Plant seeds in designated farming areas</li>
                  <li>• <strong>Harvesting:</strong> Collect crops after growth period</li>
                  <li>• <strong>Selling:</strong> Sell harvest back to merchants for profit</li>
                  <li>• <strong>Profit Margins:</strong> Prices fluctuate based on supply/demand</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Profitable Crops</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Wheat & Barley</span>
                    <span className="text-green-400">Low risk, steady profit</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Flax & Hemp</span>
                    <span className="text-blue-400">Medium risk, good returns</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Rare Herbs</span>
                    <span className="text-purple-400">High risk, excellent profit</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Fishing System */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎣</span>
              </div>
              <h3 className="text-lg font-semibold text-white">FISHING SYSTEM</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Fishing Basics</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Equipment:</strong> Fishing rod, bait, and tackle box</li>
                  <li>• <strong>Locations:</strong> Rivers, lakes, and ocean areas</li>
                  <li>• <strong>Skill Level:</strong> Higher skill = better catch rates</li>
                  <li>• <strong>Bait Types:</strong> Different baits attract different fish</li>
                  <li>• <strong>Weather Effects:</strong> Conditions affect fishing success</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Valuable Catches</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Regular Fish</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Food items for pet feeding</li>
                      <li>• Cooking ingredients and recipes</li>
                      <li>• Basic vendor sale items</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Catches</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Treasure chests with valuable items</li>
                      <li>• Rare fish for special recipes</li>
                      <li>• Ancient artifacts and relics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Efficiency Tips */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">FARMING EFFICIENCY TIPS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Time Management</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Plan farming routes to minimize travel time</li>
                  <li>• Use offline shops to sell items while away</li>
                  <li>• Schedule activities around server events and bonuses</li>
                  <li>• Combine multiple farming activities in one session</li>
                  <li>• Track market prices for optimal selling times</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Resource Management</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Invest in storage expansion for longer sessions</li>
                  <li>• Use pets and summons for additional carrying capacity</li>
                  <li>• Optimize equipment for farming efficiency over combat</li>
                  <li>• Stock consumables in bulk for better prices</li>
                  <li>• Consider alt characters for specialized farming roles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}