import classes from "../styles/user-list.module.scss";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.png";
import viewIcon from "../assets/images/eye.png";
import { useNavigate } from "react-router-dom";

const UserList = () => {

  const navigate = useNavigate()

  return (
    <div className={classes["user-list"]}>
      <button onClick={() => navigate('/create-user')} className={classes["user-list__btn-add-more"]}>+ New user</button>
      <table>
        <tr>
          <th>User ID</th>
          <th>User Name</th>
          <th>Role</th>
          <th>Department</th>
          <th>Action</th>
        </tr>
        <tr>
          <td>1</td>
          <td>John Sep</td>
          <td>Developer</td>
          <td>IT</td>
          <td>
            <div className={classes['user-list__btn-group']}>
              <button>
                <img src={trashIcon} />
              </button>
              <button>
                <img src={editIcon} />
              </button>
              <button>
                <img src={viewIcon} />
              </button>
            </div>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default UserList;
