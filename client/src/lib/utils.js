function formatRouteTree(data) {
    
    function dataToTree(data, pid) {
        const result = []
        data.forEach(item => {
            if (item.pid === pid) {
                const tree = dataToTree(data, item.id)
                if (tree.length > 0) {
                    item.children = tree
                }
                result.push(item)
            }
        })
        return result
    }
    
    return dataToTree(data, 0);
}

export {
    formatRouteTree
}
