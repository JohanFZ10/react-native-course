import { User } from "../interfaces/reqResp.interface";
import useUsers from "../hooks/useUsers";

const UsuariosApi = () => {
  const { users, nextPage, previousPage } = useUsers(1);

  const renderItem = ({ avatar, first_name, email, id }: User) => {
    return (
      <tr key={id}>
        <td>
          <img
            src={avatar}
            alt="Avatar"
            style={{ width: "50px", borderRadius: "50px" }}
          />
        </td>
        <td>{first_name}</td>
        <td>{email}</td>
      </tr>
    );
  };

  return (
    <>
      <h3>Usarios API:</h3>
      <table className="table">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>{users.map((user) => renderItem(user))}</tbody>
      </table>
      <div style={{display: "flex", justifyContent: "space-around"}}>
        <button className="btn btn-primary" onClick={nextPage}>
          Siguiente
        </button>
        <button className="btn btn-primary" onClick={previousPage}>
          Anterior
        </button>
      </div>
    </>
  );
};

export default UsuariosApi;
