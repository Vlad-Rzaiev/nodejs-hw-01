import path from 'node:path';
import fs from 'node:fs/promises';

const pathToWorkDir = path.join(process.cwd());

export const PATH_DB = path.join(pathToWorkDir, 'src', 'db', 'db.json');

export const initDB = async () => {
  try {
    await fs.access(PATH_DB);
    console.log(`Файл ${PATH_DB} доступний.`);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log(`Файл ${PATH_DB} не існує. Створюю новий...`);

      const dirPath = path.dirname(PATH_DB);
      await fs.mkdir(dirPath, { recursive: true });

      await fs.writeFile(PATH_DB, '[]', 'utf-8');
    } else {
      console.log(`Помилка перевірки доступності файлу ${PATH_DB}`, error);
    }
  }
};
