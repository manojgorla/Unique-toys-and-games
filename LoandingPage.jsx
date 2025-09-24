import React, { useState, useEffect } from 'react';
import Retro from '../assets/HeaderImages/Retro.jpeg'
import Shop from '../assets/HeaderImages/Shop.jpeg'
import Healthcare from '../assets/HeaderImages/Healthcare.jpeg'

import {Link} from 'react-router-dom'

const LoandingPage = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [showInspiration, setShowInspiration] = useState(false);
  
  // Simulated loading effect
  useEffect(() => {
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        const newProgress = prev + Math.floor(Math.random() * 5) + 1;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return newProgress;
      });
    }, 100);
    
    return () => clearInterval(interval);
  }, []);
  
  // Auto carousel for featured projects
  useEffect(() => {
    if (isLoading) return;
    
    const interval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % featuredProjects.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isLoading]);
  
  // Featured creative projects
  const featuredProjects = [
    {
      title: "EcoBlocks: Sustainable Building Toys",
      creator: "Green Minds Collective",
      image: Shop,
      tags: ["eco-friendly", "educational", "construction"]
    },
    {
      title: "Quantum Quest: Science Adventure Game",
      creator: "PhysicsPlay",
      image: Retro,
      tags: ["science", "board game", "educational"]
    },
    {
      title: "Emotion Puppets: Social Learning Toys",
      creator: "Child Development Studio",
      image: Healthcare,
      tags: ["emotional intelligence", "puppetry", "storytelling"]
    }
  ];
  
  // Active challenges
  const activeChallenges = [
    {
      title: "Future Mobility Toys",
      deadline: "14 days left",
      participants: 87,
      prize: "$2,500"
    },
    {
      title: "STEM Learning for Preschoolers",
      deadline: "21 days left",
      participants: 64,
      prize: "$1,800"
    },
    {
      title: "Inclusive Game Design",
      deadline: "7 days left",
      participants: 105,
      prize: "$3,000"
    }
  ];
  
  // Render loading screen
  if (isLoading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
        <div className="w-64 h-64 relative mb-8">
          {/* Animated toy blocks */}
          <div className="absolute w-24 h-24 bg-yellow-300 rounded-lg top-0 left-0 animate-bounce" style={{ animationDuration: '1.5s', animationDelay: '0.2s' }}>
            <span className="flex justify-center items-center h-full text-4xl">🎨</span>
          </div>
          <div className="absolute w-24 h-24 bg-blue-400 rounded-lg top-0 right-0 animate-bounce" style={{ animationDuration: '1.8s', animationDelay: '0.4s' }}>
            <span className="flex justify-center items-center h-full text-4xl">🧩</span>
          </div>
          <div className="absolute w-24 h-24 bg-green-400 rounded-lg bottom-0 left-0 animate-bounce" style={{ animationDuration: '1.6s', animationDelay: '0.3s' }}>
            <span className="flex justify-center items-center h-full text-4xl">🤖</span>
          </div>
          <div className="absolute w-24 h-24 bg-purple-400 rounded-lg bottom-0 right-0 animate-bounce" style={{ animationDuration: '1.7s', animationDelay: '0.1s' }}>
            <span className="flex justify-center items-center h-full text-4xl">🎮</span>
          </div>
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-6">Creative Minds Platform</h1>
        
        <div className="w-64 h-3 bg-white bg-opacity-30 rounded-full mb-4">
          <div 
            className="h-full bg-white rounded-full transition-all duration-100"
            style={{ width: `${loadingProgress}%` }}>
          </div>
        </div>
        
        <p className="text-white text-lg">Loading your creative workspace...</p>
      </div>
    );
  }
  
  // Main homepage content
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Bring Your Toy & Game Ideas to Life
            </h1>
            <p className="text-xl mb-8">
              Challenge your creative mind to conceptualize and develop unique toys and games that inspire, entertain, and educate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to='/login' className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:bg-gray-100 transition"
              >
                Start Creating
              </Link>
              <button className="px-8 py-3 bg-purple-700 bg-opacity-30 text-white font-bold rounded-full hover:bg-opacity-40 transition">
                Explore Challenges
              </button>
            </div>
          </div>
        </div>

        
        
        {/* Wave shape divider */}
        <div className="h-16 transform -translate-y-8">
        
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full">
            <path
              d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
              opacity=".5"
              className="fill-current text-gray-50"
            ></path>
            <path
              d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
              className="fill-current text-gray-50"
            ></path>
          </svg>
        </div>
      </div>
      
      {/* Featured Projects Carousel */}
      <div className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Featured Creations</h2>
        
        <div className="relative max-w-4xl mx-auto ">
          {featuredProjects.map((project, index) => (
            <div 
              key={index}
              className={`transition-opacity duration-500 ${
                index === activeSlide ? "opacity-100" : "opacity-0 absolute inset-0"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="md:flex h-72">
                  <div className="md:flex-shrink-0">
                    <img className=" w-full object-cover md:w-64  h-full" src={project.image} alt={project.title} />
                  </div>
                  <div className="p-8">
                    <div className="flex flex-wrap gap-2 mb-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 bg-purple-100 text-purple-800 text-xs font-medium rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                      By {project.creator}
                    </div>
                    <h3 className="mt-1 text-xl font-semibold text-gray-900">{project.title}</h3>
                    <p className="mt-2 text-gray-600">
                      An innovative project that pushes the boundaries of toy design and delivers a unique play experience.
                    </p>
                    <div className="mt-4">
                      <button className="text-indigo-600 hover:text-indigo-800 font-medium">
                        View Details →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Carousel controls */}
          <div className="flex justify-center mt-4 gap-2">
            {featuredProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === activeSlide ? "bg-purple-600" : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      
      {/* Active Challenges Section */}
      <div className="bg-purple-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Active Challenges</h2>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activeChallenges.map((challenge, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-5 border-b border-gray-100">
                  <h3 className="text-xl font-semibold text-gray-900">{challenge.title}</h3>
                </div>
                <div className="p-5">
                  <div className="flex items-center text-orange-500 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                    </svg>
                    <span>{challenge.deadline}</span>
                  </div>
                  <div className="flex items-center text-gray-600 mb-2">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                    </svg>
                    <span>{challenge.participants} participants</span>
                  </div>
                  <div className="flex items-center text-green-600 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5 2a2 2 0 00-2 2v14l3.5-2 3.5 2 3.5-2 3.5 2V4a2 2 0 00-2-2H5zm2.5 3a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm-7 4a1.5 1.5 0 100 3 1.5 1.5 0 000-3zm7 0a1.5 1.5 0 100 3 1.5 1.5 0 000-3z" clipRule="evenodd" />
                    </svg>
                    <span>Prize: {challenge.prize}</span>
                  </div>
                  <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition">
                    Join Challenge
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <button className="px-6 py-2 border-2 border-purple-600 text-purple-600 font-medium rounded-full hover:bg-purple-600 hover:text-white transition">
              View All Challenges
            </button>
          </div>
        </div>
      </div>
      
      {/* Inspiration and Tools Section */}
      <div className="py-12 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2 text-center">Spark Your Creativity</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-center mb-12">
          Tools and resources to help you transform your ideas into innovative toys and games
        </p>
        
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div 
            className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition"
            onClick={() => setShowInspiration(!showInspiration)}
          >
            <div className="h-14 w-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Idea Generator</h3>
            <p className="mb-4">Feeling stuck? Get inspired with random prompts and constraints to spark your creativity.</p>
            <span className="font-medium flex items-center">
              Try it now 
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
          
          <div className="bg-gradient-to-br from-pink-500 to-red-500 text-white rounded-xl p-6 shadow-lg cursor-pointer hover:shadow-xl transition">
            <div className="h-14 w-14 bg-white bg-opacity-20 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Learning Hub</h3>
            <p className="mb-4">Access courses, tutorials and resources on toy design, child development, and prototyping.</p>
            <span className="font-medium flex items-center">
              Explore courses 
              <svg className="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </span>
          </div>
        </div>
        
        {/* Inspiration popup */}
        {showInspiration && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-2xl w-full p-6">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-2xl font-bold text-gray-800">Random Inspiration</h3>
                <button 
                  onClick={() => setShowInspiration(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg mb-4">
                <p className="text-lg text-purple-800 font-medium">Design Challenge:</p>
                <p className="text-xl">Create a toy that teaches children about renewable energy while being fun and engaging.</p>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-blue-800 font-medium">Target Age:</p>
                  <p>6-9 years</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-green-800 font-medium">Key Skill:</p>
                  <p>Scientific Thinking</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-yellow-800 font-medium">Materials:</p>
                  <p>Recycled Plastics</p>
                </div>
                <div className="bg-pink-50 p-3 rounded-lg">
                  <p className="text-pink-800 font-medium">Constraint:</p>
                  <p>Must include motion</p>
                </div>
              </div>
              
              <div className="flex space-x-3">
                <button 
                  onClick={() => setShowInspiration(false)}
                  className="flex-1 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-4 rounded-lg transition"
                >
                  Use This Idea
                </button>
                <button 
                  className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Success Stories */}
      <div className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Success Stories</h2>
          
          <div className="max-w-5xl mx-auto">
            <div className="relative pl-8 border-l-4 border-purple-400 mb-10">
              <div className="absolute w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center -left-6 top-0">
                <span className="text-xl">💡</span>
              </div>
              <h3 className="text-xl font-bold mb-2">From Sketch to Shelf: The BlockBots Story</h3>
              <p className="text-gray-300 mb-2">
                "I joined a challenge on this platform with just a simple idea for reconfigurable robot blocks. After getting 
                feedback from the community and using the prototyping tools, I refined my design and eventually 
                partnered with a manufacturer. BlockBots are now sold in over 20 countries!"
              </p>
              <p className="text-purple-300 font-medium">— Jamie Chen, Toy Designer</p>
            </div>
            
            <div className="relative pl-8 border-l-4 border-blue-400">
              <div className="absolute w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center -left-6 top-0">
                <span className="text-xl">🎲</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Creating "Elements" - A Science Board Game</h3>
              <p className="text-gray-300 mb-2">
                "The courses on game mechanics and educational design helped me create a board game that makes 
                chemistry fun for teenagers. The user testing tools were invaluable for refining gameplay before 
                our successful Kickstarter campaign."
              </p>
              <p className="text-blue-300 font-medium">— Sophia Williams, Game Developer</p>
            </div>
          </div>
          
          <div className="text-center mt-10">
            <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-200 transition">
              Read More Stories
            </button>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="py-16 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Bring Your Ideas to Life?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of toy creators and game designers to turn your concepts into reality
          </p>
          <Link to='/login' className="px-8 py-3 bg-white text-purple-700 font-bold rounded-full text-lg hover:bg-gray-100 transition transform hover:scale-105">
            Create Your Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoandingPage;