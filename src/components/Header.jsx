import WaveText from "./WaveText";

function Header() {
    return (
        <div className="flex flex-col p-6 text-primary-text justify-center items-center">
            <div onClick={() => location.reload()}>
                <WaveText text={'Kevin Williams'} type={'title'} color={'default'}/>
            </div>
            <WaveText text={'Software Developer'} type={'section'} color={'default'}/> 
            <div className="flex gap-2">
                <WaveText text={'Mathematician'} type={'subsection'} color={'default'} />
                <WaveText text={'Educator'} type={'subsection'} color={'default'}/>
            </div>
            
        </div>
    );
};

export default Header;