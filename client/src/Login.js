import React from 'react';
import {Container} from 'react-bootstrap'

const auth_url= "https://accounts.spotify.com/authorize?client_id=ba4f55a63317446bb7c1bdba0611e7d0&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state"

export default function Login() {
  return (
    <Container className="d-flex justify-content-center align-items-center"
      style={{minHeight:"100vh"}}>
      <a className="btn btn-success btn-lg" href={auth_url}
      >Login with spotify</a>
    </Container>
  )
}
