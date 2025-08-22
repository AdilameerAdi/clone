import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NPCBuffersPage() {
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
            <li className="text-blue-400 font-medium">NPC Buffers</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">NPC Buffer System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The NPC Buffer System provides convenient access to character buffs and enhancements through specialized NPCs located throughout the game world.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🛡️</div>
                <h3 className="text-white font-semibold">Defense Buffs</h3>
                <p className="text-gray-400 text-sm">Protection enhancements</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚔️</div>
                <h3 className="text-white font-semibold">Attack Buffs</h3>
                <p className="text-gray-400 text-sm">Damage amplifiers</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-semibold">Utility Buffs</h3>
                <p className="text-gray-400 text-sm">Special abilities</p>
              </div>
            </div>
          </div>
          
          {/* Buffer Types */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Available Buffs</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-white mb-2">🛡️ Defensive Buffs</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Increased defense and damage reduction</li>
                  <li>• HP regeneration enhancement</li>
                  <li>• Resistance to status effects</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-white mb-2">⚔️ Offensive Buffs</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Attack power amplification</li>
                  <li>• Critical hit rate boost</li>
                  <li>• Skill damage enhancement</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-white mb-2">⚡ Utility Buffs</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Movement speed increase</li>
                  <li>• Experience gain bonus</li>
                  <li>• Item drop rate enhancement</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Usage Instructions */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Use</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">📍 Finding NPCs</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Buffer NPCs are located in major towns and safe zones throughout the world.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Look for NPCs with glowing auras</li>
                  <li>• Check your minimap for buff icons</li>
                  <li>• Ask other players for locations</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">💰 Costs & Duration</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Most buffs require a small fee and have time-limited duration.
                </p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Basic buffs: 10,000 - 50,000 gold</li>
                  <li>• Premium buffs: 100,000+ gold</li>
                  <li>• Duration: 30 minutes to 2 hours</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}