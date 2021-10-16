import React, {useState, useEffect, useCallback} from 'react';
import styled from 'styled-components';

import SinglePlace from './singlePlace';

const Wrapper = styled.div`
    padding: 200px;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: 50px;
`;

function PlacesList () {
    const [places, setPlaces] = useState(null);
    const [error, setError] = useState(null);

    const fetchAndSavePlaces = (useCallback(async () => {
        const url = 'https://vanillajsacademy.com/api/places.json';

        try {
            const response = await fetch(url);
            const data = await response.json();
            setPlaces(data);
        } catch(error) {
            setError(true);
        }
    }, [setPlaces, setError]));

    useEffect(() => {
        fetchAndSavePlaces();
    }, [fetchAndSavePlaces]);

    if (error) {
        return <p>Ooops! Something went wrong, please try again.</p>
    }

    if (!places) {
        return <p>Loading...</p>
    }

    return (
        <Wrapper data-testid='places-list'>
            {
                places.map((place) => {
                    return <SinglePlace key={place.id} {...place} />
                })
            }
        </Wrapper>
    )
}

export default PlacesList;