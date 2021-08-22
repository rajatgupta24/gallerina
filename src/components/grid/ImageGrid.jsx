import React from 'react'
import useFirebase from '../../hooks/useFirebase'

function ImageGrid() {
    const docs = useFirebase("images");
    return (
        <div className="img-grid">
            {
                docs && docs.map((img, i) => (
                    <div className="img-wrap" key={img.url.stringValue}>
                        <img src={img.url.stringValue} alt={`${i}`}/>
                    </div>
                ))
            }
        </div>
    )
}

export default ImageGrid
