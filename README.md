# 🛸 Rick and Morty API Finder

![Expo](https://img.shields.io/badge/Expo-54.0.33-04111f?style=for-the-badge&logo=expo&logoColor=B6FF3B)
![React Native](https://img.shields.io/badge/React_Native-0.81.5-08111f?style=for-the-badge&logo=react&logoColor=61DAFB)
![Rick & Morty API](https://img.shields.io/badge/Rick_%26_Morty_API-portal%20ativo-B6FF3B?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-pronto%20para%20entrega-35d07f?style=for-the-badge)

```text
╔════════════════════════════════════════════╗
║          RICK AND MORTY API FINDER        ║
║              WUBBA LUBBA DUB DUB          ║
╚════════════════════════════════════════════╝
```

**Wubba lubba dub dub.**

Um portal em Expo para caçar personagens da Rick and Morty API e exibir nome, espécie, status e
imagem com energia de multiverso.

---

## 🌀 Portal Interdimensional

Este aplicativo foi desenvolvido para a atividade de consumo de API pública no React Native. A ideia
é simples: digitar o nome de um personagem, tocar no botão de busca e ver o resultado em uma
interface com clima de laboratório do Rick.

## 👽 O que esse portal faz

- Título da aplicação com tema Rick and Morty.
- Campo de entrada para digitar o nome do personagem.
- Botão para buscar os dados na API.
- Uso de `fetch` com `async/await`.
- Estados com `useState`.
- Mensagem de carregamento.
- Tratamento de erro visível na tela e com `Alert`.
- Exibição da imagem, nome, espécie, status e origem do personagem.

## 🧪 Dados do multiverso

| Campo                             | Informação                                                                                   |
| --------------------------------- | -------------------------------------------------------------------------------------------- |
| API escolhida                     | Rick and Morty API                                                                           |
| Endpoint base                     | `https://rickandmortyapi.com/api/character`                                                  |
| Busca usada no app                | `https://rickandmortyapi.com/api/character/?name=Rick`                                       |
| A API funcionou na rede do SENAI? | Testada com sucesso neste ambiente                                                           |
| Precisou trocar de API?           | Não                                                                                          |
| Maior dificuldade                 | Tratar corretamente o caso de personagem inexistente e manter o retorno visual claro na tela |

## ⚙️ Como abrir o portal

Dentro da pasta do projeto, rode:

```bash
npm install
npm run web
```

Se quiser abrir no celular ou emulador:

```bash
npm run android
npm run ios
```

## 📱 Como usar

1. Abra o app.
2. Digite o nome de um personagem, por exemplo: `Rick`, `Morty`, `Summer`.
3. Toque em `BUSCAR PERSONAGEM`.
4. Aguarde o carregamento do portal.
5. Veja os dados retornados pela API.

## ✅ Checklist da missão

- [x] Título da aplicação
- [x] Campo de entrada
- [x] Botão para buscar os dados
- [x] Uso de `fetch`
- [x] Uso de `async/await`
- [x] Estados com `useState`
- [x] Mensagem de carregamento
- [x] Tratamento de erro
- [x] Exibição dos dados retornados pela API
- [x] Interface organizada

## 📸 Galeria de portais

| Tela inicial                           | Resultado da busca                              |
| -------------------------------------- | ----------------------------------------------- |
| 🛰️ Portal fechado                      | 👾 Portal aberto                                |
| Adicione aqui o print da tela inicial. | Adicione aqui o print com o resultado da busca. |

## 📄 Relatório de bordo

- API escolhida: Rick and Morty API
- Endpoint utilizado: `https://rickandmortyapi.com/api/character/?name=Rick`
- A API funcionou na rede do SENAI? Testada com sucesso neste ambiente.
- Precisou trocar de API? Não
- Maior dificuldade: tratar corretamente o caso de personagem inexistente e manter o retorno visual
  claro na tela.

## 🎨 Identidade visual

O app foi estilizado com inspiração direta no universo da série:

- Fundo escuro espacial.
- Brilho verde de portal.
- Card de resultado com destaque.
- Botão com contraste forte e energia de laboratório.
- Tipografia centralizada para dar cara de interface dimensional.

## 🔋 Fechamento

Se a busca funcionar, o portal abriu. Se aparecer erro, o multiverso resolveu aprontar.

> Wubba lubba dub dub.
