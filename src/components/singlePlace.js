import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
    border-radius: 10px;
    width: 400px;
    height: 500px;
    background-color: lightblue;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    p {
        align-self: flex-start;
    }
`;

const Name = styled.h3`
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 20px;
`;

const Image = styled.img`
    height: 200px;
    width: 300px;
    padding: 20px;
`;

const Description = styled.p`
    font-size: 18px;
`;

const Location = styled.p`
    font-weight: bold;
`;

function SinglePlace({ place, description, img, imgAlt, location, url }) {

    return (
        <Wrapper>
            <Name><a href={url} target='_blank' rel='noreferrer'>{place}</a></Name>
            <Image src={img} alt={imgAlt} />
            <Description>{description}</Description>
            <Location>{location}</Location>
        </Wrapper>
    )
};

export default SinglePlace;