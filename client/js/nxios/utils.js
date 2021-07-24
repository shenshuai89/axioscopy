function deepCopy(obj) {
    let target = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] !== null && typeof obj[key] === 'object') {
                target[key] = deepCopy(obj[key])
            } else {
                target[key] = obj[key]
            }
        }
    }
    return target
}

function merge(obj1, obj2) {
    let target = deepCopy(obj1)
    let source = deepCopy(obj2)
    Object.keys(source).reduce((prev, key) => {
        if(['url', 'method', 'baseUrl'].includes(key)) {
            prev[key] = source[key]
        }
        if(['headers'].includes(key)) {
            prev[key] = Object.assign(target[key], source[key]);
        }
        return prev
    }, target)
    return target;
}

export {
    deepCopy,
    merge,
};