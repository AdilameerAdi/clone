import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PetFilteringPage() {
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
            <li className="text-blue-400 font-medium">Pet Filtering</li>
          </ol>
        </nav>
        
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Pet Filtering System</h1>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Pet Filtering System helps manage pet visibility and interactions in crowded areas. 
              Reduce visual clutter and improve performance by customizing which pets are displayed.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Filter pets by type, level, or rarity</li>
              <li>• Hide specific players&apos; pets selectively</li>
              <li>• Improve client performance in crowded areas</li>
              <li>• Maintain visibility of important or rare pets</li>
            </ul>
          </div>
          
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Filter Options</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Pet Type Filters</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Combat Pets - Fighting companions</li>
                  <li>• Service Pets - Utility and carrying pets</li>
                  <li>• Mount Pets - Rideable companions</li>
                  <li>• Cosmetic Pets - Decorative followers</li>
                  <li>• Event Pets - Special occasion companions</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Level-Based Filters</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Low Level Pets (1-40) - Basic companions</li>
                  <li>• Mid Level Pets (41-75) - Advanced pets</li>
                  <li>• High Level Pets (76+) - Elite companions</li>
                  <li>• Baby Pets - Newly hatched or young pets</li>
                  <li>• Evolved Pets - Fully developed forms</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Rarity Filters</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Common Pets - Standard companions</li>
                  <li>• Rare Pets - Uncommon breeds</li>
                  <li>• Epic Pets - Special event pets</li>
                  <li>• Legendary Pets - Ultra-rare companions</li>
                  <li>• Mythic Pets - One-of-a-kind pets</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Behavior Filters</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Aggressive Pets - Combat-ready pets</li>
                  <li>• Passive Pets - Non-fighting companions</li>
                  <li>• Following Pets - Pets actively following owners</li>
                  <li>• Idle Pets - Stationary or resting pets</li>
                  <li>• Summoned Pets - Temporarily called pets</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Filter Settings</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Display Modes</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <strong>Show All:</strong> Display all pets without filtering</li>
                  <li>• <strong>Hide All:</strong> Hide all pets except your own</li>
                  <li>• <strong>Selective:</strong> Use custom filter combinations</li>
                  <li>• <strong>Friends Only:</strong> Show pets from friends and guild members</li>
                  <li>• <strong>Rare Only:</strong> Display only rare and above pets</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Advanced Options</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Distance-based filtering (show pets within X meters)</li>
                  <li>• Player blacklist for specific pet owners</li>
                  <li>• Temporary filters for crowded events</li>
                  <li>• Performance-based auto-filtering</li>
                  <li>• Time-based filters (day/night preferences)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Performance Benefits</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Client Optimization</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Reduced polygon count and texture loading</li>
                  <li>• Lower memory usage in crowded areas</li>
                  <li>• Improved frame rate during mass events</li>
                  <li>• Decreased network bandwidth usage</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Visual Clarity</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Less screen clutter and visual noise</li>
                  <li>• Easier target selection in combat</li>
                  <li>• Better visibility of important game elements</li>
                  <li>• Improved focus on relevant pets and players</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Smart Filtering</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Auto-Adaptive Filters</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Automatically hide pets when FPS drops below threshold</li>
                  <li>• Dynamic filtering based on player density</li>
                  <li>• Context-aware filtering (hide combat pets during social events)</li>
                  <li>• Bandwidth-based filtering for slower connections</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Priority System</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Always show guild member pets</li>
                  <li>• Priority display for rare and legendary pets</li>
                  <li>• Keep friendly combat pets visible during raids</li>
                  <li>• Maintain visibility of event-specific pets</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Configure</h2>
            <div className="space-y-3 text-gray-300">
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.petfilter</code> or <code className="bg-gray-800 px-2 py-1 rounded">.hidepets</code></p>
              <p><strong>Quick Toggle:</strong> <kbd className="bg-gray-700 px-2 py-1 rounded">Ctrl + P</kbd> to cycle through common filter modes</p>
              <p><strong>Settings Menu:</strong> System Options → Display → Pet Filtering</p>
              <p><strong>Profiles:</strong> Save and load different filter configurations for various scenarios</p>
              <p><strong>Reset:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.petfilter reset</code> to restore default settings</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}