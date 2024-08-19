import ProjectIcon from "./ProjectIcon";

function Body() {

    // courses = [
    //     {
    //         title: 'Real Analysis I',
    //         image: 'images/Math521.png',
    //         description: 'Proving calculus from the ground up. Topics include constructing the real numbers, limits, sequences, series, continuity, derivatives, and Riemann integration'
    //     },
    //     {
    //         title: 'Real Analysis II',
    //         image: 'images/Math522.png',
    //         description: 'A range of topics including sequences of functions, analysis on R^n, and functional analysis'
    //     },
    //     {
    //         title: 'Abstract Algebra I',
    //         image: 'images/Math541.png',
    //         description: ''
    //     },
    //     {
    //         title: 'Abstract Algebra II',
    //         image: 'images/Math542.png',
    //         description: ''
    //     },
    //     {
    //         title: 'Combinatorics',
    //         image: 'images/Math475.png',
    //         description: ''
    //     },
    //     {
    //         title: 'Numerical Analysis',
    //         image: 'images/Math514.png',
    //         description: ''
    //     },
    //     {
    //         title: 'Partial Differential Equations',
    //         image: 'images/Math619.png',
    //         description: ''
    //     }
    // ];

    return (
        <div className="flex flex-col justify-center items-center ">
            <h2 className="text-badger-red text-3xl font-bold mb-4">Development Experience</h2>
            <h2 className="text-badger-red text-3xl font-bold mb-4">Teaching Experience</h2>
            <h2 className="text-badger-red text-3xl font-bold mb-4">Research</h2>
            <h2 className="text-badger-red text-3xl font-bold mb-4">Coursework</h2>
            <div className="grid-cols-3">
                <ProjectIcon title='Real Analysis' image='images/Math521.png' description='Proving calculus from scratch: limits, continuity, derivatives, integrals, and more.'></ProjectIcon>
            </div>
            <h2 className="text-badger-red text-3xl font-bold mb-4">Interests</h2>
        </div>
    );
};

export default Body;