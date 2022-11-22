const backendUrl = window.location.host.includes("localhost")
  ? "http://localhost:4000/"
  : "https://music-backend.onrender.com";

export default backendUrl;
