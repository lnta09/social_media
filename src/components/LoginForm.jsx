import { Button, Form, Input, Card, Flex, Divider } from 'antd';
import Link from 'next/link';

export default function LoginForm({activate}) {
    return (
        <Card title='Đăng nhập Social Media' style={{ width: 450}} variant='borderless'>
            <Form name='login'>
                <Form.Item
                    name='username'
                    rules={[{ required: true, message: 'Email hoặc số di động bạn nhập không kết nối với tài khoản nào.' }]}
                >
                    <Input placeholder='Email hoặc số điện thoại' disabled={!activate}/>
                </Form.Item>

                <Form.Item
                    name='password'
                    rules={[{ required: true, message: 'Mật khẩu bạn nhập không chính xác.' }]}
                >
                    <Input.Password placeholder='Mật khẩu' disabled={!activate}/>
                </Form.Item>

                <Form.Item>
                    <Flex justify='center'>
                        {!activate ? 
                            <Link href='/login' style={{ width: '100%' }}>
                                <Button type='primary' size='large' style={{ width: '100%' }}>
                                    Đăng nhập
                                </Button>
                            </Link>
                            :
                            <Button type='primary' htmlType='submit' size='large' style={{ width: '100%' }}>
                                Đăng nhập
                            </Button>
                        }
                    </Flex>
                </Form.Item>
            </Form>
            <Link href='/forgotPassword'>
                Quên mật khẩu?
            </Link>
            <Divider />
            <Link href='/register'>
                <Button color='cyan' variant='outlined' size='large' style={{width: '100%'}}>Tạo tài khoản mới</Button>
            </Link>
        </Card>
    );
}