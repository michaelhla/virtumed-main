import React from "react";

import { DoctorService } from "../../server/databaseservice";
import ClassList from "../classlist/classlist"

import { useQuery } from 'react-query'


function ScreenClassList() {
  const { data, status } = useQuery("doctors", DoctorService.getAll);

  return (
    <>
      <h1>
        Doctors
      </h1>
      <div>{status === "success" && <ClassList data={data} />}</div>
    </>
  );
}

export default ScreenClassList;