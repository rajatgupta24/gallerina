import React, { useEffect } from 'react'
import useStorage from '../../hooks/useStorage'

function Bar({ file, setFile }) {
    const { progess, URL } = useStorage(file);

    useEffect(() => {
        if (URL) {
            setFile(null);
        }
    }, [URL, setFile]);

    return (
        <div className="progess-bar" style={{ width: progess + "%" }}></div>
    )
}

export default Bar;
