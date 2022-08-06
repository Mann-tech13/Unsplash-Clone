import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css'

function Home() {

  const [value, setValue] = useState("Wallpaper")
  const url = `https://api.unsplash.com/search/photos?page=1&query=${value}&client_id=6-jCrab1xixjBkEIP_hGKukz3iB44nR3nAyDleOQops`
  const [images, setImages] = useState([])
  
  // setValue("Wallpaper")

  useEffect(() => {
    axios.get(url)
      .then(response => {
          setImages(response.data.results)
          // console.log(response)
      })
      .catch(err => {
        console.log(err)
      },[])
  })

  return (
    <div>
      <div className="container">
        <div className="container-content">
          <div className='heading'>Unsplash</div>
          <div className="desciption">
            <span>The internet’s source of freely-usable images.</span>
            <br/>
            Powered by creators everywhere.
          </div>
          <div className="search-here">
            <Container fluid>
              <Navbar.Collapse id="navbarScroll">
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="search"
                    aria-label="Search"
                    onChange = {(e) => setValue(e.target.value)}
                  />
                </Form>
              </Navbar.Collapse>
            </Container>
          </div>
          <div className="trending">
            <span>Trending:</span> flower, wallpapers, background, shappylove
          </div>
        </div>
      </div>

      <div className="api-container">
        {
          images.map((value) => {
            return(
              <img src={value.urls.regular} className="imgs" alt="" />
            )
          })
        }
      </div>

    </div>
  )
}

export default Home





// .display-imgs {
//   display: flex;
//   /* width: 300px;
//   height: 300px; */
//   justify-content: space-between;
//   /* flex-wrap: wrap; */
//   /* padding: 5px; */
//   margin: 45px 60px;
// }

// .imgs {
//   width: 400px;
//   height: 400px;
//   /* object-fit: cover; */
//   /* margin-bottom: 20px;
//   border-radius: 5px;
//   cursor: pointer;
//   background: #f9f9f9; */
// }
