import React, { useState } from 'react'
import Button from '../../components/Button'
import Input from '../../components/Input'

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
        <div className='border w-[800px] h-[600px] p-6'>
          <form onSubmit={(e) => handleSubmit(e)}>
          <Input placeholder='Caption ...' name='title' className='py-4' value={data.caption} onChange={(e)=> setData({ ...data, caption: e.target.value})} isRequired={true}/>
          < textarea rows={10} className='w-full border shadow p-4 resize-none' placeholder='Description'value={data.desc} onChange={(e)=> setData({ ...data, desc: e.target.value})} required/>
          < Input type='file' name='image' className='py-4 hidden' onChange={(e)=> setData({ ...data, img: e.target.files[0]})} isRequired={true}/>
          <label for='image' className='cursor-pointer p-4 border shadow w-full' >{data?.img?.name || 'upload image'}</label>
          <Button label='Create post' type='submit' className='rounded-lg bg-green-600 hover:bg-green-700 mt-6'/>
          </form>
        </div>
    </div>
  )
}

export default CreatePost