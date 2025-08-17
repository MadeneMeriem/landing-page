import React from 'react';
import PickMeals from './Assets/pick-meals-image.png';
import ChooseMeals from './Assets/choose-image.png';
import DeliveryMeals from './Assets/delivery-image.png';
 


const work = () => {
    const workSteps = [
        {
            image: PickMeals,
            title: "Pick Meals",
            description: "Choose from our wide range of delicious meals."
        },
        {
            image: ChooseMeals,
            title: "Choose Meals",
            description: "Select your favorite meals and customize them."
        },
        {
            image: DeliveryMeals,
            title: "Delivery",
            description: "Get your meals delivered hot and fresh to your doorstep."
        }
    ];

    return ( 
        <div className="work-section-wrapper">
            <div className="work-section-top">
                <p className="primary-subheading">Work</p>
                <h1 className="primary-heading">How it Works ?</h1>
                <p className="primary-text">
                        Lorem ipsum dolor sit amet consectetur. Non tincidunt 
                        magna non et elit. Dolor  turpis molestie dui
                        magnis facilisis at fringilla quam.
                </p>
            </div>
            <div className="work-section-bottom">
                {
                    workSteps.map((data)=>(
                        <div className="work-section-info">
                            <div className="info-boxes-img-container">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default work;<div>
</div>