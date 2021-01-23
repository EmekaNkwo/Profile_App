import ProfileData from "./ProfileData";
import axios from "axios";
import React, { useState, useEffect } from "react";

function App() {
  const [profiles, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProfiles = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://api.enye.tech/v1/challenge/records"
      );
      let profileList = [];
      response.data.records.profiles.map((element) =>
        profileList.push(Object.values(element))
      );
      setProfile(profileList);
      setLoading(false);
    };
    fetchProfiles();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <h3 style={{ textAlign: "center" }}>Profiles loading...</h3>
      ) : (
        <ProfileData profiles={profiles} />
      )}
    </div>
  );
}

export default App;
