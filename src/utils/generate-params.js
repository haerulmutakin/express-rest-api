class ParamGenerator {
    generateParams(params) {
        if (params.offset && params.limit) {
            params.offset = Number(params.offset);
            params.limit = Number(params.limit);
            params.requestType = 'pagination';
        } else {
            params.requestType = 'default';
        }
        return params;
    }
}

module.exports = ParamGenerator;