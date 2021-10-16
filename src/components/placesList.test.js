import { render, screen, waitFor } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import '@testing-library/jest-dom';
import PlacesList from './placesList';

const url = 'https://vanillajsacademy.com/api/places.json';

const mockedPlacesList = [
    {
        place: 'name 1',
        description: 'd 1',
        img: 'img 1',
        imgAlt: 'img alt 1',
        location: 'loc 1',
        url: 'url 1',
        id: 'uiashfdsjkdhfsa'
    },
    {
        place: 'name 2',
        description: 'd 2',
        img: 'img 2',
        imgAlt: 'img alt 2',
        location: 'loc 2',
        url: 'url 2',
        id: 'ksfaskjdjkdfhjdfkhs'
    },
]

const server = setupServer(
    rest.get(url, (req, res, ctx) => {
      return res(ctx.json(mockedPlacesList))
    }),
  )

describe('Places list', () => {
    beforeAll(() => server.listen());
    afterEach(() => server.resetHandlers());
    afterAll(() => server.close());

    test('shows places list when data is fetched and loading when fetch is in progress', async () => {
        render(<PlacesList />);

        expect(screen.getByTestId('loading-info')).toBeInTheDocument();

        await waitFor(() => screen.getAllByRole('heading'));

        mockedPlacesList.forEach((element) => {
            expect(screen.getByText(element.place)).toBeInTheDocument();
            expect(screen.getByText(element.description)).toBeInTheDocument();
        });
    });

    test('shows error info when there is an error while fetching data', async () => {
        server.use(
            rest.get(url, (req, res, ctx) => {
              return res(ctx.status(500))
            }),
        );

        render(<PlacesList />);

        await waitFor(() => screen.getByTestId('error-info'));

        expect(screen.getByTestId('error-info')).toBeInTheDocument();
    });
});