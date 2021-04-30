import React from 'react'

const Contact = () => {
    return (
        <>
            <div className="contact_info">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1 d-flex justify-content-between ">
                            {/* Phone number */}
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                               <span class="material-icons">
settings_phone
</span>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Phone
                                    </div>
                                    <div className="contact_info_text">
                                        +91 7037206550
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                               <span class="material-icons">
home
</span>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        Address
                                    </div>
                                    <div className="contact_info_text">
                                        Aliagrh
                                    </div>
                                </div>
                            </div>
                            <div className="contact_info_item d-flex justify-content-start align-items-center">
                             <span class="material-icons">
schedule_send
</span>
                                <div className="contact_info_content">
                                    <div className="contact_info_title">
                                        email
                                    </div>
                                    <div className="contact_info_text">
                                        nikunj@gupta.com
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div> 
                </div>  
                 
                  <div className="contact_form">
                      <div className="container">
                          <div className="row">
                              <div className="col-lg-10 offset-lg-1">
                                  <div className="py-5  contact_form_container">
                                        <div className="contact_form_title">
                                            <h2>
                                            Get in touch

                                            </h2>
                                        </div>
                                        <form id='contact_form'>
                                            <div className="d-flex justify-content-between  align-items-between contact_form_name">
                                                <input type="text" id='contact_form_name' className="contact_form_name input_field  " placeholder="Your Name" required='true' />
                                                <input type="email" id='contact_form_email' className="contact_form_email input_field mx-2" placeholder="Your Email" required='true' />
                                                <input type="number" id='contact_form_phone' className="contact_form_phone input_field " placeholder="Your Phone Number" required='true' />
                                            </div>
                                            <div className="contact_form_text mt-5 ">
                                                <textarea name="" className='text_field contact_form_message p-2' placeholder="Message" cols="68" rows="10"></textarea>
                                            </div>
                                            <div className="contact_form_button">
                                                <button type='submit'  className='button contact_submit_button btn btn-sweet'>
                                                    Send Message
                                                </button>
                                            </div>
                                        </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
        </>
    )
}

export default Contact
