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
    address_name: string
}[]


const Profile: React.FunctionComponent<ProfileProps> = () => {

    const { user, dispatch } = useContext(AuthContext);
    const [firstname, setfirstname] = useState("");
    const [lastname, setlastname] = useState('')
    const [email, setemail] = useState("");
    const [NIC, setNIC] = useState("");
    const [role, setrole] = useState("");
    const [addresses, setaddresses] = useState<address>([]);

    let id = user.id

    useEffect(() => {
        getUserDetails(id).then((res) => {
            //console.log(res.data)
            setaddresses(res.data.addresses)
            setfirstname(res.data.firstName);
            setlastname(res.data.lastName)
            setemail(res.data.email);
            setNIC(res.data.NIC);
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
                                <h6>First Name</h6>
                            </div>
                            <div className="col-sm-8">
                                <h6 className="text-muted">{firstname}</h6>
                            </div>
                        </div>
                        <div className="row ">
                            <div className="col-sm-4 text-center">
                                <h6>Last Name</h6>
                            </div>
                            <div className="col-sm-8">
                                <h6 className="text-muted">{lastname}</h6>
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
                                <div className="row" key={index}>
                                    <div className="col-sm-4 text-center">
                                        <h6>Address {index + 1}</h6>
                                    </div>
                                    <div className="col-sm-8 ">
                                        <h6 className="text-muted">{address.address_name}</h6>
                                    </div>
                                </div>
                            );
                        })}




                    </div>
                    {/* <div className="row">
                        <div className="col-sm-8"></div>
                        <div className="col-sm-4 ">
                            <Link to='/profile/edit' className=''>
                                <button className="btn">Edit Profile</button>
                            </Link>

                        </div>
                    </div> */}
                        <div className="row">
                            <div className="col-sm-8"></div>
                            <div className="col-sm-4 ">
                                <Link to='/profile/transaction-history' className=''>
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