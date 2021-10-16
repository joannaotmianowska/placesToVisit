import React from 'react';

function SinglePlace({ place, description, img, imgAlt, location, url }) {
    console.log(place, description, img, imgAlt, location, url);

    return (
        <div>{place}</div>
    )
};

export default SinglePlace;