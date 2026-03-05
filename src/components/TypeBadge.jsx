import { TYPE_STYLES } from "../constants/types"

const TypeBadge = ({ type }) => {
    const styles = TYPE_STYLES[type] || TYPE_STYLES.normal

    return (
        <span
            className={`
        inline-flex items-center gap-1
        px-3 py-1 rounded-full
        text-xs font-bold uppercase tracking-wide
        border
        ${styles.bg}
        ${styles.text}
        ${styles.border}
      `}
        >
            <span>{styles.emoji}</span>
            <span>{type}</span>
        </span>
    )
}

export default TypeBadge