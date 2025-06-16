import React, { useEffect, useState } from "react";
import { WebexMeetingsWidget } from "@webex/widgets";
import "@webex/widgets/dist/css/webex-widgets.css";

// Constants
const CLIENT_ID = "C9f3720567ab38d0c915ecc3463f8cecf17e0abfd07303ae90fa5d02f82b4c7a0";
const REDIRECT_URI = "http://localhost:3000/webex";
const SCOPES = "spark:all meeting:schedules_read meeting:schedules_write";
const jwtToken =
  "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ5YXN3YW50aHNhZ2FyMDMwN0BnbWFpbC5jb20iLCJleHAiOjE3NTAwOTg4NDksImlhdCI6MTc1MDA2Mjg0OX0.gtrVePgdBkG1GG1YWjid6W4e2pmOpTajgxWzgbqYbWw";

// Replace this with the destination email or meeting link from your database
const meetingDestination = "https://meet1574.webex.com/meet1574/j.php?MTID=m208e2b9f404b84aa5fb905906a189c67"; // Can be email, SIP, or meeting link

const WebexMeeting = () => {
  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code) {
      fetch(`http://localhost:8080/api/meetings/token?code=${code}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${jwtToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.access_token) {
            console.log(data.access_token);
            setAccessToken(data.access_token);

            localStorage.setItem("webex_token", data.access_token);
            window.history.replaceState({}, document.title, "/webex");
          } else {
            console.error("No access token returned");
          }
        })
        .catch((err) => console.error("Token exchange error:", err));
    } else {
      const token = localStorage.getItem("webex_token");
      if (token && token !== "undefined" && token !== "null") {
        setAccessToken(token);
      } else {
        localStorage.removeItem("webex_token");
        // Start OAuth flow
        const authUrl = `https://webexapis.com/v1/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=${SCOPES}&state=12345`;
        window.location.href = authUrl;
      }
    }
  }, []);

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Join Webex Meeting</h2>

      {accessToken ? (
        <WebexMeetingsWidget
          accessToken={accessToken}
          meetingDestination={meetingDestination}
          style={{ width: "1000px", height: "600px", margin: "0 auto" }}
        />
      ) : (
        <p>Redirecting to Webex login...</p>
      )}
    </div>
  );
};

export default WebexMeeting;
