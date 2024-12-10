import { useEffect, useState } from "react";
import classes from "../styles/user-form.module.scss";
import { nanoid } from "nanoid";
import { useNavigate, useParams } from "react-router-dom";

const UserForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [user, setUser] = useState({
    username: "",
    role: "dev",
    department: "it",
  });

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!params.userID) {
      await fetch("http://localhost:3000/userList", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          role: user.role,
          department: user.department,
        }),
      });
    } else {
      await fetch(`http://localhost:3000/userList/${params.userID}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: user.username,
          role: user.role,
          department: user.department,
        }),
      });
    }
    navigate("/");
  };

  const getUserDetail = async () => {
    const detail = await fetch(
      `http://localhost:3000/userList/${params.userID}`
    );
    const data = await detail.json();
    setUser({
      ...user,
      username: data.username,
      role: data.role,
      department: data.department,
    });
  };

  useEffect(() => {
    if (params.userID) {
      getUserDetail();
    }
  }, [params.userID]);

  return (
    <div className={classes.form__bg}>
      <div className={classes.form__container}>
        <form action="" onSubmit={onSubmit}>
          <h3>User Form</h3>
          <div>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={user.username}
                onChange={(event) =>
                  setUser({
                    ...user,
                    username: event.target.value,
                  })
                }
              />
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="role">Role</label>
              <select
                name="role"
                id="role"
                value={user.role}
                onChange={(event) =>
                  setUser({
                    ...user,
                    role: event.target.value,
                  })
                }
              >
                <option value="dev">Developer</option>
                <option value="qa">QA</option>
                <option value="qc">QC</option>
                <option value="ba">BA</option>
              </select>
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="department">Department</label>
              <select
                name="department"
                id="department"
                value={user.department}
                onChange={(event) =>
                  setUser({
                    ...user,
                    department: event.target.value,
                  })
                }
              >
                <option value="it">IT</option>
                <option value="sale">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="consultant">Consultant</option>
              </select>
            </div>
            <br />
            <br />
            <div className={classes["form__btn-wrap"]}>
              <button className={classes["form__btn-submit"]}>
                <span>Submit</span>
                <span className={classes.form__icon}></span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
