import { PATH_DB } from '../constants/contacts.js';
import fs from "fs/promises";


export const readContacts = async () => {
    try{
        const FileContent = await fs.readFile(PATH_DB);
        return  JSON.parse(FileContent) ;
    }catch(error){
        console.error(error);
    }
};
