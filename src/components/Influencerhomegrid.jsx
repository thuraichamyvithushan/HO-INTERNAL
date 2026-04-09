import "./HomePageGrid.css";
import React from "react";
import { Link } from "react-router-dom";

const InfluencerHomeGrid = function () {
    return (
        <div>
            <div className="container main-cent">
                <div className="cent">
                    {/* <div className="market">
                        <h2 className="under">Marketing</h2>
                        <hr style={{ margin: "0", borderTop: "5px solid #ddd" }}></hr>
                        <div className="row no-gutters mt-5 home_row">
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="#" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/ac.jpg" alt="Huntsman Website" />
                                        </a>
                                        <h4 className="card-title">influencer</h4>
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
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://huntsmanoptics.com/wp-content/uploads/2025/12/HikMicro-A3-Doublefold-AUSTRALIA-23-12-25-with-Lynx-3Habrok-4K-2.pdf" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/aus.jpg" alt="Trifold Aus" />
                                        </a>
                                        <h4 className="card-title">Trifold Aus</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://hikmicrotech.account.box.com" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/db-color.jpg" alt="Hikmicro Box" />
                                        </a>
                                        <h4 className="card-title">Hikmicro Box</h4>
                                    </div>
                                </div>
                            </div>
                            <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                                <div className="card home_card">
                                    <div className="card-body" style={{ textAlign: "center" }}>
                                        <a href="https://drive.google.com/drive/u/1/folders/1D7A5CmhIPy6TDApZRiK0TLMrplQyMsBO" target="_blank" rel="noreferrer">
                                            <img height="100px" width="100px" src="./images/educationalvedio.png" alt="Social Media Sharing" />
                                        </a>
                                        <h4 className="card-title">Social Media Sharing</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sales">
                    <h2 className="under">Sales & Tools</h2>
                    <hr style={{ margin: "0", borderTop: "5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row">
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeaDlNmLAJdIUdqu_XfTkq4p3lPB_7lwBQ6akRwtZaVYlGnCQ/viewform" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/SRR.png" alt="Stock Return Request" />
                                    </a>
                                    <h4 className="card-title">Stock Return Request</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://rma.hointernal.com" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/rma.png" alt="RMA Form" />
                                    </a>
                                    <h4 className="card-title">RMA Form</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://staffpurchaseaus.hointernal.com" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/spf1.jpg" alt="Staff Purchase AU" />
                                    </a>
                                    <h4 className="card-title">Staff Purchase AU</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-four col-md-4 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://forms.gle/g43nynR6YvPHs3W27" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/saf.jpg" alt="Shooting Accuracy form" />
                                    </a>
                                    <h4 className="card-title">Shooting Accuracy form</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="oso">
                    <h2 className="under">Internals</h2>
                    <hr style={{ margin: "0", borderTop: "5px solid #ddd" }}></hr>
                    <div className="row no-gutters mt-5 home_row" style={{ justifyContent: "center" }}>
                        <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://huntsmanopticsau.store.unleashedsoftware.com/home" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/b2blightblue.png" alt="B2B Portal" />
                                    </a>
                                    <h4 className="card-title">B2B Portal</h4>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-6 col-sm-6 mt-3 anime-2 center-card">
                            <div className="card home_card">
                                <div className="card-body" style={{ textAlign: "center" }}>
                                    <a href="https://rma.hointernal.com/check-rma" target="_blank" rel="noreferrer">
                                        <img height="100px" width="100px" src="./images/au.jpg" alt="RMA Tracking" />
                                    </a>
                                    <h4 className="card-title">RMA Tracking</h4>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default InfluencerHomeGrid;
