import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <About.tsx />.', () => {
  test('Teste se a página contém um heading h2 com o texto About Pokédex.', () => {
    renderWithRouter(<App />, { route: '/about' });

    const h2Element = screen.getByRole('heading', { level: 2 });
    expect(h2Element.textContent).toBe('About Pokédex');
  });

  test('Teste se a página contém dois parágrafos com texto sobre a Pokédex.', () => {
    renderWithRouter(<App />, { route: '/about' });

    const paragrafos1 = screen.getByText(/This application simulates a Pokédex, a digital encyclopedia containing all Pokémon./i);
    const paragrafos2 = screen.getByText(/One can filter Pokémon by type, and see more details for each one of them./i);

    expect(paragrafos1).toBeInTheDocument();
    expect(paragrafos2).toBeInTheDocument();
  });

  test('Teste se a página contém a imagem de uma Pokédex', () => {
    renderWithRouter(<App />, { route: '/about' });

    const SRC_IMAGEM = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
    const imagem = screen.getByRole('img', { name: /Pokédex/i });

    expect(imagem.getAttribute('src')).toBe(SRC_IMAGEM);
  });
});
