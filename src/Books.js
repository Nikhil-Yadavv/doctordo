import React from 'react';
import web2 from '../src/Image/book.png';

const Books = ()=>{
     return(
        <>
            <section className='book'>
              <div className='p-4'>
                <h3 className='text-center heading'><span> Book </span>Now</h3>
              </div>
               <div className='container-fluid'>
                  <div className='row'>
                      <div className='col-12 mx-auto'>
                      <div className='row'>                    
                          <div className='col-md-6 pt-5 pt-lg-0 col-sm-12 col-lg-6'>
                              <img className='img-fluid animated' src={web2} alt="#" />
                          </div>
                          <div className='head col-md-6 pt-5 pt-lg-0 col-sm-12 col-lg-6'>
                          <form action="">
                            <h3>Book Appointment</h3>
                            <input type="text" placeholder="Your Name" class="box"/>
                            <input type="number" placeholder="Your Number" class="box"/>
                            <input type="email" placeholder="Your Email" class="box"/>
                            <input type="date" class="box"/>
                            <input type="submit" value="Book Now" class="btn"/>
                        </form>
                          </div>
                          
                          </div>
                </div>
            </div>
        </div>
            </section>
            <hr />
        </>
     )
}

export default Books;