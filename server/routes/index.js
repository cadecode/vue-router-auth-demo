const router = require('koa-router')()

const users = require('../data/user')
const routes = require('../data/route')

router.post('/user_router_auth', async (ctx, next) => {
    const {uid} = ctx.request.body
    
    if (uid) {
        const userAuthRoutes = []
        const userInfo = users.find(user => user.id === Number(uid))
        userInfo.auth.map(rid => {
            routes.map(route => {
                if (route.id === rid) {
                    userAuthRoutes.push(route)
                }
            })
        })
        ctx.body = userAuthRoutes
    } else {
        next()
    }
})

module.exports = router
