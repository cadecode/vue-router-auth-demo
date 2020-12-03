import {getUserRoutes} from '@/services'
import {formatRouteTree} from '@/lib/utils'

export default {
    async setUserRoutes({commit, state}) {
        const userRoutes = await getUserRoutes(state.uid)
        const payload = formatRouteTree(userRoutes)
        commit('setUserRoutes', payload)
        commit('setAuth', true)
    }
}
