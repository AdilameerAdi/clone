import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyCalendarPage() {
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
            <li className="text-blue-400 font-medium">Calendar</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Odyssey Calendar & Events</h1>
          
          {/* Weekly Event Schedule */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Weekly Event Schedule</h2>
            <p className="text-gray-300 mb-4">
              Odyssey features rotating weekly events that provide unique challenges and exclusive rewards.
              Each event has specific objectives and time-limited bonuses.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">⚔️</span>
                  Combat Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> PvP and Raid challenges</div>
                  <div><strong>Bonus:</strong> +50% XP from combat</div>
                  <div><strong>Special:</strong> Tournament brackets</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🛡️</span>
                  Defense Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> Survival and endurance</div>
                  <div><strong>Bonus:</strong> +25% defense stats</div>
                  <div><strong>Special:</strong> Wave defense modes</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">📈</span>
                  Progression Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> Leveling and skill development</div>
                  <div><strong>Bonus:</strong> Double achievement points</div>
                  <div><strong>Special:</strong> Mentor system active</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🌟</span>
                  Exploration Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> Discovery and adventure</div>
                  <div><strong>Bonus:</strong> Hidden areas revealed</div>
                  <div><strong>Special:</strong> Treasure hunts</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🤝</span>
                  Community Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> Guild and team activities</div>
                  <div><strong>Bonus:</strong> Group rewards multiplied</div>
                  <div><strong>Special:</strong> Cross-server events</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-orange-400">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🎲</span>
                  Chaos Week
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Focus:</strong> Random challenges</div>
                  <div><strong>Bonus:</strong> Luck-based rewards</div>
                  <div><strong>Special:</strong> Unexpected events</div>
                  <div><strong>Duration:</strong> Tuesday - Saturday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Global Events */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Global Events</h2>
            <p className="text-gray-300 mb-4">
              Large-scale events that affect the entire server and require community participation to succeed.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                  The Great Convergence
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  A monthly server-wide event where players must work together to prevent interdimensional rifts from consuming the world.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <strong>Schedule:</strong> 15th of each month
                  </div>
                  <div>
                    <strong>Duration:</strong> 10 days maximum
                  </div>
                  <div>
                    <strong>Participation:</strong> Min. 1,000 active players
                  </div>
                  <div>
                    <strong>Rewards:</strong> Unique titles and gear
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                  Olympus Olympics
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  Quarterly competition featuring various skill-based challenges across different game modes.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <strong>Schedule:</strong> End of each season
                  </div>
                  <div>
                    <strong>Duration:</strong> 2 weeks
                  </div>
                  <div>
                    <strong>Participation:</strong> Individual & team events
                  </div>
                  <div>
                    <strong>Rewards:</strong> Olympic medals and trophies
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                  World Builders United
                </h3>
                <p className="text-gray-300 text-sm mb-2">
                  Community building event where players collaborate to construct massive structures and monuments.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-400">
                  <div>
                    <strong>Schedule:</strong> Bi-monthly (every 2 months)
                  </div>
                  <div>
                    <strong>Duration:</strong> 3 weeks
                  </div>
                  <div>
                    <strong>Participation:</strong> Guild-based teams
                  </div>
                  <div>
                    <strong>Rewards:</strong> Architectural achievements
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Vessel Events */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Vessel Events</h2>
            <p className="text-gray-300 mb-4">
              Special events centered around the mystical Vessels of power, offering unique storylines and rare rewards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔥</span>
                  Vessel of Flame
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Fire</div>
                  <div><strong>Challenge:</strong> Volcanic dungeon raids</div>
                  <div><strong>Reward:</strong> Flame artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">❄️</span>
                  Vessel of Frost
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Ice</div>
                  <div><strong>Challenge:</strong> Frozen wasteland survival</div>
                  <div><strong>Reward:</strong> Frost artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  Vessel of Storm
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Lightning</div>
                  <div><strong>Challenge:</strong> Sky fortress conquests</div>
                  <div><strong>Reward:</strong> Storm artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🌍</span>
                  Vessel of Earth
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Earth</div>
                  <div><strong>Challenge:</strong> Underground labyrinth exploration</div>
                  <div><strong>Reward:</strong> Earth artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🌊</span>
                  Vessel of Ocean
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Water</div>
                  <div><strong>Challenge:</strong> Deep sea expeditions</div>
                  <div><strong>Reward:</strong> Ocean artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">✨</span>
                  Vessel of Light
                </h3>
                <div className="space-y-2 text-sm text-gray-400">
                  <div><strong>Element:</strong> Holy</div>
                  <div><strong>Challenge:</strong> Divine trials</div>
                  <div><strong>Reward:</strong> Light artifacts</div>
                  <div><strong>Next Event:</strong> TBA</div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Tips */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Event Participation Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-green-400 mr-2">✓</span>
                  Preparation
                </h3>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>Check event schedules in advance</li>
                  <li>Form or join active groups/guilds</li>
                  <li>Stock up on consumables and equipment</li>
                  <li>Review event-specific mechanics</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-blue-400 mr-2">⚡</span>
                  During Events
                </h3>
                <ul className="text-gray-300 text-sm space-y-1 ml-4">
                  <li>Log in during peak hours for better matchmaking</li>
                  <li>Coordinate with team members via discord</li>
                  <li>Focus on event objectives over regular gameplay</li>
                  <li>Take advantage of time-limited bonuses</li>
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
              
              <Link href="/wiki/odyssey/progression-rewards" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🎁 Progression Rewards</h3>
                <p className="text-gray-400 text-sm">View available rewards and trophies</p>
              </Link>
              
              <Link href="/wiki/odyssey/achievements" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🏆 Achievements</h3>
                <p className="text-gray-400 text-sm">Browse all available achievements</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}