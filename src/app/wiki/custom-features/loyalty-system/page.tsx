import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function LoyaltySystemPage() {

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
                <Link href="/wiki/custom-features" className="text-gray-400 hover:text-white">Custom Features</Link>
              </li>
              <li>
                <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
              </li>
              <li className="text-blue-400 font-medium">Loyalty System</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Loyalty System</h1>
            
            {/* Overview */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🎖️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The Loyalty System rewards dedicated players for their continued engagement with the server. 
                Earn loyalty points through various activities and exchange them for exclusive rewards.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Automatically gain loyalty points for daily logins</li>
                <li>• Bonus points for completing daily quests and events</li>
                <li>• Exchange points for rare items, costumes, and enhancements</li>
                <li>• Special VIP tiers with additional benefits</li>
              </ul>
            </div>
            
            {/* How to Earn Points */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">💰</span>
                </div>
                <h3 className="text-lg font-semibold text-white">HOW TO EARN LOYALTY POINTS</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <span>Daily Login</span>
                  <span className="text-green-400 font-semibold">5 Points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <span>Completing Daily Quests</span>
                  <span className="text-green-400 font-semibold">10 Points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <span>Participating in Events</span>
                  <span className="text-green-400 font-semibold">15-50 Points</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                  <span>Weekly Login Streak (7 days)</span>
                  <span className="text-green-400 font-semibold">25 Points</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Monthly Milestone Rewards</span>
                  <span className="text-green-400 font-semibold">100 Points</span>
                </div>
              </div>
            </div>

            {/* Loyalty Tiers */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">👑</span>
                </div>
                <h3 className="text-lg font-semibold text-white">LOYALTY TIERS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Bronze Member</h4>
                    <span className="text-orange-400 font-bold">0-999 Points</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Access to loyalty shop</li>
                    <li>• 5% discount on NPC shops</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Silver Member</h4>
                    <span className="text-gray-400 font-bold">1,000-4,999 Points</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• All Bronze benefits</li>
                    <li>• 10% discount on NPC shops</li>
                    <li>• Access to exclusive costumes</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="text-lg font-semibold text-white">Gold Member</h4>
                    <span className="text-yellow-400 font-bold">5,000+ Points</span>
                  </div>
                  <ul className="text-gray-300 space-y-1">
                    <li>• All Silver benefits</li>
                    <li>• 15% discount on NPC shops</li>
                    <li>• VIP chat color and title</li>
                    <li>• Exclusive mount and pet options</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Loyalty Shop */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🏪</span>
                </div>
                <h3 className="text-lg font-semibold text-white">LOYALTY SHOP REWARDS</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Equipment & Enhancement</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Upgrade Scrolls (50-100 pts)</li>
                    <li>• Rare Equipment Sets (500-1000 pts)</li>
                    <li>• Enhancement Materials (25-75 pts)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Cosmetic Items</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Exclusive Costumes (200-500 pts)</li>
                    <li>• Custom Wings (300-800 pts)</li>
                    <li>• Special Titles (100-250 pts)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Consumables</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Experience Potions (15-30 pts)</li>
                    <li>• Buff Scrolls (10-20 pts)</li>
                    <li>• Teleport Stones (5-15 pts)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Special Items</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Premium Mount Tickets (400-600 pts)</li>
                    <li>• Inventory Expansion (150 pts)</li>
                    <li>• Warehouse Slots (100 pts)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}