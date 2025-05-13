import { Skeleton } from 'antd';

export default function NoData() {
    return (
        <Skeleton active paragraph={{ rows: 4 }} />
    );
}