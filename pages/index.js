import { useSession, signIn, signOut } from "next-auth/react"
import Nav from './lib/Nav'
import '../styles/Home.module.css';
import '../styles/Nav.module.css';
import LogButton from './lib/Login'
export default function Component() {
  const { data: session } = useSession()
  var user = ""
  if(session) user=session.user.name;
  if(!session) user="User"
  return(<>
   <Nav/>
   <br/>
   <br/>
   <br/>
   <div id="container">
    <center>
     <h1>Welcome {user}</h1>
     <h3>Discord NextAuth.js example</h3>
     <LogButton/>
    </center>
   </div>
  </>)
    }