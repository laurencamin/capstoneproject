import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service.js'

export default function NavBar({ user, setUser }) {

function handleLogOut() {
  userService.logOut()
  setUser(null)
}

    return (
    <nav>
     <Link to="/custom">Custom Order</Link>
     &nbsp; | &nbsp;
     <Link to="/orders" >Order History</Link>
     &nbsp; | &nbsp;
     <Link to="orders/new" >New Order</Link> 
     &nbsp; | &nbsp;
     <Link to="/map" >Nonprofit Map</Link>
     &nbsp; | &nbsp;
     <span>Welcome, {user.name}</span>
     <Link to='' onClick={handleLogOut}>Log Out</Link>
    </nav>
    )
  };
