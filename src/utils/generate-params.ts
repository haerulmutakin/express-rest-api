export class ParamGenerator {
    public generateParams(query: any) {
        const params: any = {};
        for (const key in query) {
            if (Object.prototype.hasOwnProperty.call(query, key)) {
                if (key !== 'limit' && key !== 'offset') {
                    const element = query[key];
                    params[key] = element;
                    delete(query[key]);
                }
            }
        }
        query.params = params;
        return query;
    }
}