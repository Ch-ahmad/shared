import React, { useState } from 'react'


const CreatePost = () => {
    const [data, setData] = useState({
      caption: '',
      desc: '',
      img: ''
    })

    const uploadImage = () => {
      const formData = new FormData();
      formData.append('file', data.img);
      formData.append('upload_preset', 'codev2')
    }

    const handleSubmit = async (e) => {
      e.preventDefault()
      //const { secure_url } = await uploadImage()
      //setUrl(secure_url);
    }

  return (
    <div className='flex justify-center items-center h-screen'>
      
    </div>
  )
}

export default CreatePost