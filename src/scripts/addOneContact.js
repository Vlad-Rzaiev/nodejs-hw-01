import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  try {
    const contacts = await readContacts();

    const newContact = createFakeContact();
    contacts.push(newContact);

    await writeContacts(contacts);
    console.log(`Контакт успішно додано в файл.`);
    return newContact;
  } catch (error) {
    console.error('Сталася помилка при додаванні контакту:', error.message);
  }
};

const run = async () => {
  const contact = await addOneContact();
  console.log(contact);
};

run();
