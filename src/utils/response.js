const  ResponseBody = class {
    detail(data) {
        return {
            result: true,
            data: data ? data : {}
        }
    }

    list(data) {
        return {
            result: true,
            count: data.length,
            message: 'Berhasil mendapatkan data',
            data: data
        }
    }
}

module.exports = ResponseBody;
