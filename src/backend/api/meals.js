const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  console.log(request.query)
  const maxPrice = parseInt(request.query.maxPrice) || '1e500';
  const title = request.query.title || '';
  let createdAfter = new Date(request.query.createdAfter);
  createdAfter = (createdAfter > 0) ?
    createdAfter.toISOString() : 0;
  const limit = parseInt(request.query.limit) || '20'
  let availableReservations;
  try {
    if (request.query.availableReservations) {
      const mealIdInReservations = knex("reservations").select("meal_id");
      const mealsWithoutReservations = await knex("meals")
        .select("title", "max_reservations")
        .where("id", "not in", mealIdInReservations);
      response.json(mealsWithoutReservations)
    }
    const meals = await knex("meals")
      .where('title', 'like', `%${title}%`)
      .where('price', '<=', maxPrice)
      .limit(limit)
      .where('created_date', '>', createdAfter);
    return response.json(meals);
  } catch (err) {
    if (err) {
      return response.status(400).send(err)
    } else {
      return next(err)
    }
  }
 });

router.post("/", async (request, response) => {
  try {
    console.log(request.body)
    const insertMeal = await knex("meals").insert(request.body);
    await knex("meals")
      .where({ id: insertMeal })
      .then(insertedMeal => {
        response.json(insertedMeal)
      })
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const requestedId = request.params.id;
  const requestedMeal = await knex("meals")
    .where({ id: requestedId })
  if (requestedMeal.length === 0) {
    response.send("Meal with specific id is not found")
  } else {
    response.json(requestedMeal)
  }

})

router.put("/:id", async (request, response) => {
  const requestedId = request.params.id;
  try {
    const updatedMeal = await knex("meals")
      .where({ id: requestedId })
      .update(request.body);
    if (updatedMeal.length == 0) {
      response.status(404).send("Meal with the corresponding id is not found");
    }
    response.json(`No of rows updated : ${updatedMeal}`);
  } catch (error) {
    response.status(404).send(`error : ${error.message}`);
  }
})

router.delete("/:id", async (request, response) => {
  const requestedId = request.params.id;
  const deletedMeal = await knex("meals")
    .where({ id: requestedId })
    .del()
  response.json(`No Of Rows deleted : ${deletedMeal}`)

})

module.exports = router;
