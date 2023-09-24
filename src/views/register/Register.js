import React from 'react'
import "./Register.css"
import { Watermark, Button, Form, Input, Card, Select } from 'antd'

export default function Register() {


  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const { Option } = Select;
  const prefixSelector = (
    <Form.Item name="prefix" noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        <Option value="86">+86</Option>
        <Option value="87">+87</Option>
      </Select>
    </Form.Item>
  );


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
              <span style={{ width: '100%', justifyContent: 'center', fontSize: 24, display: 'flex', padding: 20 }}>Register</span>

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
                name="confirm"
                label="确认密码"
                dependencies={['password']}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: '请确认你的密码!',
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('您输入的新密码不匹配！'));
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                name="phone"
                label="手机号码"
                rules={[
                  {
                    required: true,
                    message: '请输入你的手机号码!',
                  },
                ]}
              >
                <Input
                  addonBefore={prefixSelector}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
                style={{ padding: 20 }}
              >
                <Button type="primary" htmlType="submit">
                  注册
                </Button>
              </Form.Item>

            </Form>
          </Card>


        </div>
      </Watermark>

    </>
  )
}
