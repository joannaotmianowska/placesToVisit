import { render, screen } from '@testing-library/react';
import SinglePlace from './singlePlace';

describe('Single place section', () => {
    test('show place details', () => {
        const mockedPlace = {
            place: 'this is place name',
            description: 'this is place description',
            img: 'image src',
            imgAlt: 'this is image alt',
            location: 'this is location',
            url: 'https://mockedurl.com'
        }

        render(<SinglePlace {...mockedPlace} />);

        expect(screen.getByText(mockedPlace.place)).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', mockedPlace.url);

        const picture = screen.getByRole('img');
        expect(picture).toHaveAttribute('src', mockedPlace.src);
        expect(picture).toHaveAttribute('alt', mockedPlace.imgAlt);

        expect(screen.getByText(mockedPlace.description)).toBeInTheDocument();
        expect(screen.getByText(mockedPlace.location)).toBeInTheDocument();
    });
});