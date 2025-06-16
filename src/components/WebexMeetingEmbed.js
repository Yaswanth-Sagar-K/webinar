// WebexMeeting.js or WebexMeeting.tsx (if using TypeScript)
import React from "react";
import { WebexMeetingsWidget } from "@webex/widgets";
import "@webex/widgets/dist/css/webex-widgets.css";

const WebexMeeting = () => {
  const accessToken = "ODIzNWU5YWEtMWZlOC00Zjk1LWE4NGUtOGU4ZjMxZDY3NDQ3YWM4YmZlY2MtZDli_P0A1_ff5a73e5-7bfa-4755-baa7-dccc81871204"; // Replace with your real OAuth access token
  const meetingDestination = "https://meet1574.webex.com/meet1574/j.php?MTID=m208e2b9f404b84aa5fb905906a189c67"; // Can be room ID, SIP, or email

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Join Webex Meeting</h2>
      <WebexMeetingsWidget
        accessToken={accessToken}
        meetingDestination={meetingDestination}
        style={{
          width: "1000px",
          height: "600px",
          margin: "0 auto",
        }}
      />
    </div>
  );
};

export default WebexMeeting;
