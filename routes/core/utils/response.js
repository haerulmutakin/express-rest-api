const  ResponseBody = class {
    success() {
        return {
            result: true,
            message: 'Berhasil mendapatkan data'
        }
    }

    success(data) {
        return {
            result: true,
            message: 'Berhasil mendapatkan data',
            data: data
        }
    }
}

module.exports = ResponseBody;
