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
