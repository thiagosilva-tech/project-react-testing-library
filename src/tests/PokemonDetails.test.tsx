import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <PokemonDetails.tsx />', () => {
  test('Teste se as informações detalhadas do Pokémon selecionado são mostradas na tela:', async () => {
    const { user } = renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    await user.click(linkShowDetails);

    const namePokemon = screen.getByText('Pikachu Details');

    expect(namePokemon).toBeInTheDocument();

    const summary = screen.getByText('Summary');
    expect(summary).toBeInTheDocument();

    const details = screen.getByText(/This intelligent Pokémon roasts/i);
    expect(details).toBeInTheDocument();
  });

  test('Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon:', async () => {
    const { user } = renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    await user.click(linkShowDetails);

    const textLocation = screen.getByText('Game Locations of Pikachu');
    expect(textLocation).toBeInTheDocument();

    const location1 = screen.getByText('Kanto Viridian Forest');
    expect(location1).toBeInTheDocument();
    const location2 = screen.getByText('Kanto Power Plant');
    expect(location2).toBeInTheDocument();

    const imgsLocations = screen.getAllByAltText('Pikachu location');
    expect(imgsLocations[0].getAttribute('src')).toBe('https://archives.bulbagarden.net/media/upload/0/08/Kanto_Route_2_Map.png');
    expect(imgsLocations[1].getAttribute('src')).toBe('https://archives.bulbagarden.net/media/upload/b/bd/Kanto_Celadon_City_Map.png');
  });

  test('Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes:', async () => {
    const { user } = renderWithRouter(<App />);

    const linkShowDetails = screen.getByRole('link', { name: /More details/i });

    await user.click(linkShowDetails);

    const favoritar = screen.getByLabelText(/Pokémon favoritado?/i);
    expect(favoritar).toBeInTheDocument();
    await user.click(favoritar);
    const favoritado = screen.getByAltText('Pikachu is marked as favorite');
    expect(favoritado).toBeInTheDocument();
  });
});
