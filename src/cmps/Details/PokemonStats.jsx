
const MAX_EV = 31;
const MAC_IV = 63;
const BENEFICIAL_NATURE = 1.1;
const HARMFUL_NATURE = 0.9;
export const PokemonStats = ({stats}) => {
    return (<div className="flex flex-col gap-4 p-4">
        {stats.map((stat) => {
            if(stat.stat.name === 'hp'){
                const min = Math.floor((2 * stat.base_stat + 110));
                const max = Math.ceil((2 * stat.base_stat + MAC_IV + MAX_EV + 110));
                const gradientStop = Math.floor(((stat.base_stat) / (max - min)) * 100) - 2;
                const gradient = `linear-gradient(90deg, rgba(0,247,20,1) 0%, rgba(0,247,20,1) ${gradientStop}%, rgba(58,124,138,1) ${gradientStop+2}%)`;
                return (
                    <div key={stat.stat.name} className="flex gap-4">
                        <span className="font-bold min-w-32">{stat.stat.name}</span>
                        <span className="rounded-md flex flex-row justify-between items-center px-2 text-xs shadow"
                            style={{width:`${max}px`, background:gradient}} >
                            <span style={{width: `${stat.base_stat}px`}}>{min}</span>
                            <span className="font-bold">{min + stat.base_stat}</span>
                            <span>{max}</span>
                        </span>
                    </div>
                )
            } else {
                const min = Math.floor((2 * stat.base_stat + 5) * HARMFUL_NATURE);
                const max = Math.ceil((2 * stat.base_stat + MAC_IV + MAX_EV + 5) * BENEFICIAL_NATURE);
                const gradientStop = Math.floor(((stat.base_stat) / (max - min)) * 100) - 2;
                const gradient = `linear-gradient(90deg, rgba(0,247,20,1) 0%, rgba(0,247,20,1) ${gradientStop}%, rgba(58,124,138,1) ${gradientStop+2}%)`;
                return (
                    <div key={stat.stat.name} className="flex gap-4">
                        <span className="font-bold min-w-32">{stat.stat.name}</span>
                        <span className="rounded-md flex flex-row justify-between items-center px-2 text-xs shadow"
                            style={{width:`${max}px`, background:gradient}} >
                            <span style={{width: `${stat.base_stat}px`}}>{min}</span>
                            <span className="font-bold">{min + stat.base_stat}</span>
                            <span>{max}</span>
                        </span>
                    </div>
                )
            }
        })
        }
    </div>)
}