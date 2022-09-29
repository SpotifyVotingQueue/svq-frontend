export function isDebug(): boolean {
    return Boolean(JSON.parse(process.env.REACT_APP_IS_DEBUG || 'false'));
}