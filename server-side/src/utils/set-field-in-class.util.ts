/**
 * @description 设置目标
 * @param target
 * @param source
 */
export function setFieldInClass<T>(target: T, source: Partial<T>) {
    if (target && source) {
        for (const i in source) {
            if (source.hasOwnProperty(i)) {
                target[i] = source[i]
            }
        }
    }
}
