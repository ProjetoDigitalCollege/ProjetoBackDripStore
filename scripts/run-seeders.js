import { Sequelize } from 'sequelize';
import config from '../config/config.js';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const sequelize = new Sequelize(config.development.database, config.development.username, config.development.password, {
  host: config.development.host,
  dialect: config.development.dialect,
});

const toFileUrl = (filePath) => {
  return new URL(`file://${path.resolve(filePath)}`);
};

async function runSeeders() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const seedersDir = path.join(__dirname, '..', 'seeders');

    console.log(`Looking for seeders in: ${seedersDir}`);

    const files = fs.readdirSync(seedersDir);
    const seederFiles = files.filter(file => file.endsWith('.js'));

    for (const file of seederFiles) {
      const seederPath = toFileUrl(path.join(seedersDir, file));
      const { up, down } = await import(seederPath.href);
      await up(sequelize.getQueryInterface(), Sequelize);
      console.log(`Seeder ${file} executed`);
    }

    console.log('All seeders executed');
  } catch (error) {
    console.error('Error during seeders execution:', error);
  } finally {
    await sequelize.close();
  }
}

runSeeders();