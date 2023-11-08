function handleErrors(error, req, res, next) {
    let status = 500;
    let message = "Internal Server Error";
    console.log(error);

    if (
        error.name === "SequelizeValidationError" ||
        error.name === "SequelizeUniqueConstraintError"
    ) {
        status = 400;
        message = error.errors[0].message;
    } else if (error.name === "Invalid input login") {
        status = 401;
        message = "Invalid email or password";
    } else if (
        error.name === "unauthenticated" ||
        error.name === "JsonWebTokenError"
    ) {
        status = 401;
        message = "Invalid token";
    } else if (error.name === "Invalid delete" || 
        error.name === "Invalid edit") {
        status = 404;
        message = "not found";
    } else if (error.name === "not_found") {
        status = 404;
        message = `Post with id ${error.id} not found`;
    } else if (error.name === "forbidden") {
        status = 403;
        message = "Forbidden";
    }

    res.status(status).json({ message });
}

module.exports = handleErrors;
