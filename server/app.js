const express = require("express");
require("dotenv").config();
const app = express();
const { User, Game } = require("./db/models")

app.use(express.json());

app.get("/", async (req, res) => {
    const allGames = await Game.findAll({
        attributes: ['name', 'category', 'description', 'numOfPlayers'],
        include: {
            model: User,
            attributes: ['username']
        }
    })

    res.json(allGames)
})

app.get("/:gameId", async (req, res) => {
    const oneGame = await Game.findByPk(req.params.gameId, {
        attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'userId']},
        include: {
            model: User,
            attributes: ['username']
        }
    })

    if (!oneGame) {
        return res.json({
            message: "ALERT! Game does not exist"
        })
    }

    res.json(oneGame)
})

app.post('/new', async (req, res) => {
    const {name, category, description, numOfPlayers, authorUsername} = req.body

    if (!name || !category || !numOfPlayers || !authorUsername ) {
        return res.json({
            message: "ALERT! New game must have name, category, numOfPlayer, and authorUsername"
        })
    }

    const findAuthor = await User.findOne({where: {
        username: authorUsername
    }})

    const makingGame = {
        name, category, description, numOfPlayers, userId: findAuthor.id
    }

    const newGame = await Game.create(makingGame)

    res.json(newGame)

})

const port = process.env.PORT;
app.listen(port, () => console.log(`Listening on port ${process.env.PORT}...`));
