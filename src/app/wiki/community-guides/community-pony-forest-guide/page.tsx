import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CommunityPonyForestGuidePage() {
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
              <Link href="/wiki/community-guides" className="text-gray-400 hover:text-white">Community Guides</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Community Pony Forest Guide</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Community Pony Forest Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🦄</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Pony Forest is a magical area filled with mystical creatures and rare resources. This community-created 
              guide covers optimal routes, rare spawns, hidden treasures, and advanced strategies discovered by experienced players.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Exclusive rare pony spawns and taming opportunities</li>
              <li>• Hidden treasure locations and secret passages</li>
              <li>• Optimal farming routes for experience and materials</li>
              <li>• Community-discovered strategies and tips</li>
            </ul>
          </div>

          {/* Author Credit */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👤</span>
              </div>
              <h3 className="text-lg font-semibold text-white">GUIDE CONTRIBUTORS</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-300 mb-2">
                <strong>Primary Author:</strong> <span className="text-blue-400">MysticRanger_92</span>
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Additional Contributors:</strong> <span className="text-green-400">ForestExplorer</span>, <span className="text-yellow-400">PonyWhisperer</span>, <span className="text-pink-400">TreasureHunter_X</span>
              </p>
              <p className="text-gray-300 text-sm">
                Last Updated: March 2024 | Version 3.2 | Community Verified ✓
              </p>
            </div>
          </div>
          
          {/* Map Layout */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🗺️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">FOREST LAYOUT & ZONES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Northern Grove</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-blue-400">Crystal Ponies</span> - Rare spawns every 4-6 hours</li>
                  <li>• <span className="text-purple-400">Ancient Trees</span> - Magical wood harvesting</li>
                  <li>• <span className="text-green-400">Healing Springs</span> - HP/MP restoration</li>
                  <li>• <strong>Hidden:</strong> Secret cave behind waterfall (X:142, Y:85)</li>
                  <li>• <strong>Danger Level:</strong> Low-Medium (Level 35-45 monsters)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Central Meadows</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-pink-400">Rainbow Ponies</span> - Event-based spawns</li>
                  <li>• <span className="text-yellow-400">Golden Flowers</span> - Alchemy ingredients</li>
                  <li>• <span className="text-orange-400">Fairy Rings</span> - Teleportation circles</li>
                  <li>• <strong>Hidden:</strong> Buried treasure chest (X:200, Y:156)</li>
                  <li>• <strong>Danger Level:</strong> Very Low (Level 20-35 monsters)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Southern Thickets</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-red-400">Shadow Ponies</span> - Aggressive rare spawns</li>
                  <li>• <span className="text-gray-400">Thorned Vines</span> - Movement obstacles</li>
                  <li>• <span className="text-purple-400">Dark Crystals</span> - High-value materials</li>
                  <li>• <strong>Hidden:</strong> Underground tunnel system (X:89, Y:201)</li>
                  <li>• <strong>Danger Level:</strong> High (Level 50-65 monsters)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Eastern Cliffs</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-cyan-400">Wind Ponies</span> - Flying rare spawns</li>
                  <li>• <span className="text-blue-400">Sky Crystals</span> - Levitation materials</li>
                  <li>• <span className="text-white">Cloud Platforms</span> - Jumping puzzles</li>
                  <li>• <strong>Hidden:</strong> Sky temple accessible at dawn (X:298, Y:67)</li>
                  <li>• <strong>Danger Level:</strong> Medium-High (Level 40-55 monsters)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rare Spawns */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">RARE PONY SPAWNS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Legendary Ponies</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="text-blue-400 font-medium">Celestial Pony</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Spawn Time:</strong> Every 12 hours at midnight/noon</li>
                      <li>• <strong>Location:</strong> Center of Northern Grove (X:150, Y:100)</li>
                      <li>• <strong>Condition:</strong> Only during clear weather</li>
                      <li>• <strong>Drops:</strong> Celestial Horn, Starlight Mane, Divine Essence</li>
                      <li>• <strong>Taming Chance:</strong> 5% with Master Ball, 15% with Celestial Treats</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h5 className="text-purple-400 font-medium">Void Pony</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Spawn Time:</strong> Randomly every 18-24 hours</li>
                      <li>• <strong>Location:</strong> Southern Thickets deep cave (X:65, Y:220)</li>
                      <li>• <strong>Condition:</strong> Only during new moon phase</li>
                      <li>• <strong>Drops:</strong> Void Crystal, Shadow Mane, Darkness Shard</li>
                      <li>• <strong>Taming Chance:</strong> 3% with any method (extremely difficult)</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-pink-400 pl-4">
                    <h5 className="text-pink-400 font-medium">Rainbow Pony</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Spawn Time:</strong> Only during special server events</li>
                      <li>• <strong>Location:</strong> Central Meadows after rainbow appears</li>
                      <li>• <strong>Condition:</strong> After rain weather ends</li>
                      <li>• <strong>Drops:</strong> Rainbow Tail, Prism Crystal, Joy Essence</li>
                      <li>• <strong>Taming Chance:</strong> 25% with Rainbow Treats (event item)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hidden Treasures */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HIDDEN TREASURES & SECRETS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Treasure Locations</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium text-yellow-400">Northern Grove Secrets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Crystal Cave: Behind waterfall (dig at X:145, Y:88)</li>
                      <li>• Ancient Shrine: Under largest tree (X:167, Y:112)</li>
                      <li>• Moonwell: Visible only at night (X:134, Y:95)</li>
                      <li>• <strong>Loot:</strong> Rare gems, ancient scrolls, magic items</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-green-400">Central Meadows Secrets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Fairy Treasury: Inside giant mushroom (X:205, Y:145)</li>
                      <li>• Golden Chest: Buried under flower patch (X:190, Y:160)</li>
                      <li>• Time Capsule: Player-left treasure (X:215, Y:170)</li>
                      <li>• <strong>Loot:</strong> Gold, fairy dust, rare seeds</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-red-400">Southern Thickets Secrets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Shadow Vault: End of tunnel maze (X:78, Y:235)</li>
                      <li>• Cursed Treasure: Dangerous but valuable (X:95, Y:198)</li>
                      <li>• Bandit Cache: Old player stash (X:112, Y:215)</li>
                      <li>• <strong>Loot:</strong> Dark crystals, cursed items, rare weapons</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-cyan-400">Eastern Cliffs Secrets</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Sky Temple: Accessible only at dawn (X:298, Y:67)</li>
                      <li>• Wind Chest: On highest platform (X:287, Y:45)</li>
                      <li>• Eagle's Nest: Hidden cache (X:310, Y:78)</li>
                      <li>• <strong>Loot:</strong> Wind crystals, flying potions, rare feathers</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Puzzle Solutions</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Crystal Lock:</strong> Touch crystals in rainbow order (Red→Orange→Yellow→Green→Blue→Purple)</li>
                  <li>• <strong>Musical Stones:</strong> Play melody: Do-Re-Mi-Fa-Sol in Central Meadows</li>
                  <li>• <strong>Star Alignment:</strong> Wait for constellation match in Eastern Cliffs</li>
                  <li>• <strong>Element Trial:</strong> Use Fire→Water→Earth→Air spells in sequence</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Farming Routes */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌾</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OPTIMAL FARMING ROUTES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Experience Farming Circuit</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Route:</strong> Northern Grove → Central Meadows → Eastern Cliffs (avoid Southern Thickets)</li>
                  <li>• <strong>Duration:</strong> 45-60 minutes per complete circuit</li>
                  <li>• <strong>XP/Hour:</strong> 150,000-200,000 (level 40-50 range)</li>
                  <li>• <strong>Monsters:</strong> Focus on Crystal Sprites, Flower Fairies, Wind Wisps</li>
                  <li>• <strong>Tips:</strong> Use AoE skills, bring stamina potions, group recommended</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Material Gathering Route</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Focus:</strong> Magical materials and rare ingredients</li>
                  <li>• <strong>Best Times:</strong> Early morning (6-8 AM) for respawned resources</li>
                  <li>• <strong>Key Items:</strong> Starlight Moss, Rainbow Petals, Wind Crystals</li>
                  <li>• <strong>Tools Needed:</strong> Master Gathering Tools, Preservation Bags</li>
                  <li>• <strong>Profit:</strong> 50,000-100,000 gold per hour</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Advanced Strategies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ADVANCED STRATEGIES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Weather Manipulation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Use Weather Control Scrolls to trigger rare spawns</li>
                  <li>• Clear weather = Celestial Pony spawns increase</li>
                  <li>• Rain weather = Better flower/material respawn rates</li>
                  <li>• Storm weather = Higher drop rates from wind creatures</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Time Zone Exploitation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Log in at off-peak hours for less competition</li>
                  <li>• Midnight spawns are often uncontested</li>
                  <li>• Early morning (5-7 AM) best for treasure hunting</li>
                  <li>• Weekend evenings = highest rare spawn activity</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Community Coordination</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Join "Pony Forest Hunters" guild channel</li>
                  <li>• Share rare spawn locations with trusted players</li>
                  <li>• Coordinate treasure hunting expeditions</li>
                  <li>• Trade location information for mutual benefit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tips & Warnings */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚠️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">IMPORTANT TIPS & WARNINGS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>PvP Zones:</strong> Southern Thickets and Eastern Cliffs are PvP-enabled zones</p>
              <p><strong>Equipment:</strong> Bring teleportation scrolls and emergency healing items</p>
              <p><strong>Inventory:</strong> Keep space for rare drops - some items are extremely valuable</p>
              <p><strong>Patience:</strong> Rare spawns require patience; some players camp for hours</p>
              <p><strong>Community:</strong> Respect other players' hunting spots and share information fairly</p>
              <p><strong>Updates:</strong> This guide is community-maintained - check forums for latest discoveries</p>
            </div>
          </div>

          {/* Community Feedback */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💬</span>
              </div>
              <h3 className="text-lg font-semibold text-white">COMMUNITY FEEDBACK</h3>
            </div>
            <div className="bg-gray-800 rounded-lg p-4">
              <p className="text-gray-300 text-sm mb-3">
                Have new discoveries or corrections? Contact the guide maintainers:
              </p>
              <ul className="text-gray-300 space-y-1 text-sm">
                <li>• Discord: <span className="text-blue-400">#pony-forest-guides</span> channel</li>
                <li>• In-game: PM <span className="text-green-400">MysticRanger_92</span> or <span className="text-yellow-400">ForestExplorer</span></li>
                <li>• Forum: Post in "Community Guides" section</li>
                <li>• Email: guides@olympusserver.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}