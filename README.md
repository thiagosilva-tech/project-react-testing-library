# Projeto React Testing Library

Este projeto é uma aplicação web que permite aos usuários pesquisar, visualizar e favoritar Pokémon. O objetivo é praticar a escrita de funções TypeScript, incluindo o uso de parâmetros, retorno de valores, e casos de teste.

## Tecnologias Utilizadas

- TypeScript: Utilizado para implementar as funções.
- React.js: Uma biblioteca JavaScript para criar interfaces de usuário.
- CSS: Usado para estilizar os componentes da aplicação.

## Requisitos do Projeto

- **Teste o componente `<App.tsx />`**: Verifique se o topo da aplicação contém um conjunto fixo de links de navegação. Teste se a aplicação é redirecionada para a página inicial, na URL /, ao clicar no link Home da barra de navegação. Teste se a aplicação é redirecionada para a página de About, na URL /about, ao clicar no link About da barra de navegação. Teste se a aplicação é redirecionada para a página de Pokémon Favoritados, na URL /favorites, ao clicar no link Favorite Pokémon da barra de navegação. Teste se a aplicação é redirecionada para a página Not Found ao entrar em uma URL desconhecida.

- **Teste o componente `<About.tsx />`**: Verifique se a página contém as informações sobre a Pokédex. Teste se a página contém um heading h2 com o texto About Pokédex. Teste se a página contém dois parágrafos com texto sobre a Pokédex. Teste se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png.

- **Teste o componente `<FavoritePokemon.tsx />`**: Ao favoritar a partir da página de detalhes, teste se é exibida na tela a mensagem No favorite pokemon found caso a pessoa não tenha Pokémon favorito. Apenas são exibidos os Pokémon favoritados.

- **Teste o componente `<NotFound.tsx />`**: Verifique se a página contém um heading h2 com o texto Page requested not found. Teste se a página mostra a imagem com o texto alternativo https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif.

- **Teste o componente `<Pokedex.tsx />`**: Verifique se a página contém um heading h2 com o texto Encountered Pokémon. Teste se é exibido o próximo Pokémon da lista quando o botão Próximo Pokémon é clicado. Teste se é mostrado apenas um Pokémon por vez. Teste se a Pokédex tem os botões de filtro. Teste se a Pokédex contém um botão para resetar o filtro.

- **Teste o componente `<Pokemon.tsx />`**: Verifique se é renderizado um card com as informações de determinado Pokémon. Teste se o card do Pokémon indicado na Pokédex contém um link de navegação para exibir detalhes desse Pokémon. O link deve ter a URL /pokemon/<id>, em que <id> é o id do Pokémon exibido. Teste se, ao clicar no link de navegação do Pokémon, é feito o redirecionamento da aplicação para a página de detalhes de Pokémon. Teste também se a URL exibida no navegador muda para /pokemon/<id>, em que <id> é o id do Pokémon cujos detalhes se deseja ver. Teste se existe um ícone de estrela nos Pokémon favoritados.

- **Teste o componente `<PokemonDetails.tsx />`**: Verifique se as informações detalhadas do Pokémon selecionado são mostradas na tela. Teste se existe na página uma seção com os mapas contendo as localizações do Pokémon. Teste se o usuário pode favoritar um Pokémon por meio da página de detalhes.

## Conclusão

A Pokédex é uma ferramenta poderosa para gerenciar seus Pokémon favoritos de forma segura e eficiente. Com a capacidade de pesquisar Pokémon, visualizar detalhes e marcar seus Pokémon favoritos, você pode ter certeza de que seus Pokémon estão bem organizados. Esperamos que você encontre esta Pokédex útil e fácil de usar. Se tiver alguma dúvida ou sugestão, sinta-se à vontade para entrar em contato.
