
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

function AccountSetting() {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  let [nickName,setNickName]=useState('')
  let [name,setName]=useState('')
  useEffect(() => {

    
    const fetchTokenAndUpdateProfile = async () => {
      if (isAuthenticated) {
        try {
            console.log(user)
          const token = await getAccessTokenSilently({
            audience: 'https://dev-82msy3um7k03cngv.us.auth0.com/api/v2/',
            scope: 'update:users read:users',
          });

          console.log('Access Token:', token); // Log the token

          const updatedData = { nickname: "a1b2" };
          await updateUserProfile( user.sub, updatedData, token);
          
        } catch (error) {
          console.error('Error fetching access token', error);
        }
      }
    };

    const updateUserProfile = async (userId, updatedData, token) => {
      try {
        console.log("Authorization Header:", `Bearer ${token}`); // Log the token in header

        const response = await axios.patch(
          `https://dev-82msy3um7k03cngv.us.auth0.com/api/v2/${userId}`, 
          updatedData,  
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        console.log("User updated successfully", response.data);
      } catch (error) {
        console.error("Error updating user:", error.response?.data || error.message);
      }
    };

    fetchTokenAndUpdateProfile(); 
  }, [user, isAuthenticated, getAccessTokenSilently]);

  return (
    <div>
      <p>Hello: {user ? user.name : "Guest"}</p>
      <input type="text" placeholder='enter updated nick name' value={user.nickname} onChange={(e)=>{}}/>
    </div>
  );
}

export default AccountSetting;