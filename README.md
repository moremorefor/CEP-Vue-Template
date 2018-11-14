# CEP-Vue-Template

CEP Extention with Vue.js template.

## Support Application

* Photoshop

#### CEP version

* CEP 6.1

#### Tested environment

* macOS Sierra
* Photoshop CC2018

## Build

1.  Install packages.

        $ yarn

2.  Edit `setup/config.json`.

    * "userName" is home directory name

3.  Build & Run

        $ yarn start

4.  Restart Adobe applications

5.  Open [http://localhost:8088/](http://localhost:8088/) for debug.

## Create ZXP package

1.  Download ZXPSignCmd

    * [Adobe Labs](https://labs.adobe.com/downloads/extensionbuilder3.html)

2.  Create p12 file

        $ ZXPSignCmd -selfSignedCert <countryCode> <stateOrProvinve> <organization> <commonName> <password> <outputPath.p12>

3.  Packaging

        $ ZXPSignCmd -sign <inputDir> <outputZXP> <p12> <p12Password>

## LICENSE

CEP-Vue-Template is available under the MIT license. See the LICENSE file for more info.
