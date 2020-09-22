import React, { FormEvent, useState } from 'react';
import { Form, Input, Button } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IMessage } from '../../models/message';
import { observer } from 'mobx-react-lite';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const MessageForm = () => {

    const [message, setMessage] = useState<IMessage>({
        id: '',
        description: '',
        author: '',
    });

    const onFinish = (values: any) => {
        alert("under construction")
        // createMessage(newMessage);
    };

    const handleInputChange = (
        event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = event.currentTarget;
        setMessage({ ...message, [name]: value });
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <>
            <StyledHeader>Create Message</StyledHeader>
            <Container>
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Form.Item
                        label="Message"
                        name="description"
                        rules={[{ required: true, message: 'Please input your message!' }]}
                    >
                        <Input.TextArea name="description" onChange={handleInputChange} />
                    </Form.Item>

                    <Form.Item
                        label="Author"
                        name="author"
                        rules={[{ required: true, message: 'Please input your an author or anonymous!' }]}
                    >
                        <Input name="author" onChange={handleInputChange} />
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                        <Link to="/">
                            <Button style={{ marginRight: '30px' }}>Cancel</Button>
                        </Link>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Container>
        </>
    )
}

export default observer(MessageForm);

const Container = styled.div`
    margin: 15%;
`
const StyledHeader = styled.p`
    font-size: 60px;
    font-family: amatic-bold;
    text-align: center;
    margin-top: 50px;
    line-height: 1;
`