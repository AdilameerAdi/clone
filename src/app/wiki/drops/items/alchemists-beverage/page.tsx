import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function AlchemistsBeveragePage() {
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
            <li>
              <Link href="/wiki/drops/items" className="text-gray-400 hover:text-white">Items</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Alchemist's Beverage</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Alchemist's Beverage</h1>
          
          {/* Item Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🧪</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ITEM DETAILS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🍺</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-purple-400">Alchemist's Beverage</h4>
                    <p className="text-gray-400">Epic Consumable</p>
                  </div>
                </div>
                <p className="text-gray-300">
                  A mysterious potion crafted by master alchemists. This potent beverage provides powerful 
                  temporary enhancements to combat abilities and magical resistance.
                </p>
              </div>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h5 className="text-white font-semibold mb-2">Basic Information</h5>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• <strong>Rarity:</strong> <span className="text-purple-400">Epic</span></li>
                    <li>• <strong>Type:</strong> Consumable Potion</li>
                    <li>• <strong>Level Requirement:</strong> 45+</li>
                    <li>• <strong>Stack Size:</strong> 99</li>
                    <li>• <strong>Tradeable:</strong> Yes</li>
                    <li>• <strong>Market Value:</strong> 25,000 - 40,000 gold</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Effects */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">✨</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EFFECTS & BENEFITS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Primary Effects (30 minutes)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium text-green-400">Combat Enhancements</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• +15% Attack Power</li>
                      <li>• +20% Critical Hit Rate</li>
                      <li>• +10% Attack Speed</li>
                      <li>• +25% Skill Damage</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-blue-400">Defensive Bonuses</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• +30% Magic Resistance</li>
                      <li>• +15% Physical Defense</li>
                      <li>• +500 HP Regeneration per minute</li>
                      <li>• +300 MP Regeneration per minute</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-yellow-400">Special Abilities</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Immunity to Poison effects</li>
                      <li>• Immunity to Sleep effects</li>
                      <li>• +50% Experience gain</li>
                      <li>• +25% Drop rate boost</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-purple-400">Alchemical Effects</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• See invisible enemies</li>
                      <li>• Enhanced potion effects (+25%)</li>
                      <li>• Reduced skill cooldowns (-15%)</li>
                      <li>• Magical aura (cosmetic glow)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Usage Notes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Cannot be used in conjunction with other magical beverages</li>
                  <li>• Effects persist through death (rare feature for consumables)</li>
                  <li>• Drinking multiple beverages does not stack effects</li>
                  <li>• Best consumed before entering dangerous areas or raids</li>
                  <li>• Cooldown period: 5 minutes between uses</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Drop Sources */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">DROP SOURCES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Monster Drops</h4>
                <div className="space-y-3">
                  <div className="border-l-4 border-red-400 pl-4">
                    <h5 className="text-red-400 font-medium">Master Alchemist (Boss)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Location:</strong> Alchemy Laboratory (Act 2)</li>
                      <li>• <strong>Drop Rate:</strong> 8.5% (Guaranteed with quest)</li>
                      <li>• <strong>Level:</strong> 52</li>
                      <li>• <strong>Respawn:</strong> 3 hours</li>
                      <li>• <strong>Notes:</strong> Also drops rare alchemy recipes</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-purple-400 pl-4">
                    <h5 className="text-purple-400 font-medium">Corrupted Sage (Elite)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Location:</strong> Mystic Tower, Dark Academy</li>
                      <li>• <strong>Drop Rate:</strong> 4.2%</li>
                      <li>• <strong>Level:</strong> 48-55</li>
                      <li>• <strong>Respawn:</strong> 45 minutes</li>
                      <li>• <strong>Notes:</strong> Higher drop rate during night time</li>
                    </ul>
                  </div>
                  <div className="border-l-4 border-blue-400 pl-4">
                    <h5 className="text-blue-400 font-medium">Arcane Golem (Rare)</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• <strong>Location:</strong> Magic Research Facility</li>
                      <li>• <strong>Drop Rate:</strong> 6.8%</li>
                      <li>• <strong>Level:</strong> 50</li>
                      <li>• <strong>Respawn:</strong> 2 hours</li>
                      <li>• <strong>Notes:</strong> Immune to physical damage</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Alternative Sources</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Alchemy Crafting:</strong> Crafted by master alchemists (Level 8+ Alchemy)</li>
                  <li>• <strong>Quest Rewards:</strong> "The Master's Secret" questline final reward</li>
                  <li>• <strong>Event Prizes:</strong> Occasionally available during Alchemy Festival</li>
                  <li>• <strong>Mystery Boxes:</strong> 0.8% chance from Magical Mystery Boxes</li>
                  <li>• <strong>Guild Rewards:</strong> High-level guild contribution rewards</li>
                  <li>• <strong>NPC Exchange:</strong> Trade 50 Lesser Potions + 10,000 gold to Master Brewmaster</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Crafting Recipe */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔨</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CRAFTING RECIPE</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Required Materials</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-blue-400 font-medium mb-2">Primary Ingredients</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• <span className="text-green-400">Mystic Herb</span> × 5</li>
                      <li>• <span className="text-blue-400">Purified Water</span> × 3</li>
                      <li>• <span className="text-purple-400">Arcane Crystal</span> × 2</li>
                      <li>• <span className="text-yellow-400">Golden Honey</span> × 1</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="text-red-400 font-medium mb-2">Rare Components</h5>
                    <ul className="text-gray-300 space-y-1 text-sm">
                      <li>• <span className="text-orange-400">Phoenix Tear</span> × 1</li>
                      <li>• <span className="text-purple-400">Void Essence</span> × 1</li>
                      <li>• <span className="text-cyan-400">Moonstone Dust</span> × 2</li>
                      <li>• <span className="text-pink-400">Dragon's Breath</span> × 1</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Crafting Requirements</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Alchemy Skill:</strong> Level 80+ required</li>
                  <li>• <strong>Equipment:</strong> Master Alchemist's Cauldron</li>
                  <li>• <strong>Success Rate:</strong> 65% (85% with Master's Tools)</li>
                  <li>• <strong>Crafting Time:</strong> 45 minutes real-time</li>
                  <li>• <strong>Location:</strong> Alchemy Laboratory or Guild Alchemy Room</li>
                  <li>• <strong>Special:</strong> Must be crafted during full moon for optimal effects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Usage Strategies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚔️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">USAGE STRATEGIES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Optimal Use Cases</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Raid Bosses:</strong> Drink before entering raid instances for maximum effectiveness</li>
                  <li>• <strong>PvP Combat:</strong> The magic resistance and combat bonuses provide significant advantages</li>
                  <li>• <strong>Difficult Dungeons:</strong> Essential for tackling high-level solo content</li>
                  <li>• <strong>Experience Farming:</strong> +50% XP bonus makes it valuable for leveling sessions</li>
                  <li>• <strong>Rare Hunting:</strong> +25% drop rate boost increases chances of rare item drops</li>
                  <li>• <strong>Guild Wars:</strong> Coordinate with guild members for simultaneous consumption</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combination Strategies</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>With Blessing:</strong> Stack with priest blessings for enhanced magical protection</li>
                  <li>• <strong>Pre-Combat Buffs:</strong> Use before applying other temporary buffs</li>
                  <li>• <strong>Equipment Synergy:</strong> Pairs well with magic-focused equipment sets</li>
                  <li>• <strong>Team Coordination:</strong> Most effective when entire party uses simultaneously</li>
                  <li>• <strong>Timing:</strong> Best consumed 5 minutes before major encounters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Market Information */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MARKET INFORMATION</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Price Trends</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium text-green-400">Current Market Prices</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• <strong>Buy Orders:</strong> 22,000 - 28,000 gold</li>
                      <li>• <strong>Sell Orders:</strong> 30,000 - 42,000 gold</li>
                      <li>• <strong>Average Sale:</strong> 35,000 gold</li>
                      <li>• <strong>Peak Demand:</strong> Weekend raid times</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium text-yellow-400">Investment Notes</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• High demand during raid events</li>
                      <li>• Price spikes before major PvP tournaments</li>
                      <li>• Cheaper during Alchemy Festival events</li>
                      <li>• Always profitable to craft with rare materials</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Trading Tips</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Best Selling Times:</strong> Friday-Sunday evenings (raid preparation)</li>
                  <li>• <strong>Bulk Discounts:</strong> Often available when buying 10+ units</li>
                  <li>• <strong>Guild Deals:</strong> Many guilds offer members discounted prices</li>
                  <li>• <strong>Seasonal Variations:</strong> Higher prices during competitive seasons</li>
                  <li>• <strong>Quality Check:</strong> Verify authenticity - counterfeits exist with weaker effects</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Items */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔗</span>
              </div>
              <h3 className="text-lg font-semibold text-white">RELATED ITEMS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Similar Beverages</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/warriors-brew" className="text-blue-400 hover:text-blue-300">Warrior's Brew</Link> (Physical combat focus)</li>
                  <li>• <Link href="/wiki/drops/items/mages-elixir" className="text-blue-400 hover:text-blue-300">Mage's Elixir</Link> (Magical damage boost)</li>
                  <li>• <Link href="/wiki/drops/items/assassins-poison" className="text-blue-400 hover:text-blue-300">Assassin's Tonic</Link> (Critical hit focus)</li>
                  <li>• <Link href="/wiki/drops/items/guardians-draught" className="text-blue-400 hover:text-blue-300">Guardian's Draught</Link> (Defensive bonuses)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Required Materials</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <Link href="/wiki/drops/items/mystic-herb" className="text-blue-400 hover:text-blue-300">Mystic Herb</Link> (Primary ingredient)</li>
                  <li>• <Link href="/wiki/drops/items/phoenix-tear" className="text-blue-400 hover:text-blue-300">Phoenix Tear</Link> (Rare component)</li>
                  <li>• <Link href="/wiki/drops/items/void-essence" className="text-blue-400 hover:text-blue-300">Void Essence</Link> (Rare component)</li>
                  <li>• <Link href="/wiki/drops/items/arcane-crystal" className="text-blue-400 hover:text-blue-300">Arcane Crystal</Link> (Magical catalyst)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}