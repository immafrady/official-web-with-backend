export function checkIsProd(): boolean {
    return process.env.NODE_ENV === 'production'
}
