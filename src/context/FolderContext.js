import React, {createContext, useState,useEffect} from "react";
import AsyncStorage  from "@react-native-async-storage/async-storage";

export const FoldersContext = createContext();

export const FoldersProvider = ({children}) => {
    const [folders, setFolder] = useState([]);

    useEffect(() =>{
        const loadFolders = async () => {
            try {
            const stored = await AsyncStorage.getItem("folders");
            if(stored) setFolder(JSON.parse(stored));
        }catch (error) {
            console.error("Failed to load folders", error)
        }
        };
        loadFolders();

    }, []);

    useEffect(() => {
        const saveFolders = async () => {
            try {
                await AsyncStorage.setItem("folders", JSON.stringify(folders));
            }catch (error){
                console.error("Failed to save folders:", error);
            }
        };
        saveFolders();
    }, [folders]);

    return (
        <FoldersContext.Provider value={{folders, setFolder}}>
            {children}
        </FoldersContext.Provider>
    );

};