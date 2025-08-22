import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function StatsPage() {
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
            <li className="text-blue-400 font-medium">Stats & Attributes</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Stats & Attributes Guide</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              Understanding character statistics is crucial for building effective characters in Olympus. Each stat affects different aspects of your character's performance.
            </p>
          </div>
          
          {/* Primary Stats */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Primary Attributes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-red-500">
                <h3 className="text-lg font-semibold text-white mb-2">💪 STR (Strength)</h3>
                <p className="text-gray-300 text-sm mb-2">Increases physical attack power and carrying capacity.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Melee damage modifier</li>
                  <li>• Equipment weight capacity</li>
                  <li>• Some skill damage scaling</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-white mb-2">🏃 DEX (Dexterity)</h3>
                <p className="text-gray-300 text-sm mb-2">Affects accuracy, critical hit rate, and attack speed.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Ranged weapon damage</li>
                  <li>• Critical hit chance</li>
                  <li>• Attack speed bonus</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-white mb-2">🧠 INT (Intelligence)</h3>
                <p className="text-gray-300 text-sm mb-2">Determines magical attack power and mana capacity.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Magic damage scaling</li>
                  <li>• Maximum MP pool</li>
                  <li>• Spell critical chance</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-yellow-500">
                <h3 className="text-lg font-semibold text-white mb-2">💎 WIT (Wisdom)</h3>
                <p className="text-gray-300 text-sm mb-2">Affects mana regeneration and magical accuracy.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• MP regeneration rate</li>
                  <li>• Magic accuracy bonus</li>
                  <li>• Resistance to mental effects</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">🛡️ CON (Constitution)</h3>
                <p className="text-gray-300 text-sm mb-2">Increases health points and physical resistance.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Maximum HP pool</li>
                  <li>• HP regeneration rate</li>
                  <li>• Physical damage resistance</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-pink-500">
                <h3 className="text-lg font-semibold text-white mb-2">🧘 MEN (Mentality)</h3>
                <p className="text-gray-300 text-sm mb-2">Provides magical resistance and mental stability.</p>
                <ul className="text-gray-400 text-xs space-y-1">
                  <li>• Magic damage resistance</li>
                  <li>• Debuff resistance</li>
                  <li>• Casting stability</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Stat Priority by Class */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Class-Based Stat Priorities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3">⚔️ Physical Classes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Warriors/Knights</p>
                    <p className="text-xs text-gray-400">STR &gt; CON &gt; DEX &gt; MEN &gt; INT &gt; WIT</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Archers</p>
                    <p className="text-xs text-gray-400">DEX &gt; STR &gt; CON &gt; WIT &gt; MEN &gt; INT</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Rogues</p>
                    <p className="text-xs text-gray-400">DEX &gt; STR &gt; CON &gt; INT &gt; WIT &gt; MEN</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-3">🔮 Magical Classes</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-gray-300 font-medium">Mages</p>
                    <p className="text-xs text-gray-400">INT &gt; WIT &gt; MEN &gt; CON &gt; DEX &gt; STR</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Summoners</p>
                    <p className="text-xs text-gray-400">INT &gt; CON &gt; MEN &gt; WIT &gt; DEX &gt; STR</p>
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Healers</p>
                    <p className="text-xs text-gray-400">WIT &gt; MEN &gt; INT &gt; CON &gt; DEX &gt; STR</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Stat Calculation */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Stat Calculations</h2>
            <div className="bg-gray-800 p-4 rounded">
              <h3 className="text-white font-semibold mb-3">📊 How Stats Work</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="text-gray-300 font-medium mb-2">Damage Formulas</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Physical Damage = (STR + weapon) × modifiers</li>
                    <li>• Magical Damage = (INT + weapon) × modifiers</li>
                    <li>• Critical Damage = Base × (1.5 + bonuses)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-gray-300 font-medium mb-2">Defensive Calculations</h4>
                  <ul className="text-gray-400 space-y-1">
                    <li>• Physical Defense = CON × 2 + armor</li>
                    <li>• Magical Defense = MEN × 2 + resistance</li>
                    <li>• HP = CON × 10 + class bonus</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tips */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Stat Building Tips</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">💡 General Guidelines</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Focus on 1-2 primary stats first</li>
                  <li>• Balance offense with survivability</li>
                  <li>• Consider your playstyle and role</li>
                  <li>• Plan stat distribution early</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">⚠️ Common Mistakes</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Spreading stats too evenly</li>
                  <li>• Ignoring defensive stats completely</li>
                  <li>• Not matching stats to equipment</li>
                  <li>• Forgetting about stat caps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}