# 3hrs-to-code-ClassPass---take-PAYMENTS-MANAGE-BOOKINGS-Next.js-Wix-SDK-super-simple-

https://www.youtube.com/watch?v=wJE5tYkGvD8

Next.js - https://nodejs.org/en 
https://www.mapbox.com/ 
https://www.wix.com/
App Router https://nextjs.org/docs/app 

Visual Studio Code
Terminal 
node -v
npm create-next-app@latest ( https://nextjs.org/docs/getting-started/installation )
Ok to proceed ? ( y )
What is your project name ? ( nextjs-classpass )
Would you like to use TypeScript with this project ? >> no / yes ( no )
Would you like to use ESLint with this project ? >> no / yes ( yes )
Would you like to use TailWind with this project ? >> no / yes ( no )
Would you like to use ‘src/’ directory with this project ? >> no / yes ( no )
Use app Router ( recommended ) ? >> no / yes ( yes )
Would you like to customize the default import alias ? >> no / yes ( no )
Installing dependencies: 
next
eslint
eslint-config-next
npm install
ready started server on 0.0.0.0:3000, url: http://localhost:3000 



Project
src
app
favicon.ico ( Delete )
page.module.css ( Delete )
layout.js ( Delete )
page.js ( Delete )
globals.css ( Delete Scrypt Code ) and move to src directory

Wix UI
Sign In ( New Account ) 
What do you want to add to your website ?
Bookings ( Let client to schedule appointments on your site ) - Next
My project is called: Anias´s Classpass
Dashboard 
Let's get you set up
Booking Services 
Class
Start from Scratch

Booking Services > Service 1 
Service type
Class
Service Details                      Image ( optional ) - Add to Page 
Name 
The Platform 
Tagline ( optional ) 
            The Platform Studios DIFC is Located in Index Mall, Level R1, DIFC.
Description ( optional )
The Platform Studios in Index Towers, DIFC, is the perfect place for a workout 
Come join us and have fun as well as meet like-minded people while doing a fan 
workout for you entire body.
Max participants 
20 participants
Price and Payment
Chose how clients can pay for this service
Per session ( Clients pay for sessions based on the price you set
Price per session 
Amount - 200
Locations 
Location 
            Business location - Add Now 
Add Your Location
Location Address
The Platform Studios - Dubai - United Arab Emirates
Address description ( optional ) 
            The Platform Studios DIFC is Located in Index Mall, Level R1, DIFC.
Save Changes 
Save
Booking Services > The Platform
Locations 
Location 
Dubai
Images
Add a cover image and photo gallery.      ( Add to Page - Cover Photo ) 
Save
Service List
Service
The Platform 
Schedule
Add Sessions
Schedules recurring sessions
Staff
Add new staff member
Ronny - Save 
Schedule 
Add sessions
Add more recurring sessions
Friday
3 PM
Staff
Add new staff member
Sarah - Save
Add more recurring sessions
Saturday
Staff
Ronny 
Add more recurring sessions
Monday 
3 PM
Staff 
Ronny
Save
Save
Booking Services > The Platform
Booking Services
Service list 
Add New Service
Class
Start from Scratch 
Service 2
Service Type
Class 
Service Details                      Image ( optional ) - Add to Page 
Name
Trance Yôga 
Tagline ( optional ) 
A customised fusion of different forms of yôga that will invigorate the seven major chakras.
Description ( optional )
Explore the type of classes and different solutions we offer within it. You are about to start the journey to nurture a better you filled with strength, positivity and vibrancy. 
Max participants 
10 participants 
Price per session 
Amount - 150
Save
Booking Services
Service list
Trance Yôga
Locations 
Location 
Business location - Add Now 
Add Your Location
Location Address
            The Onyx Tower 1 - Dubai - United Arab Emirates
Address description (optional)
Located on the 9th floor
Location Name
Onyx Tower 
Add Location
Business Location
Save
Images 
Add cover image 
Add to page
Save 
Schedule 
Add Sessions
Add new staff member
Gerald
Add more recurring sessions 
Friday 
9 PM 
Add new staff member 
Imogen 
Add more recurring sessions 
Monday
Gerald
Add more recurring sessions 
Tuesday
5 PM
Gerald
Save
Locations 
Business Location 
Choose Location 
Onyx Tower - Dubai
            Next
Save 
Save
Booking Services 
Service list
The Platform 
Locations
Location 
Business location 
Choose locations
Add New Location
            The Platform Studios - Dubai - United Arab Emirates
Address description ( optional ) 
Located on the bottom floor
Location Name
Platform Studios - Dubai
Add location 
Next
Save
Settings 
General
Headless settings ( Use OAuth apps to authenticate with Wix and make API calls from any external platform. )
OAuth apps
Create OAuth app
App Name
classpass-auth
Client info
Client ID ( Save the client ID below. You will need it to connect and authenticate the client with your Wix project. )
e698e30b-eb53-4825-8efd-edb0b5aec749
URLs
Allowed authorization redirect URLs ( * )
Add Redirect URL
http://localhost:3000/login-callback
https://ania3941.wixsite.com/login-callback 
Save

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
src ( Delete )
app ( Delete )
.env

.env
NEXT_PUBLIC_WIX_CLIENT_ID=e698e30b-eb53-4825-8efd-edb0b5aec749

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS

Styles 
Pages 
Components 
jsconfig.json 

jsconfig.json 
“@/*”: [ “./*” ]

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
_app.js 

_app.js 
import Link from ‘next/link’
import ‘../styles/globals.css’

const App ({Components, pageProps}) => {

       return (
              <>
                     <header> 
                            <Link href=“/”>
                                   <h3>ClassPass</h3> 
                            <Link/>
                     <header/>
                     <Component{ …pageProps }/>
              </>
      )
}

export default App

Visual Studio Code
Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
LoginBar.js 

LoginBar.js 
const LoginBar = () => { 
       return (
              <>
                         LoginBar
              </>
       )
}

export default LoginBar

Visual Studio Code
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm run dev 
ready started server on 0.0.0.0:3000, url: http://localhost:3000

Web Browser 
http://localhost:3000
ClassPass
Inspect 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
Index.js
Document.js 

Document.js
import { Html, Head, Main, NextScript } from ‘next/document’

const Document = () => {
       return (
              <Html lang=“en”>
                      <head>
                            <title > Anias ClassPass </title>
                            <meta name=“viewport” content=“initial-scale=1.”/>
                     <head/>
                     <body>
                            <Main/>
                            <NextScript/>
                     </body>
              </Html>
       )
}

export default Document 

Web Browser             ( Anias ClassPass )
http://localhost:3000

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
Index.js

Index.js
const Home = () => {
       return (
              <div className=“main”>
                     <article className=“main-info-container”>
                            <h1>One app for all things fitness, wellness and beauty</h1>
                            <p>
                                   ClassPass gives you worldwide access to thousand                     
                                   of top-rated gyms, fitness studios, salons and spas.   
                            </p>
                            <div className=“button-container”> 
                                   <button 
                                   className=“primary”
                                   // onClick={login}
                                   >
                                          Try for free
                                   </button>
                                   <button 
                                   className=“secondary”
                                   // onClick={login}
                                   >
                                          Tell me more about classPass
                                   </button>
                            </div>

                            <link href=“/search”>Browser classes and appointments</link>
                            <p className=“disclaimer”> 
                                   Offer is available to new trailers only. Spa and salon
                                   appointments are available after trial.
                            </p>
                     </article>
              </div>
       )
}

export default Home 


Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’

const Search () => {
        return {
              <div>
                     <h1>Search<h1/>
              </div>
       }
}

export default Search

Visual Studio Code 
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i @wix/api-client @wix/bookings js.cookie

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	
package.json

package.json
       “dependencies”: {
       “@wix/api-client”: “^1.1.75”,
       “@wix/bookings”: “^1.0.168”,
…
} 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 
Middleware.js

Middleware.js
import { createClient, OAuthStrategy } from “@wix/api-client”
import { NextResponse } from “next/server”

export async function middleware(request) {
       if (!request.cookies.get(‘session’)) {
          const response = NextResponse.next()
          const myWixClient = createClient({
                 auth: OAuthStrategy({clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID})
           })     
           response.cookies.set(
                 ‘session’, 
                 JSON.stringify(await myWixClient.auth.generateVisitotTokens())
           return response
       }
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import Cookies from “js-cookie”

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})

         const fetchServices = async () => {
                const serviceList = await myWixClient.services.queryService().fin()
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [])

         console.log(serviceList)

         return (
              <div>
                     <h1>Search<h1/>
              </div>
       )
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
Card.js

Card.js
import { media } from “@wix/api-client”

const Card = ({service}) => {
       const image = media.getImageUrl(service.media.coverMedia.image) 

       return (
              <article className=“card”>
                     <div className=“info-container”>
                            <div className=“img-container”>
                                   <img
                                          src={image.url}
                                          alt={service.name}
                                   />
                            </div>
                            <div className=“text-container”>
                                   <h3>{service.name}</h3>
                                   <p>{service.tagline}</p>
                            </div>
                     </div>
                     <div className=“description-container”>
                            <p>{service.description}</p>
                     </div
              </article>
       )
}

export default Card

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import Cookies from “js-cookie”
import Card from “../Components/Card”

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})

         const fetchServices = async () => {
                const serviceList = await myWixClient.services.queryService().fin()
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [])

         console.log(serviceList)

         return (
              <div className=“search-container”>
                     <div className=“results-container”>
                            <h2>Choose Class:<h2/>
                            <ul>
                                   {serviceList.map((service) => 
                                           <li>
                                                 <Link className=“card-link” href=“/”>
                                                        <Card service={service}/>
                                                 </Link>
                                          </li> 
                                   )}      
                            <ul/>
                     </div>
                     <Map/>
              </div>
       )
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

Web Browser
localhost:3000/search

The Platform …
 …

Trance Yôga … 
…

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
SearchBar.js

SearchBar.js
import { useContext } from ‘react’
import {searchContext} from “../pages/_app”

const SearchBar = () => { 
       const [searchTerm, setSearchTerm] useContext(searchContext)        

       return (
              <div className=“item-container”>
                     <div className=“search-bar-container”>
                            <input
                                   className=“search-input”
                                   placeholder=“Yôga, pilates, massage…”
                                   onChange={e => set.SearchTerm(e.target.value)}
                                   value={searchTerm}
                            />
                     </div>
              </div>
       )
}

export default SearchBar

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
_app.js 

_app.js 
import Link from ‘next/link’
import ‘../styles/globals.css’
import { createContext, useState} from ‘react’
import SearchBar from “../Componentes/SearchBar”

export cosnt searchContext = createContext(null)

const App ({Components, pageProps}) => {
       const [searchTerm, setSearchTerm] = useState(null)

       console.log(‘searchTerm’, searchTerm)

       return (
              <>
                     <searchContex.Provider value{[searchTerm, setSearchTerm]}>
                     <header> 
                            <Link href=“/”>
                                   <h3>ClassPass</h3> 
                            <Link/>
                            <SearchBar/>
                     <header/>
                     <Component{ …pageProps }/>
                            </searchContext.Provider>
              </>
      )
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import Cookies from “js-cookie”
import Card from “../Components/Card”

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})

         const fetchServices = async () => {
                const serviceList = await myWixClient.services.queryService().fin()
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [])

         console.log(serviceList)

         return (
              <div className=“search-container”>
                     <div className=“results-container”>
                            <h2>Choose Class:<h2/>
                            <ul>
                                   {serviceList.map((service) => 
                                           <li key={service._id}>
                                                 <Link className=“card-link” href={‘/services/${encodeURIComponents(service.mainSlug.name)}’}>
                                                        <Card service={service}/>
                                                 </Link>
                                          </li> 
                                   )}      
                            <ul/>
                     </div>
                     <Map/>
              </div>
       )
}

Web Browser 
localhost:3000

The Platform …
… 

Trance Yôga …
…

Web Browser 
localhost:3000/services/the-platform

localhost:3000/services/trance-yôga

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
SearchIcon.js

SearchIcon.js
const SearchIcon = () => {
       return (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
              </svg>
       )
}

export default SearchIcon

https://icons.getbootstrap.com/icons/search/ 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
SearchBar.js

SearchBar.js
import { useContext } from ‘react’
import {searchContext} from “../pages/_app”
import SearchIcon from “./SearchIcon”

const SearchBar = () => { 
       const [searchTerm, setSearchTerm] useContext(searchContext)        

       return (
              <div className=“item-container”>
                     <div className=“search-bar-container”>
                     <SearchIcon/>
                            <input
                                   className=“search-input”
                                   placeholder=“Yôga, pilates, massage…”
                                   onChange={e => set.SearchTerm(e.target.value)}
                                   value={searchTerm}
                            />
                     </div>
              </div>
       )
}


Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
}

.search-bar-container {
       position: relative; 
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
_app.js 

_app.js 
import Link from ‘next/link’
import ‘../styles/globals.css’
import { createContext, useState} from ‘react’
import SearchBar from “../Componentes/SearchBar”
import LoginBar from “../Components/LoginBar”

export const searchContext = createContext(null)

const App ({Components, pageProps}) => {
       const [searchTerm, setSearchTerm] = useState(null)

       console.log(‘searchTerm’, searchTerm)

       return (
              <>
                     <searchContex.Provider value{[searchTerm, setSearchTerm]}>
                     <header> 
                            <Link href=“/”>
                                   <h3>ClassPass</h3> 
                            <Link/>
                            <SearchBar/>
                            <LoginBar/>
                     <header/>
                     <Component{ …pageProps }/>
                            </searchContext.Provider>
              </>
      )
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
       width: 100%;
       padding: 10px 30px;
       board-radius: 20px;
       outline: none;
       border: solid 1px rgb(219, 219, 219);
       box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.search-bar-container {
       position: relative; 
       width: 400px;
       height: 40px;
       margin-right: 400px;
}

.search-bar-container svg {
       position: absolute;
       z-index: 1;
       top 10px;
       left: 10px;
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import Cookies from “js-cookie”
import Card from “../Components/Card”
import { searchContext} from “@/pages/_app”

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})
         const [ serachTerm, setSearchTerm ] = useContext(searchContext)
 
         const fetchServices = async () => {
                let serviceList
                if(searchTerm) {     
                serviceList = await myWixClient.services.queryService().startsWith(‘name’, decodeURIComponent(searchTerm)).find() 
         } else {
                serviceList = await myWixClient.services.queryService().find()
         }
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [searchTerm])

         console.log(serviceList)

         return (
              <div className=“search-container”>
                     <div className=“results-container”>
                            <h2>Choose Class:<h2/>
                            <ul>
                                   {serviceList.map((service) => 
                                           <li key={service._id}>
                                                 <Link className=“card-link” href={‘/services/${encodeURIComponents(service.mainSlug.name)}’}>
                                                        <Card service={service}/>
                                                 </Link>
                                          </li> 
                                   )}      
                            <ul/>
                     </div>
                     <Map/>
              </div>
       )
}

Web Browser 
localhost:3000/search 

( … ) 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
services 
[slug].js

[slug].js
import { useRouter } from ‘next/router’
import { useState, useEffect } from ‘react’ 
import { createClient, OAuthStrategy } from “@wix/api-client”
import { availabilityCalendar, services } from “@wix/redirects”
import Cookies from ‘js-cookie’

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 


const ServicePage = () => {
       
       const router = useRouter()
       const fetchService = asyn = () => {
              if (router.query.slug) {
                     await 
              }
       }
}

export default ServicePage

Visual Studio Code
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i @wix/redirects

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import Cookies from “js-cookie”
import Card from “../Components/Card”
import { searchContext} from “@/pages/_app”

const myWixClient = createClient({
       modules: { services },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})
         const [ serachTerm, setSearchTerm ] = useContext(searchContext)
 
         const fetchServices = async () => {
                let serviceList
                if(searchTerm) {     
                serviceList = await myWixClient.services.queryService().startsWith(‘name’, decodeURIComponent(searchTerm)).find() 
         } else {
                serviceList = await myWixClient.services.queryService().find()
         }
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [searchTerm])

         console.log(serviceList)

         return (
              <div className=“search-container”>
                     <div className=“results-container”>
                            <h2>Choose Class:<h2/>
                            <ul>
                                   {serviceList.map((service) => 
                                           <li key={service._id}>
                                                 <Link className=“card-link” href={‘/services/${encodeURIComponents(service.mainSlug.name)}’}>
                                                        <Card service={service}/>
                                                 </Link>
                                          </li> 
                                   )}      
                            <ul/>
                     </div>
                     <Map/>
              </div>
       )
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
services 
[slug].js

[slug].js
import { useRouter } from ‘next/router’
import { useState, useEffect } from ‘react’ 
import { createClient, OAuthStrategy } from “@wix/api-client”
import { availabilityCalendar, services } from “@wix/bookings”
import { redirects } from “@wix/redirects”
import Cookies from ‘js-cookie’

const myWixClient = createClient({
       modules: { services, availabilityCalendar, redirects },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 


const ServicePage = () => {
       const [ service, setService ] = useState(null)
       const [availabilityEntries, setAvailabilityEntries] = useState([])
       const router = useRouter()
       
       const fetchService = async = () => {
              if (router.query.slug) {
                     const serviceItem = await myWixClient.services.queryServices().eq(‘mainSlug.name’, decodeURIComponent(router.query.slug)).find()
                     setService(serviceItem)
              }
       
       }

const fetchAvailability = async () => {
       const today = new Date()
       const oneWeek = new Date(today)
       oneWeek set.Date (oneWeek.getDate() + 7 )
       const availability = await myWxiClient.availabilityCalendar.queryAvailability({
              filter { serviceId: [service._id], 
              startDate: today.toISOString(),
              endDate: oneWeek.toISOString()
       } 
}, {timezone: ‘UTC’})
setAvailabilityEntries(availability, availabilityEntries)

       useEffect(() => {
              fetchService()
       } [router.query.slug])
    
       useEffect(() => {
              if (service) fetchAvailability()
       }, [service])

       console.log(‘availabilityEntries’, availabilityEntries)
       console.log(‘service’, service)
       return (
              <>
                     {service && 
                            <article className=“service-container”>
                                   <div className=“info-container”>
                                          <MainImage/>
                                          <h2>{service.name}</h2>
                                          <p>{service.tagLine}</p>
                                          <p>{service.description}</p>
                                          <hr/>
                                          <h3>Schedule</3>
                                          {availabilityEntries.map((availabilityEntry) => 
                                                 <ScheduleCard 
                                                        key={Object.keys(availabilityEntry)}
                                                        availabilityEntry{availabilityEntry}
                                                 />      
                                          )}
                                   </div>
                                   <div className=“address-container”>
                                          <MiniMap/>
                                          <p> >>{service.locations[0].business.address.formatted}</p>
                                          <p>{service.locations[0].business.address.city}</p>
                                          <p>{service.locations[0].business.address.country}</p>
                                   </div>
                            </article>
                     }
              </>
       )
}

export default ServicePage

Web Browser
localhost:3000/services/the-platform 
Inpect 
Service
oneWeek…
description…
locations…
0:...
business…
address…
city…
country…
formatted…
availabilityEntries…


Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
ScheduleCard.js

ScheduleCard.js
const ScheduleCard = ({availabilityEntry}) => {
      
       return (
              <button>
                     <p></p>
              </button>
       )
}

export default ScheduleCard

Visual Studio Code 
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i moment 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
ScheduleCard.js

ScheduleCard.js
import moment from “moment”
import { createClient, OAuthStrategy } from “@wix/api-client”
import { availabilityCalendar, services } from “@wix/bookings”
import { redirects } from “@wix/redirects”
import Cookies from ‘js-cookie’

const myWixClient = createClient({
       modules: { services, availabilityCalendar, redirects },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const ScheduleCard = ({availabilityEntry}) => {
       const startDate = moment(avaiabilityEntry.slots.startDate, “YYYY-MM-DD”, “HH:mm:ss”)
       const startDay = startDate.formt(‘ddd MM yyyy’)      

       return (
              <button>
                     <p>{startDay}</p>
              </button>
       )
}

export default ScheduleCard

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
services 
[slug].js

[slug].js
import { useRouter } from ‘next/router’
import { useState, useEffect } from ‘react’ 
import { createClient, OAuthStrategy } from “@wix/api-client”
import { availabilityCalendar, services } from “@wix/bookings”
import { redirects } from “@wix/redirects”
import Cookies from ‘js-cookie’
import ScheduleCard from “@/Components/ScheduleCard”

const myWixClient = createClient({
       modules: { services, availabilityCalendar, redirects },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 


const ServicePage = () => {
       const [ service, setService ] = useState(null)
       const [availabilityEntries, setAvailabilityEntries] = useState([])
       const router = useRouter()
       
       const fetchService = async = () => {
              if (router.query.slug) {
                     const serviceItem = await myWixClient.services.queryServices().eq(‘mainSlug.name’, decodeURIComponent(router.query.slug)).find()
                     setService(serviceItem)
              }
       
       }

const fetchAvailability = async () => {
       const today = new Date()
       const oneWeek = new Date(today)
       oneWeek set.Date (oneWeek.getDate() + 7 )
       const availability = await myWxiClient.availabilityCalendar.queryAvailability({
              filter { serviceId: [service._id], 
              startDate: today.toISOString(),
              endDate: oneWeek.toISOString()
       } 
}, {timezone: ‘UTC’})
setAvailabilityEntries(availability, availabilityEntries)

       useEffect(() => {
              fetchService()
       } [router.query.slug])
    
       useEffect(() => {
              if (service) fetchAvailability()
       }, [service])

       console.log(‘availabilityEntries’, availabilityEntries)
       console.log(‘service’, service)
       return (
              <>
                     {service && 
                            <article className=“service-container”>
                                   <div className=“info-container”>
                                          <MainImage/>
                                          <h2>{service.name}</h2>
                                          <p>{service.tagLine}</p>
                                          <p>{service.description}</p>
                                          <hr/>
                                          <h3>Schedule</3>
                                          {availabilityEntries.map((availabilityEntry) => 
                                                 <ScheduleCard 
                                                        key={Object.keys(availabilityEntry)}
                                                        availabilityEntry{availabilityEntry}
                                                 />      
                                          )}
                                   </div>
                                   <div className=“address-container”>
                                          <MiniMap/>
                                          <p> >>{service.locations[0].business.address.formatted}</p>
                                          <p>{service.locations[0].business.address.city}</p>
                                          <p>{service.locations[0].business.address.country}</p>
                                   </div>
                            </article>
                     }
              </>
       )
}

export default ServicePage

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
ScheduleCard.js

ScheduleCard.js
import moment from “moment”
import { createClient, OAuthStrategy } from “@wix/api-client”
import { availabilityCalendar, services } from “@wix/bookings”
import { redirects } from “@wix/redirects”
import Cookies from ‘js-cookie’

const myWixClient = createClient({
       modules: { services, availabilityCalendar, redirects },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

const ScheduleCard = ({availabilityEntry}) => {
       const startDate = moment(avaiabilityEntry.slots.startDate, “YYYY-MM-DD”, “HH:mm:ss”)
       const startDay = startDate.formt(‘ddd MM yyyy’)      
       const startTime = startDate.format(‘HH:mm’)
       const endTime = moment(avaiabilityEntry.slots.endDate, “YYYY-MM-DD”, “HH:mm:ss”).format(‘HH:mm’)

       return (
              <button className=“schedule-card-button”>
                     <p>{startDay}</p>
                     <p>{startTime}</p>
                     <p>{endTime}</p>
              </button>
       )
}

export default ScheduleCard

Web Browser 
localhost:3000/services/the-platform

ClassPass      Yôga, pilates, massage                                                                          loginBar

The Platform Studios DIFC is located in Index Mall Level R1, DIFC.

The Platform Studios in Index Towers, DIFC, is the perfect place for a workout. Come join us and have fun as well as meet like-minded people while doing a fun workout for you entire body.

Schedule 
Fri 06 2023   Sat 06 2023   Mon 06 2023   Thu 06 2023   Thu 06 2023
11:00             10:00             11:00                10:00              10:00
12:00             11:00             12:00                11:00              11:00

The Platform Studios - Boutique Fitness Hub - Dubai - United Arab Emirates
…
AE

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
       width: 100%;
       padding: 10px 30px;
       board-radius: 20px;
       outline: none;
       border: solid 1px rgb(219, 219, 219);
       box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.search-bar-container {
       position: relative; 
       width: 400px;
       height: 40px;
       margin-right: 400px;
}

.search-bar-container svg {
       position: absolute;
       z-index: 1;
       top 10px;
       left: 10px;
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*service*/
.service-container {
       main-top: 80px;
       display: flex; 
       justify-content:center;
}

.service-container .info-container {
       width: 700px;
       padding: 5px;
}

.service-container .address-container {
       width: 300px;
       padding: 5px;
}

.service-container .schedule-card-button {
       display: flex;
       justify-content: space-between;
       width: 100%;
       border: none;
       cursor: pointer;
       background-color: rgb(255, 255, 255)
       border-bottom: solid 1px rgb(236, 236, 236);
}

Web Browser 
localhost:3000/services/the-platform

ClassPass      Yôga, pilates, massage                                                                          loginBar

The Platform Studios DIFC is located in Index Mall Level R1, DIFC.     The Platform Studios  
                                                                                                                 - Boutique Fitness                                               
                                                                                                                 Hub - Dubai - United 
                                                                                                                 Arab Emirates
                                                                                                                 …
                                                                                                                 AE  

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Fri 06 2023                                           11:00                              12:00        
Sat 06 2023                                          10:00                              11:00
Sat 06 2023                                          11:00                              12:00
Mon 06 2023                                        11:00                               12:00
Thu 06 2023                                         10:00                               11:00
Thu 06 2023                                         10:00                               11:00

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
ScheduleCard.js

ScheduleCard.js
import moment from “moment”
// import { createClient, OAuthStrategy } from “@wix/api-client”
// import { availabilityCalendar, services } from “@wix/bookings”
// import { redirects } from “@wix/redirects”
// import Cookies from ‘js-cookie’
import { myWixClient } from “../helpers”
// 
// const myWixClient = createClient({
//       modules: { services, availabilityCalendar, redirects },
//       auth: OAuthStrategy ({
//              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//              tokens: JSON.parse(Cookie.get(“session”) || null),
//       })
// }) 

const ScheduleCard = ({availabilityEntry}) => {
       const startDate = moment(avaiabilityEntry.slots.startDate, “YYYY-MM-DD”, “HH:mm:ss”)
       const startDay = startDate.formt(‘ddd MM yyyy’)      
       const startTime = startDate.format(‘HH:mm’)
       const endTime = moment(avaiabilityEntry.slots.endDate, “YYYY-MM-DD”, “HH:mm:ss”).format(‘HH:mm’)

       const createRedirect = async (slotAvailability) => {
              const redirect = await myWixClient.redirects.createRedirectSession ({
                     bookingChekout: {slotAvailability, timezone: ‘UTC’},
                     callbacks: { postFlowUrl: window.location.href }
              })
              window.location = redirect.redirectSession.fullUrl
       }
       return (
              <button className=“schedule-card-button” OnClick={() => createRedirect(availabilityEntry)}>
                     <p>{startDay}</p>
                     <p>{startTime}</p>
                     <p>{endTime}</p>
              </button>
       )
}

export default ScheduleCard

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
Login-callback.js

Login-callback.js
import { createClient, OAuthStrategy } from “@wix/api-client”
import { useState, useEffect } from “react”
import Cookies from “js-cookie”
import { redirects } from “@wix/redirects”
import { myWixClient } from “../helpers”
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

“

Settings 
General
Headless settings ( Use OAuth apps to authenticate with Wix and make API calls from any external platform. )
OAuth apps
Create OAuth app
App Name
classpass-auth
Client info
Client ID ( Save the client ID below. You will need it to connect and authenticate the client with your Wix project. )
e698e30b-eb53-4825-8efd-edb0b5aec749
URLs
Allowed authorization redirect URLs ( * )
Add Redirect URL
http://localhost:3000/login-callback
https://ania3941.wixsite.com/login-callback 


“
Web Browser 
localhost:3000/services/the-platform

ClassPass      Yôga, pilates, massage                                                                          loginBar

The Platform Studios DIFC is located in Index Mall Level R1, DIFC.     The Platform Studios  
                                                                                                                 - Boutique Fitness                                               
                                                                                                                 Hub - Dubai - United 
                                                                                                                 Arab Emirates
                                                                                                                 …
                                                                                                                 AE  

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Fri 06 2023                                           11:00                              12:00        
Sat 06 2023                                          10:00                              11:00
Sat 06 2023                                          11:00                              12:00
Mon 06 2023                                        11:00                               12:00
Thu 06 2023                                         10:00                               11:00
Thu 06 2023                                         10:00                               11:00

“Click on 
Schedule 
Fri 06 2023                                           11:00                              12:00    

Web Browser
”
ania3941.wixsite.com/my/site/__bookings/booking-form?origin=http%3A%2F%2Flocalhost%3A3000%2Fservices%2Ftrance-yôga…
“

< Back

Fill out your details                                                                             Service details 

Tell us a bit about yourself                                                                  Trance Yôga
Not Ania? Switcht Account                                                                  13 June 2023 at 1:00 pm
already have an account?Log in for faster booking.                           Gerald
                                                                                                            1hr
Name*                                       Email*                           
                                       0/100                                                             Payment Details
Phone Number                                                                                    Total                 AED 150
                                                                                                                     Pay Now
Add Your Message

                                          Log In
                          New to this site? Sign Up
                                  Login with Google
                               Log in with Facebook 
                                             or
                                   Log in with Email

ClassPass      Yôga, pilates, massage                                                                          loginBar

Trance Yôga

A customized fusion of different forms of yoga that will invigorate       The Onix Tower 1  
the seven major chakras                                                                       - Dubai - United 
                                                                                                                 Arab Emirates
Explore the type of classes and different solutions we offer within.         …                                                                                                 
You are about to start the journey to nurture a better you filled with        AE  
strength, positivity and vibrancy.

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Tue 06 2023                                           13:00                              14:00        
Thu 06 2023                                          10:00                              11:00
Fri  06 2023                                          17:00                              18:00
Mon 06 2023                                        17:00                               18:00

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
LoginBar.js 

LoginBar.js 
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
       const [ user, setUser ] = useState(‘visitor’)
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

Visual Studio Code 
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i @wix/members

ClassPass      Yôga, pilates, massage                                                                          loginBar
                                                                                                                                 Hello visitor
Trance Yôga   
                                                                                                                                  Try for free
A customized fusion of different forms of yoga that will invigorate       The Onix Tower 1  
the seven major chakras                                                                       - Dubai - United 
                                                                                                                 Arab Emirates
Explore the type of classes and different solutions we offer within.         …                                                                                                 
You are about to start the journey to nurture a better you filled with        AE  
strength, positivity and vibrancy.

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Tue 06 2023                                           13:00                              14:00        
Thu 06 2023                                          10:00                              11:00
Fri  06 2023                                          17:00                              18:00
Mon 06 2023                                        17:00                               18:00

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
       width: 100%;
       padding: 10px 30px;
       board-radius: 20px;
       outline: none;
       border: solid 1px rgb(219, 219, 219);
       box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.search-bar-container {
       position: relative; 
       width: 400px;
       height: 40px;
       margin-right: 400px;
}

.search-bar-container svg {
       position: absolute;
       z-index: 1;
       top 10px;
       left: 10px;
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*service*/
.service-container {
       main-top: 80px;
       display: flex; 
       justify-content:center;
}

.service-container .info-container {
       width: 700px;
       padding: 5px;
}

.service-container .address-container {
       width: 300px;
       padding: 5px;
}

.service-container .schedule-card-button {
       display: flex;
       justify-content: space-between;
       width: 100%;
       border: none;
       cursor: pointer;
       background-color: rgb(255, 255, 255)
       border-bottom: solid 1px rgb(236, 236, 236);
}

/*nav*/
nav {
       display: flex;
}
nav p {
       font-size: 14px;
}

nav button.login {
       border: none;
       padding: 10px;
       background-color: transparent;
}

nav button.login:hover {
       background-color: rgb(241, 241, 241)
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

ClassPass      Yôga, pilates, massage   Hello visitor   log in   Try for free                                                                      
                                                                                                      
Trance Yôga                                                                                   
                                                                                                                                  
A customized fusion of different forms of yoga that will invigorate       The Onix Tower 1  
the seven major chakras                                                                       - Dubai - United 
                                                                                                                 Arab Emirates
Explore the type of classes and different solutions we offer within.         …                                                                                                 
You are about to start the journey to nurture a better you filled with        AE  
strength, positivity and vibrancy.

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Tue 06 2023                                           13:00                              14:00        
Thu 06 2023                                          10:00                              11:00
Fri  06 2023                                          17:00                              18:00
Mon 06 2023                                        17:00                               18:00

                                        Log In
                          New to this site? Sign Up
                                  Login with Google
                               Log in with Facebook 
                                             or
                                   Log in with Email

Web Browser                                                  Hello Ania Kubow   Log out    Try for free
localhost:3000/search

The Platform …
… 

Trance Yôga …
…

Web Browser 
localhost:3000/services/the-platform

ClassPass      Yôga, pilates, massage                                                                          loginBar

The Platform Studios DIFC is located in Index Mall Level R1, DIFC.     The Platform Studios  
                                                                                                                 - Boutique Fitness                                               
                                                                                                                 Hub - Dubai - United 
                                                                                                                 Arab Emirates
                                                                                                                 …
                                                                                                                 AE  

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Fri 06 2023                                           11:00                              12:00        
Sat 06 2023                                          10:00                              11:00
Sat 06 2023                                          11:00                              12:00
Mon 06 2023                                        11:00                               12:00
Thu 06 2023                                         10:00                               11:00
Thu 06 2023                                         10:00                               11:00

https://www.mapbox.com/
Access Tokens
Create a token
Token name
name ( Tutorial )
Create token

.env
NEXT_PUBLIC_WIX_CLIENT_ID=e698e30b-eb53-4825-8efd-edb0b5aec749
NEXT_PUBLIC_MAPBOX=pk.eyJ…

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
MiniMap.js

MiniMap.js
import mapboxgl from “mapbox-gl”
import ‘mapbox-gl/dist/mapbox-gl.css’
import { useEffect, useRef } from ‘react’

const MinMap = ({lgn, lat}) => {
     
       mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX       

       const mapContainer = useRef(null)
       const map = useRef(null)

       useEffect (() => {
              if (map.current) return
              if (lng) {
                     map.current = new mapboxgl.Map({
                            container: mapContainer.current,
                            style: ‘mapbox://styles/mapbox/streets-v12’,
                            center: [lng, lat],
                            zoom: 15
                     })
              }

              const maker = new mapboxgl.Maker({
                     color: “rgb(2, 86,254)”,
              }).set LngLat([lgn, lat]).addTo(map.current)

       }, [lng, lat])

       return (
              <div className=“mini-map-container”>
                     <div ref={mapContainer}></div>
             </div>
       )
}

export default MiniMap

Visual Studio Code 
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i mapbox-gl 

Wix UI
Booking Services
The Platform 
Inspect 
Console
Services
M’
BookingPolicy
Location
Business 
Address
Location
Latitude: 25.0820321
Longitude: 55.14139609999999

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255)
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

button.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

button.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
       width: 100%;
       padding: 10px 30px;
       board-radius: 20px;
       outline: none;
       border: solid 1px rgb(219, 219, 219);
       box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.search-bar-container {
       position: relative; 
       width: 400px;
       height: 40px;
       margin-right: 400px;
}

.search-bar-container svg {
       position: absolute;
       z-index: 1;
       top 10px;
       left: 10px;
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*service*/
.service-container {
       main-top: 80px;
       display: flex; 
       justify-content:center;
}

.service-container .info-container {
       width: 700px;
       padding: 5px;
}

.service-container .address-container {
       width: 300px;
       padding: 5px;
}

.service-container .schedule-card-button {
       display: flex;
       justify-content: space-between;
       width: 100%;
       border: none;
       cursor: pointer;
       background-color: rgb(255, 255, 255)
       border-bottom: solid 1px rgb(236, 236, 236);
}

/*nav*/
nav {
       display: flex;
}
nav p {
       font-size: 14px;
}

nav button.login {
       border: none;
       padding: 10px;
       background-color: transparent;
}

nav button.login:hover {
       background-color: rgb(241, 241, 241)
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*Mini Map*/
.mini-map-container {
       height: 300px; 
       width: 300px; 
       border-radius: 5px;
       overflow: hidden;
}

.mini-map-container div {
       width: 100%;
       height: 100%;
}

.mapboxgl-compact {
       display: none;
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
services 
[slug].js

[slug].js
import { useRouter } from ‘next/router’
import { useState, useEffect } from ‘react’ 
import { myWixClient } from “../../helpers”
// import { createClient, OAuthStrategy } from “@wix/api-client”
// import { availabilityCalendar, services } from “@wix/bookings”
// import { redirects } from “@wix/redirects”
// import Cookies from ‘js-cookie’
import ScheduleCard from “../../Components/ScheduleCard”
import MiniMap from “../../Components/MiniMap”
import MainImage from “../../Components/MainImage”
//
//const myWixClient = createClient({
//       modules: { services, availabilityCalendar, redirects },
//       auth: OAuthStrategy ({
//              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//              tokens: JSON.parse(Cookie.get(“session”) || null),
//       })
// }) 


const ServicePage = () => {
       const [ service, setService ] = useState(null)
       const [availabilityEntries, setAvailabilityEntries] = useState([])
       const router = useRouter()
       
       const fetchService = async = () => {
              if (router.query.slug) {
                     const serviceItem = await myWixClient.services.queryServices().eq(‘mainSlug.name’, decodeURIComponent(router.query.slug)).find()
                     setService(serviceItem)
              }
       
       }

const fetchAvailability = async () => {
       const today = new Date()
       const oneWeek = new Date(today)
       oneWeek set.Date (oneWeek.getDate() + 7 )
       const availability = await myWxiClient.availabilityCalendar.queryAvailability({
              filter { serviceId: [service._id], 
              startDate: today.toISOString(),
              endDate: oneWeek.toISOString()
       } 
}, {timezone: ‘UTC’})
setAvailabilityEntries(availability, availabilityEntries)

       useEffect(() => {
              fetchService()
       } [router.query.slug])
    
       useEffect(() => {
              if (service) fetchAvailability()
       }, [service])

       console.log(‘availabilityEntries’, availabilityEntries)
       console.log(‘service’, service)
       return (
              <>
                     {service && 
                            <article className=“service-container”>
                                   <div className=“info-container”>
                                          <MainImage service={service}/>
                                          <h2>{service.name}</h2>
                                          <p>{service.tagLine}</p>
                                          <p>{service.description}</p>
                                          <hr/>
                                          <h3>Schedule</3>
                                          {availabilityEntries.map((availabilityEntry) => 
                                                 <ScheduleCard 
                                                        key={Object.keys(availabilityEntry)}
                                                        availabilityEntry{availabilityEntry}
                                                 />      
                                          )}
                                   </div>
                                   <div className=“address-container”>
                                          <MiniMap 
                                                lng={service.location[0].business.address.location.longitude}/>
                                                lat={service.location[0].business.address.location.latitude}
                                          />                           
                                          <p> >>{service.locations[0].business.address.formatted}</p>
                                          <p>{service.locations[0].business.address.city}</p>
                                          <p>{service.locations[0].business.address.country}</p>
                                   </div>
                            </article>
                     }
              </>
       )
}

export default ServicePage

Web Browser 
localhost:3000/services/the-platform

ClassPass      Yôga, pilates, massage                                                         Hello    log   Try for
                                                                                                                      visitor   in      free

                                                                                                                    Street View Map 

The Platform Studios DIFC is located in Index Mall Level R1, DIFC.     The Platform Studios  
                                                                                                                 - Boutique Fitness                                               
                                                                                                                 Hub - Dubai - United 
                                                                                                                 Arab Emirates
                                                                                                                 …
                                                                                                                 AE  

The Platform Studios in Index Towers, DIFC, is the perfect place for a
 workout. Come join us and have fun as well as meet like-minded 
people while doing a fun workout for your entire body.

Schedule 
Fri 06 2023                                           11:00                              12:00        
Sat 06 2023                                          10:00                              11:00
Sat 06 2023                                          11:00                              12:00
Mon 06 2023                                        11:00                               12:00
Thu 06 2023                                         10:00                               11:00
Thu 06 2023                                         10:00                               11:00

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components 
MainImage.js

MainImage.js
import { media } from “@wix/api-client”

const MainImage = ({ service }) => {

       const image = media.getImageUrl(service.media.mainMedia.image)
       return (
              <div className=“main-img-container”>
                     <img src={image.url} alt=“main image”/>
              </div>
       )      
}

export default MainImage

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
MiniMap.js

MiniMap.js
import mapboxgl from “mapbox-gl”
import ‘mapbox-gl/dist/mapbox-gl.css’
import { useEffect, useRef } from ‘react’

const MinMap = ({lgn, lat}) => {
     
       mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX       

       const mapContainer = useRef(null)
       const map = useRef(null)

       useEffect (() => {
              if (map.current) return
              if (lng) {
                     map.current = new mapboxgl.Map({
                            container: mapContainer.current,
                            style: ‘mapbox://styles/mapbox/streets-v12’,
                            center: [lng, lat],
                            zoom: 15
                     })
              }

              const maker = new mapboxgl.Maker({
                     color: “rgb(2, 86,254)”,
              }).set LngLat([lgn, lat]).addTo(map.current)

       }, [lng, lat])

       return (
              <div className=“mini-map-container”>
                     <div ref={mapContainer}></div>
             </div>
       )
}

export default MiniMap

Visual Studio Code 
Terminal 
aniakubow@Anias-MPB nextjs-classpass % npm i mapbox-gl 

Wix UI
Booking Services
The Platform 
Inspect 
Console
Services
M’
BookingPolicy
Location
Business 
Address
Location
Latitude: 25.0820321
Longitude: 55.14139609999999

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Styles
Global.css

Global.css
* {
       font-family: Verdana, ‘Trebuchet MS’, sans-serif;
} 

html
body {
       margin: 0;
       padding: 0;
       overflow-x: hidden;
       max-width: 100vw;
       overflow-y: hidden;
}

li {
       list-style-type: none;
}

header {
       display: flex;
       border-bottom: 1px solid rgb(214, 214, 214);
       justify-content: space-between;
       position: fixed;
       top: 0;
       back-groundcolor: rgb(255, 255, 255);
       width: 100vw;
       box-shadow: 1 12px 24px rgba(0, 0, 0, 0.06);
       z-index: 3; 
}

.primary {
       back-groundcolor: rgb(2, 86, 254);
       border: none;
       color: rgb(255, 255, 255);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
       margin: 5px;
       text-decoration: none;
}

.secondary {
       border: 1px solid rgb(2, 86, 254);
       background-color: rgb (255, 255, 255)
       color: rgb(2, 86, 254);
       padding: 10px 20px;
       font-size: 15px;
       border-radius: 30px;
       margin: 5px;
       text-decoration: none;

}

/*main page*/
.main {
       height: 100vh;
       display: flex;
       justify-content: center;
       align-items: center;
       background-image: url (“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”) 
}

https://classpass.com/
Image Inspect 
“https://images-ctfassets.netew96z4wsz93/4Pu2DUOO77f4GZeYWtk91/986690biaf56ca18095d08e8e13413e8/homepage-hero_desktop_nosticker-min.jpg”

.main-info-container {
       background-color: rgb(255, 255, 255);
       border-radius: 30px;
       padding: 60px;
       width: 450px;
       text-align: center;
}

.main-info-container h1 {
       font-size: 40px;
       margin: 0;
       padding: 0;
}

.main-info-container .disclaimer {
       font-size: 12px;
       color: rgb(126, 126, 126);
}

.main-info-container .button-container {
       display: flex;
       flex-direction: column; 
       margin-bottom: 20px;
}

.main-info-container .button-container button {
       margin: 5px;
}

/*card*/
.card {
       display: flex;
       border-bottom: solid 1px rbg(214, 214, 214);
       padding: 10px;
}

.card p {
       font-size: 13px;
}

.card h3, .card p {
       margin: 0;
}

.card image-container {
       height: 100px;
       width: 150px;
       border-radius: 5px; 
       overflow: hidden;
       margin: 10px;
}

.card image-container img {
       height: 130%;
}

.card .info-container {
       display: flex;
       width: 400px;
       border-right: solid 1px rgb(214, 214, 214);
}

.card .text-container, .card .description-container {
       width: 200px;
       margin: 10px;
}

.text-container {
       display: flex;
       flex-direction: column;
}

.card-link {
       text-decoration: none;
       color: rgb(24, 24, 24)
}

/*search bar*/
.search-input {
       position: absolute;
       width: 100%;
       padding: 10px 30px;
       board-radius: 20px;
       outline: none;
       border: solid 1px rgb(219, 219, 219);
       box-shadow: 0 12px 24px rgba(0, 0, 0, 0.06);
}

.search-bar-container {
       position: relative; 
       width: 400px;
       height: 40px;
       margin-right: 400px;
}

.search-bar-container svg {
       position: absolute;
       z-index: 1;
       top 10px;
       left: 10px;
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*service*/
.service-container {
       main-top: 80px;
       display: flex; 
       justify-content:center;
       height: 100vw;
       overflow: scroll !important;
}

.service-container .info-container {
       width: 700px;
       padding: 5px;
}

.service-container .address-container {
       width: 300px;
       padding: 5px;
}

.service-container .schedule-card-button {
       display: flex;
       justify-content: space-between;
       width: 100%;
       border: none;
       cursor: pointer;
       background-color: rgb(255, 255, 255)
       border-bottom: solid 1px rgb(236, 236, 236);
}

.service-container .main-img-container {
       width: 700px;
       height: 500px;
       overflow: hidden;
       border-radius: 5px;
}

.service-container .main-img-container img {
       height: 150%;
}

/*nav*/
nav {
       display: flex;
}
nav p {
       font-size: 14px;
}

nav button.login {
       border: none;
       padding: 10px;
       background-color: transparent;
}

nav button.login:hover {
       background-color: rgb(241, 241, 241)
}

.item-container {
       display: flex;
       align-items: center;
       margin: 0 10px;
}

/*Mini Map*/
.mini-map-container {
       height: 300px; 
       width: 300px; 
       border-radius: 5px;
       overflow: hidden;
}

.mini-map-container div {
       width: 100%;
       height: 100%;
}

.mapboxgl-compact {
       display: none;
}

/*Map*/
.map-container {
       height: 100vh;
       width: 40vw;
}

.map-container div {
       width: 100%;
       height: 100%;
}

.search-container {
       display: flex;
}

.results-container {
       width: 60vw;
       height: 100vw;
       overflow: scroll !important;
}

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Components
Map.js

Map.js
import mapboxgl from “mapbox-gl”
import ‘mapbox-gl/dist/mapbox-gl.css’
import { useEffect, useRef } from ‘react’

const Map = ({ coords }) => {
       mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX       
       console.log(coords)
       const mapContainer = useRef(null)
       const map = useRef(null)

       useEffect(() => {
              if (map.current) return
                     if(coords[0]? .longitude && coords[0]? .latitude) {
                            map.current = new mapboxgl.Map({
                                   container: mapContainer.current,
                                   style:‘mapbox://styles/mapbox/streets-v12’,
                                   center: [coords[0]?.longitude, coords[0]?.latitude],
                                   zoom: 13
                     })
                     coords.forEach(coord => {
                            const marker = new mapboxgl.Marker({
                                   color: “rgb(2, 86, 254)”
                     }).setLngLat([coord.longitude, coord.latitude]).addTo(map.current)
              }
       }, [coords[0]?.longitude, coords[0]?.latitude])

       return (
              <div className=“map-container”>
                    <div ref={mapContainer}></div>
             </div>
       )
}

export default Map

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages 	 	 
Search.js

Search.js
import { useEffect, useState, useContext } from ‘react’
import Link from ‘next/link’
// import { createClient, OAuthStrategy } from “@wix/api-client”
// import { services } from “@wix/bookings”
// import Cookies from “js-cookie”
import Card from “../Components/Card”
import { searchContext} from “../pages/_app”
import Map from “../Components/Map”
import { myWixClient } from “../helpers”
//   
// export const myWixClient = createClient({
//       modules: { services, availabilityCalendar, redirects, members },
//       auth: OAuthStrategy ({
//              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
//              tokens: JSON.parse(Cookie.get(“session”) || null),
//       })
// }) 

const Search () => {
         const [ serviceList, setServiceList ] = useState({})
         const [ serachTerm, setSearchTerm ] = useContext(searchContext)
 
         const fetchServices = async () => {
                let serviceList
                if(searchTerm) {     
                serviceList = await myWixClient.services.queryService().startsWith(‘name’, decodeURIComponent(searchTerm)).find() 
         } else {
                serviceList = await myWixClient.services.queryService().find()
         }
                setServiceList(serviceList.items)
         }
         
         useEffect(() => {
                fetchServices()
         }, [searchTerm])

         console.log(serviceList)

         let coords = serviceList.map((serviceItem) => serviceItem.location[0].business.address.location)

         return (
              <div className=“search-container”>
                     <div className=“results-container”>
                            <h2>Choose Class:<h2/>
                            <ul>
                                   {serviceList.map((service) => 
                                           <li key={service._id}>
                                                 <Link className=“card-link” href={‘/services/${encodeURIComponents(service.mainSlug.name)}’}>
                                                        <Card service={service}/>
                                                 </Link>
                                          </li> 
                                   )}      
                            <ul/>
                     </div>
                     <Map coords={coords}/>
              </div>
       )
}

Web Browser                                                  Hello Ania Kubow   Log out    Try for free
localhost:3000/search

The Platform …
… 

Trance Yôga …
…

Street Map 

Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Pages
Index.js

Index.js
const Home = () => {
       return (
              <div className=“main”>
                     <article className=“main-info-container”>
                            <h1>One app for all things fitness, wellness and beauty</h1>
                            <p>
                                   ClassPass gives you worldwide access to thousand                     
                                   of top-rated gyms, fitness studios, salons and spas.   
                            </p>
                            <div className=“button-container”> 
                                   <Link href=“/search” className=“primary>
                                          Try for free
                                   </Link>
                                   <Link href=“/search” className=“secondary>
                                                       Tell me more about classPass
                                   </link>
                            </div>

                            <link href=“/search”>Browser classes and appointments</link>
                            <p className=“disclaimer”> 
                                   Offer is available to new trailers only. Spa and salon
                                   appointments are available after trial.
                            </p>
                     </article>
              </div>
       )
}

export default Home 

Web Broser
localhost:3000

ClassPass        Yôga, pilates, massage                    Hello Ania Kubow   Log out    Try for free

One app for all 
things fitness, wellness & beauty

classpass give you worldwide access to thousands of 
top-rated gyms, fitness studios, salons & spas.

Try for free
Tell me more about ClassPass

Browser classes & appointments
offer is available to new traders only. Spa and salon appointments are
available after trial.


Visual Studio Code
Explorer
OPEN EDITORS
NEXTJS-CLASSPASS
Public
Helpers.js

Helpers.js
import { createClient, OAuthStrategy } from “@wix/api-client”
import { services } from “@wix/bookings”
import { redirects } from “@wix/redirects”
import { members } from “@wix/members”
import Cookies from “js.cookie”

export const myWixClient = createClient({
       modules: { services, availabilityCalendar, redirects, members },
       auth: OAuthStrategy ({
              clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID,
              tokens: JSON.parse(Cookie.get(“session”) || null),
       })
}) 

