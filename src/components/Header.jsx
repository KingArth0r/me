function Header() {
    return (
        <div className="flex flex-col p-6 text-badger-red justify-center items-center">
            <div className="font-bold text-6xl mb-2 hover:cursor-pointer hover:scale-110 duration-150 hover:border-4 rounded-3xl p-2 border-badger-red hover:shadow-xl hover:bg-[radial-gradient(circle,_#1E0000_90%,_#c5050c_100%)]" onClick={() => location.reload()}>Kevin Williams</div>
            <div className="font-semibold text-2xl">Mathematician</div>
            <div className="font-semibold text-2xl">Software Developer</div>
        </div>
    );
};

export default Header;