import Navigation from '@/components/Navigation'

interface StaffMember {
  name: string
  role: string
  avatar: string
  description: string
  joinDate: string
  specialties: string[]
  contact?: string
  status: 'online' | 'offline' | 'away'
}

const staffMembers: StaffMember[] = [
  {
    name: 'Pumba98',
    role: 'Administrator',
    avatar: 'P',
    description: 'Lead administrator and developer of Olympus server. Responsible for server development, major updates, and overall server management.',
    joinDate: 'January 2020',
    specialties: ['Server Development', 'Database Management', 'System Architecture', 'Community Leadership'],
    contact: 'pumba98@olympusgg.com',
    status: 'online'
  },
  {
    name: 'ShadowMaster',
    role: 'Senior Game Master',
    avatar: 'S',
    description: 'Senior Game Master with extensive experience in player support, event management, and community engagement.',
    joinDate: 'March 2020',
    specialties: ['Event Management', 'Player Support', 'Bug Investigation', 'Community Events'],
    status: 'online'
  },
  {
    name: 'CrystalGuard',
    role: 'Game Master',
    avatar: 'C',
    description: 'Dedicated Game Master focusing on player assistance, in-game events, and maintaining fair gameplay.',
    joinDate: 'July 2020',
    specialties: ['Player Assistance', 'In-Game Events', 'Rule Enforcement', 'New Player Support'],
    status: 'away'
  },
  {
    name: 'TechWizard',
    role: 'Developer',
    avatar: 'T',
    description: 'Full-stack developer working on custom features, client improvements, and server optimization.',
    joinDate: 'September 2020',
    specialties: ['Client Development', 'Custom Features', 'Performance Optimization', 'Bug Fixes'],
    status: 'offline'
  },
  {
    name: 'ForumMod',
    role: 'Forum Moderator',
    avatar: 'F',
    description: 'Community moderator responsible for forum management, Discord moderation, and community guidelines enforcement.',
    joinDate: 'November 2020',
    specialties: ['Forum Management', 'Discord Moderation', 'Community Guidelines', 'Content Moderation'],
    status: 'online'
  },
  {
    name: 'EventMaster',
    role: 'Event Coordinator',
    avatar: 'E',
    description: 'Specializes in organizing and running server-wide events, competitions, and special celebrations.',
    joinDate: 'February 2021',
    specialties: ['Event Planning', 'Competition Management', 'Reward Distribution', 'Community Engagement'],
    status: 'away'
  }
]

const getRoleColor = (role: string) => {
  switch (role) {
    case 'Administrator': return 'bg-red-500'
    case 'Senior Game Master': return 'bg-purple-500'
    case 'Game Master': return 'bg-blue-500'
    case 'Developer': return 'bg-green-500'
    case 'Forum Moderator': return 'bg-yellow-500'
    case 'Event Coordinator': return 'bg-pink-500'
    default: return 'bg-gray-500'
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case 'online': return 'bg-green-400'
    case 'away': return 'bg-yellow-400'
    case 'offline': return 'bg-gray-400'
    default: return 'bg-gray-400'
  }
}

const getStatusText = (status: string) => {
  switch (status) {
    case 'online': return 'Online'
    case 'away': return 'Away'
    case 'offline': return 'Offline'
    default: return 'Unknown'
  }
}

export default function StaffPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Staff Members</h1>
          <p className="text-gray-300 text-lg mb-8">
            Meet the dedicated team behind Olympus server
          </p>
          
          {/* Staff Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-blue-400 mb-2">{staffMembers.length}</div>
              <div className="text-gray-300">Total Staff Members</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-green-400 mb-2">
                {staffMembers.filter(member => member.status === 'online').length}
              </div>
              <div className="text-gray-300">Currently Online</div>
            </div>
            <div className="bg-gray-800 rounded-lg p-6">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Coverage</div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {staffMembers.map((member, index) => (
            <div key={index} className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-gray-600 transition-colors">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-16 h-16 ${getRoleColor(member.role)} rounded-full flex items-center justify-center relative`}>
                    <span className="text-white font-bold text-xl">{member.avatar}</span>
                    <div className={`absolute -bottom-1 -right-1 w-5 h-5 ${getStatusColor(member.status)} rounded-full border-2 border-gray-800`}></div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.name}</h3>
                    <p className="text-blue-400 font-semibold text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    member.status === 'online' ? 'bg-green-900/30 text-green-400' :
                    member.status === 'away' ? 'bg-yellow-900/30 text-yellow-400' :
                    'bg-gray-700 text-gray-400'
                  }`}>
                    {getStatusText(member.status)}
                  </div>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {member.description}
              </p>
              
              {/* Specialties */}
              <div className="mb-4">
                <h4 className="text-white font-semibold text-sm mb-2">Specialties:</h4>
                <div className="flex flex-wrap gap-2">
                  {member.specialties.map((specialty, specIndex) => (
                    <span
                      key={specIndex}
                      className="bg-blue-900/30 text-blue-400 px-2 py-1 rounded text-xs border border-blue-500/30"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Additional Info */}
              <div className="border-t border-gray-700 pt-4 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400">Joined:</span>
                  <span className="text-gray-300">{member.joinDate}</span>
                </div>
                {member.contact && (
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Contact:</span>
                    <span className="text-blue-400 text-xs">{member.contact}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Contact Information */}
        <div className="mt-16 bg-gray-800 rounded-lg p-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Need Help?</h2>
          <p className="text-gray-300 mb-6">
            Our staff team is here to help you with any questions or issues you may have.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">In-Game Support</h3>
              <p className="text-gray-300 text-sm">Use /staff command to contact online staff members</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Discord Support</h3>
              <p className="text-gray-300 text-sm">Join our Discord server for real-time assistance</p>
            </div>
            <div className="bg-gray-700 rounded-lg p-4">
              <h3 className="text-white font-semibold mb-2">Forum Support</h3>
              <p className="text-gray-300 text-sm">Post in our support section for detailed help</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
