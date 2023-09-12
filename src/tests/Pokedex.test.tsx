import { getAllByAltText, screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <Pokedex.tsx />', () => {
  test('Teste se a página contém um heading h2 com o texto Encountered Pokémon', () => {
    renderWithRouter(<App />);

    const h2Element = screen.getByRole('heading', { level: 2 });
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
    const pokemon3 = screen.getByText(/caterpie/i);
    expect(pokemon3).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon4 = screen.getByText(/ekans/i);
    expect(pokemon4).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon5 = screen.getByText(/alakazam/i);
    expect(pokemon5).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon6 = screen.getByText(/mew/i);
    expect(pokemon6).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon7 = screen.getByText(/rapidash/i);
    expect(pokemon7).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon8 = screen.getByText(/snorlax/i);
    expect(pokemon8).toBeInTheDocument();

    await user.click(btnNextPokemon);
    const pokemon9 = screen.getByText(/dragonair/i);
    expect(pokemon9).toBeInTheDocument();

    await user.click(btnNextPokemon);
    expect(pokemon1).toBeInTheDocument();
  });

  test('Teste se é mostrado apenas um Pokémon por vez.', () => {
    renderWithRouter(<App />);

    const pokemon = screen.getAllByText(/Pikachu/i);
    expect(pokemon).toHaveLength(1);
  });

  test('Teste se a Pokédex tem os botões de filtro:', () => {
    renderWithRouter(<App />);

    const allBtnFilter = screen.getAllByTestId('pokemon-type-button');
    expect(allBtnFilter).toHaveLength(7);
    expect(allBtnFilter[0].textContent).toBe('Electric');
  });

  test('Teste se a Pokédex contém um botão para resetar o filtro:', async () => {
    const { user } = renderWithRouter(<App />);

    const btnAll = screen.getByRole('button', { name: /all/i });

    expect(btnAll.textContent).toBe('All');

    const type1 = screen.getByTestId('pokemon-type');
    expect(type1.textContent).toBe('Electric');

    const btnNext = screen.getByRole('button', { name: /Próximo Pokémon/i });

    await user.click(btnNext);

    const type2 = screen.getByTestId('pokemon-type');
    expect(type2.textContent).toBe('Fire');
  });
});
