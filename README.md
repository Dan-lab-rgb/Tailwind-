# Equipe Tailwind CSS — Seminário 02

<p align="center">
  <img src="https://img.shields.io/badge/Tailwind_CSS-Estudo-38BDF8?style=for-the-badge&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  <img src="https://img.shields.io/badge/Status-Em_desenvolvimento-22C55E?style=for-the-badge" alt="Em desenvolvimento"/>
  <img src="https://img.shields.io/badge/SENAI-Ribeirão_Preto-166534?style=for-the-badge" alt="SENAI Ribeirão Preto"/>
</p>

<p align="center">
  <img src="https://raw.githubusercontent.com/tailwindlabs/tailwindcss/HEAD/.github/logo-light.svg" alt="Tailwind CSS" width="300"/>
</p>

<p align="center">
   <strong>Um portfólio coletivo desenvolvido com Tailwind CSS, reunindo perfis, interesses e uma demonstração prática de interfaces
  responsivas.</strong>
</p>

---

https://dan-lab-rgb.github.io/Tailwind-


## Sobre o projeto

 Este repositório reúne o projeto prático desenvolvido pela equipe para o Seminário 02 de Frameworks Front-end do SENAI Ribeirão Preto.

  A aplicação é um portfólio coletivo construído com Tailwind CSS. Cada integrante possui um card com identidade visual própria,
  informações pessoais e recomendações. O site também inclui filtros de recomendações, menu
  responsivo e animações de entrada.

  O objetivo é demonstrar, na prática, como o Tailwind CSS pode ser usado para criar interfaces modernas, responsivas e personalizadas
  usando classes utilitárias.
  
## Objetivos

- Compreender o funcionamento do Tailwind CSS.
- Aprender a instalar e configurar o framework.
- Explorar classes utilitárias para estilização de páginas.
- Desenvolver layouts adaptáveis a diferentes tamanhos de tela.
- Conhecer os recursos de padronização e organização do CSS.
- Comparar o Tailwind CSS com o Bootstrap.
- Aplicar os conhecimentos em um projeto prático.
- Criar uma interface visualmente personalizada para cada integrante.
- Aplicar responsividade usando os breakpoints do Tailwind CSS.
- Desenvolver interações com JavaScript, como carregamento do JSON, filtros, menu responsivo e animações.

## Conteúdo programático

O projeto está organizado em nove tópicos principais:

| Nº | Tópico | Descrição |
|:--:|---|---|
| 01 | Introdução ao framework | Conceitos, características e funcionamento do Tailwind CSS. |
| 02 | Instalação e estrutura inicial | Configuração do ambiente e primeiros passos. |
| 03 | Layout e responsividade | Criação de layouts adaptáveis a diferentes telas. |
| 04 | Classes utilitárias | Estilização de elementos utilizando classes prontas. |
| 05 | Preflight (padronização) | Entendimento dos estilos básicos aplicados pelo framework. |
| 06 | Comparação com o Bootstrap | Diferenças de abordagem, estrutura e utilização. |
| 07 | Prós e contras | Vantagens, limitações e cenários de uso. |
| 08 | Projeto | Aplicação dos conhecimentos desenvolvidos durante os estudos. |
| 09 | Demonstração prática | Apresentação dos recursos utilizados e do resultado obtido. |

## O que é Tailwind CSS?

O Tailwind CSS é um framework CSS baseado em classes utilitárias. Em vez de criar uma classe CSS específica para cada componente, é possível combinar classes que controlam propriedades como cores, espaçamentos, fontes, bordas, alinhamento e responsividade.

Exemplo:

```html
<div class="rounded-xl bg-green-700 p-6 text-white shadow-lg">
  <h2 class="text-2xl font-bold">
    Meu primeiro componente
  </h2>

  <p class="mt-2 text-green-100">
    Criando interfaces com Tailwind CSS.
  </p>
</div>
```

Nesse exemplo, as classes definem o arredondamento, a cor de fundo, o espaçamento interno, a cor do texto e a sombra do componente.

## Tecnologias utilizadas

<p>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS"/>
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/HTML">
    <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" alt="HTML5"/>
  </a>
  <a href="https://developer.mozilla.org/pt-BR/docs/Web/CSS">
    <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3"/>
  </a>
  <a href="https://git-scm.com/">
    <img src="https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white" alt="Git"/>
  </a>
  <a href="https://github.com/">
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github&logoColor=white" alt="GitHub"/>
  </a>
</p>

- **Tailwind CSS:** estilização por meio de classes utilitárias.
- **HTML5:** estruturação dos elementos das páginas.
- **CSS3:** conceitos fundamentais de estilos para a web.
- **Git:** controle de versão do projeto.
- **GitHub:** hospedagem do repositório e colaboração entre os integrantes.

## Instalação e primeiros passos

Este projeto é um site estático. Não é necessário instalar Node.js, npm ou executar um processo de build. O Tailwind CSS é carregado diretamente pela CDN no index.html.

Para carregar os integrantes, o src/script.js faz uma requisição fetch() para data/integrantes.json e monta os cards no HTML. Como o navegador bloqueia esse carregamento quando o arquivo é aberto diretamente com file://, use uma hospedagem estática ou o Live Server do VS Code.

Estrutura principal:

```text
index.html
├── data/integrantes.json
├── src/script.js
├── src/style.css
└── recursos/
    ├── membros/
    └── decorações/
```

O Tailwind é incluído no cabeçalho com:

```html
<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
```

Depois, basta abrir o projeto com um servidor estático e acessar o index.html.

## Layout e responsividade

Um dos recursos importantes do Tailwind CSS é a possibilidade de aplicar estilos diferentes de acordo com o tamanho da tela.

Exemplo:

```html
<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
  <div class="rounded-lg bg-green-100 p-4">
    Primeiro card
  </div>

  <div class="rounded-lg bg-green-200 p-4">
    Segundo card
  </div>

  <div class="rounded-lg bg-green-300 p-4">
    Terceiro card
  </div>
</div>
```

Nesse exemplo, o layout utiliza uma coluna em telas menores, duas colunas a partir do breakpoint `md` e três colunas a partir de `lg`.

## Tailwind CSS x Bootstrap

| Característica | Tailwind CSS | Bootstrap |
|---|---|---|
| Abordagem | Classes utilitárias | Componentes e classes predefinidas |
| Personalização | Combinação de utilitários e configuração de tema | Componentes prontos e variáveis de estilo |
| Desenvolvimento | Estilização diretamente no HTML | Utilização de componentes e classes do framework |
| Componentes prontos | Menos componentes visuais prontos por padrão | Grande variedade de componentes prontos |
| Responsividade | Prefixos como `sm:`, `md:` e `lg:` | Grid e classes responsivas |
| Indicado para | Interfaces personalizadas | Interfaces que aproveitam componentes padronizados |

Os dois frameworks podem ser utilizados no desenvolvimento de interfaces modernas. A escolha depende das necessidades do projeto, da experiência da equipe e do nível de personalização desejado.

## Vantagens e desvantagens

### Vantagens

- Facilita a criação de layouts responsivos.
- Permite personalizar os elementos com bastante liberdade.
- Reduz a necessidade de criar classes CSS específicas para cada componente.
- Mantém as principais regras de estilo próximas ao HTML.
- Oferece recursos para padronizar cores, espaçamentos e tipografia.

### Desvantagens

- O HTML pode ficar extenso quando muitas classes são utilizadas.
- É necessário aprender a nomenclatura das classes utilitárias.
- A repetição de estilos pode dificultar a manutenção sem uma boa organização.
- Componentes visuais completos exigem mais trabalho do que em frameworks com bibliotecas de componentes prontas.

## Projeto e demonstração prática

A etapa prática tem como finalidade aplicar os conceitos estudados durante o desenvolvimento do projeto, demonstrando o uso de classes utilitárias, organização visual e responsividade.

A demonstração permitirá observar como o Tailwind CSS pode ser utilizado na construção de interfaces e como suas classes ajudam a controlar a aparência dos elementos.

**Repositório oficial do grupo:**

[![Acessar repositório](https://img.shields.io/badge/GitHub-Acessar_repositório-181717?style=for-the-badge&logo=github)](https://github.com/Dan-lab-rgb/Tailwind-)

> O link de uma demonstração publicada ainda não foi informado. Quando o projeto estiver disponível em uma página pública, o endereço poderá ser adicionado nesta seção.

## Integrantes do grupo

Este projeto foi desenvolvido em grupo, com a proposta de compartilhar conhecimentos e explorar os recursos do Tailwind CSS.

<p align="center">
  <strong>Conheça os integrantes</strong>
</p>

<table>
  <tr>
    <td align="center" width="33%">
      <img src="https://github.com/ruan-marcelo.png" width="110" height="110" alt="Foto de Ruan Marcelo" style="border-radius: 50%;"/>
      <br/>
      <strong>Ruan Marcelo</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/ruan-marcelo">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
      <br/>
      <a href="https://www.linkedin.com/in/ruan-marcelo/">
        <img src="https://img.shields.io/badge/LinkedIn-0A66C2?style=flat-square&logo=linkedin&logoColor=white" alt="LinkedIn"/>
      </a>
      <a href="https://www.instagram.com/ruan.luzzz/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=flat-square&logo=instagram&logoColor=white" alt="Instagram"/>
      </a>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/LukasZ2K.png" width="110" height="110" alt="Foto de Lucas Borges"/>
      <br/>
      <strong>Lucas Borges</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/LukasZ2K">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/Luiz-aoms.png" width="110" height="110" alt="Foto de Luiz Augusto"/>
      <br/>
      <strong>Luiz Augusto</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/Luiz-aoms">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="https://github.com/Guilherme-Bobato.png" width="110" height="110" alt="Foto de Guilherme Bobato"/>
      <br/>
      <strong>Guilherme Bobato</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/Guilherme-Bobato">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/DiogoCazarotte.png" width="110" height="110" alt="Foto de Diogo Cazarotte"/>
      <br/>
      <strong>Diogo Cazarotte</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/DiogoCazarotte">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
    <td align="center" width="33%">
      <img src="https://github.com/lorena-lodi.png" width="110" height="110" alt="Foto de Lorena"/>
      <br/>
      <strong>Lorena Lodi</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/lorena-lodi">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
  </tr>
  <tr>
    <td align="center" width="33%">
      <img src="https://github.com/Thavine.png" width="110" height="110" alt="Foto de Thavine"/>
      <br/>
      <strong>Thavine</strong>
      <br/>
      <sub>Integrante do projeto</sub>
      <br/><br/>
      <a href="https://github.com/Thavine">
        <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>
      </a>
    </td>
  </tr>
</table>

> As fotos dos integrantes são carregadas pelos respectivos perfis do GitHub. Os links de LinkedIn e Instagram são exibidos apenas para os integrantes cujos endereços foram informados.

## Créditos e referências

O projeto utiliza como referência a documentação oficial do Tailwind CSS e materiais de consulta relacionados ao desenvolvimento web.

- [Tailwind CSS — Documentação oficial](https://tailwindcss.com/docs)
- [Tailwind CSS — Instalação](https://tailwindcss.com/docs/installation)
- [MDN Web Docs — HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [MDN Web Docs — CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Bootstrap — Documentação oficial](https://getbootstrap.com/docs/)

**Instituição:** SENAI Ribeirão Preto  
**Projeto:** Tailwind CSS — Guia de Estudos  
**Repositório:** [Dan-lab-rgb/Tailwind-](https://github.com/Dan-lab-rgb/Tailwind-)

---

<p align="center">
  Desenvolvido para fins educacionais e de aprendizagem em desenvolvimento web.
  <br/>
  <strong>Tailwind CSS — Aprender, praticar e desenvolver.</strong>
</p>
