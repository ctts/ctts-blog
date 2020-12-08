const fs = require('fs')
const path = require('path')

const utils = {
    genSidebar: function (title, children = [''], collapsable = true, sidebarDepth = 3) {
        var arr = new Array();
        arr.push({
            title,
            collapsable,
            sidebarDepth,
            children
        })
        return arr;
    },
    getFirstFile(dirPath) {
        const realPath = path.join(process.cwd(), '/docs', dirPath)
        const dir = fs.readdirSync(realPath)
        dir.reverse()
        return dir.length > 0 ? path.join(dirPath, dir[0]) : dirPath
    }
}

module.exports = utils