import { ContactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  return await ContactsCollection.find();
};

export const getContactById = async (studentId) => {
  return await ContactsCollection.findById(studentId);
};
