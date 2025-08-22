import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function BugReportsPage() {

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
              <li className="text-blue-400 font-medium">Bug Reports</li>
            </ol>
          </nav>
          
          {/* Content */}
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-white mb-8">Bug Reports</h1>
            
            {/* How to Report Section */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">!</span>
                </div>
                <h3 className="text-lg font-semibold text-white">HOW TO REPORT BUGS</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>1. Use the official Discord server #bug-reports channel</li>
                <li>2. Provide detailed information about the bug</li>
                <li>3. Include screenshots or videos if possible</li>
                <li>4. Mention your character name and server</li>
              </ul>
            </div>
            
            {/* Bug Report Template */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📝</span>
                </div>
                <h3 className="text-lg font-semibold text-white">BUG REPORT TEMPLATE</h3>
              </div>
              <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300">
                <div className="space-y-2">
                  <div><span className="text-blue-400">Character Name:</span> [Your character name]</div>
                  <div><span className="text-blue-400">Server:</span> [Server name]</div>
                  <div><span className="text-blue-400">Bug Description:</span> [Detailed description]</div>
                  <div><span className="text-blue-400">Steps to Reproduce:</span></div>
                  <div className="ml-4">1. [Step 1]</div>
                  <div className="ml-4">2. [Step 2]</div>
                  <div className="ml-4">3. [Step 3]</div>
                  <div><span className="text-blue-400">Expected Result:</span> [What should happen]</div>
                  <div><span className="text-blue-400">Actual Result:</span> [What actually happens]</div>
                  <div><span className="text-blue-400">Screenshots/Videos:</span> [Attach if available]</div>
                </div>
              </div>
            </div>
            
            {/* Known Issues */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">⚠️</span>
                </div>
                <h3 className="text-lg font-semibold text-white">KNOWN ISSUES</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>• Client may crash when switching between full-screen and windowed mode</li>
                <li>• Some costume effects may not display correctly on certain graphics cards</li>
                <li>• Bazaar search may occasionally return incomplete results</li>
                <li>• Pet AI may behave unexpectedly in certain map areas</li>
              </ul>
            </div>
            
            {/* Contact Information */}
            <div className="info-box">
              <div className="flex items-center mb-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white text-sm font-bold">📞</span>
                </div>
                <h3 className="text-lg font-semibold text-white">CONTACT INFORMATION</h3>
              </div>
              <ul className="space-y-2 text-gray-300">
                <li>Discord: Join our official Discord server</li>
                <li>Forums: Post in the Bug Reports section</li>
                <li>In-Game: Contact any online staff member</li>
              </ul>
            </div>
          </div>
        </div>
    </div>
  )
}
