import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function WarpSystemPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="p-8">
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
            <li className="text-blue-400 font-medium">Warp System</li>
          </ol>
        </nav>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Warp System</h1>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Warp System provides convenient teleportation to various locations across the game world. 
              Save time traveling with instant transportation to towns, dungeons, and leveling areas.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Instant teleportation to major locations</li>
              <li>• Cost-effective alternative to gatekeepers</li>
              <li>• Personal warp points and bookmarks</li>
              <li>• Guild and party teleportation options</li>
            </ul>
          </div>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Warp Locations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Major Towns</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Giran - Commercial hub and market center</li>
                  <li>• Aden - Capital city and administrative center</li>
                  <li>• Heine - Harbor town with fishing activities</li>
                  <li>• Goddard - Northern frontier town</li>
                  <li>• Rune - Magical research center</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Leveling Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Cruma Tower - Mid-level dungeon complex</li>
                  <li>• Tower of Insolence - High-level challenges</li>
                  <li>• Antharas Lair - Dragon dungeon entrance</li>
                  <li>• Primeval Isle - Prehistoric hunting grounds</li>
                  <li>• Hot Springs - Relaxation and buffs area</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Boss Locations</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Valley of Saints - Epic boss spawns</li>
                  <li>• Dragon Valley - High-level raid areas</li>
                  <li>• Imperial Tomb - Undead boss encounters</li>
                  <li>• Forest of Mirrors - Mystical boss fights</li>
                  <li>• Wall of Argos - Fortress siege bosses</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Coliseum - PvP tournament arena</li>
                  <li>• Monastery - Peaceful meditation zone</li>
                  <li>• Ivory Tower - Magical research facility</li>
                  <li>• Ketra Orc Outpost - Alliance quests</li>
                  <li>• Varka Silenos Stronghold - Tribal quests</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Warp Types</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Standard Warps</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fixed cost teleportation to common locations</li>
                  <li>• Available to all players regardless of level</li>
                  <li>• Instant travel with no casting time</li>
                  <li>• No cooldown period between uses</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Personal Bookmarks</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Save up to 10 custom warp locations</li>
                  <li>• Set bookmarks anywhere in the world</li>
                  <li>• Premium members get additional bookmark slots</li>
                  <li>• Share bookmarks with guild members</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Group Warps</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Party leader can warp entire party</li>
                  <li>• Guild leaders can summon guild members</li>
                  <li>• Alliance coordination for large events</li>
                  <li>• Emergency evacuation commands</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Warp Costs</h2>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Town to Town</span>
                <span className="text-green-400 font-semibold">5,000 - 15,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Leveling Areas</span>
                <span className="text-green-400 font-semibold">10,000 - 25,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Boss Locations</span>
                <span className="text-green-400 font-semibold">20,000 - 50,000 Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Personal Bookmarks</span>
                <span className="text-green-400 font-semibold">2,000 - 10,000 Adena</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Emergency Escape</span>
                <span className="text-green-400 font-semibold">50,000 Adena</span>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Warp Restrictions</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong>Combat Restriction:</strong> Cannot warp while in combat or flagged for PvP</p>
              <p><strong>Location Limits:</strong> Some areas require quest completion or special access</p>
              <p><strong>Carrying Capacity:</strong> Cannot warp while over 80% carrying capacity</p>
              <p><strong>Siege Warfare:</strong> Warps disabled during active siege periods</p>
              <p><strong>Newbie Protection:</strong> Special restrictions apply to new player areas</p>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Use Warps</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.warp</code> or <code className="bg-gray-800 px-2 py-1 rounded">.tp</code> to open warp menu</p>
              <p><strong>NPC Access:</strong> Warp Master NPCs in all major towns</p>
              <p><strong>Hotkey:</strong> <kbd className="bg-gray-700 px-2 py-1 rounded">Alt + W</kbd> for quick warp access</p>
              <p><strong>Bookmark Creation:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.bookmark add [name]</code> to save current location</p>
              <p><strong>Group Warp:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.summon</code> for guild/party teleportation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}