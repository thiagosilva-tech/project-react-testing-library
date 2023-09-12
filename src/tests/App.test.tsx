import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

test('Teste se o topo da aplicação contém um conjunto fixo de links de navegação', () => {
  renderWithRouter(<App />);

  expect(screen.getByRole('link', { name: /Home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /About/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /Favorite Pokémon/i })).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação.', async () => {
  const { user } = renderWithRouter(<App />);

  const linkHome = screen.getByRole('link', { name: /Home/i });

  await user.click(linkHome);

  expect(screen.getByText(/Encountered Pokémon/i)).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação.', async () => {
  const { user } = renderWithRouter(<App />);

  const linkAbout = screen.getByRole('link', { name: /About/i });

  await user.click(linkAbout);

  expect(screen.getByText(/About Pokédex/i)).toBeInTheDocument();
});

test('Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação.', async () => {
  const { user } = renderWithRouter(<App />);

  const linkFavorite = screen.getByRole('link', { name: /Favorite Pokémon/i });

  await user.click(linkFavorite);

  const h2Element = screen.getByRole('heading', { level: 2 });
  expect(h2Element.textContent).toBe('Favorite Pokémon');
});
