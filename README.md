# Boas-vindas ao repositório do projeto App de Receitas!

<details>
  <summary><strong>👨‍💻 O que deverá ser desenvolvido</strong></summary><br />

  Você irá desenvolver um app de receitas utilizando o que há de mais moderno dentro do ecossistema React: Hooks e Context API!

  Nele, deverá ser possível: ver, buscar, filtrar, favoritar e acompanhar o progresso de preparação de receitas de comidas e bebidas!

  ⚠️ A base de dados serão duas APIs distintas: uma para comidas e outra para bebidas.

  O layout tem como foco dispositivos móveis. Assim, todos os protótipos estarão desenvolvidos em telas menores.
</details>

<details>
  <summary><strong>:memo: Habilidades</strong></summary><br />

  Neste projeto, você será capaz de:

  - Utilizar _Redux_ para gerenciar estado.
  - Utilizar a biblioteca _React-Redux_.
  - Utilizar a Context API do _React_ para gerenciar estado.
  - Utilizar o _React Hook useState_.
  - Utilizar o _React Hook useContext_.
  - Utilizar o _React Hook useEffect_.
  - Criar Hooks customizados.
</details>

# Orientações

<details>
  <summary><strong>‼️ Antes de começar a desenvolver</strong></summary><br />

  1. Instale as dependências e inicialize o projeto

  - Instale as dependências:
    - `npm install`
  - Inicialize o projeto:
    - `npm start` (uma nova página deve abrir em seu navegador com um texto simples)
  
</details>

* <details><summary><b> APIs :gear:</b></summary><br/>

    🚨 **IMPORTANTE**

    Para fazer as requisições, você deve utilizar apenas o `fetch`!! Outras bibliotecas como o Axios podem causar problemas no avaliador.

    * <details><summary><b> TheMealDB API</b></summary>

      O [TheMealDB](https://www.themealdb.com/) é um banco de dados aberto, mantido pela comunidade, com receitas e ingredientes de todo o mundo.

      Os endpoints são bastante ricos. Você pode vê-los [aqui](https://www.themealdb.com/api.php).

      O modelo de resposta para uma `meal` é o seguinte:
        <details><summary><b>Ver modelo de resposta para uma meal</b></summary>

        ```json
          {
            "meals":[
                {
                  "idMeal":"52882",
                  "strMeal":"Three Fish Pie",
                  "strDrinkAlternate":null,
                  "strCategory":"Seafood",
                  "strArea":"British",
                  "strInstructions":"Preheat the oven to 200C\/400F\/Gas 6 (180C fan).\r\nPut the potatoes into a saucepan of cold salted water. Bring up to the boil and simmer until completely tender. Drain well and then mash with the butter and milk. Add pepper and taste to check the seasoning. Add salt and more pepper if necessary.\r\nFor the fish filling, melt the butter in a saucepan, add the leeks and stir over the heat. Cover with a lid and simmer gently for 10 minutes, or until soft. Measure the flour into a small bowl. Add the wine and whisk together until smooth.\r\nAdd the milk to the leeks, bring to the boil and then add the wine mixture. Stir briskly until thickened. Season and add the parsley and fish. Stir over the heat for two minutes, then spoon into an ovenproof casserole. Scatter over the eggs. Allow to cool until firm.\r\nSpoon the mashed potatoes over the fish mixture and mark with a fork. Sprinkle with cheese.\r\nBake for 30-40 minutes, or until lightly golden-brown on top and bubbling around the edges.",
                  "strMealThumb":"https:\/\/www.themealdb.com\/images\/media\/meals\/spswqs1511558697.jpg",
                  "strTags":"Fish,Seafood,Dairy,Pie",
                  "strYoutube":"https:\/\/www.youtube.com\/watch?v=Ds1Jb8H5Sg8",
                  "strIngredient1":"Potatoes",
                  "strIngredient2":"Butter",
                  "strIngredient3":"Milk",
                  "strIngredient4":"Gruy\u00e8re",
                  "strIngredient5":"Butter",
                  "strIngredient6":"Leek",
                  "strIngredient7":"Plain Flour",
                  "strIngredient8":"White Wine",
                  "strIngredient9":"Milk",
                  "strIngredient10":"Parsley",
                  "strIngredient11":"Salmon",
                  "strIngredient12":"Haddock",
                  "strIngredient13":"Smoked Haddock",
                  "strIngredient14":"Eggs",
                  "strIngredient15":"",
                  "strIngredient16":"",
                  "strIngredient17":"",
                  "strIngredient18":"",
                  "strIngredient19":"",
                  "strIngredient20":"",
                  "strMeasure1":"1kg",
                  "strMeasure2":"Knob",
                  "strMeasure3":"Dash",
                  "strMeasure4":"50g",
                  "strMeasure5":"75g",
                  "strMeasure6":"2 sliced",
                  "strMeasure7":"75g",
                  "strMeasure8":"150ml",
                  "strMeasure9":"568ml",
                  "strMeasure10":"2 tbs chopped",
                  "strMeasure11":"250g",
                  "strMeasure12":"250g",
                  "strMeasure13":"250g",
                  "strMeasure14":"6",
                  "strMeasure15":"",
                  "strMeasure16":"",
                  "strMeasure17":"",
                  "strMeasure18":"",
                  "strMeasure19":"",
                  "strMeasure20":"",
                  "strSource":"https:\/\/www.bbc.co.uk\/food\/recipes\/three_fish_pie_58875",
                  "dateModified":null
                }
            ]
          }
        ```
      </details>
    
      Os ingredientes seguem uma ordem lógica em que o nome deles (<code>strIngredient1</code>) e a quantidade (<code>strMeasure1</code>) têm o mesmo número no final (1, nesse caso).

      É possível listar todas as `categorias`, `nacionalidades` (vindas da API como "áreas") e `ingredientes`:

      ```
      categorias: https://www.themealdb.com/api/json/v1/1/list.php?c=list
      nacionalidades: https://www.themealdb.com/api/json/v1/1/list.php?a=list
      ingredientes: https://www.themealdb.com/api/json/v1/1/list.php?i=list
      ```

      As fotos dos ingredientes vêm de um endpoint padronizado com a seguinte lógica:

      ```
      https://www.themealdb.com/images/ingredients/{nome-do-ingrediente}-Small.png
      // exemplo com "Lime"
      https://www.themealdb.com/images/ingredients/Lime-Small.png
      ```
      </details>

    * <details><summary><b> The CockTailDB API</b></summary>
      É bem similar (inclusive mantida pela mesma entidade) à TheMealDB API, só que focado em bebidas.

      Os endpoints também são bastante ricos. Você pode vê-los [aqui](https://www.thecocktaildb.com/api.php).

      As respostas seguem a mesma estrutura, com algumas particularidades relativas às bebidas (como ser ou não alcoólica).

        <details><summary><b>Ver modelo de resposta para drinks</b></summary>

        ```json
          {
            "drinks":[
                {
                  "idDrink":"17256",
                  "strDrink":"Martinez 2",
                  "strDrinkAlternate":null,
                  "strDrinkES":null,
                  "strDrinkDE":null,
                  "strDrinkFR":null,
                  "strDrinkZH-HANS":null,
                  "strDrinkZH-HANT":null,
                  "strTags":null,
                  "strVideo":null,
                  "strCategory":"Cocktail",
                  "strIBA":null,
                  "strAlcoholic":"Alcoholic",
                  "strGlass":"Cocktail glass",
                  "strInstructions":"Add all ingredients to a mixing glass and fill with ice.\r\n\r\nStir until chilled, and strain into a chilled coupe glass.",
                  "strInstructionsES":null,
                  "strInstructionsDE":"Alle Zutaten in ein Mischglas geben und mit Eis f\u00fcllen. Bis zum Abk\u00fchlen umr\u00fchren und in ein gek\u00fchltes Coup\u00e9glas abseihen.",
                  "strInstructionsFR":null,
                  "strInstructionsZH-HANS":null,
                  "strInstructionsZH-HANT":null,
                  "strDrinkThumb":"https:\/\/www.thecocktaildb.com\/images\/media\/drink\/fs6kiq1513708455.jpg",
                  "strIngredient1":"Gin",
                  "strIngredient2":"Sweet Vermouth",
                  "strIngredient3":"Maraschino Liqueur",
                  "strIngredient4":"Angostura Bitters",
                  "strIngredient5":null,
                  "strIngredient6":null,
                  "strIngredient7":null,
                  "strIngredient8":null,
                  "strIngredient9":null,
                  "strIngredient10":null,
                  "strIngredient11":null,
                  "strIngredient12":null,
                  "strIngredient13":null,
                  "strIngredient14":null,
                  "strIngredient15":null,
                  "strMeasure1":"1 1\/2 oz",
                  "strMeasure2":"1 1\/2 oz",
                  "strMeasure3":"1 tsp",
                  "strMeasure4":"2 dashes",
                  "strMeasure5":null,
                  "strMeasure6":null,
                  "strMeasure7":null,
                  "strMeasure8":null,
                  "strMeasure9":null,
                  "strMeasure10":null,
                  "strMeasure11":null,
                  "strMeasure12":null,
                  "strMeasure13":null,
                  "strMeasure14":null,
                  "strMeasure15":null,
                  "strCreativeCommonsConfirmed":"No",
                  "dateModified":"2017-12-19 18:34:15"
                }
            ]
          }
        ```
        </details>
      Os ingredientes seguem uma ordem lógica em que o nome deles (<code>strIngredient1</code>) e a quantidade (<code>strMeasure1</code>) têm o mesmo número no final (1, nesse caso).
      </details>
    </details>

    * <details><summary><b> Rotas</b></summary>

      As rotas a serem utilizadas na aplicação devem ser as seguintes:

      * Tela de login: `/`.
      * Tela principal de receitas de comidas: `/meals`.
      * Tela principal de receitas de bebidas: `/drinks`.
      * Tela de detalhes de uma receita de comida: `/meals/:id-da-receita`.
      * Tela de detalhes de uma receita de bebida: `/drinks/:id-da-receita`.
      * Tela de receita em progresso de comida: `/meals/:id-da-receita/in-progress`.
      * Tela de receita em progresso de bebida: `/drinks/:id-da-receita/in-progress`.
      * Tela de perfil: `/profile`.
      * Tela de receitas feitas: `/done-recipes`.
      * Tela de receitas favoritas: `/favorite-recipes`.
      </details>
      
    * <details><summary><b> LocalStorage</b></summary>

      O uso de `localStorage` é necessário para que as informações não se percam caso a pessoa atualize a página. O correto é usar os valores para iniciar sua store ou seu context.

      No `localStorage` do navegador:

      * a chave `user` deve conter a seguinte estrutura:
      ```js
      {
          email: email-da-pessoa
      }
      ```

      * a chave `doneRecipes` deve conter a seguinte estrutura:
      ```js
      [{
          id: id-da-receita,
          type: meal-ou-drink,
          nationality: nacionalidade-da-receita-ou-texto-vazio,
          category: categoria-da-receita-ou-texto-vazio,
          alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
          name: nome-da-receita,
          image: imagem-da-receita,
          doneDate: quando-a-receita-foi-concluida,
          tags: array-de-tags-da-receita-ou-array-vazio
      }]
      ```

      * a chave `favoriteRecipes` deve conter a seguinte estrutura:
      ```js
      [{
          id: id-da-receita,
          type: meal-ou-drink,
          nationality: nacionalidade-da-receita-ou-texto-vazio,
          category: categoria-da-receita-ou-texto-vazio,
          alcoholicOrNot: alcoholic-ou-non-alcoholic-ou-texto-vazio,
          name: nome-da-receita,
          image: imagem-da-receita
      }]
      ```

      * a chave `inProgressRecipes` deve conter a seguinte estrutura:
      ```js
      {
          drinks: {
              id-da-bebida: [lista-de-ingredientes-utilizados],
              ...
          },
          meals: {
              id-da-comida: [lista-de-ingredientes-utilizados],
              ...
          }
      }
      ```

      **Observações técnicas**

      * `id-da-bebida` e `id-da-comida` representam o ID de uma bebida e comida, respectivamente, e cada item da lista de ingredientes da respectiva receita deve ser representado apenas pelo número do ingrediente no formato numérico.
      </details>
    
    * <details><summary><b> Ícones</b></summary>

      Os ícones a serem utilizados na aplicação estão disponíveis do diretório `src/images/`. Esses ícones serão utilizados pelos testes da avaliação automatizada, então certifique-se de utilizá-los nos requisitos e de não renomeá-los.

      Os ícones são:

      * `profileIcon.svg`;
      * `searchIcon.svg`;
      * `drinkIcon.svg`;
      * `mealIcon.svg`;
      * `shareIcon.svg`;
      * `whiteHeartIcon.svg`;
      * `blackHeartIcon.svg`.
      </details>

    * <details><summary><b> Clipboard API</b></summary>

      Para os componentes que contêm a funcionalidade de favoritar comidas ou bebidas, será necessário utilizar a [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText) para copiar as informações da receita. Este é um método nativo, o que significa que não será necessário instalar nenhuma outra dependência externa.

      :bulb: **Dica**: Ao utilizar o método `writeText`, será necessário criar o _mock_ para ele nos testes. Utilize o método [stubGlobal](https://vitest.dev/guide/mocking.html#globals).

      </details>

    * <details><summary><b> Biblioteca <code>Bootstrap</code> (opcional)</b></summary>

      Para os grupos que quiserem implementar estilizações no app, recomenda-se o uso da lib `Bootstrap`. Ela já vem instalada por padrão neste projeto, então basta apenas implementá-la em seus componentes. Por exemplo, caso queira implementar um [botão](https://react-bootstrap.github.io/components/buttons/), realize o seguinte:

      ``` jsx
      import Button from 'react-bootstrap/Button';

      const MeuComponente = () => (
        <Button variant="success">
          Botão Verde
        </Button>
      );
      ...
      ```

      Para mais informações, consulte [esta documentação](https://react-bootstrap.github.io/getting-started/introduction/).
      </details>
    </details><br />
</details>

# Requisitos

:warning: **PULL REQUESTS COM ERROS DE LINTER NÃO SERÃO AVALIADOS.** :warning:

Neste projeto, a pessoa que estiver utilizando o app pode procurar uma receita específica, explorar receitas com base em diferentes critérios, favoritar e fazer as receitas, entre outras funcionalidades.

As telas sofrem variações dependendo do tipo da receita (se é comida ou bebida, no caso).

***Observação: A maneira como as APIs devem ser estruturadas segue os seguintes modelos: https://www.themealdb.com/api.php e https://www.thecocktaildb.com/api.php.***

## Testes unitários

### 1 – Desenvolva os testes unitários de maneira que a cobertura seja de, no mínimo, 90%
<br />
<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Neste requisito, cubra a sua aplicação com testes unitários e de integração utilizando a biblioteca [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/). Aproveite essa oportunidade para colocar em prática o [Desenvolvimento Orientado por Testes](https://blog.betrybe.com/tecnologia/tdd-test-driven-development/).

  * Lembre-se de que, no Desenvolvimento Orientado por Testes, você deve escrever os testes junto com o desenvolvimento de novas funcionalidades. Por esse motivo, esse requisito só passará no avaliador enquanto sua aplicação estiver com a cobertura de testes desejada. Caso você adicione uma nova funcionalidade e não crie os testes para ela, esse requisito pode parar de passar no avaliador.

  * Os testes criados por você não irão influenciar os outros requisitos no avaliador. Você deverá desenvolver seus testes unitários e de integração usando a biblioteca React Testing Library, enquanto o avaliador usará a biblioteca [Cypress](https://docs.cypress.io/) para avaliar os requisitos, inclusive os de cobertura.

</details>
---

## Tela de login

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Login.tsx` ou `Login/index.tsx`.
> - 🔗 A rota usada para essa tela deve ser `/`.

### 2 – Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * O input de e-mail deve ter o atributo `data-testid="email-input"`.
  * O input de senha deve ter o atributo `data-testid="password-input"`.
  * O botão `Enter` deve ter o atributo `data-testid="login-submit-btn"`.
</details>

---

### 3 – Desenvolva a tela de maneira que a pessoa consiga escrever seu e-mail no input de email e sua senha no input de senha

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - A possibilidade de escrever o e-mail no input de e-mail.
  - A possibilidade de escrever a senha no input de senha.
</details><br />

---

### 4 – Desenvolva a tela de maneira que o formulário só seja válido após o preenchimento de um e-mail válido e de uma senha com mais de 6 caracteres

> Este requisito também inclui testes de cobertura da página `Login.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O formulário só fica válido após um e-mail válido e uma senha com mais de 6 caracteres serem preenchidos.
  * Caso o formulário esteja inválido, o botão de submeter deve estar desativado, contendo a propriedade `disabled`.
  * Caso o formulário esteja válido, o botão de submeter deve estar ativado, não contendo a propriedade `disabled`.
</details>

---

### 5 – Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Após a submissão, o e-mail da pessoa usuária deve ser salvo em `localStorage` na chave `user` no formato `{ email: email-da-pessoa }`.
</details>

---

### 6 – Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login

> Este requisito também inclui testes de cobertura da página `Login.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a rota muda para a tela principal de receitas de comidas.
  - Se a cobertura da tela de login for de 90%.
</details>

---

## Header

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Header.tsx` ou `Header/index.tsx`.

### 7 – Implemente o header de acordo com a necessidade de cada tela

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O Header deve ter os seguintes elementos: 
    * Ícone de perfil com o atributo `data-testid="profile-top-btn"`, que deverá estar sempre presente.
    * Ícone de pesquisa com o atributo `data-testid="search-top-btn"`, que deverá estar presente somente em alguma páginas (conforme a lista abaixo).
    * Título da página com o atributo `data-testid="page-title"`, que deverá estar sempre presente.
  * Os ícones podem ser encontrados em `src/images/profileIcon.svg` e em `src/images/searchIcon.svg`.
  * Cada página deverá ter seu próprio título, que será renderizado pelo header.
  * Todas as rotas serão verificadas, portanto crie as rotas que ainda não foram criadas.
</details>

---

### 8 – Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil

> Este requisito também inclui testes de cobertura do componente `Header.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Após clicar no botão de perfil com o atributo `data-testid="profile-top-btn"`, verifica se:
    - A rota muda para a tela de perfil `/profile`.
    - O título do header muda para "Profile".
  - Verifica a cobertura de 45% do componente header.
</details>

---

### 9 – Desenvolva o botão de busca que, ao ser clicado, permita a visualização da barra de busca ou a esconda

> Este requisito também inclui testes de cobertura do componente `Header.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Nesse requisito, você deverá apenas implementar a lógica para esconder e mostrar o input de busca. A funcionalidade e outros detalhes da barra de busca só serão implementados no requisito 10!
  * O input de busca que será exibido deve ter o atributo `data-testid="search-input"`.
</details>

---

## Barra de busca – Header

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `SearchBar.tsx` ou `SearchBar/index.tsx`.

### 10 – Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Deve existir os data-testids tanto na barra de busca quanto em todos os radio-buttons.
  * O radio button de busca de ingrediente deve ter o atributo `data-testid="ingredient-search-radio"`.
  * O radio button de busca por nome deve ter o atributo `data-testid="name-search-radio"`.
  * O radio button de busca da primeira letra deve ter o atributo `data-testid="first-letter-search-radio"`.
  * O botão de busca deve ter o atributo `data-testid="exec-search-btn"`.
</details>

---

### 11 – Implemente três radio buttons na barra de busca: Ingredient, Name e First letter

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * A barra de busca deve ter três radio buttons: `Ingredient`, `Name` e `First letter`. Eles, em conjunto com a `search-input`, devem mudar a forma como serão filtradas as receitas após a pessoa usuária clicar no botão `Search`. Os endpoints da API que você deve usar podem ser consultados [aqui, para a API de comidas,](https://www.themealdb.com/api.php) e [aqui, para a API de bebidas](https://www.thecocktaildb.com/api.php).
  * Se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/filter.php?i={ingrediente}`.
  * Se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s={nome}`.
  * Se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?f={primeira-letra}`.
      * Se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".
  * :bulb: **Exemplo: Ao selecionar `Ingredient` e buscar por `chicken`, deve-se utilizar o endpoint `https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken`**.

  :bulb: **Atenção**: utilize `window.alert`.<br />
  :bulb: Observação: para esse requisito será verificada apenas a tela principal de receitas de comidas.
</details>

---

### 12 – Busque na API de comidas caso a pessoa esteja na página de comidas e na API de bebidas caso a pessoa esteja na de bebidas

> Este requisito também inclui testes de cobertura do componente `SearchBar.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Na tela de bebidas, se o radio selecionado for `Ingredient`, a busca na API é feita corretamente pelo ingrediente. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i={ingrediente}`.
  * Na tela de bebidas, se o radio selecionado for `Name`, a busca na API é feita corretamente pelo nome. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s={nome}`.
  * Na tela de bebidas, se o radio selecionado for `First letter`, a busca na API é feita corretamente pela primeira letra. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?f={primeira-letra}`.
      * Na tela de bebidas, se o radio selecionado for `First letter` e a busca na API for feita com mais de uma letra, deve-se exibir um `alert` com a mensagem "Your search must have only 1 (one) character".

  :bulb: **Atenção**: utilize `window.alert`.<br />
  :bulb: Observação: para esse requisito será verificada apenas a tela principal de receitas de bebidas, pois a de comidas já foi verificada no requisito anterior.
</details>

---

### 13 – Redirecione a pessoa usuária para a tela de detalhes da receita caso apenas uma receita seja encontrada (o ID da receita deve constar na URL)

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso apenas uma comida seja encontrada, deve-se ir para sua rota de detalhes (`/meals/:id-da-receita`).
  * Caso apenas uma bebida seja encontrada, deve-se ir para sua rota de detalhes (`/drinks/:id-da-receita`).
</details>

---

### 14 – Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas e exiba a imagem e o nome de cada uma delas

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Exiba as 12 primeiras receitas que forem retornadas pela busca.
  * Caso a busca retorne menos do que 12 receitas, exiba todas elas.
  * Cada receita deve ser exibida em um elemento que contenha as suas informações.
  * Exiba a imagem e o nome de cada receita.
  * O elemento que contém cada receita deve ter o atributo `data-testid="${index}-recipe-card"`.
  * A imagem de cada receita deve conter o atributo `data-testid="${index}-card-img"`.
  * A tag com o nome de cada receita deve ter o atributo `data-testid="${index}-card-name"`.
</details>

---

### 15 – Exiba um `alert` caso nenhuma receita seja encontrada

> Este requisito também inclui testes de cobertura do componente `SearchBar.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O alert deve conter o texto "Sorry, we haven't found any recipes for these filters".

  :bulb: **Atenção**: utilize `window.alert`.<br />
</details>

---

## Menu inferior

> ⚠️ Observação:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Footer.tsx` ou `Footer/index.tsx`.

### 16 – Implemente o menu inferior posicionando-o de forma fixa e contendo dois ícones: um para comidas e outro para bebidas

> Este requisito também inclui testes de cobertura do componente `Footer.tsx`.
  
<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Todos os ícones necessários estão disponíveis na pasta `src/images`.
  * O menu inferior deve ter ter o atributo `data-testid="footer"`.
  * O elemento que leva para a página de bebidas deve usar o ícone `drinkIcon.svg` e ter o atributo `data-testid="drinks-bottom-btn"`.
  * O elemento que leva para a página de comidas deve usar o ícone `mealIcon.svg` e ter o atributo `data-testid="meals-bottom-btn"`.
  * O menu inferior deve ficar fixado sempre ao final da página.
</details>
---

### 17 – Exiba o menu inferior apenas nas telas indicadas pelo protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

* Todas as rotas serão verificadas, portanto crie as rotas que ainda não foram criadas.
</details>

---

### 18 - Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior

> Este requisito também inclui testes de cobertura do componente `Footer.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

- Se há o redirecionamento para a lista de bebidas ao clicar no ícone de bebidas.
- Se há o redirecionamento para a lista de comidas ao clicar no ícone de comidas.
- Verifica a cobertura de 90% do componente footer.
</details>

---

## Tela principal de receitas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Recipes.tsx` ou `Recipes/index.tsx`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals` e `/drinks`.

:bulb: **Dica**: lembre-se de componentizar muito bem os elementos em React nessa tela a fim de evitar problemas de lógica e de complexidade ;).

### 19 – Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * As receitas devem ser carregadas ao inicializar a página.
  * Caso as receitas sejam de comidas, deve-se carregar as 12 primeiras receitas obtidas por meio do endpoint `https://www.themealdb.com/api/json/v1/1/search.php?s=`.
  * Caso as receitas sejam de bebidas, deve-se carregar as 12 primeiras receitas obtidas por meio do endpoint `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`.
  * O card deve ter o atributo `data-testid="${index}-recipe-card"`.
  * A foto (`strMealThumb` ou `strDrinkThumb`) deve ter o atributo `data-testid="${index}-card-img"`.
  * O nome (`strMeal` ou `strDrink`) deve ter o atributo `data-testid="${index}-card-name"`.
</details>

---

### 20 - Implemente os botões de categoria para serem utilizados como filtro

> Este requisito também inclui testes de cobertura da página `Recipes.tsx`.

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Cada botão deve conter o atributo prefixado `data-testid=${categoryName}-category-filter` e devem ser exibidas apenas as 5 primeiras categorias retornadas da API.
  * Caso as receitas sejam de comida, deve-se exibir as 5 primeiras categorias de comida obtidas por meio do endpoint `https://www.themealdb.com/api/json/v1/1/list.php?c=list`.
  * Caso as receitas sejam de bebida, deve-se exibir as 5 primeiras categorias de bebida obtidas por meio do endpoint `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`.
</details>
---

### 21 – Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * As receitas, filtradas por categorias, devem ser obtidas por meio da API de [comidas](https://www.themealdb.com/api.php) ou [bebidas](https://www.thecocktaildb.com/api.php). Deve-se utilizar para as duas APIs os endpoints de `Filter by Category`.
  * Na tela de comidas, se a categoria selecionada for `Beef`, o endpoint utilizado será `https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef`.
  * Na tela de bebidas, se a categoria selecionada for `Cocktail`, o endpoint utilizado será `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail`.
  * Além das categorias providas pela API, adicione um botão para limpar os filtros, retornando novamente todas as receitas. Esse botão deve ter o texto **All** e o atributo `data-testid="All-category-filter"`.
  * Caso a categoria retorne apenas um resultado, **NÃO** deve ser feito o redirecionamento da pessoa usuária para a página de detalhes.
</details>

---

### 22 – Implemente o filtro como um toggle, o qual, se for selecionado novamente, fará o app retornar as receitas sem nenhum filtro

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Caso as receitas sejam de comida e o filtro seja selecionado novamente, devem-se retornar as 12 primeiras receitas sem filtro.
  - Caso as receitas sejam de bebida e o filtro seja selecionado novamente, devem-se retornar as 12 primeiras receitas sem filtro.
</details>

---

### 23 – Redirecione a pessoa usuária para a tela de detalhes quando ela clicar no card (a rota da tela deve mudar e sua URL deve conter o ID da receita)

 > Este requisito também inclui testes de cobertura da página `Recipes.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Caso a receita seja de uma comida, a pessoa deve ser redirecionada para a rota `/meals/:id-da-receita`.
  * Caso a receita seja de uma bebida, a pessoa deve ser redirecionada para a rota `/drinks/:id-da-receita`.
</details>

---

## Tela de detalhes de uma receita

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `RecipeDetails.tsx` ou `RecipeDetails/index.tsx`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals/:id-da-receita` e `/drinks/:id-da-receita`.

:bulb: **Dica**: lembre-se de componentizar muito bem os elementos em React nessa tela a fim de evitar problemas de lógica e de complexidade ;).


### 24 – Realize uma request para a API passando o ID da receita que deve estar disponível nos parâmetros da URL

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Para verificar se a requisição para a API de comidas foi realizada, o endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.
  * Para verificar se a requisição para a API de bebidas foi realizada, o endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id-da-receita}`.
</details>

---

### 25 – Desenvolva a tela de modo que ela contenha uma imagem da receita, um título, a categoria  da receita (em caso de comidas) e se é ou não alcoólica (em caso de bebidas), uma lista de ingredientes (com as quantidades e instruções necessárias), um vídeo do YouTube incorporado e recomendações

<details>
  <summary><strong>Observações técnicas</strong></summary>

  A verificação será feita por meio das receitas retornadas pela API, como o texto dos ingredientes e das instruções, a partir dos atributos data-testids:

  * A foto deve ter o atributo `data-testid="recipe-photo"`.
  * O título deve ter o atributo `data-testid="recipe-title"`.
  * O texto da categoria deve ter o atributo `data-testid="recipe-category"`.
  * Os ingredientes devem ter o atributo `data-testid="${index}-ingredient-name-and-measure"`.
  * O texto de instruções deve ter o atributo `data-testid="instructions"`.
  * O vídeo, presente somente na tela de comidas, deve ter o atributo `data-testid="video"`.
  
  Lembre-se: o vídeo do YouTube só deve estar disponível para receitas de comida, visto que não é retornado pela [API de bebidas](https://www.thecocktaildb.com/api.php).
  
  :bulb: Dica: faça a busca `how to embed youtube video` e veja algumas sugestões de pesquisa para ajudar você na construção do código.

</details>

---

### 26 – Implemente as recomendações (para receitas de comida, a recomendação deverá ser bebida; já para as receitas de bebida, a recomendação deverá ser comida)

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Você deverá realizar as requisições para as APIs de comidas e bebidas e armazenar os dados. Elas serão utilizadas posteriormente no requisito 27 para gerar as recomendações.
  * Na página de comidas, realize uma requisição para a API de bebidas. O endpoint utilizado deve ser `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`.
  * Na página de bebidas, realize uma requisição para a API de comidas. O endpoint utilizado deve ser `https://www.themealdb.com/api/json/v1/1/search.php?s=`.
</details>

---

### 27 – Implemente os 6 cards de recomendação, mostrando apenas 2 deles (o scroll é horizontal, similar a um `carousel`)

<details>
  <summary><strong>Observações técnicas</strong></summary>

  * Renderize apenas as 6 receitas recomendadas.
    * Apenas 2 receitas devem ser visíveis, com um scroll horizontal, similar a um `carousel`.
  * O card de receitas recomendadas deve ter o atributo `data-testid="${index}-recommendation-card"`.
    * Dentro do card, o nome da receita recomendada deve ter o atributo `data-testid="${index}-recommendation-title"`.
</details>

---

### 28 – Desenvolva um botão de nome "Start Recipe", que deve ficar fixo na parte de baixo da tela o tempo todo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de iniciar receita deve ter o atributo `data-testid="start-recipe-btn"`.
</details>

---

### 29 – Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça

> Este requisito também inclui testes de cobertura da página `RecipeDetails.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se de que as receitas `finalizadas` anteriormente estão salvas na chave `doneRecipes` assim como indicado na sessão localStorage.
      * A chave `doneRecipes` só será populada pela aplicação quando o botão "Finish Recipe" for implementado, mas não é necessário implementar o botão para que esse requisito passe no avaliador!
      * Caso o botão `Finish Recipe` ainda não esteja implementado, você pode utilizar como base a estrutura da chave `doneRecipes`, que é informada na sessão `Desenvolvimento > Observações técnicas > LocalStorage` do readme.
      * Você pode usar o próprio avaliador para testar o funcionamento, mas também pode popular manualmente a chave `doneRecipes` e testá-la manualmente.
</details>

---

### 30 – Implemente a solução de modo que, caso a receita tenha sido iniciada mas não finalizada, o texto do botão deve ser "Continue Recipe"

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se de que as receitas `iniciadas` anteriormente estão salvas na chave `inProgressRecipes`, assim como indicado na sessão localStorage.
      * A chave `inProgressRecipes` só será populada pela aplicação no requisito `40`, mas não é necessário implementar o requisito `40` para ele passar no avaliador.
      * Caso o requisito `40` ainda não esteja implementado, você pode utilizar como base a estrutura da chave `inProgressRecipes`, que é informada na sessão `Desenvolvimento > Observações técnicas > LocalStorage` do readme.
      * Você poderá testar o funcionamento com o próprio avaliador e popular manualmente a chave `inProgressRecipes` para testá-la de modo manual.
</details>

---

### 31 – Redirecione a pessoa usuária caso o botão `Start Recipe` seja clicado (nesse caso, a rota deve mudar para a tela de receita em progresso)

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para a tela de receita da bebida em progresso.
  - Se redireciona para a tela de receita da comida em progresso.
</details>

---

### 32 – Implemente um botão de compartilhar e um de favoritar a receita

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O botão de compartilhar deve ter o atributo `data-testid="share-btn"`.
  * O botão de favoritar deve ter o atributo `data-testid="favorite-btn"`.
</details>

---

### 33 – Implemente a solução de forma que, ao clicar no botão de compartilhar, o link de detalhes da receita seja copiado para o clipboard e uma mensagem avisando que ele foi copiado apareça na tela em uma tag HTML

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O avaliador não irá considerar as mensagens exibidas pelo `window.alert`. Portanto, você deverá exibir ela no HTML.
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
  * Para esse requisito, você precisará usar a [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard/writeText).
</details>

---

### 34 – Salve as receitas favoritas no `localStorage` na chave `favoriteRecipes`

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Lembre-se que as receitas `favoritadas` anteriormente estão salvas na chave `favoriteRecipes`, assim como indicado na sessão localStorage.
  * As receitas favoritas devem ser salvas no `localStorage` na chave `favoriteRecipes` no formato `[{ id, type, nationality, category, alcoholicOrNot, name, image }]`.
</details>


---

### 35 – Implemente o ícone do coração (favorito) de modo que ele fique preenchido caso a receita esteja favoritada e vazio caso contrário

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Os ícones dos botões podem ser encontrados em `src/images/whiteHeartIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

---

### 36 – Implemente a lógica no botão de favoritar de modo que, caso ele seja clicado, o ícone de coração mude seu estado atual e, caso esteja preenchido, mude para vazio e vice-versa

> Este requisito também inclui testes de cobertura da página `RecipeDetails.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Favorita a comida.
  - Desfavorita a comida.
  - Favorita a bebida.
  - Desfavorita a bebida.
  - Verifica a cobertura de 90% da tela de detalhes de uma receita.
</details>

---



## Tela de receita em progresso

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `RecipeInProgress.tsx` ou `RecipeInProgress/index.tsx`.
> - 🔗 As rotas usadas para essa tela devem ser `/meals/:id-da-receita/in-progress` e `/drinks/:id-da-receita/in-progress`.

:bulb: **Dica**: lembre-se de componentizar muito bem os elementos em React nessa tela a fim de evitar problemas de lógica e de complexidade ;).

### 37 – Desenvolva a tela de modo que ela contenha uma imagem da receita, um título, a categoria (em caso de comidas) e se é ou não alcoólico (em caso de bebidas), uma lista de ingredientes (com as quantidades e instruções necessárias)

<details>
  <summary><strong>Observações técnicas</strong></summary>

  Verifica se os atributos data-testid estão presentes na tela:

  * A foto deve ter o atributo `data-testid="recipe-photo"`.
  * O título deve ter o atributo `data-testid="recipe-title"`.
  * O botão de compartilhar deve ter o atributo `data-testid="share-btn"`.
  * O botão de favoritar deve ter o atributo `data-testid="favorite-btn"`.
  * O texto da categoria deve ter o atributo `data-testid="recipe-category"`.
  * O elemento de instruções deve ter o atributo `data-testid="instructions"`.
  * O botão para finalizar a receita deve ter o atributo `data-testid="finish-recipe-btn"`.
</details>

---

### 38 – Desenvolva um checkbox para cada item da lista de ingredientes

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  Verifica se os atributos data-testid estão presentes na tela com suas respectivas quantidades.
  
  * Os ingredientes deverão ser exibidos em uma label:
    * Cada label deve ter o atributo `data-testid=${index}-ingredient-step`.
    * Dentro de cada label deverá existir um input checkbox.
</details>

---

### 39 - Implemente uma lógica que ao clicar no checkbox de um ingrediente, o nome dele deve ser "riscado" da lista

> Este requisito também inclui testes de cobertura da página `RecipeInProgress.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Ao clicar no checkbox, o item deve ser riscado mostrando assim que esse passo foi finalizado.
    * `text-decoration: line-through solid rgb(0, 0, 0)`
</details>

---

### 40 - Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Após clicar no checkbox em um dos ingredientes da receita, é esperado que o ingrediente permaneça marcado após a página recarregar. Para isso, desenvolva a lógica de verificação de acordo com a chave `inProgressRecipes` no localStorage.
</details>

---

### 41 - Desenvolva a lógica de favoritar e compartilhar (a lógica da tela de detalhes de uma receita se aplica aqui)

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se os botões estão disponíveis na tela de detalhes de uma comida.
  - Se os botões estão disponíveis na tela de detalhes de uma bebida.
  - Se apareceu a mensagem `Link copied!` e se o link da receita da comida foi copiado para o clipboard.
  - Se apareceu a mensagem `Link copied!` e se o link da receita da bebida foi copiado para o clipboard.
  - Verifica a comida favoritada.
  - Verifica a comida não favoritada.
  - Verifica a bebida favoritada.
  - Verifica a bebida não favoritada.
  - Favorita a comida.
  - Desfavorita a comida.
  - Favorita a bebida.
  - Desfavorita a bebida.
  - Favorita a receita de uma comida.
  - Favorita a receita de uma bebida.
</details>

---

### 42 - Implemente a solução de modo que o botão de finalizar receita (`Finish Recipe`) só esteja habilitado quando todos os ingredientes estiverem "checkados" (marcados)

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * O botão deve ficar desabilitado enquanto todos os checkboxes não forem marcados. 
  * O botão deve ficar fixo na parte de baixo da tela o tempo todo, de modo semelhante ao botão `Start Recipe`.
</details>

---

### 43 - Redirecione a pessoa usuária após ela clicar no botão de finalizar receita (`Finish Recipe`) para a página de receitas feitas, cuja rota deve ser `/done-recipes`
 
> Este requisito também inclui testes de cobertura da página `RecipeInProgress.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona após concluir uma receita de comida.
  - Se redireciona após concluir uma receita de bebida.
  - Se a receita é adicionada no localStorage, na chave `doneRecipes`, quando o botão `Finish Recipe` é clicado.
  - Verifica a cobertura de 90% da tela de receita em progresso.
</details>

---

## Tela de receitas feitas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `DoneRecipes.tsx` ou `DoneRecipes/index.tsx`.
> - 🔗 A rota usada para essa tela deve ser `/done-recipes`.

### 44 – Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  > Observação: lembre-se de que as receitas feitas estão salvas no `localStorage` na chave `doneRecipes`. Leia a seção `localStorage` para mais detalhes.

  * Todos os data-testids estão presentes:
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`.
    * O botão de filtro `Meals` deve ter o atributo `data-testid="filter-by-meal-btn"`.
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`.
    * A imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`.
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`.
    * O texto da data que a receita foi feita deve ter o atributo `data-testid="${index}-horizontal-done-date"`.
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`.
    * As `tags` da receita devem ter o atributo `data-testid=${index}-${tagName}-horizontal-tag`.
</details>

---

### 45 – Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela apresente: foto da receita, nome, categoria, nacionalidade, data em que a pessoa fez a receita, duas primeiras tags retornadas pela API e botão de compartilhar

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * A nacionalidade e a categoria devem ser exibidas no elemento com o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto deverá estar neste formato: `${nationality} - ${category}`.
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
</details>

---

### 46 – Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela apresente: foto da receita, nome, se é alcoólica, data em que a pessoa fez a receita e botão de compartilhar

> Este requisito também inclui testes de cobertura da página `DoneRecipes.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A informação se a bebida é alcoólica deve ser exibida no elemento com o atributo `data-testid="${index}-horizontal-top-text"`. 
  * O ícone do botão de compartilhar pode ser encontrado em `src/images/shareIcon.svg`.
</details>

---

### 47 – Desenvolva a solução de modo que o botão de compartilhar copie a URL da tela de detalhes da receita para o clipboard

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Ao clicar no botão de compartilhar, se aparece a mensagem `Link copied!`.
  - Se a URL da tela de detalhes da receita é copiada para o clipboard.
</details>

---

### 48 – Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * Os nomes dos botões devem ser `Meals`, `Drinks` e `All`, respectivamente.
  * Ao clicar no botão `Meals`, as receitas devem ser filtradas por comidas.
  * Ao clicar no botão `Drinks`, as receitas devem ser filtradas por bebidas;
  * Ao clicar no botão `All`, o filtro deve ser removido.
</details>

---

### 49 – Redirecione a pessoa usuária para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita

> Este requisito também inclui testes de cobertura da página `DoneRecipes.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se, ao clicar na foto da receita, a rota  muda para a tela de detalhes daquela receita.
  - Se, ao clicar no nome da receita, a rota muda para a tela de detalhes daquela receita.
  - Verifica a cobertura de 90% da tela de receitas feitas.
</details>

---

## Tela de receitas favoritas

> ⚠️ Observações:
>
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `FavoriteRecipes.tsx` ou `FavoriteRecipes/index.tsx`.
> - 🔗 A rota usada para essa tela deve ser `/favorite-recipes`.

### 50 – Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas) respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  > Observação: lembre-se de que as receitas feitas estão salvas no `localStorage` na chave `favoriteRecipes`. Leia a seção `localStorage` para mais detalhes.

    * Todos os data-testids estão presentes.
    * O botão de filtro `All` deve ter o atributo `data-testid="filter-by-all-btn"`.
    * O botão de filtro `Meals` deve ter o atributo `data-testid="filter-by-meal-btn"`.
    * O botão de `Drinks` deve ter o atributo `data-testid="filter-by-drink-btn"`.
    * A imagem do card de receita deve ter o atributo `data-testid="${index}-horizontal-image"`.
    * O texto da categoria da receita deve ter o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto do nome da receita deve ter o atributo `data-testid="${index}-horizontal-name"`.
    * O elemento de compartilhar a receita deve ter o atributo `data-testid="${index}-horizontal-share-btn"`.
    * O elemento de favoritar a receita deve ter o atributo `data-testid="${index}-horizontal-favorite-btn"`.

</details>

---

### 51 – Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela apresente: foto da receita, nome, categoria, nacionalidade, botão de compartilhar e botão de desfavoritar

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A nacionalidade e a categoria devem ser exibidas no elemento com o atributo `data-testid="${index}-horizontal-top-text"`.
    * O texto deverá estar neste formato: `${nationality} - ${category}`.
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

---

### 52 – Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela apresente: foto da receita, nome, se é alcoólica ou não, botão de compartilhar e botão de desfavoritar

> Este requisito também inclui testes de cobertura da página `FavoriteRecipes.tsx`.

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * A informação se a bebida é alcoólica deve ser exibida no elemento com o atributo `data-testid="${index}-horizontal-top-text"`. 
  * Os ícones dos botões podem ser encontrados em `src/images/shareIcon.svg` e em `src/images/blackHeartIcon.svg`, respectivamente.
</details>

---

### 53 – Desenvolva a solução de modo que o botão de compartilhar copie a URL da tela de detalhes da receita para o clipboard

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se, ao clicar no botão de compartilhar, aparece a mensagem `Link copied!`.
  - Se a URL da tela de detalhes da receita é copiada para o clipboard.
</details>

---

### 54 – Desenvolva a solução de modo que o botão de desfavoritar remova a receita da lista de receitas favoritas do `localStorage` e da tela

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se, ao clicar no botão de desfavoritar, a respectiva receita é removida da tela.
  - Se, ao clicar no botão de desfavoritar, a respectiva receita é removida do `localStorage`.
</details>

---

### 55 – Implemente dois botões que filtrem as receitas por comida ou bebida e um terceiro que remova todos os filtros

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>
  
  * Os nomes dos botões devem ser `Meals`, `Drinks` e `All`, respectivamente.
</details>

---

### 56 – Redirecione a pessoa usuária quando ela clicar na foto ou no nome da receita (nesse caso, a rota deve mudar para a tela de detalhes daquela receita)

> Este requisito também inclui testes de cobertura da página `FavoriteRecipes.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Ao clicar na foto da receita, a rota deve mudar para a tela de detalhes daquela receita.
  - Ao clicar no nome da receita, a rota deve mudar para a tela de detalhes daquela receita.
  - Verifica a cobertura de 90% da tela de receitas favoritas.
</details>

---

## Tela de perfil

> ⚠️ Observações: 
> 
> - 📁 Para os testes passarem é necessário que o componente seja chamado de `Profile.tsx` ou `Profile/index.tsx`.
> - 🔗 A rota usada para essa tela deve ser `/profile`.

### 57 – Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo

<br /><details>
  <summary><strong>Observações técnicas</strong></summary>

  * O elemento de e-mail deve ter o atributo `data-testid="profile-email"`.
  * O botão `Done Recipes` deve ter o atributo `data-testid="profile-done-btn"`.
  * O botão `Favorite Recipes` deve ter o atributo `data-testid="profile-favorite-btn"`.
  * O botão `Logout` deve ter o atributo `data-testid="profile-logout-btn"`.
</details>

---

### 58 – Implemente a solução de maneira que o e-mail da pessoa usuária esteja visível
  
<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se o e-mail armazenado em localStorage está visível.
</details>

---

### 59 – Implemente três botões: um de nome `Done Recipes`, um de nome `Favorite Recipes` e um de nome `Logout`

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se a tela contém os três botões.
</details>

---

### 60 – Redirecione a pessoa usuária de modo que, ao clicar no botão de `Done Recipes, a rota mude para a tela de receitas feitas

> Este requisito também inclui testes de cobertura do componente `Profile.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para a rota correta.
  - Verifica a cobertura de 45% do componente profile.
</details>

---

### 61 – Redirecione a pessoa usuária de modo que, ao clicar no botão de `Favorite Recipes`, a rota mude para a tela de receitas favoritas

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se redireciona para a rota correta.
</details>

---

### 62 – Redirecione a pessoa usuária de modo que, ao clicar no botão `Logout`, o `localStorage` seja limpo e a rota mude para a tela de login

> Este requisito também inclui testes de cobertura do componente `Profile.tsx`.

<br /><details>
  <summary><strong>O que será verificado</strong></summary>

  - Se limpa todas as chaves da localStorage.
  - Se a rota muda para a tela de login.
  - Verifica a cobertura de 90% do componente profile.
</details>
