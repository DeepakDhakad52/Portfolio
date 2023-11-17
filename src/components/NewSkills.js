import React from 'react'
import './styles/newSkills.css'
import { skillDetails } from './data/skillDetails';

const skillDetails1 = skillDetails.splice(0, skillDetails.length / 2);
const skillDetails2 = skillDetails.splice(skillDetails.length / 2 - 4, skillDetails.length);

const NewSkills = () => {
    return (
        <section className="skills py-[10vh] mb-32 bg-white" id="skills">
            <h2 className="heading">
                <i className="fas fa-laptop-code" /> Skills &amp; <span>Abilities</span>
            </h2>
            <div className="container my-8 mx-auto">
                <div className="row">
                    <div className="col">
                        {
                            skillDetails1.map(skill =>
                                <div className="bar" key={skill.id}>
                                    <div className="info">
                                        <i className={skill.icon}>
                                            <span style={{ textTransform: 'capitalize' }}>{skill.skillName}</span>
                                        </i>
                                        <span>{skill.percent}%</span>
                                    </div>
                                    <div
                                        className={`line ${skill.class} `}
                                        children={
                                            <span
                                                className={`h-full block rounded-[20px]`}
                                                style={{
                                                    width: `${skill.percent}%`,
                                                    background: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
                                                }}
                                            ></span>}
                                    />
                                </div>
                            )
                        }
                    </div>
                    <div className="col">
                        {
                            skillDetails2.map(skill =>
                                <div className="bar" key={skill.id}>
                                    <div className="info">
                                        <i className={skill.icon}>
                                            <span style={{ textTransform: 'capitalize' }}>{skill.skillName}</span>
                                        </i>
                                        <span>{skill.percent}%</span>
                                    </div>
                                    <div
                                        className={`line ${skill.class} `}
                                        children={
                                            <span
                                                className={`h-full block rounded-[20px]`}
                                                style={{
                                                    width: `${skill.percent}%`,
                                                    background: `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
                                                }}
                                            ></span>}
                                    />
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </section >

    )
}

export default NewSkills
