import { promises as fs } from "fs";
import path from "path";

const contactsPath = path.join("db", "contacts.json");
async function listContacts() {
  try {
    const readResult = await fs.readFile(contactsPath);
    const contactsObject = JSON.parse(readResult);
    console.log({ readResult });
    return contactsObject;
  } catch (error) {
    error;
  }
}
async function getContactById(contactId) {}
