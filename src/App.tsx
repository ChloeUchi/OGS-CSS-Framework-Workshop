
import React, { useState } from 'react';
import { Button, FormProps, message, Steps, theme, Form } from 'antd';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import LastPage from './components/LastPage';
import Counter from './components/Counter';
import RegisterForm from './components/RegisterForm'

type FieldType = {
  username?: string;
  password?: string;
};

const App: React.FC = () => {

  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);

  const next = (e: FieldType) => {
    setCurrent(current + 1);
    console.log(e);
    if (current === 2) {
      message.success('Sign up success');
    }
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: '',
      content: <FirstPage />,
    },
    {
      title: '',
      content: <SecondPage />,
    },
    {
      title: '',
      content: <LastPage />,
    },
  ];
  const items = steps.map((item) => ({ key: item.title, title: item.title }));
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    padding: '2em',
    borderRadius: token.borderRadiusLG,
    border: `1px dashed ${token.colorBorder}`,
  };
  
  return (
    <>
      <div className='flex content-center justify-center place-items-center '>
        <div className='w-[430px] h-full bg-white rounded-2xl'>
          <div className='text-[3em] font-extrabold text-center'>Sign up Form</div>
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: true }}
            onFinish={next}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout='vertical'
          >
            <div style={contentStyle}>
              <Steps current={current} items={items} />
              <div>{steps[current]?.content}</div>
              <div style={{ marginTop: 24 }} className='flex justify-between'>
                {current > 0 && (
                  <Button className='w-[12em] h-[3em]  bg-orange-600 text-white hover:bg-orange-400' onClick={() => prev()}>
                    PREVIOUS
                  </Button>
                )}
                {current < steps.length - 1 && (
                  <Button className='w-[12em] h-[3em] bg-blue-800 text-white' htmlType='submit' >
                    NEXT
                  </Button>
                )}
                {current === steps.length - 1 && (
                  <Button className='w-[12em] h-[3em] bg-pink-600 text-white hover:bg-pink-400' htmlType='submit'>
                    DONE
                  </Button>
                )}
              </div>
            </div>
          </Form>
        </div>
      </div>
      <br />
      <div className='text-[2em] text-white font-extrabold flex justify-center mt-5'><Counter/></div><br />
      <div className='bg-white p-[2em] border-2 rounded-xl'>
        <h1 className='flex justify-center text-[1.5em] font-bold'>Register Form</h1>
        <RegisterForm/>
        </div>
    </>
  );
};

export default App;


// import React, { useEffect } from 'react'
// import { useSelector } from 'react-redux'
// import { RootState } from './store/store';

// function App() {
//   const register = useSelector((state:RootState) => state.register.value);
//   useEffect(() => {
//     console.log(register);
//   },[register]);
//   return (
//     <div>App</div>
//   )
// }

// export default App