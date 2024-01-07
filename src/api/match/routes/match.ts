export default {
    routes: [
        {
            method: 'GET',
            path: '/matches',
            handler: 'match.findAll',
            config: {
                policies: [],
                auth: false
            }
        }
    ]
}

