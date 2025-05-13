'use client';
import { Flex, Image, Card, Form, Input, Button, DatePicker, Select } from 'antd';
import Link from 'next/link';

export default function Register() {
    return (
        <Flex justify='center' align='center' vertical>
            <Image 
                src='/social-media-logo.png'
                alt='logo'
                width={280}
                preview={false}
                style={{ cursor: "default", marginBottom: 20, marginTop: 50 }}
            />
            <Card title='Tạo tài khoản mới' style={{ width: 450}} variant='borderless'>
                <Form name='register'>
                    <Form.Item
                        name='firstName'
                    >
                        <Input placeholder='Họ' disabled/>
                    </Form.Item>

                    <Form.Item
                        name='lastName'
                    >
                        <Input placeholder='Tên' disabled/>
                    </Form.Item>

                    <Form.Item
                        name='gender'
                        label='Giới tính'
                    >
                        <Select disabled/>
                        </Form.Item>
                    <Form.Item
                        name='birthday'
                        label='Ngày sinh'
                    >
                        <DatePicker disabled/>
                    </Form.Item>
                    <Form.Item
                        name='username'
                        rules={[{ required: true, message: 'Bạn sẽ sử dụng thông tin này để đăng nhập' }]}
                    >
                        <Input placeholder='Email hoặc số điện thoại'/>
                    </Form.Item>

                    <Form.Item
                        name='password'
                        rules={[{ required: true, message: 'Mật khẩu cần tối thiểu 6 ký tự gồm số, chữ cái và ký tự đặc biệt' }]}
                    >
                        <Input.Password placeholder='Mật khẩu'/>
                    </Form.Item>

                    <Form.Item>
                        <Flex justify='center'>
                            <Button color='cyan' variant='solid' htmlType='submit' size='large' >
                                Đăng ký
                            </Button>
                        </Flex>
                    </Form.Item>
                </Form>
                <Link href='/login'>
                    Bạn đã có tài khoản ư?
                </Link>
            </Card>
        </Flex>
    );
}