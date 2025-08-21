import Image from "next/image";
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">AI Interview Scheduler</h1>
          <p className="text-xl text-gray-600">Schedule your interviews with AI assistance</p>
        </div>
        
        {/* Beautiful Button Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Primary Button</h3>
            <div className="space-y-4">
              <Button className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                🚀 Get Started Now
              </Button>
              <Button variant="secondary" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-gray-100 to-gray-200 hover:from-gray-200 hover:to-gray-300 text-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                📅 Schedule Interview
              </Button>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Button Variants</h3>
            <div className="space-y-4">
              <Button variant="outline" className="w-full h-12 text-lg font-semibold border-2 border-blue-500 text-blue-600 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                ✨ Learn More
              </Button>
              <Button variant="destructive" className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                🗑️ Delete Account
              </Button>
            </div>
          </div>
        </div>
        
        {/* Interactive Buttons */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
          <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Interactive Buttons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="h-16 text-lg font-bold bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:rotate-1">
              🎯 Start Interview
            </Button>
            <Button variant="ghost" className="h-16 text-lg font-bold text-purple-600 hover:bg-purple-50 hover:text-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-rotate-1">
              📊 View Analytics
            </Button>
            <Button variant="link" className="h-16 text-lg font-bold text-orange-600 hover:text-orange-700 underline decoration-2 underline-offset-4 transition-all duration-300 transform hover:scale-105">
              🔗 Documentation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
