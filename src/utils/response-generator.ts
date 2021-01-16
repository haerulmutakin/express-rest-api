export class ResponseBody {
    detail(data: any) {
        return {
            result: true,
            data: data ? data : {}
        }
    }

    list(data: Array<any>, total: number) {
        return {
            result: true,
            count: data.length,
            total: total,
            message: 'Berhasil mendapatkan data',
            data: data
        }
    }

    success(message: string) {
        return {
            result: true,
            message: message
        }
    }

    failed(message: string) {
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

    validationError(erros: any) {
        return {
            result: false,
            message: 'Permintaan tidak valid',
            validationError: erros
        }
    }
}
