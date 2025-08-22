import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OdysseyFAQPage() {
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
            <li className="text-blue-400 font-medium">FAQ</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Odyssey FAQ</h1>
          
          {/* What is Odyssey */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">What is Odyssey?</h2>
            <p className="text-gray-300 mb-4">
              Odyssey is Olympus's premier progressive content system that provides players with structured 
              challenges, engaging storylines, and exclusive rewards. It serves as a comprehensive framework 
              for both new and experienced players to advance their characters and unlock unique content.
            </p>
            <ul className="text-gray-300 space-y-2 ml-4">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Story-driven quests that expand the Olympus lore
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Progressive difficulty scaling with player level
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Exclusive rewards unavailable through regular gameplay
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Community events and global achievements
              </li>
            </ul>
          </div>

          {/* Purpose and Goals */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Purpose and Goals</h2>
            <p className="text-gray-300 mb-4">
              The Odyssey system was designed to address several key aspects of the Olympus experience:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                  Player Retention
                </h3>
                <p className="text-gray-400 text-sm">
                  Provide engaging long-term content to keep players invested in their progression
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                  Skill Development
                </h3>
                <p className="text-gray-400 text-sm">
                  Guide players through increasingly complex challenges to improve gameplay skills
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-purple-400 rounded-full mr-2"></span>
                  Community Building
                </h3>
                <p className="text-gray-400 text-sm">
                  Foster cooperation through group achievements and global objectives
                </p>
              </div>
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2 flex items-center">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mr-2"></span>
                  Exclusive Content
                </h3>
                <p className="text-gray-400 text-sm">
                  Offer unique rewards and experiences for dedicated participants
                </p>
              </div>
            </div>
          </div>

          {/* Important Dates */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Important Dates & Schedule</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-400">
                <h3 className="text-white font-semibold mb-2">Odyssey Seasons</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Each Odyssey season runs for 3 months, with content updates every 2 weeks.
                </p>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Season Start:</strong> First Monday of each quarter</div>
                  <div><strong>Mid-Season Update:</strong> 6 weeks after season start</div>
                  <div><strong>Season End:</strong> Last Sunday of the quarter</div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-400">
                <h3 className="text-white font-semibold mb-2">Weekly Events</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Special Odyssey events occur weekly with rotating themes and bonuses.
                </p>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Event Start:</strong> Every Tuesday at 12:00 UTC</div>
                  <div><strong>Event Duration:</strong> 5 days (Tuesday - Saturday)</div>
                  <div><strong>Cooldown:</strong> Sunday - Monday preparation period</div>
                </div>
              </div>

              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-400">
                <h3 className="text-white font-semibold mb-2">Global Challenges</h3>
                <p className="text-gray-300 text-sm mb-2">
                  Community-wide objectives that require server cooperation to complete.
                </p>
                <div className="text-gray-400 text-sm space-y-1">
                  <div><strong>Launch:</strong> Monthly, on the 15th at 18:00 UTC</div>
                  <div><strong>Duration:</strong> 10 days maximum</div>
                  <div><strong>Rewards:</strong> Distributed 24 hours after completion</div>
                </div>
              </div>
            </div>
          </div>

          {/* Special Features */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Special Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-semibold mb-2">Dynamic Scaling</h3>
                <p className="text-gray-400 text-sm">
                  Quest difficulty automatically adjusts based on your character level and equipment
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎯</div>
                <h3 className="text-white font-semibold mb-2">Smart Objectives</h3>
                <p className="text-gray-400 text-sm">
                  AI-powered quest generation creates unique challenges tailored to your playstyle
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🌟</div>
                <h3 className="text-white font-semibold mb-2">Legacy Rewards</h3>
                <p className="text-gray-400 text-sm">
                  Exclusive items that showcase your Odyssey achievements to other players
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🤝</div>
                <h3 className="text-white font-semibold mb-2">Social Integration</h3>
                <p className="text-gray-400 text-sm">
                  Form parties, compete in leaderboards, and collaborate on global objectives
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">📊</div>
                <h3 className="text-white font-semibold mb-2">Progress Tracking</h3>
                <p className="text-gray-400 text-sm">
                  Detailed statistics and analytics to track your Odyssey journey and improvements
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎭</div>
                <h3 className="text-white font-semibold mb-2">Narrative Choice</h3>
                <p className="text-gray-400 text-sm">
                  Your decisions affect story outcomes and unlock different quest paths
                </p>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Explore More</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link href="/wiki/odyssey/calendar" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">📅 Event Calendar</h3>
                <p className="text-gray-400 text-sm">View upcoming events and schedules</p>
              </Link>
              
              <Link href="/wiki/odyssey/progression-rewards" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🎁 Progression Rewards</h3>
                <p className="text-gray-400 text-sm">Check achievement rewards and trophies</p>
              </Link>
              
              <Link href="/wiki/odyssey/achievements" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">🏆 Achievements</h3>
                <p className="text-gray-400 text-sm">Browse global and individual achievements</p>
              </Link>
              
              <Link href="/wiki/odyssey/quests" className="bg-gray-800 p-4 rounded hover:bg-gray-700 transition-colors">
                <h3 className="text-white font-semibold mb-2">📜 Quest System</h3>
                <p className="text-gray-400 text-sm">Learn about available quests and missions</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}