import React from 'react'
import { useState } from "react"
import { Offcanvas, Col } from "react-bootstrap"
import Details from '../Details/Details';
import JobsList from '../JobsList/JobsList';
import { addToFavouritesAction,removeFromFavouritesAction } from '../../redux/actions/actions';
import { FcLike } from "react-icons/fc"
import { AiOutlineHeart } from "react-icons/ai"
import { useDispatch, useSelector } from 'react-redux';

function OffcanvasDescription({jobsList}) {

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const { jobDetails, favourites } = useSelector(state => state)
    const dispatch = useDispatch()
  
    return (
      <>
      <div onClick={handleShow}>
        <JobsList jobsList={jobsList}  />
      </div>

        <Offcanvas show={show} onHide={handleClose} scroll='true' backdrop='true' placement='end'>
          <Offcanvas.Header closeButton>
                {favourites.companies.includes(jobDetails.details)?
                        <Col md={1}>
                            <FcLike className="mr-5 ml-2 mt-4" onClick={() => dispatch(removeFromFavouritesAction(jobDetails.details))} />
                        </Col>
                        :<Col md={1}>
                            <AiOutlineHeart className="mr-5 ml-2 mt-4" onClick={() =>dispatch(addToFavouritesAction(jobDetails.details))} />
                        </Col>
                }
          </Offcanvas.Header>
          <Offcanvas.Body >
              <Details job={jobDetails.details} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  
  export default OffcanvasDescription