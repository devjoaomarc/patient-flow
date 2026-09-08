# Patient Flow

Plataforma para gestão inteligente do fluxo de pacientes em instituições de saúde, com gerenciamento de filas, check-in digital e comunicação em tempo real.

O **Patient Flow** tem como objetivo melhorar a organização do atendimento, reduzir filas e tempos de espera e proporcionar uma experiência mais eficiente para pacientes e profissionais.

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura separada entre frontend e backend, organizada em um monorepo:

```text
patient-flow/
├── pf-server/    # Backend / API
└── pf-web/       # Frontend Web
```

### Backend

O `pf-server` é responsável pelas regras de negócio, gerenciamento das filas, usuários, tickets e comunicação entre os diferentes componentes do sistema.

**Stack principal:**

- NestJS
- TypeScript
- PostgreSQL
- RabbitMQ
- Docker

### Frontend

O `pf-web` é a aplicação web utilizada pelos pacientes e profissionais para interação com o sistema.

**Stack principal:**

- React
- Vite
- TypeScript
- ESLint

## 🎯 Funcionalidades

Entre as principais funcionalidades planejadas estão:

- 🎟️ Emissão de tickets digitais
- 📱 Check-in através de QR Code
- 🏥 Gerenciamento de filas
- 🚨 Atendimento prioritário
- 👴 Prioridade para pacientes 80+
- 📺 Painel público de chamadas
- 🔔 Atualizações em tempo real
- ⏱️ Acompanhamento do tempo de espera
- 👨‍⚕️ Gerenciamento do atendimento
- 📊 Informações sobre o fluxo de pacientes

## 🔄 Fluxo

O fluxo principal do sistema consiste em:

```text
Paciente
   │
   ▼
Emissão do Ticket
   │
   ├── Normal
   ├── Prioridade
   └── Prioridade 80+
   │
   ▼
QR Code
   │
   ▼
Check-in
   │
   ▼
Fila de Atendimento
   │
   ▼
Chamada
   │
   ▼
Atendimento
```

## 📁 Repositórios

| Projeto     | Descrição                      |
| ----------- | ------------------------------ |
| `pf-server` | Backend e APIs do Patient Flow |
| `pf-web`    | Aplicação web do Patient Flow  |

## 🚀 Desenvolvimento

Clone o repositório:

```bash
git clone <repository-url>
cd patient-flow
```

### Backend

```bash
cd pf-server
npm install
npm run start:dev
```

### Frontend

Em outro terminal:

```bash
cd pf-web
npm install
npm run dev
```

## 🐳 Docker

O ambiente de desenvolvimento utiliza Docker para facilitar a execução dos serviços de infraestrutura.

Serviços previstos:

- PostgreSQL
- RabbitMQ

## 📌 Status

🚧 **Em desenvolvimento**

O projeto está sendo desenvolvido como um laboratório para explorar arquitetura de sistemas distribuídos, comunicação assíncrona, aplicações em tempo real e gerenciamento de fluxo de atendimento.

## 📄 Licença

Este projeto está sob desenvolvimento e ainda não possui uma licença pública definida.
