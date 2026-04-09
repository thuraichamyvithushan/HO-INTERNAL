
import "./HomePageGrid.css";
import React from "react";
import { Link } from "react-router-dom";

const HomePageGrid = function () {
    return (
        <div>
            <div className="container main-cent">
                <div className="cent">
                    <div className="market">
                        <h2 className="under">Marketing</h2>
                        <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                        <div className="row no-gutters mt-5 home_row">
                            {/*1st  Single Row with 7 Columns */}
{/* 
                            <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://drive.google.com/drive/folders/1jSN_rQl_WScCN-UGEJck249AykvBsbaO?usp=drive_link" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/socialM.png" alt="Internal Drive" />
                                        </a>
                                        <h4 className="card-title">Online Marketing</h4>
                                    </div>
                                </div>

                            </div> */}
                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href=" https://drive.google.com/drive/folders/1b7zNvTKx7DG50S3SzTpEO8llIqTDfeEv?usp=drive_link" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/onsite.png" alt="HO Assets" />
                                        </a>
                                        <h4 className="card-title">Onsite Marketing</h4>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href=" https://drive.google.com/drive/folders/1HlXHyZTzhUjCvOoP-_JOHkgV641Cz2RB?usp=drive_link" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/off.png" alt="Hikmicro Thermal" />
                                        </a>
                                        <h4 className="card-title">Offline Marketing Inc Assets</h4>
                                    </div>
                                </div>
                            </div> */}
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://huntsmanoptics.com/au" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/ac.jpg" alt="Hikmicro Thermal" />
                                        </a>
                                        <h4 className="card-title">Huntsman Website</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://assets.hointernal.com/#/" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/targetmarket.png" alt="HO Assets" />
                                        </a>
                                        <h4 className="card-title">All Brand Assets</h4>
                                    </div>
                                </div>
                            </div>
                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://mailchimp.com/landers/email-marketing-platform/?ds_c=DEPT_AOC_Google_Search_AU_EN_Brand_Acquire_Exact_MKAG_AU&ds_kids=p74937093191&ds_a_lid=kwd-2285511033&ds_cid=71700000105319282&ds_agid=58700008248580181&gad_source=1&gclid=Cj0KCQjw0ruyBhDuARIsANSZ3wr7C7p4_E1qGIuagGi2RtlXo7nCQY3uaNVxcqvTXfGk2dvB3slF4fYaAv09EALw_wcB&gclsrc=aw.ds&currency=AUD" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/mc.jpg" alt="mailchimp" />
                                        </a>
                                        <h4 className="card-title">Mailchimp</h4>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://drive.google.com/drive/folders/1i-IeQFRuucU6MHruJCCWiXa4LlJ3p31G?usp=drive_link" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/internalM.jpg" alt="mailchimp" />
                                        </a>
                                        <h4 className="card-title">Internal Marketing Folder</h4>
                                    </div>
                                </div>
                            </div> */}
                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://docs.google.com/spreadsheets/d/1DMCdgtofDFZxcD10uJu-PG5_hwq58fADITBtqAbr2SE/edit?usp=sharing" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/aus.jpg" alt="mailchimp" />
                                        </a>
                                        <h4 className="card-title">Australia HO Prices</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://docs.google.com/spreadsheets/d/1Bvf248HxoUFFN23DEA1VU2wGBla2IvOuKiramYlnbsU/edit?usp=sharing" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/newzland.jpg" alt="mailchimp" />
                                        </a>
                                        <h4 className="card-title">New Zealand HO Prices</h4>
                                    </div>
                                </div>
                            </div> */}

                            {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <Link to="/Clearance">
                                            <img height="100px" width="100px" src="./images/CC-db.png" alt="mailchimp" />
                                            </Link>
                                        <h4 className="card-title">Clearance Customer Database Au/NZ </h4>
                                      
                                    </div>
                                </div>
                            </div> */}



                             <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                         <a href="https://huntsmanoptics.com/wp-content/uploads/2025/12/HikMicro-A3-Doublefold-AUSTRALIA-23-12-25-with-Lynx-3Habrok-4K-2.pdf" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/aus.jpg" alt="assets" />
                                            </a>
                                        <h4 className="card-title">Trifold Aus</h4>
                                      
                                    </div>
                                </div>
                            </div>
   
                             
                             <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                         <a href="https://hikmicrotech.account.box.com" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/db-color.jpg" alt="assets" />
                                            </a>
                                        <h4 className="card-title">Hikmicro Box</h4>
                                      
                                    </div>
                                </div>
                            </div>

                  

                             {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                            <Link to="/events">
                                            <img height="100px" width="100px" src="./images/event.avif" alt="assets" />
                                            </Link>
                                        <h4 className="card-title">Events</h4> 
                                      
                                    </div>
                                </div>
                            </div> */}
                            




                               <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                         <a href="https://drive.google.com/drive/u/1/folders/1D7A5CmhIPy6TDApZRiK0TLMrplQyMsBO" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/educationalvedio.png" alt="assets" />
                                            </a>
                                        <h4 className="card-title">Social Media Sharing</h4> 
                                      
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>




                <div className="sales">
                    <h2 className="under">Sales</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        {/* 2nd row */}
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://au.unleashedsoftware.com/v2/Account/LogOn?ReturnUrl=%2fv2%2f" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/unleashedc.png" alt="Unleashed" />
                                    </a>
                                    <h4 className="card-title">Unleashed</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://huntsmanopticsau.store.unleashedsoftware.com/home" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2blightblue.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B Portal</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://www.huntsmanoptics.com/au/" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/aim.jpg" alt="Huntsman Webpage" />
                                    </a>
                                    <h4 className="card-title">Huntsman Webpage</h4>
                                </div>
                            </div>
                        </div> */}
                       

                         {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                      <Link to="/DealerLocate">
                                        <img height="100px" width="100px" src="./images/dealer.jpg" alt="B2B Portal" />
                                    </Link>
                                    <h4 className="card-title">Dealer Locator </h4>
                                </div>
                            </div>
                        </div> */}

                         {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/1VfB-hCpzLrTf_7kE3x--p25V5GdeCFCt?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/customerdb.jpg" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Cutomer database </h4>
                                </div>
                            </div>
                        </div>
                         */}

                         <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaDlNmLAJdIUdqu_XfTkq4p3lPB_7lwBQ6akRwtZaVYlGnCQ/viewform" target="_blank" rel="noreferrer">
                                
                                        <img height="100px" width="100px" src="./images/SRR.png" alt="B2B Portal" />
                                    </a>

                                  
                                    <h4 className="card-title">Stock Return Request</h4>
                                </div>
                            </div>
                        </div>
                    
                       

                         <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://rma.hointernal.com" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/rma.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">RMA Form</h4>
                                </div>
                            </div>
                        </div>

                        

                         <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <a href="https://staffpurchaseaus.hointernal.com" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/spf1.jpg" alt="B2B Portal" />
                                        {/* https://forms.gle/ESwC6S3GHQx5txdt5 */}
                                    </a>
                                    <h4 className="card-title">Staff Purchase AU </h4>
                                </div>
                            </div>
                        </div>

                        

                        
                         {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <a href="https://docs.google.com/spreadsheets/d/15VO6JEfYJrj0QAFworXcLcmsO4FPPGJn86RB--XlDzk/edit?resourcekey=&gid=2096467029#gid=2096467029" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/sas.jpg" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Shooting Accuracy sheet </h4>
                                </div>
                            </div>
                        </div> */}


                        
                         <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://forms.gle/g43nynR6YvPHs3W27" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/saf.jpg" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Shooting Accuracy form</h4>
                                </div>
                            </div>
                        </div>

                         <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://huntsmanmarch.vercel.app" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/off.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">March Offer form</h4>
                                </div>
                            </div>
                        </div>
                       
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/u/1/folders/1_sguKQ36eUJgzOpWlH9EZsf1zD20cmAd" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/event.avif" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Upcoming Event</h4>
                                </div>
                            </div>
                        </div> */}



                    </div>
                </div>



                <div className="oso">
                    <h2 className="under">Internals</h2>
                    <hr style={{ margin: "0",borderTop:"5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row"style={{justifyContent:"center"}}>
{/*                        
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="  https://drive.google.com/drive/folders/1il1jgGukwrhckWrXqWswdnAfN4UJoZII?usp=drive_link" target="_blank" rel="noreferrer">
                                        <img height="100px" width="120px" src="./images/userGuide.jpg" alt="OSO Home" />
                                    </a>
                                    <h4 className="card-title">User Guides</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="  https://drive.google.com/drive/folders/1tNr7FjcDYMB5Xs19jHPBsMWDcf1XMWk2?usp=drive_link" target="_blank" rel="noreferrer"> 
                                        <img height="100px" width="120px" src="./images/range-icon-16.png" alt="OSO Products" />
                                       </a>
                                    <h4 className="card-title">Products Ranges</h4>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://www.unleashedsoftware.com/academy/" target="_blank" rel="noreferrer">
                                        <img height="100px" width="120px" src="./images/XA-products.png" alt="OSO Products" />
                                    </a>
                                    <h4 className="card-title">Unleash User Guide</h4>
                                </div>
                            </div>
                        </div> */}

                         <div className="col-xl-6 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://huntsmanopticsau.store.unleashedsoftware.com/home" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2blightblue.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B Portal</h4>
                                </div>
                            </div>
                        </div>

                        
                         {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://drive.google.com/drive/folders/0ANjVb-ewO2m6Uk9PVA" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/drive.jpg" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Marketing Drive</h4>
                                </div>
                            </div>
                        </div> */}

                        <div className="col-xl-6 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://rma.hointernal.com/check-rma" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/au.jpg" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">RMA Tracking</h4>
                                </div>
                            </div>
                        </div>

                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://rma.hointernal.com/dashboard" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mail.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">RMA Responses</h4>
                                </div>
                            </div>
                        </div> */}

                        
                         {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                     <a href="https://docs.google.com/spreadsheets/d/15VO6JEfYJrj0QAFworXcLcmsO4FPPGJn86RB--XlDzk/edit?resourcekey=&gid=2096467029#gid=2096467029" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/mail2.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">Shooting Accuracy Responses </h4>
                                </div>
                            </div>
                        </div> */}

                        {/* <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href=" https://docs.google.com/forms/d/e/1FAIpQLSd5GV6LyVT0aKBppg2u3tP5ZWaIw9tpNAQbttq2ADgvfUomoQ/formrestricted" target="_blank" rel="noreferrer">
                                        <img height="100px" width="120px" src="./images/graphic.png" alt="OSO Admin" />
                                    </a>
                                    <h4 className="card-title">Graphic Request Form</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                          <Link to="/nav">
                                        <img height="100px" width="120px" src="./images/drive.jpg" alt="OSO Backend" />
                                     </Link>
                                    <h4 className="card-title">Drive</h4>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="col-xl-2 col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                 
                                     <Link to="/fjd">
                                        <img height="100px" width="120px" src="./images/fj-logo.png" alt="OSO Backend" />
                                    </Link>
                                    <h4 className="card-title">FJDynamics New Zealand</h4>
                                </div>
                            </div>
                        </div> */}
                      
                    </div>
                </div>




                


            </div>
        </div>
    );
};

export default HomePageGrid;
