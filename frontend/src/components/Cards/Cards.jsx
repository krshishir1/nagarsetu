import React from 'react'
import Fire_img from '../../assets/images/Fire.svg'
import dashboard_img from '../../assets/images/dashboard.svg'
import tick_img from '../../assets/images/check.svg'
import AI_img from '../../assets/images/AI.svg'

function Cards() {

    const card_one = {
        card_title: 'Real-time updates',
        card_content: 'Get instant updates on project  status and departmental activites, ensuring everyone stays informed on the same page.'
    }
    const card_two = {
        card_title: 'Custom dashboard',
        card_content: 'Tailor your user experience with cusomizable dashboard that displays relevant data insights'
    }
    const card_three = {
        card_title: 'Collaboration tools',
        card_content: 'Acess a range of tools designer to facilitate seamless collabration across various city departments.'
    }
    const card_four = {
        card_title: 'AI model integration',
        card_content: 'Empowering government collabration with Artificial intelligence for efficient working'
    }


    return (
        <>
            <div className='flex justify-center items-center px-8 gap-4 flex-wrap'>
                <div className='bg-white text-black rounded-md text-center content-center h-[288px] w-[329px] px-4'>
                    <div className='flex justify-center mb-[10px]'>
                        <img src={Fire_img} alt="" />
                    </div>
                    <h2 className='font-bold text-3xl mb-[10px]'>{card_one.card_title}</h2>
                    <p>{card_one.card_content}</p>
                </div>
                <div className='bg-white text-black rounded-md text-center content-center h-[288px] w-[329px] px-4'>
                    <div className='flex justify-center mb-[10px]'>
                        <img src={dashboard_img} alt="" />
                    </div>
                    <h2 className='font-bold text-3xl mb-[10px]'>{card_two.card_title}</h2>
                    <p>{card_two.card_content}</p>
                </div>
                <div className='bg-white text-black rounded-md text-center content-center h-[288px] w-[329px] px-4'>
                    <div className='flex justify-center mb-[10px]'>
                        <img src={tick_img} alt="" />
                    </div>
                    <h2 className='font-bold text-3xl mb-[10px]'>{card_three.card_title}</h2>
                    <p>{card_three.card_content}</p>
                </div>
                <div className='bg-white text-black rounded-md text-center content-center h-[288px] w-[329px] px-4'>
                    <div className='flex justify-center mb-[10px]'>
                        <img src={AI_img} alt="" />
                    </div>
                    <h2 className='font-bold text-3xl mb-[10px]'>{card_four.card_title}</h2>
                    <p>{card_four.card_content}</p>
                </div>
            </div>
        </>
    )
}

export default Cards
