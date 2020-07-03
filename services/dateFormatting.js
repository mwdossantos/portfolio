export function StringDayMonth(date) {
    if (!date) return ''
    const d = new Date(date)
    const day = d.getDate()
    const month = d.getMonth()
    return `${day}.${month + 1}`
}

export function StringTime(date) {
    if (!date) return ''
    const d = new Date(date)
    const hour = d.getHours()
    const minute = d.getMinutes()
    return `${hour}.${minute < 10 ? minute.toString() + '0' : minute}`
}
