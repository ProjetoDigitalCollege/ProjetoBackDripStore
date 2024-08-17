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

async function runMigrations() {
  try {
    await sequelize.authenticate();
    console.log('Database connected');

    const __dirname = path.dirname(fileURLToPath(import.meta.url));
    const migrationsDir = path.join(__dirname, '..', 'migrations');

    console.log(`Looking for migrations in: ${migrationsDir}`);

    const files = fs.readdirSync(migrationsDir);
    const migrationFiles = files.filter(file => file.endsWith('.js'));

    for (const file of migrationFiles) {
      const migrationPath = toFileUrl(path.join(migrationsDir, file));
      const { up, down } = await import(migrationPath.href);
      await up(sequelize.getQueryInterface(), Sequelize);
      console.log(`Migration ${file} executed`);
    }

    console.log('All migrations executed');
  } catch (error) {
    console.error('Error during migrations:', error);
  } finally {
    await sequelize.close();
  }
}

runMigrations();
