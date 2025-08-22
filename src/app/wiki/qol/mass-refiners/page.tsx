import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function MassRefinersPage() {
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
            <li className="text-blue-400 font-medium">Mass Refiners</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Mass Refiner System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚗️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Mass Refiner System allows players to process large quantities of materials simultaneously. 
              Save time by refining hundreds of items at once instead of clicking through individual refinements.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Process entire stacks of materials at once</li>
              <li>• Automated refining with bulk operations</li>
              <li>• Support for all refining types and grades</li>
              <li>• Configurable batch sizes and processing queues</li>
            </ul>
          </div>
          
          {/* Supported Materials */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💎</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SUPPORTED MATERIALS</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Gemstones</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• D-grade Gemstones → C-grade</li>
                  <li>• C-grade Gemstones → B-grade</li>
                  <li>• B-grade Gemstones → A-grade</li>
                  <li>• A-grade Gemstones → S-grade</li>
                  <li>• S-grade Gemstones → S80-grade</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Life Stones</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Mid-grade Life Stones → High-grade</li>
                  <li>• High-grade Life Stones → Top-grade</li>
                  <li>• Broken Life Stones → Mid-grade</li>
                  <li>• Special Life Stone variants</li>
                  <li>• Event Life Stones processing</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Soul Crystals</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Red Soul Crystals (all levels)</li>
                  <li>• Blue Soul Crystals (all levels)</li>
                  <li>• Green Soul Crystals (all levels)</li>
                  <li>• Soul Crystal fragments processing</li>
                  <li>• Special Soul Crystal combinations</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Energy Crystals</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Energy Crystal fragments</li>
                  <li>• Complete Energy Crystals</li>
                  <li>• Concentrated Energy variants</li>
                  <li>• Purified Energy Crystals</li>
                  <li>• Ancient Energy Crystal types</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Refining Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔬</span>
              </div>
              <h3 className="text-lg font-semibold text-white">REFINING OPERATIONS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Standard Refining</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Combine lower grade materials into higher grades</li>
                  <li>• Standard success rates apply (with chance of failure)</li>
                  <li>• Bulk processing maintains individual roll chances</li>
                  <li>• Real-time progress tracking and results display</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Safe Refining</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Guaranteed success with higher material costs</li>
                  <li>• No risk of losing materials during processing</li>
                  <li>• Ideal for valuable or rare materials</li>
                  <li>• Premium option with additional fee</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Batch Processing</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Queue multiple refining operations</li>
                  <li>• Set processing priorities and order</li>
                  <li>• Automatic continuation until materials depleted</li>
                  <li>• Pause, resume, or cancel operations at any time</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Success Rates */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SUCCESS RATES & COSTS</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">D → C Grade Refining</span>
                <span className="text-green-400 font-semibold">95% Success Rate</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">C → B Grade Refining</span>
                <span className="text-green-400 font-semibold">85% Success Rate</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">B → A Grade Refining</span>
                <span className="text-yellow-400 font-semibold">70% Success Rate</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-600 pb-2">
                <span className="text-gray-300">A → S Grade Refining</span>
                <span className="text-orange-400 font-semibold">50% Success Rate</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">S → S80 Grade Refining</span>
                <span className="text-red-400 font-semibold">30% Success Rate</span>
              </div>
            </div>
          </div>

          {/* Processing Fees */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PROCESSING FEES</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Standard Processing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Basic Batch (up to 100 items)</span>
                    <span className="text-green-400">10,000 Adena</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Large Batch (up to 500 items)</span>
                    <span className="text-green-400">40,000 Adena</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mega Batch (up to 1000 items)</span>
                    <span className="text-green-400">70,000 Adena</span>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Premium Processing</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Safe Refining (Guaranteed Success)</span>
                    <span className="text-blue-400">+50% standard fee</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Priority Queue (Faster Processing)</span>
                    <span className="text-purple-400">+25% standard fee</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">VIP Members Discount</span>
                    <span className="text-gold-400">-20% all fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* How to Use */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO USE</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Step-by-Step Process</h4>
                <ol className="text-gray-300 space-y-1 text-sm list-decimal list-inside">
                  <li>Access Mass Refiner NPC in major towns</li>
                  <li>Select refining type and target grade</li>
                  <li>Choose materials from your inventory</li>
                  <li>Set batch size and processing options</li>
                  <li>Pay processing fee and confirm operation</li>
                  <li>Monitor progress and collect results</li>
                </ol>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Tips for Efficient Refining</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Sort materials by grade before starting</li>
                  <li>• Use larger batches for better fee efficiency</li>
                  <li>• Consider safe refining for valuable materials</li>
                  <li>• Queue multiple operations during busy periods</li>
                  <li>• Monitor success rates and adjust strategy accordingly</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access Information */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📍</span>
              </div>
              <h3 className="text-lg font-semibold text-white">ACCESS LOCATIONS</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Command:</strong> <code className="bg-gray-800 px-2 py-1 rounded">.massrefine</code> or <code className="bg-gray-800 px-2 py-1 rounded">.bulkrefine</code></p>
              <p><strong>Giran:</strong> Mass Refiner Marcus near the warehouse district</p>
              <p><strong>Aden:</strong> Master Refiner Elena in the crafting quarter</p>
              <p><strong>Heine:</strong> Bulk Processor Thomas at the harbor workshop</p>
              <p><strong>Requirements:</strong> Minimum 50 materials of the same type to start mass refining</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}