import fs from 'fs-extra'
import { XMLParser, XMLBuilder } from 'fast-xml-parser'

await fs.emptyDir('cordova/platforms/android/app/src/main/res')
await fs.copy('xml', 'cordova/platforms/android/app/src/main/res')

const xmlFile = await fs.readFile(
  'cordova/platforms/android/app/src/main/AndroidManifest.xml',
  'utf-8'
)

const options = {
  ignoreAttributes: false,
  preserveOrder: true,
  unpairedTags: ['supports-screens', 'action', 'category'],
  suppressUnpairedNode: false,
  format: true,
  indentBy: '    '
}
const parser = new XMLParser(options)

let jsonObj = parser.parse(xmlFile)
jsonObj[1].manifest[2].application[0][':@']['@_android:theme'] =
  '@style/AppTheme'
jsonObj[1].manifest.splice(1, 1)

const builder = new XMLBuilder(options)
const xmlDataStr = builder.build(jsonObj)

await fs.writeFile(
  'cordova/platforms/android/app/src/main/AndroidManifest.xml',
  xmlDataStr
)
