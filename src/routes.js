
const pg = require("pg")

const dbURL = process.env.DATABASE_URL
console.log(dbURL.length);

const client = new pg.Client({
    connectionString: dbURL,
    ssl: true
});

client.connect();

console.log("routes.js ran");

const setupRoutes = (app) => {
    app.get("/quotes", async (req, res) => {
        const dbResult = await client.query("select * from tv_quotes")

        res.json(dbResult.rows)
    });

app.post("/quotes", async (req, res) => {
    console.log("bukola say POST /quote");
    const newQuote = req.body;

    const safeQuote = {
        text: newQuote.text,
        author: newQuote.author,
        showName: newQuote.showName
    }

    const dbResult = await client.query(
        "INSERT INTO tv_quotes (text, author, showName) VALUES ($1, $2) RETURNING *",
        [safeQuote.text, safeQuote.author, safeQuote.showName]
    );

    if (dbResult.rowCount !== 1) {
        res.status(500).json({error: "error occured. There are more than 1 row"})
        return;
    }
    res.json(dbResult.rows[0])
})
}

module.exports = {setupRoutes}
