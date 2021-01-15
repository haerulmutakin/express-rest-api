export class ParamGenerator {
    public generateParams(params: any) {
        if (params.offset && params.limit) {
            params.offset = Number(params.offset);
            params.limit = Number(params.limit);
            params.pagination = true;
        } else {
            params.pagination = false;
        }
        return params;
    }
}