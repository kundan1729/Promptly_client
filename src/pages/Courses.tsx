// Type definitions
type Lesson = {
  id: number;
  title: string;
  article: string;
  task: string;
  aiFeedback: boolean;
};

type Module = {
  id: number;
  title: string;
  lessons: Lesson[];
};

type Course = {
  id: number;
  courseId: string;
  title: string;
  rating: number;
  students: number;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels' | string;
  price: number;
  originalPrice: number;
  image: string;
  description: string;
  modules: Module[];
  popular?: boolean;
};

import React, { useState, useEffect } from 'react';
import { useNavigate, Link, useParams } from 'react-router-dom';
import { GraduationCap, Clock, Users, Star, Play, CheckCircle } from 'lucide-react';

const categories = [
  { name: 'All Courses', count: 6, active: true },
  { name: 'Beginner', count: 2, active: false },
  { name: 'Intermediate', count: 2, active: false },
  { name: 'Advanced', count: 1, active: false },
  { name: 'Business', count: 1, active: false }
];



const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const { courseId } = useParams<{ courseId?: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/src/data/courses.json')
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error('Failed to load courses:', err));
  }, []);

  // If courseId param is present, show detail view for that courseId
  React.useEffect(() => {
    if (courseId && courses.length > 0) {
      const found = courses.find(c => c.courseId === courseId);
      setSelectedCourse(found || null);
    } else if (!courseId) {
      setSelectedCourse(null);
    }
  }, [courseId, courses]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Prompt Engineering Courses
            </h1>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Level up your AI skills with our comprehensive courses. Learn from industry experts 
              and master the techniques that top prompt engineers use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Browse Courses
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Free Preview
              </button>
            </div>
          </div>
        </div>
      </div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Course Categories */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  category.active
                    ? 'bg-purple-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-300 hover:border-purple-300 hover:text-purple-600'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
        {/* Courses Grid or Detailed View */}
        {selectedCourse ? (
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
            <button className="mb-4 text-purple-600 hover:underline" onClick={() => window.history.back()}>&larr; Back to Courses</button>
            <div className="flex flex-col md:flex-row gap-8">
              <img src={selectedCourse.image} alt={selectedCourse.title} className="w-full md:w-64 h-48 object-cover rounded-lg" />
              <div>
                <h2 className="text-2xl font-bold mb-2">{selectedCourse.title}</h2>
                <div className="flex items-center space-x-2 mb-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedCourse.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    selectedCourse.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    selectedCourse.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {selectedCourse.level}
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">{selectedCourse.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{selectedCourse.students?.toLocaleString?.() ?? selectedCourse.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{selectedCourse.duration}</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{selectedCourse.description}</p>
                <div className="mb-4">
                  <span className="text-2xl font-bold text-gray-900">₹{selectedCourse.price}</span>
                  <span className="text-sm text-gray-500 line-through ml-2">₹{selectedCourse.originalPrice}</span>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Course Modules & Lessons</h3>
              {selectedCourse.modules.map((module) => (
                <div key={module.id} className="mb-6">
                  <h4 className="text-lg font-bold text-purple-700 mb-2">{module.title}</h4>
                  <div className="space-y-4">
                    {module.lessons.map((lesson) => (
                      <div key={lesson.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center mb-2">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="font-semibold">{lesson.title}</span>
                        </div>
                        <div className="mb-2">
                          <span className="font-medium text-gray-700">Article:</span> {lesson.article}
                        </div>
                        <div className="mb-2">
                          <span className="font-medium text-gray-700">Task:</span> {lesson.task}
                        </div>
                        {lesson.aiFeedback && (
                          <div className="text-sm text-blue-600">AI Feedback enabled for this task</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {courses.map((course) => (
                <Link
                  key={course.courseId}
                  to={`/courses/${course.courseId}`}
                  className="block"
                  style={{ textDecoration: 'none', color: 'inherit' }}
                >
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                    {course.popular && (
                      <div className="bg-gradient-to-r from-orange-400 to-red-500 text-white text-center py-2 text-sm font-semibold">
                        🔥 Most Popular
                      </div>
                    )}
                    <div className="relative">
                      <img 
                        src={course.image} 
                        alt={course.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                        <button className="bg-white text-gray-900 p-3 rounded-full hover:bg-gray-100 transition-colors" type="button" tabIndex={-1} onClick={e => e.preventDefault()}>
                          <Play className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                          course.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                          course.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          course.level === 'Advanced' ? 'bg-red-100 text-red-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {course.level}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-medium">{course.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{course.students?.toLocaleString?.() ?? course.students}</span>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">What you'll learn:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {(() => {
                            const lessonTitles = course.modules
                              ? course.modules.flatMap(module => module.lessons.map(lesson => lesson.title))
                              : [];
                            return lessonTitles.slice(0, 3).map((title, index) => (
                              <li key={index} className="flex items-center space-x-2">
                                <CheckCircle className="w-3 h-3 text-green-500" />
                                <span>{title}</span>
                              </li>
                            ));
                          })()}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-gray-900">₹{course.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">₹{course.originalPrice}</span>
                        </div>
                      </div>
                      <button
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all"
                        type="button"
                        style={{ pointerEvents: 'none' }}
                        aria-label={`Enroll in ${course.title}`}
                      >
                        Enroll Now
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {/* Learning Path Section */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8 mb-16">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Recommended Learning Path</h2>
                <p className="text-lg text-gray-600">Follow our structured path to become a prompt engineering expert</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                  { step: 1, title: 'Foundations', description: 'Start with basics', color: 'from-green-500 to-green-600' },
                  { step: 2, title: 'Techniques', description: 'Learn core methods', color: 'from-blue-500 to-blue-600' },
                  { step: 3, title: 'Specialization', description: 'Choose your focus', color: 'from-purple-500 to-purple-600' },
                  { step: 4, title: 'Mastery', description: 'Advanced applications', color: 'from-orange-500 to-orange-600' }
                ].map((step, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">50K+</div>
                <div className="text-gray-600">Students Enrolled</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">4.8</div>
                <div className="text-gray-600">Average Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Completion Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  );
};

export default Courses;
