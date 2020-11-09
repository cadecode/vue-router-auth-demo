import {getUserRoutes} from '@/services'
import {formatRouteTree} from '@/lib/utils'

export default {
    async setUserRoutes({state}) {
        const userRoutes = await getUserRoutes(state.uid)
        const payload = formatRouteTree(userRoutes)
        console.log(payload)
    }
}
