import fs from 'node:fs/promises';
import { PATH_DB } from '../constants/contacts.js';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contacts = JSON.parse(data);

    return contacts;
  } catch (error) {
    console.error(`Помилка читання файла ${PATH_DB}:`, error.message);
    throw error;
  }
};
