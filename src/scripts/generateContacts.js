import { createFakeContact } from "../utils/createFakeContact.js";
import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

const generateContacts = async (number) => {
    try{
        const data = await fs.readFile(PATH_DB, "utf-8");
        let contacts = JSON.parse(data);
        
        if (!Array.isArray(contacts)) {
            contacts = []; // Якщо це не масив, ініціалізуємо порожній масив
        }
        
        for(let i=0; i < number; i++){
            contacts.push(createFakeContact());
        }

        await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), "utf-8");
    }catch(error){
        console.error(error);
    }
};

generateContacts(5);
