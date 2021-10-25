import React from 'react';
import Loader from "react-loader-spinner";
import './Spinner.scss';

const Spinner = () => {
  const style = { position: "fixed", top: "45%", left: "50%", transform: "translate(-50%, -50%)" };

  return (
    <div className="loader-container">
      <Loader style={style} className="loader-spinner" type="Circles" color="#176dde" height={80} width={80}/>
    </div>
  );
}

export default Spinner;