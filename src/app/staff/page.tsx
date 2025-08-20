import Navigation from '@/components/Navigation'

interface StaffMember {
  name: string
  role: string
  avatar: string
  description: string
}

const staffMembers: StaffMember[] = [
  {
    name: 'Pumba98',
    role: 'Administrator',
    avatar: 'P',
    description: 'Lead administrator and developer of Olympus server.'
  },
  {
    name: 'GameMaster1',
    role: 'Game Master',
    avatar: 'G',
    description: 'Handles player support and in-game events.'
  },
  {
    name: 'Moderator1',
    role: 'Moderator',
    avatar: 'M',
    description: 'Community moderator and chat supervision.'
  }
]

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Staff Members</h1>
          <p className="text-gray-300 text-lg">
            Meet the team behind Olympus server
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 text-center">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">{member.avatar}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-300 text-sm">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
