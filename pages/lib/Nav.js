import { useSession, signIn, signOut } from "next-auth/react";
import '../../styles/Nav.module.css';
export default function Nav() {
  const { data: session } = useSession()
  if(session) {
    if(session.user.image) {
  return(<>
   <img src={session.user.image} id="avatar"/>
  </>)
    } else {
      return(<>
      <img src="https://cdn.discordapp.com/embed/avatars/0.png" id="avatar"/>
      </>)
    }
  } else {
    return(<>
     <img src="https://cdn.discordapp.com/embed/avatars/0.png" onClick={() => signIn()} id="avatar"/>
    </>)
  }
}