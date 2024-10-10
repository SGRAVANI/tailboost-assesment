import axios from "axios";

const updateUserProfile = async (userId, updatedData) => {
  try {
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Imk3a3FpbGFVV0Z3OEw0R0pheURxTyJ9.eyJpc3MiOiJodHRwczovL2Rldi04Mm1zeTN1bTdrMDNjbmd2LnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJJYkFPem44VFNqeEU2ZGlnSFNyZFZHNVl0Smk0Y3pTdEBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtODJtc3kzdW03azAzY25ndi51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcyODU2NTU4NCwiZXhwIjoxNzI4NjUxOTg0LCJndHkiOiJjbGllbnQtY3JlZGVudGlhbHMiLCJhenAiOiJJYkFPem44VFNqeEU2ZGlnSFNyZFZHNVl0Smk0Y3pTdCJ9.eu8jPhMYkVxUGTFziej-qrlEXtsMoZJKqiWVnUSsz1yVcdjTuom5-WOZ4Y1XAgIajW9sGyM4PQZ7M2ClMTZ03Kt0-adIvunRt9SDeW4SH9DALUuTVYsfcrb6lz72zWd_iuUNgskzmF87k9J_VbZiHWsiTLhjNHaYs85WdAhOqwQ3-2g783XRbWglC-HIOXGD0p53iQxp0xk2v-FH9n3nq8KmJDi6TtPgT319-i4zKp3g72-RXN5lwdpB4yOSGdInL8IS80O68yEMHiT7UMfE1JNTOLGW0TkzJMdGoItHicKsyoV3-WN_l4hcY1reFBEvPZIasQNZ8GZF27HZ3nIxmg"; // Replace with the token you received

    const response = await axios.patch(
      `https://localhost:5173/api/v2/users/${userId}`, // Replace YOUR_DOMAIN with your Auth0 domain
      updatedData, // The data you want to update (e.g., { email: 'newemail@example.com' })
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
import React from 'react'

function updateProfile() {
  return (
    <div>updateProfile</div>
  )
}

export default updateProfile