import {getUserRoutes} from '@/services'
import {formatRouteTree, generateRoutes} from '@/lib/utils'

export default {
    async setUserRoutes({commit, state}) {
        const userRoutes = await getUserRoutes(state.uid)
        const payload = formatRouteTree(userRoutes)
        console.log(generateRoutes(payload))
        commit('setUserRoutes', payload)
        commit('setAuth', true)
    }
}
