import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function NPCShopsPage() {
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
              <Link href="/wiki/qol" className="text-gray-400 hover:text-white">Quality of Life</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">NPC Shops</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Enhanced NPC Shop System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏪</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Enhanced NPC Shop System provides improved shopping experience with expanded inventories, 
              better search functionality, and convenient features for bulk purchasing and item management.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Expanded inventories with rare and exclusive items</li>
              <li>• Advanced search and filtering options</li>
              <li>• Bulk purchasing and selling capabilities</li>
              <li>• Personal shopping lists and favorites</li>
            </ul>
          </div>
          
          {/* Shop Categories */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🛍️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SHOP CATEGORIES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Equipment Shops</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Weapons & Armor (all grades)</li>
                  <li>• Accessories and Jewelry</li>
                  <li>• Upgraded equipment variants</li>
                  <li>• Rare and epic equipment</li>
                  <li>• Custom enhancement materials</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Consumable Shops</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Potions and Recovery Items</li>
                  <li>• Spirit Shots and Blessed Shots</li>
                  <li>• Scrolls and Teleport Items</li>
                  <li>• Pet Food and Summon Items</li>
                  <li>• Event and Special Consumables</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Material Shops</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Crafting Materials and Components</li>
                  <li>• Gemstones and Crystals</li>
                  <li>• Enhancement and Upgrade Materials</li>
                  <li>• Rare Resource Collections</li>
                  <li>• Recipe Books and Blueprints</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Specialty Shops</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Fishing Equipment and Bait</li>
                  <li>• Manor and Territory Items</li>
                  <li>• Clan and Alliance Supplies</li>
                  <li>• PvP and Siege Equipment</li>
                  <li>• Collector Items and Trophies</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Enhanced Features */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ENHANCED FEATURES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Smart Search System</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Search by item name, type, or grade</li>
                  <li>• Filter by price range, level requirement</li>
                  <li>• Sort by popularity, price, or rarity</li>
                  <li>• Quick filters for equipment class and type</li>
                  <li>• Recent purchases and browsing history</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Bulk Operations</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Purchase multiple items in single transaction</li>
                  <li>• Bulk selling with automatic pricing</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Quantity selection with price calculation</li>
                  <li>• Wishlist and planned purchase management</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Personal Features</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Favorite items and quick access lists</li>
                  <li>• Purchase history and spending analytics</li>
                  <li>• Price alerts for watched items</li>
                  <li>• Recommendation system based on preferences</li>
                  <li>• Custom shopping lists and collections</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Special NPC Shops */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🌟</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SPECIAL NPC SHOPS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Premium Shop</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Exclusive high-end equipment</li>
                  <li>• Limited edition items</li>
                  <li>• VIP member exclusive access</li>
                  <li>• Premium enhancement materials</li>
                  <li>• Collector series items</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Event Shop</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Seasonal and holiday items</li>
                  <li>• Event tokens and currencies</li>
                  <li>• Limited-time offers and deals</li>
                  <li>• Commemorative items</li>
                  <li>• Special event equipment</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Loyalty Shop</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Loyalty point exchange items</li>
                  <li>• Member tier exclusive items</li>
                  <li>• Long-term player rewards</li>
                  <li>• Achievement-based unlocks</li>
                  <li>• Service veteran benefits</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Reputation Shop</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Faction-specific equipment</li>
                  <li>• Reputation rank requirements</li>
                  <li>• Alliance and clan items</li>
                  <li>• PvP achievement rewards</li>
                  <li>• Honor point exchanges</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Pricing & Discounts */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PRICING & DISCOUNTS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Membership Benefits</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Bronze Members</span>
                    <span className="text-orange-400">5% discount on all items</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Silver Members</span>
                    <span className="text-gray-400">10% discount + early access</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Gold Members</span>
                    <span className="text-yellow-400">15% discount + exclusive items</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">VIP Members</span>
                    <span className="text-purple-400">20% discount + premium access</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Offers</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Daily deals with rotating discounts</li>
                  <li>• Bulk purchase discounts (5+ items)</li>
                  <li>• First-time buyer welcome bonuses</li>
                  <li>• Loyalty point cashback rewards</li>
                  <li>• Referral program benefits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Shop Locations */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SHOP LOCATIONS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Major Town Centers</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Giran Marketplace</p>
                    <p className="text-xs">Central plaza with all shop types</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Aden Commercial District</p>
                    <p className="text-xs">Premium and luxury item focus</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Heine Harbor Market</p>
                    <p className="text-xs">Fishing and maritime supplies</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Goddard Trading Post</p>
                    <p className="text-xs">Specialty and rare items</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Quick Access</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Command:</strong> <code className="bg-gray-700 px-2 py-1 rounded">.shop</code> to open universal shop browser</li>
                  <li>• <strong>Hotkey:</strong> <kbd className="bg-gray-700 px-2 py-1 rounded">Alt + S</kbd> for quick shop access</li>
                  <li>• <strong>Mobile Shops:</strong> Traveling merchants in remote areas</li>
                  <li>• <strong>Guild Halls:</strong> Private shops for guild members</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}