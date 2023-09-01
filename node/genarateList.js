const { genarateModules, publicRoot, outDir } = require("../module.js")
const fs = require("fs")
const path = require("path")

let re = /---(.*?)---/sg, out = []
const moduleRoot = getFileRoot()


genarateFile(moduleRoot)


function getFileRoot() {
  genarateModules.forEach(module => {
    const beforeRoot = publicRoot[0] ? publicRoot[0] : './',
    afterRoot = publicRoot[1] ? publicRoot[1] : '',
    root = path.join(beforeRoot, module, afterRoot)
    try {
      fs.statSync(root)
      const files = fs.readdirSync(root)
      if (files) {
        files.map(item => {
          try {
            const tempPath = path.join(root, item)
            const stats = fs.statSync(tempPath)
            if (stats.isDirectory()) {
              getFileRoot(stats)
            } else {
              const content = fs.readFileSync(tempPath)
              let s = re.exec(content)
              re.lastIndex = 0
              if (s) {
                console.log(s)
                // let docs = yaml.load(s[1])
                // docs.link = tempPath.slice(4, -3)
                // out.push(docs);
              }
            }
          } catch(e) {
            console.error(e)
          }
        })
      } else {
        console.log("无文档")
      }
    } catch(e) {
      console.error(e)
    }
  })
}

function genarateFile() {
  
}

function writeFile() {

}

