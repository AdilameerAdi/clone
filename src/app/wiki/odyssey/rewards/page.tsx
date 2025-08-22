import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyRewardsPage() {
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
            <li className="text-blue-400 font-medium">Rewards</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Odyssey Rewards</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏆</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Odyssey system offers progressive rewards for completing various challenges and milestones. 
              Earn valuable items, equipment, and special bonuses as you advance through different tiers.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Progressive reward tiers based on completion</li>
              <li>• Mix of equipment, consumables, and exclusive items</li>
              <li>• Seasonal and permanent reward tracks</li>
              <li>• Bonus rewards for achieving milestones</li>
            </ul>
          </div>
          
          {/* Reward Tiers */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">REWARD TIERS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Bronze Tier (Levels 1-25)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Equipment Rewards</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• D-grade weapon and armor sets</li>
                      <li>• Basic accessories and jewelry</li>
                      <li>• Starter enhancement scrolls</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Consumables</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Greater healing and mana potions</li>
                      <li>• Spirit shots and blessed shots</li>
                      <li>• Experience boost scrolls</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Silver Tier (Levels 26-50)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Equipment Rewards</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• C-grade equipment sets</li>
                      <li>• Enhanced accessories with stats</li>
                      <li>• Weapon enhancement materials</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Special Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Pet summoning items</li>
                      <li>• Teleport scrolls bundle</li>
                      <li>• Stat enhancement dyes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Gold Tier (Levels 51-75)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Premium Equipment</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• B-grade weapons and armor</li>
                      <li>• Rare accessories with special effects</li>
                      <li>• Enchanted equipment variants</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Rare Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Skill enchantment scrolls</li>
                      <li>• Rare crafting materials</li>
                      <li>• Mount and pet upgrades</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Platinum Tier (Levels 76-100)</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Elite Equipment</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• A-grade and S-grade equipment</li>
                      <li>• Exclusive armor sets</li>
                      <li>• High-level enhancement stones</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium mb-1">Legendary Items</p>
                    <ul className="text-gray-400 text-xs space-y-1">
                      <li>• Epic enhancement materials</li>
                      <li>• Unique costume pieces</li>
                      <li>• Ancient currency rewards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Milestone Bonuses */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MILESTONE BONUSES</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Complete 10 Odyssey Levels</span>
                <span className="text-green-400 font-semibold">Exclusive Title + 100k Adena</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Complete 25 Odyssey Levels</span>
                <span className="text-blue-400 font-semibold">Special Mount + Enhancement Pack</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Complete 50 Odyssey Levels</span>
                <span className="text-purple-400 font-semibold">Epic Weapon + Rare Costume</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">Complete 75 Odyssey Levels</span>
                <span className="text-orange-400 font-semibold">Legendary Equipment Set</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Complete 100 Odyssey Levels</span>
                <span className="text-red-400 font-semibold">Ultimate Reward Package</span>
              </div>
            </div>
          </div>

          {/* Seasonal Rewards */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🗓️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SEASONAL REWARDS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Spring Odyssey</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Floral-themed costumes and accessories</li>
                  <li>• Growth enhancement items</li>
                  <li>• Seasonal pet companions</li>
                  <li>• Spring festival decorations</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Summer Odyssey</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Beach and tropical themed items</li>
                  <li>• Swimming and diving equipment</li>
                  <li>• Summer event consumables</li>
                  <li>• Vacation-style mounts</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Halloween Odyssey</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Spooky costumes and masks</li>
                  <li>• Dark-themed weapons and armor</li>
                  <li>• Halloween candy and treats</li>
                  <li>• Ghostly pets and mounts</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Winter Odyssey</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Christmas and winter costumes</li>
                  <li>• Snow-themed equipment</li>
                  <li>• Holiday decorations and items</li>
                  <li>• Festive celebration consumables</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exclusive Items */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EXCLUSIVE ODYSSEY ITEMS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Odyssey Exclusive Equipment</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Odyssey Blade:</strong> Unique sword with progressive upgrades</li>
                  <li>• <strong>Explorer&apos;s Armor:</strong> Set bonus increases with Odyssey level</li>
                  <li>• <strong>Traveler&apos;s Accessories:</strong> Experience and drop rate bonuses</li>
                  <li>• <strong>Adventurer&apos;s Cloak:</strong> Provides various utility benefits</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Consumables</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Odyssey Potions:</strong> Enhanced versions of standard consumables</li>
                  <li>• <strong>Journey Scrolls:</strong> Instant completion of certain tasks</li>
                  <li>• <strong>Explorer&apos;s Rations:</strong> Long-lasting buff packages</li>
                  <li>• <strong>Adventure Tokens:</strong> Currency for exclusive shop</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Claiming Rewards */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO CLAIM REWARDS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Odyssey Interface:</strong> <kbd className="bg-gray-700 px-2 py-1 rounded">Alt + Y</kbd> to open the Odyssey window</p>
              <p><strong>Automatic Claims:</strong> Some rewards are automatically added to inventory</p>
              <p><strong>Manual Claims:</strong> Click on completed levels to claim pending rewards</p>
              <p><strong>Storage:</strong> Unclaimed rewards remain available indefinitely</p>
              <p><strong>Preview:</strong> View upcoming rewards by hovering over future levels</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}