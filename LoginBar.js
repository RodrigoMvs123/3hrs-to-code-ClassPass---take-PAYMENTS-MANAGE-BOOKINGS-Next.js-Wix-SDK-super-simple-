// import { createClient, OAuthStrategy } from “@wix/api-client”
// import { members } from “@wix/members”
import { useEffect, useState } from “react”
import Cookies from “js-cookie”
import { myWixClient } from “../helpers”
//
// const myWixClient = createClient({
//       modules: { members },
//       auth: OAuthStrategy ({
//              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//              tokens: JSON.parse(Cookie.get(“session”) || null),
//       })
// }) 

const LoginBar = () => { 
       const [ user, setUser ] = useState(null)
       const [ member, setMember ] = useState(null)

       const fetchMember = async() => {
             const {member} = myWixClient.auth.loggedIn() ? await myWixClient.members.getMyMember() : {} 
              setMember(member || undefined)
} 

       const login = async() => {
              myWixClient.auth.generateOauthData(‘${window.location.origin}/login-callback’, window.location.href)
              const data = localStorage.setItem(‘oauthRedirectData’, JSON.stringify(data))
              const {authUrl} = await myWixClient.auth.getAuthUrl(data)
              window.location = authUrl
}

       const logout = async() => {
       const {logoutUrl} = await myWixClient.auth.logout(window.location.href)
       Cookies.remove(‘session’)
       window.location = logoutUrl
}

       useEffect(()=> {
              fetchMember()
       }, [])
 
       useEffect(() =>{
              if(myWixClient.auth.loggedIn()) {
                     setUser(member?.profile?.nickname || member?.profile?.slug || ‘’)
              } else {
                     setUser(‘visitor’)
              }
       }, [myWixClient.auth.loggedIn(), user, member?.profile?.nickname, member?.profile?.slug ])

       return (
              <nav>
              <div className=“item-container”> 
                     <p>Hello {user}</p>
              <div/>
              {member !== null &&<button
                className=“login”
                onClick={ () => my.WixClient.auth.loggedIn() ? logout() : login()} 
              >{my.WixClient.auth.loggedIn() ? “Log out”  : “Log in”}
              </button>}

               <div className=“item-container”>
                      <button 
                             className=“primary”
                             onClick={login}
                      >Try for free
                      </button>             
               </div>
              </nav>
       )
}

export default LoginBar
