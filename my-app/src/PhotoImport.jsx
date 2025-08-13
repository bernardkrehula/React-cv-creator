
const PhotoImport = ({selectPhoto}) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if(file) return selectPhoto(URL.createObjectURL(file));
    }

    return(
        <>
            <input type="file" accept="image/*" onChange={handleFileChange} />
        </>
    )
}

export default PhotoImport;