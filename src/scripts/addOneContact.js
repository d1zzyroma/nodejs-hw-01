import { createFakeContact } from "../utils/createFakeContact.js";
import fs from "fs/promises";
import { PATH_DB } from "../constants/contacts.js";

export const addOneContact = async () => {
    try {
        
        const data = await fs.readFile(PATH_DB, "utf-8");
        let contacts = JSON.parse(data);

        
        if (!Array.isArray(contacts)) {
            contacts = []; 
        }

        
        contacts.push(createFakeContact());

        // Записуємо оновлений масив контактів назад у файл
        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");
        console.log('New contact has been added successfully.');
    } catch (error) {
        console.error('An error occurred:', error);
    }
};

addOneContact();
