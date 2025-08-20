'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import { ChevronRightIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

interface SidebarItem {
  id: string
  title: string
  icon: string
  hasChildren?: boolean
  children?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  {
    id: 'game-rules',
    title: 'Game Rules',
    icon: '📋',
    hasChildren: false
  },
  {
    id: 'bug-reports',
    title: 'Bug Reports',
    icon: '🐛',
    hasChildren: false
  },
  {
    id: 'odyssey',
    title: 'Odyssey',
    icon: '🌟',
    hasChildren: true,
    children: [
      { id: 'odyssey-overview', title: 'Overview', icon: '📖' },
      { id: 'odyssey-quests', title: 'Quests', icon: '⚔️' }
    ]
  },
  {
    id: 'information',
    title: 'Information',
    icon: 'ℹ️',
    hasChildren: true,
    children: [
      { id: 'info-general', title: 'General Info', icon: '📄' },
      { id: 'info-mechanics', title: 'Game Mechanics', icon: '⚙️' }
    ]
  },
  {
    id: 'custom-features',
    title: 'Custom Features',
    icon: '✨',
    hasChildren: true,
    children: [
      { id: 'features-overview', title: 'Overview', icon: '📋' },
      { id: 'features-list', title: 'Feature List', icon: '📝' }
    ]
  },
  {
    id: 'guides',
    title: 'Guides',
    icon: '📚',
    hasChildren: true,
    children: [
      { id: 'guides-beginner', title: 'Beginner Guide', icon: '🌱' },
      { id: 'guides-advanced', title: 'Advanced Guide', icon: '🎯' }
    ]
  },
  {
    id: 'community-guides',
    title: 'Community Guides',
    icon: '👥',
    hasChildren: true,
    children: [
      { id: 'community-tips', title: 'Tips & Tricks', icon: '💡' },
      { id: 'community-builds', title: 'Character Builds', icon: '🏗️' }
    ]
  },
  {
    id: 'drops',
    title: 'Drops',
    icon: '💎',
    hasChildren: true,
    children: [
      { id: 'drops-rates', title: 'Drop Rates', icon: '📊' },
      { id: 'drops-locations', title: 'Drop Locations', icon: '🗺️' }
    ]
  }
]

export default function WikiPage() {
  const [expandedItems, setExpandedItems] = useState<string[]>(['game-rules'])
  const [activeItem, setActiveItem] = useState('game-rules')

  const toggleExpanded = (itemId: string) => {
    setExpandedItems(prev => 
      prev.includes(itemId) 
        ? prev.filter(id => id !== itemId)
        : [...prev, itemId]
    )
  }

  const renderSidebarItem = (item: SidebarItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id)
    const isActive = activeItem === item.id

    return (
      <div key={item.id}>
        <div
          className={`sidebar-item ${isActive ? 'bg-blue-900/50 border-l-4 border-blue-500' : ''} ${level > 0 ? 'ml-6' : ''}`}
          onClick={() => {
            if (item.hasChildren) {
              toggleExpanded(item.id)
            }
            setActiveItem(item.id)
          }}
        >
          <span className="text-lg">{item.icon}</span>
          <span className="flex-1 text-sm font-medium">{item.title}</span>
          {item.hasChildren && (
            isExpanded ? 
              <ChevronDownIcon className="w-4 h-4 text-gray-400" /> :
              <ChevronRightIcon className="w-4 h-4 text-gray-400" />
          )}
        </div>
        
        {item.hasChildren && isExpanded && item.children && (
          <div className="ml-4">
            {item.children.map(child => renderSidebarItem(child, level + 1))}
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-80 bg-gray-800 min-h-screen border-r border-gray-700">
          <div className="p-4 space-y-2">
            {sidebarItems.map(item => renderSidebarItem(item))}
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Breadcrumb */}
          <nav className="flex mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">🏠</a>
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
                <li>1.1 The official communication language is English.</li>
                <li>Players are allowed to use their native language in game except for speakers! Messages using speakers need to be in English.</li>
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
                <li>3.1 Respect all players and staff members.</li>
                <li>3.2 No harassment, bullying, or toxic behavior.</li>
                <li>3.3 Follow the server rules and guidelines at all times.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
