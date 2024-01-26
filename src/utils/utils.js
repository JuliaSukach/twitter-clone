const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

export function generateOptions(start, end, field) {
    let range = Array.from({ length: end - start + 1 }, (_, index) => ({
        value: String(start + index),
        label: String(start + index)
    }))
    if (field === 'year') {
        range = range.reverse()
    }
    if (field === 'month') {
        range.forEach(opt => {
            opt.label = MONTHS[opt.label - 1]
            opt.value = MONTHS[opt.label - 1]?.slice(0,3)
        })
    }
    return range
}