import { Button, Form, Input } from 'antd';
import React from 'react';

export interface ILoginParams {
  version: string;
  isLoading?: boolean;
  onFinish: () => void;
  refreshCaptcha: () => void; // 刷新验证码
}

export const Login: React.FC<ILoginParams> = ({version,isLoading,onFinish,refreshCaptcha}) => {
  const [form] = Form.useForm();

  return (
    <div className="w-screen h-screen  bg-round-light">
      <div className=" xl:w-[500px] xl:h-[600px] h-[550px] w-[350px] rounded-2xl absolute top-1/2 left-1/2  -translate-x-1/2 -translate-y-1/2 bg-white flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className=" mt-8 text-center text-2xl font-bold tracking-wider leading-9 text-gray-900">
            GA/T1400视图库管理系统
          </h2>
        </div>
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Form
            className="space-y-6"
            layout="vertical"
            form={form}
            onFinish={onFinish}
          >
            <div>
              <div className="mt-2">
                <Form.Item label="账户" name="username">
                  <Input />
                </Form.Item>
              </div>
            </div>

            <div>
              <div className="mt-2">
                <Form.Item label="密码:" name="password">
                  <Input.Password autoComplete="current-password" />
                </Form.Item>
              </div>
            </div>

            <div>
              <div className="mt-2 flex justify-between items-center">
                <Form.Item label="验证码:" name="captcha">
                  <Input
                    className="xl:w-[280px]"
                    autoComplete="current-password"
                  />
                </Form.Item>
                <div className="ml-1">
                  <img
                    className="object-cover w-24 h-8 mt-1.5"
                    src=''
                    onClick={refreshCaptcha}
                  />
                </div>
              </div>
            </div>
            <div>
              <Button
                htmlType="submit"
                className="flex w-full h-9 justify-center items-center border-slate-50 rounded-md bg-indigo-600 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                loading={isLoading}
              >
                登录
              </Button>
            </div>
          </Form>

          <p className="mt-10 text-center text-sm text-gray-500">
            版本号 {version}
          </p>
        </div>
      </div>
    </div>
  );
};
