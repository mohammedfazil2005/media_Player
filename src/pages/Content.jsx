import { Button } from 'react-bootstrap'
import React from 'react'
import './Content.css'
import { Link } from 'react-router-dom'
import musicgif from '../assets/musicgif.gif'
import Card from 'react-bootstrap/Card';
import person1 from '../assets/person1.png'
import person2 from '../assets/person2.jpg'


const Content = () => {
  return (
    <div>
      <div className="content-parent">
        <div>
          <h1>Welcome to mediaplayer <i class="fa-solid fa-music fa-bounce"></i></h1>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea iusto aut repellat beatae quisquam vel earum, obcaecati non illo amet magni est commodi ratione ipsum, delectus voluptas laudantium neque reiciendis.</p>
          <Link className='btn btn-primary' to={'/home'}>GET STARTED </Link>
        </div>
        <div>
          <img src={musicgif} alt="" />
        </div>
      </div>
      <div className="features-parent">
        <div>
        <Card style={{ width: '23rem',height:'400px' }}>
      <Card.Img variant="top" src={person1} className='w-100'/>
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Managing Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '23rem',height:'400px'  }}>
      <Card.Img variant="top"  src={person2} className='w-100'/>
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Categories Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
        <div>
        <Card style={{ width: '23rem',height:'400px'    }}>
      <Card.Img variant="top"  src={person1} className='w-100'/>
      <Card.Body>
        <Card.Title style={{color:'orange'}}>Manage History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
        </div>
      </div>
      <div className="maincontent-div">
        <div className='main-div'>
          <h1 className='text-warning'>Simple,fast and poweful</h1>
          <p style={{textAlign:'justify'}}><span className='fw-bold text-warning'>Lorem ipsum dolo</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias repellendus architecto eaque eius. Tempora enim culpa architecto ipsa quia cumque itaque ea debitis adipisci, amet, facere minima eos nam.</p>
          <p style={{textAlign:'justify'}}><span className='fw-bold text-warning'>Lorem ipsum dolo</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias repellendus architecto eaque eius. Tempora enim culpa architecto ipsa quia cumque itaque ea debitis adipisci, amet, facere minima eos nam.</p>
          <p style={{textAlign:'justify'}}><span className='fw-bold text-warning'>Lorem ipsum dolo</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur alias repellendus architecto eaque eius. Tempora enim culpa architecto ipsa quia cumque itaque ea debitis adipisci, amet, facere minima eos nam.</p>
        </div>
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RS9s4gyCobg?si=X_luHoHymyn9P8Wl" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Content
