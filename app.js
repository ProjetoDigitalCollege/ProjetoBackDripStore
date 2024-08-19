import { createTables } from "./Script/createTables.js";
import { runServer } from "./Script/runServer.js";
import { runSeeders } from './seeders/Seerders.js';

const main = async () => {
  try {
    console.log('Testando importação');
    await createTables();
    await runSeeders();
    console.log('Importação bem-sucedida!');
    await runServer();
  } catch (error) {
    console.error('Erro ao importar:', error);
  }
};

main();
