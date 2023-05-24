import { Link } from 'react-router-dom'

export default function PublicNavBar() {
  return(
    <nav>
    <Link to="/" >Home</Link>
    &nbsp; | &nbsp;
    <Link to="/howitworks" >How It Works</Link> 
    &nbsp; | &nbsp;
    <Link to="/terms" >Policies</Link>
    &nbsp; | &nbsp;
    <Link to="/auth" >Sign Up/Log In</Link>
   </nav>
  )
}