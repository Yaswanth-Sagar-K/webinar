import { useEffect, useRef } from "react";

function JitsiMeet() {
  const jitsiContainerRef = useRef(null);
  const apiRef = useRef(null);

  useEffect(() => {
    // Prevent re-initialization
    if (window.JitsiMeetExternalAPI) {
      createMeeting();
    } else {
      const script = document.createElement("script");
      script.src = "https://meet.jit.si/external_api.js";
      script.async = true;
      script.onload = createMeeting;
      document.body.appendChild(script);
    }

    // Cleanup to destroy meeting when component unmounts
    return () => {
      if (apiRef.current) {
        apiRef.current.dispose();
      }
    };
  }, []);

  const createMeeting = () => {
    const domain = "meet.jit.si";
    const options = {
      roomName: "WebinarDemoRoomThisIsTheIniialOneLetsDoIt",
      parentNode: jitsiContainerRef.current,
      width: "100%",
      height: 600,
    };
    apiRef.current = new window.JitsiMeetExternalAPI(domain, options);
  };

  return (
    <div>
      <h2>Jitsi Meet webinar</h2>
      <div
        ref={jitsiContainerRef}
        style={{ height: "600px", width: "100%" }}
      ></div>
    </div>
  );
}

export default JitsiMeet;
