import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeAllContacts = async () => {
  try {
    const count = await readContacts();

    const emptyArr = [];

    await writeContacts(emptyArr);
    console.log(
      `Всі контакти в кількості ${count.length} були успішно видалені.`,
    );

    return emptyArr;
  } catch (error) {
    console.error('Сталася помилка при видаленні контактів:', error.message);
  }
};

const run = async () => {
  const contact = await removeAllContacts();
  console.log(contact);
};

run();
