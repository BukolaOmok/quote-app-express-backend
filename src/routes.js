import pg from "pg";

const dbURL = process.env.DATABASE_URL;

const client = new pg.Client({
    connectionString: dbURL,
    ssl: true,
});

client.connect();

console.log("routes.js ran");

const setupRoutes = (app) => {
    app.get("/quotes", async (req, res) => {
        const dbResult = await client.query("select * from tv_quotes");

        res.json(dbResult.rows);
    });

    app.post("/quotes", async (req, res) => {
        console.log("bukola say POST /quote");
        const newQuote = req.body;

        const safeQuote = {
            text: newQuote.text,
            author: newQuote.author,
            show: newQuote.show,
        };

        const dbResult = await client.query(
            "INSERT INTO tv_quotes (text, author, show) VALUES ($1, $2, $3) RETURNING *",
            [safeQuote.text, safeQuote.author, safeQuote.show]
        );

        if (dbResult.rowCount !== 1) {
            res.status(500).json({
                error: "error occured. There are more than 1 row",
            });
            return;
        }
        res.json(dbResult.rows[0]);
    });
};

export { setupRoutes };
