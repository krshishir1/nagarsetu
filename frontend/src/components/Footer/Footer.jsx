import React from 'react'
import Logo from '../../assets/images/Logo.svg';
import Footer_img from '../../assets/images/footer_img.svg';

function Footer() {
    return (
        <>
            <div className='text-white bg-[#172F47] flex justify-center gap-[10rem] relative h-[45vh]'>
                <img src={Footer_img} className='absolute h-[242px] w-[352px] left-[15%] bottom-[5%]' alt="" />
                <div className='w-full flex-col text-start justify-start '>
                    <img src={Logo}  alt="Logo" />
                    <div className='px-[5rem] font-semibold text-3xl'>
                        <p>
                            Strengthening <span className='bg-gradient-to-r from-[#18A649] to-[#4C7BE1] text-transparent bg-clip-text'>Collabration</span>,
                        </p>
                        <p>
                            Advancing <span className='bg-gradient-to-r from-[#4C7BE1] to-[#18A649] text-transparent bg-clip-text'>Development</span>.
                        </p>
                    </div>
                </div>
                <div className='flex w-full  justify-center gap-16 py-[25px]'>   
                <div>
                    <h4 className='font-medium text-xl'>Organisation</h4>
                    <div className='mt-4'>
                        <ul>
                            <li><a href="">About</a></li>
                            <li><a href="">Guide</a></li>
                            <li><a href="">FAQs</a></li>
                            <li><a href="">Contactt</a></li>
                            <li><a href="">Query/Feedback</a></li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h4 className='font-medium text-xl'>Others</h4>
                    <div className='mt-4'>
                        <ul>
                            <li><a href="">Privacy</a></li>
                            <li><a href="">Terms & conditions</a></li>
                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}

export default Footer
