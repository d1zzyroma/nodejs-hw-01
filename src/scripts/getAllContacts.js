import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";

export const getAllContacts = async () => {
    try{
        const FileContent = await fs.readFile(PATH_DB);
        console.log(JSON.parse(FileContent));
    }catch(error){
        console.error(error);
    }
};

console.log(await getAllContacts());
