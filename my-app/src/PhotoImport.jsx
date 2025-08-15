import './PhotoImport.css'

const PhotoImport = ({selectPhoto}) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) return selectPhoto(URL.createObjectURL(file));
    }

    return(
        <>
            <label className='photo'>
                <input className='imgImport' type="file" accept="image/*" onChange={handleFileChange} />
                Photo
            </label>
        </>
    )
}

export default PhotoImport;