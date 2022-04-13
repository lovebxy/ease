import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const history = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="此页面暂未开发，如有需要请进行联系"
      extra={<Button onClick={() => history('/')} type="primary">回到首页</Button>}
    />
  )
}

export default Index;