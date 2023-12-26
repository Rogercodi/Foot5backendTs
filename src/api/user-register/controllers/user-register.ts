/**
 * user-register controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::user-register.user-register', 
  ({ strapi }) => ({
    async create(ctx) {
        const { name, email } = ctx.request.body;
       

        ctx.body = 'User created successfully!';
    }
    })
);
