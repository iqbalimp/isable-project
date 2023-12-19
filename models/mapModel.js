const mongoose = require('mongoose')

const mapSchema = mongoose.Schema(
    {
        namatempat: {
            type: String,
            required: true
        },
        alamat: {
            type: String,
            required: true
        },
        provinsi: {
            type: String,
            required: true
        },
        kota: {
            type: String,
            required: true
        },
        latitude: {
            type: String,
            required: true
        },
        longtitude: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)


const Map = mongoose.model('Map', mapSchema);

module.exports = Map;