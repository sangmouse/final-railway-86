import classes from "../styles/user-list.module.scss";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.png";
import viewIcon from "../assets/images/eye.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();

  const getList = async () => {
    const list = await fetch("http://localhost:3000/userList");
    const data = await list.json();
    setUserList(data);
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:3000/userList/${id}`, {
      method: 'DELETE'
    });
    await getList()
    toast.success('Remove user success!')
  }

  useEffect(() => {
    getList();
  }, []);


  return (
    <div className={classes["user-list"]}>
      <button
        onClick={() => navigate("/create-user")}
        className={classes["user-list__btn-add-more"]}
      >
        + New user
      </button>
      <table>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Role</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
        {userList.length > 0 && userList.map((item) => {
          return (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.role}</td>
              <td>{item.department}</td>
              <td>
                <div className={classes["user-list__btn-group"]}>
                  <button onClick={() => removeUser(item.id)}>
                    <img src={trashIcon} />
                  </button>
                  <button onClick={() => navigate(`update/${item.id}`)}>
                    <img src={editIcon} />
                  </button>
                  <button>
                    <img src={viewIcon} onClick={() => navigate(`view/${item.id}`)}/>
                  </button>
                </div>
              </td>
            </tr>
          );
        })}
      </table>
        {
          !userList.length && <div className={classes['user-list__no-data']}>No Data</div>
        }
    </div>
  );
};

export default UserList;
