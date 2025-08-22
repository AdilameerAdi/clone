import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DropsItemsPage() {
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
            <li className="text-blue-400 font-medium">Items</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Item Drops Database</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📦</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Comprehensive database of all item drops available in Olympus. Find drop rates, sources, 
              and detailed information about equipment, materials, consumables, and rare items.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Complete item database with drop sources</li>
              <li>• Drop rate percentages and probability calculations</li>
              <li>• Monster and boss drop tables</li>
              <li>• Rare and legendary item locations</li>
            </ul>
          </div>
          
          {/* Item Categories */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ITEM CATEGORIES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Equipment</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/weapons" className="text-blue-400 hover:text-blue-300">Weapons</Link> - Swords, Bows, Staves, Daggers</li>
                  <li>• <Link href="/wiki/drops/items/armor" className="text-blue-400 hover:text-blue-300">Armor</Link> - Helmets, Chest, Legs, Boots, Gloves</li>
                  <li>• <Link href="/wiki/drops/items/accessories" className="text-blue-400 hover:text-blue-300">Accessories</Link> - Rings, Necklaces, Bracelets</li>
                  <li>• <Link href="/wiki/drops/items/costumes" className="text-blue-400 hover:text-blue-300">Costumes</Link> - Visual equipment and outfits</li>
                  <li>• <Link href="/wiki/drops/items/wings" className="text-blue-400 hover:text-blue-300">Wings</Link> - Flying equipment and designs</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Consumables</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/potions" className="text-blue-400 hover:text-blue-300">Potions</Link> - Health, Mana, Buff potions</li>
                  <li>• <Link href="/wiki/drops/items/food" className="text-blue-400 hover:text-blue-300">Food</Link> - Snacks and meals for bonuses</li>
                  <li>• <Link href="/wiki/drops/items/scrolls" className="text-blue-400 hover:text-blue-300">Scrolls</Link> - Magic scrolls and spells</li>
                  <li>• <Link href="/wiki/drops/items/enhancement" className="text-blue-400 hover:text-blue-300">Enhancement Items</Link> - Upgrade materials</li>
                  <li>• <Link href="/wiki/drops/items/alchemists-beverage" className="text-blue-400 hover:text-blue-300">Special Beverages</Link> - Rare drinks and elixirs</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/ores" className="text-blue-400 hover:text-blue-300">Ores & Metals</Link> - Mining materials</li>
                  <li>• <Link href="/wiki/drops/items/herbs" className="text-blue-400 hover:text-blue-300">Herbs & Plants</Link> - Alchemy ingredients</li>
                  <li>• <Link href="/wiki/drops/items/gems" className="text-blue-400 hover:text-blue-300">Gems & Crystals</Link> - Precious stones</li>
                  <li>• <Link href="/wiki/drops/items/monster-parts" className="text-blue-400 hover:text-blue-300">Monster Parts</Link> - Crafting components</li>
                  <li>• <Link href="/wiki/drops/items/rare-materials" className="text-blue-400 hover:text-blue-300">Rare Materials</Link> - Special crafting items</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Items</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/quest-items" className="text-blue-400 hover:text-blue-300">Quest Items</Link> - Mission-specific items</li>
                  <li>• <Link href="/wiki/drops/items/event-items" className="text-blue-400 hover:text-blue-300">Event Items</Link> - Limited-time collectibles</li>
                  <li>• <Link href="/wiki/drops/items/cards" className="text-blue-400 hover:text-blue-300">Cards & Seals</Link> - Specialist and pet cards</li>
                  <li>• <Link href="/wiki/drops/items/boxes" className="text-blue-400 hover:text-blue-300">Mystery Boxes</Link> - Random reward containers</li>
                  <li>• <Link href="/wiki/drops/items/tokens" className="text-blue-400 hover:text-blue-300">Tokens & Currencies</Link> - Special currencies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Rarity Tiers */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-white">RARITY TIERS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Item Rarity System</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium text-gray-400">Common Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 60-80%</li>
                      <li>• Color Code: White/Gray</li>
                      <li>• Sources: Regular monsters</li>
                      <li>• Examples: Basic potions, common ore</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-green-400">Uncommon Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 25-40%</li>
                      <li>• Color Code: Green</li>
                      <li>• Sources: Elite monsters</li>
                      <li>• Examples: Enhanced gear, quality materials</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-blue-400">Rare Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 8-15%</li>
                      <li>• Color Code: Blue</li>
                      <li>• Sources: Mini-bosses, special areas</li>
                      <li>• Examples: Set equipment, rare gems</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-purple-400">Epic Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 3-7%</li>
                      <li>• Color Code: Purple</li>
                      <li>• Sources: Raid bosses, events</li>
                      <li>• Examples: Heroic weapons, ancient artifacts</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-orange-400">Legendary Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 0.5-2%</li>
                      <li>• Color Code: Orange</li>
                      <li>• Sources: World bosses, achievements</li>
                      <li>• Examples: Legendary weapons, divine items</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-red-400">Mythic Items</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Drop Rate: 0.1-0.5%</li>
                      <li>• Color Code: Red</li>
                      <li>• Sources: Ultra-rare spawns, special events</li>
                      <li>• Examples: Mythic artifacts, god-tier equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Drop Rate Mechanics */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎲</span>
              </div>
              <h3 className="text-lg font-semibold text-white">DROP RATE MECHANICS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Base Drop Rates</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Level Difference:</strong> Fighting monsters 10+ levels below reduces drop rates by 50%</li>
                  <li>• <strong>Monster Type:</strong> Elite monsters have 2x drop rates, Bosses have 5x rates</li>
                  <li>• <strong>Group Bonus:</strong> Party members increase rare drop chance by 10% per member</li>
                  <li>• <strong>Luck Stat:</strong> Each point of luck increases drop rate by 0.1%</li>
                  <li>• <strong>Drop Rate Items:</strong> Special equipment and buffs can increase rates</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Drop Rate Bonuses</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Drop Rate Potion:</strong> +25% drop rate for 30 minutes</li>
                  <li>• <strong>Blessing of Fortune:</strong> +15% rare drop rate for 1 hour</li>
                  <li>• <strong>Lucky Day Event:</strong> Server-wide +50% drop rate periods</li>
                  <li>• <strong>VIP Benefits:</strong> Premium players get +10% base drop rate</li>
                  <li>• <strong>Guild Buffs:</strong> Guild skills can provide drop rate bonuses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Search & Filter Tools */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SEARCH & FILTER TOOLS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Database Features</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Item Search:</strong> Search by name, type, or description</li>
                  <li>• <strong>Drop Source Filter:</strong> Find items by monster or location</li>
                  <li>• <strong>Rarity Filter:</strong> Show only items of specific rarity tiers</li>
                  <li>• <strong>Level Range:</strong> Filter items by character level requirements</li>
                  <li>• <strong>Sort Options:</strong> Sort by drop rate, value, or popularity</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Advanced Searches</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Stat Requirements:</strong> Find items with specific stat bonuses</li>
                  <li>• <strong>Set Items:</strong> Browse complete equipment sets</li>
                  <li>• <strong>Market Value:</strong> Sort by current market prices</li>
                  <li>• <strong>Recent Additions:</strong> View newly discovered or added items</li>
                  <li>• <strong>Player Favorites:</strong> See most bookmarked items</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Featured Items */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">FEATURED ITEMS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-orange-400 font-semibold mb-2">Excalibur (Legendary Sword)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Drop Source:</strong> King Arthur (World Boss)</li>
                  <li>• <strong>Drop Rate:</strong> 0.8% (Extremely Rare)</li>
                  <li>• <strong>Level Req:</strong> 85+</li>
                  <li>• <strong>Special:</strong> +25% damage vs undead, holy aura</li>
                  <li>• <Link href="/wiki/drops/items/excalibur" className="text-blue-400 hover:text-blue-300">View Details →</Link></li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-purple-400 font-semibold mb-2">Dragon Scale Armor (Epic Set)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Drop Source:</strong> Ancient Dragons</li>
                  <li>• <strong>Drop Rate:</strong> 3.2% per piece</li>
                  <li>• <strong>Level Req:</strong> 70+</li>
                  <li>• <strong>Set Bonus:</strong> Fire immunity, +30% defense</li>
                  <li>• <Link href="/wiki/drops/items/dragon-scale-armor" className="text-blue-400 hover:text-blue-300">View Details →</Link></li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-blue-400 font-semibold mb-2">Phoenix Feather (Rare Material)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Drop Source:</strong> Phoenix (Raid Boss)</li>
                  <li>• <strong>Drop Rate:</strong> 5.1%</li>
                  <li>• <strong>Uses:</strong> Resurrection potions, fire spells</li>
                  <li>• <strong>Value:</strong> 250,000-500,000 gold</li>
                  <li>• <Link href="/wiki/drops/items/phoenix-feather" className="text-blue-400 hover:text-blue-300">View Details →</Link></li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-green-400 font-semibold mb-2">Elven Longbow (Uncommon)</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Drop Source:</strong> Forest Rangers, Elven Guards</li>
                  <li>• <strong>Drop Rate:</strong> 12.5%</li>
                  <li>• <strong>Level Req:</strong> 35+</li>
                  <li>• <strong>Special:</strong> +15% accuracy, nature damage</li>
                  <li>• <Link href="/wiki/drops/items/elven-longbow" className="text-blue-400 hover:text-blue-300">View Details →</Link></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Community Tools */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👥</span>
              </div>
              <h3 className="text-lg font-semibold text-white">COMMUNITY FEATURES</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Drop Reports:</strong> Players can submit verified drop reports to improve database accuracy</p>
              <p><strong>Wishlist System:</strong> Create lists of desired items and track your collection progress</p>
              <p><strong>Price Tracking:</strong> Monitor market prices and value trends for items</p>
              <p><strong>Drop Notifications:</strong> Get alerts when specific items are found by other players</p>
              <p><strong>Collection Showcase:</strong> Share your rare item collections with the community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}