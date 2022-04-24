import React, { useState } from 'react';
import './index.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import DeleteIcon from '@mui/icons-material/Delete';
import Fab from '@mui/material/Fab';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../../utils/mutations';

const Dashboard = () => {
  const [selectedFile, setSelectedFile] = useState();
  const [fileInputState, setFileInputState] = useState('');
  const [previewSource, setPreviewSource] = useState('');
  const [successMsg, setSuccessMsg] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [addItem] = useMutation(ADD_ITEM);

  // const handleImageChange = (e) => {
  //   // console.log(e.target.files[])
  //   if (e.target.files) {
  //     const filesArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file));

  //     // console.log("filesArray: ", filesArray);

  //     setSelectedFiles((prevImages) => prevImages.concat(filesArray));
  //     Array.from(e.target.files).map(
  //       (file) => URL.revokeObjectURL(file) // avoid memory leak
  //     );
  //   }
  // };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    console.log(file);
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setPreviewSource(reader.result);
    };
  };

  const handleSubmitFile = (e) => {
    e.preventDefault();
    if (!selectedFile) return;
    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    console.log(reader.result);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
    reader.onerror = () => {
      console.error('AHHHHHHHH!!');
      setErrMsg('something went wrong!');
    };
  };

  const uploadImage = async (base64EncodedImage) => {
    try {
      await addItem({
        variables: {
          input: {
            title: 'asdfasdf',
            description: 'asdfasdf',
            image: base64EncodedImage,
            price: 3,
            stock: 4,
            size: ['aasdf'],
          },
        },
      });

      setFileInputState('');
      setPreviewSource('');
      setSuccessMsg('Image uploaded successfully');
    } catch (err) {
      console.error(err);
      setErrMsg('Something went wrong!');
    }
  };

  return (
    <div>
      <h1 className="title">Upload an Image</h1>
      {/* <Alert msg={errMsg} type="danger" />
      <Alert msg={successMsg} type="success" /> */}
      <form onSubmit={handleSubmitFile} className="form">
        <input
          id="fileInput"
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
          className="form-input"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
      {previewSource && <img src={previewSource} alt="chosen" style={{ height: '300px' }} />}
    </div>
  );
};

export default Dashboard;