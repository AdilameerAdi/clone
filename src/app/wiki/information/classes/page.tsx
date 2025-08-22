import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function ClassesPage() {

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
                <Link href="/wiki/information" className="text-gray-400 hover:text-white">Information</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li className="text-blue-400 font-medium">Classes</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Character Classes</h1>
            
            {/* Overview */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ℹ️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CLASS OVERVIEW</h3>
              </div>
              <p className="text-gray-300 mb-4">
                Olympus features multiple unique character classes, each with distinct playstyles, abilities, and progression paths. Choose your class wisely as it determines your combat style, available skills, and role in group content.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Each class has unique skill trees and specializations</li>
                <li>• Classes can be advanced to higher tiers with special quests</li>
                <li>• Equipment requirements and restrictions vary by class</li>
                <li>• PvP and PvE effectiveness differs between classes</li>
              </ul>
            </div>
            
            {/* Warrior Class */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚔️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">WARRIOR</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Characteristics</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• High physical damage and defense</li>
                    <li>• Melee combat specialist</li>
                    <li>• Tank and DPS hybrid capabilities</li>
                    <li>• Strong in both PvP and PvE</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Equipment</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Swords, axes, maces, spears</li>
                    <li>• Heavy armor (plates, chainmail)</li>
                    <li>• Shields for defensive builds</li>
                    <li>• Strength-based accessories</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Advanced Paths</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-blue-400 font-semibold">Blade Master</h5>
                    <p className="text-gray-300 text-sm">Sword specialist with enhanced combos</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-blue-400 font-semibold">Guardian</h5>
                    <p className="text-gray-300 text-sm">Tank focused on protection and support</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-blue-400 font-semibold">Berserker</h5>
                    <p className="text-gray-300 text-sm">High damage, high risk combat style</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mage Class */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🔮</span>
                </div>
                <h3 className="text-lg font-semibold text-white">MAGE</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Characteristics</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• High magical damage output</li>
                    <li>• Ranged combat specialist</li>
                    <li>• Area of effect abilities</li>
                    <li>• Mana-dependent playstyle</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Equipment</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Staffs, wands, orbs</li>
                    <li>• Light robes and cloth armor</li>
                    <li>• Magical accessories</li>
                    <li>• Intelligence-based gear</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Advanced Paths</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-purple-400 font-semibold">Archmage</h5>
                    <p className="text-gray-300 text-sm">Master of all magical schools</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-purple-400 font-semibold">Elementalist</h5>
                    <p className="text-gray-300 text-sm">Specialist in fire, ice, and lightning</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-purple-400 font-semibold">Battle Mage</h5>
                    <p className="text-gray-300 text-sm">Hybrid melee-magic combat</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Archer Class */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🏹</span>
                </div>
                <h3 className="text-lg font-semibold text-white">ARCHER</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-white font-semibold mb-2">Characteristics</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• High critical hit rate</li>
                    <li>• Long-range physical damage</li>
                    <li>• High mobility and evasion</li>
                    <li>• Precision-based combat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">Equipment</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Bows, crossbows, arrows</li>
                    <li>• Light leather armor</li>
                    <li>• Agility-based accessories</li>
                    <li>• Specialized ammunition</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <h4 className="text-white font-semibold mb-2">Advanced Paths</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-green-400 font-semibold">Ranger</h5>
                    <p className="text-gray-300 text-sm">Nature magic and pet companions</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-green-400 font-semibold">Sniper</h5>
                    <p className="text-gray-300 text-sm">Ultimate precision and range</p>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-3">
                    <h5 className="text-green-400 font-semibold">Scout</h5>
                    <p className="text-gray-300 text-sm">Stealth and mobility specialist</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Class Selection Tips */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CLASS SELECTION TIPS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">For New Players</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Warrior: Best starting class, forgiving playstyle</li>
                    <li>• Balanced offense and defense capabilities</li>
                    <li>• Less resource management than other classes</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">For PvP Focus</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Archer: High burst damage and mobility</li>
                    <li>• Mage: Strong area control abilities</li>
                    <li>• Consider advanced class specializations</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">For PvE/Raiding</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• All classes viable with proper builds</li>
                    <li>• Tank builds: Warrior Guardian path</li>
                    <li>• Support builds: Mage with utility spells</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}