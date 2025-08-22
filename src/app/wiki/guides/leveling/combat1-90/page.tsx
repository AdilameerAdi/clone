import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Combat1to90Page() {
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
            <li>
              <Link href="/wiki/guides/leveling" className="text-gray-400 hover:text-white">Leveling</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Combat 1-90</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Combat Leveling Guide 1-90</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              This comprehensive guide covers the most efficient combat leveling routes from level 1 to 90. 
              Learn the best hunting grounds, equipment recommendations, and strategies for each level range.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Optimized hunting locations for each level bracket</li>
              <li>• Equipment and skill recommendations</li>
              <li>• Experience modifiers and bonuses</li>
              <li>• Safety tips and PvP considerations</li>
            </ul>
          </div>
          
          {/* Early Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EARLY LEVELS (1-20)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 1-5: Tutorial Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Location:</strong> NosVille Meadows, Sunny Field</li>
                  <li>• <strong>Monsters:</strong> Young Bushtail, Fairy, Blue Slime</li>
                  <li>• <strong>XP Rate:</strong> Fast progression with quest bonuses</li>
                  <li>• <strong>Tips:</strong> Complete all available quests, collect equipment drops</li>
                  <li>• <strong>Duration:</strong> 30-60 minutes with quests</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 6-15: Beginner Hunting</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Location:</strong> Fernon Outpost, NosVille Port</li>
                  <li>• <strong>Monsters:</strong> Chicken, Herb, Catsy, Foxy</li>
                  <li>• <strong>Equipment:</strong> +1 to +3 basic weapons and armor</li>
                  <li>• <strong>Skills:</strong> Focus on basic attack skills and healing</li>
                  <li>• <strong>Duration:</strong> 2-3 hours with efficient grinding</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 16-20: First Real Challenge</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Location:</strong> Fernon Temple, Mine</li>
                  <li>• <strong>Monsters:</strong> Mole, Spider, Goblin Warrior</li>
                  <li>• <strong>Equipment:</strong> +3 to +5 weapons, consider set items</li>
                  <li>• <strong>Skills:</strong> Unlock area attacks and defensive skills</li>
                  <li>• <strong>Duration:</strong> 3-4 hours, group hunting recommended</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mid Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏃</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MID LEVELS (21-50)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 21-30: Expanding Horizons</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Fernon Temple (Goblins, Poison Spider)</li>
                  <li>• <strong>Alternative:</strong> Port Alveus (Pirate monsters)</li>
                  <li>• <strong>Equipment:</strong> +5 to +7 weapons, complete armor sets</li>
                  <li>• <strong>Strategy:</strong> Focus on AoE skills for faster grinding</li>
                  <li>• <strong>Bonus XP:</strong> Join parties for group bonus</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 31-40: Advanced Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Sheep Field, Laboratory</li>
                  <li>• <strong>Alternative:</strong> Land of the Dead (if geared)</li>
                  <li>• <strong>Monsters:</strong> Fire Sheep, Dark Sheep, Laboratory monsters</li>
                  <li>• <strong>Equipment:</strong> +7 to +9 weapons, consider specialist cards</li>
                  <li>• <strong>Skills:</strong> Max out primary combat skills</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 41-50: Efficiency Focus</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Land of the Dead, Crystal Cavern</li>
                  <li>• <strong>Alternative:</strong> Act 2 maps (Dryland, Oasis)</li>
                  <li>• <strong>Equipment:</strong> +9 to +11 weapons, rare accessories</li>
                  <li>• <strong>Strategy:</strong> Use experience scrolls and blessing</li>
                  <li>• <strong>Pets:</strong> Get combat pets for additional damage</li>
                </ul>
              </div>
            </div>
          </div>

          {/* High Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HIGH LEVELS (51-75)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 51-60: Act 2 Mastery</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Dryland, Oasis, Mine</li>
                  <li>• <strong>Monsters:</strong> Desert monsters, Mine creatures</li>
                  <li>• <strong>Equipment:</strong> +11 to +13 weapons, full rare sets</li>
                  <li>• <strong>Specialists:</strong> Use appropriate specialists for extra XP</li>
                  <li>• <strong>Duration:</strong> 8-12 hours depending on bonuses</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 61-70: Elite Hunting</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Act 3 areas, Advanced maps</li>
                  <li>• <strong>Alternative:</strong> Instance dungeons with parties</li>
                  <li>• <strong>Equipment:</strong> +13 to +15 weapons, legendary items</li>
                  <li>• <strong>Strategy:</strong> Focus on high-density monster areas</li>
                  <li>• <strong>PvP Zones:</strong> Be cautious in contested areas</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 71-75: Pre-Elite Preparation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Act 4 introduction areas</li>
                  <li>• <strong>Focus:</strong> Gear preparation for endgame content</li>
                  <li>• <strong>Equipment:</strong> Start collecting endgame gear sets</li>
                  <li>• <strong>Skills:</strong> Plan skill builds for specialization</li>
                  <li>• <strong>Resources:</strong> Begin saving for expensive upgrades</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Elite Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👑</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ELITE LEVELS (76-90)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 76-85: Endgame Preparation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Act 4 Angel/Demon territories</li>
                  <li>• <strong>Alternative:</strong> Raid participation for bonus XP</li>
                  <li>• <strong>Equipment:</strong> Full +15 sets, perfect accessories</li>
                  <li>• <strong>Strategy:</strong> Mix solo grinding with group activities</li>
                  <li>• <strong>Efficiency:</strong> Use all available XP bonuses and events</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level 86-90: The Final Push</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary:</strong> Highest level maps in Act 4</li>
                  <li>• <strong>Strategy:</strong> Balance between XP gain and resource farming</li>
                  <li>• <strong>Equipment:</strong> Perfect endgame gear with shells</li>
                  <li>• <strong>Activities:</strong> Raids, instances, and PvP for variety</li>
                  <li>• <strong>Duration:</strong> 15-25 hours per level without bonuses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Bonuses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EXPERIENCE BONUSES & MODIFIERS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Available Bonuses</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Blessing:</strong> +30% XP for 1 hour (refreshable)</li>
                  <li>• <strong>Perfume:</strong> Additional XP bonus items</li>
                  <li>• <strong>Group Bonus:</strong> +20-40% XP when in party</li>
                  <li>• <strong>Specialist Bonus:</strong> Extra XP when using specialists</li>
                  <li>• <strong>Event Bonuses:</strong> Server-wide double XP events</li>
                  <li>• <strong>Raid Participation:</strong> Bonus XP from raid boss kills</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Optimization Tips</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Stack multiple XP bonuses for maximum efficiency</li>
                  <li>• Time your grinding sessions with server events</li>
                  <li>• Use blessing and perfumes during peak grinding hours</li>
                  <li>• Join active guilds for group hunting opportunities</li>
                  <li>• Participate in all available raids and instances</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment Recommendations */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EQUIPMENT PROGRESSION</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Weapon Progression</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Levels 1-20:</strong> Basic weapons +1 to +5</li>
                  <li>• <strong>Levels 21-40:</strong> Rare weapons +5 to +9</li>
                  <li>• <strong>Levels 41-60:</strong> Heroic weapons +9 to +13</li>
                  <li>• <strong>Levels 61-75:</strong> Legendary weapons +11 to +15</li>
                  <li>• <strong>Levels 76-90:</strong> Perfect weapons +15 with shells</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Armor & Accessories</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Prioritize complete armor sets for set bonuses</li>
                  <li>• Upgrade armor to +10 minimum for survivability</li>
                  <li>• Invest in good accessories (rings, necklaces) early</li>
                  <li>• Use shells on equipment at higher levels</li>
                  <li>• Consider elemental resistances for specific areas</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Safety & PvP */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SAFETY & PVP CONSIDERATIONS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Safe Zones:</strong> Always return to town when logging off to avoid PK</p>
              <p><strong>PvP Areas:</strong> Be aware of red zones and travel in groups when possible</p>
              <p><strong>Equipment Loss:</strong> Use protection items in dangerous areas</p>
              <p><strong>Guild Benefits:</strong> Join active guilds for protection and group activities</p>
              <p><strong>Timing:</strong> Avoid peak PvP hours if you prefer peaceful grinding</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}