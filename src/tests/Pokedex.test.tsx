import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.tsx />', () => {
  const POKEMON_TYPE = 'pokemon-type';
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element).toBeInTheDocument();
    expect(h2Element.textContent).toBe('Encountered Pokémon');
  });

  test('Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado:', async () => {
    const { user } = renderWithRouter(<App />);

    const btnNextPokemon = screen.getByRole('button', { name: /Próximo Pokémon/i });
    expect(btnNextPokemon).toBeInTheDocument();

    const pokemon1 = screen.getByText(/pikachu/i);
    expect(pokemon1).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon2 = screen.getByText(/charmander/i);
    expect(pokemon2).toBeInTheDocument();

    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);
    await user.click(btnNextPokemon);

    await user.click(btnNextPokemon);
    expect(pokemon1).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByText(/Pikachu/i);
    expect(pokemon).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro:', async () => {
    const { user } = renderWithRouter(<App />);

    const DATA_TESTID = 'pokemon-type-button';
    const allBtnFilter = screen.getAllByTestId(DATA_TESTID);

    const typeFilter = ['Electric', 'Fire', 'Bug', 'Poison', 'Psychic', 'Normal', 'Dragon'];
    expect(allBtnFilter).toHaveLength(7);
    await user.click(allBtnFilter[2]);
    const pokemonWithFilter = screen.getByTestId('pokemon-type');
    expect(pokemonWithFilter.textContent).toBe(allBtnFilter[2].textContent);

    const btnAll = screen.getByRole('button', { name: /All/i });
    for (let index = 0; index < allBtnFilter.length; index += 1) {
      expect(allBtnFilter[index].getAttribute('data-testid')).toBe(DATA_TESTID);
      expect(allBtnFilter[index].textContent).toBe(typeFilter[index]);
      expect(btnAll).toBeInTheDocument();
    }
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro:', async () => {
    const { user } = renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: /All/i });
    const btnNext = screen.getByRole('button', { name: /Próximo Pokémon/i });
    const btnFire = screen.getByRole('button', { name: 'Fire' });
    expect(btnAll.getAttribute('data-testid')).not.toBe('pokemon-type-button');
    expect(btnAll.textContent).toBe('All');

    await user.click(btnFire);
    await user.click(btnAll);
    const type1 = screen.getByTestId(POKEMON_TYPE);
    expect(type1.textContent).toBe('Electric');

    await user.click(btnNext);

    const type2 = screen.getByTestId(POKEMON_TYPE);
    expect(type2.textContent).toBe('Fire');
  });
});
