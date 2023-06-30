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
