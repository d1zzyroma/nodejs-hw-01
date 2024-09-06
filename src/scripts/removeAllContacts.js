import { PATH_DB } from "../constants/contacts.js";
import fs from "fs/promises";


export const removeAllContacts = async () => {
    try{
        const Array = [];

        await fs.writeFile(PATH_DB, JSON.stringify(Array, null, 2), "utf-8");


    }catch(error){
        console.error(error);
    }
};

removeAllContacts();
