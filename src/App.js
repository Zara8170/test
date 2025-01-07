import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userList, setUserList] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http:/15.164.52.27:8080/api/userlist"
        );
        setUserList(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const userlist = userList
    ? userList.map((t) => (
        <div>
          아이디:{t.username} 비밀번호:{t.password}
          <hr />
        </div>
      ))
    : null;

  return (
    <>
      hello
      {userlist}
    </>
  );
}

export default App;
