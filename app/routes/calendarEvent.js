const appConfig = require('../../config/appConfig')
const calendarEventController = require('./../controllers/calendarEventController'); 
const auth = require('../middlewares/authHandler');

let setRouter = (app) => {
    let baseUrl = `${appConfig.apiVersion}/events`;
    //console.log(`${baseUrl}/signup`);
    app.post(`${baseUrl}/create` , auth.isAuthenticated, calendarEventController.createCalendarEvent);

    /**
     * @api {post} /api/v1/events/create API for Calendar Event creation
     * @apiName API for calendar Event creation
     * @apiGroup events
     * @apiVersion 1.0.0
     * 
     * @apiParam {Date} Start Start Date and time of the event. (body parameters) (required)
     * @apiParam {Date} End End Date and time of the event. (body parameters) (optional)
     * @apiParam {String} Title Title of the event. (body parameters) (required)
     * @apiParam {boolean} allDay Set true if the event runs throughout the day. (body parameters) (optional)
     * 
     * @apiSuccess {object} myResponse shows error, status, message, http status code and data
     * 
     * @apiSuccessExample {json} Success-Response:
         {
            "error": false,
            "message": "event registered successfully",
            "status": 200,
            "data": null
        }
        * @apiErrorExample {json} Error-Response:
        {
            "error": true,
            "message": "Error occured",
            "status": 500,
            "data": null
        }
        */

    app.post(`${baseUrl}/update` , auth.isAuthenticated, calendarEventController.updateCalendarEvent);

    /**
    * @api {post} /api/v1/events/update API for Calendar Event update
    * @apiName API for calendar Event update
    * @apiGroup events
    * @apiVersion 1.0.0
    * 
    * @apiParam {String} CalendarEventId CalendarEventId Id of the event. (body parameters) (required)
    * @apiParam {Date} Start Start Date and time of the event. (body parameters) (optional)
    * @apiParam {Date} End End Date and time of the event. (body parameters) (optional)
    * @apiParam {String} Title Title of the event. (body parameters) (optional)
    * @apiParam {boolean} allDay Set true if the event runs throughout the day. (body parameters) (optional)
    * 
    * @apiSuccess {object} myResponse shows error, status, message, http status code and data
    * 
    * @apiSuccessExample {json} Success-Response:
        {
        "error": false,
        "message": "event updated successfully",
        "status": 200,
        "data": null
    }
    * @apiErrorExample {json} Error-Response:
    {
        "error": true,
        "message": "Error occured",
        "status": 500,
        "data": null
    }
    */

   app.post(`${baseUrl}/delete` , auth.isAuthenticated, calendarEventController.deleteCalendarEvent);

   /**
   * @api {post} /api/v1/events/delete API for Calendar Event delete
   * @apiName API for calendar Event delete
   * @apiGroup events
   * @apiVersion 1.0.0
   * 
   * @apiParam {String} CalendarEventId CalendarEventId Id of the event to be deleted. (body parameters) (required)
   * 
   * @apiSuccess {object} myResponse shows error, status, message, http status code and data
   * 
   * @apiSuccessExample {json} Success-Response:
       {
       "error": false,
       "message": "event deleted successfully",
       "status": 200,
       "data": null
   }
   * @apiErrorExample {json} Error-Response:
   {
       "error": true,
       "message": "Error occured",
       "status": 500,
       "data": null
   }
   */
    
    app.get(`${baseUrl}/getAll` , auth.isAuthenticated, calendarEventController.fetchAllEvents);

    /**
     * @api {post} /api/v1/events/getAll API for fetching all the events from Calendar Events
     * @apiName API for fetching all the events from Calendar Events
     * @apiGroup events
     * @apiVersion 1.0.0
     * 
     * @apiSuccess {object} myResponse shows error, status, message, http status code and data
     * 
     * @apiSuccessExample {json} Success-Response:
     {
         "error": false,
        "message": "All events fetched successfully",
        "status": 200,
        "data": [
            {
                "id": "",
                "start": "",
                "end": "",
                "title": "",
                "allDay" ""
            },
            {
                "id": "",
                "start": "",
                "end": "",
                "title": "",
                "allDay" ""
            }
        ]
        }
    */

   app.get(`${baseUrl}/:userId/getAll` , auth.isAuthenticated, calendarEventController.fetchEventsByUserId);

   /**
    * @api {post} /api/v1/events/:userId/getAll API for fetching all the events from Calendar Events of a user
    * @apiName API for fetching all the events from Calendar Events of a User
    * @apiGroup events
    * @apiVersion 1.0.0
    * 
    * @apiSuccess {object} myResponse shows error, status, message, http status code and data
    * 
    * @apiSuccessExample {json} Success-Response:
    {
        "error": false,
       "message": "All events fetched successfully",
       "status": 200,
       "data": [
           {
               "id": "",
               "start": "",
               "end": "",
               "title": "",
               "allDay" ""
           },
           {
               "id": "",
               "start": "",
               "end": "",
               "title": "",
               "allDay" ""
           }
       ]
       }
   */
  
}

module.exports = {
    setRouter : setRouter
}