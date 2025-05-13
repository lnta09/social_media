'use client'
import Navbar from "@/components/Navbar";
import LeftSideBar from "@/components/LeftSideBar";
import { Flex, Layout } from "antd";
import Sider from "antd/es/layout/Sider";
const { Header, Content, Footer} = Layout;

export default function Home() {
    return (
        <Layout>
            <div style={{
                position: 'sticky',
                zIndex: 1,
                width: '100%',
                top: 0,
                backgroundColor: 'white',
            }}>
                <Navbar />  
            </div>

            
            <Layout>
            <Sider width={300} style={{backgroundColor: "transparent", overflow: "auto",position: 'sticky',
                insetInlineStart: 0,
                top: 60,
                height: '100vh',
                bottom: 0,
                scrollbarWidth: 'thin',
                scrollbarGutter: 'stable'}}>
                <LeftSideBar />
            </Sider>
            <Content >
                <Flex justify="flex-start" align="center" vertical 
                    style={{border: "1px solid rgb(0, 0, 0)", 
                        margin: "0 auto", width: "46%"}}//27
                >
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                    <h1>Home Page</h1>
                </Flex>
            </Content>
            </Layout>
        </Layout>
    );
}