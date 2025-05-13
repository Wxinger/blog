const { genarateModules, publicRoot, outDir } = require("../module.js")
const fs = require("fs")
const path = require("path")
const yaml = require("js-yaml")

let re = /---(.*?)---/sg, store = {}
getFileRoot()

function getFileRoot() {
  genarateModules.forEach(module => {
    const beforeRoot = publicRoot[0] ? publicRoot[0] : './',
    afterRoot = publicRoot[1] ? publicRoot[1] : '',
    root = path.join(beforeRoot, module, afterRoot)
    try {
      fs.statSync(root)
      store[module] = []
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
                let docs = yaml.load(s[1])
                docs.link = tempPath.slice(4, -3)
                store[module].push(docs)
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
  genarateFile(store)
}

function genarateFile(store) {
  try {
    for (let key in store) {
      const item = store[key]
      const content = JSON.stringify(item)
      const fileRoot = path.join(outDir, key + ".json")
      fs.writeFile(fileRoot, content, (error) => {
        if (error) {
          console.error(error)
        } else {
          console.log(key + "文件写入成功")
        }
      })
    }
  } catch(e) {}
}


