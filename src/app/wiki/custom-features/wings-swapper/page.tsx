import Navigation from '@/components/Navigation'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function WingsSwapperPage() {
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
            <li className="text-blue-400 font-medium">Wings Swapper</li>
          </ol>
        </nav>
        
        {/* Content */}
        <div className="max-w-4xl">
          <h1 className="text-4xl font-bold text-white mb-8">Wings Swapper System</h1>
          
          {/* Overview */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Overview</h2>
            <p className="text-gray-300 mb-4">
              The Wings Swapper System allows players to easily change between different wing cosmetics without losing their original wings or stats.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🦋</div>
                <h3 className="text-white font-semibold">Cosmetic Wings</h3>
                <p className="text-gray-400 text-sm">Visual appearance only</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">⚡</div>
                <h3 className="text-white font-semibold">Stat Wings</h3>
                <p className="text-gray-400 text-sm">Functional bonuses</p>
              </div>
              <div className="bg-gray-800 p-4 rounded text-center">
                <div className="text-3xl mb-2">🔄</div>
                <h3 className="text-white font-semibold">Easy Swap</h3>
                <p className="text-gray-400 text-sm">Quick switching</p>
              </div>
            </div>
          </div>
          
          {/* How It Works */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">How It Works</h2>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-white mb-2">1. Separate Systems</h3>
                <p className="text-gray-300 text-sm">
                  Wing stats and wing appearance are managed separately, allowing you to keep your bonuses while changing appearance.
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-white mb-2">2. Cosmetic Override</h3>
                <p className="text-gray-300 text-sm">
                  Apply any cosmetic wing appearance over your current functional wings without affecting stats.
                </p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-white mb-2">3. Collection System</h3>
                <p className="text-gray-300 text-sm">
                  Collect and save multiple wing appearances to switch between them at any time.
                </p>
              </div>
            </div>
          </div>
          
          {/* Usage Guide */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">Usage Guide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">🎨 Applying Cosmetics</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Open the Wings Swapper interface</li>
                  <li>• Select your desired cosmetic wing</li>
                  <li>• Apply the appearance overlay</li>
                  <li>• Keep your original wing stats</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">🔧 Managing Collection</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Save favorite wing combinations</li>
                  <li>• Create custom appearance sets</li>
                  <li>• Quick-switch between saved looks</li>
                  <li>• Reset to original appearance</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Benefits */}
          <div className="info-box">
            <h2 className="text-2xl font-bold text-white mb-4">System Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">⭐ Advantages</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Keep wing stats while changing looks</li>
                  <li>• No risk of losing valuable wings</li>
                  <li>• Unlimited cosmetic combinations</li>
                  <li>• Easy switching between appearances</li>
                </ul>
              </div>
              
              <div className="bg-gray-800 p-4 rounded">
                <h3 className="text-white font-semibold mb-2">💡 Tips</h3>
                <ul className="text-gray-300 text-sm space-y-1">
                  <li>• Collect wings for cosmetic purposes</li>
                  <li>• Experiment with different looks</li>
                  <li>• Save themed wing combinations</li>
                  <li>• Match wings to your outfit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}