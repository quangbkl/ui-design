export const normalizeNumber = (number) => {
    if (!number) return null;
    const k = number / 1000;
    if (k < 1000) {
        return `${Math.round(k*10)/10}k`;
    }
    const m = k / 1000;
    if (m < 1000) {
        return `${Math.round(m*10)/10}m`;
    }
    const b = m / 1000;
    return `${Math.round(b*10)/10}b`;
}
