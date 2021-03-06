const path = require('path')
const fs = require('fs')

module.exports = {
  id: 'vigicrues',
  store: 'memory',
  options: {
    //workersLimit: 1
  },
  tasks: [{
    id: 'vigicrues',
    type: 'http',
    options: {
      url: 'https://www.vigicrues.gouv.fr/services/vigicrues.geojson'
    }
  }],
  hooks: {
    tasks: {
      after: {
        readJson: {},
        transformJson: {
          transformPath: 'features',
          filter: { 'properties.NivSituVigiCruEnt': { $gt: 0 } }, // Filter according to alert level
          // Leaflet style
          //mapping: { 'properties.NivSituVigiCruEnt': { path: 'style.color', values: { 1: 'green', 2: 'yellow', 3: 'orange', 4: 'red' }, delete: false } }
          // Simplespec style
          mapping: { 'properties.NivSituVigiCruEnt': { path: 'properties.stroke', values: { 1: '#00FF00', 2: '#FFFF00', 3: '#FFBF00', 4: '#FF0000' }, delete: false } }
        },
        reprojectGeoJson: { from: 'EPSG:2154' },
        /* For DEBUG purpose only
        writeJsonFS: {
          hook: 'writeJson',
          store: 'fs'
        },
        */
        writeJsonS3: {
          hook: 'writeJson',
          store: 's3',
          storageOptions: {
            ACL: 'public-read'
          }
        }
      }
    },
    jobs: {
      before: {
        createStores: [{
          id: 'memory'
        }, {
          id: 'fs',
          options: {
            path: path.join(__dirname, '..', 'output')
          }
        }, {
          id: 's3',
          options: {
            client: {
              accessKeyId: process.env.S3_ACCESS_KEY,
              secretAccessKey: process.env.S3_SECRET_ACCESS_KEY
            },
            bucket: process.env.S3_BUCKET
          }
        }]
      },
      after: {
        removeStores: ['memory', 'fs', 's3']
      }
    }
  }
}
