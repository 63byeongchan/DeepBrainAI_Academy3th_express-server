import db from "../models/index.js";

export default function RestaurantService() {
    const Restaurant = db.Restaurant;

    return {
        getRestaurants(req, res) {
            Restaurant.find()
                .limit(10)
                .sort([["_id", -1]])
                .exec((err, restaurants) => {
                    if (err) {
                        res.status(500).json({ message: err });
                        console.log("Get fail Restaurant list");
                    } else {
                        res.status(200).json(restaurants);
                    }
                });
        },
        createRestaurant(req, res) {
            const data = req.body;
            new Restaurant(data).save((err) => {
                if (err) {
                    res.status(500).json({ message: err });
                    console.log("Create fail Restaurant");
                    return;
                } else {
                    res.status(200).json({ ok: "ok" });
                }
            });
        },
        getRestaurant(req, res) {
            const { id } = req.params;
            Restaurant.findById(id).exec((err, restaurant) => {
                if (err) {
                    res.status(500).json({ message: err });
                    console.log("Get fail Restaurant");
                } else {
                    res.status(200).json(restaurant);
                }
            });
        },
        updateRestaurant(req, res) {
            const { id } = req.params;
            Restaurant.findByIdAndUpdate(id, { ...req.body }, (err) => {
                if (err) {
                    res.status(500).json({ message: err });
                    console.log("Update fail Restaurant");
                    return;
                } else {
                    res.status(200).json({ ok: "ok" });
                }
            });
        },
        deleteRestaurant(req, res) {
            const { id } = req.params;
            Restaurant.findByIdAndDelete(id, (err) => {
                if (err) {
                    res.status(500).json({ message: err });
                    console.log("Delete fail Restaurant");
                    return;
                } else {
                    res.status(200).json({ ok: "ok" });
                }
            });
        },
    };
}
