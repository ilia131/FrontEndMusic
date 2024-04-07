import React, { useState } from 'react';

const ImageUploader = () => {
    const [imageSrc, setImageSrc] = useState('');

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.onload = () => {
            setImageSrc(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    return (
        <div>
            <input type="file" onChange={handleImageChange} />
            {imageSrc && <img src={imageSrc} alt="Uploaded" style={{ maxWidth: '100%' }} />}
        </div>
    );
};

export default ImageUploader;