'use client';
import { Flex, Image } from 'antd';
import LoginForm from '../../components/LoginForm.jsx';


export default function Login() {
    return (
        <Flex justify='center' align='center' vertical>
            <Image 
                src='/social-media-logo.png'
                alt='logo'
                width={280}
                preview={false}
                style={{ cursor: "default", marginBottom: 20, marginTop: 70 }}
            />
            <LoginForm activate={true}/>
        </Flex>
    );
}