import { useEffect, useState } from "react";
import { fetchUser } from "../../lib/fetchUser";

const UserProfile = () => {
  const [userId, setUserId] = useState();

  const fetchUserId = async () => {
    const data = await fetchUser();
    setUserId(data.id);
  };

  useEffect(() => {
    fetchUserId();
  }, []);
  return (
    <>
      <p>User ID: {userId}</p>
    </>
  );
};

export default UserProfile;
