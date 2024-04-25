import { Form, Input } from 'antd';
import React from 'react'

const FirstPage: React.FC = () => {
    return (
        <div>
            <div className='flex flex-col justify-center content-center place-content-center'><br />
                <h1 className='text-left text-bold text-[2em] text-black'>General :</h1><br />
                <div>
                    <Form.Item
                        name="username"
                        label="Username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input className='w-[380px]' />
                    </Form.Item>
                </div>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password className='w-[380px]' />
                </Form.Item>
            </div>
        </div >
    );
};


export default FirstPage