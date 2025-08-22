import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AchievementsPage() {
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
            <li className="text-blue-400 font-medium">Achievements</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Achievement System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Achievement System rewards players for reaching milestones and completing various challenges throughout their journey.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-white font-semibold">Trophies</h3>
                <p className="text-gray-400 text-sm">Prestigious rewards</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold">Challenges</h3>
                <p className="text-gray-400 text-sm">Special objectives</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="text-white font-semibold">Progress</h3>
                <p className="text-gray-400 text-sm">Track your journey</p>
              </div>
            </div>
          </div>
          
          {/* Achievement Categories */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement Categories</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-white mb-2">🌟 Adventure</h3>
                <p className="text-gray-300 text-sm mb-2">Complete quests, explore areas, and progress through the story.</p>
                <div className="text-xs text-gray-400">Examples: First Steps, Explorer, Story Master</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-white mb-2">⚔️ Combat</h3>
                <p className="text-gray-300 text-sm mb-2">Defeat enemies, win battles, and master combat techniques.</p>
                <div className="text-xs text-gray-400">Examples: Monster Slayer, Boss Hunter, PvP Champion</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-white mb-2">🛠️ Crafting</h3>
                <p className="text-gray-300 text-sm mb-2">Create items, enhance equipment, and master professions.</p>
                <div className="text-xs text-gray-400">Examples: Master Crafter, Enhancement Expert, Resource Gatherer</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">👥 Social</h3>
                <p className="text-gray-300 text-sm mb-2">Join guilds, make friends, and participate in community events.</p>
                <div className="text-xs text-gray-400">Examples: Guild Member, Friend Maker, Event Participant</div>
              </div>
            </div>
          </div>
          
          {/* Rewards */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement Rewards</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">🎁 Items & Equipment</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Exclusive weapons and armor</li>
                  <li>• Rare consumables and materials</li>
                  <li>• Unique accessories</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">✨ Cosmetic Rewards</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Special titles and badges</li>
                  <li>• Unique character effects</li>
                  <li>• Exclusive emotes</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}