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
                    documents.push({
                        ...doc.data(),
                        id: doc.id,
                        createdAt: doc.data().createdAt && doc.data().createdAt.toDate()
                    });
                });

                setDocs(documents);
            });

        return () => unsubscribe();
    }, [collection]);

    return docs;
}

export default useFirebase;
