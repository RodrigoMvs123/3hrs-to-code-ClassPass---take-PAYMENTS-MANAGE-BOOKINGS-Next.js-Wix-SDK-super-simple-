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
// const myWixClient = createClient({
//      modules: { services },
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
