import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PvPGuidePage() {
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
            <li className="text-blue-400 font-medium">PvP</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Player vs Player (PvP) Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Master the art of Player vs Player combat with comprehensive strategies, class guides, and tactical advice. 
              Learn to dominate in 1v1 duels, group battles, and large-scale sieges.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Combat mechanics and timing strategies</li>
              <li>• Class-specific builds and tactics</li>
              <li>• Equipment optimization for PvP</li>
              <li>• Group coordination and siege warfare</li>
            </ul>
          </div>
          
          {/* PvP Basics */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PVP FUNDAMENTALS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combat Mechanics</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Attack Timing:</strong> Learn animation canceling and skill rotation</li>
                  <li>• <strong>Movement:</strong> Master kiting, positioning, and terrain usage</li>
                  <li>• <strong>Resource Management:</strong> Efficient MP/HP usage during combat</li>
                  <li>• <strong>Target Selection:</strong> Prioritize threats and vulnerable enemies</li>
                  <li>• <strong>Escape Tactics:</strong> Know when to retreat and reposition</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Essential Concepts</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Karma System:</strong> Understand flagging and consequences</li>
                  <li>• <strong>Death Penalties:</strong> EXP loss and equipment drop risks</li>
                  <li>• <strong>Safe Zones:</strong> Towns and protected areas</li>
                  <li>• <strong>PK Protection:</strong> Newbie and chaotic player mechanics</li>
                  <li>• <strong>Honor Points:</strong> Rewards for successful PvP participation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Class Strategies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏛️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CLASS-SPECIFIC STRATEGIES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Warrior Classes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Gladiator:</strong> High damage, close-range specialist</li>
                  <li>• <strong>Warlord:</strong> Tank support with group benefits</li>
                  <li>• <strong>Destroyer:</strong> Two-handed weapon powerhouse</li>
                  <li>• <strong>Tyrant:</strong> Martial arts and combo specialist</li>
                  <li>• Focus on gap closing and burst damage</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Mage Classes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Sorcerer:</strong> High damage single-target nuker</li>
                  <li>• <strong>Necromancer:</strong> DoT and summon specialist</li>
                  <li>• <strong>Warlock:</strong> Debuff and control master</li>
                  <li>• <strong>Spellhowler:</strong> AoE damage dealer</li>
                  <li>• Maintain distance and control positioning</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Archer Classes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Hawkeye:</strong> Precision long-range attacks</li>
                  <li>• <strong>Silver Ranger:</strong> Bow specialist with utility</li>
                  <li>• <strong>Phantom Ranger:</strong> Stealth and critical strikes</li>
                  <li>• Use range advantage and mobility skills</li>
                  <li>• Perfect for kiting and hit-and-run tactics</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Support Classes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Bishop:</strong> Primary healer and buffer</li>
                  <li>• <strong>Prophet:</strong> Utility buffs and support</li>
                  <li>• <strong>Elven Elder:</strong> Nature magic specialist</li>
                  <li>• <strong>Shillien Elder:</strong> Dark magic and debuffs</li>
                  <li>• Stay protected while supporting allies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Equipment & Build */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PVP EQUIPMENT & BUILDS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Weapon Selection</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Melee Weapons</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Focus on critical rate and speed</li>
                      <li>• Consider weapon range for different classes</li>
                      <li>• Enchant for maximum damage output</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Ranged/Magic Weapons</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Prioritize magical attack power</li>
                      <li>• Consider casting speed bonuses</li>
                      <li>• Balance damage vs. accuracy</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Armor & Accessories</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Heavy Armor:</strong> Maximum defense for frontline fighters</li>
                  <li>• <strong>Light Armor:</strong> Balance of defense and mobility</li>
                  <li>• <strong>Robe:</strong> Magical defense and casting speed for mages</li>
                  <li>• <strong>Accessories:</strong> Focus on resistances and special abilities</li>
                  <li>• <strong>Tattoos/Dyes:</strong> Permanent stat bonuses</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Essential PvP Items</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Greater Healing Potions for emergency recovery</li>
                  <li>• Spirit Shots/Blessed Spirit Shots for damage</li>
                  <li>• Scrolls of Escape for emergency retreat</li>
                  <li>• Antidotes and cure potions for debuff removal</li>
                  <li>• Buff scrolls for temporary advantages</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PvP Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🥊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PVP FORMATS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">1v1 Dueling</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Preparation:</strong> Ensure full buffs and consumables</li>
                  <li>• <strong>Tactics:</strong> Learn opponent&apos;s class weaknesses</li>
                  <li>• <strong>Practice:</strong> Use safe dueling zones for training</li>
                  <li>• <strong>Honor System:</strong> Respect agreed-upon rules</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Small Group PvP (2-9 players)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Composition:</strong> Balance damage, support, and control</li>
                  <li>• <strong>Focus Fire:</strong> Coordinate on priority targets</li>
                  <li>• <strong>Communication:</strong> Use voice chat for real-time coordination</li>
                  <li>• <strong>Positioning:</strong> Maintain formation and protect supporters</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Mass PvP & Sieges</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Leadership:</strong> Follow commanders and organized strategies</li>
                  <li>• <strong>Role Assignment:</strong> Stick to your designated role</li>
                  <li>• <strong>Objectives:</strong> Focus on strategic goals over individual kills</li>
                  <li>• <strong>Supplies:</strong> Prepare extensive consumables and backup equipment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Tactics */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ADVANCED TACTICS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combat Techniques</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Animation Canceling:</strong> Interrupt attacks for faster combos</li>
                  <li>• <strong>Skill Weaving:</strong> Optimize skill rotation for maximum DPS</li>
                  <li>• <strong>Range Manipulation:</strong> Control engagement distances</li>
                  <li>• <strong>Terrain Usage:</strong> Use obstacles and elevation advantages</li>
                  <li>• <strong>Prediction:</strong> Anticipate enemy movements and skills</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Psychological Warfare</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Intimidation:</strong> Display superior equipment and achievements</li>
                  <li>• <strong>Misdirection:</strong> Fake retreats and surprise attacks</li>
                  <li>• <strong>Patience:</strong> Wait for enemy mistakes and openings</li>
                  <li>• <strong>Pressure:</strong> Maintain constant threat and harassment</li>
                  <li>• <strong>Adaptation:</strong> Change tactics based on enemy responses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* PvP Rewards */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PVP REWARDS & PROGRESSION</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Honor Points (per kill)</span>
                <span className="text-green-400 font-semibold">10-50 points</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">PvP Tournament Rewards</span>
                <span className="text-blue-400 font-semibold">Exclusive equipment & titles</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Siege Participation</span>
                <span className="text-purple-400 font-semibold">Clan reputation & items</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">PvP Milestones</span>
                <span className="text-yellow-400 font-semibold">Achievement rewards & recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}