import { useEffect, useState } from "react";
import UserItem from "./UserItem";
import Spinner from "../layouts/Spinner";

const UserResults = () => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
      },
    });

    const data = await response.json();
    setResults(data);
    setLoading(false);
  };

  return (
    <div className="text-center grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {loading ? (
        <Spinner />
      ) : (
        results.map((user) => <UserItem key={user.id} user={user} />)
      )}
    </div>
  );
};

export default UserResults;
