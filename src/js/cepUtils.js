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
    switch (appID) {
      case 'PHXS':
        return 'Photoshop'
      case 'PHSP':
        return 'Photoshop'
      case 'ILST':
        return 'Illustrator'
      default:
        return 'Other'
    }
  }
}

const instance = new CEPUtils()
Object.freeze(instance)

export default instance
