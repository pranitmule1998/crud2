import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Delete = () =>{
    const navigate = useNavigate()

     const {studentId} = useParams()


    const [user,setuser] = useState({})

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/${studentId}`);
        setuser(result.data);
    }

    function deletedata (){
        axios.delete(`http://localhost:8000/students/${studentId}`);
        navigate("/show");
    }

    useEffect(()=>{
        fetchdata()
    },[])

    return(
        <>
       <form onSubmit={()=>deletedata()}>
        <h2>Are You want to delete data of {user.name}</h2>
        <button type="submit" >Yes</button>
        <NavLink to={"/show"}><button>No</button></NavLink>
       </form>
        </>
    )
}
export default Delete;