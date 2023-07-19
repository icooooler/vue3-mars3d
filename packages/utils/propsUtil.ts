type AnyObject = {
    [key: string]: any
}

// 我传入一个对象，给我一个过滤掉值为 undefined 的属性的函数
export const filter = (obj: AnyObject) => {
    const res: AnyObject = {}
    for (const key in obj) {
        if (obj[key] !== undefined) {
            res[key] = obj[key]
        }
    }
    return res
}
