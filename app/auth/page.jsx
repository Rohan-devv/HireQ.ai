'use client';

export default function AuthPage() {
  const handleGoogleSignIn = () => {
    // Handle Google authentication here
    console.log('Google sign-in clicked');
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      {/* Logo */}
      <div className="mb-8 text-center">
        <div className="flex items-center justify-center mb-2">
          <div className="relative">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
              </svg>
            </div>
            {/* Sound waves */}
            <div className="absolute -right-1 top-1/2 transform -translate-y-1/2">
              <div className="flex space-x-1">
                <div className="w-1 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                <div className="w-1 h-3 bg-blue-500 rounded-full animate-pulse delay-100"></div>
                <div className="w-1 h-4 bg-blue-600 rounded-full animate-pulse delay-200"></div>
              </div>
            </div>
          </div>
          <div className="ml-3">
            <span className="text-2xl font-bold text-blue-800">AI</span>
            <span className="text-2xl font-bold text-blue-500">cruiter</span>
          </div>
        </div>
      </div>

      {/* Central Illustration */}
      <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mb-8 max-w-2xl w-full">
        <div className="flex items-center justify-between">
          {/* Left Side - Candidate with Resume */}
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-20 h-24 bg-white rounded border-2 border-blue-200 p-2">
              <div className="w-4 h-4 bg-gray-300 rounded-full mb-1"></div>
              <div className="space-y-1">
                <div className="w-12 h-1 bg-gray-300 rounded"></div>
                <div className="w-10 h-1 bg-gray-300 rounded"></div>
                <div className="w-8 h-1 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>

          {/* Center - Video Call Monitor */}
          <div className="flex flex-col items-center">
            <div className="w-32 h-24 bg-white rounded-lg border-2 border-blue-300 p-2 mb-2">
              <div className="w-full h-full bg-blue-100 rounded flex items-center justify-center">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            {/* Video Controls */}
            <div className="flex space-x-2">
              <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1H3zM6.293 9.293a1 1 0 011.414 0L10 11.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M7 4a3 3 0 016 0v4a3 3 0 11-6 0V4zm4 10.93A7.001 7.001 0 0017 8a1 1 0 10-2 0A5 5 0 015 8a1 1 0 00-2 0 7.001 7.001 0 006 6.93V17H6a1 1 0 100 2h8a1 1 0 100-2h-3v-2.07z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="w-6 h-6 bg-gray-400 rounded-full flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Right Side - Interviewers */}
          <div className="flex flex-col space-y-3">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">CREATIVE DIRECTOR</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-green-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">PROJECT MANAGER</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
              <span className="text-xs font-medium text-gray-700">ART DIRECTOR</span>
            </div>
          </div>
        </div>

        {/* Decorative Plant */}
        <div className="absolute bottom-4 right-4">
          <div className="w-8 h-8 bg-green-400 rounded-full"></div>
          <div className="w-6 h-6 bg-purple-400 rounded-full -mt-2 ml-2"></div>
        </div>
      </div>

      {/* Welcome Text */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">
          Welcome to AIcruiter
        </h1>
        <p className="text-lg text-gray-600">
          Sign In With Google Authentication
        </p>
      </div>

      {/* Google Sign In Button */}
      <button
        onClick={handleGoogleSignIn}
        className="flex items-center space-x-3 bg-white border-2 border-gray-300 rounded-lg px-6 py-3 hover:border-gray-400 hover:shadow-md transition-all duration-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
        </svg>
        <span className="text-gray-700 font-medium">Sign in with Google</span>
      </button>
    </div>
  );
}