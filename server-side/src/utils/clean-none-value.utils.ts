/**
 * @description 清理掉没用的参数
 * @param entity
 */
export function cleanNoneValue(entity: any) {
    if (typeof entity === 'object') {
        for (const i in entity) {
            if (entity.hasOwnProperty(i)) {
                const value = entity[i]
                if (value === '' || value === null || value === undefined) {
                    delete entity[i]
                }
            }
        }
    }
}
