function WaveText({text, type, color}) {
    const colorVariants = {
        default: 
            `from-primary-text via-primary-text to-secondary-text 
            hover:from-primary-text hover:via-secondary-text hover:to-primary-text`,
        allthenticate: 
            `from-allthenticate-blue via-allthenticate-blue to-allthenticate-blue 
            hover:allthenticate-blue hover:via-allthenticate-blue hover:to-allthenticate-green`,
        navigators: 
            `from-nav-blue via-nav-blue to-nav-blue 
            hover:from-nav-blue hover:via-nav-blue hover:to-nav-yellow`,
    }
    const textType = {
        title: 'text-6xl font-semibold',
        section: 'text-4xl font-semibold',
        subsection: 'text-3xl font-medium'
    }
    const classString = `relative inline-block mt-2
        ${textType[type]} ${colorVariants[color]} 
        text-transparent 
        bg-gradient-to-r 
        bg-[length:200%_100%] bg-left bg-clip-text 
        transition-all duration-300 
        hover:bg-right hover:scale-105 hover:cursor-pointer items-start
    ` 
    return(
        <p className={classString}>
                {text} 
        </p>
    )
}

export default WaveText;