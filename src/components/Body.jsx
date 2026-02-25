import WaveText from "./WaveText";

function Body() {

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

                <WaveText text={"Mentu"} type={'section'} color={'mentu'} />

                <WaveText text={"Schneider"} type={'section'} color={'schneider'}/>

                <WaveText text={"Teaching Experience"} type={'section'} color={'default'}/>
                            
                <WaveText text={'Completed Courses'} type={'section'} color={'default'}/> 

                <p className="text-secondary-text mx-3 mt-1">
                    Selected coursework is being moved to a dedicated page. For now, here is a compact summary.
                </p>

                <div className="mx-3 mt-3 w-full rounded-lg border border-border bg-surface p-4">
                    <h3 className="text-xl font-semibold text-primary-text">Computer Science</h3>
                    <p className="mt-1 text-secondary-text">
                        Object Oriented Programming, Data Structures and Algorithms, Intro to Computer Engineering,
                        Algorithms, Machine Organization and Programming, Artificial Intelligence, User Interfaces,
                        Operating Systems, Networks, Information Security
                    </p>

                    <h3 className="mt-4 text-xl font-semibold text-primary-text">Mathematics</h3>
                    <p className="mt-1 text-secondary-text">
                        Calculus, Differential Equations, Linear Algebra, Probability, Real Analysis I, Real Analysis II,
                        Abstract Algebra I, Abstract Algebra II, Combinatorics, Numerical Analysis
                    </p>
                </div>
                            
                <WaveText text={'Interests'} type={'section'} color={'default'} /> 
                            
            </div>
        </div>
    );
};

export default Body;
