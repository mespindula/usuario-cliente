import React, { useState, useEffect } from "react";
import UserDataService from "../services/UserService";
import { Link } from "react-router-dom";

UserDataService.doLogin();

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveUsers();
  }, []);

  const retrieveUsers = () => {
    UserDataService.getAll()
      .then(response => {
        setUsers(response.data);
        console.log(response.data);
      })
      .catch(e => {
        retrieveUsers();
        console.log(e);
      });
  };

  const deleteUser = (id) => {
    UserDataService.remove(id)
      .then(response => {
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const setActiveUser = (user, index) => {
    setCurrentUser(user);
    setCurrentIndex(index);
  };

  return (
    <div className="list row">
      <div className="col-md-6">
        <h4>Gestão de Utilizadores</h4>

        <ul className="list-group">
          {users &&
            users.map((user, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveUser(user, index)}
                key={index}
              >
                {user.name}
              </li>
            ))}
        </ul>
      </div>
      <div className="col-md-6">
        {currentUser ? (
          <div>
            <h4>Usuário</h4>
            <div>
              <label>
                <strong>Nome:</strong>
              </label>{" "}
              {currentUser.name}
            </div>
            <div>
              <label>
                <strong>E-mail:</strong>
              </label>{" "}
              {currentUser.email}
            </div>

            <Link
              to={"/users/" + currentUser.id}
              className="badge badge-warning"
            >
              Editar
            </Link>

            
          </div>
        ) : (
          <div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersList;