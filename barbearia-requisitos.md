# Sistema de Agendamento — Barbearia

> Documento de referência do projeto.  
> Este arquivo será usado como guia durante o desenvolvimento do sistema e deverá ser atualizado quando os requisitos forem alterados.

## 1. Objetivo

Construir um sistema de agendamento online para uma barbearia.

O cliente deverá conseguir realizar e gerenciar seus agendamentos pelo celular, enquanto o barbeiro terá um painel administrativo para visualizar e gerenciar a agenda.

O sistema deve ser **mobile-first/responsivo**, funcionando bem principalmente em dispositivos móveis.

---

## 2. Escopo do MVP

O MVP contempla:

- Agendamento online pelo cliente.
- Visualização de datas e horários disponíveis.
- Agenda baseada em horários configurados pelo barbeiro.
- Duração do corte configurável por barbeiro, usando os valores `15_MIN`, `30_MIN`, `45_MIN` ou `60_MIN`.
- Intervalo entre atendimentos configurável por barbeiro, em minutos. O intervalo pode ser `0` ou qualquer valor inteiro não negativo.
- Configuração dos dias de funcionamento.
- Configuração dos horários de funcionamento por dia.
- Bloqueio de períodos específicos pelo barbeiro.
- Alteração de agendamentos pelo cliente.
- Cancelamento de agendamentos pelo cliente.
- Painel administrativo do barbeiro.
- Gerenciamento dos agendamentos pelo barbeiro.
- Cancelamento de agendamentos pelo barbeiro.
- Marcação de agendamento como concluído.
- Histórico dos agendamentos, mantendo registros cancelados.

---

## 3. Regras da agenda

### 3.1 Duração do corte

A duração do corte é uma configuração individual do barbeiro. Os valores permitidos serão padronizados por ENUM:

```text
15_MIN
30_MIN
45_MIN
60_MIN
```

A duração do corte é independente do intervalo entre atendimentos.

Exemplo:

```text
Corte iniciado às 14:00
Fim do corte: 14:30
```

### 3.2 Intervalo entre cortes

O intervalo é **modular** e definido pelo barbeiro.

O intervalo representa o período entre o término de um corte e o início do próximo.

Exemplo:

```text
Duração do corte: 30 minutos
Intervalo: 15 minutos

12:00 → 12:30  Corte
12:30 → 12:45  Intervalo
12:45 → 13:15  Corte
13:15 → 13:30  Intervalo
13:30 → 14:00  Corte
```

Outro exemplo:

```text
Duração do corte: 30 minutos
Intervalo: 30 minutos

12:00 → 12:30  Corte
12:30 → 13:00  Intervalo
13:00 → 13:30  Corte
```

**Importante:** alterar o intervalo não altera a duração do corte.

### 3.3 Dias de funcionamento

O barbeiro decide quais dias da semana estarão disponíveis para atendimento.

Exemplo:

```text
Segunda:  Aberto
Terça:    Aberto
Quarta:   Aberto
Quinta:   Aberto
Sexta:    Aberto
Sábado:   Aberto
Domingo:  Fechado
```

Essa configuração deve ser editável.

### 3.4 Horários de funcionamento

O barbeiro também decide o horário de funcionamento.

Os horários podem ser diferentes em cada dia.

Exemplo:

```text
Segunda: 12:00–18:00
Terça:   12:00–18:00
Quarta:  14:00–20:00
Quinta:  12:00–18:00
Sexta:   12:00–18:00
Sábado:  10:00–16:00
Domingo: Fechado
```

A ideia é existir uma configuração padrão que possa ser utilizada como base e, posteriormente, cada dia possa ser modificado individualmente.

---

## 4. Bloqueios de horário

O barbeiro poderá bloquear períodos específicos em que não estará disponível.

Exemplo:

```text
Horário normal:
14:00–20:00

Bloqueio:
16:00–17:00
```

Nesse caso:

```text
14:00  Disponível
14:30  Disponível
15:00  Disponível
15:30  Disponível
16:00  Indisponível
16:30  Indisponível
17:00  Disponível
...
```

Para o cliente, não deve importar o motivo da indisponibilidade.

Tanto um horário ocupado por outro cliente quanto um horário bloqueado pelo barbeiro devem aparecer como:

**Indisponível**

Internamente, entretanto, o sistema deve distinguir:

- Agendamento;
- Bloqueio.

---

## 5. Regras de agendamento do cliente

### 5.1 Antecedência

O cliente pode agendar para qualquer horário permitido dentro dos **próximos 30 dias**.

O mesmo dia também é permitido, desde que o horário ainda esteja disponível.

Não existe uma antecedência mínima específica para realizar o agendamento.

### 5.2 Dados necessários

Para realizar um agendamento, o cliente deverá informar:

- Nome;
- Sobrenome;
- Telefone.

### 5.3 Múltiplos agendamentos

Um mesmo cliente pode possuir **vários agendamentos futuros**.

Não haverá uma limitação de apenas um agendamento por cliente.

### 5.4 Alteração

O cliente poderá alterar seu agendamento até **20 minutos antes do horário marcado**.

O novo horário escolhido deverá estar disponível.

### 5.5 Cancelamento

O cliente poderá cancelar seu agendamento até **20 minutos antes do horário marcado**.

Após esse limite, a alteração/cancelamento pelo cliente não deverá ser permitida.

### 5.6 Histórico

Agendamentos cancelados não devem ser simplesmente excluídos do banco.

Eles devem permanecer registrados com status de cancelamento, permitindo manter o histórico.

---

## 6. Status dos agendamentos

Os estados previstos para um agendamento são:

```text
AGENDADO
CANCELADO
CONCLUIDO
```

### AGENDADO

O horário está reservado para um cliente.

### CANCELADO

O agendamento foi cancelado.

O registro permanece no sistema para histórico.

### CONCLUIDO

O atendimento foi realizado e marcado como concluído pelo barbeiro.

---

## 7. Painel do barbeiro

O barbeiro terá acesso a uma área administrativa. A autenticação do barbeiro será feita por Google, utilizando um `googleId` único para identificar sua conta.

No painel, ele deverá conseguir:

- Visualizar os agendamentos;
- Gerenciar os agendamentos;
- Cancelar agendamentos;
- Marcar atendimentos como concluídos;
- Configurar os dias de funcionamento;
- Configurar os horários de funcionamento;
- Definir o intervalo entre atendimentos;
- Bloquear períodos específicos da agenda.


---

## 8. Disponibilidade dos horários

A disponibilidade não deve ser determinada apenas pelo frontend.

O backend deve validar a disponibilidade antes de criar ou alterar um agendamento.

Um horário somente poderá ser considerado disponível quando:

1. O dia estiver configurado como dia de funcionamento;
2. O horário estiver dentro do expediente daquele dia;
3. O horário respeitar a duração fixa de 30 minutos;
4. O horário não estiver ocupado por outro agendamento válido;
5. O horário não estiver dentro de um bloqueio;
6. O agendamento respeitar as regras de antecedência;
7. No caso de alteração/cancelamento, forem respeitados os 20 minutos de antecedência.

O sistema também deve impedir conflitos/double booking entre agendamentos. Para isso, a regra de integridade será: um barbeiro não pode possuir mais de um agendamento `AGENDADO` para a mesma combinação de `data + horario`. Agendamentos `CANCELADO` permanecem no histórico e não devem impedir que o horário seja reservado novamente.

---

## 9. Modelo conceitual

### 9.1 Cliente

Representa a pessoa que realiza os agendamentos.

```text
Cliente
├── id         → UUID, PK
├── nome       → VARCHAR, NOT NULL
├── sobrenome  → VARCHAR, NOT NULL
├── telefone   → VARCHAR, NOT NULL
└── googleId   → VARCHAR, NOT NULL, UNIQUE
```

Relacionamento:

```text
Cliente 1:N Agendamento
```

Um cliente pode possuir vários agendamentos futuros.

### 9.2 Barbeiro

Representa o profissional responsável pelos atendimentos.

```text
Barbeiro
├── id             → UUID, PK
├── nome           → VARCHAR, NOT NULL
├── sobrenome      → VARCHAR, NOT NULL
├── telefone       → VARCHAR, NOT NULL, UNIQUE
├── googleId       → VARCHAR, NOT NULL, UNIQUE
├── duracao_corte  → ENUM, NOT NULL
└── intervalo      → INTEGER, NOT NULL
```

`duracao_corte` aceita `15_MIN`, `30_MIN`, `45_MIN` ou `60_MIN`.

`intervalo` representa a pausa entre o fim de um corte e o início do próximo e deve ser um número inteiro não negativo.

Relacionamentos:

```text
Barbeiro 1:N Agendamento
Barbeiro 1:N Bloqueio
Barbeiro 1:N HorarioTrabalho
Barbeiro 1:N ExcecaoHorario
```

Mesmo existindo inicialmente apenas um barbeiro, a estrutura utiliza `barbeiro_id` nos registros relacionados para permitir a futura expansão para múltiplos barbeiros.

### 9.3 Agendamento

Representa uma reserva feita por um cliente.

```text
Agendamento
├── id          → UUID, PK
├── cliente_id  → UUID, FK, NOT NULL
├── barbeiro_id → UUID, FK, NOT NULL
├── data        → DATE, NOT NULL
├── horario     → TIME, NOT NULL
├── status      → ENUM, NOT NULL
└── criado_em   → TIMESTAMP, NOT NULL
```

Status:

```text
AGENDADO
CANCELADO
CONCLUIDO
```

Relacionamentos:

```text
Agendamento N:1 Cliente
Agendamento N:1 Barbeiro
```

Regra de integridade principal:

> Para `status = AGENDADO`, a combinação `barbeiro_id + data + horario` deve ser única. Agendamentos cancelados permanecem no banco e não ocupam novamente o horário.

### 9.4 Bloqueio

Representa um período em que o barbeiro não estará disponível para atendimento.

```text
Bloqueio
├── id             → UUID, PK
├── barbeiro_id    → UUID, FK, NOT NULL
├── data           → DATE, NOT NULL
├── horario_inicio → TIME, NOT NULL
├── horario_fim    → TIME, NOT NULL
├── motivo         → ENUM, NOT NULL
└── criado_em      → TIMESTAMP, NOT NULL
```

Valores de `motivo`:

```text
ALMOCO
COMPROMISSO
OUTRO
```

O bloqueio é uma entidade separada de `Agendamento`, pois não existe cliente associado a ele.

### 9.5 HorarioTrabalho

Representa o horário semanal padrão do barbeiro.

```text
HorarioTrabalho
├── id             → UUID, PK
├── barbeiro_id    → UUID, FK, NOT NULL
├── dia_semana     → ENUM, NOT NULL
├── horario_inicio → TIME, NOT NULL
├── horario_fim    → TIME, NOT NULL
└── ativo          → BOOLEAN, NOT NULL
```

`dia_semana` utiliza os valores:

```text
SEGUNDA
TERCA
QUARTA
QUINTA
SEXTA
SABADO
DOMINGO
```

Regra: um barbeiro possui no máximo uma configuração para cada dia da semana. Se o barbeiro alterar a configuração de um dia, o registro existente deve ser atualizado em vez de criar outro.

Constraint correspondente:

```text
UNIQUE (barbeiro_id, dia_semana)
```

### 9.6 ExcecaoHorario

Representa uma alteração específica na jornada para uma determinada data, sem alterar a configuração semanal.

```text
ExcecaoHorario
├── id             → UUID, PK
├── barbeiro_id    → UUID, FK, NOT NULL
├── data           → DATE, NOT NULL
├── horario_inicio → TIME, NOT NULL
├── horario_fim    → TIME, NOT NULL
└── ativo          → BOOLEAN, NOT NULL
```

Regra: um barbeiro possui no máximo uma exceção para cada data. Se a exceção de uma data for alterada, o registro existente deve ser atualizado.

Constraint correspondente:

```text
UNIQUE (barbeiro_id, data)
```

Uma exceção com `ativo = false` representa um dia de folga específico. Nesse caso, os horários armazenados são ignorados.

---

## 9.7 Regras de integridade das entidades

As seguintes regras devem ser garantidas pelo banco ou pela camada de aplicação, conforme a natureza da regra:

1. `HorarioTrabalho`: `horario_fim` deve ser maior que `horario_inicio`.
2. `ExcecaoHorario`: `horario_fim` deve ser maior que `horario_inicio` quando a exceção estiver ativa.
3. `Bloqueio`: `horario_fim` deve ser maior que `horario_inicio`.
4. `Barbeiro`: `intervalo` deve ser maior ou igual a `0`.
5. `HorarioTrabalho`: `barbeiro_id + dia_semana` é único.
6. `ExcecaoHorario`: `barbeiro_id + data` é único.
7. `Agendamento`: `barbeiro_id + data + horario` é único entre registros com status `AGENDADO`.
8. Agendamentos cancelados não devem ser excluídos automaticamente, pois fazem parte do histórico.
9. A exclusão de um `Cliente` ou `Barbeiro` não deve apagar automaticamente seus agendamentos históricos.
10. Ao excluir um `Barbeiro`, registros de `Bloqueio`, `HorarioTrabalho` e `ExcecaoHorario` podem ser removidos em cascata, pois são configurações dependentes do barbeiro.

---

## 10. Configuração da agenda

A configuração da agenda deverá contemplar pelo menos:

### Configuração padrão

Uma configuração-base definida pelo barbeiro, por exemplo:

```text
Horário padrão:
12:00–18:00

Duração do corte:
30 minutos (exemplo)

Intervalo:
15 minutos
```

### Configuração por dia

Cada dia da semana poderá ser configurado individualmente.

Exemplo:

```text
Segunda: 12:00–18:00
Terça:   12:00–18:00
Quarta:  14:00–20:00
Quinta:  12:00–18:00
Sexta:   12:00–18:00
Sábado:  10:00–16:00
Domingo: Fechado
```

A configuração padrão serve como base, enquanto a configuração individual permite exceções na rotina semanal.

---

## 11. Fluxo básico do cliente

Fluxo esperado:

```text
Cliente acessa o sistema
        ↓
Escolhe a data
        ↓
Sistema calcula os horários disponíveis
        ↓
Cliente escolhe um horário
        ↓
Informa nome e telefone
        ↓
Sistema valida novamente a disponibilidade
        ↓
Agendamento criado
```

O backend deve realizar uma nova validação no momento da criação para evitar conflitos caso outro cliente tenha reservado o mesmo horário simultaneamente.

---

## 12. Fluxo básico do barbeiro

```text
Barbeiro acessa o painel
        ↓
Visualiza a agenda
        ↓
Pode gerenciar os agendamentos
        ↓
Pode cancelar ou concluir atendimentos
        ↓
Pode configurar dias e horários
        ↓
Pode definir o intervalo entre cortes
        ↓
Pode bloquear períodos específicos
```

---

## 13. Decisões já tomadas

| Decisão | Regra |
|---|---|
| Duração do corte | Configurável por barbeiro (`15_MIN`, `30_MIN`, `45_MIN`, `60_MIN`) |
| Intervalo | Configurável pelo barbeiro |
| Dias de funcionamento | Configuráveis pelo barbeiro |
| Horários de funcionamento | Configuráveis pelo barbeiro |
| Configuração por dia | Sim |
| Configuração padrão | Sim |
| Bloqueio de horários | Sim |
| Exibição de bloqueio ao cliente | `Indisponível` |
| Antecedência máxima | 30 dias |
| Agendamento no mesmo dia | Permitido |
| Alteração | Até 20 min antes |
| Cancelamento | Até 20 min antes |
| Múltiplos agendamentos por cliente | Permitido |
| Dados do cliente | Nome + sobrenome + telefone |
| Conclusão do atendimento | Sim |
| Histórico de cancelamentos | Mantido |
| Autenticação do cliente | Google antes de finalizar o agendamento |
| Autenticação do barbeiro | Google |
| Painel administrativo | Sim |
| Múltiplos barbeiros | Futuro, com `barbeiro_id` já presente na modelagem |
| Catálogo de serviços | Futuro |
| Duração variável por serviço | Futuro; atualmente a duração é individual por barbeiro |

---

## 14. Fora do MVP / melhorias futuras

Estas funcionalidades podem ser adicionadas posteriormente, sem fazer parte do primeiro escopo:

- Cadastro de múltiplos barbeiros;
- Catálogo de serviços;
- Serviços com preços diferentes;
- Serviços com durações diferentes;
- Notificações automáticas;
- Integração com WhatsApp;
- Relatórios;
- Histórico financeiro;
- Pagamento online;
- Outras regras avançadas de disponibilidade.

A implementação do MVP deve evitar adicionar essas funcionalidades antes de as necessidades atuais estarem concluídas.

---

## 15. Diretriz de desenvolvimento

O projeto deve ser desenvolvido de forma incremental.

Ordem recomendada:

```text
1. Requisitos
2. Modelagem de dados
3. Banco PostgreSQL
4. Prisma
5. Backend / API
6. Regra de disponibilidade
7. Painel do barbeiro
8. Interface do cliente
9. Integração frontend + backend
10. Testes
11. Deploy
```

Antes de implementar funcionalidades maiores, a regra correspondente deve estar definida neste documento.

---

## 16. Observações de arquitetura

O projeto será desenvolvido utilizando, inicialmente:

- Node.js;
- TypeScript;
- Express;
- Prisma;
- PostgreSQL;
- Frontend web responsivo.

A arquitetura deve ser simples o suficiente para o MVP, mas sem criar decisões que dificultem a evolução futura do sistema.

A prioridade é entregar corretamente o sistema de agendamento definido neste documento, evitando overengineering.
