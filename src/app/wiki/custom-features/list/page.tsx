import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function CustomFeaturesListPage() {

  const features = [
    {
      category: "Banking & Economy",
      items: [
        { name: "Enhanced Banking System", description: "Support for withdrawals and deposits up to 2B gold", status: "Active" },
        { name: "Improved Bazaar Search", description: "Reduced search cooldown from 3 seconds to 1 second", status: "Active" },
        { name: "Advanced Trade Protection", description: "Enhanced security for player-to-player trading", status: "Active" }
      ]
    },
    {
      category: "User Interface",
      items: [
        { name: "Persistent Chat Height", description: "Chat height is now saved between gaming sessions", status: "Active" },
        { name: "Scrollable Inventories", description: "Costume & Card inventories are now scrollable", status: "Active" },
        { name: "Enhanced Inventory (K)", description: "Inventories within (K) are now scrollable", status: "Active" },
        { name: "Improved Minimap", description: "Enhanced minimap rendering performance", status: "Active" }
      ]
    },
    {
      category: "Visual Effects",
      items: [
        { name: "Legendary Drop Effects", description: "Added new visual effects for legendary item drops", status: "Active" },
        { name: "Enhanced Animations", description: "Smoother character and spell animations", status: "Active" },
        { name: "Improved Lighting", description: "Better lighting effects in dungeons and maps", status: "Active" }
      ]
    },
    {
      category: "Gameplay Mechanics",
      items: [
        { name: "Pet AI Improvements", description: "Fixed pet following behavior in crowded areas", status: "Active" },
        { name: "Enhanced Drop System", description: "Improved drop rate calculations and fairness", status: "Active" },
        { name: "Skill Balance Updates", description: "Regular skill balancing for better gameplay", status: "Active" }
      ]
    },
    {
      category: "Security & Anti-Cheat",
      items: [
        { name: "Anti-Duplication System", description: "Multiple layers of protection against item duplication", status: "Active" },
        { name: "Enhanced Security Protocols", description: "Improved server security and monitoring", status: "Active" },
        { name: "Advanced Logging", description: "Comprehensive logging system for better bug tracking", status: "Active" },
        { name: "Real-time Monitoring", description: "24/7 automated monitoring for suspicious activities", status: "Active" }
      ]
    },
    {
      category: "Performance Optimizations",
      items: [
        { name: "Database Optimization", description: "Optimized database queries for better performance", status: "Active" },
        { name: "Memory Management", description: "Improved memory usage and garbage collection", status: "Active" },
        { name: "Network Optimization", description: "Reduced latency and improved connection stability", status: "Active" }
      ]
    }
  ]

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
              <li className="text-blue-400 font-medium">Custom Features List</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-6xl">
            <h1 className="text-4xl font-bold text-white mb-8">Complete Feature List</h1>
            
            <div className="space-y-8">
              {features.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-gray-800 rounded-lg p-6">
                  <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <span className="text-white text-sm font-bold">{categoryIndex + 1}</span>
                    </div>
                    {category.category}
                  </h2>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {category.items.map((feature, featureIndex) => (
                      <div key={featureIndex} className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                        <div className="flex items-start justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{feature.name}</h3>
                          <span className="bg-green-900/30 text-green-400 px-2 py-1 rounded-full text-xs border border-green-500/30">
                            {feature.status}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer Note */}
            <div className="mt-12 p-6 bg-blue-900/20 border border-blue-500/30 rounded-lg">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">ℹ️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CONTINUOUS DEVELOPMENT</h3>
              </div>
              <p className="text-gray-300">
                This list is regularly updated as new features are implemented and existing ones are improved. 
                Check back frequently for the latest additions and enhancements to the Olympus experience.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}
