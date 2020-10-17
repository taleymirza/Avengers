import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { getAvengerDetail } from "../Avenger.service";

const AvengerItemDetail = () => {
  const [avenger, updateAvenger] = useState(null);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getAvengerDetail(id).then((avengers) => updateAvenger(avengers[0]));
  }, [id]);

  return avenger ? (
    <>
      <button onClick={() => history.goBack()}>Back</button>
      <h1>{avenger.name}</h1>
      <img
        src={`${avenger.thumbnail.path}.${avenger.thumbnail.extension}`}
        alt={avenger.name}
      />
      <p>{avenger.description}</p>
    </>
  ) : (
    <h1>Loading ....</h1>
  );
};

export default AvengerItemDetail;
