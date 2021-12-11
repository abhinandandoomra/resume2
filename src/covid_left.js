
import React from 'react';
import ReactDOM from 'react-dom';

function Card_covid_left() {
    return (
        <>
            <div className="container-fluid mt-3">
                <div className="row row-cols-4 ">
                    <div className="col-md-3 p-0">
                        <div className="card border-0 text-center">
                            <div className="card-body_confirmed text-danger">
                                <h5 className="card_title card_confirmed mb-4 font-weight-bold">Confirmed</h5>
                                <h4 className="card_increase card_confirmed font-weight-normal">+3,40,602</h4>
                                <h1 className="card_result card_confirmed">2,06,16,234</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="card border-0 text-center">
                            <div className="card-body_active text-primary ">
                                <h5 className="card_title card_active mb-4 font-weight-bold">Active</h5>
                                <h4 className="card_increase card_active font-weight-normal">&nbsp;</h4>
                                <h1 className="card_result card_active">34,80,368</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="card border-0 text-center">
                            <div className="card-body_recovered text-success ">
                                <h5 className="card_title card_recovered mb-4 font-weight-bold">Recovered</h5>
                                <h4 className="card_increase card_recovered font-weight-normal">+3,00,684</h4>
                                <h1 className="card_result card_recovered">1,69,01,536</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 p-0">
                        <div className="card border-0 text-center">
                            <div className="card-body_deceased text-secondary ">
                                <h5 className="card_title card_deceased mb-4 font-weight-bold">Deceased</h5>
                                <h4 className="card_increase card_deceased font-weight-normal">+3,103</h4>
                                <h1 className="card_result card_deceased">2,25,489</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}
export default Card_covid_left;