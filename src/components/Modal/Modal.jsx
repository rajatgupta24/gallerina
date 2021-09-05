import { projectFirestore, projectStorage } from '../../config/firebaseConfig';

function Modal({ selectedImg, setSelectedImg }) {
    const deleteHandler = (selectedImg) => {
        projectFirestore.collection("images").doc(selectedImg.id).delete();
        const storageRef = projectStorage.ref(selectedImg.name);
        storageRef.delete();
    }

    const clickHandler = (e) => {
        if (e.target.classList.contains("backdrop"))
            setSelectedImg(null);
    }
    
    return (
        <div className="backdrop" onClick={clickHandler}>
            <img src={selectedImg.url} alt="modal" />
            <div className="btns">
                <button className="btn" onClick={() => deleteHandler(selectedImg)}>Delete</button>
            </div>
        </div>
    )
}

export default Modal;
