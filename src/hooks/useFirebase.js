import { useEffect, useState } from "react";
import { projectFirestore } from "../config/firebaseConfig";

const useFirebase = (collection) => {
    const [docs, setDocs] = useState([]);

    useEffect(() => {
        const unsubscribe = projectFirestore.collection(collection)
            .orderBy("createdAt", "desc")
            .onSnapshot((snap) => {
                let documents = [];

                snap.forEach(doc => {
                    const data = doc._delegate._document.data.value.mapValue.fields;
                    documents.push({...data});
                });

                setDocs(documents);
            });

        return () => unsubscribe();
    }, [collection]);

    return docs;
}

export default useFirebase;