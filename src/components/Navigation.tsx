'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  const [isLinksOpen, setIsLinksOpen] = useState(false)

  return (
    <nav className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-white">Olympus</span>
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
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      Discord
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
                      Forums
                    </a>
                    <a href="#" className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white">
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
                className="bg-gray-800 text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                <kbd className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">⌘K</kbd>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-400 hover:text-white">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
