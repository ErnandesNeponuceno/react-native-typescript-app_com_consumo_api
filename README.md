
# 🚗 Lamborghini Showcase App

Este é um projeto em **React Native** que simula a exibição de carros da Lamborghini. 

---

## 🛠️ Funcionalidades

- **Listagem de Carros**
  - Visualize informações detalhadas, incluindo:
    - Nome.
    - Imagem do modelo.
    - Preço.

- **Navegação entre Modelos**
  - Use botões para alternar entre os diferentes modelos disponíveis.

- **Consumo de API**
  - Dados dos carros são consumidos dinamicamente de uma API externa.

---

## 🎯 Estrutura do Projeto

### **Estrutura de Diretórios**
```plaintext
src/
├── api/
│   └── getCars.ts              # Função para consumir dados da API
├── components/
│   ├── BuyButton/
│   │   ├── index.tsx           # Componente de botão "Buy This"
│   │   └── style.tsx           # Estilos do botão de compra
│   ├── CardView/
│   │   ├── index.tsx           # Componente principal que exibe detalhes do carro
│   │   ├── props.ts            # Modelo dos dados de carro
│   │   ├── service.ts          # Funções para navegação entre modelos
│   │   └── styles.ts           # Estilização do CardView
│   └── Divider/                # Componente de divisão para layout
├── constants/
│   └── car.ts                  # URLs base para assets e API
├── screens/
│   └── HomeScreen/
│       ├── HomeScreen.tsx      # Tela principal do app
│       └── HomeStyle.tsx       # Estilização da HomeScreen
```

---

## 💻 Tecnologias Utilizadas

<div style="display: inline_block">
  <img alt="React Native" src="https://img.shields.io/badge/React_Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB">
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white">
  <img alt="Expo" src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white">
</div>

---

## 🚀 Como Rodar o Projeto?

### **Pré-requisitos**
- Node.js e npm instalados.
- Expo CLI instalado globalmente:
  ```bash
  npm install -g expo-cli
  ```

### **Passos**
1. Clone o repositório:
   ```bash
   git clone https://github.com/ErnandesNeponuceno/react-native-typescript-app_com_consumo_api
   ```
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Inicie o servidor de desenvolvimento:
   ```bash
   expo start
   ```
4. Escaneie o QR Code no terminal com o aplicativo Expo Go para visualizar no seu dispositivo físico ou use um emulador.

---

## 🔗 APIs Utilizadas

- **Car API**
  - URL: [Fake Lamborghini API](https://digitalinnovationone.github.io/fake-data-api-lamborghini/api/lamborghini.json)
  - Contém detalhes sobre os modelos de carros, incluindo IDs, nomes e preços.

---


## 📄 Documentação Adicional
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)

---

## ✨ Créditos

- **Videoaula:** ✨Formação React Native Developer - 
  [DIO](https://web.dio.me/track/formacao-react-native-developer)
