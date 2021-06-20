import React, {Component, Fragment} from 'react';
import Menu from "../components/menu";
import HomeBanner from "../components/homeBanner";
import CourseFeature from "../components/courseFeature";
import CoursePlanHome from "../components/coursePlanHome";
import Footer from "../components/Footer";
import PaymentGuide from "../components/PaymentGuide";
import MoreSeries from "../components/moreSeries";
import FreeClassHome from "../components/freeClassHome";



class HomePage extends Component {
    render() {
        return (
            <Fragment>
                    <Menu/>
                    <HomeBanner/>
                <CourseFeature/>

                    <CoursePlanHome/>
                <PaymentGuide/>
                <MoreSeries/>
                <FreeClassHome/>

                <Footer/>
            </Fragment>
        );
    }
}

export default HomePage;
