import { useEffect, useState } from "react";
import classes from "../styles/user-form.module.scss";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const UserForm = () => {
  const navigate = useNavigate();
  const params = useParams();
  const location = useLocation();
  const isEdit =
    (params?.userID && location.pathname.includes("update")) || !params?.userID;
  const [user, setUser] = useState({
    username: "",
    role: "dev",
    department: "it",
  });
  const [msg, setMsg] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    if (!user.username.trim()) {
      setMsg("Username is required!");
      return;
    }

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
      toast.success("Create user success!");
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
      toast.success("Update user success!");
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
          {isEdit && <h3>User Form</h3>}
          <div>
            <p className={classes["form__msg-error"]}>{msg}</p>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
                value={user.username}
                disabled={!isEdit}
                onChange={(event) => {
                  setMsg('')
                  setUser({
                    ...user,
                    username: event.target.value,
                  });
                }}
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
                disabled={!isEdit}
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
                disabled={!isEdit}
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
            {isEdit && (
              <>
                <br />
                <br />
                <div className={classes["form__btn-wrap"]}>
                  <button className={classes["form__btn-submit"]}>
                    <span>Submit</span>
                    <span className={classes.form__icon}></span>
                  </button>
                </div>
              </>
            )}
            <br />
            <br />
            <Link to='/' className={classes['form__back-link']}>Back to home</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
