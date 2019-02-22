import wx from 'wx'
import curry from 'lodash/fp/curry'

// const db = wx.cloud.database()
const db = wx.cloud.database({
  env: 'atest-cdea75'
})

const collection = curry(async dbName => {
  // let res = await db.collection(dbName).get()
  let res = await new Promise((resolve, reject) => {
    db.collection(dbName).get({ success: resolve, fail: reject })
  })
  let data = res.data
  // console.log(' collection res ', res)
  return data
})

const collectionBgs = collection('bgs')

export default {
  collection,
  collectionBgs
}
