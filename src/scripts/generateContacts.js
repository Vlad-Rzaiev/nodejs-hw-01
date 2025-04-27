import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const contacts = await readContacts();

    for (let i = 0; i < number; i++) {
      const newContact = createFakeContact();
      contacts.push(newContact);
    }

    await writeContacts(contacts);
    console.log(`Контакти успішно додано в файл.`);
    return contacts;
  } catch (error) {
    console.error('Сталася помилка при додаванні контактів:', error.message);
  }
};

const run = async () => {
  const contacts = await generateContacts(5);
  console.log(contacts);
};

run();
