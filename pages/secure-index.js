
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';
import { Button, Card } from 'semantic-ui-react';
import Container from "@material-ui/core/Container"
import Typography from "@material-ui/core/Typography"

const Index = ({ notes }) => {
  return (
    <div className="notes-container">
      <Container className="bg-notes">
        <Typography style={{color:'#33322A'}} align="center" component="h3" variant="h3" gutterBottom>Test</Typography>
        <div className="grid wrapper">
          {notes.map(note => {
            return (
              <div key={note._id}>
                <Card style={{backgroundColor:'#33322A'}}>
                  <Card.Content>
                    <Card.Header>
                      <Link href={`/${note._id}`}>
                        <Typography component="h5" variant="h5" style={{color:'#E7DDB8'}}>{note.title}</Typography>
                      </Link>
                    </Card.Header>
                  </Card.Content>
                  <Card.Content extra>
                    <Link href={`/${note._id}`}>
                      <Button primary style={{backgroundColor:'#E7DDB8', color:'#33322A'}}>View</Button>
                    </Link>
                    <Link href={`/${note._id}/edit`}>
                      <Button style={{backgroundColor:'#E7DDB8', color:'#33322A'}} primary>Edit</Button>
                    </Link>
                  </Card.Content>
                </Card>
              </div>
            )
          })}
        </div>
      </Container>
    </div>
  )
}

Index.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/notes');
  const { data } = await res.json();

  return { notes: data }
}

export default Index;