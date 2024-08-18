//Scripts
import { createTables } from "./Script/createTables.js";
import { runServer } from "./Script/runServer.js";

const main = async () => {
  try {
    
    await createTables();
    await runServer();
  }
  catch (error) { 
    console.error(error);
  };
};

main();
