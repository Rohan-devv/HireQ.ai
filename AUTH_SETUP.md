# Authentication Setup Guide

## Issues Fixed

The authentication page had several problems that prevented sign-in from working:

1. **Missing Supabase import** - The page was trying to use `supabase.auth.signInWithOAuth()` without importing the Supabase client
2. **Incomplete authentication logic** - The actual Google sign-in was commented out and replaced with placeholder code
3. **Missing auth callback handling** - No page to handle the OAuth redirect after Google authentication
4. **Poor error handling** - Limited error feedback for users

## What Was Fixed

1. ✅ Added proper Supabase import to the auth page
2. ✅ Implemented complete Google OAuth authentication flow
3. ✅ Created auth callback page (`/auth/callback`) to handle OAuth redirects
4. ✅ Added proper error handling and user feedback
5. ✅ Created dashboard page for authenticated users
6. ✅ Added sign-out functionality
7. ✅ **NEW: Created comprehensive authentication provider** that handles user existence checks and database operations
8. ✅ **NEW: Added automatic user profile creation** in custom users table
9. ✅ **NEW: Implemented user existence logic** - checks if user exists, otherwise saves to database

## Required Setup

### 1. Environment Variables

Create a `.env.local` file in your project root with:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 2. Database Setup

**IMPORTANT**: Run the SQL commands from `database_schema.sql` in your Supabase SQL Editor:

1. Go to your Supabase project dashboard
2. Navigate to SQL Editor
3. Copy and paste the contents of `database_schema.sql`
4. Click "Run" to execute the commands

This will create:
- `users` table for storing user profiles
- `interviews` table for future interview scheduling
- Proper Row Level Security (RLS) policies
- Automatic triggers for user creation and updates

### 3. Supabase Project Configuration

1. Go to your Supabase project dashboard
2. Navigate to Authentication > Settings
3. Add your domain to "Site URL" (e.g., `http://localhost:3000`)
4. Add redirect URLs:
   - `http://localhost:3000/auth/callback`
   - `http://localhost:3000/dashboard`

### 4. Google OAuth Setup

1. In Supabase dashboard, go to Authentication > Providers
2. Enable Google provider
3. Add your Google OAuth credentials:
   - Client ID
   - Client Secret
4. Add authorized redirect URIs in Google Cloud Console:
   - `https://your-project.supabase.co/auth/v1/callback`

## How It Works Now

### Authentication Flow

1. User clicks "Sign in with Google" button
2. Google OAuth flow is initiated via Supabase
3. User authenticates with Google
4. Google redirects back to `/auth/callback`
5. Callback page verifies the session
6. **NEW: AuthProvider automatically checks if user exists in database**
7. **NEW: If user doesn't exist, automatically saves new user profile**
8. **NEW: If user exists, updates last sign-in timestamp**
9. User is redirected to `/dashboard` if successful
10. Dashboard shows user profile info and sign-out option

### User Existence Logic

The `AuthProvider` component automatically handles:

- **Checking if user exists**: Queries the `users` table for existing user ID
- **Saving new users**: Automatically creates user profile with:
  - User ID (from Supabase Auth)
  - Email address
  - Full name (from Google profile or email)
  - Avatar URL (from Google profile)
  - Timestamps (created, updated, last sign in)
  - Sign-in count
- **Updating existing users**: Updates last sign-in time and timestamp
- **Managing state**: Provides user and userProfile data throughout the app

## Database Schema

The system creates a `users` table with:

```sql
- id (UUID, Primary Key, references auth.users)
- email (TEXT, unique)
- full_name (TEXT)
- avatar_url (TEXT)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)
- last_sign_in (TIMESTAMP)
- sign_in_count (INTEGER)
- is_active (BOOLEAN)
- role (TEXT, default 'user')
- preferences (JSONB)
```

## Testing

1. Start your development server: `npm run dev`
2. Navigate to `/auth`
3. Click "Sign in with Google"
4. Complete Google authentication
5. You should be redirected to the dashboard
6. **NEW: Check your Supabase database** - a new user record should be created in the `users` table
7. **NEW: Sign out and sign back in** - the user should be found and last sign-in updated

## Troubleshooting

- Check browser console for error messages
- Verify environment variables are set correctly
- Ensure Supabase project is properly configured
- Check that Google OAuth credentials are valid
- Verify redirect URLs match between Supabase and Google Cloud Console
- **NEW: Check if database schema was created correctly**
- **NEW: Verify RLS policies are enabled on the users table**
- **NEW: Check Supabase logs for database operation errors**

## Files Created/Modified

- ✅ `app/provider.jsx` - New authentication provider with user existence logic
- ✅ `app/layout.js` - Updated to wrap app with AuthProvider
- ✅ `app/dashboard/page.jsx` - Updated to use authentication provider
- ✅ `app/auth/callback/page.jsx` - Recreated auth callback page
- ✅ `database_schema.sql` - Database schema for users and interviews
- ✅ `AUTH_SETUP.md` - Updated setup guide

## Next Steps

After setting up authentication:

1. **Customize user profiles** - Add more fields to the users table
2. **Implement interview scheduling** - Use the interviews table structure
3. **Add user roles and permissions** - Implement admin and interviewer roles
4. **Create user settings page** - Allow users to update their preferences
5. **Add email notifications** - Send confirmation emails for interviews
