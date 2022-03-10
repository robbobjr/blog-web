- Aplicação iniciada com o script create next app, seguindo a (documentação)[https://nextjs.org/docs]

  ```npx create-next-app@latest```

- Adicionando typescript ao projeto
  ```yarn add typescript @types/react @types/node -D```

- Adicionando chkra-ui como style lib da aplicação + dependencias do chakra-ui seguindo a (documentação)[https://chakra-ui.com/guides/getting-started/nextjs-guide]
  ```yarn add @chakra-ui/react @emotion/react@^11 @emotion/styled@^11 framer-motion@^6```
`

### Get started

- Criar pasta style, extendendo o theme do chakra e adicionando como custom theme dentro do provider de contexto no _app.tsx para poder
utilizar o chakra-ui como design system da aplicação, evitando assim
a necessidade de lidar com css como forma de estilização.

- Criar pasta api dentro de pages para poder utilizar as funcionalidades do Next APIs como forma de desenvolver a aplicação enquanto ainda não temos uma API externa.

