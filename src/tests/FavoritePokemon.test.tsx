import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se é exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito.', () => {
  renderWithRouter(<App />, { route: '/favorites' });

  const textNoFavorite = screen.getByText(/No favorite Pokémon found/i);

  expect(textNoFavorite).toBeInTheDocument();
});

test('Teste se são exibidos apenas os Pokémon favoritados', async () => {
  const { user } = renderWithRouter(<App />);

  const linkMoreDetails = screen.getByRole('link', { name: /More details/i });

  await user.click(linkMoreDetails);

  const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);

  await user.click(favoritar);

  const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémon/i });

  await user.click(linkFavorite);

  const favorito = screen.getByAltText(/Pikachu is marked as favorite/i);

  expect(favorito).toBeInTheDocument();
});
