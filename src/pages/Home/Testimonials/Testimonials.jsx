import { Carousel, Card } from 'react-bootstrap';

import React from 'react';

const Testimonials = () => {


    const testimonials = [
        {
            quote: `Being a chef can be a lonely profession, but since joining this community, I've found a supportive network of like-minded individuals who understand the challenges and joys of working in the kitchen. I've learned so much from my fellow chefs and am grateful for the connections I've made through this community`,
            name: 'John Doe',
        },
        {
            quote: `This community has been a game-changer for me. I used to feel like I was constantly reinventing the wheel, but now I have access to a wealth of knowledge and resources that have saved me time and stress. Plus, it's always inspiring to see what my fellow chefs are creating!`,
            name: 'Jane Smith',
        },
        {
            quote: `As a chef who values sustainability and ethical sourcing, I've appreciated the emphasis this community places on these values as well. It's great to be part of a group that cares about more than just the bottom line, and I've been able to make some valuable connections with farmers and producers through this community`,
            name: 'Bob Johnson',
        },
    ];

    return (
        <div className='w-50 mx-5'>
            <Carousel>
                <h1 className='text-center my-3'>Testimonials</h1>
                {testimonials.map((testimonial, index) => (
                    <Carousel.Item key={index}>
                        <Card>
                            <Card.Body>
                                <blockquote className="blockquote mb-0">
                                    <p>{testimonial.quote}</p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted font-weight-bold">{testimonial.name}</small>
                                    </footer>
                                </blockquote>
                            </Card.Body>
                        </Card>
                    </Carousel.Item>
                ))}
            </Carousel>

        </div>

    );
}




export default Testimonials;