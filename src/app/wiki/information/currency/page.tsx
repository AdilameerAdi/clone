import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CurrencyPage() {
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
              <Link href="/wiki/information" className="text-gray-400 hover:text-white">Information</Link>
            </li>
            <li>
              <ChevronRightIcon className="w-4 h-4 text-gray-400 mx-2" />
            </li>
            <li className="text-blue-400 font-medium">Currency</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Currency System Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The server features multiple currency systems to provide variety in trading, rewards, and progression. 
              Understanding each currency type helps you maximize your gameplay efficiency and resource management.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Multiple currency types for different purposes</li>
              <li>• Primary and secondary currencies with specific uses</li>
              <li>• Exchange systems between different currency types</li>
              <li>• Special event and seasonal currencies</li>
            </ul>
          </div>
          
          {/* Primary Currencies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🏦</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PRIMARY CURRENCIES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Adena - Main Currency</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary Use:</strong> General trading, NPC purchases, equipment repairs</li>
                  <li>• <strong>How to Earn:</strong> Monster kills, quest rewards, player trading</li>
                  <li>• <strong>Storage:</strong> Inventory and warehouse (up to 2.1 billion per character)</li>
                  <li>• <strong>Exchange Rate:</strong> Base currency for all calculations</li>
                  <li>• <strong>Tips:</strong> Essential for daily operations and basic purchases</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Ancient Adena - Premium Currency</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Primary Use:</strong> Rare item purchases, premium upgrades</li>
                  <li>• <strong>How to Earn:</strong> High-level raids, special events, achievements</li>
                  <li>• <strong>Storage:</strong> Account-wide currency with no upper limit</li>
                  <li>• <strong>Exchange Rate:</strong> 1 Ancient Adena = 1,000,000 Regular Adena</li>
                  <li>• <strong>Tips:</strong> Save for major purchases and rare opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Secondary Currencies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🪙</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SECONDARY CURRENCIES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Honor Points</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Source:</strong> PvP kills, siege participation</li>
                  <li>• <strong>Use:</strong> PvP equipment, special titles</li>
                  <li>• <strong>Max:</strong> 1,000,000 points per character</li>
                  <li>• <strong>Decay:</strong> 10% reduction per week if inactive</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Fame Points</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Source:</strong> Raid boss kills, achievements</li>
                  <li>• <strong>Use:</strong> Rare consumables, unique items</li>
                  <li>• <strong>Max:</strong> 500,000 points per character</li>
                  <li>• <strong>Special:</strong> Required for some high-end content</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Clan Reputation</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Source:</strong> Clan activities, territory control</li>
                  <li>• <strong>Use:</strong> Clan skills, fortress upgrades</li>
                  <li>• <strong>Shared:</strong> Pool shared among all clan members</li>
                  <li>• <strong>Leadership:</strong> Only leaders can spend</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Loyalty Points</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Source:</strong> Daily login, server participation</li>
                  <li>• <strong>Use:</strong> Loyalty shop exclusive items</li>
                  <li>• <strong>Accumulation:</strong> Builds over time with activity</li>
                  <li>• <strong>Tiers:</strong> Unlock better rewards with more points</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Event Currencies */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🎪</span>
              </div>
              <h3 className="text-lg font-semibold text-white">EVENT CURRENCIES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Seasonal Tokens</h4>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Spring Tokens</p>
                    <p className="text-xs">Easter & spring events</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Summer Coins</p>
                    <p className="text-xs">Beach & summer festivals</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Halloween Candy</p>
                    <p className="text-xs">Spooky season rewards</p>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Christmas Stars</p>
                    <p className="text-xs">Winter holiday events</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Special Event Currencies</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Tournament Medals:</strong> PvP competition rewards</li>
                  <li>• <strong>Raid Tokens:</strong> Special raid event participation</li>
                  <li>• <strong>Anniversary Coins:</strong> Server anniversary celebrations</li>
                  <li>• <strong>Community Points:</strong> Forum and social participation</li>
                  <li>• <strong>Beta Tokens:</strong> Testing participation rewards</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exchange Systems */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CURRENCY EXCHANGE</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Exchange Rates</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center border-b border-gray-600 pb-1">
                    <span className="text-gray-300">1 Ancient Adena</span>
                    <span className="text-green-400">= 1,000,000 Adena</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-1">
                    <span className="text-gray-300">1,000 Honor Points</span>
                    <span className="text-blue-400">= 100,000 Adena</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-gray-600 pb-1">
                    <span className="text-gray-300">500 Fame Points</span>
                    <span className="text-purple-400">= 50,000 Adena</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">100 Loyalty Points</span>
                    <span className="text-yellow-400">= 25,000 Adena</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Exchange Limitations</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Daily exchange limits prevent currency flooding</li>
                  <li>• Some currencies cannot be directly exchanged</li>
                  <li>• Exchange fees may apply (typically 5-10%)</li>
                  <li>• Event currencies usually cannot be exchanged</li>
                  <li>• VIP members may have higher exchange limits</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Earning Methods */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CURRENCY EARNING METHODS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Daily Activities</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Login rewards (Loyalty Points)</li>
                  <li>• Daily quest completions (Various currencies)</li>
                  <li>• PvP participation (Honor Points)</li>
                  <li>• Raid boss participation (Fame Points)</li>
                  <li>• Fishing and crafting (Adena)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Weekly Activities</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Weekly raid schedules (Ancient Adena)</li>
                  <li>• Siege participation (Clan Reputation)</li>
                  <li>• Tournament events (Tournament Medals)</li>
                  <li>• Community challenges (Community Points)</li>
                  <li>• Special event participation (Event tokens)</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Long-term Goals</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Achievement milestones (Various rewards)</li>
                  <li>• Character progression bonuses</li>
                  <li>• Territory control benefits</li>
                  <li>• Guild contribution rewards</li>
                  <li>• Veteran player bonuses</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Trading & Economy</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Player-to-player trading (Adena)</li>
                  <li>• Auction house sales (Adena)</li>
                  <li>• Merchant activities (Various currencies)</li>
                  <li>• Resource gathering and selling</li>
                  <li>• Service providing (buffs, enchants)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Management Tips */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💡</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CURRENCY MANAGEMENT TIPS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Smart Spending</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Prioritize permanent upgrades over temporary benefits</li>
                  <li>• Save rare currencies for truly unique opportunities</li>
                  <li>• Compare prices across different vendors before buying</li>
                  <li>• Consider bulk discounts for consumable purchases</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Currency Tracking</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Use <code className="bg-gray-700 px-1 rounded">.currency</code> command to check all balances</li>
                  <li>• Monitor exchange rates for optimal trading times</li>
                  <li>• Keep track of daily/weekly limits and reset times</li>
                  <li>• Plan major purchases around currency earning cycles</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}