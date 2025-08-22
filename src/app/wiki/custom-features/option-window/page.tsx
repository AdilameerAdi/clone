import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function OptionWindowPage() {
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
            <li className="text-blue-400 font-medium">Option Window</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Custom Option Window</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Custom Option Window provides enhanced game settings and configuration options beyond the standard client settings.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚙️</div>
                <h3 className="text-white font-semibold">Advanced Settings</h3>
                <p className="text-gray-400 text-sm">Extended configuration</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎮</div>
                <h3 className="text-white font-semibold">Game Controls</h3>
                <p className="text-gray-400 text-sm">Custom keybindings</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🎨</div>
                <h3 className="text-white font-semibold">UI Customization</h3>
                <p className="text-gray-400 text-sm">Interface tweaks</p>
              </div>
            </div>
          </div>
          
          {/* Available Options */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Available Options</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-white mb-2">🎮 Game Performance</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Graphics quality settings</li>
                  <li>• FPS optimization options</li>
                  <li>• Memory usage controls</li>
                  <li>• Network optimization</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-white mb-2">🎯 Gameplay Settings</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Auto-targeting options</li>
                  <li>• Combat assistance modes</li>
                  <li>• Movement enhancements</li>
                  <li>• Inventory management</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">🎨 Interface Options</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• UI element positioning</li>
                  <li>• Chat window customization</li>
                  <li>• Minimap enhancements</li>
                  <li>• HUD visibility controls</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Usage Instructions */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How to Access</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">📋 Opening the Window</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Press Alt + O to open</li>
                  <li>• Or use the menu button</li>
                  <li>• Access via system tray</li>
                  <li>• Right-click context menu</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">💾 Saving Settings</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Auto-save enabled by default</li>
                  <li>• Manual save with Ctrl + S</li>
                  <li>• Export/import configurations</li>
                  <li>• Reset to defaults option</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Tips */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Pro Tips</h2>
            <div className="bg-gray-800 p-4 rounded">
              <ul className="text-gray-300 text-sm space-y-2">
                <li>• Backup your settings before making major changes</li>
                <li>• Test performance settings in safe areas first</li>
                <li>• Use preset configurations for different gameplay styles</li>
                <li>• Keep graphics settings balanced for optimal experience</li>
                <li>• Regularly update your configurations as game updates release</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}