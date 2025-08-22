import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function SpecialistCardsPage() {
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
            <li>
              <Link href="/wiki/information/specialists" className="text-gray-400 hover:text-white">Specialists</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Cards</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Specialist Cards</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🃏</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Specialist Cards are powerful items that transform your character into specialized combat forms. 
              Each card provides unique abilities, stat bonuses, and gameplay mechanics for different combat roles.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Transform into specialized combat forms</li>
              <li>• Unique skill sets and abilities for each specialist</li>
              <li>• Leveling system independent from main character</li>
              <li>• Equipment and customization options per specialist</li>
            </ul>
          </div>
          
          {/* Card Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIALIST CARD TYPES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Volcanic Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fire-based magic and elemental attacks</li>
                  <li>• High damage output with area-of-effect abilities</li>
                  <li>• Resistance to fire damage and burning effects</li>
                  <li>• Unique volcanic armor and flame weapons</li>
                  <li>• Specialist skills: Meteor, Volcano, Fire Storm</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Glacial Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Ice magic with freezing and slowing effects</li>
                  <li>• Crowd control and defensive capabilities</li>
                  <li>• Immunity to cold and freezing attacks</li>
                  <li>• Crystal armor and ice-based weaponry</li>
                  <li>• Specialist skills: Blizzard, Ice Wall, Absolute Zero</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Lightning Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Electric attacks with chain lightning effects</li>
                  <li>• High-speed combat and mobility bonuses</li>
                  <li>• Resistance to paralysis and stun effects</li>
                  <li>• Conductive armor and electric weapons</li>
                  <li>• Specialist skills: Thunder Strike, Lightning Field, Storm</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Shadow Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Dark magic and stealth-based abilities</li>
                  <li>• Critical hit bonuses and evasion skills</li>
                  <li>• Resistance to dark magic and curse effects</li>
                  <li>• Shadow armor and ethereal weapons</li>
                  <li>• Specialist skills: Shadow Clone, Dark Veil, Soul Drain</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Divine Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Holy magic with healing and support abilities</li>
                  <li>• Powerful against undead and dark creatures</li>
                  <li>• Immunity to curse and negative status effects</li>
                  <li>• Sacred armor and blessed weapons</li>
                  <li>• Specialist skills: Divine Light, Holy Shield, Resurrection</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Demon Specialist</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Dark power with life-drain capabilities</li>
                  <li>• High damage at the cost of health management</li>
                  <li>• Resistance to death magic and poison</li>
                  <li>• Demonic armor and cursed weapons</li>
                  <li>• Specialist skills: Soul Burn, Demon Form, Life Steal</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Leveling System */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIALIST LEVELING</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level Progression</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Level Range</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Level 1-15: Basic specialist abilities</li>
                      <li>• Level 16-30: Enhanced skills and equipment</li>
                      <li>• Level 31-45: Advanced combat techniques</li>
                      <li>• Level 46-60: Master-tier abilities</li>
                      <li>• Level 61-75: Elite specialist powers</li>
                      <li>• Level 76-90: Legendary transformations</li>
                      <li>• Level 91-99: Ultimate specialist mastery</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Experience Sources</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Monster kills while transformed</li>
                      <li>• PvP combat victories</li>
                      <li>• Specialist-specific quests</li>
                      <li>• Training with specialist NPCs</li>
                      <li>• Specialist dungeon challenges</li>
                      <li>• Boss raid participation</li>
                      <li>• Special events and competitions</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Stat Growth</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Elemental damage bonuses</li>
                      <li>• Resistance improvements</li>
                      <li>• Skill cooldown reductions</li>
                      <li>• Critical hit rate increases</li>
                      <li>• Mana efficiency bonuses</li>
                      <li>• Transformation duration</li>
                      <li>• Special ability unlocks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment & Customization */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIALIST EQUIPMENT</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Equipment Types</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Specialist Weapons:</strong> Unique weapons tied to each specialist type</li>
                  <li>• <strong>Elemental Armor:</strong> Protective gear that enhances specialist abilities</li>
                  <li>• <strong>Accessory Sets:</strong> Rings, necklaces, and bracers with set bonuses</li>
                  <li>• <strong>Upgrade Materials:</strong> Special stones and crystals for enhancement</li>
                  <li>• <strong>Cosmetic Items:</strong> Visual customization options and appearances</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Enhancement System</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Equipment can be upgraded from +1 to +15</li>
                  <li>• Each upgrade level improves base stats and specialist bonuses</li>
                  <li>• Rare materials required for higher enhancement levels</li>
                  <li>• Success rates decrease at higher levels, with protection items available</li>
                  <li>• Specialized enhancement NPCs in major towns</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Skills & Abilities */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIALIST SKILLS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Skill Categories</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Active Skills</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Direct damage spells and attacks</li>
                      <li>• Area-of-effect abilities</li>
                      <li>• Buff and debuff spells</li>
                      <li>• Utility and movement skills</li>
                      <li>• Ultimate transformation abilities</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Passive Skills</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Elemental resistance bonuses</li>
                      <li>• Damage increase modifiers</li>
                      <li>• Critical hit improvements</li>
                      <li>• Mana efficiency enhancements</li>
                      <li>• Special status immunities</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Skill Points & Learning</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Gain skill points through specialist level increases</li>
                  <li>• Learn new skills from specialist masters and NPCs</li>
                  <li>• Some skills require quest completion or item collection</li>
                  <li>• Skill reset options available with special items</li>
                  <li>• Advanced skills unlock at higher specialist levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Obtaining Cards */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO OBTAIN SPECIALIST CARDS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Acquisition Methods</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Quest Rewards:</strong> Complete specialist-related questlines</li>
                  <li>• <strong>Boss Drops:</strong> Rare drops from specific raid bosses</li>
                  <li>• <strong>Event Prizes:</strong> Limited-time events and competitions</li>
                  <li>• <strong>NPC Exchange:</strong> Trade materials with specialist merchants</li>
                  <li>• <strong>Player Trading:</strong> Purchase from other players via market</li>
                  <li>• <strong>Achievement Rewards:</strong> Unlock through specific accomplishments</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Card Activation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Right-click specialist card in inventory to activate</li>
                  <li>• Transform command: <code className="bg-gray-700 px-2 py-1 rounded">.transform</code> or hotkey assignment</li>
                  <li>• Transformation has cooldown period after deactivation</li>
                  <li>• Can only use one specialist at a time</li>
                  <li>• Equipment automatically switches to specialist gear</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips & Strategies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">TIPS & STRATEGIES</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Team Composition:</strong> Coordinate with other players to create balanced specialist teams</p>
              <p><strong>Situational Use:</strong> Different specialists excel in different combat scenarios</p>
              <p><strong>Resource Management:</strong> Manage transformation time and cooldowns effectively</p>
              <p><strong>Equipment Planning:</strong> Maintain separate equipment sets for each specialist</p>
              <p><strong>Skill Synergy:</strong> Combine specialist abilities with regular character skills for maximum effect</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}