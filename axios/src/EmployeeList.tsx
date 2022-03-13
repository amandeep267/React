import axios from "axios";
import React, { useEffect, useState } from "react";
interface propsType {
  firstName: string;
  lastName: string;
  region: string;
}
function EmployeeList() {
  const [employeeData, setData] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      await axios
        .get("http://localhost:3000/Employees")
        .then((res) => {
          setData(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getData();
  }, []);
  const cards = employeeData.map((element: propsType) => {
    return (
      <>
        {" "}
        <div>
          <p>First Name:{element.firstName}</p>
          <p>Last Name:{element.lastName}</p>
          <p>region:{element.region}</p>
        </div>
        <br></br>
      </>
    );
  });

  return <>{cards}</>;
}

export default EmployeeList;
