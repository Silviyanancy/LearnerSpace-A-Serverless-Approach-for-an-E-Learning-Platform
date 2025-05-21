import React, {useState, useEffect} from 'react';
import { processOrder } from '../api/mutations';        
import { listCourses } from '../api/queries';
import {v4 as uuidv4 } from 'uuid';
import {API, graphqlOperation} from 'aws-amplify';

const CourseContext = React.createContext();

const CourseProvider = ( {children} ) => {
    const [courses, setCourses] = useState([]);
    const [popular, setPopular] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCourses();
    }, []);

    const checkout = async (orderDetails) => {
        const payment = {
            id: uuidv4(),
            ...orderDetails
        };
        try{
            await API.graphql(graphqlOperation(processOrder, {input: payment}));
            console.log("Order is successful");
        }catch(err){
            console.log(err);
        }
    };

    const getCourses = async() => {
        try {
            setLoading(true);
            //Switch from authMode to API_KEY for public access
            const {data} = await API.graphql({
                query: listCourses,
                authMode: "API_KEY"
            });
            const courses = data.listCourses.items;
            const popular = courses.filter((course) => {
                return !!course.popular;
            });
            setCourses(courses);
            setPopular(popular);
            setLoading(false);
        } catch(err){
            console.log(err);
        }
    };

    return (
        <CourseContext.Provider value = {{courses, popular, loading, checkout}}>
            {children}
        </CourseContext.Provider>
    );
};

export {CourseContext, CourseProvider};