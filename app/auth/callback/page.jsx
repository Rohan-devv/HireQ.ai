'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '../../../services/supabaseClient';

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession();
        
        if (error) {
          console.error('Error getting session:', error);
          router.push('/auth?error=auth_failed');
          return;
        }

        if (data.session) {
          console.log('Authentication successful:', data.session.user);
          // Redirect to dashboard or main page after successful authentication
          router.push('/dashboard');
        } else {
          console.log('No session found, redirecting to auth page');
          router.push('/auth');
        }
      } catch (error) {
        console.error('Unexpected error in auth callback:', error);
        router.push('/auth?error=callback_failed');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-8">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Completing Authentication...
        </h2>
        <p className="text-gray-600">
          Please wait while we complete your sign-in process.
        </p>
      </div>
    </div>
  );
}
