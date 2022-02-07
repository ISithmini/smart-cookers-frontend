import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie';
import { getUser, getUserDetails } from '../../Services/Api/UserServices/UserApi';

interface ProfileProps {

}
type userToken = {
    id: number,
    role : string
  }

type user= {
    Name: string,
    Email: string,
    NIC: Number,
    Role: Number,

}
 

const Profile: React.FunctionComponent<ProfileProps> = () => {

    const [id, setId] = useState(0);
    const [user, setUser] = useState<user | null>(null);

    // useEffect(() => {
    //     let cookie = Cookie.get('regdata');
    //     let token = jwt_decode<userToken>(cookie || '') || null;
    //     console.log(token)
    //     setId(token.id);
    //     getUserDetails(id).then(()=>{

    //     })



    // }, []);
    
       


    

    return (
        <div>
            <div className="profile">
                <div>
                    <h6 className="title text-white mb-4">User Profile</h6>
                    <div className="profile-container">
                        <div className="row ">
                            <div className="col-sm-4 text-center">
                                <h6>Full Name</h6>
                            </div>
                            <div className="col-sm-8">
                                <h6 className="text-muted">Imasha Sithmini</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>Email</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">imashasithmini2@gmail.com</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>NIC</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">988472379V</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>Address 1</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">21/3a, Bandara Batawala, Bemmulla</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>Address 2</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">21/3a, Bandara Batawala, Bemmulla</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>Address 3</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">21/3a, Bandara Batawala, Bemmulla</h6>
                            </div>
                        </div>


                    </div>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4 ">
                            <Link to='/profile/edit' className=''>
                                <button className="btn">Edit Profile</button>
                            </Link>

                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4 ">
                            <Link to='/profile/transaction-hostory' className=''>
                                <button className="btn">View Transaction Histroy</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    );
}

export default Profile;