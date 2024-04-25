import { Button, Form, Input } from 'antd'
// import React from 'react'
import { addForm, clearForm } from '../store/slice/registerSlice'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/store';
// import { PlusOutlined } from '@ant-design/icons';

function RegisterForm() {
    const resultInput = useSelector((state: RootState) => state.addform.value);
    // const clear = useSelector
    const dispatch = useDispatch();
    // console.log(resultInput)

    const onFinish = (values: any) => {
        dispatch(addForm(values)); // Pass form data as payload
    };
    return (
        <div>
            <div className=' mt-10 flex gap-20 justify-around '>
                <Form
                    name="basic"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 16 }}
                    style={{ maxWidth: 600 }}
                    initialValues={{ remember: true }}
                    autoComplete="off"
                    layout='vertical'
                    onFinish={onFinish}>

                    <div className='flex flex-col justify-center content-center place-content-center'><br />
                        <Form.Item
                            name="username"
                            label="Username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input className='w-[250px]' />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                { required: true, message: 'Please input your email!' },
                                { type: 'email', message: 'Please enter a valid email address!' },
                            ]}
                        >
                            <Input className='w-[250px]' />
                        </Form.Item>
                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password className='w-[250px]' />
                        </Form.Item>
                    </div>
                    <div className='flex justify-around gap-10'>
                        <Button
                            className="hover:text-gray-200 active:text-gray-100 border-2 rounded-xl px-[1.5em]"
                            htmlType="submit"
                        >Submit</Button>
                        <Button
                            className="hover:text-gray-200 active:text-gray-100 border-2 rounded-xl px-[1.5em] "
                            onClick={() => dispatch(clearForm())}
                        >Clear</Button>
                    </div>
                </Form>
                <div className='flex flex-col justify-around text-left'>
                    <h1>ข้อมูลจาก Reducer</h1>
                    <h1>username : {resultInput.username}</h1>
                    <h1>email : {resultInput.email}</h1>
                </div>
            </div>
        </div>
    )
}

export default RegisterForm