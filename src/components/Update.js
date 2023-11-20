import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const Update = () =>{
     const {studentId} = useParams ()
     const navigate = useNavigate()

    const {register,handleSubmit,setValue} =  useForm()

    async function fetchdata(){
        const result = await
        axios.get(`http://localhost:8000/students/${studentId}`);
        setValue("types",result.data.types);
        setValue("email",result.data.email);
        setValue("name",result.data.name);
        setValue("password",result.data.password);
    }

    

    function savedata(data){
        axios.put(`http://localhost:8000/students/${studentId}`,data);
        navigate("/show");
    }

    useEffect(()=>{
        fetchdata();
      },[])




    return(
        <>
         <form onSubmit={handleSubmit(savedata)}>
        <div className="main">
            <div className="container">
                <div className="col-5 mx-auto mt-4 " >
                    <h3 style={{marginTop:20  }} > Registration </h3>
               <hr/>
                    <div  >
                    
                        <label htmlFor="types" ></label>
                        <input type="radio" id="personal" value="Personal" name="types" {...register("types")} /> &nbsp;
                        <label>Personal</label>&nbsp;&nbsp;
                        <input type="radio" id="Company" value="Company" name="types" {...register("types")} />&nbsp;
                        <label>Company</label>
                         <hr/>
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                    
                        <input type="email" id="email" class="form-control" placeholder="Email" aria-label="First name" {...register("email")} />
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                        <input type="name" class="form-control" id="name" placeholder="Name" aria-label="First name" {...register("name")} />
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                        <input type="password" id="password" class="form-control" placeholder="Password" aria-label="First name"  {...register("password")} />
                    </div>

                    <hr/>

                    <div className="mt-3" >
                        
                        <input type="checkbox" id="male" value="Male" {...register("gender")}/>&nbsp;
                        <label>Male</label> &nbsp;

                        <input type="checkbox" id="female" value="Female" {...register("gender")} />&nbsp;
                        <label>Female</label>
                    </div>
                    <hr/>
                    <div>
                        <p>By clicking Register,You agree on our <NavLink> Privercy Policy <br />  for W3Docs.</NavLink> </p>
                    </div>

                    <div  >
                        <button type="submit" class="btn btn-primary col-8  " style={{ marginBottom: 30 }} >Update</button>
                    </div>

                </div>
            </div>
        </div>
        </form>
        </>
    )
}
export default Update;