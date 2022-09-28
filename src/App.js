import logo from './logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function App() {
  return (
    <div className="App">
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">E.K-Watch</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Kids">Kids</Nav.Link>
            <Nav.Link href="#Show">Show</Nav.Link>
            <NavDropdown title="Movie" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Horror
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Romance
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#SignUp">Sign Up</Nav.Link>
            <Nav.Link eventKey={2} href="#LogIn">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



    <Carousel className='film'>
      <Carousel.Item interval={10000} style= {{width:"25cm"}} >
        <img
          className="d-block w-100"
          src="https://staticc.sportskeeda.com/editor/2021/11/412e4-16367363983803-1920.jpg"
          alt="First slide"
        />
        <Carousel.Caption >
          <h3 className='name' >Red Notice</h3>
          <h4 className='info'>2021 | 13+ | 1 h 58 min | Comédies</h4>
          <p className='description' >Un agent du FBI est forcé de faire équipe avec le voleur d'art le plus recherché de la planète pour coincer une insaisissable criminelle qui a toujours un coup d'avance.</p>
          <Button className='butt' variant="outline-danger">Trailer</Button>{' '}
          <Button className='buttW' variant="danger">Watch Movie</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500} style= {{width:"25cm"}}>
        <img
          className="d-block w-100"
          src="https://occ-0-6302-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSRe1hlK0O6SSnHswk-oScrrVA2YqqjBXc06uP6OviId2DD05_o9KWlywvgyf6O2H1G2SQB_ZToHVF6mrzi4iYUHmWwM4BgEO9xa.jpg?r=275"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='name'>Insidious : la dernière clé</h3>
          <h4 className='info'>2018 | 16+ | 1 h 43 min | Films d'horreur</h4>
          <p className='description' >Hantée par d'anciens souvenirs, Elise Rainier, médium, retourne dans la maison de son enfance pour affronter ses démons, ouvrant alors la porte à de sombres secrets.</p>
          <Button className='butt' variant="outline-danger">Trailer</Button>{' '}
          <Button className='buttW' variant="danger">Watch Movie</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style= {{width:"25cm"}}>
        <img
          className="d-block w-100"
          src="https://occ-0-38-32.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfsWb5mTNa7xaCijWuKRY8oTuQT_3gGKZKGT_DQaV8xZVma0suZA2c4WVCwM_JVFu5Rz0hsU9OJ4C5DOMGt6cmHDo-zVwMtA_vSM.jpg?r=855"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='name'>Venom</h3>
          <h4 className='info'>2018 | 16+ | 1h 52m | Sci-Fi Movies</h4>
          <p className='description'>
          Un journaliste affronte un savant fou dans une lutte pour survivre après avoir fusionné avec un symbiote extraterrestre qui lui donne des superpouvoirs remarquables.
          </p>
          <Button className='butt' variant="outline-danger">Trailer</Button>{' '}
          <Button className='buttW' variant="danger">Watch Movie</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <CardGroup className='cards'>
      <Card className='card' >
        <Card.Img variant="top" src="https://occ-0-1433-586.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABT4ytWfX-chVfXWbTO7iJnk7h082QrYRHc9TE-ZhHmmO9AwttvpkhfZLTZglfOaiFufVIXZQ9sBbVKFvY_6IW6NXtUZRiR8TwfXF.jpg?r=d84" />
        <Card.Body className='cardb'>
          <Card.Title>Ride Along 2</Card.Title>
          <Card.Text>
          Before Ben can marry James's sister, the two Atlanta cops must head to Miami to help the local police bring down a brutal drug dealer.
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="https://occ.a.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTZZpyCbcYaxxcB1rdmV-hDs95c9mSsG57E2Qoenj9VbWygRyPZYiEgRjwRSJpaR4CZM7mfKbTU8CjzhTTB14YuSugpJAYACPtPR.jpg?r=b5b" />
        <Card.Body className='cardb'>
          <Card.Title>BayWatch</Card.Title>
          <Card.Text>
          To save their beach, elite lifeguard Mitch Buchannon and a former Olympian probe a criminal plot that threatens the future of the bay.{' '}
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="https://stz1.imgix.net/web/contentId/38790/type/KEY/dimension/1920x1080/lang/en-US?auto=compress,format" />
        <Card.Body className='cardb'>
          <Card.Title>Jumanji: Welcome to the Jungle</Card.Title>
          <Card.Text>
          Four high school students get sucked into the jungle setting of a video game, where they embark on a quest as their comically mismatched adult avatars.
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>
    </CardGroup>

    <CardGroup className='cards'>
      <Card >
        <Card.Img variant="top" src="https://occ-0-395-2219.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX8nLNQSo-gkovsc1HijQjGKhJ35uU3OMbCUG16uIHHlpXHZKrS5bi5vaIKuWHqBY0wq0BTu6hltN1pETznuiodIW-LwCrv_O4RJ.jpg?r=020" />
        <Card.Body className='cardb'>
          <Card.Title>After : La rencontre</Card.Title>
          <Card.Text>
          Wholesome college freshman Tessa Young thinks she knows what she wants out of life, until she crosses paths with complicated bad boy Hardin Scott.
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="https://imgr.cineserie.com/2022/04/2026209.jpg?imgeng=/f_jpg/cmpr_0/w_660/h_370/m_cropbox&ver=1" />
        <Card.Body className='cardb'>
          <Card.Title>The In Between</Card.Title>
          <Card.Text>
          Le cœur brisé par la disparition de l'amour de sa vie dans un accident tragique, une adolescente commence à croire qu'il lui envoie des signes d'outre-tombe.{' '}
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card>
        <Card.Img variant="top" src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*231*230_8_muochl_mvg%5Bwmn%5Bzkr%5Be4%5Bivmwrgrlm%5B587v5880uy787v6xz0u8zww441v7v2uvw57u1uy5%5BZZZZYBDOEr4Byj5MQ1VHyBGHrn%5D7suBYnb8gf3vvmNLnMmRonowthk7cLkoeCzGAgycLk%5Dmmf4ztZijiGfawD*m6Rm0vBxG8LbHJYiF3eZ3QY0DAht5v*RqSumz%5Dr0FE7c7pNc77A8nRDZ.jpg" />
        <Card.Body className='cardb'>
          <Card.Title>The Lucky One</Card.Title>
          <Card.Text>
          Ce Marine pense avoir été sauvé par la photo d'une inconnue dont il a fait son porte-bonheur. Une fois rentré au pays, il recherche celle qui a changé sa vie.
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>
    </CardGroup>

    <CardGroup className='cards'>
      <Card >
        <Card.Img variant="top" src="https://assets.whatsnewonnetflix.com/external_assets/sggkh+%5B%5Blxx*9*674*604_8_muochl_mvg%5Bwmn%5Bzkr%5Be3%5B9WD3XwV5tBgBc1rb6zq1th0DgCV%5BZZZZYv7gAtaYkwDBnYyV8yt3q4qCDIwhzBJQ1lE0MiopA2wLNYvX*MOGe4IKRSsS89uR%5DAayTyvwAAURg5EKTO9ifx%5DMvI9.jpg" />
        <Card.Body className='cardb'>
          <Card.Title>Annabelle 2 : la création du mal</Card.Title>
          <Card.Text>
          Des années après la mort de leur fille, un fabricant de poupées et sa femme accueillent des orphelins qui prennent bientôt peur face à l'une de ses étranges créations.
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="https://occ-0-993-64.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbVDYTiIkImtt1_ZDY6G3YO3UJVtiyN21qZl9c4gLRXb5VQBGjbGUifN41ex7OsedkVQtSlX-MPI4wExdIeolJCmC9GhpP-dNmMu.jpg?r=336" />
        <Card.Body className='cardb'>
          <Card.Title>Pas un bruit</Card.Title>
          <Card.Text>
          Une écrivaine sourde qui s'est retirée au fond des bois pour vivre dans la solitude doit défendre sa vie en silence quand un tueur masqué apparaît à sa fenêtre.{' '}
          </Card.Text>
          <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>

      <Card >
        <Card.Img variant="top" src="https://elcomercio.pe/resizer/W4WdFlIdjwfG4yYZ323pzvCUIWI=/980x528/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/2OOKR6HRRFEE7H6KZNSUAO6JXA.jpg" />
        <Card.Body className='cardb'>
          <Card.Title>Bird Box</Card.Title>
          <Card.Text>
          Depuis cinq ans, une présence invisible et menaçante pousse la population au suicide. Mais une femme et ses deux enfants font le pari insensé de lui échapper...
           </Card.Text>
           <Button variant="outline-secondary">See Now!</Button>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>
  );
}

export default App;
