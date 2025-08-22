import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function RulesPage() {
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
            <li className="text-blue-400 font-medium">Game Rules</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Game Rules</h1>
          
          {/* Language Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white">LANGUAGE</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>1.1 The official communication language is English. Players are allowed to use their native language in game except for speakers! Messages using speakers need to be in English.</li>
            </ul>
          </div>
          
          {/* Names Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">2</span>
              </div>
              <h3 className="text-lg font-semibold text-white">NAMES</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>2.1 Avoid all racist, insulting or provocative names, any troll pseudonyms may be changed or deleted. Extreme abuse of nicknames may result in a punishment.</li>
              <li>2.2 It is forbidden to copy or use a name similar to the staff members.</li>
            </ul>
          </div>
          
          {/* Game Behavior Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">3</span>
              </div>
              <h3 className="text-lg font-semibold text-white">GAME BEHAVIOR</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>3.1 You are obligated to respect each player and team member with no distinction. Everyone deserves respect.</li>
              <li>3.2 It is forbidden to scam, steal or simulate theft in this game.</li>
              <li>3.3 It is forbidden to have transactions outside of Olympus (such as selling gold, accounts...etc.)</li>
              <li>3.4 Any sort of offensive language or NSFW content is strictly forbidden.</li>
              <li>3.5 Any behavior aimed at disrupting the game experience of other players or griefing them is forbidden.</li>
              <li>3.6 It is forbidden to spam, which is repeating the same message several times. There is a risk of mute and more severe punishment if the behavior is repetitive.</li>
              <li>3.7 It is forbidden to encourage the usage of third-party software that is illegal in the game (e.g. bots or hacks).</li>
              <li>3.8 If you see a person who is suspicious or does not respect the rules, please report them to a GM as soon as possible with evidence provided.</li>
              <li>3.9 It is forbidden to manipulate or arrange a certain outcome of PvP activities.</li>
            </ul>
          </div>

          {/* Cheats and Bug Abusing Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">4</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CHEATS AND BUG ABUSING</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>4.1 Cheating software or any third-party software is forbidden.</li>
              <li>4.2 The use of in-game bots or macro is forbidden.</li>
              <li>4.3 If you find a bug in the game, please report it to a GM as soon as possible, that will result in a possible reward.</li>
              <li>4.4 If you take advantage of a bug, you will be punished according to the severity of the bug.</li>
            </ul>
          </div>

          {/* Multi-Accounts Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">5</span>
              </div>
              <h3 className="text-lg font-semibold text-white">MULTI-ACCOUNTS</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>5.1 You are allowed to own and connect to <strong>only one</strong> Olympus account.</li>
              <li>5.2 It is forbidden to sell or share your account with other players.</li>
            </ul>
          </div>

          {/* Communication Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">6</span>
              </div>
              <h3 className="text-lg font-semibold text-white">COMMUNICATION WITH THE TEAM</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>6.1 You are required to be respectful when communicating with staff members.</li>
              <li>6.2 It is forbidden to argue with the decisions of the staff members.</li>
              <li>6.3 If you disagree with a staff member&apos;s decision, you can appeal it through the proper channels.</li>
            </ul>
          </div>

          {/* Personal Information Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">7</span>
              </div>
              <h3 className="text-lg font-semibold text-white">PERSONAL INFORMATION</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>7.1 It is forbidden to share personal information of other players without their consent.</li>
              <li>7.2 Sharing your own personal information is at your own risk.</li>
            </ul>
          </div>

          {/* Ticket System Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">8</span>
              </div>
              <h3 className="text-lg font-semibold text-white">TICKET SYSTEM</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>8.1 Use the ticket system for legitimate issues only.</li>
              <li>8.2 Creating spam tickets or false reports may result in punishment.</li>
              <li>8.3 Be patient when waiting for a response to your ticket.</li>
            </ul>
          </div>

          {/* Consequences Section */}
          <div className="info-box">
            <div className="flex items-center mb-3">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                <span className="text-white text-sm font-bold">9</span>
              </div>
              <h3 className="text-lg font-semibold text-white">CONSEQUENCES AND PUNISHMENTS</h3>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>9.1 Punishments may include warnings, mutes, temporary suspensions, or permanent bans.</li>
              <li>9.2 The severity of punishment depends on the rule violated and previous infractions.</li>
              <li>9.3 Staff members have the final say in all punishment decisions.</li>
              <li>9.4 Repeated violations will result in escalated punishments.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}