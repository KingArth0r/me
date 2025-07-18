import ProjectIcon from "./ProjectIcon";
import WaveText from "./WaveText";

function Body() {

    const courses = [
        {
            title: 'Object Oriented Programming',
            image: 'images/CS300.png',
            description: 'lorem'
        },
        {
            title: 'Data Structures and Algorithms',
            image: 'images/CS400.jpg',
            description: 'lorem'
        },
        {
            title: 'Intro to Computer Engineering',
            image: 'images/CS252.png',
            description: 'lorem'
        },
        {
            title: 'Algorithms',
            image: 'images/CS577.png',
            description: 'lorem'
        },
        {
            title: 'Machine Organization and Programming',
            image: 'images/CS354.png',
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
        {
            title: 'Calculus',
            image: 'images/Calc.jpg',
            description: 'lorem'
        },
        {
            title: 'Differential Equations',
            image: 'images/Math2320.jpg',
            description: 'lorem'
        },
        {
            title: 'Linear Algebra',
            image: 'images/Math2318.jpg',
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
            image: 'images/Math475.png',
            description: 'lorem'
        },
        {
            title: 'Numerical Analysis',
            image: 'images/Math514.jpg',
            description: 'lorem'
        },
        
    ];

    return (
        <div className="flex flex-row justify-center">
            <div className="flex flex-col justify-start items-start bg-secondary-bg p-2 px-4 rounded-lg w-1/2">
                <WaveText text={"Development experience"} type={'section'} color={'default'}/>

                <a href="https://allthenticate.com">
                    <WaveText text={'Allthenticate'} type={'section'} color={'allthenticate'}/>
                </a>

                <p className="italic text-primary-text mx-3">Software Engineering Intern</p>

                <ul className="text-primary-text pl-6 list-disc">
                    <li>Logging password usage
                        <ul className="pl-6 list-disc">
                            <li>Adjusted existing Rust PAM module to allow logging password usage on Mac and Linux</li>
                            <li>Created new protobuf API endpoints to log to backend</li>
                            <li>Implemented timing each attempt to demonstrate that our service decreases authentication speed by over 400%</li>
                        </ul>
                    </li>

                    <li>HID Device Emulation
                        <ul className="pl-6 list-disc">
                            <li>Began research on creating a virtual CTAPHID device to allow our service to appear as a FIDO passkey on Mac</li>
                            <li>Utilized DriverKit-Karabiner to create Virtual HID keyboard</li>
                            <li>Contributed to Karabiner-Elements by documenting how to run from source without adding entitlements or Apple developer account</li>
                        </ul>
                    </li>

                    <li>Fixed developer onboarding scripts for running our service from source</li>

                    <li>Communicated to potential investors how our product stands out in the authentication market</li>
                </ul>

                <a href={"https://www.navigators.org"}>
                    <WaveText text={"Navigators"} type={'section'} color={'navigators'}/>
                </a>

                <p className="italic text-primary-text mx-3">Software Development and IT Intern</p>

                <ul className="text-primary-text pl-6 list-disc">
                    <li>
                        Lead development of the <i>Tech Library</i> application
                        <ul>
                            <li>Surveyed users to curate database of commonly borrowed tech equipment</li>
                            <li>Developed full stack application allowing employees to independently checkout and return items</li>
                            <li>Created a secure admin dashboard to allow IT department to manage inventory items, review feedback, and check logs</li>
                        </ul>
                    </li>

                    <li>
                        Maintained and tested documentation for new employee computer configuration (Windows, Mac, Linux)
                    </li>

                    <li>
                        Created BASH script to help automate organization wide migration from Jamf to Azure
                    </li>
                </ul>

                <a href={"https://perfectpitchplusplus.tech"}>
                    <WaveText text={"PerfectPitch++"} type={'section'} color={'perfectpitch'} />
                </a>

                <WaveText text={"MentourShop"} type={'section'} color={'mentourshop'} />

                <WaveText text={"Schneider"} type={'section'} color={'schneider'}/>

                <WaveText text={"Teaching Experience"} type={'section'} color={'default'}/>
                            
                <WaveText text={'Completed Courses'} type={'section'} color={'default'}/> 
                            
                <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {courses.map((course, i) => (
                        <ProjectIcon key={i} title={course.title} image={course.image} description={course.description}/>
                    ))}
                </div>
                            
                <WaveText text={'Interests'} type={'section'} color={'default'} /> 
                            
            </div>
        </div>
    );
};

export default Body;