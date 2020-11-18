function formatRouteTree(data) {
    const parents = data.filter(p => p.pid === 0)
    const children = data.filter(c => c.pid !== 0)
    translator(parents, children)
    
    function translator(parents, children) {
        parents.forEach(p => {
            children.forEach((c, i) => {
                if (c.pid === p.id) {
                    const temp = JSON.parse(JSON.stringify(children))
                    temp.slice(i, 1)
                    translator([c], temp)
                    if (p.children !== undefined) {
                        p.children.push(c)
                    } else {
                        p.children = [c]
                    }
                }
            })
        })
    }
    
    return parents
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
