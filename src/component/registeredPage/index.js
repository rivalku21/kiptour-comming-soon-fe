import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Image, Navbar} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free';
import { Redirect } from 'react-router-dom';
import envelope from '../../img/envelope-solid.svg';
import calender from '../../img/Group84.svg';
import { CountDown } from '..';
import { isRegistered } from '../../utils/cookie';

const RegisteredUser = () => {
    if (!isRegistered()) {
        return <Redirect to="/" />
    } else {
        return (
            <div>
                <Card className="text-center" style={{width:'80%', margin:'auto', marginTop:'4%', backgroundColor:'white', borderRadius:'10px', boxShadow:'0 4px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                    <CardBody>
                        <Navbar style={{marginTop:'-20px'}}>
                            <Navbar.Brand href="#home">
                                <Image src="./img/KIPLogo.svg" style={{height:'60px', marginLeft:'20px'}}></Image>
                            </Navbar.Brand>
                            <Navbar.Toggle />
                            <Navbar.Collapse className="justify-content-end">
                                <Navbar.Text>
                                    customer.service@kiptour.com
                                    <Image src={envelope} height='20px' style={{marginLeft:'10px'}} />
                                </Navbar.Text>
                            </Navbar.Collapse>
                        </Navbar>
                        <div style={{marginTop:'-3%'}}>
                            <CountDown />
                            <div style={{marginBottom:'3%'}}>
                                <Image src={calender} style={{width:'90%', marginTop:'20px'}} />
                                <p style={{fontWeight:'700', marginTop:'20px'}}>We’re Coming Soon</p>
                                <p style={{marginTop:'-20px'}}>We'll come up with something new!</p>
                                <p style={{margin:'0 auto', backgroundColor:'#FFA740', color:'#212121', width:'20%', fontWeight:'700', padding:'7px 0', borderRadius:'5px'}}>THANK YOU FOR WAITING.</p>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }
};

export default RegisteredUser;
