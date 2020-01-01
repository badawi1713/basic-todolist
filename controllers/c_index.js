const dbConnection = require("../utils/mysql/connection");

exports.getIndexPage = (req, res, next) => {
    dbConnection.query("SELECT * FROM todolist ORDER BY date ASC", (err, data) => {
        res.render("index", {
            pageTitle: "To-Do-List",
            data: data
        });
    });
};

exports.postListItem = (req, res, next) => {
    const title = req.body.title;
    const dateObject = new Date().toISOString().slice(0, 10);
    const date = dateObject.toString();
    dbConnection.query(
        "INSERT INTO todolist SET?", {
            title,
            date
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("back");
        }
    );
};

exports.editListItem = (req, res, next) => {
    const id = req.body.id;
    const title = req.body.title;
    const dateObject = new Date().toISOString().slice(0, 10);
    const date = dateObject.toString();
    const updateQuery = `UPDATE todolist SET title=?, date=? WHERE id=?`;
    const data = [title, date, id];
    dbConnection.query(updateQuery, data,
        (err, result) => {
            if (err) throw err;
            res.redirect("back");
            console.log("Item is updated");
        }
    );
};

exports.deleteListItem = (req, res, next) => {
    const id = req.body.id;
    dbConnection.query(
        "DELETE FROM todolist WHERE ?", {
            id
        },
        (err, result) => {
            if (err) throw err;
            res.redirect("back");
            console.log("Item is deleted");
        }
    );
};