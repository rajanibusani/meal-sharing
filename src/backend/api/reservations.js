const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
    try{
    const allReservations = await knex("reservations").select('*');
    response.json(allReservations);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
    try {
      console.log(request.body)
      const insertReservation = await knex("reservations").insert(request.body);
      await knex("reservations")
          .where({id : insertReservation})
          .then(insertedReservation=>{
              response.json(insertedReservation)})        
    } catch (error) {
      throw error;
    }
  });
  
  router.get("/:id", async (request, response)=>{
    const requestedId = request.params.id;
    const requestedReservation = await knex("reservations")
    .where({id : requestedId})
    if(requestedReservation.length===0){
      response.send("Meal with specific id is not found")
    }else{
      response.json(requestedReservation)
    }
   
  })
  
  router.put("/:id", async (request, response)=>{
    const requestedId =  request.params.id;
    try{
        const updatedReservation = await knex("reservations")
           .where({ id:requestedId })
           .update(request.body);
          if (updatedReservation.length == 0) {
            response.status(404).send("Meal with the corresponding id is not found");
          }
          response.json(`No of rows updated : ${updatedReservation}`);
        } catch (error) {
          response.status(404).send(`error : ${error.message}`);
        }
  })
  
  router.delete("/:id", async (request, response)=>{
    const requestedId = request.params.id;  
    const deletedReservation = await knex("meals")
    .where({id : requestedId})
    .del()
    response.json(`No Of Rows deleted : ${deletedReservation}`)
  
  })
  






module.exports = router;