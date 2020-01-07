const mongoose = require('mongoose')
const Schema = mongoose.Schema

module.exports = {
  rendezVous: () => {
    let rendezVousSchema = new Schema({
      user: {type: String, required: true},
      global: {
        title: {type: String, required: true},
        description: {type: String, required: true, max: 256},
        type: {type: String, required: true},
        status: {type: String, required: true},
        Importance: {type: String, required: true}
      },
      when: {
        period: {
          from: {type: Date, required: true},
          to: {type: Date, required: true}
        }
      },
      properties: {
        who: {type: String, required: true},
        where: {type: String, required: true}
      }
    })
    
    return mongoose.model('rendezVous', rendezVousSchema, 'tasks')
  },

  event: () => {
    let eventSchema = new Shema({
      user: {type: String, required: true},
      global: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        type: {type: String, required: true},
        status: {type: String, required: true},
        Importance: {type: String, required: true}
      },
      when: {
        period: {
          from: {type: Date, required: true},
          to: {type: Date, required: true}
        }
      },
      properties: {
        who: {type: String, required: true},
        where: {type: String, required: true},
        items: [String]
      }
    })

    return mongoose.model('event', eventSchema, 'tasks')
  },

  delivery: () => {
    let deliverySchema = new Shema({
      user: {type: String, required: true},
      global: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        type: {type: String, required: true},
        status: {type: String, required: true},
        Importance: {type: String, required: true}
      },
      when: {
        period: {
          from: {type: Date, required: true},
          to: {type: Date, required: true}
        }
      },
      properties: {
        who: {type: String, required: true},
        where: {type: String, required: true},
        parcel: {
          code: {type: String, required: true},
          link: {type: String, required: true}
        }
      }
    })

    return mongoose.model('delivery', deliverySchema, 'tasks')
  },

  shoppingList: () => {
    let shoppingListSchema = new Schema ({
      user: {type: String, required: true},
      global: {
        title: {type: String, required: true},
        description: {type: String, required: true},
        type: {type: String, required: true},
        status: {type: String, required: true},
        Importance: {type: String, required: true}
      },
      properties: {
        items: [{
          title: {type: String, required: true},
          price: {type: String, required: true},
          quantity: {type: Number, required: true}
        }]
      }
    })

    return mongoose.model('shoppingList', shoppingListSchema, 'tasks')
  }
}
