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

       return (
              <button>
                     <p>{startDay}</p>
                     <p>{startTime}</p>
                     <p>{endTime}</p>
              </button>
       )
}

export default ScheduleCard
