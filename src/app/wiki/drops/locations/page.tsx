import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function DropLocationsPage() {
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
            <li className="text-blue-400 font-medium">Locations</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Drop Locations Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              Find the best hunting locations for specific items, materials, and equipment. 
              This comprehensive guide covers drop locations, rates, and optimal farming strategies for all areas.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Detailed location breakdowns by level range</li>
              <li>• Specific monster drops and rare items</li>
              <li>• Drop rate information and farming efficiency</li>
              <li>• Access requirements and safety considerations</li>
            </ul>
          </div>
          
          {/* Beginner Areas */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌱</span>
              </div>
              <h3 className="text-lg font-semibold text-white">BEGINNER AREAS (Levels 1-20)</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Talking Island</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Wolves:</strong> Wolf pelts, meat, basic materials</li>
                  <li>• <strong>Orcs:</strong> Orcish weapons, leather armor pieces</li>
                  <li>• <strong>Spiders:</strong> Spider silk, venom sacs</li>
                  <li>• <strong>Goblins:</strong> Coins, basic equipment</li>
                  <li>• <strong>Drop Rate:</strong> 20-40% for common items</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Elven Village Area</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Bears:</strong> Bear meat, fur, claws</li>
                  <li>• <strong>Spartoi:</strong> Bone fragments, ancient coins</li>
                  <li>• <strong>Skeleton Warriors:</strong> Rusty weapons, bone armor</li>
                  <li>• <strong>Dryads:</strong> Magical leaves, nature essences</li>
                  <li>• <strong>Drop Rate:</strong> 15-35% for materials</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Dark Elf Village</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Fellmere:</strong> Dark crystals, shadow essences</li>
                  <li>• <strong>Prowlers:</strong> Stealth gear, dark leather</li>
                  <li>• <strong>Spine Crawlers:</strong> Poison glands, chitin</li>
                  <li>• <strong>Misery Skeletons:</strong> Cursed bones, dark gems</li>
                  <li>• <strong>Drop Rate:</strong> 10-30% for rare materials</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Dwarven Village</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Gremlins:</strong> Mechanical parts, gears</li>
                  <li>• <strong>Cave Bats:</strong> Bat wings, echo stones</li>
                  <li>• <strong>Mine Workers:</strong> Mining tools, ore samples</li>
                  <li>• <strong>Steam Golems:</strong> Steam cores, metal plates</li>
                  <li>• <strong>Drop Rate:</strong> 25-45% for crafting materials</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Mid-Level Areas */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MID-LEVEL AREAS (Levels 20-40)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Wasteland</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Notable Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Leto Lizardmen → Lizard scales, warrior weapons</li>
                      <li>• Keltirs → Beast hides, predator fangs</li>
                      <li>• Poison Spiders → Venom sacs, web silk</li>
                      <li>• Treasure chests → D-grade equipment</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Lizardman Blade (1% drop rate)</li>
                      <li>• Keltir Tooth Necklace (0.5%)</li>
                      <li>• Recipe: D-grade equipment (2%)</li>
                      <li>• Greater healing potions (5%)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Forgotten Temple</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Temple Monsters</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Temple Guards → Ancient armor pieces</li>
                      <li>• Believers → Holy symbols, prayer scrolls</li>
                      <li>• Cursed Spirits → Spirit essence, cursed gems</li>
                      <li>• Stone Guardians → Guardian stones, earth crystals</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Valuable Loot</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Blessed weapon parts (3%)</li>
                      <li>• Temple key fragments (1%)</li>
                      <li>• Ancient scrolls (2%)</li>
                      <li>• Divine protection charms (1.5%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* High-Level Areas */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HIGH-LEVEL AREAS (Levels 40-76)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Cruma Tower</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Floor 1-2 (Levels 30-45)</p>
                    <ul className="text-gray-400 text-xs space-y-1 ml-4">
                      <li>• Cruma Acolytes → Spell books, mana crystals</li>
                      <li>• Bone Scouts → Bone equipment, undead essence</li>
                      <li>• Ruin Bats → Bat wings, darkness gems</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Floor 3-4 (Levels 45-60)</p>
                    <ul className="text-gray-400 text-xs space-y-1 ml-4">
                      <li>• Cruma Marshlands → Marsh stones, water crystals</li>
                      <li>• Bone Sweepers → Advanced bone gear, souls</li>
                      <li>• Tower Golems → Golem hearts, earth stones</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Dragon Valley</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Dragon Creatures</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Drake → Dragon scales, fire crystals</li>
                      <li>• Dragon Scout → Scout reports, dragon gems</li>
                      <li>• Wyvern → Wyvern wings, wind stones</li>
                      <li>• Dragon Warrior → Warrior equipment, dragon blood</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Dragon Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Dragon Scale Armor (0.1%)</li>
                      <li>• Dragon Slayer weapons (0.05%)</li>
                      <li>• Ancient dragon relics (0.2%)</li>
                      <li>• Dragon soul crystals (0.3%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Endgame Areas */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">👑</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ENDGAME AREAS (Levels 76+)</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Tower of Insolence</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Floor Monsters</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Punishers → Divine punishment weapons</li>
                      <li>• Tormentors → Torture devices, dark gems</li>
                      <li>• Executioners → Execution axes, soul stones</li>
                      <li>• Inquisitors → Holy equipment, light crystals</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Elite Drops</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Insolence weapons (0.01%)</li>
                      <li>• Divine armor pieces (0.02%)</li>
                      <li>• Sacred jewelry (0.03%)</li>
                      <li>• Tower artifacts (0.05%)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Primeval Isle</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Prehistoric Creatures</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Tyrannosaurus → Massive bones, prehistoric gems</li>
                      <li>• Velociraptor → Speed enhancing items</li>
                      <li>• Pterodactyl → Wing membranes, sky crystals</li>
                      <li>• Triceratops → Horn materials, earth power</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Ancient Artifacts</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Primeval weapons (0.005%)</li>
                      <li>• Ancient tribal gear (0.01%)</li>
                      <li>• Fossil collections (0.1%)</li>
                      <li>• Time-worn relics (0.2%)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Locations */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIAL DROP LOCATIONS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Unique Dungeons</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Catacombs:</strong> Cursed equipment, undead artifacts</li>
                  <li>• <strong>Necropolis:</strong> Death-touched items, soul gems</li>
                  <li>• <strong>Forge of Gods:</strong> Divine crafting materials</li>
                  <li>• <strong>Dimensional Rift:</strong> Otherworldly equipment</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Seasonal Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Winter Wonderland:</strong> Ice crystals, frost gear</li>
                  <li>• <strong>Autumn Forest:</strong> Seasonal materials, harvest items</li>
                  <li>• <strong>Summer Beach:</strong> Tropical items, vacation gear</li>
                  <li>• <strong>Spring Gardens:</strong> Flowering materials, growth items</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Event Locations</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Halloween Manor:</strong> Spooky costumes, candy</li>
                  <li>• <strong>Christmas Village:</strong> Holiday items, festive gear</li>
                  <li>• <strong>Valentine Gardens:</strong> Romance items, love potions</li>
                  <li>• <strong>Anniversary Hall:</strong> Commemorative equipment</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Hidden Areas</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Secret Caves:</strong> Rare gems, hidden treasures</li>
                  <li>• <strong>Floating Islands:</strong> Sky crystals, wind items</li>
                  <li>• <strong>Underground Lakes:</strong> Water gems, aquatic gear</li>
                  <li>• <strong>Ancient Ruins:</strong> Archaeological finds, relics</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Drop Rate Information */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">DROP RATE MODIFIERS</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Base Drop Rates</span>
                <span className="text-white font-semibold">Monster level dependent</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">VIP Membership Bonus</span>
                <span className="text-green-400 font-semibold">+25% drop rate</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Drop Rate Events</span>
                <span className="text-blue-400 font-semibold">+50% to +200%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Drop Rate Scrolls/Potions</span>
                <span className="text-purple-400 font-semibold">+30% to +100%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Party Bonus (2+ members)</span>
                <span className="text-yellow-400 font-semibold">+15% drop rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}