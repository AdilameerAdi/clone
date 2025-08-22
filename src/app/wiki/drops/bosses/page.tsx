import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BossDropsPage() {
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
              <Link href="/wiki/drops" className="text-gray-400 hover:text-white">Drops</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Bosses</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Boss Drop Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👹</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Boss monsters provide the most valuable and rare drops in the game. This comprehensive guide covers 
              all boss types, their unique drops, spawn locations, and strategies for maximizing your rewards.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Complete boss drop tables and rates</li>
              <li>• Spawn times and location information</li>
              <li>• Rare and unique item documentation</li>
              <li>• Raid coordination and loot distribution</li>
            </ul>
          </div>
          
          {/* Raid Bosses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🐉</span>
              </div>
              <h3 className="text-lg font-semibold text-white">RAID BOSSES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Antharas (Level 85 Dragon)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Guaranteed Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Antharas&apos; Blood (100% - Quest item)</li>
                      <li>• Dragon Scale Gaiters (100%)</li>
                      <li>• 5,000,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 50-100 (100%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Antharas&apos; Earring (15%)</li>
                      <li>• Dragon Slayer (8%)</li>
                      <li>• Inferno Master (5%)</li>
                      <li>• Arcana Mace (3%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> Every 7 days (real time) | <strong>Location:</strong> Antharas Lair</p>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Valakas (Level 85 Dragon)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Guaranteed Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Valakas&apos; Blood (100% - Quest item)</li>
                      <li>• Dragon Scale Gaiters (100%)</li>
                      <li>• 5,000,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 50-100 (100%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Valakas&apos; Necklace (15%)</li>
                      <li>• Meteor Shower (8%)</li>
                      <li>• Spiritual Eye (5%)</li>
                      <li>• Keshanberk (3%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> Every 7 days (real time) | <strong>Location:</strong> Valakas Nest</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Baium (Level 75 Angel)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Guaranteed Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Blessed Scroll of Escape (100%)</li>
                      <li>• 3,000,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 30-60 (100%)</li>
                      <li>• Life Stone - Level 76 (100%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Baium&apos;s Ring (20%)</li>
                      <li>• Sword of Miracles (10%)</li>
                      <li>• Baium&apos;s Soul Crystal (8%)</li>
                      <li>• Angel Slayer (5%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> Every 5 days | <strong>Location:</strong> Tower of Insolence Roof</p>
              </div>
            </div>
          </div>

          {/* Epic Bosses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EPIC BOSSES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Queen Ant (Level 40)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Regular Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Queen Ant&apos;s Ring (40%)</li>
                      <li>• 500,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 10-20 (100%)</li>
                      <li>• C-grade Equipment (25%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Epic Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Sealed Majestic Ring (1%)</li>
                      <li>• Sealed Phoenix Ring (0.5%)</li>
                      <li>• Epic Jewelry Fragments (5%)</li>
                      <li>• Queen&apos;s Crown (2%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> 24-48 hours | <strong>Location:</strong> Ant Nest</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Core (Level 50)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Regular Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Core&apos;s Ring (40%)</li>
                      <li>• 750,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 15-25 (100%)</li>
                      <li>• B-grade Materials (30%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Epic Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Sealed Majestic Necklace (1%)</li>
                      <li>• Sealed Phoenix Necklace (0.5%)</li>
                      <li>• Core Fragment (3%)</li>
                      <li>• Golem Heart (2%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> 24-48 hours | <strong>Location:</strong> Cruma Tower Core</p>
              </div>

              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Orfen (Level 50)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Regular Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Orfen&apos;s Earring (40%)</li>
                      <li>• 750,000+ Adena (100%)</li>
                      <li>• Ancient Adena × 15-25 (100%)</li>
                      <li>• Poison Resistance Items (25%)</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Epic Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Sealed Majestic Earring (1%)</li>
                      <li>• Sealed Phoenix Earring (0.5%)</li>
                      <li>• Venom Sac (3%)</li>
                      <li>• Swamp King Crown (2%)</li>
                    </ul>
                  </div>
                </div>
                <p className="text-gray-300 text-xs mt-2"><strong>Spawn:</strong> 24-48 hours | <strong>Location:</strong> Forest of Mirrors</p>
              </div>
            </div>
          </div>

          {/* Special Event Bosses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎭</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EVENT BOSSES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Halloween Lord</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spawn:</strong> October event only</li>
                  <li>• <strong>Location:</strong> Haunted Manor</li>
                  <li>• <strong>Drops:</strong> Halloween costumes, candy</li>
                  <li>• <strong>Rare:</strong> Pumpkin Head (1%)</li>
                  <li>• <strong>Ultra Rare:</strong> Demon Wings (0.1%)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Santa&apos;s Helper</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spawn:</strong> December event only</li>
                  <li>• <strong>Location:</strong> Christmas Village</li>
                  <li>• <strong>Drops:</strong> Holiday items, gifts</li>
                  <li>• <strong>Rare:</strong> Santa Hat (2%)</li>
                  <li>• <strong>Ultra Rare:</strong> Reindeer Mount (0.2%)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Love Guardian</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spawn:</strong> February event only</li>
                  <li>• <strong>Location:</strong> Valentine Gardens</li>
                  <li>• <strong>Drops:</strong> Romance items, chocolates</li>
                  <li>• <strong>Rare:</strong> Cupid Wings (1.5%)</li>
                  <li>• <strong>Ultra Rare:</strong> Love Potion (0.3%)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Anniversary Dragon</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Spawn:</strong> Server anniversary</li>
                  <li>• <strong>Location:</strong> Special event map</li>
                  <li>• <strong>Drops:</strong> Commemorative items</li>
                  <li>• <strong>Rare:</strong> Anniversary Crown (1%)</li>
                  <li>• <strong>Ultra Rare:</strong> Golden Dragon Pet (0.05%)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* World Bosses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">WORLD BOSSES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Regional Field Bosses</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Dion Region</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Timak Orc Overlord (Level 44)</li>
                      <li>• Drops: Overlord equipment, tribal items</li>
                      <li>• Spawn: Every 6-12 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Giran Region</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Shilen&apos;s Messenger (Level 52)</li>
                      <li>• Drops: Dark equipment, cursed items</li>
                      <li>• Spawn: Every 8-16 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Aden Region</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Ancient Golem (Level 60)</li>
                      <li>• Drops: Golem parts, earth crystals</li>
                      <li>• Spawn: Every 12-24 hours</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Goddard Region</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Frost Giant (Level 68)</li>
                      <li>• Drops: Ice weapons, winter gear</li>
                      <li>• Spawn: Every 18-36 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Loot Distribution */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎁</span>
              </div>
              <h3 className="text-lg font-semibold text-white">LOOT DISTRIBUTION SYSTEM</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Damage-Based Distribution</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Top Damage Dealer:</strong> First pick of rare items</li>
                  <li>• <strong>Top 3 Contributors:</strong> Guaranteed rare drop participation</li>
                  <li>• <strong>All Participants:</strong> Share in common drops and Adena</li>
                  <li>• <strong>Minimum Damage:</strong> 5% total damage for loot rights</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Alliance/Guild Priority</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Guild First:</strong> Guild members get priority on items</li>
                  <li>• <strong>Alliance Second:</strong> Alliance members next in line</li>
                  <li>• <strong>Public Third:</strong> Random participants last</li>
                  <li>• <strong>Contribution Points:</strong> Internal guild/alliance tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Boss Hunting Tips */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">BOSS HUNTING TIPS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Preparation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Stock up on consumables (potions, shots, scrolls)</li>
                  <li>• Coordinate with guild/alliance for organized raids</li>
                  <li>• Scout spawn times and competition levels</li>
                  <li>• Prepare appropriate equipment and buffs</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Strategy</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Focus on damage dealing for better loot chances</li>
                  <li>• Protect support classes (healers, buffers)</li>
                  <li>• Use terrain and positioning to your advantage</li>
                  <li>• Have escape plans ready for failed attempts</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}