const  ResponseBody = class {
    detail(data) {
        return {
            result: true,
            data: data ? data : {}
        }
    }

    list(data, total) {
        return {
            result: true,
            count: data.length,
            total: total,
            message: 'Berhasil mendapatkan data',
            data: data
        }
    }

    success(message) {
        return {
            result: true,
            message: message
        }
    }

    failed(message) {
        return {
            result: false,
            message: message
        }
    }

    error() {
        return {
            result: true,
            message: 'Terjadi kesalahan pada server'
        }
    }
}

module.exports = ResponseBody;
