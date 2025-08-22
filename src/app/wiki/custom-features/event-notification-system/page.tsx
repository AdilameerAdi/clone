import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function EventNotificationSystemPage() {
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
            <li className="text-blue-400 font-medium">Event Notification System</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Event Notification System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔔</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Event Notification System keeps players informed about server events, bosses, sieges, and important 
              announcements through customizable notifications. Never miss important activities with real-time alerts.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Real-time event notifications and announcements</li>
              <li>• Customizable notification types and priorities</li>
              <li>• Multiple notification channels (in-game, web, mobile)</li>
              <li>• Event scheduling and reminder system</li>
            </ul>
          </div>
          
          {/* Notification Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📢</span>
              </div>
              <h3 className="text-lg font-semibold text-white">NOTIFICATION TYPES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Boss Events</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Raid boss spawn announcements</li>
                  <li>• Epic boss death notifications</li>
                  <li>• Boss respawn timers and countdowns</li>
                  <li>• Rare boss sighting alerts</li>
                  <li>• World boss phase changes</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">PvP & Siege</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Castle siege registration openings</li>
                  <li>• Siege battle start announcements</li>
                  <li>• Territory control changes</li>
                  <li>• Mass PvP event notifications</li>
                  <li>• Guild war declarations</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Server Events</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Double XP/Drop rate events</li>
                  <li>• Special holiday celebrations</li>
                  <li>• Community challenges and goals</li>
                  <li>• Server maintenance schedules</li>
                  <li>• Limited-time promotional events</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Economy & Trading</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Market price alerts and trends</li>
                  <li>• Auction house bidding notifications</li>
                  <li>• Rare item availability alerts</li>
                  <li>• Trade deal completion notices</li>
                  <li>• Economic milestone announcements</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Notification Channels */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📱</span>
              </div>
              <h3 className="text-lg font-semibold text-white">NOTIFICATION CHANNELS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">In-Game Notifications</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Visual Alerts</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Pop-up notification windows</li>
                      <li>• Screen overlay announcements</li>
                      <li>• Chat channel messages</li>
                      <li>• System message ticker</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Audio Alerts</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Custom notification sounds</li>
                      <li>• Voice announcements</li>
                      <li>• Priority alert tones</li>
                      <li>• Event-specific music cues</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">UI Elements</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Minimap event markers</li>
                      <li>• Event calendar highlights</li>
                      <li>• Status bar notifications</li>
                      <li>• Interface flash alerts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">External Notifications</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Web browser push notifications</li>
                  <li>• Mobile app notifications (iOS/Android)</li>
                  <li>• Email alerts for critical events</li>
                  <li>• Discord bot integration for guild channels</li>
                  <li>• SMS notifications for premium subscribers</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Customization Options */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⚙️</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CUSTOMIZATION OPTIONS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Priority Settings</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• <span className="text-red-400">Critical:</span> Server shutdowns, emergency maintenance</li>
                  <li>• <span className="text-orange-400">High:</span> Raid bosses, siege events, rare spawns</li>
                  <li>• <span className="text-yellow-400">Medium:</span> Regular events, double XP periods</li>
                  <li>• <span className="text-green-400">Low:</span> General announcements, minor updates</li>
                  <li>• <span className="text-blue-400">Info:</span> Tips, community news, celebrations</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Filter Options</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Event type filtering (PvP, PvE, Social, Economic)</li>
                  <li>• Geographic filtering (specific regions or towns)</li>
                  <li>• Time-based filtering (active hours only)</li>
                  <li>• Level-based filtering (relevant to character level)</li>
                  <li>• Guild-specific notifications for members</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Configuration */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔧</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CONFIGURATION & SETUP</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">In-Game Setup</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Command: <code className="bg-gray-700 px-2 py-1 rounded">.notifications</code> or <code className="bg-gray-700 px-2 py-1 rounded">.events</code></li>
                  <li>• Settings Menu: System → Notifications → Event Alerts</li>
                  <li>• NPC: Event Coordinator in main towns</li>
                  <li>• Quick toggle: <kbd className="bg-gray-700 px-2 py-1 rounded">Alt + N</kbd></li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Web Portal Setup</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Account management panel for notification preferences</li>
                  <li>• Mobile app registration and device linking</li>
                  <li>• Email subscription management</li>
                  <li>• Discord webhook configuration for guilds</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Smart Features */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🤖</span>
              </div>
              <h3 className="text-lg font-semibold text-white">SMART FEATURES</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Learning Algorithm:</strong> System learns your activity patterns and prioritizes relevant events</p>
              <p><strong>Location Awareness:</strong> Notifications adjust based on your current in-game location</p>
              <p><strong>Social Integration:</strong> Friend and guild member activity influences notification priorities</p>
              <p><strong>Historical Analysis:</strong> Past event participation helps predict interests</p>
              <p><strong>Do Not Disturb:</strong> Automatic quiet hours during inactivity or specified time periods</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}