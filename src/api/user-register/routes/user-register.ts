export default {
    routes: [
        {
            method: 'POST',
            path: '/user-register',
            handler: 'user-register.create',
            config: {
                policies: [],
                auth: false
            }
        }
    ]
}