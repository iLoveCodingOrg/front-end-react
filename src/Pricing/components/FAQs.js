import React from 'react'
import './FAQS.scss'

import { Link } from 'react-router-dom'

export default function() {
    return (
        <div className="faqs d-flex flex-column align-items-center">
            <div className="col-md-5 mr-5">
                <h2 className="h1 mb-4 text-center">Common Questions</h2>
                <hr/>

                <h3 className="mt-5">Can I get a discount?</h3>
                <p>
                    No! Sorry about that. The price of iLoveCoding is kept low so anyone can afford it. The cost of this training is less than the price of coffee per day. ☕. Remember! An alternative training at a bootcamp would cost way more.
                </p>


                <h3 className="mt-5">What is the refund policy?</h3>
                <p>
                    <strong>All plans are backed by a 7-day full refund policy</strong>. Try iLoveCoding, and if for any reason you are not satisfied, email us and request a refund within the first 7-days of your subscription. We only want to keep your money if you think we have earned it.
                    <br/><br/>
                    If you prepaid for an year or 6-months, we'll refund any unused months.
                </p>

                <h3 className="mt-5">Can I cancel anytime?</h3>
                <p>
                    Yes! There are no contracts or commitments. Request cancellation by emailing <u>support@ilovecoding.org</u>, and we'll take care of it.
                    <br/><br/>
                    If you cancel after the first 7-days, you'll continue to have access for the current month, and you will not be billed any further.
                    <br/><br/>
                    If you prepaid for an year or 6-months, we'll refund any unused months.
                </p>
                
                <h3 className="mt-5">Can I get a trial or see sample training?</h3>
                <p>
                    Two of our courses are completely free <Link to="/courses/perfect-path">The Perfect Path to Becoming a Job-Ready Developer</Link>, and <Link to="/courses/htmlcss2">Learn HTML &amp; CSS Correctly</Link>.
                    <br/><br/>
                    Try these courses, if you like my way of teaching and the topics covered, then we think you'll like and benefit from the complete training.
                </p>

                <h3 className="mt-5">I have no programming experience or CS degree, will it work for me?</h3>
                <p>
                    Yes! iLoveCoding is built for people with no-programming background or a CS degree (like me). iLoveCoding works best for 4 kinds of people (1) Beginners, (2) Junior and Senior Developers, (3) Developers from a different domain and (4) Entrepreneurs.
                </p>


                <h3 className="mt-5">Why is the cost so low?</h3>
                <p>
                    We do not spend on expensive offices, staff and advertising, so we can keep the training affordable and pass the savings to you. Plus we really believe in keeping education affordable so everyone has a fair chance to lift themselves and do/build great things.
                </p>

                <h3 className="mt-5">How can I get lifetime access to the content?</h3>
                <p>
                    We do not offer lifetime subscription. As long as your subscription is active, you will get unlimited access to your member privileges.
                </p>

                <h3 className="mt-5">Will I be able to get a job?</h3>
                <p>
                    We don't guarantee any outcomes! However countless iLoveCoding students have ended up in large companies, started freelancing and have even launched their own ideas.
                    <br/><br/>
                    With that said, iLoveCoding does prepare you so you become job-ready, with proper training, preparation and guidance along the way.
                </p>
                
                <h3 className="mt-5">Will I be able to make a website like Facebook?</h3>
                <p>
                    Yes! It will not be easy but iLoveCoding will give you the complete training so you become skilled enough to create a Facebook.com replica or launch your own original ideas.
                </p>

                <h3 className="mt-5">How is iLoveCoding better than a bootcamp/other courses?</h3>
                <p>
                    iLoveCoding brings the best of both worlds - Professional mentorship of a bootcamp, and affordability of online courses.
                </p>

                <h3 className="mt-5">Why should I pay when so much information is free online?</h3>
                <p>
                    You can for sure piece together all the technical information from the internet. However this will take a long time and you will still struggle with poor explanations, lack of examples, real-world projects and professional mentor-ship. iLoveCoding puts everything together in a systematic.
                </p>

                <h3 className="mt-5">How much time will it take?</h3>
                <p>
                    If you are a total beginner, it will take you 8 months of part-time learning (90 minutes a day), or 4 months of full-time learning (4 hours a day). The learning time should be quality focused work, which means you should deliberately consume the content and apply what is taught by building.
                    <br/><br/>
                    For best results, ask a bunch of questions, follow the path, and write a lot of code, no-matter how bad. Your initial work will be horrible. That is totally normal.
                </p>
            </div>
        </div>
    )
}
