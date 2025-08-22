import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyQuestsPage() {
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
            <li className="text-blue-400 font-medium">Quests</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Odyssey Quests</h1>
          
          {/* Main Quest Line */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Main Quest Line</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Chapter 1: The Beginning</h3>
                <p className="text-gray-300 mt-2">Start your journey in the world of Olympus.</p>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="text-green-400">Rewards:</span> 10,000 EXP, Starter Pack
                </div>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Chapter 2: Rising Power</h3>
                <p className="text-gray-300 mt-2">Prove your worth by defeating powerful enemies.</p>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="text-green-400">Rewards:</span> 50,000 EXP, Rare Equipment Box
                </div>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="text-lg font-semibold text-white">Chapter 3: The Trials</h3>
                <p className="text-gray-300 mt-2">Face the ancient trials to unlock your true potential.</p>
                <div className="mt-2 text-sm text-gray-400">
                  <span className="text-green-400">Rewards:</span> 100,000 EXP, Epic Weapon
                </div>
              </div>
            </div>
          </div>
          
          {/* Daily Quests */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Daily Quests</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold text-white mb-2">Monster Hunter</h3>
                <p className="text-gray-300 text-sm">Defeat 100 monsters</p>
                <div className="mt-2 text-sm text-green-400">Daily Reset</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold text-white mb-2">Resource Gatherer</h3>
                <p className="text-gray-300 text-sm">Collect 50 materials</p>
                <div className="mt-2 text-sm text-green-400">Daily Reset</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold text-white mb-2">Dungeon Explorer</h3>
                <p className="text-gray-300 text-sm">Complete 3 dungeons</p>
                <div className="mt-2 text-sm text-green-400">Daily Reset</div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-lg font-semibold text-white mb-2">PvP Champion</h3>
                <p className="text-gray-300 text-sm">Win 5 PvP matches</p>
                <div className="mt-2 text-sm text-green-400">Daily Reset</div>
              </div>
            </div>
          </div>
          
          {/* Weekly Challenges */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Weekly Challenges</h2>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded">
                <div>
                  <h3 className="text-white font-semibold">Raid Boss Challenge</h3>
                  <p className="text-gray-400 text-sm">Defeat 3 Raid Bosses</p>
                </div>
                <div className="text-yellow-400 font-bold">Weekly</div>
              </div>
              
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded">
                <div>
                  <h3 className="text-white font-semibold">Elite Dungeon Master</h3>
                  <p className="text-gray-400 text-sm">Clear Elite Dungeons 10 times</p>
                </div>
                <div className="text-yellow-400 font-bold">Weekly</div>
              </div>
              
              <div className="flex items-center justify-between bg-gray-800 p-4 rounded">
                <div>
                  <h3 className="text-white font-semibold">Trading Expert</h3>
                  <p className="text-gray-400 text-sm">Complete 50 successful trades</p>
                </div>
                <div className="text-yellow-400 font-bold">Weekly</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}