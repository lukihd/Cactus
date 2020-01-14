const Task = require('../../schema/tasks')
const RendezVous = Task.rendezVous()

module.exports = {
  getAll: async () => {
    return await RendezVous.find({})
  },

  getOne: async (title) => {
    return await RendezVous.findOne({global: {title: title}})
  },

  create: async (params) => {
    return await new RendezVous({
      user: params.email,
      global: {
        title: params.title,
        description: params.description,
        type: params.type,
        status: params.status,
        importance: params.importance
      },
      when: {
        period: {
          from: params.from,
          to: params.to
        }
      },
      properties: {
        who: params.who,
        where: params.where
      }
    }).save()
  },

  update: async (params) => {

  },

  delete: async (id) => {
    return await RendezVous.findByIdAndDelete({_id: id})
  }
}