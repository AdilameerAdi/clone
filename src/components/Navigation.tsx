'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'

interface SearchResult {
  title: string
  url: string
  type: 'page' | 'section'
  description: string
}

const searchData: SearchResult[] = [
  { title: 'Game Rules', url: '/wiki', type: 'page', description: 'Server rules and guidelines' },
  { title: 'Bug Reports', url: '/wiki/bug-reports', type: 'page', description: 'How to report bugs and known issues' },
  { title: 'Odyssey Overview', url: '/wiki/odyssey', type: 'page', description: 'Seasonal server experience' },
  { title: 'Custom Features', url: '/wiki/custom-features', type: 'page', description: 'Unique Olympus features' },
  { title: 'Beginner Guide', url: '/wiki/guides/beginner', type: 'page', description: 'Getting started guide' },
  { title: 'Changelogs', url: '/changelog', type: 'page', description: 'Latest updates and changes' },
  { title: 'Shop Rotations', url: '/shop-rotations', type: 'page', description: 'Current shop items and updates' },
  { title: 'Staff Members', url: '/staff', type: 'page', description: 'Meet the team' },
]

export default function Navigation() {
  const [isLinksOpen, setIsLinksOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<SearchResult[]>([])

  // Handle search
  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = searchData.filter(item =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }, [searchQuery])

  // Handle keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsSearchOpen(true)
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false)
        setSearchQuery('')
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [])

  const handleSearchSelect = (url: string) => {
    setIsSearchOpen(false)
    setSearchQuery('')
    window.location.href = url
  }

  return (
    <>
      <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-3">
                <img 
                  src="/logo.png" 
                  alt="DIONISY Logo"
                  className="w-10 h-10 object-contain"
                />
                <span className="text-xl font-bold gradient-dionisy-text">DIONISY</span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/wiki" className="nav-link">
                  Wiki
                </Link>
                <Link href="/changelog" className="nav-link">
                  Changelogs
                </Link>
                <Link href="/shop-rotations" className="nav-link">
                  Shop Rotations
                </Link>
                <Link href="/staff" className="nav-link">
                  Staff Members
                </Link>
                
                {/* Links Dropdown */}
                <div className="relative">
                  <button
                    onClick={() => setIsLinksOpen(!isLinksOpen)}
                    className="nav-link flex items-center space-x-1"
                  >
                    <span>Links</span>
                    <ChevronDownIcon className="w-4 h-4" />
                  </button>
                  
                  {isLinksOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg py-1 z-50">
                      <a 
                        href="https://discord.gg/olympus" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Discord
                      </a>
                      <a 
                        href="https://forum.olympusgg.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Forums
                      </a>
                      <a 
                        href="https://download.olympusgg.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white"
                      >
                        Download
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Search */}
            <div className="hidden md:block">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                  onClick={() => setIsSearchOpen(true)}
                  readOnly
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <kbd className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">⌘K</kbd>
                </div>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800 rounded-lg mt-2">
                <Link href="/wiki" className="block px-3 py-2 text-gray-300 hover:text-white">Wiki</Link>
                <Link href="/changelog" className="block px-3 py-2 text-gray-300 hover:text-white">Changelogs</Link>
                <Link href="/shop-rotations" className="block px-3 py-2 text-gray-300 hover:text-white">Shop Rotations</Link>
                <Link href="/staff" className="block px-3 py-2 text-gray-300 hover:text-white">Staff Members</Link>
                <div className="border-t border-gray-700 pt-2">
                  <a href="https://discord.gg/olympus" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-300 hover:text-white">Discord</a>
                  <a href="https://forum.olympusgg.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-300 hover:text-white">Forums</a>
                  <a href="https://download.olympusgg.com" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-300 hover:text-white">Download</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-start justify-center min-h-screen pt-16 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 transition-opacity" aria-hidden="true">
              <div className="absolute inset-0 bg-gray-900 opacity-75" onClick={() => setIsSearchOpen(false)}></div>
            </div>

            <div className="inline-block align-bottom bg-gray-800 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-medium text-white">Search</h3>
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search pages..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-700 text-white placeholder-gray-400 pl-10 pr-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    autoFocus
                  />
                </div>

                {/* Search Results */}
                {searchResults.length > 0 && (
                  <div className="mt-4 max-h-64 overflow-y-auto">
                    {searchResults.map((result, index) => (
                      <button
                        key={index}
                        onClick={() => handleSearchSelect(result.url)}
                        className="w-full text-left px-3 py-2 rounded hover:bg-gray-700 transition-colors"
                      >
                        <div className="text-white font-medium">{result.title}</div>
                        <div className="text-gray-400 text-sm">{result.description}</div>
                      </button>
                    ))}
                  </div>
                )}

                {searchQuery && searchResults.length === 0 && (
                  <div className="mt-4 text-center text-gray-400">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
