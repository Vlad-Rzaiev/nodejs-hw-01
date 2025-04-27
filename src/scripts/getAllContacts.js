import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Файл з контактами порожній');
      return [];
    }

    return contacts;
  } catch (error) {
    console.error('Сталася помилка при читанні файлу:', error.message);
  }
};

const run = async () => {
  const contact = await getAllContacts();
  console.log(contact);
};

run();
