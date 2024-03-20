import React from 'react'
import { ReactComponent as Profilepic } from '../../assets/profilepic.svg'
import Button from '../../components/Button'

const Home = () => {
    return (
        <div className='h-dvh bg-gray-950 flex overflow-hidden'>
            <div className='w-[20%] flex flex-col  bg-gray-300'>
                <div className='h-[20%]'></div>
                <div className='h-[70%] flex flex-col justify-evenly pl-5 border-b'>
                        <div>Home</div>
                        <div>Post</div>
                        <div>Profile</div>
                </div>
                <div className='h-[5%] pt-10'>
                    <div className='ml-5 cursor-pointer'>Log Out</div>
                </div>
                    
            </div>
            <div className='w-[60%] overflow-scroll h-full scrollbar-hide'>
            <div className='h-[30%] bg-gray-100 flex justify-center items-center'>
                    <div className='flex flex-col justify-center items-center'>
                        <Profilepic width={'75px'} height={'75px'}/>
                        <p className='my-4'>@jane_doe</p>
                        <div className='h-[50px] flex justify-around w-[300px] text-center'>
                            <div clasName='flex flex-col justify-around items-center'>
                                <h4>0</h4>
                                <p>Posts</p>
                            </div>
                            <div>
                                <h4>0</h4>
                                <p>Following</p>
                            </div>
                            <div>
                                <h4>0</h4>
                                <p>Followers</p>
                            </div>
                        </div>
                        <div className="pt-3">
                            <Button label='Create New Post' className='rounded-lg bg-green-600 hover:bg-green-700'/>
                        </div>
                    </div>
                </div>
                <div className='h-auto'>
                    {/*posts still static, will implement later*/}
                    <div className="flex pt-4">
                        <div className="flex-1 px-4 py-2 m-2">
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1705310256130-1e3b8693dcce?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1705310256130-1e3b8693dcce?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        </div>
                        <div className="flex-1 px-4 py-2 m-2">
                        <img
                            className="w-full"
                            src="https://images.unsplash.com/photo-1705310256130-1e3b8693dcce?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[20%] bg-gray-300'></div>
        </div>
    )
}

export default Home