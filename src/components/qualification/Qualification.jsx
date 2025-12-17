import {useState} from 'react';
import "./qualification.css";

const Qualification = () => {
    const[toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

  return (
    <section className="qualification section">
           <h2 className="section__title">Qualification</h2>
           <span className="section__subtitle">My personal journey</span>
   
           <div className="qualification section">
               <div className="qualification__tabs">
                   <div
                   className={
                    toggleState === 1 
                   ? "qualification__button qualification__active button--flex" 
                   : "qualification__button button--flex"
                   }
                   onClick= {() => toggleTab(1)}
                   >
                       <i className="uil uil-graduation-cap qualification__icon"></i>
                       Education
                   </div>

                <div 
                className={
                    toggleState === 2 
                ? "qualification__button qualification__active button--flex" 
                : "qualification__button button--flex"
                }
                onClick= {() => toggleTab(2)}
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i> 
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div 
                className={
                    toggleState === 1 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }
                    >
                    <div className="qualification__data">
                       <div>
                           <h3 className="qualification__title">Cloud Practitioner</h3>
                           <span className="qualification__subtitle">
                            Amazon Web Services
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2025 - Present
                           </div>
                       </div> 

                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>

                       <div>
                           <h3 className="qualification__title">Postman API Fundamentals</h3>
                           <span className="qualification__subtitle">
                            Postman
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2024 - 2025
                           </div>
                       </div> 
                    </div>

                    <div className="qualification__data">
                       <div>
                           <h3 className="qualification__title">Columbia Engineering</h3>
                           <span className="qualification__subtitle">
                            Columbia University
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2023 – 2024
                           </div>
                       </div> 

                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>

                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>

                       <div>
                           <h3 className="qualification__title">B.S. in Kinesiology</h3>
                           <span className="qualification__subtitle">
                            University of Toronto
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2016 – 2020
                           </div>
                       </div> 
                    </div>
                </div>

                <div 
                className={
                    toggleState === 2 
                    ? "qualification__content qualification__content-active" 
                    : "qualification__content"
                    }>
                    <div className="qualification__data">
                       <div>
                           <h3 className="qualification__title">Solutions Engineer</h3>
                           <span className="qualification__subtitle">
                             Nathans.dev - New York
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2025 - Present
                           </div>
                       </div> 

                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>
                    </div>
                    
                    <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>

                       <div>
                           <h3 className="qualification__title">Account Executive</h3>
                           <span className="qualification__subtitle">
                             MAS9 - New York
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2024 - 2025
                           </div>
                       </div> 
                    </div>

                    <div className="qualification__data">

                       <div>
                           <h3 className="qualification__title">Software Developer</h3>
                           <span className="qualification__subtitle">
                            Nathans.dev - New York
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2023 - Present
                           </div>
                       </div> 
                       <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>
                    </div>

                    <div className="qualification__data">
                        <div></div>
                        <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                       </div>

                       <div>
                           <h3 className="qualification__title">Account Executive</h3>
                           <span className="qualification__subtitle">
                            DCG - New York
                            </span>
                           <div className="qualification__calender">
                            <i className="uil uil-calender-alt"></i>2022 - 2024
                           </div>
                       </div> 

                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Qualification