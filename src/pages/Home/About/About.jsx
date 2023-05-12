import person from '../../../assets/images/about_us/person.jpg'
import parts from '../../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 p-4">
            <div className="hero-content flex-col lg:flex-row p-2">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-5 top-40 border-8 border-white rounded-lg shadow-2xl" />
                </div>
                <div className='lg:w-1/2 p-2'>
                    <h1 className="text-5xl font-bold  text-[#FF3811]">About Us</h1>
                    <h3 className="py-6 text-4xl font-bold">We are qualified & of experience in this field.</h3>
                    <div className='my-7'>
                        <p className='mb-5'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                        <p>the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. </p>
                    </div>
                    <button className="btn btn-primary bg-[#FF3811]">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;