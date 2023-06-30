import { createClient, OAuthStrategy } from “@wix/api-client”
import { useState, useEffect } from “react”
import Cookies from “js-cookie”
import { redirects } from “@wix/redirects”
import { myWixClient } from “../helpers
//
// const myWixClient = createClient({
//       auth: OAuthStrategy ({
//              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//              tokens: JSON.parse(Cookie.get(“session”) || null),
//       })
// }) 

const LoginCallback = () => {
       const [ nextPage, setNextPage ] = useState(null)
       const [ errorMessage, setErrorMessage ] = useState(null)

       const verifyLogin = async () => {
              JSON.parse(localStorage.getItem(‘oauthRedirectData’))
              localStorage.removeItem(‘oauthRedirectData’)

       Try {
                     const { code, state } = myWixClient.auth.parseFromUrl()
                     let tokens = await myWixClient.auth.getMemberTokens(code, state, data)
                     while (!tokens?.refreshToken?.value) {
                            tokens = await myWixClient.auth.getMemberTokens(code, state, data)
                     }
                     Cookies.set(‘session’, JSON.stringify(tokens))
                     window.location = data.OriginalUri? || ‘/’
              } catch (e) {
                     setNextPage(data.OriginalUri? || ‘/’)
                     setErrorMessage(e.toString())
              }
       }

       useEffect(() => {
              verifyLogin()
       }, [])

       return (
              <article>
                     {errorMessage && <p>ErrorMessage</p>}
                     {nextPage ? <a href={nextPage}>Continue</a> : <>loding…</>}
              <article/>
       )
}
