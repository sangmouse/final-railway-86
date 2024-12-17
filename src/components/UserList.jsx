import classes from "../styles/user-list.module.scss";
import trashIcon from "../assets/images/trash.svg";
import editIcon from "../assets/images/edit.png";
import viewIcon from "../assets/images/eye.png";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import Paginate from "./Paginate";
import { Modal } from "react-bootstrap";

const ROLE = [
  {
    label: "Developer",
    value: "dev",
  },
  {
    label: "QA",
    value: "qa",
  },
  {
    label: "QC",
    value: "qc",
  },
  {
    label: "BA",
    value: "ba",
  },
];

const DEPARTMENT = [
  {
    label: "IT",
    value: "it",
  },
  {
    label: "Sales",
    value: "sale",
  },
  {
    label: "Marketing",
    value: "marketing",
  },
  {
    label: "Consultant",
    value: "consultant",
  },
];

const UserList = () => {
  const [userList, setUserList] = useState([]);
  const [userSelected, setUserSelected] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastItem = currentPage * 4;
  const indexOfFirstItem = indexOfLastItem - 4;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const currentList = userList.slice(indexOfFirstItem, indexOfLastItem);
  const navigate = useNavigate();

  /**
   *
   * current page = 1 => lastItem = 4, firstItem = 0
   * current page = 2 => lastItem = 8, firstItem = 4
   * current page = 3 => lastItem = 12, firstItem = 8
   *
   * page 1 : [0][1][2][3]
   * page 2 : [4][5][6][7]
   * page 3 : [8][9][10][11]
   */

  const getList = async () => {
    const list = await fetch("http://localhost:3000/userList");
    const data = await list.json();
    setUserList(data);
  };

  const removeUser = async (id) => {
    await fetch(`http://localhost:3000/userList/${id}`, {
      method: "DELETE",
    });
    await getList();
    toast.success("Remove user success!");
  };

  const onPreviousPage = () => {
    if (currentPage > 1) setCurrentPage((state) => (state -= 1));
  };
  const onNextPage = () => {
    if (currentPage < Math.ceil(userList.length / 4))
      setCurrentPage((state) => (state += 1));
  };

  const handleCurrentPage = (item) => setCurrentPage(item);

  useEffect(() => {
    getList();
  }, []);

  return (
    <>
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
          {currentList.length > 0 &&
            currentList.map((item) => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.username}</td>
                  <td>{ROLE.find((ele) => ele.value === item.role)?.label}</td>
                  <td>
                    {
                      DEPARTMENT.find((ele) => ele.value === item.department)
                        ?.label
                    }
                  </td>
                  <td>
                    <div className={classes["user-list__btn-group"]}>
                      <button
                        onClick={() => {
                          setUserSelected(item);
                          handleShow(true);
                        }}
                      >
                        <img src={trashIcon} />
                      </button>
                      <button onClick={() => navigate(`update/${item.id}`)}>
                        <img src={editIcon} />
                      </button>
                      <button>
                        <img
                          src={viewIcon}
                          onClick={() => navigate(`view/${item.id}`)}
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </table>
        {!userList.length && (
          <div className={classes["user-list__no-data"]}>No Data</div>
        )}
        {currentList?.length > 0 && (
          <Paginate
            userList={userList}
            currentPage={currentPage}
            onNextPage={onNextPage}
            onPreviousPage={onPreviousPage}
            setCurrentPage={handleCurrentPage}
          />
        )}
      </div>
      <Modal centered show={show}>
        <Modal.Body>
          <div className={classes["user-list__text-confirm"]}>
            Are you sure want to delete this item ?
          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            className={classes["user-list__btn-close"]}
            onClick={handleClose}
          >
            Close
          </button>
          <button
            className={classes["user-list__btn-delete"]}
            onClick={() => {
              removeUser(userSelected.id);
              handleClose();
              setUserSelected(null);
            }}
          >
            Delete
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UserList;
