import { NavLink } from "react-router-dom";
import "./A.css";
const Add = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="col-5 mx-auto mt-4 " >
                    <h3 style={{marginTop:20  }} > Registration </h3>
               <hr/>
                    <div  >
                    
                        <label htmlFor="types" ></label>
                        <input type="radio" id="personal" value="Personal" name="types" /> &nbsp;
                        <label>Personal</label>&nbsp;&nbsp;
                        <input type="radio" id="Company" value="Company" name="types" />&nbsp;
                        <label>Company</label>
                         <hr/>
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                        <input type="email" id="email" class="form-control" placeholder="Email" aria-label="First name" />
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                        <input type="name" class="form-control" id="name" placeholder="Name" aria-label="First name" />
                    </div>

                    <div className="col-7 mt-3 mx-auto  ">
                        <input type="password" id="password" class="form-control" placeholder="Password" aria-label="First name" />
                    </div>

                    <div className="mt-3" >
                        <label htmlFor="male"></label>
                        <input type="checkbox" id="male" value="Male" />&nbsp;
                        <label>Male</label> &nbsp;

                        <input type="checkbox" id="female" value="Female" />&nbsp;
                        <label>Female</label>
                    </div>

                    <div>
                        <p>By clicking Register,You agree on our <NavLink> Privercy Policy <br />  for W3Docs.</NavLink> </p>
                    </div>

                    <div  >
                        <button type="submit" class="btn btn-primary col-8  " style={{ marginBottom: 30 }} >Submit</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default Add;