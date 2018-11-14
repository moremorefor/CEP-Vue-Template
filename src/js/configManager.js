import JSXInterface from './jsxinterface'
import cepUtils from './cepUtils'
const jsxInterface = JSXInterface.getInstance()

class ConfigManager {
  constructor () {
    console.log('cepUtils.getRootPath(): ', cepUtils.getRootPath())
    console.log('cepUtils.getAppName(): ', cepUtils.getAppName())
    this._filePath =
      cepUtils.getRootPath() + '/' + cepUtils.getAppName() + '.json'
  }

  filePath () {
    return this._filePath
  }

  load () {
    return jsxInterface.evaluateJSX('readFile', { path: this._filePath })
  }

  write (payload) {
    const json = JSON.stringify(payload, null, '\t')
    const args = { path: this._filePath, content: json }

    return jsxInterface.evaluateJSX('writeFile', args)
  }
}

const instance = new ConfigManager()
Object.freeze(instance)

export default instance
