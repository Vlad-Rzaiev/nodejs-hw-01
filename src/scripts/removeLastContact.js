import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    const contacts = await readContacts();

    if (contacts.length === 0) {
      console.log('Файл з контактами порожній.');
      return [];
    }

    const lastContact = contacts[contacts.length - 1];
    const updatedContacts = contacts.slice(0, contacts.length - 1);

    await writeContacts(updatedContacts);
    console.log('Останній контакт успішно видалений.');

    return lastContact;
  } catch (error) {
    console.error(
      'Сталася помилка при видаленні останннього контакту:',
      error.message,
    );
  }
};

const run = async () => {
  const contact = await removeLastContact();
  console.log(contact);
};

run();
