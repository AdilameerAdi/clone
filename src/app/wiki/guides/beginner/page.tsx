import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BeginnerGuidePage() {

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
              <li className="text-blue-400 font-medium">Beginner Guide</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Beginner Guide</h1>
            
            {/* Welcome */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">👋</span>
                </div>
                <h3 className="text-lg font-semibold text-white">WELCOME TO OLYMPUS</h3>
              </div>
              <p className="text-gray-300">
                Welcome to Olympus! This guide will help you get started on your journey. 
                Olympus is designed around the concept of playing with only one character, 
                making every decision meaningful and every achievement special.
              </p>
            </div>
            
            {/* Character Creation */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CHARACTER CREATION</h3>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="text-blue-400 font-semibold mb-2">Choose Your Class:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h5 className="text-white font-semibold">⚔️ Swordsman</h5>
                      <p className="text-gray-300">Melee fighter with high defense and damage</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h5 className="text-white font-semibold">🏹 Archer</h5>
                      <p className="text-gray-300">Ranged attacker with high speed and precision</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h5 className="text-white font-semibold">🔮 Mage</h5>
                      <p className="text-gray-300">Magic user with powerful spells and abilities</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg p-3">
                      <h5 className="text-white font-semibold">🛡️ Martial Artist</h5>
                      <p className="text-gray-300">Balanced fighter with unique combat styles</p>
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-900/30 border border-yellow-500/30 rounded-lg p-3">
                  <p className="text-yellow-300 text-sm">
                    <strong>💡 Tip:</strong> Choose carefully! Remember, Olympus is designed for one character gameplay.
                  </p>
                </div>
              </div>
            </div>
            
            {/* First Steps */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white">FIRST STEPS</h3>
              </div>
              <ol className="space-y-3 text-gray-300">
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">1.</span>
                  <div>
                    <span className="font-semibold">Complete the Tutorial</span>
                    <p className="text-sm text-gray-400">Learn basic controls and game mechanics</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">2.</span>
                  <div>
                    <span className="font-semibold">Talk to NPCs</span>
                    <p className="text-sm text-gray-400">Get your first quests and learn about the world</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">3.</span>
                  <div>
                    <span className="font-semibold">Explore the Starting Area</span>
                    <p className="text-sm text-gray-400">Familiarize yourself with the environment</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-blue-400 font-bold">4.</span>
                  <div>
                    <span className="font-semibold">Join the Community</span>
                    <p className="text-sm text-gray-400">Connect with other players on Discord</p>
                  </div>
                </li>
              </ol>
            </div>
            
            {/* Essential Systems */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white">ESSENTIAL SYSTEMS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">💰 Economy</h4>
                    <p className="text-gray-300 text-sm">Learn about gold, trading, and the bazaar system</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">🎒 Inventory</h4>
                    <p className="text-gray-300 text-sm">Manage your items and equipment effectively</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">⚔️ Combat</h4>
                    <p className="text-gray-300 text-sm">Master the combat system and skill rotations</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">🐾 Pets</h4>
                    <p className="text-gray-300 text-sm">Obtain and train companions to aid you</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">👥 Parties</h4>
                    <p className="text-gray-300 text-sm">Team up with other players for better rewards</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h4 className="text-blue-400 font-semibold mb-1">🏰 Guilds</h4>
                    <p className="text-gray-300 text-sm">Join a guild for community and benefits</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Leveling Tips */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white">LEVELING EFFICIENTLY</h3>
              </div>
              <div className="space-y-3">
                <div className="bg-green-900/30 border border-green-500/30 rounded-lg p-3">
                  <h4 className="text-green-400 font-semibold mb-2">📈 Experience Sources:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Main story quests (highest XP)</li>
                    <li>• Side quests and daily missions</li>
                    <li>• Monster hunting and grinding</li>
                    <li>• Dungeon runs and raids</li>
                    <li>• PvP battles and events</li>
                  </ul>
                </div>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3">
                  <h4 className="text-blue-400 font-semibold mb-2">⚡ Efficiency Tips:</h4>
                  <ul className="space-y-1 text-gray-300 text-sm">
                    <li>• Always have a pet for extra damage</li>
                    <li>• Use experience boosters during grinding</li>
                    <li>• Join parties for bonus experience</li>
                    <li>• Complete daily quests every day</li>
                    <li>• Participate in server events</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Important Reminders */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">IMPORTANT REMINDERS</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• <span className="text-red-400 font-semibold">Save regularly:</span> Use save points frequently to avoid losing progress</li>
                <li>• <span className="text-yellow-400 font-semibold">Read the rules:</span> Familiarize yourself with server rules to avoid penalties</li>
                <li>• <span className="text-blue-400 font-semibold">Ask for help:</span> The community is friendly and willing to help newcomers</li>
                <li>• <span className="text-green-400 font-semibold">Have fun:</span> Remember that Olympus is designed to be enjoyable!</li>
              </ul>
            </div>
            
            {/* Next Steps */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🚀</span>
                </div>
                <h3 className="text-lg font-semibold text-white">WHAT&apos;S NEXT?</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Once you&apos;ve mastered the basics, consider exploring:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• <Link href="/wiki/guides/advanced" className="text-blue-400 hover:text-blue-300">Advanced Guide</Link> - For experienced players</li>
                <li>• <Link href="/wiki/custom-features" className="text-blue-400 hover:text-blue-300">Custom Features</Link> - Unique Olympus systems</li>
                <li>• <Link href="/wiki/community-guides" className="text-blue-400 hover:text-blue-300">Community Guides</Link> - Player-created content</li>
                <li>• <Link href="/wiki/odyssey" className="text-blue-400 hover:text-blue-300">Odyssey</Link> - Seasonal content</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
