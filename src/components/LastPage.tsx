import React, { useState } from 'react';
import { DatePicker, Radio, Checkbox, Divider, Switch, Form, CheckboxProps } from 'antd';
import { CheckboxValueType } from 'antd/es/checkbox/Group';
import TextArea from 'antd/es/input/TextArea';

const checklistOptions = ['ดูหนัง', 'ฟังเพลง', 'เล่นเกมส์'];

function switchonChange(checked: boolean) {
    console.log(`switch to ${checked}`);
}


const LastPage: React.FC = () => {
    const [value1, setValue1] = useState('ชาย');
    const plainOptions = ['ชาย', 'หญิง'];
    const [checkedList, setCheckedList] = useState<CheckboxValueType[]>([]);
    const [otherValue, setOtherValue] = useState<string>('');

    const onChange1 = (e: any) => {
        console.log('radio1 checked', e.target.value);
        setValue1(e.target.value);
    };

    // const onChange = (date: Date, dateString: any) => {
    //     console.log(date, dateString);
    // };



    const checkAll = checklistOptions.length === checkedList.length;
    const indeterminate = checkedList.length > 0 && checkedList.length < checklistOptions.length;

    const onChangeCheck = (list: CheckboxValueType[]) => {
        setCheckedList(list);
        if (!list.includes('อื่น ๆ')) {
            setOtherValue('');
        }
    };

    // const onCheckAllChange = (e: any) => {
    //     setCheckedList(e.target.checked ? checklistOptions : []);
    // };

    const onCheckAllChange: CheckboxProps['onChange'] = (e) => {
        setCheckedList(e.target.checked ? checklistOptions : []);
    };
    const handleOtherInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setOtherValue(e.target.value);
    };

    return (
        <div>

            <div className='flex flex-col justify-center content-center place-content-center'><br />
                <h1 className='text-left font-bold text-2xl text-black'>Confirm :</h1><br />
                {/* <h1 className='text-left'>birth date</h1> */}
                <Form.Item
                    name="date"
                    label="birth date"
                    rules={[{ required: true, message: 'Please select date!' }]}
                >
                    <DatePicker className='w-[370px]' />
                </Form.Item>
                {/* <DatePicker onChange={onChange} /><br /> */}
                {/* <div className='flex gap-5'>
                    <p>Gender : </p>
                    <Radio.Group options={plainOptions} onChange={onChange1} value={value1} />
                </div><br /> */}
                <div className='flex gap-2 align-middle'>
                    <span>Gender : </span>
                    <Form.Item
                        name="gender"
                        label=""
                        rules={[{ required: true, message: 'Please select your gender' }]}

                    >
                        <Radio.Group options={plainOptions} onChange={onChange1} className='flex' />
                    </Form.Item>
                </div>
                <div className='flex flex-col justify-start content-start text-left'>
                    <p>งานอดิเรก</p>
                    <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
                        เลือกทั้งหมด
                    </Checkbox>
                    <Divider />
                    <Checkbox.Group options={checklistOptions} value={checkedList} onChange={onChangeCheck} />
                    <div>
                        <Checkbox
                            checked={checkedList.includes('อื่น ๆ')}
                            onChange={(e) => {
                                if (e.target.checked) {
                                    setCheckedList([...checkedList, 'อื่น ๆ']);
                                } else {
                                    setCheckedList(checkedList.filter((item) => item !== 'อื่น ๆ'));
                                }
                            }}
                        >
                            อื่น ๆ
                        </Checkbox>
                        <div>
                            <TextArea
                                value={otherValue}
                                onChange={handleOtherInputChange}
                                placeholder='ระบุ'
                                autoSize={{ minRows: 2, maxRows: 6 }}
                            />
                        </div>
                    </div>
                </div>
                <br />
                <div className='flex gap-5'>
                    <p>ยอมรับเงื่อนไข : </p>
                    <Switch defaultChecked={false} onChange={switchonChange} className='w-[1em]' />
                </div>
            </div>
        </div>
    );
}

export default LastPage;
