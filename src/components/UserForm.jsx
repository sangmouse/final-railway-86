import classes from "../styles/user-form.module.scss";

const UserForm = () => {
  return (
    <div className={classes.form__bg}>
      <div className={classes.form__container}>
        <form action="">
          <h3>User Form</h3>
          <div>
            <div>
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                name="username"
                id="username"
                placeholder="User name"
              />
            </div>
            <br />
            <br />
            <div>
              <label htmlFor="role">Role</label>
              <select name="role" id="role">
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
              <select name="department" id="department">
                <option value="it">IT</option>
                <option value="sale">Sales</option>
                <option value="marketing">Marketing</option>
                <option value="consultant">Consultant</option>
              </select>
            </div>
            <br />
            <br />
            <div className={classes['form__btn-wrap']}>
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
