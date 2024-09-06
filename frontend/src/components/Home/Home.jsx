import React from 'react'
import  Cards  from '../Cards/Cards';
import topImage from '../../assets/images/top_image.svg';
import ftr_accent from '../../assets/images/ftr_accent.svg';
import emblem from '../../assets/images/Emblem.svg';
import data_icon from '../../assets/images/dataSharing_icon.svg';
import resource_icon from '../../assets/images/resourcePooling_icon.svg';
import unify_icon from '../../assets/images/uniPlanning_icon.svg';
import Map_icon from '../../assets/images/Map_icon.svg';
import bottom_img from '../../assets/images/bottom_Image.svg';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Dashboard from '../Dashboard/Dashboard';


function Home() {

    const Feature_one ={
        title: 'Data Sharing',
        content: 'Secure and effiecient data sharing across city departments to enhance transparency and decision making.'
    }
    const Feature_two ={
        title: 'Resource Pooling',
        content: 'Optimized allocation and sharing of resources, ensuring maximum efficiency in project implementation.'
    }
    const Feature_three ={
        title: 'Unified Planning',
        content: 'Collabrative planning tools for synchronized project phases and streamlined implementation.'
    }
    const Feature_four ={
        title: 'Map based tracking',
        content: 'Visualizing urban projects with integrated map features for precise location insights and enhanced collaboration.'
    }
    
    
    return (
        <>
        <div>
            <Header/>
            <div id='main-container' className='flex items-center'>
                <div id='main_txt' className='w-[50%] px-36'>
                    <h1 className='font-bold text-6xl text-white'>Transforming <br /> urban <br /><span>collaboration</span></h1>
                    <p className='text-lg text-white'>Empowering cities with inter-departmental cooperation. Share data, align resources and implement project with unprecedented efficiency.</p>
                </div>
                <div className='w-[50%]'>
                    <img className='w-full' src={topImage} alt="" />
                </div>
            </div>
            <Cards/>
            <div id='key_ftr' className='text-white text-center py-14 text-2xl lg:text-6xl font-bold relative'>Key <span>Features</span>
                <img src={ftr_accent} className='absolute left-[46%] bottom-[23%]  lg:w-[15rem] z-[-1]' alt="" />
            </div>
            <div className='relative py-12 text-white'>
                <img src={emblem} className='absolute left-[50%] translate-x-[-50%]' alt="" />
                <div id='features' className='grid xl:grid-cols-2 grid-rows-2 gap-y-10 gap-x-10 px-16 py-[6rem] place-items-center'>
                    <div className='bg-[#1E78FF05] border-[1.47px] border-[#1e78ff5b] lg:h-[225.78px] lg:w-[570.98px] p-[45.62px] rounded-md' id="one">
                        <div className='flex justify-center items-center gap-4'>
                            <img src={data_icon} alt="" />
                            <h4 className='text-2xl font-semibold'>{Feature_one.title}</h4>
                        </div>
                        <p className='mt-5 text-center'>{Feature_one.content}</p>
                    </div>
                    <div className='bg-[#1E78FF05] border-[1.47px] border-[#1e78ff5b] h-[225.78px] lg:h-[225.78px] lg:w-[570.98px]          p-[45.62px] rounded-md' id="two">
                        <div className='flex justify-center items-center gap-4'>
                            <img src={resource_icon} alt="" />
                            <h4 className='text-2xl font-semibold'>{Feature_two.title}</h4>
                        </div>
                        <p className='mt-5 text-center'>{Feature_two.content}</p>
                    </div>
                    <div className='bg-[#1E78FF05] border-[1.47px] border-[#1e78ff5b] lg:h-[225.78px] lg:w-[570.98px] p-[45.62px] rounded-md' id="three">
                        <div className='flex justify-center items-center gap-4'>
                            <img src={unify_icon} alt="" />
                            <h4 className='text-2xl font-semibold'>{Feature_three.title}</h4>
                        </div>
                        <p className='mt-5 text-center'>{Feature_three.content}</p>
                    </div>
                    <div className='bg-[#1E78FF05] border-[1.47px] border-[#1e78ff5b] lg:h-[225.78px] lg:w-[570.98px] p-[45.62px] rounded-md' id="four">
                        <div className='flex justify-center items-center gap-4'>
                            <img src={Map_icon} alt="" />
                            <h4 className='text-2xl font-semibold'>{Feature_four.title}</h4>
                        </div>
                        <p className='mt-5 text-center'>{Feature_four.content}</p>
                    </div>
                </div>
            </div>
            <div className='relative mt-[-14rem] flex justify-center'>
                <img src={bottom_img} className='' alt="" />
            </div>
            <Footer/>
        </div>
        </>
    )
}

export default Home;
