import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function RaidReportsPage() {
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
            <li className="text-blue-400 font-medium">Raid Report</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Raid Report System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📊</span>
              </div>
              <h3 className="text-lg font-semibold text-white">OVERVIEW</h3>
            </div>
            <p className="text-gray-300 mb-4">
              The Raid Report System provides detailed analytics and tracking for raid boss encounters. 
              Monitor kill times, participation, loot distribution, and guild performance metrics.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Track all raid boss kills and attempts</li>
              <li>• Detailed damage and participation statistics</li>
              <li>• Loot distribution and drop rate analysis</li>
              <li>• Guild and alliance performance metrics</li>
            </ul>
          </div>
          
          {/* Report Types */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📋</span>
              </div>
              <h3 className="text-lg font-semibold text-white">REPORT TYPES</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Individual Reports</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Personal raid kill count and history</li>
                  <li>• Damage dealt and received statistics</li>
                  <li>• Loot received and drop luck analysis</li>
                  <li>• Participation rate and attendance</li>
                  <li>• Best performance records</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Guild Reports</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Guild raid kill leaderboards</li>
                  <li>• Member participation analytics</li>
                  <li>• Resource and loot distribution</li>
                  <li>• Raid scheduling and attendance</li>
                  <li>• Performance comparison metrics</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Server Reports</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Global raid boss status and timers</li>
                  <li>• Server-wide kill statistics</li>
                  <li>• Most active guilds and players</li>
                  <li>• Rare drop announcements</li>
                  <li>• Historical data and trends</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Boss-Specific Reports</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Individual boss kill times and records</li>
                  <li>• Drop rate statistics and analysis</li>
                  <li>• Fastest kill time leaderboards</li>
                  <li>• Most recent kills and participants</li>
                  <li>• Seasonal and event boss tracking</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Tracked Data */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-white">TRACKED DATA</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Combat Statistics</h4>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  <div className="text-gray-300">
                    <p className="font-medium">Damage Metrics</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Total damage dealt</li>
                      <li>• Damage per second (DPS)</li>
                      <li>• Critical hit percentage</li>
                      <li>• Skill usage frequency</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Survival Stats</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Damage taken</li>
                      <li>• Deaths and resurrections</li>
                      <li>• Healing received/given</li>
                      <li>• Time alive percentage</li>
                    </ul>
                  </div>
                  <div className="text-gray-300">
                    <p className="font-medium">Support Metrics</p>
                    <ul className="text-xs space-y-1 mt-1">
                      <li>• Buffs provided</li>
                      <li>• Debuffs applied</li>
                      <li>• Support skill usage</li>
                      <li>• Team assistance score</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Loot & Rewards Tracking</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Items dropped and their rarity levels</li>
                  <li>• Individual loot assignments and distribution</li>
                  <li>• Adena and resource rewards earned</li>
                  <li>• Contribution points and bonus calculations</li>
                  <li>• Historical loot luck and drop rate analysis</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Access Methods */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">🔑</span>
              </div>
              <h3 className="text-lg font-semibold text-white">HOW TO ACCESS REPORTS</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">In-Game Access</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Command: <code className="bg-gray-700 px-2 py-1 rounded">.raidreport</code> or <code className="bg-gray-700 px-2 py-1 rounded">.reports</code></li>
                  <li>• NPC: Statistics Master in main towns</li>
                  <li>• Hotkey: <kbd className="bg-gray-700 px-2 py-1 rounded">Alt + R</kbd> for quick report access</li>
                  <li>• Guild Hall: Raid Statistics Board</li>
                </ul>
              </div>
              <div className="bg-gray-800 rounded-lg p-4">
                <h4 className="text-white font-semibold mb-2">Web Portal Access</h4>
                <ul className="text-gray-300 space-y-1 text-sm">
                  <li>• Server website with detailed analytics dashboard</li>
                  <li>• Mobile-responsive design for on-the-go access</li>
                  <li>• Export functionality for spreadsheet analysis</li>
                  <li>• Historical data archive with search filters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">⭐</span>
              </div>
              <h3 className="text-lg font-semibold text-white">BENEFITS & FEATURES</h3>
            </div>
            <div className="space-y-3 text-gray-300">
              <p><strong>Performance Analysis:</strong> Identify strengths and areas for improvement in raid encounters</p>
              <p><strong>Fair Loot Distribution:</strong> Transparent tracking ensures equitable reward distribution</p>
              <p><strong>Guild Management:</strong> Leaders can make informed decisions about member roles and strategies</p>
              <p><strong>Achievement Tracking:</strong> Personal milestones and guild accomplishments are permanently recorded</p>
              <p><strong>Competitive Ranking:</strong> Server-wide leaderboards foster healthy competition between players and guilds</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}