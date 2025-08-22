import Navigation from '@/components/Navigation'
import Link from 'next/link'

interface ChangelogPost {
  id: string
  title: string
  date: string
  readTime: string
  author: {
    name: string
    role: string
    avatar: string
  }
  content: {
    sections: {
      title: string
      items: string[]
    }[]
  }
  tags: string[]
}

const changelogPosts: ChangelogPost[] = [
  {
    id: '1',
    title: 'Changelog - 19/05/2025',
    date: 'May 19, 2025',
    readTime: 'Three min read',
    author: {
      name: 'Pumba98',
      role: 'Administrator',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'Client',
          items: [
            'Bank supports withdrawals and deposits up to 2B',
            'Chat height is now saved between gaming sessions',
            'Bazaar search cooldown is now 1 second instead of 3 seconds',
            'Costume & Card inventories are now scrollable',
            'Inventories within (K) are now scrollable',
            'Added new visual effects for legendary item drops',
            'Improved minimap rendering performance',
            'Fixed issue with pet following behavior in crowded areas'
          ]
        },
        {
          title: 'Server',
          items: [
            'Implemented new anti-duplication measures',
            'Enhanced server security protocols',
            'Optimized database queries for better performance',
            'Added new logging system for better bug tracking'
          ]
        },
        {
          title: 'Events',
          items: [
            'Spring Festival event now live until May 31st',
            'Added new seasonal costumes and rewards',
            'Double XP weekend scheduled for May 25-26'
          ]
        }
      ]
    },
    tags: ['changelog', 'client', 'server', 'events']
  },
  {
    id: '2',
    title: 'Changelog - 11/05/2025',
    date: 'May 11, 2025',
    readTime: 'Four min read',
    author: {
      name: 'Pumba98',
      role: 'Administrator',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'Server',
          items: [
            'Fixed issue with pet experience calculation',
            'Improved server stability during peak hours',
            'Updated anti-cheat system with new detection methods',
            'Fixed rare crash when entering certain maps',
            'Optimized memory usage for better performance',
            'Enhanced guild system with new features',
            'Fixed issue with party experience distribution'
          ]
        },
        {
          title: 'Client',
          items: [
            'Updated UI for better user experience',
            'Fixed memory leak in inventory system',
            'Improved loading times for character selection',
            'Added new sound effects for combat actions',
            'Enhanced graphics settings menu',
            'Fixed issue with fullscreen mode on certain resolutions'
          ]
        },
        {
          title: 'Balance Changes',
          items: [
            'Adjusted damage values for Swordsman class skills',
            'Increased mana regeneration rate for Mage class',
            'Rebalanced drop rates for rare items',
            'Modified PvP damage calculations for better balance'
          ]
        }
      ]
    },
    tags: ['changelog', 'bugfix', 'improvements', 'balance']
  },
  {
    id: '3',
    title: 'Changelog - 27/04/2025',
    date: 'April 27, 2025',
    readTime: 'Two min read',
    author: {
      name: 'TechWizard',
      role: 'Developer',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'New Features',
          items: [
            'Introduced Achievement System with 50+ achievements',
            'Added Daily Quest system for additional rewards',
            'Implemented new guild ranking system',
            'Added support for custom keybindings'
          ]
        },
        {
          title: 'Bug Fixes',
          items: [
            'Fixed issue with bazaar item sorting',
            'Resolved problem with pet AI in certain situations',
            'Fixed crash when using certain skills in PvP',
            'Corrected display issues with some costume effects'
          ]
        }
      ]
    },
    tags: ['changelog', 'features', 'bugfix']
  },
  {
    id: '4',
    title: 'Changelog - 13/04/2025',
    date: 'April 13, 2025',
    readTime: 'Five min read',
    author: {
      name: 'Pumba98',
      role: 'Administrator',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'Major Update: Odyssey Season 2',
          items: [
            'Launched Odyssey Season 2: "Legends Awakening"',
            'Added 5 new exclusive maps for Odyssey players',
            'Introduced Legendary Awakening system',
            'New seasonal rewards and exclusive items',
            'Enhanced competitive leaderboards',
            'Special Odyssey-only events and challenges'
          ]
        },
        {
          title: 'Quality of Life',
          items: [
            'Improved auto-pickup system with better filtering',
            'Enhanced party management interface',
            'Added quick-travel system between major cities',
            'Implemented smart inventory sorting options'
          ]
        },
        {
          title: 'Performance',
          items: [
            'Reduced client memory usage by 15%',
            'Improved server response times',
            'Optimized rendering for better FPS',
            'Enhanced network stability'
          ]
        }
      ]
    },
    tags: ['changelog', 'odyssey', 'major-update', 'performance']
  }
]

const recentPosts = [
  'Changelog - 19/05/2025',
  'Changelog - 11/05/2025',
  'Changelog - 27/04/2025',
  'Changelog - 13/04/2025',
  'Changelog - 06/04/2025',
  'Changelog - 29/03/2025',
  'Changelog - 15/03/2025'
]

export default function ChangelogPage() {
  const currentPost = changelogPosts[0]

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent posts</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">2025</h3>
              <div className="space-y-2">
                {recentPosts.map((post, index) => (
                  <Link
                    key={index}
                    href={`/changelog/${index + 1}`}
                    className={`block text-sm text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded ${
                      index === 0 ? 'bg-blue-900/30 text-blue-400' : ''
                    }`}
                  >
                    {post}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          <div className="max-w-4xl">
            {/* Post Header */}
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-blue-400 mb-4">
                {currentPost.title}
              </h1>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>{currentPost.date} • {currentPost.readTime}</span>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{currentPost.author.name}</div>
                  <div className="text-gray-400 text-sm">{currentPost.author.role}</div>
                </div>
              </div>
              
              {/* Timestamp */}
              <div className="bg-gray-800 rounded-lg p-4 mb-8">
                <div className="text-gray-300 font-mono">19/05/2025 - 20h00 ST</div>
              </div>
            </div>
            
            {/* Content Sections */}
            <div className="space-y-8">
              {currentPost.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white mb-4">{section.title}</h2>
                  <ul className="space-y-3">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 font-medium">Tags:</span>
                {currentPost.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-blue-900/30 text-blue-400 px-3 py-1 rounded-full text-sm border border-blue-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
