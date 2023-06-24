import React from "react";
import MoviesData from "../Mdata";

const Movies = () => {

    return (
        <>

            <h1 className="text-center my-5 text-primary">Best Movies</h1>

            <div className="container">

                <div className="row">

                    {

                        MoviesData.map((cval) => {


                            return (
                                <>

                                    <div className="col-md-4">

                                        <div className="card" style={{ width: "18rem", paddingBottom: "50px" }}>
                                        <img src={cval.cover} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{cval.name}</h5> <br />
                                            <p className="card-text"><h5>{cval.rating}  <span><i class="fa-solid fa-star"></i></span></h5></p>
                                            <a href="https://www.primevideo.com/offers/nonprimehomepage/ref=dvm_pds_amz_in_as_s_gm_159_mkw_sRumWk2Nj-dc?gclid=CjwKCAjwhdWkBhBZEiwA1ibLmHzrfT45DkemccljPJ6QXPhScssTGcPlIZiDKKVlLAi40SiLQDhWEhoC-VgQAvD_BwE&mrntrk=pcrid_657901934579_slid__pgrid_84577172328_pgeo_9062087_x__adext__ptid_kwd-303629226711" className="btn btn-primary">Watch Movie</a>
                                        </div>
                                    </div>

                                </div >
                                </>
                )

                        })

                    }
            </div>
        </div >

        </>
    )
}
export default Movies;
