import { readContacts } from '../utils/readContacts.js';

export const countContacts = async () => {
  try {
    const contacts = await readContacts();

    const contactsLength = contacts.length;

    let contactForm;
    if (contactsLength === 1) {
      contactForm = 'контакт';
    } else if (contactsLength >= 2 && contactsLength <= 4) {
      contactForm = 'контакти';
    } else {
      contactForm = 'контактів';
    }

    console.log(`У файлі знаходиться ${contactsLength} ${contactForm}`);

    return contactsLength;
  } catch (error) {
    console.error('Сталася помилка при підрахунку контактів:', error.message);
    return 0;
  }
};

const run = async () => {
  const contact = await countContacts();
  console.log(contact);
};

run();
