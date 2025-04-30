import React, { useState } from 'react';
import heroImg from "../../assets/TutorImg.webp"
import { Search, Target, Users, BookOpen, Award } from 'lucide-react';

const features = [
  {
    icon: <Target className="w-12 h-12 text-blue-600" />,
    title: "Personalized Learning",
    description: "Tailored tutoring experiences matched to your unique learning style and goals."
  },
  {
    icon: <Users className="w-12 h-12 text-green-600" />,
    title: "Expert Tutors",
    description: "Carefully vetted professionals with proven expertise in their subjects."
  },
  {
    icon: <BookOpen className="w-12 h-12 text-purple-600" />,
    title: "Comprehensive Support",
    description: "Tutoring across all subjects and skill levels, from academics to professional development."
  },
  {
    icon: <Award className="w-12 h-12 text-orange-600" />,
    title: "Guaranteed Quality",
    description: "Commitment to excellence with verified tutor credentials and student success."
  }
];

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const popularSubjects = [
    'Mathematics', 'Science', 'Computer Science', 
    'Language', 'Physics', 'Chemistry'
  ];

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Master Any Subject with the Best Tutors Near You!
            </h1>
            
            <p className="text-lg text-gray-600 mb-6">
              Find your perfect tutor and unlock your full learning potential.
            </p>
            
            {/* Search Bar */}
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input 
                type="text" 
                placeholder="Search for a subject"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Popular Subjects */}
            <div className="mt-4">
              <p className="text-sm text-gray-600 mb-2">Popular Subjects:</p>
              <div className="flex flex-wrap gap-2">
                {popularSubjects.map((subject) => (
                  <span 
                    key={subject}
                    className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          {/* Right Side - Image */}
          <div className="hidden md:flex justify-center items-center">
            <img 
              src={heroImg}
              alt="Tutoring Illustration" 
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
      {/*---AboutUs---*/}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Content Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="bg-blue-100 inline-block px-4 py-2 rounded-full text-blue-800 text-4xl font-bold">
                About Tutlabs
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                Empowering Learning, One Tutor at a Time
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We connect students with the best local tutors, making quality education accessible in your city. Our platform allows you to find expert tutors for any subject, ensuring personalized learning experiences. Whether you need help with academics or skill development, we make tutoring simple and effective. Join us to learn, grow, and achieve your goals with the right guidance!
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-8 text-center">
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-blue-600">5000+</h3>
              <p className="text-gray-600 mt-2">Tutors Registered</p>
            </div>
            <div className="bg-green-50 p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-green-600">95%</h3>
              <p className="text-gray-600 mt-2">Student Satisfaction</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-purple-600">50+</h3>
              <p className="text-gray-600 mt-2">Subjects Covered</p>
            </div>
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-4xl font-bold text-orange-600">10000+</h3>
              <p className="text-gray-600 mt-2">Students Helped</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;