import { STAT_COLORS, STAT_LABELS } from "../constants/types"

const StatBar = ({ name, value }) => {
    const percentage = Math.round((value / 255) * 100)

    const color = STAT_COLORS[name] || "#94a3b8"

    const label = STAT_LABELS[name] || name

    return (
        <div className="flex items-center gap-3 mb-2">

            <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide w-16 shrink-0">
                {label}
            </span>

            <span className="text-xs font-bold text-slate-700 w-7 text-right shrink-0 font-mono">
                {value}
            </span>


            <div className="flex-1 h-2 bg-amber-100 rounded-full overflow-hidden">
                <div
                    className="h-full rounded-full transition-all duration-700 ease-out"
                    style={{
                        width: `${percentage}%`,
                        backgroundColor: color,
                    }}
                />
            </div>

        </div>
    )
}

export default StatBar