import { useState } from 'react'
import "./services.css";

const Services = () => {
    const[toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="services section" id="services">
         <h2 className="section__title">Services</h2>
        <span className="section__subtitle">What i offer</span>
    
        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className='uil uil-web-grid services__icon'></i>
                    <h3 className="services__title">
                        Demo & <br/> Presentation Design</h3>
                </div>

                    <span className="services__button" onClick={() => toggleTab(1)}>
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    
                    <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Demo & Presentation Design</h3>
                            <p className="services__modal-description">
                                Crafting tailored, engaging product demos that clearly show value and inspire client confidence.
                                </p>
                        
                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Deliver engaging product walkthroughs.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Customize demo environments for client needs.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Highlight technical features with business value.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Use storytelling to simplify complex solutions.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Inspire confidence and accelerate decisions.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-arrow services__icon'></i>
                    <h3 className="services__title">Proof-of-Concept <br/> Development</h3>
                </div>

                    <span onClick={() => toggleTab(2)} className="services__button">
                        View More 
                        <i className="uil uil-arrow-right services__button-icon"></i>
                    </span>
                    
                    <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Proof-of-Concept Development</h3>
                            <p className="services__modal-description">
                                Building prototypes and technical validations to prove business value before full rollout.
                                </p>
                        
                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Develop API & CRM integrations.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Test workflows and automation.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Validate scalability and performance.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Tailor POCs to business requirements.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Reduce risk before full implementation.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>

            <div className="services__content">
                <div>
                    <i className='uil uil-edit services__icon'></i>
                    <h3 className="services__title">Solutions <br/> Consulting</h3>
                </div>

                    <span onClick={() => toggleTab(3)} className="services__button">
                        View More
                        <i className="uil uil-arrow-right services__button-icon"></i>
                        </span>
                    
                    <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                        <div className="services__modal-content">
                            <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                            <h3 className="services__modal-title">Solutions Consulting</h3>
                            <p className="services__modal-description">
                                Bridging the gap between technology and business needs through consultative support.
                            </p>
                        
                            <ul className="services__modal-services grid">
                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Conduct discovery and requirement analysis.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Map solutions to business workflows.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Optimize processes with technology.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Advise on adoption and change management.
                                    </p>
                                </li>

                                <li className="services__modal-services">
                                    <i className="uil uil-check-circle services__modal-icon"></i>
                                    <p className="services__modal-info">
                                        Empower teams to scale smarter and faster.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
            </div>
        </div>
    </section>
    
  )
}

export default Services