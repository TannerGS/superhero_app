import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody, CardTitle, CardSubtitle, Container, Row, Col, CardImg
} from 'reactstrap';

const Body = () => {
    // State Variables
    let [heroes, setHeroes] = useState([])

    // Api Request
    useEffect(() => {
      const getHeroes = async () => {
        try {
          const response = await axios.get('https://akabab.github.io/superhero-api/api/all.json');
          const results = response.data;
          setHeroes(results);
        } catch (error) {
          console.error(error);
        }
      }
      getHeroes();
    }, [])

    // Map through results and display in card
    const users = heroes.map((data,id)=>{
      return <Card key={id}>
        <CardBody>
        <CardTitle tag="h2">{data.name}</CardTitle>
        <CardSubtitle tag="h3">{data.biography.fullName}</CardSubtitle>
        <CardImg src={data.images.sm} alt="Superhero Image" />
        <CardText><h4>
        {`Powerstats: Intelligence - ${data.powerstats.intelligence};
          Strength - ${data.powerstats.strength};
          Speed - ${data.powerstats.speed};
          Durability - ${data.powerstats.durability};
          Power - ${data.powerstats.power};
          Combat - ${data.powerstats.combat}`}
        </h4>
        <h4>
        {`Appearance: Gender - ${data.appearance.gender};
          Race - ${data.appearance.race};
          Height - ${data.appearance.height};
          Weight - ${data.appearance.weight};
          Eye Color - ${data.appearance.eyeColor};
          Hair Color - ${data.appearance.hairColor};
          `}
        </h4>
        <h4>
        {`Biography: Alter Egos - ${data.biography.alterEgos};
          Aliases - ${data.biography.aliases};
          Place of Birth - ${data.biography.placeOfBirth};
          First Appearance - ${data.biography.firstAppearance};
          Publisher - ${data.biography.publisher};
          Alignment - ${data.biography.alignment};
          `}
        </h4>
        <h4>
        {`Work: Occupation - ${data.work.occupation};
          Base - ${data.work.base};
          `}
        </h4>
        <h4>
        {`Connections: Group Affiliation- ${data.connections.groupAffiliation};`}
        </h4>
        <h4>
        {`Relatives - ${data.connections.relatives};`}
        </h4>
        <hr/>
        </CardText>
        </CardBody>
      </Card>
      })
      
    return (
          <Container>
            <Row>
              <Col>
                {users}
              </Col>
            </Row>
          </Container>
    )
}

export default Body
