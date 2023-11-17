import './styles/experience.css'

const Experience = () => {
    return (
        <>
            <section className={'experience py-[10vh] mb-8'} id="experience">
                <h2 className={'heading mb-16'}><i className="fas fa-briefcase"></i> Experience & <span>Achievements</span> </h2>
                <div className={'timeline '}>

                    <div className="containerr left">
                        <div className="content">
                            <div className="tag">
                                <h2 className={'text-4xl font-semibold'}>Smart India Hackathon Finalist</h2>
                            </div>
                            <div className="desc">
                                <p className={'mt-2 font-semibold'}>March - 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="containerr right">
                        <div className="content">
                            <div className="tag">
                                <h2 className={'text-4xl font-semibold'}>TCR Innovation</h2>
                            </div>
                            <div className="desc">
                                <h3>Web Developer Internship</h3>
                                <p className={'mt-2 font-semibold'}>Oct 2022 - Dec 2022</p>
                            </div>
                        </div>
                    </div>

                    <div className="containerr left">
                        <div className="content">
                            <div className="tag">
                                <h2 className={'text-4xl font-semibold'}>IIST Hackethon Winner </h2>
                            </div>
                            <div className="desc">
                                <h3>IIST Startup Hackathon | Sakhi Foundation </h3>
                                <p>Our team Sakhi foundation, secured the 6th position in the 24-hour internal hackathon
                                    organized by GDSC IIST and Indore Institute of Science and Technology.</p>
                                <p className={'mt-2 font-semibold'}>March - 2023</p>
                            </div>
                        </div>
                    </div>

                    <div className="containerr right">
                        <div className="content">
                            <div className="tag">
                                <h2 className={'text-4xl font-semibold'}>Google Cloud Career Practitioners Pathway December 2022</h2>
                            </div>
                            <div className="desc">
                                <h3>Google Cloud || Certified</h3>
                            </div>
                        </div>
                    </div>

                    <div className="containerr left">
                        <div className="content">
                            <div className="tag flex">
                                <h2 className={'text-4xl font-semibold'}>CodSoft</h2>
                            </div>
                            <div className="desc">
                                <h3> Full Stack Web Developer Intern </h3>
                                <p className={'mt-2 font-semibold'}>Oct 2023 - Nov 2023</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section >
        </>
    )
}

export default Experience
