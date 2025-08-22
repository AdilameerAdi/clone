import Navigation from '@/components/Navigation'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section - Green Background */}
      <section className="bg-section-green relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-shadow text-white">
                  Welcome to <span className="text-yellow-300 text-glow">DIONISY</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold text-green-100">
                  The leading private server
                </h2>
                <h3 className="text-2xl lg:text-3xl font-bold text-yellow-200">
                  Try it now!
                </h3>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary mb-4 sm:mb-0">
                  DISCORD
                </button>
                <button className="btn-primary">
                  PLAY
                </button>
              </div>
            </div>
            
            {/* Right Content - DIONISY Logo */}
            <div className="flex justify-center lg:justify-end">
              <div className="bg-white-hero">
                <Image 
                  src="/logo.png" 
                  alt="DIONISY Logo"
                  width={320}
                  height={320}
                  className="w-64 h-64 lg:w-80 lg:h-80 object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
        
      {/* Statistics Section - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              DIONISY - one name, one legend.
            </h2>
            <p className="text-lg text-green-900 leading-relaxed font-medium max-w-3xl mx-auto">
              DIONISY is the <span className="text-green-800 font-bold">leading private server</span>, built with the objective to make the game enjoyable again.
            </p>
          </div>
          
          {/* Key Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-green-800/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-800 mb-2">1K+</div>
              <div className="text-green-900 font-medium">Daily Active Users</div>
            </div>
            <div className="text-center bg-green-800/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-800 mb-2">350+</div>
              <div className="text-green-900 font-medium">Peak Hour Players</div>
            </div>
            <div className="text-center bg-green-800/10 rounded-lg p-6">
              <div className="text-4xl font-bold text-green-800 mb-2">1K+</div>
              <div className="text-green-900 font-medium">Daily Raids Completed</div>
            </div>
          </div>
        </div>
      </section>

      {/* Act 8 Introduction - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Act 8 Introduction</h2>
              <p className="text-green-100 leading-relaxed">
                Experience the latest chapter in the DIONISY adventure with Act 8. Discover new lands, face challenging enemies, and unlock powerful abilities as you progress through this exciting content.
              </p>
              <p className="text-green-200 leading-relaxed">
                Act 8 brings enhanced gameplay mechanics, stunning new areas to explore, and epic boss battles that will test your skills to the limit.
              </p>
              <button className="btn-primary">Learn More</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game1.jpeg" 
                alt="Act 8 Preview"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Martial Artist Experience - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game2.jpeg" 
                alt="Martial Artist Experience"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Martial Artist Experience</h2>
              <p className="text-green-900 leading-relaxed">
                Master the art of combat with the Martial Artist class. Unleash devastating combos, channel inner energy, and become a formidable warrior on the battlefield.
              </p>
              <p className="text-green-900 leading-relaxed">
                With unique skill trees and powerful abilities, the Martial Artist offers a dynamic and engaging gameplay experience for both new and veteran players.
              </p>
              <button className="btn-secondary">Explore Class</button>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty System - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Loyalty System</h2>
              <p className="text-green-100 leading-relaxed">
                Earn loyalty points through active participation and dedication. Our comprehensive loyalty system rewards consistent players with exclusive benefits, rare items, and special privileges.
              </p>
              <p className="text-green-200 leading-relaxed">
                The more you play and contribute to the community, the greater your rewards become. Unlock unique titles, cosmetic items, and gameplay advantages.
              </p>
              <button className="btn-primary">View Rewards</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game3.jpeg" 
                alt="Loyalty System Rewards"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pocket Dimensions - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game4.jpeg" 
                alt="Pocket Dimensions"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Pocket Dimensions</h2>
              <p className="text-green-900 leading-relaxed">
                Access personal pocket dimensions where you can build, customize, and create your own private space. These dimensions serve as your personal headquarters and storage area.
              </p>
              <p className="text-green-900 leading-relaxed">
                Invite friends, showcase your achievements, and enjoy a personalized gaming experience in your own dimensional space.
              </p>
              <button className="btn-secondary">Enter Dimension</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trophy System - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Trophy System</h2>
              <p className="text-green-100 leading-relaxed">
                Collect and display your achievements with our comprehensive trophy system. Showcase your accomplishments and progress through various challenging milestones.
              </p>
              <p className="text-green-200 leading-relaxed">
                Earn rare trophies for exceptional feats, display them in your trophy room, and compete with other players for the most impressive collections.
              </p>
              <button className="btn-primary">View Trophies</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game5.jpeg" 
                alt="Trophy System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Warp System - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game6.jpeg" 
                alt="Warp System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Warp System</h2>
              <p className="text-green-900 leading-relaxed">
                Fast travel across the world with our advanced warp system. Instantly teleport to discovered locations, saving time and making exploration more convenient.
              </p>
              <p className="text-green-900 leading-relaxed">
                Unlock new warp points through exploration and quests, creating an efficient network for quick transportation across the realm.
              </p>
              <button className="btn-secondary">Discover Warps</button>
            </div>
          </div>
        </div>
      </section>

      {/* Achievement System - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Achievement System</h2>
              <p className="text-green-100 leading-relaxed">
                Track your progress with hundreds of challenging achievements. From simple tasks to epic accomplishments, there&apos;s always something to strive for.
              </p>
              <p className="text-green-200 leading-relaxed">
                Unlock exclusive rewards, titles, and recognition for completing difficult achievements that showcase your dedication and skill.
              </p>
              <button className="btn-primary">View Achievements</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game7.jpeg" 
                alt="Achievement System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Event Notifications - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game8.jpeg" 
                alt="Event Notifications"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Event Notifications</h2>
              <p className="text-green-900 leading-relaxed">
                Stay updated with real-time event notifications and alerts. Never miss important server events, raids, or special activities with our comprehensive notification system.
              </p>
              <p className="text-green-900 leading-relaxed">
                Customize your notification preferences to receive alerts for the events that matter most to you and your playstyle.
              </p>
              <button className="btn-secondary">Configure Alerts</button>
            </div>
          </div>
        </div>
      </section>

      {/* Auction House - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Auction House</h2>
              <p className="text-green-100 leading-relaxed">
                Trade items and equipment through our secure auction system. Buy and sell rare equipment, materials, and collectibles with players from around the server.
              </p>
              <p className="text-green-200 leading-relaxed">
                Set up automated bidding, track market prices, and build your wealth through strategic trading in the player-driven economy.
              </p>
              <button className="btn-primary">Browse Auctions</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game9.jpeg" 
                alt="Auction House"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* NPC Buffers - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game10.jpeg" 
                alt="NPC Buffers"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">NPC Buffers</h2>
              <p className="text-green-900 leading-relaxed">
                Access powerful buffs and enhancements from specialized NPCs. Boost your combat effectiveness, increase experience gain, or enhance your crafting abilities.
              </p>
              <p className="text-green-900 leading-relaxed">
                Find buffer NPCs throughout the world, each offering unique advantages to help you overcome challenges and achieve your goals.
              </p>
              <button className="btn-secondary">Find Buffers</button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Hub - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Community Hub</h2>
              <p className="text-green-100 leading-relaxed">
                Connect with fellow players in our vibrant community hub. Share experiences, organize events, and build lasting friendships with players who share your passion.
              </p>
              <p className="text-green-200 leading-relaxed">
                Join discussions, participate in community events, and become part of the DIONISY family that makes this server truly special.
              </p>
              <button className="btn-primary">Join Community</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game11.jpeg" 
                alt="Community Hub"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Guild System - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game13.jpeg" 
                alt="Guild System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Guild System</h2>
              <p className="text-green-900 leading-relaxed">
                Form powerful alliances with fellow players through our comprehensive guild system. Create or join guilds, participate in guild quests, and work together to achieve common goals.
              </p>
              <p className="text-green-900 leading-relaxed">
                Unlock guild halls, participate in inter-guild competitions, and enjoy exclusive guild benefits including shared resources and special events.
              </p>
              <button className="btn-secondary">Create Guild</button>
            </div>
          </div>
        </div>
      </section>

      {/* End Game Content - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">End Game Content</h2>
              <p className="text-green-100 leading-relaxed">
                Experience challenging end-game content designed for maximum level players. Take on epic raid bosses, explore dangerous dungeons, and acquire legendary equipment.
              </p>
              <p className="text-green-200 leading-relaxed">
                Form parties with other players, strategize complex encounters, and earn the most powerful rewards available in DIONISY.
              </p>
              <button className="btn-primary">Start Raiding</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game14.jpeg" 
                alt="End Game Content"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Player Housing System - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game15.jpeg" 
                alt="Player Housing System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Player Housing System</h2>
              <p className="text-green-900 leading-relaxed">
                Build and customize your own personal house in the world of DIONISY. Design interiors, place furniture, and create a unique living space that reflects your personality and achievements.
              </p>
              <p className="text-green-900 leading-relaxed">
                Invite friends to visit your home, host parties, and showcase your rare collections and trophies in a personalized environment.
              </p>
              <button className="btn-secondary">Build House</button>
            </div>
          </div>
        </div>
      </section>

      {/* Advanced Crafting - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">Advanced Crafting</h2>
              <p className="text-green-100 leading-relaxed">
                Master the art of crafting with our comprehensive system. Create powerful weapons, enchant equipment, and forge legendary items using rare materials and ancient recipes.
              </p>
              <p className="text-green-200 leading-relaxed">
                Discover secret crafting combinations, unlock master craftsman titles, and become renowned for your exceptional creations.
              </p>
              <button className="btn-primary">Start Crafting</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game16.jpeg" 
                alt="Advanced Crafting"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pet Companion System - Yellow Background */}
      <section className="bg-section-yellow py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="bg-green-800/10 rounded-lg p-4">
              <Image 
                src="/games/game17.jpeg" 
                alt="Pet Companion System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-green-800">Pet Companion System</h2>
              <p className="text-green-900 leading-relaxed">
                Tame and train loyal companions to fight alongside you. Each pet has unique abilities, can be customized with equipment, and grows stronger through battle experience.
              </p>
              <p className="text-green-900 leading-relaxed">
                Collect rare pets, participate in pet tournaments, and build an unstoppable team of companions for your adventures.
              </p>
              <button className="btn-secondary">Tame Pets</button>
            </div>
          </div>
        </div>
      </section>

      {/* PvP Combat System - Green Background */}
      <section className="bg-section-green py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white">PvP Combat System</h2>
              <p className="text-green-100 leading-relaxed">
                Engage in intense player-versus-player combat with our advanced PvP system. Experience balanced gameplay, fair matchmaking, and competitive tournaments that showcase your skills.
              </p>
              <p className="text-green-200 leading-relaxed">
                Join ranked matches, participate in guild wars, and climb the leaderboards to earn exclusive rewards and recognition as a top warrior.
              </p>
              <button className="btn-primary">Enter Arena</button>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Image 
                src="/games/game12.jpeg" 
                alt="PvP Combat System"
                width={400}
                height={300}
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Players Are Recommending Us - Yellow Background */}
      <section className="bg-section-yellow py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-green-800 mb-6">Our Players Are Recommending Us</h2>
            <p className="text-xl text-green-900 max-w-4xl mx-auto leading-relaxed">
              Join thousands of satisfied players who have made DIONISY their gaming home. Here&apos;s what our community has to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">DK</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">DragonKnight</div>
                  <div className="text-green-700">Level 95 Warrior</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;DIONISY has completely changed my gaming experience. The community is amazing and the features are constantly improving!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2023</p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">MW</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">MageWizard</div>
                  <div className="text-green-700">Level 92 Sorcerer</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;The loyalty system and custom features make this server stand out. I&apos;ve never had so much fun in an MMO!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2023</p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">SA</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">ShadowArcher</div>
                  <div className="text-green-700">Level 88 Archer</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;Best private server I&apos;ve ever played on. The events, raids, and community events are incredible!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2023</p>
            </div>

            {/* Testimonial 4 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">HC</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">HolyCleric</div>
                  <div className="text-green-700">Level 90 Priest</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;The guild system and team events have helped me make lifelong friends. This isn&apos;t just a game, it&apos;s a community!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2022</p>
            </div>

            {/* Testimonial 5 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">BR</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">BattleRogue</div>
                  <div className="text-green-700">Level 94 Assassin</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;The PvP system is perfectly balanced and the tournaments are so exciting. I love the competitive scene here!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2023</p>
            </div>

            {/* Testimonial 6 */}
            <div className="bg-green-800/10 rounded-xl p-8 text-center">
              <div className="mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4">
                  <div className="w-full h-full bg-green-800/30 flex items-center justify-center">
                    <span className="text-green-800 font-bold text-xl">MC</span>
                  </div>
                </div>
                <div>
                  <div className="font-bold text-green-800 text-lg">MasterCrafter</div>
                  <div className="text-green-700">Level 87 Artisan</div>
                </div>
              </div>
              <p className="text-green-900 italic text-lg leading-relaxed mb-4">
                &quot;The crafting system is so detailed and rewarding. I love creating unique items and trading with other players!&quot;
              </p>
              <div className="flex justify-center mb-2">
                <span className="text-yellow-600 text-xl">⭐⭐⭐⭐⭐</span>
              </div>
              <p className="text-green-700 text-sm">Playing since 2023</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-2xl text-green-800 font-semibold mb-6">Ready to join our amazing community?</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary text-lg px-8 py-4">Start Playing Now</button>
              <button className="btn-secondary text-lg px-8 py-4">Join Discord</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Green Background */}
      <footer className="bg-section-green py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <Image 
                  src="/logo.png" 
                  alt="DIONISY Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <span className="text-2xl font-bold gradient-dionisy-text">DIONISY</span>
              </div>
              <p className="text-green-200 leading-relaxed mb-6 max-w-md">
                The premier private server experience focused on community, innovation, and single-character gameplay. Join thousands of players in an unforgettable adventure.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">
                  <span className="sr-only">Discord</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.211.375-.445.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </a>
                <a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">
                  <span className="sr-only">Forum</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 7.178l-2.644 2.644 2.644 2.644-1.414 1.414-2.644-2.644-2.644 2.644-1.414-1.414 2.644-2.644-2.644-2.644 1.414-1.414 2.644 2.644 2.644-2.644 1.414 1.414z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li><a href="/wiki" className="text-green-200 hover:text-yellow-300 transition-colors">Game Wiki</a></li>
                <li><a href="/changelog" className="text-green-200 hover:text-yellow-300 transition-colors">Changelogs</a></li>
                <li><a href="/shop-rotations" className="text-green-200 hover:text-yellow-300 transition-colors">Shop Rotations</a></li>
                <li><a href="/staff" className="text-green-200 hover:text-yellow-300 transition-colors">Staff Members</a></li>
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Community</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">Discord Server</a></li>
                <li><a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">Official Forums</a></li>
                <li><a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">Download Game</a></li>
                <li><a href="#" className="text-green-200 hover:text-yellow-300 transition-colors">Support Center</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-green-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-green-200 text-sm">
                © 2024 DIONISY. All rights reserved. Built with passion for the gaming community.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-green-200 hover:text-yellow-300 text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-green-200 hover:text-yellow-300 text-sm transition-colors">Terms of Service</a>
                <a href="#" className="text-green-200 hover:text-yellow-300 text-sm transition-colors">Contact</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
