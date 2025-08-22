import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function LevelingGuidePage() {
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
            <li className="text-blue-400 font-medium">Leveling</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Leveling Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              This comprehensive leveling guide covers the most efficient methods to progress your character 
              from creation to endgame. Learn optimal grinding spots, quest paths, and strategies for each level range.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Optimal grinding locations for each level range</li>
              <li>• Quest recommendations and efficient paths</li>
              <li>• Experience modifiers and bonuses</li>
              <li>• Equipment and preparation tips</li>
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
                <h4 className="text-white font-semibold mb-2">Starting Areas</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Talking Island (Levels 1-10)</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Wolves, Orcs, and Spiders</li>
                      <li>• Complete all newbie quests</li>
                      <li>• Gather basic equipment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Elven Village (Levels 1-10)</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Bears, Spartoi, and Skeleton Warriors</li>
                      <li>• Focus on ranger/archer quests</li>
                      <li>• Stock up on arrows</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Progression Tips (Levels 10-20)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Move to Abandoned Camp for better EXP rates</li>
                  <li>• Complete class change quest around level 15-18</li>
                  <li>• Purchase D-grade equipment from shops</li>
                  <li>• Party with other players for bonus EXP</li>
                  <li>• Use newbie buffs and assistance items</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mid Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MID LEVELS (20-40)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Recommended Grinding Areas</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Levels 20-25: Wasteland</p>
                    <p className="text-gray-400 text-xs">Hunt Leto Lizardmen and Keltirs for steady EXP</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 25-30: Windmill Hill</p>
                    <p className="text-gray-400 text-xs">Undead and Windus provide good EXP and drops</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 30-35: Forgotten Temple</p>
                    <p className="text-gray-400 text-xs">Temple monsters offer excellent EXP rates</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 35-40: Cruma Tower (1F-2F)</p>
                    <p className="text-gray-400 text-xs">First dungeon experience with party benefits</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Important Milestones</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Level 20: Unlock second class change quest</li>
                  <li>• Level 25: Access to C-grade equipment</li>
                  <li>• Level 30: Manor system participation</li>
                  <li>• Level 35: Advanced skill learning</li>
                  <li>• Level 40: Preparation for next class change</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Levels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ADVANCED LEVELS (40-76)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">High-Efficiency Areas</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Levels 40-50: Cruma Tower (3F-4F)</p>
                    <p className="text-gray-400 text-xs">Higher floors with better monsters and drops</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 50-60: Antharas Lair Entrance</p>
                    <p className="text-gray-400 text-xs">Dragon Valley monsters for excellent EXP</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 60-70: Tower of Insolence</p>
                    <p className="text-gray-400 text-xs">Multi-floor dungeon with varying difficulties</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 70-76: Primeval Isle</p>
                    <p className="text-gray-400 text-xs">Prehistoric monsters with high EXP rewards</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Class Change Requirements</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Level 40: Second class change (Fighter → Warrior/Knight)</li>
                  <li>• Level 76: Third class change (Warrior → Gladiator/Warlord)</li>
                  <li>• Complete class-specific quests and trials</li>
                  <li>• Gather required materials and items</li>
                  <li>• Plan ahead for optimal stat distribution</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Endgame Leveling */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👑</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ENDGAME LEVELING (76-85)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Elite Grinding Spots</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Levels 76-80: Seed of Annihilation</p>
                    <p className="text-gray-400 text-xs">Challenging area with exceptional rewards</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 78-82: Hellbound Island</p>
                    <p className="text-gray-400 text-xs">High-level demonic creatures</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Levels 80-85: Gracia Areas</p>
                    <p className="text-gray-400 text-xs">Newest content with maximum level mobs</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Endgame Strategies</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Focus on raid boss participation for maximum EXP</li>
                  <li>• Join organized parties for efficiency</li>
                  <li>• Use all available EXP bonuses and consumables</li>
                  <li>• Prioritize quest completion for milestone rewards</li>
                  <li>• Consider alternative progression methods (PvP, crafting)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Experience Modifiers */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EXPERIENCE MODIFIERS</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Party Bonus (2-9 players)</span>
                <span className="text-green-400 font-semibold">+10% to +50% EXP</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Wedding Bonus (Married couples)</span>
                <span className="text-pink-400 font-semibold">+5% EXP when together</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">VIP Membership</span>
                <span className="text-purple-400 font-semibold">+15% to +25% EXP</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Weekend Events</span>
                <span className="text-blue-400 font-semibold">+100% EXP (limited time)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Experience Scrolls/Potions</span>
                <span className="text-yellow-400 font-semibold">+50% to +200% EXP</span>
              </div>
            </div>
          </div>

          {/* General Tips */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">GENERAL LEVELING TIPS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Equipment & Preparation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Keep equipment updated for your level range</li>
                  <li>• Stock up on consumables before long grinding sessions</li>
                  <li>• Use appropriate shots for your weapon type</li>
                  <li>• Consider enchanting equipment for better performance</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Efficiency Strategies</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Hunt monsters close to your level for optimal EXP</li>
                  <li>• Use area-of-effect skills for multiple monster hunting</li>
                  <li>• Minimize downtime with quick travel options</li>
                  <li>• Join active guilds for group activities and bonuses</li>
                  <li>• Take advantage of daily quests and rewards</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}