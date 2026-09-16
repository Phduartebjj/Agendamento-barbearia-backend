-- CreateEnum
CREATE TYPE "DuracaoCorte" AS ENUM ('MIN_15', 'MIN_30', 'MIN_45', 'MIN_60');

-- CreateEnum
CREATE TYPE "StatusAgendamento" AS ENUM ('AGENDADO', 'CANCELADO', 'CONCLUIDO');

-- CreateEnum
CREATE TYPE "DiaSemana" AS ENUM ('SEGUNDA', 'TERCA', 'QUARTA', 'QUINTA', 'SEXTA', 'SABADO', 'DOMINGO');

-- CreateEnum
CREATE TYPE "MotivoBloqueio" AS ENUM ('ALMOCO', 'COMPROMISSO', 'OUTRO');

-- CreateTable
CREATE TABLE "Cliente" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Barbeiro" (
    "id" UUID NOT NULL,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "googleId" TEXT NOT NULL,
    "duracao_corte" "DuracaoCorte" NOT NULL,
    "intervalo" INTEGER NOT NULL,

    CONSTRAINT "Barbeiro_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Agendamento" (
    "id" UUID NOT NULL,
    "cliente_id" UUID NOT NULL,
    "barbeiro_id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "horario" TIME NOT NULL,
    "status" "StatusAgendamento" NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Agendamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Bloqueio" (
    "id" UUID NOT NULL,
    "barbeiro_id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "horario_inicio" TIME NOT NULL,
    "horario_fim" TIME NOT NULL,
    "motivo" "MotivoBloqueio" NOT NULL,
    "criado_em" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Bloqueio_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HorarioTrabalho" (
    "id" UUID NOT NULL,
    "barbeiro_id" UUID NOT NULL,
    "dia_semana" "DiaSemana" NOT NULL,
    "horario_inicio" TIME NOT NULL,
    "horario_fim" TIME NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "HorarioTrabalho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ExcecaoHorario" (
    "id" UUID NOT NULL,
    "barbeiro_id" UUID NOT NULL,
    "data" DATE NOT NULL,
    "horario_inicio" TIME NOT NULL,
    "horario_fim" TIME NOT NULL,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "ExcecaoHorario_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_googleId_key" ON "Cliente"("googleId");

-- CreateIndex
CREATE UNIQUE INDEX "Barbeiro_telefone_key" ON "Barbeiro"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Barbeiro_googleId_key" ON "Barbeiro"("googleId");

-- CreateIndex
CREATE INDEX "Agendamento_barbeiro_id_data_horario_idx" ON "Agendamento"("barbeiro_id", "data", "horario");

-- CreateIndex
CREATE INDEX "Agendamento_cliente_id_data_idx" ON "Agendamento"("cliente_id", "data");

-- CreateIndex
CREATE INDEX "Bloqueio_barbeiro_id_data_idx" ON "Bloqueio"("barbeiro_id", "data");

-- CreateIndex
CREATE UNIQUE INDEX "HorarioTrabalho_barbeiro_id_dia_semana_key" ON "HorarioTrabalho"("barbeiro_id", "dia_semana");

-- CreateIndex
CREATE UNIQUE INDEX "ExcecaoHorario_barbeiro_id_data_key" ON "ExcecaoHorario"("barbeiro_id", "data");

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Agendamento" ADD CONSTRAINT "Agendamento_barbeiro_id_fkey" FOREIGN KEY ("barbeiro_id") REFERENCES "Barbeiro"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bloqueio" ADD CONSTRAINT "Bloqueio_barbeiro_id_fkey" FOREIGN KEY ("barbeiro_id") REFERENCES "Barbeiro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HorarioTrabalho" ADD CONSTRAINT "HorarioTrabalho_barbeiro_id_fkey" FOREIGN KEY ("barbeiro_id") REFERENCES "Barbeiro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ExcecaoHorario" ADD CONSTRAINT "ExcecaoHorario_barbeiro_id_fkey" FOREIGN KEY ("barbeiro_id") REFERENCES "Barbeiro"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddCheckConstraints
ALTER TABLE "Barbeiro"
ADD CONSTRAINT "Barbeiro_intervalo_check"
CHECK ("intervalo" >= 0);

ALTER TABLE "Bloqueio"
ADD CONSTRAINT "Bloqueio_horario_check"
CHECK ("horario_fim" > "horario_inicio");

ALTER TABLE "HorarioTrabalho"
ADD CONSTRAINT "HorarioTrabalho_horario_check"
CHECK ("horario_fim" > "horario_inicio");

ALTER TABLE "ExcecaoHorario"
ADD CONSTRAINT "ExcecaoHorario_horario_check"
CHECK ("horario_fim" > "horario_inicio");

-- AddPartialUniqueIndex
CREATE UNIQUE INDEX "Agendamento_barbeiro_data_horario_agendado_key"
ON "Agendamento" ("barbeiro_id", "data", "horario")
WHERE "status" = 'AGENDADO';