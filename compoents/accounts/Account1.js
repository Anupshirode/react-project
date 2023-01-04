import React, { useEffect, useState } from "react";
import AccData from "./AccData1";
import AccoundList from "./AccountList1";

const Account = () => {
  const [accdata, setAccdata] = useState({});
  const [user, setUser] = useState("");
  useEffect(() => {
    setAccdata(JSON.parse(localStorage.getItem("accountsPage")));
  }, []);

  const selectedUser = (data) => {
    setUser(data);
  };

  return (
    <div>
      <AccoundList accdata={accdata} data={selectedUser} />
      <br />
      <br />
      <AccData activeUser={user} />
    </div>
  );
};

export default Account1;
