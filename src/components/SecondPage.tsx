import React from 'react';
import { Form, Input } from 'antd';

export type FieldType = {
    username?: string;
    password?: string;
};



const SecondPage: React.FC = () => {
    const phoneRules = [
        { required: true, message: 'Please input your phone number!' },
        { pattern: /^[0-9]{10}$/, message: 'Please enter a valid phone number!' },
    ];
    return (
        <div>
            <div className='flex flex-col justify-center content-center place-content-center'>
                <br />
                <h1 className='text-left font-bold text-2xl text-black'>Contact :</h1>
                <br />

                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Please input your email!' },
                        { type: 'email', message: 'Please enter a valid email address!' },
                    ]}
                >
                    <Input className='w-[370px]' />
                </Form.Item>
                <Form.Item
                    name="phone"
                    label="Phone"
                    rules={phoneRules}
                >
                    <Input className='w-[370px]' />
                </Form.Item>
            </div>
        </div>
    );
};

export default SecondPage;
