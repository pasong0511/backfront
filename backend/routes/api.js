const express = require("express");
const router = express.Router();
/**
 * @openapi
 * /api/hello:
 *   get:
 *     description: Welcome to swagger-jsdoc!
 *     parameters:
 *       - name: name
 *         in: query
 *         required: false
 *         schema:
 *           type: string
 *           example: test111
 *     responses:
 *       200:
 *         description: Returns a mysterious string.11111
 */
router.get("/hello", function (req, res, next) {
    const name = req.query.name || "World";
    res.json({ message: `Hello ${name}` });
});
module.exports = router;
