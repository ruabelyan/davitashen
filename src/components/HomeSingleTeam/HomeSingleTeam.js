import { Link } from 'react-router-dom';

const DoctorsTwoSingleTeam = ({ image, name, title, imgUrl }) => {
    console.log('image', image)
    return (
        <>
            <div className="col-xl-4 col-lg-4 col-md-6">
                <div className="team-wrapper team-box-2 text-center mb-30">
                    <div className="team-thumb">
                        <img style={{ maxWidth: 300, maxHeight: 300 }} src={imgUrl ? imgUrl : `img/doctors/${image}.jpg`} alt="" />
                    </div>
                    <div className="team-member-info mt-35 mb-25">
                        <h3><Link to="/doctorDetails">{name}</Link></h3>
                        <h6 className="f-500 letter-spacing pink-color">{title}</h6>
                    </div>
                    {/* <div className="team-social-profile mb-15">
                        <ul>
                            <li><a href="/"><i className="fab fa-facebook-f"></i></a></li>
                            <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="/"><i className="fab fa-behance"></i></a></li>
                            <li><a href="/"><i className="fab fa-pinterest"></i></a></li>
                            <li><a href="/"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
        </>
    );
};

export default DoctorsTwoSingleTeam;