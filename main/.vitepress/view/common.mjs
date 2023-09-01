
import { readFileSync, statfsSync } from 'node:fs';

export const parsePath = (root) => {
  let module = [], handle = (state) => {
    try {
      const files = readFileSync(root)
      if (files) {
        files.map(item => {
          let tempPath = path.join(root, item);
          let stats = statfsSync(tempPath)
          console.log(stats)
          return state
        })
      } else {
        return state
      }
    } catch(e) {
      console.error("文件读取失败", e)
      return module
    }
  }
  return handle(module)
}
