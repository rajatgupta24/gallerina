import { useEffect, useState } from "react";
import { projectFirestore, projectStorage, timestamp } from "../config/firebaseConfig";


const useStorage = (file) => {
    const [progess, setProgess] = useState(0);
    const [error, setError] = useState(null);
    const [URL, setURL] = useState(null);

    useEffect(() => {
        const storageRef = projectStorage.ref(file.name);
        const collectionRef = projectFirestore.collection("images");

        storageRef.put(file).on("state_changed", (snap) => {
            let percent = (snap.bytesTransferred / snap.totalBytes) * 100;
            setProgess(percent);
        }, (err) => {
            setError(err);
        }, async () => {
            const url = await storageRef.getDownloadURL();
            const createdAt = timestamp();

            collectionRef.add({
                url,
                createdAt
            });
            
            setURL(url);
        });
    }, [file]);

    return { progess, URL, error};
}

export default useStorage;
