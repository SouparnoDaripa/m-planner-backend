define({ "api": [
  {
    "type": "post",
    "url": "/api/v1/events/create",
    "title": "API for Calendar Event creation",
    "name": "API_for_calendar_Event_creation",
    "group": "events",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Start",
            "description": "<p>Start Date and time of the event. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "End",
            "description": "<p>End Date and time of the event. (body parameters) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Title of the event. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "allDay",
            "description": "<p>Set true if the event runs throughout the day. (body parameters) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": " {\n    \"error\": false,\n    \"message\": \"event registered successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/calendarEvent.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/api/v1/events/delete",
    "title": "API for Calendar Event delete",
    "name": "API_for_calendar_Event_delete",
    "group": "events",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CalendarEventId",
            "description": "<p>CalendarEventId Id of the event to be deleted. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"event deleted successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/calendarEvent.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/api/v1/events/update",
    "title": "API for Calendar Event update",
    "name": "API_for_calendar_Event_update",
    "group": "events",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CalendarEventId",
            "description": "<p>CalendarEventId Id of the event. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "Start",
            "description": "<p>Start Date and time of the event. (body parameters) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "End",
            "description": "<p>End Date and time of the event. (body parameters) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "Title",
            "description": "<p>Title of the event. (body parameters) (optional)</p>"
          },
          {
            "group": "Parameter",
            "type": "boolean",
            "optional": false,
            "field": "allDay",
            "description": "<p>Set true if the event runs throughout the day. (body parameters) (optional)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n    \"error\": false,\n    \"message\": \"event updated successfully\",\n    \"status\": 200,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n    \"error\": true,\n    \"message\": \"Error occured\",\n    \"status\": 500,\n    \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/calendarEvent.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/api/v1/events/getAll",
    "title": "API for fetching all the events from Calendar Events",
    "name": "API_for_fetching_all_the_events_from_Calendar_Events",
    "group": "events",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n   \"message\": \"All events fetched successfully\",\n   \"status\": 200,\n   \"data\": [\n       {\n           \"id\": \"\",\n           \"start\": \"\",\n           \"end\": \"\",\n           \"title\": \"\",\n           \"allDay\" \"\"\n       },\n       {\n           \"id\": \"\",\n           \"start\": \"\",\n           \"end\": \"\",\n           \"title\": \"\",\n           \"allDay\" \"\"\n       }\n   ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/calendarEvent.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/api/v1/events/:userId/getAll",
    "title": "API for fetching all the events from Calendar Events of a user",
    "name": "API_for_fetching_all_the_events_from_Calendar_Events_of_a_User",
    "group": "events",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"error\": false,\n   \"message\": \"All events fetched successfully\",\n   \"status\": 200,\n   \"data\": [\n       {\n           \"id\": \"\",\n           \"start\": \"\",\n           \"end\": \"\",\n           \"title\": \"\",\n           \"allDay\" \"\"\n       },\n       {\n           \"id\": \"\",\n           \"start\": \"\",\n           \"end\": \"\",\n           \"title\": \"\",\n           \"allDay\" \"\"\n       }\n   ]\n   }",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/calendarEvent.js",
    "groupTitle": "events"
  },
  {
    "type": "post",
    "url": "/api/v1/users/delete",
    "title": "API for deleting user info",
    "name": "API_for_deleting_user_info",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "userId",
            "description": "<p>userId userId of the user to be deleted. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"User deleted successfully\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/getAll",
    "title": "API for fetching all normal users ( except Admin)",
    "name": "API_for_fetching_all_normal_users___except_Admin_",
    "group": "users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All users fetched sucessfully\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/getAll",
    "title": "API for fetching all the users",
    "name": "API_for_fetching_all_users",
    "group": "users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"All users fetched sucessfully\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/login",
    "title": "API for user login",
    "name": "API_for_user_login",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for the user. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"Login successful\",\n \"status\": 200,\n \"data\": {\n     \"authToken\" : \"erEWRTYHJFGyyuiyutyrtpokij.MNBFRcvhYG\",\n     \"userDetails\" : {\n         \"firstName\" : \"\",\n         \"lastName\" : \"\",\n         \"email\" : \"\",\n         \"password\" : \"\",\n         \"mobileNumber\": ,\n         \"userId\": \"\"\n     }\n }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"Error occured\",\n \"status\": 500,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "get",
    "url": "/api/v1/users/logout",
    "title": "API for user logout",
    "name": "API_for_user_logout",
    "group": "users",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"Logged out successfully\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/forgotPassword",
    "title": "API for user password forgot",
    "name": "API_for_user_password_forgot",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for the user. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"Reset link has been sent to the email. Please reset the your password using te provided link\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/resetpassword",
    "title": "API for user password reset",
    "name": "API_for_user_password_reset",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for the user. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"Password reset successfully\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  },
  {
    "type": "post",
    "url": "/api/v1/users/signup",
    "title": "API for user signup",
    "name": "API_for_user_signup",
    "group": "users",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "FirstName",
            "description": "<p>firstname for the user. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "LastName",
            "description": "<p>lastname for the user. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "email",
            "description": "<p>email for the user. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password for the user. (body parameters) (required)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "mobile",
            "description": "<p>mobile for the user. (body parameters) (required)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "object",
            "optional": false,
            "field": "myResponse",
            "description": "<p>shows error, status, message, http status code and data</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n \"error\": false,\n \"message\": \"signup successful\",\n \"status\": 200,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n \"error\": true,\n \"message\": \"Error occured\",\n \"status\": 500,\n \"data\": null\n}",
          "type": "json"
        }
      ]
    },
    "filename": "app/routes/user.js",
    "groupTitle": "users"
  }
] });
