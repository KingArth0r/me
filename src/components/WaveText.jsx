function WaveText({text, size, weight}) {
    const classString = `relative 
        inline-block 
        text-${size}xl font-${weight} mb-4
        text-transparent 
        bg-gradient-to-r 
        from-primary-text via-primary-text to-primary-text 
        bg-[length:200%_100%] bg-left bg-clip-text 
        transition-all duration-300 
        hover:from-badger-red hover:via-badger-red hover:to-primary-text 
        hover:bg-right hover:scale-105 hover:cursor-pointer items-start
    ` 
    return(
        <p className={classString}>
                {text} 
        </p>
    )
}

export default WaveText;