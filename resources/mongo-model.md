# MongoDB schema modelization

## User
```json
{
  "firstname": "String",
  "lastname": "String",
  "gender": "String",
  "birthdate": "Date",
  "email": "String",
  "password": "String"
}
```

## Task

### Rendez-vous
```json
{
  "user": "String",         // User identifier
  "global": {               // Task information
    "title": "String",        // Title
    "description": "String",  // Description
    "type": "String",         // Wich task
    "status": "String",       // unstarted, in progress, finished 
    "Importance": "String"    // low, medium, high, urgent
  },
  "when": {
    "period": {             // Period of the task
      "from": "Date",         // Start
      "to": "Date"            // End
    }
  },
  "properties": {           // Specific properties of the task
    "who": "String",          // With who
    "where": "String",        // Where is it
  }
}
```

### Event
```json
{
  "user": "String",         // User identifier
  "global": {               // Task information
    "title": "String",        // Title
    "description": "String",  // Description
    "type": "String",         // Wich task
    "status": "String",       // unstarted, in progress, finished 
    "Importance": "String"    // low, medium, high, urgent
  },
  "when": {
    "period": {             // Period of the task
      "from": "Date",         // Start
      "to": "Date"            // End
    }
  },
  "properties": {           // Specific properties of the task
    "who": "String",          // With who
    "where": "String",        // Where is it
    "item": ["String"]        // Item to bring with        
  }
}
```

### Delivery
```json
{
  "user": "String",         // User identifier
  "global": {               // Task information
    "title": "String",        // Title
    "description": "String",  // Description
    "type": "String",         // Wich task
    "status": "String",       // unstarted, in progress, finished 
    "Importance": "String"    // low, medium, high, urgent
  },
  "when": {
    "period": {               // Period of the task
      "from": "Date",           // Start
      "to": "Date"              // End
    }
  },
  "properties": {           // Specific properties of the task
    "who": "String",          // Who deliver
    "where": "String",        // Where it'll be delliver
    "parcel": {               // Parcel informations
      "code": "String",         // Parcel number
      "link": "String"          // Link to delivery page
    }
  }
}
```

### Routine
```json
{
  "user": "String",         // User identifier
  "global": {               // Task information
    "title": "String",        // Title
    "description": "String",  // Description
    "type": "String",         // Wich task
    "status": "String",       // unstarted, in progress, finished 
    "Importance": "String"    // low, medium, high, urgent
  },
  "when": {                 // When it happend
    "month": ["String"],      // Select which month
    "week": ["String"],       // Select which week
    "day": "Mixed",            // Can be only String or Number
      //["String"]              // Select wich day of week 
      // Or
      //"Number"                // Select day number
    "hour": "Number",         // Select hour
    "minute": "Number"        // select minutes
  },
  "properties": {           // Specific properties of the task
    "regular": {              // Regular task (only one can be selected)
      "yearly": "Boolean",
      "monthly": "Boolean",
      "weekly": "Boolean",
      "dayly": "Boolean"
    },
  }
}
```

### Shopping list
```json
{
  "user": "String",         // User identifier
  "global": {               // Task information
    "title": "String",        // Title
    "description": "String",  // Description
    "type": "String",         // Wich task
    "status": "String",       // unstarted, in progress, finished 
    "Importance": "String"    // low, medium, high, urgent
  },
  "properties": {           // Specific properties of the task
    "items": [                // Items to buy
      {                         // Each item is an objectS
        "title": "String",      
        "price": "String",
        "quantity": "Number"
      }
    ]
  }
}
```