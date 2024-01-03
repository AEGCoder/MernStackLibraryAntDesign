import React from "react";
import { Form, Input, Select } from "antd";
import axios from "axios";
const FormComp = () => {
  const [form] = Form.useForm();
  const { Option } = Select;
  const { TextArea } = Input;
  const onFinish = (values) => {
    form.resetFields();
    axios
      .post("http://localhost:8000/api/books/newbook", values)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    alert("Book Added Successfully");
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onGenderChange = (value) => {
    switch (value) {
      case "Roman":
        form.setFieldsValue({
          note: "Hi, man!",
        });
        break;
      case "Polisiye/Gizem":
        form.setFieldsValue({
          note: "Hi, lady!",
        });
        break;
      case "Bilim Kurgu":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      case "Fantastik":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      case "Korku":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      case "Tarih":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      case "Felsefe":
        form.setFieldsValue({
          note: "Hi there!",
        });
        break;
      default:
    }
  };

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="w-[600px] border h-[480px] p-5 shadow-2xl rounded-2xl">
        <Form
          form={form}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            name="bookName"
            rules={[
              {
                required: true,
                message: "Please input your bookName!",
              },
            ]}
          >
            <Input placeholder="Book Name" />
          </Form.Item>

          <Form.Item
            name="author"
            rules={[
              {
                required: true,
                message: "Please input your author!",
              },
            ]}
          >
            <Input placeholder="Author" />
          </Form.Item>

          <Form.Item
            name="quantity"
            rules={[
              {
                required: true,
                message: "Please input your quantity!",
              },
            ]}
          >
            <Input placeholder="Quantity" />
          </Form.Item>

          <Form.Item
            name="department"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Departments"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="Roman">Roman</Option>
              <Option value="Polisiye/Gizem">Polisiye/Gizem</Option>
              <Option value="Bilim Kurgu">Bilim Kurgu</Option>
              <Option value="Fantastik">Fantastik</Option>
              <Option value="Korku">Korku</Option>
              <Option value="Tarih">Tarih</Option>
              <Option value="Felsefe">Felsefe</Option>
            </Select>
          </Form.Item>

          <Form.Item name="comments">
            <TextArea placeholder="Comments" rows={4} />
          </Form.Item>

          <div className="p-2 flex items-center justify-center">
            <button
              type=" submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-20 rounded"
            >
              Add Book
            </button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default FormComp;
