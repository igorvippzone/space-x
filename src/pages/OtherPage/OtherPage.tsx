import React from "react";
import { useLocation } from "react-router-dom";

const OtherPage: React.FC = () => {
  const location = useLocation();

  return <div>{location.pathname}</div>;
};

export default OtherPage;
