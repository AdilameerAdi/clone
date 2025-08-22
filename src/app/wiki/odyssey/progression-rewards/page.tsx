import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyProgressionRewardsPage() {
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
            <li className="text-blue-400 font-medium">Progression Rewards</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Progression Rewards</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Reward System Overview</h2>
            <p className="text-gray-300 mb-4">
              The Odyssey progression system offers exclusive rewards based on your achievements and milestones. 
              Rewards are categorized into three main types: Level Rewards, Trophy Collections, and Raid Achievements.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="text-white font-semibold">Level-Based</h3>
                <p className="text-gray-400 text-sm mt-2">Rewards for reaching Odyssey levels</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🏆</div>
                <h3 className="text-white font-semibold">Trophy System</h3>
                <p className="text-gray-400 text-sm mt-2">Collectible trophies for achievements</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚔️</div>
                <h3 className="text-white font-semibold">Raid Rewards</h3>
                <p className="text-gray-400 text-sm mt-2">Exclusive items from raid completions</p>
              </div>
            </div>
          </div>

          {/* Achievement Rewards by Level */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Achievement Rewards by Level</h2>
            <p className="text-gray-300 mb-4">
              Each Odyssey level milestone unlocks exclusive rewards. Higher levels provide increasingly rare and powerful items.
            </p>
            <div className="space-y-4">
              {/* Level 1-10 */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-gray-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">🥉</span>
                  Novice Tier (Levels 1-10)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Equipment Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Novice Odyssey Cloak (+5% XP)</li>
                      <li>• Beginner&apos;s Lucky Charm (+3% item drop rate)</li>
                      <li>• Starter Adventure Pack (consumables)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Cosmetic Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• &quot;Odyssey Novice&quot; title</li>
                      <li>• Bronze Odyssey Badge</li>
                      <li>• Novice Emote Pack</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 11-25 */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-amber-600">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">🥈</span>
                  Adventurer Tier (Levels 11-25)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Equipment Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Adventurer&apos;s Odyssey Armor Set (+10% all stats)</li>
                      <li>• Wayfinder&apos;s Compass (teleportation item)</li>
                      <li>• Enhanced Adventure Pack (rare consumables)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Cosmetic Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• &quot;Seasoned Adventurer&quot; title</li>
                      <li>• Silver Odyssey Badge</li>
                      <li>• Adventurer Mount Skin</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 26-40 */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">🥇</span>
                  Champion Tier (Levels 26-40)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Equipment Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Champion&apos;s Odyssey Regalia (+15% all stats)</li>
                      <li>• Legendary Odyssey Weapon (class-specific)</li>
                      <li>• Champion&apos;s Resource Cache (epic materials)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Cosmetic Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• &quot;Odyssey Champion&quot; title</li>
                      <li>• Gold Odyssey Badge</li>
                      <li>• Exclusive Champion Aura Effect</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 41-60 */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">💎</span>
                  Master Tier (Levels 41-60)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Equipment Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Master&apos;s Odyssey Vestments (+20% all stats)</li>
                      <li>• Mythical Odyssey Artifact (unique abilities)</li>
                      <li>• Master Craftsman Tools (enhanced crafting)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Cosmetic Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• &quot;Odyssey Master&quot; title</li>
                      <li>• Platinum Odyssey Badge</li>
                      <li>• Master&apos;s Ceremonial Wings</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Level 61+ */}
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-xl mr-2">👑</span>
                  Legend Tier (Levels 61+)
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Equipment Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Legendary Odyssey Crown (+25% all stats)</li>
                      <li>• Transcendent Odyssey Relic (game-changing)</li>
                      <li>• Infinite Resource Generator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Cosmetic Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• &quot;Odyssey Legend&quot; title</li>
                      <li>• Diamond Odyssey Badge</li>
                      <li>• Legendary Transformation Effect</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trophy Collections */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Trophy Collections</h2>
            <p className="text-gray-300 mb-4">
              Collect trophies by completing specific achievements. Each trophy grants permanent bonuses and unlocks exclusive content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🏆</span>
                  Combat Mastery
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Win 100 PvP matches</div>
                  <div><strong>Bonus:</strong> +5% critical hit chance</div>
                  <div><strong>Unlocks:</strong> Gladiator Arena access</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🛡️</span>
                  Guardian&apos;s Honor
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Protect 50 team members</div>
                  <div><strong>Bonus:</strong> +10% damage reduction</div>
                  <div><strong>Unlocks:</strong> Guardian specialization</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🌟</span>
                  Explorer&apos;s Pride
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Discover 75 hidden areas</div>
                  <div><strong>Bonus:</strong> +15% movement speed</div>
                  <div><strong>Unlocks:</strong> Secret map locations</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">⚗️</span>
                  Master Crafter
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Craft 500 epic items</div>
                  <div><strong>Bonus:</strong> +20% crafting success rate</div>
                  <div><strong>Unlocks:</strong> Mythical recipes</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🎯</span>
                  Perfectionist
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Complete 25 quests flawlessly</div>
                  <div><strong>Bonus:</strong> +25% quest rewards</div>
                  <div><strong>Unlocks:</strong> Perfect run challenges</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="text-2xl mr-2">🤝</span>
                  Team Player
                </h3>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Requirement:</strong> Complete 100 group activities</div>
                  <div><strong>Bonus:</strong> +30% group XP bonus</div>
                  <div><strong>Unlocks:</strong> Leadership abilities</div>
                </div>
              </div>
            </div>
          </div>

          {/* Raid Achievement Rewards */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Raid Achievement Rewards</h2>
            <p className="text-gray-300 mb-4">
              Exclusive rewards for completing challenging raid content. These rewards showcase your prowess in the most difficult content.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">🔥</span>
                  Inferno Raid Mastery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">First Clear Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Inferno Slayer title</li>
                      <li>• Molten Core Weapon Skin</li>
                      <li>• Fire Immunity Potion (permanent)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Speed Run Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Blazing Speed title</li>
                      <li>• Phoenix Mount</li>
                      <li>• Flame Trail Effect</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">❄️</span>
                  Frozen Citadel Conquest
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">First Clear Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Frost Walker title</li>
                      <li>• Crystalline Armor Set</li>
                      <li>• Ice Path ability</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">No Death Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Flawless Frost title</li>
                      <li>• Ice Dragon Pet</li>
                      <li>• Eternal Winter Aura</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3 flex items-center">
                  <span className="text-2xl mr-2">⚡</span>
                  Storm Spire Challenge
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">First Clear Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Storm Caller title</li>
                      <li>• Thunder Lord Cape</li>
                      <li>• Lightning Strike skill</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-gray-300 font-medium mb-2">Solo Clear Rewards:</h4>
                    <ul className="text-gray-400 text-sm space-y-1 ml-4">
                      <li>• Lone Thunder title</li>
                      <li>• Storm Eagle Mount</li>
                      <li>• Personal Storm Cloud</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Seasonal Rewards */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Seasonal Rewards</h2>
            <p className="text-gray-300 mb-4">
              Limited-time rewards available only during specific Odyssey seasons. These become legacy items after the season ends.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
                <h3 className="text-white font-semibold mb-2">Spring Awakening Season</h3>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Bloom Walker title</li>
                  <li>• Flower Crown cosmetic</li>
                  <li>• Nature&apos;s Blessing buff (permanent)</li>
                  <li>• Seasonal Spring Mount</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-400">
                <h3 className="text-white font-semibold mb-2">Summer Solstice Season</h3>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Sun Blessed title</li>
                  <li>• Solar Halo effect</li>
                  <li>• Heat Resistance (permanent)</li>
                  <li>• Golden Sun Chariot</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-orange-400">
                <h3 className="text-white font-semibold mb-2">Autumn Harvest Season</h3>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Harvest Lord title</li>
                  <li>• Autumn Leaves Trail</li>
                  <li>• Abundance Blessing (permanent)</li>
                  <li>• Harvest Moon Wolf</li>
                </ul>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-400">
                <h3 className="text-white font-semibold mb-2">Winter Frost Season</h3>
                <ul className="text-gray-400 text-sm space-y-1 ml-4">
                  <li>• Frost Born title</li>
                  <li>• Snowflake Aura</li>
                  <li>• Cold Immunity (permanent)</li>
                  <li>• Arctic Wolf Companion</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Related Sections</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Link href="/wiki/odyssey/faq" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">❓ Odyssey FAQ</h3>
                <p className="text-gray-400 text-sm">Learn about the Odyssey system</p>
              </Link>
              
              <Link href="/wiki/odyssey/calendar" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">📅 Event Calendar</h3>
                <p className="text-gray-400 text-sm">View upcoming events and schedules</p>
              </Link>
              
              <Link href="/wiki/odyssey/achievements" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🏆 Achievements</h3>
                <p className="text-gray-400 text-sm">Browse all available achievements</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}