import dataScience from "../assets/datascience.png"
import deepLearning from "../assets/Deep-Learning-Training.png"
import expressJsCourse from "../assets/express-js-course.png"
import machineLearning from "../assets/machinelearning.png"
import mongoDb from "../assets/mongodb-course.png"
import python from"../assets/pythonCourse.png"
import reactCourse from "../assets/reactcourse.jpg"
import tailwindCssCourse from "../assets/tailwindcss.png" 
let availabeCourses=[
    {
        id:1,
        name:"Python For EveryBody",
        subscription_duration:[3,6,9],
        fees:30000,
        mentor:'Ravi Kant Verma',
        path:dataScience,
        //rating :5
        selected:true

    },
    {
        id:2,
        name:"Responsive Design Using Tailwind",
        subscription_duration:[3,6],
        fees:10000,
        mentor:'Abhishek Bhakhar',
        path:tailwindCssCourse,
        selected:false

    },
    {
        id:3,
        name:"Frontend Development using React.js",
        subscription_duration:[3,6,9],
        fees:60000,
        mentor:'Nathan Krasney',
        path:reactCourse,
        selected:false
    },
    {
        id:4,
        name:"Backend Development using Express.js",
        subscription_duration:[3,6,9],
        fees:50000,
        mentor:'Rahul Dangar',
        path:expressJsCourse,
        selected:false
    },
    {
        id:5,
        name:"Machine Learning (Python)",
        subscription_duration:[3,6,9],
        fees:150000,
        mentor:'Krish Naikaa',
        path:machineLearning,
        selected:false
    },
    {
        id:6,
        name:"Deep Learning (pyhton)",
        subscription_duration:[3,6,9],
        fees:50000,
        mentor:'Srikanth G. Varma',
        path:deepLearning,
        selected:false
    },
    {
        id:7,
        name:"Python with Data Science",
        subscription_duration:[3,6,9],
        fees:45000,
        mentor:'Krish Naikaa',
        path:dataScience,
        selected:false
    }
]
export {availabeCourses}