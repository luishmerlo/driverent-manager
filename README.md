# DriveRent Manager
 
Sistema web de gestão de frota de veículos desenvolvido em **React com TypeScript**, como projeto prático da disciplina. O DriveRent Manager simula um painel administrativo para locadoras, com cadastro de veículos, controle de disponibilidade, rotas protegidas por autenticação e persistência de dados no navegador.
 
---
 
## Telas e Funcionalidades
 
### Home
- Tela de boas-vindas
- Apresentação do sistema DriveRent
 
### Cadastro de Veículo (`/cadastrar`)
- Formulário com campos de marca, modelo e placa (obrigatórios) e ano e preço (opcionais)
- Validação de campos com feedback visual via toast
- Simulação de envio ao servidor com `setTimeout` de 2 segundos
- Botão "Processando..." desativado durante o envio
- Redirecionamento automático para `/frota` após o cadastro via `useNavigate`
 
### Painel da Frota (`/frota`)
- Rotas aninhadas com sub-rotas `/frota/disponiveis` e `/frota/alugados`
- Listagem filtrada por status dos veículos via `<Outlet />`
- Botão "Ver Detalhes" que redireciona para a rota dinâmica do veículo
- Botão "Remover" para excluir veículos da frota com feedback via toast
 
### Detalhes do Veículo (`/veiculo/:id`)
- Exibe todos os dados do veículo selecionado (marca, modelo, placa, ano, preço, status)
- Utiliza o hook `useParams` para identificar o veículo pela placa
- Botão "Voltar para Lista" com `navigate(-1)` para retornar ao histórico anterior
 
### Página 404
- Exibe a mensagem "Veículo ou página não encontrados"
- Botão para retornar ao início
- Mapeada via rota curinga `path="*"`
 
### Navegação (NavBar)
- Links com `<NavLink />` destacando visualmente a rota ativa
- Botão "Entrar/Sair" para simular autenticação
- Header fixo no topo via `position: sticky`
 
### Rotas Protegidas
- Componente `ProtectedRoute` que redireciona para `/` caso o usuário não esteja logado
- Rotas `/cadastrar`, `/frota` e `/veiculo/:id` são protegidas
- Toast de aviso ao tentar acessar rota restrita sem autenticação
 
### Persistência de Dados
- Estado da frota gerenciado via Context API (`FrotaContext`)
- Dados persistidos no `localStorage` com `useEffect`
- Ao carregar a página, os dados são recuperados automaticamente
- Inicialização com dados mockados via `api-veiculos.json` caso não haja dados salvos
 
---
 
## Tecnologias Utilizadas
 
- [React](https://reactnative.dev/) com [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/) - navegação, rotas aninhadas, dinâmicas e protegidas
- [React Toastify](https://fkhadra.github.io/react-toastify/) - notificações e feedbacks visuais
- Context API - gerenciamento de estado global da frota
- CSS Modules - estilização com escopo por componente
- LocalStorage - persistência de dados no navegador
 
---
 
## Como Executar o Projeto
 
### Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
 
### Passo a passo
 
1. Clone o repositório:
```bash
git clone https://github.com/luishmerlo/driverent-manager.git
cd driverent-manager
```
 
2. Instale as dependências:
```bash
npm install
```
 
3. Inicie o projeto:
```bash
npm run dev
```
 
4. Acesse no navegador: `http://localhost:5173`
 
### Ou acesse diretamente pelo CodeSandbox
[Abrir no CodeSandbox](https://codesandbox.io/p/sandbox/r452gg)
