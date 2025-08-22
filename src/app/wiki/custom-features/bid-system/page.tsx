import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BidSystemPage() {
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
            <li className="text-blue-400 font-medium">Bid System</li>
          </ol>
        </nav>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Bid System</h1>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Bid System allows players to auction items to other players in a competitive bidding environment. 
              Sell your valuable items for the best price or bid on items you need.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Auction your items to the highest bidder</li>
              <li>• Set minimum bid amounts and auction duration</li>
              <li>• Bid on items from other players</li>
              <li>• Automatic transaction completion and item delivery</li>
            </ul>
          </div>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Sell Items</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 1: Access Auction House</h4>
                <p className="text-gray-300 text-sm">Visit the Auction Master NPC in the main town or use the command <code className="bg-gray-700 px-2 py-1 rounded">.auction</code></p>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 2: Create Auction</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Select the item from your inventory</li>
                  <li>• Set minimum bid amount</li>
                  <li>• Choose auction duration (1-24 hours)</li>
                  <li>• Optionally set a "Buy Now" price</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step 3: Monitor Your Auction</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Receive notifications when players bid</li>
                  <li>• View current highest bid</li>
                  <li>• Cancel auction if no bids placed</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Bid on Items</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Browsing Auctions</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Browse available auctions by category</li>
                  <li>• Search for specific items or keywords</li>
                  <li>• Filter by price range and time remaining</li>
                  <li>• View item details and current bids</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Placing Bids</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Enter your bid amount (must exceed current highest bid)</li>
                  <li>• Confirm bid placement and escrow gold</li>
                  <li>• Get outbid notifications if someone bids higher</li>
                  <li>• Use "Buy Now" option for instant purchase</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Winning Auctions</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Receive notification when auction ends</li>
                  <li>• Items automatically delivered to inventory</li>
                  <li>• Gold refunded if outbid</li>
                  <li>• Transaction history available for review</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Fees and Rules</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Auction Fees</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Listing Fee: 1% of starting bid</li>
                  <li>• Success Fee: 5% of final sale price</li>
                  <li>• No fees if auction fails to sell</li>
                  <li>• Premium members get 50% fee reduction</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Important Rules</h4>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Maximum 5 active auctions per player</li>
                  <li>• Cannot bid on your own items</li>
                  <li>• All transactions are final</li>
                  <li>• Prohibited items cannot be auctioned</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Access Information</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong>NPC Location:</strong> Auction Master in Central Plaza</p>
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.auction</code> or <code className="bg-gray-800 px-2 py-1 rounded">.bid</code></p>
              <p><strong>Requirements:</strong> Minimum level 20 and 10,000 gold in bank</p>
              <p><strong>Availability:</strong> 24/7 system with automated processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}