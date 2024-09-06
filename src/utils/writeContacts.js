import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";


export const writeContacts = async (updatedContacts) => {
    try{
        const FileNewContent = await fs.appendFile(PATH_DB, updatedContacts);
        return FileNewContent;
    }catch(error){
        console.error(error);
    }
};
