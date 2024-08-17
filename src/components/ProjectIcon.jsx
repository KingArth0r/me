

function ProjectIcon({title, image, description, onClick}) {
    return (
        <div className={`
        flex flex-col 
        items-center justify-center 
        border-4 border-navYellow-500 rounded-3xl 
        w-64 h-64 
        transform transition-transform duration-200 hover:scale-110 bg-red-1000 text-badger-red border-badger-red
        hover:cursor-pointer
        hover:shadow-md
        `}
        onClick={onClick}
        >
            <h1 className={`text-3xl font-semibold py-2`}>{title}</h1>
            <img className="w-40 h-40 rounded-lg" src={image} alt={title}></img>
            <p className="font-medium py-2">{description}</p>
        </div>
    );
};

export default ProjectIcon;