# 💈 Sistema de Agendamento para Barbearia

Sistema web de agendamento desenvolvido para uma barbearia, permitindo que clientes consultem horários disponíveis e realizem, alterem ou cancelem seus agendamentos.

O projeto também conta com um **painel administrativo para o barbeiro**, permitindo o gerenciamento da agenda, dos atendimentos e dos horários de funcionamento.

> 🚧 Projeto em desenvolvimento

## ✨ Funcionalidades

### Cliente

* 📅 Agendamento online
* 🕐 Visualização de horários disponíveis
* 📱 Interface responsiva e mobile-first
* ✏️ Alteração de agendamento
* ❌ Cancelamento de agendamento
* 📋 Consulta de agendamentos
* 👤 Cadastro através de nome e telefone
* 📆 Agendamentos para até 30 dias à frente
* 🔄 Possibilidade de possuir múltiplos agendamentos futuros

### Barbeiro

* 📊 Painel administrativo
* 📅 Visualização da agenda
* ✏️ Gerenciamento de agendamentos
* ❌ Cancelamento de atendimentos
* ✅ Marcação de atendimento como concluído
* ⚙️ Configuração dos dias de funcionamento
* 🕐 Configuração dos horários de funcionamento
* ⏱️ Configuração do intervalo entre atendimentos
* 🚫 Bloqueio de períodos específicos da agenda

## 📋 Regras principais

* Cada corte possui duração fixa de **30 minutos**.
* O intervalo entre cortes é **configurável pelo barbeiro**.
* Os dias e horários de funcionamento são definidos pelo barbeiro.
* Cada dia pode possuir horários diferentes.
* O barbeiro pode bloquear períodos específicos.
* Horários ocupados ou bloqueados são apresentados ao cliente como **Indisponível**.
* O cliente pode agendar no mesmo dia, desde que o horário esteja disponível.
* Agendamentos podem ser realizados para os próximos **30 dias**.
* Alterações e cancelamentos pelo cliente são permitidos até **20 minutos antes** do horário agendado.
* Agendamentos cancelados permanecem registrados para preservar o histórico.

## 🛠️ Tecnologias

### Backend

* [Node.js](https://nodejs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Express](https://expressjs.com/)
* [Prisma](https://www.prisma.io/)
* [PostgreSQL](https://www.postgresql.org/)

### Frontend

* HTML
* CSS
* JavaScript / TypeScript
* Interface responsiva e mobile-first

## 🏗️ Estrutura do projeto

A aplicação será organizada separando as responsabilidades do frontend, backend e persistência de dados.

```text
barbearia/
├── src/
│   ├── ...
│
├── prisma/
│   └── schema.prisma
│
├── ...
│
└── README.md
```

> A estrutura será atualizada conforme o desenvolvimento do projeto avançar.

## 🗃️ Modelo inicial

As principais entidades previstas são:

```text
Cliente
   │
   │ 1:N
   ▼
Agendamento
   ▲
   │ N:1
   │
Barbeiro
   │
   │ 1:N
   ▼
Bloqueio
```

O modelo será refinado durante a etapa de modelagem do banco de dados.

## 🚀 Execução local

### Pré-requisitos

Antes de executar o projeto, tenha instalado:

* Node.js
* npm
* PostgreSQL

### Instalação

Clone o repositório:

```bash
git clone <URL_DO_REPOSITORIO>
```

Entre na pasta:

```bash
cd <PASTA_DO_PROJETO>
```

Instale as dependências:

```bash
npm install
```

Configure as variáveis de ambiente conforme o arquivo de configuração do projeto.

Execute as migrações do banco:

```bash
npx prisma migrate dev
```

Inicie o ambiente de desenvolvimento:

```bash
npm run dev
```

## 🧪 Testes

Os testes serão adicionados conforme as funcionalidades do sistema forem implementadas.

O foco inicial será validar principalmente:

* Regras de disponibilidade;
* Conflitos de agendamento;
* Intervalos entre atendimentos;
* Bloqueios;
* Alterações e cancelamentos;
* Limite de 30 dias;
* Regra dos 20 minutos para alteração/cancelamento.

## 📌 Status

### MVP

* [x] Definição dos requisitos
* [ ] Modelagem do banco de dados
* [ ] Configuração do PostgreSQL
* [ ] Configuração do Prisma
* [ ] API de agendamentos
* [ ] Regra de disponibilidade
* [ ] Configuração da agenda
* [ ] Bloqueio de horários
* [ ] Painel administrativo
* [ ] Interface do cliente
* [ ] Integração frontend + backend
* [ ] Testes
* [ ] Deploy

## 🔮 Possíveis evoluções

Funcionalidades que poderão ser adicionadas posteriormente:

* 👥 Suporte a múltiplos barbeiros
* ✂️ Cadastro de diferentes serviços
* 💰 Preços por serviço
* ⏱️ Duração diferente por serviço
* 🔐 Autenticação de clientes
* 🔑 Login com Google
* 📲 Notificações via WhatsApp
* 💳 Pagamentos online
* 📈 Relatórios e métricas

Essas funcionalidades não fazem parte do escopo inicial do MVP.

## 📄 Documentação

As regras completas do projeto estão documentadas em:

```text
docs/barbearia-requisitos.md
```

Esse documento funciona como referência para as decisões de negócio e deve ser atualizado conforme os requisitos evoluírem.

---

Desenvolvido por **Pedro Duarte**.