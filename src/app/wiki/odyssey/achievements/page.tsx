import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyAchievementsPage() {
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
              <Link href="/wiki/odyssey" className="text-gray-400 hover:text-white">Odyssey</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Achievements</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Odyssey Achievements</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement System Overview</h2>
            <p className="text-gray-300 mb-4">
              Odyssey achievements are divided into two main categories: Global Achievements that affect the entire server community, 
              and Individual Achievements that track personal accomplishments. Each achievement provides unique rewards and contributes 
              to your overall Odyssey progression.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🌍</div>
                <h3 className="text-white font-semibold">Global Achievements</h3>
                <p className="text-gray-400 text-sm mt-2">Server-wide objectives requiring community cooperation</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">👤</div>
                <h3 className="text-white font-semibold">Individual Achievements</h3>
                <p className="text-gray-400 text-sm mt-2">Personal milestones and accomplishments</p>
              </div>
            </div>
          </div>

          {/* Global Achievements */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Global Achievements</h2>
            <p className="text-gray-300 mb-4">
              These achievements require collective server efforts and provide rewards to all participating players when completed.
            </p>
            <div className="space-y-4">
              {/* World Unity */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-3">🤝</span>
                  World Unity Initiative
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Objective:</h4>
                    <p className="text-gray-400 text-sm">
                      Complete 10,000 cooperative actions across all players within 30 days
                    </p>
                    <div className="mt-2">
                      <strong className="text-gray-300">Progress:</strong> 
                      <span className="text-blue-400"> 7,843 / 10,000</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Global Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Unity Badge for all participants</li>
                      <li>• +20% XP boost for 7 days</li>
                      <li>• Exclusive "World Uniter" title</li>
                      <li>• Global Unity Monument in main city</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Beast Slayer Campaign */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-3">🐲</span>
                  Great Beast Slayer Campaign
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Objective:</h4>
                    <p className="text-gray-400 text-sm">
                      Defeat 500 legendary beasts collectively before they overrun the world
                    </p>
                    <div className="mt-2">
                      <strong className="text-gray-300">Progress:</strong> 
                      <span className="text-red-400"> 234 / 500</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Global Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Beast Slayer Medal for all hunters</li>
                      <li>• Legendary weapon cache access</li>
                      <li>• "Protector of Olympus" title</li>
                      <li>• Beast-free zones for 14 days</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Artifact Recovery */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-3">💎</span>
                  Ancient Artifact Recovery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Objective:</h4>
                    <p className="text-gray-400 text-sm">
                      Recover 100 lost artifacts from ancient ruins across all servers
                    </p>
                    <div className="mt-2">
                      <strong className="text-gray-300">Progress:</strong> 
                      <span className="text-purple-400"> 67 / 100</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Global Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Archaeologist certification</li>
                      <li>• Access to hidden artifact vault</li>
                      <li>• "Relic Hunter" title</li>
                      <li>• Museum of Ancient Wonders opens</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Knowledge Preservation */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-3">📚</span>
                  Great Library Project
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Objective:</h4>
                    <p className="text-gray-400 text-sm">
                      Contribute 1,000 unique lore entries to preserve world knowledge
                    </p>
                    <div className="mt-2">
                      <strong className="text-gray-300">Progress:</strong> 
                      <span className="text-yellow-400"> 892 / 1,000</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Global Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Scholar's Insignia for contributors</li>
                      <li>• Access to forbidden knowledge</li>
                      <li>• "Lorekeeper" title</li>
                      <li>• Great Library construction completed</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Individual Achievement Categories */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Individual Achievement Categories</h2>
            <p className="text-gray-300 mb-4">
              Personal achievements are organized into different categories, each focusing on specific aspects of gameplay.
            </p>

            {/* Combat Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">⚔️</span>
                Combat Mastery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">First Blood</h4>
                  <p className="text-gray-400 text-sm mb-1">Win your first PvP match</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400">Reward: Combat Badge</span>
                    <span className="text-gray-500">Points: 10</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Gladiator</h4>
                  <p className="text-gray-400 text-sm mb-1">Win 100 PvP matches</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400">Reward: Gladiator Title</span>
                    <span className="text-gray-500">Points: 500</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Legendary Warrior</h4>
                  <p className="text-gray-400 text-sm mb-1">Win 1,000 PvP matches</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400">Reward: Legendary Weapon</span>
                    <span className="text-gray-500">Points: 2,500</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Flawless Victory</h4>
                  <p className="text-gray-400 text-sm mb-1">Win 10 matches without taking damage</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-blue-400">Reward: Perfection Aura</span>
                    <span className="text-gray-500">Points: 750</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Exploration Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🗺️</span>
                Exploration & Discovery
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">First Steps</h4>
                  <p className="text-gray-400 text-sm mb-1">Discover your first hidden area</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Reward: Explorer Badge</span>
                    <span className="text-gray-500">Points: 15</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">World Wanderer</h4>
                  <p className="text-gray-400 text-sm mb-1">Visit all major regions</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Reward: Travel Cloak</span>
                    <span className="text-gray-500">Points: 300</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Master Explorer</h4>
                  <p className="text-gray-400 text-sm mb-1">Discover 100 hidden locations</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Reward: Pathfinder Mount</span>
                    <span className="text-gray-500">Points: 1,000</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Cartographer</h4>
                  <p className="text-gray-400 text-sm mb-1">Map 50 uncharted territories</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-green-400">Reward: Master Map</span>
                    <span className="text-gray-500">Points: 800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">👥</span>
                Social & Community
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Team Player</h4>
                  <p className="text-gray-400 text-sm mb-1">Complete 10 group activities</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">Reward: Cooperation Medal</span>
                    <span className="text-gray-500">Points: 50</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Guild Master</h4>
                  <p className="text-gray-400 text-sm mb-1">Lead a guild to 50 victories</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">Reward: Leadership Crown</span>
                    <span className="text-gray-500">Points: 1,200</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Mentor</h4>
                  <p className="text-gray-400 text-sm mb-1">Help 25 new players reach level 20</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">Reward: Mentor's Staff</span>
                    <span className="text-gray-500">Points: 600</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Community Hero</h4>
                  <p className="text-gray-400 text-sm mb-1">Organize 10 server-wide events</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-purple-400">Reward: Hero's Mantle</span>
                    <span className="text-gray-500">Points: 2,000</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Crafting & Economic Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🔨</span>
                Crafting & Economy
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Novice Crafter</h4>
                  <p className="text-gray-400 text-sm mb-1">Craft your first item</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">Reward: Crafting Kit</span>
                    <span className="text-gray-500">Points: 5</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Master Artisan</h4>
                  <p className="text-gray-400 text-sm mb-1">Craft 500 legendary items</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">Reward: Master's Forge</span>
                    <span className="text-gray-500">Points: 1,500</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Merchant Prince</h4>
                  <p className="text-gray-400 text-sm mb-1">Generate 1,000,000 gold in trade</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">Reward: Golden Scales</span>
                    <span className="text-gray-500">Points: 1,000</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Innovation Master</h4>
                  <p className="text-gray-400 text-sm mb-1">Discover 10 new recipes</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-orange-400">Reward: Inventor's Goggles</span>
                    <span className="text-gray-500">Points: 800</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Special & Seasonal Achievements */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-white mb-3 flex items-center">
                <span className="text-2xl mr-2">🎭</span>
                Special & Seasonal
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Beta Tester</h4>
                  <p className="text-gray-400 text-sm mb-1">Participated in beta testing</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-pink-400">Reward: Beta Crown</span>
                    <span className="text-gray-500">Points: 1,000</span>
                  </div>
                </div>
                
                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Anniversary Celebrant</h4>
                  <p className="text-gray-400 text-sm mb-1">Attend server anniversary event</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-pink-400">Reward: Party Hat</span>
                    <span className="text-gray-500">Points: 200</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Holiday Spirit</h4>
                  <p className="text-gray-400 text-sm mb-1">Complete all seasonal events</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-pink-400">Reward: Festival Outfit</span>
                    <span className="text-gray-500">Points: 500</span>
                  </div>
                </div>

                <div className="bg-gray-800 p-3 rounded">
                  <h4 className="text-white font-medium mb-1">Time Traveler</h4>
                  <p className="text-gray-400 text-sm mb-1">Play during all time periods</p>
                  <div className="flex justify-between text-sm">
                    <span className="text-pink-400">Reward: Temporal Cloak</span>
                    <span className="text-gray-500">Points: 1,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievement Tracking Tips */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement Tracking Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2">Maximizing Progress</h3>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• Set daily achievement goals</li>
                  <li>• Focus on category completion</li>
                  <li>• Join active guilds for social achievements</li>
                  <li>• Participate in limited-time events</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2">Reward Optimization</h3>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>• Prioritize high-point achievements</li>
                  <li>• Complete achievement chains in order</li>
                  <li>• Save seasonal achievements for bonus periods</li>
                  <li>• Track global achievement progress</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Related Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/wiki/odyssey/faq" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">❓ Odyssey FAQ</h3>
                <p className="text-gray-400 text-sm">Learn about the Odyssey system</p>
              </Link>
              
              <Link href="/wiki/odyssey/calendar" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">📅 Event Calendar</h3>
                <p className="text-gray-400 text-sm">View upcoming events and schedules</p>
              </Link>
              
              <Link href="/wiki/odyssey/progression-rewards" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🎁 Progression Rewards</h3>
                <p className="text-gray-400 text-sm">Check achievement rewards and trophies</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}