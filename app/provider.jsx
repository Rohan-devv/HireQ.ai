import React, { useEffect, useState } from 'react'

import { supabase } from '../services/supabaseClient';

function Provider({ children }) {

    useEffect(() => {
        CreateNewUser();
    }, []);

    const CreateNewUser = async() => {
        // Check if user already exist
        supabase.auth.getUser().then(async ({ data: { user } }) => {
            let { data: Users, error } = await supabase
                .from('Users')
                .select("*")
                .eq('email', user?.email);

            console.log(Users);
        });

        // If not then create new user
    };

    return (
        <div>{children}</div>
    )
}

export default Provider
