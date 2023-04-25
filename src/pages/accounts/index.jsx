import React from "react";
import { getUsersData } from "../../utils/hooks/dbUsersData";

function Accounts() {
  const { isLoading, isError, data } = getUsersData(
    "ec6b866e-cf09-4943-94b4-d56d2c1339a1"
  );

  return (
    <div>
      <h1>Accounts Component</h1>
      <div>{data?.data?.name}</div>
    </div>
  );
}

export default Accounts;
