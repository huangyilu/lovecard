import db from 'cloud/database'
import curry from 'lodash/fp/curry'
import wx from 'wx'

let api = {}

const post = curry((dbName, fn) => {
  console.log(' post ', wx.cloud)
  if (wx.cloud) {
    // fn(dbName)
    db.collection('bgs')
  }
})
// collection()
const collectionPost = post('', () => {})

api.getCardBgUrls = collectionPost('bgs')

export default api
