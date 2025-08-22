import Navigation from '@/components/Navigation'
import Link from 'next/link'

interface ShopItem {
  name: string
  price: string
  currency: string
  image: string
  status: 'available' | 'removed' | 'new'
}

interface ShopUpdate {
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
      items: ShopItem[]
      notes?: string[]
    }[]
  }
  tags: string[]
}

const shopUpdates: ShopUpdate[] = [
  {
    id: '1',
    title: 'Shop Update - 11/05/2025',
    date: 'May 11, 2025',
    readTime: 'One min read',
    author: {
      name: 'Pumba98',
      role: 'Administrator',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'General',
          items: [
            {
              name: 'Olympus Coins (1000 OC)',
              price: '10.00',
              currency: 'USD',
              image: '/placeholder-coin.png',
              status: 'removed'
            }
          ],
          notes: [
            'Since we will forbid cross server trading on Odyssey, we\'re removing this item from now until the end of Odyssey to avoid people hoarding this item before release.'
          ]
        },
        {
          title: 'Costumes',
          items: [
            {
              name: 'Pirate Captain Costume',
              price: '500',
              currency: 'OC',
              image: '/placeholder-costume.png',
              status: 'new'
            },
            {
              name: 'Royal Knight Armor',
              price: '750',
              currency: 'OC',
              image: '/placeholder-armor.png',
              status: 'available'
            }
          ]
        },
        {
          title: 'Weapons',
          items: [
            {
              name: 'Legendary Sword +15',
              price: '1200',
              currency: 'OC',
              image: '/placeholder-sword.png',
              status: 'available'
            },
            {
              name: 'Divine Staff +12',
              price: '1000',
              currency: 'OC',
              image: '/placeholder-staff.png',
              status: 'available'
            }
          ]
        }
      ]
    },
    tags: ['shop', 'rotation', 'update']
  },
  {
    id: '2',
    title: 'Shop Update - 27/04/2025',
    date: 'April 27, 2025',
    readTime: 'Two min read',
    author: {
      name: 'Pumba98',
      role: 'Administrator',
      avatar: '/avatar-placeholder.png'
    },
    content: {
      sections: [
        {
          title: 'Weekly Specials',
          items: [
            {
              name: 'Experience Boost (24h)',
              price: '200',
              currency: 'OC',
              image: '/placeholder-boost.png',
              status: 'available'
            },
            {
              name: 'Gold Boost (12h)',
              price: '150',
              currency: 'OC',
              image: '/placeholder-gold.png',
              status: 'available'
            }
          ]
        },
        {
          title: 'Limited Time Items',
          items: [
            {
              name: 'Easter Bunny Costume',
              price: '400',
              currency: 'OC',
              image: '/placeholder-bunny.png',
              status: 'removed'
            }
          ],
          notes: [
            'Easter event items have been removed from the shop.'
          ]
        }
      ]
    },
    tags: ['shop', 'weekly', 'specials']
  }
]

const recentUpdates = [
  'Shop Update - 11/05/2025',
  'Shop Update - 27/04/2025',
  'Shop Update - 13/04/2025',
  'Shop Update - 06/04/2025',
  'Shop Update - 23/03/2025'
]

export default function ShopRotationsPage() {
  const currentUpdate = shopUpdates[0]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'text-green-400 bg-green-900/30 border-green-500/30'
      case 'removed': return 'text-red-400 bg-red-900/30 border-red-500/30'
      default: return 'text-blue-400 bg-blue-900/30 border-blue-500/30'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'new': return 'NEW'
      case 'removed': return 'REMOVED'
      default: return 'AVAILABLE'
    }
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-6">
            <h2 className="text-xl font-bold text-white mb-6">Recent updates</h2>
            
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-blue-400">2025</h3>
              <div className="space-y-2">
                {recentUpdates.map((update, index) => (
                  <Link
                    key={index}
                    href={`/shop-rotations/${index + 1}`}
                    className={`block text-sm text-gray-300 hover:text-white transition-colors duration-200 py-2 px-3 rounded ${
                      index === 0 ? 'bg-blue-900/30 text-blue-400' : ''
                    }`}
                  >
                    {update}
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
                {currentUpdate.title}
              </h1>
              
              <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                <span>{currentUpdate.date} • {currentUpdate.readTime}</span>
              </div>
              
              {/* Author Info */}
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">P</span>
                </div>
                <div>
                  <div className="text-white font-semibold">{currentUpdate.author.name}</div>
                  <div className="text-gray-400 text-sm">{currentUpdate.author.role}</div>
                </div>
              </div>
            </div>
            
            {/* Content Sections */}
            <div className="space-y-12">
              {currentUpdate.content.sections.map((section, index) => (
                <div key={index}>
                  <h2 className="text-2xl font-bold text-white mb-6">{section.title}</h2>
                  
                  {/* Items Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
                    {section.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                        {/* Item Image Placeholder */}
                        <div className="w-full h-32 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                          <div className="text-gray-500 text-center">
                            <div className="text-2xl mb-2">🖼️</div>
                            <div className="text-xs">Image Placeholder</div>
                          </div>
                        </div>
                        
                        {/* Item Info */}
                        <div className="space-y-2">
                          <h3 className="text-white font-semibold text-sm">{item.name}</h3>
                          <div className="flex items-center justify-between">
                            <span className="text-blue-400 font-bold">
                              {item.price} {item.currency}
                            </span>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(item.status)}`}>
                              {getStatusText(item.status)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Section Notes */}
                  {section.notes && (
                    <div className="bg-gray-800/50 rounded-lg p-4 border-l-4 border-blue-500">
                      {section.notes.map((note, noteIndex) => (
                        <p key={noteIndex} className="text-gray-300 text-sm">
                          {note}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-gray-700">
              <div className="flex items-center space-x-2">
                <span className="text-gray-400 font-medium">Tags:</span>
                {currentUpdate.tags.map((tag, index) => (
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
