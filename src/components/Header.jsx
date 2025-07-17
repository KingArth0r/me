import WaveText from "./WaveText";

function Header() {
    return (
        <div className="flex flex-col p-6 text-primary-text justify-center items-center">
            <div onClick={() => location.reload()}>
                <WaveText text={'Kevin Williams'} size={5} weight={'semibold'}/>
            </div>
            <WaveText text={'Software Developer'} size={3} weight={'semibold'}/>
            <div className="flex">
                <WaveText text={'Mathematician'} size={2} weight={'medium'}/>
                <WaveText text={'Educator'} size={2} weight={'medium'}/>
            </div>
            
        </div>
    );
};

export default Header;