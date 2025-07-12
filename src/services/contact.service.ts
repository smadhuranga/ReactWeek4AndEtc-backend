/**
 * @author supunmadhuranga
 * @created 2025-07-12
 * @project computer-shop-backend
 * @description Contact service logic
 */
import { contactList } from "../db/contact.db";
import { Contact } from "../model/contact.model";

// Save contact service
export const saveContact = (contact: Contact): Contact => {
    contactList.push(contact);
    return contact;
};

// Get all contacts service
export const getAllContacts = (): Contact[] => {
    return contactList;
};

// Validation for contact data
export const validateContact = (contact: Contact): string | null => {
    if (!contact.name || !contact.email || !contact.message) {
        return "All fields are required!";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contact.email)) {
        return "Invalid email format";
    }

    return null;
};