import ProjectIcon from "./ProjectIcon";
import WaveText from "./WaveText";

function Body() {

    const mathCourses = [
        {
            title: 'Calculus',
            image: 'images/Calc.png',
            description: 'lorem'
        },
        {
            title: 'Differential Equations',
            image: 'images/Math2320.png',
            description: 'lorem'
        },
        {
            title: 'Linear Algebra',
            image: 'images/Math2318.png',
            description: 'lorem'
        },
        {
            title: 'Probability',
            image: 'images/Math3338.jpg',
            description: 'lorem'
        },
        {
            title: 'Real Analysis I',
            image: 'images/Math521.png',
            description: 'Proving calculus from the ground up. Topics include constructing the real numbers, limits, sequences, series, continuity, derivatives, and Riemann integration'
        },
        {
            title: 'Real Analysis II',
            image: 'images/Math522.jpg',
            description: 'A range of topics including sequences of functions, analysis on R^n, and functional analysis'
        },
        {
            title: 'Abstract Algebra I',
            image: 'images/Math541.jpg',
            description: 'lorem'
        },
        {
            title: 'Abstract Algebra II',
            image: 'images/Math542.jpg',
            description: 'lorem'
        },
        {
            title: 'Combinatorics',
            image: 'images/Math475.jpg',
            description: 'lorem'
        },
        {
            title: 'Numerical Analysis',
            image: 'images/Math514.jpg',
            description: 'lorem'
        },
    ];

    const compsciCourses = [
        {
            title: 'Object Oriented Programming',
            image: 'images/CS300.png',
            description: 'lorem'
        },
        {
            title: 'Data Structures and Algorithms',
            image: 'images/CS400.png',
            description: 'lorem'
        },
        {
            title: 'Intro to Computer Engineering',
            image: 'images/CS252.png',
            description: 'lorem'
        },
        {
            title: 'Algorithms',
            image: 'images/CS577.jpg',
            description: 'lorem'
        },
        {
            title: 'Machine Organization and Programming',
            image: 'images/CS354.jpg',
            description: 'lorem'
        },
        {
            title: 'Artificial Intelligence',
            image: 'images/CS540.jpg',
            description: 'lorem'
        },
        {
            title: 'User Interfaces',
            image: 'images/CS570.jpg',
            description: 'lorem'
        },
        {
            title: 'Big Data Systems',
            image: 'images/CS544',
            description: 'lorem'
        },
        {
            title: 'Operating Systems',
            image: 'images/CS537.jpg',
            description: 'lorem'
        },
        {
            title: 'Networks',
            image: 'images/CS640.jpg',
            description: 'lorem'
        },
        {
            title: 'Information Security',
            image: 'images/CS642.jpg',
            description: 'lorem'
        },
    ];

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-start items-start bg-secondary-bg p-2 px-4 rounded-lg w-1/2">
                <WaveText text={"Development experience"} size={'4'} weight={'semibold'}/>
                <a className={`relative 
                    inline-block 
                    text-3xl font-semibold mb-4
                    text-transparent 
                    bg-gradient-to-r 
                    from-allthenticate-blue via-allthenticate-blue to-allthenticate-blue
                    bg-[length:200%_100%] bg-left bg-clip-text 
                    transition-all duration-300 
                    hover:from-allthenticate-blue hover:via-allthenticate-blue hover:to-allthenticate-green 
                    hover:bg-right hover:scale-105 hover:cursor-pointer items-start
                `} href="https://allthenticate.com">Allthenticate</a>
                <a>Navigators</a>
                <WaveText text={"Teaching Experience"} size={'4'} weight={'semibold'}/>
                <WaveText text={"Coursework"} size={'3'} weight={'semibold'}/>
                <div className="grid-cols-3">
                    <ProjectIcon title='Real Analysis' image='images/Math521.png' description='Proving calculus from scratch: limits, continuity, derivatives, integrals, and more.'></ProjectIcon>
                </div>
                <WaveText text={'Interests'} size={3} weight={'semibold'}/>
            </div>
        </div>
    );
};

export default Body;