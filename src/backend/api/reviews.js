const express = require("express");
const router = express.Router();
const knex = require("../database");

router.get("/", async (request, response) => {
  try {
    const allReviews = await knex("reviews").select("*");
    response.json(allReviews);
  } catch (error) {
    throw error;
  }
});

router.post("/", async (request, response) => {
  try {
    console.log(request.body)
    const insertReview = await knex("reviews").insert(request.body);
    await knex("reviews")
      .where({ id: insertReview })
      .then(insertedReviews => {
        response.json(insertedReviews)
      })
  } catch (error) {
    throw error;
  }
});

router.get("/:id", async (request, response) => {
  const requestedId = request.params.id;
  const requestedReview = await knex("reviews")
    .where({ id: requestedId })
  if (requestedReview.length === 0) {
    response.send("Meal with specific id is not found")
  } else {
    response.json(requestedReview)
  }

})

router.put("/:id", async (request, response) => {
  const requestedId = request.params.id;
  try {
    const updatedReview = await knex("reviews")
      .where({ id: requestedId })
      .update(request.body);
    if (updatedReview.length == 0) {
      response.status(404).send("Meal with the corresponding id is not found");
    }
    response.json(`No of rows updated : ${updatedReview}`);
  } catch (error) {
    response.status(404).send(`error : ${error.message}`);
  }
})

router.delete("/:id", async (request, response) => {
  const requestedId = request.params.id;
  const deletedMeal = await knex("reviews")
    .where({ id: requestedId })
    .del()
  response.json(`No Of Rows deleted : ${deletedMeal}`)

})









module.exports = router;