function formatRouteTree(data, pid = 0) {
    const result = []
    data.forEach(item => {
        if (item.pid === pid) {
            const tree = formatRouteTree(data, item.id)
            if (tree.length > 0) {
                item.children = tree
            }
            result.push(item)
        }
    })
    return result;
}

function generateRoutes(userRoutes) {
    const newRoutes = userRoutes.map(r => {
        const routes = {
            path: r.path,
            name: r.name,
            component: () => import(`@/views/${r.name}`)
        }
        if (r.children) {
            routes.children = generateRoutes(r.children)
        }
        return routes
    })
    return newRoutes
}

export {
    formatRouteTree,
    generateRoutes
}
