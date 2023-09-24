import React from 'react'
import "./Login.css"
import { Watermark, Button, Form, Input, Card } from 'antd'

import { useNavigate } from "react-router-dom";

export default function Login() {
  
const navigate = useNavigate()
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  function handClick(){
    navigate('/home')
  }
  return (
    <>
      <Watermark content="QIT Online Judge">
        <div className="container">
          <Card className='card_css'>
              <Form
                name="basic"
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >            
              <span style={{width:'100%',justifyContent:'center',fontSize:24,display:'flex',padding:20}}>Sign</span>

                <Form.Item
                  label="用户名"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: '请输入你的用户名!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="密码"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: '请输入你的密码!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                  style={{padding:20}}
                >
                  <Button type="primary" htmlType="submit"
                    onClick={handClick}
                  >
                    登录
                  </Button>
                </Form.Item>
                
              </Form>
              </Card>
        </div>
      </Watermark>

    </>
  )
}
