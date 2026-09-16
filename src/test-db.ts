import prisma from "./lib/prisma.js";

async function main() {
  const clienteEncontrado = await prisma.cliente.delete({
    where: {
      googleId: "google-teste-002",
    },
  });

  console.log("Cliente encontrado:", clienteEncontrado);
}

main()
  .catch(console.error)
  .finally(async () => {
    await prisma.$disconnect();
  });
