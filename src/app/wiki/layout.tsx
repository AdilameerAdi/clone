'use client'

import { useState } from 'react'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

interface SidebarItem {
  id: string
  title: string
  icon: string
  href?: string
  hasChildren?: boolean
  children?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'rules',
    title: 'Game Rules',
    icon: '📋',
    href: '/wiki/rules'
  },
  {
    id: 'bug-reports',
    title: 'Bug Reports',
    icon: '🐛',
    href: '/wiki/bug-reports'
  },
  {
    id: 'odyssey',
    title: 'Odyssey',
    icon: '🌟',
    hasChildren: true,
    children: [
      { id: 'odyssey-faq', title: 'F.A.Q', icon: '❓', href: '/wiki/odyssey/faq' },
      { id: 'odyssey-calendar', title: 'Events', icon: '📅', href: '/wiki/odyssey/calendar' },
      { id: 'odyssey-progression-rewards', title: 'Progression Rewards', icon: '🎁', href: '/wiki/odyssey/progression-rewards' },
      { id: 'odyssey-achievements', title: 'Achievements', icon: '🏆', href: '/wiki/odyssey/achievements' }
    ]
  },
  {
    id: 'custom-features',
    title: 'Custom Features',
    icon: '✨',
    hasChildren: true,
    children: [
      { id: 'loyalty-system', title: 'Loyalty System', icon: '💎', href: '/wiki/custom-features/loyalty-system' },
      { id: 'pocket-dimensions', title: 'Pocket Dimensions', icon: '🌌', href: '/wiki/custom-features/pocket-dimensions' },
      { id: 'trophy-system', title: 'Trophy System', icon: '🏆', href: '/wiki/custom-features/trophy-system' },
      { id: 'warp-system', title: 'Warp System', icon: '🌀', href: '/wiki/custom-features/warp-system' },
      { id: 'achievements', title: 'Achievements', icon: '🎯', href: '/wiki/custom-features/achievements' },
      { id: 'bid-system', title: 'Bid System', icon: '💰', href: '/wiki/custom-features/bid-system' },
      { id: 'wings-swapper', title: 'Wings Swapper', icon: '🦋', href: '/wiki/custom-features/wings-swapper' },
      { id: 'option-window', title: 'Option Window', icon: '⚙️', href: '/wiki/custom-features/option-window' },
      { id: 'raid-report', title: 'Raid Report', icon: '📊', href: '/wiki/custom-features/raid-report' },
      { id: 'event-notification', title: 'Event Notification System', icon: '🔔', href: '/wiki/custom-features/event-notification-system' },
      { id: 'pet-upgrading', title: 'Pet Upgrading', icon: '🐾', href: '/wiki/custom-features/pet-upgrading' }
    ]
  },
  {
    id: 'information',
    title: 'Information',
    icon: 'ℹ️',
    hasChildren: true,
    children: [
      { id: 'specialists-cards', title: 'Specialists/Cards', icon: '🃏', href: '/wiki/information/specialists/cards' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: '📚',
    hasChildren: true,
    children: [
      { id: 'leveling-guide', title: 'Leveling Guide', icon: '📊', href: '/wiki/guides/leveling/combat1-90' }
    ]
  },
  {
    id: 'community-guides',
    title: 'Community Guides',
    icon: '👥',
    hasChildren: true,
    children: [
      { id: 'pony-forest-guide', title: 'Community Pony Forest Guide', icon: '🌳', href: '/wiki/community-guides/community-pony-forest-guide' }
    ]
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: '💎',
    hasChildren: true,
    children: [
      { id: 'items', title: 'Items', icon: '📦', href: '/wiki/drops/items' },
      { id: 'alchemists-beverage', title: 'Alchemist\'s Beverage', icon: '🧪', href: '/wiki/drops/items/alchemists-beverage' }
    ]
  }
]

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const [expandedItems, setExpandedItems] = useState<string[]>(['custom-features', 'information', 'guides', 'community-guides', 'drops'])

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id)
    const isActive = pathname === item.href || 
                    (item.children && item.children.some(child => pathname === child.href))

    return (
      <div key={item.id}>
        {item.hasChildren ? (
          <button
            className={`w-full sidebar-item ${isActive ? 'bg-blue-900/30' : ''} ${level > 0 ? 'ml-4' : ''}`}
            onClick={() => toggleExpanded(item.id)}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="flex-1 text-sm font-medium text-left">{item.title}</span>
            {isExpanded ? 
              <ChevronDownIcon className="w-4 h-4 text-gray-400" /> :
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
            }
          </button>
        ) : (
          <Link
            href={item.href || '#'}
            className={`sidebar-item ${pathname === item.href ? 'bg-blue-900/50 border-l-4 border-blue-500' : ''} ${level > 0 ? 'ml-4' : ''}`}
          >
            <span className="text-lg">{item.icon}</span>
            <span className="flex-1 text-sm font-medium">{item.title}</span>
          </Link>
        )}
        
        {item.hasChildren && isExpanded && item.children && (
          <div className="ml-2">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-80 bg-gray-800 min-h-screen border-r border-gray-700 sticky top-0 h-screen overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold text-white mb-4 px-4">Olympus Wiki</h2>
          <div className="space-y-1">
            {sidebarItems.map(item => renderSidebarItem(item))}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}