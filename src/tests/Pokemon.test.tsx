import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokemon.tsx />', () => {
  test('Teste se é renderizado um card com as informações de determinado Pokémon', () => {
    renderWithRouter(<App />);

    const namePokemon = screen.getByText(/Pikachu/i);
    expect(namePokemon).toBeInTheDocument();
    const typePokemon = screen.getByTestId('pokemon-type');
    expect(typePokemon.innerHTML).toBe('Electric');
    const weightPokemon = screen.getByTestId('pokemon-weight');
    expect(weightPokemon.innerHTML).toBe('Average weight: 6.0 kg');
    const imgPokemon = screen.getByRole('img', { name: 'Pikachu sprite' });
    expect(imgPokemon).toBeInTheDocument();
    expect(imgPokemon.getAttribute('src')).toBe('https://archives.bulbagarden.net/media/upload/b/b2/Spr_5b_025_m.png');
  });

  test('Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes desse Pokémon. O link deve ter a URL /pokemon/<id>, em que <id> é o id do Pokémon exibido.', () => {
    renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    expect(linkShowDetails.getAttribute('href')).toBe('/pokemon/25');
  });

  test('Teste se, ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon.', async () => {
    const { user } = renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    await user.click(linkShowDetails);

    const pokemonDetails = screen.getByText('Pikachu Details');
    expect(pokemonDetails.textContent).toBe('Pikachu Details');
  });

  test('Teste se existe um ícone de estrela nos Pokémon favoritados:', async () => {
    const { user } = renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    await user.click(linkShowDetails);

    const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);

    await user.click(favoritar);

    const imgFavorito = screen.getByRole('img', { name: 'Pikachu is marked as favorite' });
    expect(imgFavorito).toBeInTheDocument();
    expect(imgFavorito.getAttribute('src')).toBe('/star-icon.png');
  });
});
