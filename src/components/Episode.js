import React from "react";

function Episode(props) {
  console.log(props)
  let { myEpisode } = props;

  return (
    <div>
      Episode {myEpisode.number} - {myEpisode.name}
    </div>
  );
}

export default Episode;
