import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Teste o componente <NotFound.tsx />.', () => {
  test('Teste se a página contém um heading h2 com o texto Page requested not found.', () => {
    renderWithRouter(<App />, { route: '/123' });

    const textNotFound = screen.getByRole('heading', { level: 2 });
    expect(textNotFound.textContent).toBe('Page requested not found');
  });

  test('Teste se a página mostra a imagem com o texto alternativo.', () => {
    renderWithRouter(<App />, { route: '/123' });

    const image = screen.getByAltText(/Clefairy pushing buttons randomly with text I have no idea what i'm doing/i);

    expect(image).toBeInTheDocument();
  });
});
