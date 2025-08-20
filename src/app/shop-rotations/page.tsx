import Navigation from '@/components/Navigation'

export default function ShopRotationsPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">Shop Rotations</h1>
          <div className="bg-gray-800 rounded-lg p-8">
            <p className="text-gray-300 text-lg">
              Shop rotation information will be displayed here.
            </p>
            <p className="text-gray-400 mt-4">
              Check back regularly for updated shop items and rotations.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
