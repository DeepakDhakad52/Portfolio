import React from 'react'
import collage from './img/college.jpg'
import school from './img/school.avif'

const Education = () => {
    return (
        <section className={'bg-blue-50'} id="education">
            <h1 className="heading pt-8">
                <i className="fas fa-graduation-cap" /> My <span>Education</span>
            </h1>
            <p className={'text-center text-3xl my-8'}>
                Education is not the learning of facts, but the training of the mind to
                think.
            </p>
            <div className={'container mx-auto'}>
                <a href="https://indoreinstitute.com/" target="_blank" rel="noreferrer">
                    <div className={'flex hover:scale-105 transition duration-500 my-16'}>
                        <div className={'w-[20%] ml-64 shadow'}>
                            <img draggable="false" src={collage} alt={'IIST Indore'} />
                        </div>
                        <div className={'bg-white w-[60%] p-16 shadow'}>
                            <h3 className={'text-5xl my-4'}>Bachelor of Technology in Information Technology</h3>
                            <p className={'text-3xl my-4'}>Indore Institute of Science and Technology | IIST Indore</p>
                            <h4 className={'text-xl my-4'}>2020-2024 | Pursuing</h4>
                        </div>
                    </div>
                </a>
                <a href="https://indoreinstitute.com/" target="_blank" rel="noreferrer">
                    <div className={'flex hover:scale-105 transition duration-500 my-16'}>
                        <div className={'w-[20%] ml-64 shadow'}>
                            <img draggable="false" src={school} alt={'IIST Indore'} />
                        </div>
                        <div className={'bg-white w-[60%] p-16 shadow'}>
                            <h3 className={'text-5xl my-4'}>Higher Secondary | Science</h3>
                            <p className={'text-3xl my-4'}>Sanskar Vidhya Vihar Higher Secondary School, Chandrawati Ganj, Indore</p>
                            <h4 className={'text-xl my-4'}>2016-2020 | Completed</h4>
                        </div>
                    </div>
                </a>
                <div className='h-[50px]'></div>
            </div>
        </section>

    )
}

export default Education
