const Task = require('../schema/tasks')
// Type of tasks
const Event = Task.event()
const Delivery = Task.delivery()
const Routine = Task.routine()
const ShoppingList = Task.shoppingList()

module.exports = {
  getAll: async () => {
    return await {
      rendezVous: RendezVous.find({}),
      event: Event.find({}),
      delivery: Delivery.find({}),
      routine: Routine.find({}),
      shoppingList: ShoppingList.find({}) 
    }
  },

  // create: async (params) => {
  //   switch(params.type) {
  //     case "rendezVous":
        
  //     case "event":
  //       return await new Event({
  //         user: params.email,
  //         global: {
  //           title: params.title,
  //           description: params.description,
  //           type: params.type,
  //           status: params.status,
  //           importance: params.importance
  //         },
  //         when: {
  //           period: {
  //             from: params.from,
  //             to: params.to
  //           }
  //         },
  //         properties: {
  //           who: params.who,
  //           where: params.where,
  //           items: params.items
  //         }
  //       }).save()
  //     case "delivery":
  //       return await new Delivery({
  //         user: params.email,
  //         global: {
  //           title: params.title,
  //           description: params.description,
  //           type: params.type,
  //           status: params.status,
  //           importance: params.importance
  //         },
  //         when: {
  //           period: {
  //             from: params.from,
  //             to: params.to
  //           }
  //         },
  //         properties: {
  //           who: params.who,
  //           where: params.where,
  //           parcel: {
  //             code: params.code,
  //             link: params.link
  //           }
  //         }
  //       }).save()
  //     case "routine":
  //       return await new Routine({
  //         user: params.email,
  //         global: {
  //           title: params.title,
  //           description: params.description,
  //           type: params.type,
  //           status: params.status,
  //           importance: params.importance
  //         },
  //         when: {
  //           month: params.month,
  //           week: params.week,
  //           day: params.day,
  //           hour: params.hour,
  //           minute: params.minute
  //         },
  //         properties: {
  //           regular: {
  //             yearly: params.yearly,
  //             monthly: params.monthly,
  //             weekly: params.weekly,
  //             dayly: params.dayly,
  //           }
  //         }
  //       }).save()
  //     case "shoppingList":
  //       return await new ShoppingList({
  //         user: params.email,
  //         global: {
  //           title: params.title,
  //           description: params.description,
  //           type: params.type,
  //           status: params.status,
  //           importance: params.importance
  //         },
  //         properties: {
  //           items: params.items
  //         }
  //       }).save()
  //   }
  // },


}