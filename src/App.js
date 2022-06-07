// import logo from "./logo.svg";
import "./App.css";
import { Input, Table } from "antd";
import { getRepos } from "./user/Api";
import { useState } from "react";

function App(props) {
  const { history } = props;
  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);
  const [data, setData] = useState([]);
  const handleUserNameChange = (username) => {
    getRepos({ username })
      .then((response) => {
        setData(response.data);
        // setPagination({
        //   data,
        //   total,
        //   page: current_page,
        //   perPage: per_page,
        // });
      })
      .catch((error) => {
        const message = error.response
          ? error.response.data.message
          : "Terjadi kesalahan, silahkan coba lagi";

        console.log(message);
        // toast.notify(({ onClose }) => (
        //   <Alert color="danger" toggle={onClose}>
        //     {message}
        //   </Alert>
        // ));
      });
  };

  const dataSource = [
    {
      key: "1",
      name: "Mike",
      age: 32,
      address: "10 Downing Street",
    },
    {
      key: "2",
      name: "John",
      age: 42,
      address: "10 Downing Street",
    },
  ];

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
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      width: "5%",
      align: "center",
      render: (id) => {
        return <button>Download</button>;
      },
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
    // <div className="App">
    //   <button onClick={(e)=>
    // {
    //   e.preventDefault();
    //   window.location.href='https://github.com/login/oauth/authorize?client_id=f9a530a7142f3aa727e4';}}>Sign in with Github</button>
  );
}

export default App;
