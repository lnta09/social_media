"use client";
import { Flex, Typography, Image } from 'antd';
import LoginForm from '@/components/LoginForm';
const { Title } = Typography;

export default function Home() {
  return (
    <Flex style={{marginTop: 100}}>
      <Flex style={{width: '55%', marginLeft: 80}} justify='center' align='flex-start' vertical>
        <Image 
          src={"/social-media-logo.png"}
          alt='logo'
          width={280}
          preview={false}
          style={{ cursor: "default" }}
        />
        <Title level={2}>Social Media giúp bạn kết nối và chia sẻ với mọi người trong cuộc sống của bạn.</Title>
      </Flex>
      <Flex style={{width: '45%'}} justify='center' align='center'>
        
        <LoginForm activate={false} />
      </Flex>
    </Flex>
  );
}
