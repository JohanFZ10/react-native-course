import { useEffect, useState, useRef } from "react";
import { User, ReqRespProps } from "../interfaces/reqResp.interface";
import { reqRespApi } from "../api/regResp";

const useUsers = (initialPage: number = 1) => {
  const [users, setUsers] = useState<User[]>([]);
  const pageRef = useRef(initialPage);

  // Llamado inicial a la API
  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const resp = await reqRespApi.get<ReqRespProps>("/users", {
      params: { page: pageRef.current },
    });
    
    if(resp.data.data.length > 0){
        setUsers(resp.data.data)
    }else{
        alert('No existen mas usuarios')
        pageRef.current --;
    }
  };

  const nextPage = async () => {
    pageRef.current ++;
    getUsers();
  };
  const previousPage = async () => {
    if(pageRef.current > 1){
        pageRef.current --;
        getUsers();
    }
  };
  return { users, nextPage, previousPage };
};
export default useUsers;
