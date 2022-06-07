import "./App.css";
import { Input, Table } from "antd";
import { getRepos } from "./user/Api";
import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const handleUserNameChange = (username) => {
    getRepos({ username })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        const message = error.response
          ? error.response.data.message
          : "Terjadi kesalahan, silahkan coba lagi";

        console.log(message);
      });
  };

  const columns = [
    {
      title: "Repository Name",
      dataIndex: "name",
      key: "name",
      render: (name, item) => {
        return <a href={item.html_url}>{name}</a>;
      },
    },
    {
      title: "Visibility",
      dataIndex: "visibility",
      key: "visibility",
      width: "10%",
      align: "center",
    },
    {
      title: "Last Updated",
      dataIndex: "updated_at",
      key: "updated_at",
      width: "30%",
      align: "center",
    },
  ];

  return (
    <div style={{ padding: "3rem" }}>
      <Input
        placeholder="Your username of github"
        style={{ marginBottom: "1rem" }}
        onChange={(e) => handleUserNameChange(e.target.value)}
      />
      <Table dataSource={data} columns={columns} />
    </div>
  );
}

export default App;
