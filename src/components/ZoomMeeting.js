// import React, { useEffect } from "react";
// import { ZoomMtg } from "@zoomus/websdk";

// ZoomMtg.setZoomJSLib("https://source.zoom.us/2.18.0/lib", "/av");
// ZoomMtg.preLoadWasm();
// ZoomMtg.prepareJssdk();

// const ZoomMeeting = () => {
//   useEffect(() => {
//     const meetConfig = {
//       apiKey: "eyJzdiI6IjAwMDAwMiIsImFsZyI6IkhTNTEyIiwidiI6IjIuMCIsImtpZCI6IjExYjA2YWM5LWI1ODctNDUwYy04ZTc4LWY2N2QxYzk5ZDQzNiJ9.eyJhdWQiOiJodHRwczovL29hdXRoLnpvb20udXMiLCJ1aWQiOiJHc2pscjMwaVEzMlFuY2NGRjktZzNRIiwidmVyIjoxMCwiYXVpZCI6IjA5NjdiMzJhZGY5M2M1ZDJmODg4YmJkOTEyZGQ2ZmExYjEzZjU4MTk5NmE5MThiZDVhNWRmZTJkOTVhM2NhYjciLCJuYmYiOjE3NDk4MTk0OTUsImNvZGUiOiJmaEpQbEhYOFJibXNuUi1uQ2xZMlJBcWRrdjdKbjVEQTYiLCJpc3MiOiJ6bTpjaWQ6UkNwZjJHSXNRV1czUmRVTHZKZXRKQSIsImdubyI6MCwiZXhwIjoxNzQ5ODIzMDk1LCJ0eXBlIjozLCJpYXQiOjE3NDk4MTk0OTUsImFpZCI6IlhwNWR3dXJUU1ZteVpFdVB6Vlk1MmcifQ.4VmFTu64Jr0SF8VGGwFTRzJZYy67Hzrq7nfdLMtUAGLOFN5Us7FqpJOk3fQp-yG8zVmgAWOC6KSe6DlzeX56vg",
//       meetingNumber: "85296066067",
//       leaveUrl: "http://localhost:3000", // Where user is taken after leaving
//       userName: "React User",
//       passWord: "h4WPkq",
//       role: 0, // 0 = attendee, 1 = host
//     };

//     ZoomMtg.init({
//       leaveUrl: meetConfig.leaveUrl,
//       isSupportAV: true,
//       success: () => {
//         ZoomMtg.join({
//           signature: "GENERATED_SIGNATURE", // See note below
//           sdkKey: meetConfig.apiKey,
//           meetingNumber: meetConfig.meetingNumber,
//           passWord: meetConfig.passWord,
//           userName: meetConfig.userName,
//           success: () => {
//             console.log("Zoom meeting joined successfully");
//           },
//           error: (err) => {
//             console.error("Zoom join error", err);
//           },
//         });
//       },
//       error: (err) => {
//         console.error("Zoom init error", err);
//       },
//     });
//   }, []);

//   return <div id="zmmtg-root"></div>;
// };

// export default ZoomMeeting;
