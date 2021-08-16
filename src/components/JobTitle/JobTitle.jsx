import React, { Component } from 'react';
import { Container, Row, Col, Card, Form, FormControl, Spinner } from "react-bootstrap"
import OffcanvasDescription from '../OffcanvasDescription/OffcanvasDescription';
import { RiHomeHeartFill } from "react-icons/ri"
import { BiBookHeart } from "react-icons/bi"
import { BiAlignLeft } from "react-icons/bi"
import { GrWorkshop } from "react-icons/gr"
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import "./JobTitle.css"
import { fetchJobsAction } from '../../redux/actions/actions';

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => ({
    searchJobs : (event, jobSearch, jobLocation) => dispatch(fetchJobsAction(event, jobSearch, jobLocation))
})

class JobTitle extends Component {

    state={
        search:"",
        jobLocation:"",
    }

    render() {
        return (
            <>
            <style type="text/css">
            {`.navbar {display: none}`}
          </style>
            <Container fluid>
                <Row >
                    <Col style={{borderRight:"1px solid #F3F2EF"}} className="side-panels-jobs p-0" md={2}>
                        <Card style={{ width: '100%', border:"none", paddingTop:"40px", backgroundColor:"transparent" }}>
                            <Link style={{color:'black', fontWeight:"bolder"}} to="/" className="navbar-brand text-center">FutureJobs&copy;</Link>
                                    <Card.Body>                                        
                                        <Card.Title className="text-center">Find Your Dream Job</Card.Title>
                                            <div className="my-4">
                                            {this.props.jobs.isLoading?
                                                <>
                                                <Spinner animation="grow" size="sm" />
                                                <Spinner animation="grow" />
                                                </>
                                                :<Form inline>
                                                    <FormControl
                                                    onKeyDown={(e)=>this.props.searchJobs(e, this.state.search, this.state.jobLocation)}
                                                    id="custom-form-jobs"
                                                    value={this.state.jobLocation}
                                                    onChange={(e)=>
                                                        this.setState({
                                                            ...this.state,
                                                            jobLocation:e.target.value
                                                    })}	
                                                    type="text" 
                                                    placeholder="Location" 
                                                    className=" mr-sm-2" />

                                                    <FormControl
                                                    onKeyDown={(e)=>this.props.searchJobs(e, this.state.search, this.state.jobLocation)}
                                                    id="custom-form-jobs"
                                                    value={this.state.search}
                                                    onChange={(e)=>
                                                        this.setState({
                                                            ...this.state,
                                                            search:e.target.value
                                                    })}	
                                                    type="text" 
                                                    placeholder="Search" 
                                                    className=" mr-sm-2 mt-3" />
                                                </Form>
                                                 }
                                            </div>                                               
                                        <Card.Text>
                                        Some quick example text to build on the card title and make up the bulk of
                                        the card's content.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                                <div className="pl-2">
                                    <ul className="p-3 " style={{listStyle:"none"}}>
                                        <Link style={{textDecoration:"none"}} to="/">
                                            <li className="">
                                                <RiHomeHeartFill className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Home</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/favourites">
                                            <li className="mt-3">
                                                <BiBookHeart className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Favourites {this.props.favourites.companies.length}</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/categories">
                                            <li className="mt-3">
                                                <BiAlignLeft className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Categories</span>   
                                            </li>
                                        </Link>
                                        <Link style={{textDecoration:"none"}} to="/companies">
                                            <li className="mt-3">
                                                <GrWorkshop className="" style={{width:"30px", height:"30px", color:"black"}}/> 
                                                <span className="pl-2" style={{paddingLeft:"2rem", color:"black"}} >Companies</span>   
                                            </li>
                                        </Link>
                                    </ul>
                                </div>
                    </Col>

                    {!this.props.jobs.jobsArray.length? 

                    <Col className="background-img-jobs"  md={10} >
                        <div style={{marginTop:"20%", color:"black"}} className="text-center pt-4 pb-3">
                            <h2>Find Your Dream Job</h2>
                        </div>
                        <p style={{ color:"black", padding:"0 20%"}} className="text-center pt-4 pb-3">We have looked for best companies that meet your requirements, expectations and demands. Chose what you like and make your dreams come true </p>
                    </Col>

                    :<Col  md={10} >
                        <div style={{color:"darkBlue"}} className="text-center pt-4 pb-3">
                            <h2>Find Your Dream Job</h2>
                        </div>
                        <Row style={{backgroundColor:"#F3F2EF"}}>
                            <OffcanvasDescription jobsList={this.props.jobs.jobsArray}/>
                        </Row>
                    </Col> 
                }
                </Row>                
            </Container>
            </>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobTitle);