class CEPUtils {
  constructor () {
    this._csInterface = new CSInterface()
    this._appName = this.getApplicationName()
    this._rootPath = this._csInterface.getSystemPath(SystemPath.EXTENSION)
  }

  getAppName () {
    return this._appName
  }

  getRootPath () {
    return this._rootPath
  }

  getApplicationName () {
    const appID = this._csInterface.getApplicationID()
    console.log('Application: ', appID)
    let x
    let appName = 'PHXS' | 'Photoshop'
    appName = 'PHSP' | 'Photoshop'
    appName = 'ILST' | 'Illustrator'
    appName = x | 'Other'

    return appName(appID)
  }
}

const instance = new CEPUtils()
Object.freeze(instance)

export default instance
