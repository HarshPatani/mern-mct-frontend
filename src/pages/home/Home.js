import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../utils/axios";
import "./Home.scss";
const Home = () => {
  const [homeData, setHomeData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      (async () => {
        const res = await api.get();
        setHomeData(res?.data);
      })();
    } catch (error) {
      navigate("/404");
      console.log(error);
    }
  }, [navigate]);

  return (
    <div className="home">
      <h1>{homeData?.title}</h1>
      <p>{homeData?.description}</p>
      <button>Explore More !!!</button>
    </div>
  );
};

export default Home;
