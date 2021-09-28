import React, {useState} from 'react';
import { Card, CardBody, Form, FormGroup, Input, Button } from 'reactstrap';
import { Image, Navbar, Col, Row} from 'react-bootstrap';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import calender from '../../img/Group87.svg';
import { uploads } from '../../services';
import { CountDown } from '..';
import { setCookie } from '../../utils/cookie';

const ComingSoonRegister = () => {
    const [isLoading, setLoading] = useState(false);
    const [userPost, setUserPost] = useState({
        username: '',
        email: '',
        password: '',
        password2: '',
    });
    
    const changeHandler = (e) => {
        setUserPost({ ...userPost, [e.target.id]: e.target.value });
    }

    const submitUser = async() => {
        setLoading(true);
        const register = await uploads.register(userPost)
        console.log(register.statusCode);
        if (register.statusCode == 201) {
            setLoading(false);
            setCookie('register', JSON.stringify('yes'), 1000)
            alert(register.status);
            window.location.replace('/register');
        } else {
            setLoading(false);
            alert(register.message);
        }
    }

    return (
        <div>
            <Row style={{width:'100%'}}>
                <Col md={4}>
                    <Card className="text-center" style={{backgroundColor:'white', borderRadius:'0 10px 10px 0', height:'100vh', boxShadow:'0 8px 8px 0 rgba(0, 0, 0, 0.2)'}}>
                        <CardBody>
                            <Navbar style={{marginTop:'-20px'}}>
                                <Navbar.Brand href="#home" style={{width:'100%'}}>
                                    <Image src="./img/KIPLogo.svg" style={{height:'60px'}}></Image>
                                </Navbar.Brand>
                            </Navbar>
                            <div style={{marginTop:'-3%'}}>
                                <CountDown />
                                <div style={{marginBottom:'3%'}}>
                                    <Image src={calender} style={{width:'80%', marginTop:'20px'}} />
                                    <p style={{fontWeight:'700', marginTop:'20px'}}>We’re Coming Soon</p>
                                    <p style={{marginTop:'-20px'}}>We'll come up with something new!</p>
                                    <Link to='/' style={{backgroundColor:'#FFA740', border:'0px', color:'#212121', fontWeight:'700', padding:'7px 20%', borderRadius:'5px', textDecoration:'none'}}>HOME</Link>
                                </div>
                            </div>
                        </CardBody>
                    </Card>
                </Col>
                <Col style={{margin:'auto 0'}}>
                    <div className="registerWrap">
                        <Form className="register">
                            <FormGroup>
                                <h5 className="data">Email</h5>
                                <Input 
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Insert your Email"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            <FormGroup style={{marginTop:'10px'}}>
                                <h5 className="data">Username</h5>
                                <Input 
                                    type="text"
                                    name="username"
                                    id="username"
                                    placeholder="Insert your Username"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            <FormGroup style={{marginTop:'10px'}}>
                                <h5 className="data">Password</h5>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Insert Your Password"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            <FormGroup style={{marginTop:'10px'}}>
                                <h5 className="data">Confirmation Password</h5>
                                <Input
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    placeholder="Confirm Your Password"
                                    onChange={changeHandler}
                                />
                            </FormGroup>
                            <div className="buttonRegister">
                                <Button
                                    color="primary"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        submitUser();
                                    }}
                                    disabled={isLoading} style={{marginTop:'30px', width:'100%', backgroundColor:'#FFA740', border:'0'}}
                                >
                                    Register
                                </Button>
                            </div>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    )
};

export default ComingSoonRegister;
