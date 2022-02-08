import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import jwt_decode from 'jwt-decode'
import Cookie from 'js-cookie';
import { getUser, getUserDetails } from '../../Services/Api/UserServices/UserApi';
import { AuthContext } from '../../Context/AuthContext';

interface ProfileProps {

}
type address = {
    Address: string
}


const Profile: React.FunctionComponent<ProfileProps> = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [NIC, setNIC] = useState("");
    const [role, setrole] = useState("");
    const [addresses, setaddresses] = useState([]);

    let id = user.id

    useEffect(() => {
        getUserDetails(id).then((res) => {
            console.log(res.data[0]);
            setaddresses(res.data[0])
            setname(res.data[1].Name);
            setemail(res.data[1].Email);
            setNIC(res.data[1].NIC);
        })
    }, []);






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
                                <h6 className="text-muted">{name}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>Email</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">{email}</h6>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4 text-center">
                                <h6>NIC</h6>
                            </div>
                            <div className="col-sm-8 ">
                                <h6 className="text-muted">{NIC}</h6>
                            </div>
                        </div>
                        {addresses.map((address, index) => {
                            return (
                                <div className="row">
                                    <div className="col-sm-4 text-center">
                                        <h6>Address {index + 1}</h6>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <h6 className="text-muted">{address.Address}</h6>
                                    </div>
                                </div>
                            );
                        })}




                    </div>
                    <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4 ">
                            <Link to='/profile/edit' className=''>
                                <button className="btn">Edit Profile</button>
                            </Link>

                        </div>
                    </div>
                    {user.role == 'basic' &&
                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-4 ">
                                <Link to='/profile/transaction-history' className=''>
                                    <button className="btn">View Transaction Histroy</button>
                                </Link>
                            </div>
                        </div>
                    }

                </div>
            </div>


        </div>

    );
}

export default Profile;