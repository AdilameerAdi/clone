import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PetUpgradingPage() {
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
            <li className="text-blue-400 font-medium">Pet Upgrading</li>
          </ol>
        </nav>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Pet Upgrading System</h1>
          
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🐾</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Pet Upgrading System allows players to enhance their companions beyond normal evolution limits. 
              Transform your pets into powerful allies with enhanced stats, new abilities, and unique appearances.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Advanced evolution paths beyond standard limits</li>
              <li>• Stat enhancement and ability upgrades</li>
              <li>• Unique visual transformations and effects</li>
              <li>• Special skill trees and customization options</li>
            </ul>
          </div>
          
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">UPGRADE TIERS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Enhancement Levels</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-gray-400">+0 to +5:</span> Basic stat improvements</li>
                  <li>• <span className="text-green-400">+6 to +10:</span> Moderate enhancements + glow effects</li>
                  <li>• <span className="text-blue-400">+11 to +15:</span> Major upgrades + new animations</li>
                  <li>• <span className="text-purple-400">+16 to +20:</span> Exceptional power + aura effects</li>
                  <li>• <span className="text-orange-400">+21 to +25:</span> Legendary status + unique skills</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Evolution Stages</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-white">Base Form:</span> Standard pet appearance</li>
                  <li>• <span className="text-green-400">Enhanced:</span> Improved size and coloring</li>
                  <li>• <span className="text-blue-400">Elite:</span> Particle effects and armor</li>
                  <li>• <span className="text-purple-400">Apex:</span> Dramatic transformation</li>
                  <li>• <span className="text-orange-400">Transcendent:</span> Unique legendary form</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔨</span>
              </div>
              <h3 className="text-lg font-semibold text-white">UPGRADE MATERIALS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Basic Materials</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Enhancement Stones</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Pet Enhancement Stone (+1 to +5)</li>
                      <li>• Superior Enhancement Stone (+6 to +10)</li>
                      <li>• Master Enhancement Stone (+11 to +15)</li>
                      <li>• Legendary Stone (+16 to +20)</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Evolution Crystals</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Basic Evolution Crystal</li>
                      <li>• Rare Evolution Crystal</li>
                      <li>• Epic Evolution Crystal</li>
                      <li>• Mythic Evolution Crystal</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Support Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Pet Food (increases success rate)</li>
                      <li>• Protection Scrolls (prevents failure)</li>
                      <li>• Blessed Scrolls (prevents downgrade)</li>
                      <li>• Lucky Charms (bonus effects)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Rare Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-blue-400">Celestial Essence:</span> Required for +16 and above upgrades</li>
                  <li>• <span className="text-purple-400">Divine Fragment:</span> Needed for transcendent evolution</li>
                  <li>• <span className="text-orange-400">Primordial Core:</span> Ultimate upgrade material for +21 to +25</li>
                  <li>• <span className="text-red-400">Phoenix Feather:</span> Resurrection item for failed upgrades</li>
                  <li>• <span className="text-gold">Dragon Soul:</span> Unlocks special skill trees</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">STAT ENHANCEMENTS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combat Statistics</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Offensive Stats</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Physical Attack Power</li>
                      <li>• Magical Attack Power</li>
                      <li>• Critical Hit Rate</li>
                      <li>• Attack Speed</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Defensive Stats</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Physical Defense</li>
                      <li>• Magical Defense</li>
                      <li>• HP and MP Pools</li>
                      <li>• Damage Reduction</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Special Attributes</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Elemental Resistances</li>
                      <li>• Status Effect Immunity</li>
                      <li>• Regeneration Rates</li>
                      <li>• Special Ability Cooldowns</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Utility Enhancements</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Movement Speed:</strong> Faster travel and combat mobility</li>
                  <li>• <strong>Carrying Capacity:</strong> Increased inventory space for pet storage</li>
                  <li>• <strong>Experience Bonus:</strong> Additional XP gain for owner and pet</li>
                  <li>• <strong>Drop Rate Boost:</strong> Higher chance for rare item discoveries</li>
                  <li>• <strong>Skill Efficiency:</strong> Reduced mana costs and cooldowns</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">UPGRADE RISKS & SAFETY</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Success Rates & Risks</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-green-400">+1 to +10:</span> 100% success rate with proper materials</li>
                  <li>• <span className="text-yellow-400">+11 to +15:</span> 85-95% success rate, minor stat loss on failure</li>
                  <li>• <span className="text-orange-400">+16 to +20:</span> 60-80% success rate, pet level reduction risk</li>
                  <li>• <span className="text-red-400">+21 to +25:</span> 30-50% success rate, pet destruction possible</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Safety Measures</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Protection Scrolls:</strong> Prevent upgrade level loss on failure</li>
                  <li>• <strong>Blessed Scrolls:</strong> Maintain current enhancement level if upgrade fails</li>
                  <li>• <strong>Insurance System:</strong> Premium service for pet recovery after destruction</li>
                  <li>• <strong>Backup Creation:</strong> Store pet data before high-risk upgrades</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIAL FEATURES</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Skill Tree Unlocking:</strong> High-level upgrades unlock unique pet skill combinations</p>
              <p><strong>Appearance Customization:</strong> Choose from multiple visual variants at each evolution stage</p>
              <p><strong>Bonding System:</strong> Stronger pet-owner relationships improve upgrade success rates</p>
              <p><strong>Legacy Traits:</strong> Upgraded pets can pass beneficial traits to offspring</p>
              <p><strong>Guild Benefits:</strong> Guild-owned upgrade facilities provide bonuses and safety nets</p>
            </div>
          </div>

          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO ACCESS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Pet Upgrader NPC:</strong> Located in major towns and guild halls</p>
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.petupgrade</code> or <code className="bg-gray-800 px-2 py-1 rounded">.enhance</code></p>
              <p><strong>Mobile Workshop:</strong> Premium players can access portable upgrade stations</p>
              <p><strong>Guild Facilities:</strong> Advanced guild halls include dedicated pet enhancement rooms</p>
              <p><strong>Event Locations:</strong> Special upgrade events with bonus success rates and materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}