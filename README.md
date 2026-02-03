# Portfólio

Landing page profissional, responsiva, com tema preto e vermelho e animações ao rolar.

## Estrutura

- **Header**: Home, Sobre mim, Projetos, Curiosidades + ícone para alternar idioma (PT-BR / EN)
- **Primeira impressão**: texto de apresentação + espaço para sua foto
- **Sobre mim**: caixas de texto e espaço para imagens
- **Projetos**: cards lado a lado (adicione quantos quiser)
- **Curiosidades**: texto + imagem

## Como usar

1. Abra `index.html` no navegador ou use um servidor local (ex.: `npx serve .`).
2. Edite os textos diretamente no `index.html` ou altere as chaves em `js/main.js` (objeto `translations`) para PT e EN.
3. **Sua foto**: no bloco "Primeira impressão", substitua a div `.hero__image-placeholder` por:
   ```html
   <img src="img/sua-foto.jpg" alt="Sua foto">
   ```
4. **Projetos**: altere título, descrição e link em cada `.project-card`. Para imagem do projeto, troque `.project-card__placeholder` por `<img src="img/projeto.jpg" alt="...">`.
5. **Cores**: em `css/styles.css`, variáveis `:root` — `--black`, `--red`, `--red-soft` etc. — para ajustar o tema.

## Cores (tema atual)

- Fundo: preto (#0a0a0a)
- Destaque: vermelho (#c41e3a)
- Texto: alto contraste (#f5f5f5, #c4c4c4)

## Tecnologias

- HTML5, CSS3 (variáveis, Grid, Flexbox)
- JavaScript (Intersection Observer para animações, toggle de idioma, menu mobile)
