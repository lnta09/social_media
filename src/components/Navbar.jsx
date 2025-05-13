import { Flex, Avatar, Affix, Input, Button, Image, Space } from "antd";
import { HomeOutlined, UserOutlined, NotificationOutlined, MessageOutlined, MenuOutlined, TeamOutlined, VideoCameraOutlined, ClusterOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Navbar() {
    return (
        <div
            style={{
                boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
        >
            <Flex justify="space-between" align="center">
                <Flex align="center">
                    <Link href="/home">
                        <Avatar
                            src="https://img.icons8.com/?size=96&id=2-Cf_3f12bcT&format=png"
                            size={50}
                            style={{ marginTop: "4px", marginBottom: "4px", marginLeft: "16px", marginRight: "16px"}}
                        />
                    </Link>
                    <Input.Search placeholder="Tìm kiếm" 
                        variant="filled"
                        style={{ width: "120px"}}
                        name=""
                    />
                </Flex>

                <Flex align="center">
                    <Space size={"large"}>
                    <Link href="/home">
                        <Button type="text" style={{height: "50px", width: "100px"}}>
                            <HomeOutlined style={{ fontSize: "24px", color: "#000"}} />
                        </Button>
                    </Link>
                    <Link href="/home">
                        <Button type="text" style={{height: "50px", width: "100px"}}>
                            <TeamOutlined style={{ fontSize: "24px", color: "#000"}} />
                        </Button>
                    </Link>
                    <Link href="/home">
                        <Button type="text" style={{height: "50px", width: "100px"}}>
                            <VideoCameraOutlined style={{ fontSize: "24px", color: "#000"}} />
                        </Button>
                    </Link>
                    <Link href="/home">
                        <Button type="text" style={{height: "50px", width: "100px"}}>
                            <ClusterOutlined style={{ fontSize: "24px", color: "#000"}} />
                        </Button>
                    </Link>
                    </Space>
                </Flex>

                <Flex align="center">
                    <Space size={"small"}>
                        <Link href="/home">
                            <Avatar
                                icon={<MenuOutlined />}
                                size={45}
                                style={{color: "black", backgroundColor: "#f1f1f1"}}
                            />
                        </Link>

                        <Link href="/home">
                            <Avatar
                                icon={<MessageOutlined />}
                                size={45}
                                style={{color: "black", backgroundColor: "#f1f1f1"}}
                            />
                        </Link>

                        <Link href="/home">
                            <Avatar
                                icon={<NotificationOutlined />}
                                size={45}
                                style={{color: "black", backgroundColor: "#f1f1f1"}}
                            />
                        </Link>

                        <Link href="/home">
                            <Avatar
                                icon={<UserOutlined />}
                                size={45}
                                style={{color: "black", backgroundColor: "#f1f1f1", marginRight: "16px"}}
                            />
                        </Link>
                    </Space>
                </Flex>
            </Flex>
        </div>
        
    );
}