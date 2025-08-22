import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function MassCraftingPage() {

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
              <li className="text-blue-400 font-medium">Mass Crafting</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Mass Crafting System</h1>
            
            {/* Overview */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">🔨</span>
                </div>
                <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
              </div>
              <p className="text-gray-300 mb-4">
                The Mass Crafting System allows players to craft multiple items simultaneously, significantly reducing the time spent on repetitive crafting tasks. This quality of life feature streamlines production workflows for both casual and dedicated crafters.
              </p>
              <ul className="space-y-2 text-gray-300">
                <li>• Craft up to 999 items in a single operation</li>
                <li>• Queue multiple different recipes for batch processing</li>
                <li>• Automatic material calculation and requirement checking</li>
                <li>• Progress tracking with estimated completion times</li>
                <li>• Integration with inventory and warehouse storage</li>
              </ul>
            </div>
            
            {/* How to Use */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📖</span>
                </div>
                <h3 className="text-lg font-semibold text-white">HOW TO USE MASS CRAFTING</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Step 1: Access the Interface</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Open any crafting station (Blacksmith, Tailor, etc.)</li>
                    <li>• Click the &quot;Mass Craft&quot; button in the crafting window</li>
                    <li>• Use the keyboard shortcut Ctrl+M from any crafting interface</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Step 2: Select Recipes</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Browse available recipes by category or use search</li>
                    <li>• Click on recipes to add them to your crafting queue</li>
                    <li>• Specify the quantity for each recipe (1-999)</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Step 3: Review and Start</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Check material requirements and availability</li>
                    <li>• Review estimated crafting time and costs</li>
                    <li>• Click &quot;Start Mass Crafting&quot; to begin the process</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Supported Crafting Types */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚒️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">SUPPORTED CRAFTING TYPES</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Equipment Crafting</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Weapons and armor sets</li>
                    <li>• Accessories and jewelry</li>
                    <li>• Enhancement materials</li>
                    <li>• Upgrade components</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Consumables</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Health and mana potions</li>
                    <li>• Buff scrolls and elixirs</li>
                    <li>• Food and snacks</li>
                    <li>• Ammunition and throwables</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Materials</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Processed ores and gems</li>
                    <li>• Refined textiles and leathers</li>
                    <li>• Alchemical compounds</li>
                    <li>• Construction materials</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Special Items</h4>
                  <ul className="text-gray-300 space-y-1 text-sm">
                    <li>• Quest-specific items</li>
                    <li>• Event-limited recipes</li>
                    <li>• Guild crafting projects</li>
                    <li>• Seasonal decorations</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Features and Benefits */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <h3 className="text-lg font-semibold text-white">FEATURES & BENEFITS</h3>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Efficiency Features</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Auto-queue: Automatically start next recipe when current finishes</li>
                    <li>• Smart sourcing: Pulls materials from inventory and warehouse</li>
                    <li>• Skill progression: Gain crafting experience for all items produced</li>
                    <li>• Success rate calculation: Shows probability of successful crafts</li>
                  </ul>
                </div>
                <div className="bg-gray-800 rounded-lg p-4">
                  <h4 className="text-white font-semibold mb-2">Quality of Life</h4>
                  <ul className="text-gray-300 space-y-1">
                    <li>• Offline crafting: Continue crafting while logged out (premium feature)</li>
                    <li>• Progress notifications: Get alerts when batches complete</li>
                    <li>• Recipe favorites: Save frequently used crafting combinations</li>
                    <li>• Cost analysis: Calculate profit margins for market selling</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tips and Strategies */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">💡</span>
                </div>
                <h3 className="text-lg font-semibold text-white">TIPS & STRATEGIES</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Plan your material gathering in advance for large crafting sessions</li>
                <li>• Use mass crafting during maintenance windows for offline production</li>
                <li>• Combine mass crafting with material gathering expeditions for efficiency</li>
                <li>• Set up crafting queues before participating in events or raids</li>
                <li>• Monitor market prices to optimize which items to mass produce</li>
                <li>• Join crafting guilds for access to shared recipes and materials</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}