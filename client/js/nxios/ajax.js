export default function (configs) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve({
                    statusCode: xhr.statusCode,
                    msg: xhr.statusText,
                    data: xhr.responseText
                })
            }
        };
        xhr.open(configs.method, configs.baseUrl + configs.url, true);
        let headers = configs.headers
        for (let k in headers) {
            xhr.setRequestHeader(k, headers[k])
        }

        xhr.send()

    })
}