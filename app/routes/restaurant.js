import express from "express"
import cors from 'cors'
import dotenv from 'dotenv'
import applyDotenv from "../lambdas/applyDotenv.js";
import RestaurantService from "../services/restaurant.js";

const { origin } = applyDotenv(dotenv);
const corsOptions = {
    origin: origin,
    optionsSuccessStatus: 200
}
const app = express()
app.use(cors(corsOptions));

app
    .route('/')
    .get((req, res, _next) => {
        RestaurantService().getRestaurants(req, res);
    })
    .post((req, res, _next) => {
        RestaurantService().createRestaurant(req, res);
    })

app.
    route('/:id')
    .get((req, res, _next) => {
        RestaurantService().getRestaurant(req, res);
    })
    .put((req, res, _next) => {
        RestaurantService().updateRestaurant(req, res);
    })
    .delete((req, res, _next) => {
        RestaurantService().deleteRestaurant(req, res);
    })

export default app;