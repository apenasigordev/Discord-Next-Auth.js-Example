import { useSession, signIn, signOut } from "next-auth/react"

export default function Log() {
  const {data: session} = useSession() 
  if(!session) {
  return(
    <button id="login" onClick={() => signIn()}>Login</button>
  )
  } else {
    return(
    <button id="login" onClick={() => signOut()}>Logout</button>
  )
  }
}