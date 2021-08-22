import { useState } from 'react'
import Bar from '../Bar/Bar';

function UploadForm() {
    const [file, setFile] = useState(null);
    const [error, setError] = useState("");

    const changeHandler = (e) => {
        let selected = e.target.files[0];

        const types = ["image/png", "image/jpeg", "image/jpg", "image/svg"];

        if (selected && types.includes(selected.type)) {
            setFile(selected);
            setError("");
        } else {
            setFile(null);
            setError("Please select an image");
        }
    }

    return (
        <form>
            <label>
                <input type="file" onChange={changeHandler} />
                <span>+</span>
            </label>
            <div className="output">
                {error !== "" && <div className="error">{ error }</div>}
                {file && file.name}
                {file && <Bar file={file} setFile={setFile}/>}
            </div>
        </form>
    )
}

export default UploadForm
