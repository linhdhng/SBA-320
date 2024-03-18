import Form from 'react-bootstrap/Form'

function SignIn() {
  return (
    <div className="signin">
        <Form>
        <h2>Sign In</h2>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>Enter Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        <button style={{ borderRadius: '15px' }}>Sign In</button>
        </Form>
  </div>
  )
}

export default SignIn