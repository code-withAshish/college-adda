import React from "react";
import useRemoteData from "../components/useRemoteData";

const Home = () => {
  const { data, loading, error } = useRemoteData("/api/Alumni");
  return (
    <>
      <div>{JSON.stringify(data)}</div>
      <div>{String(loading)}</div>
      <div>{JSON.stringify(error)}</div>
    </>
  );
};

export default Home;
