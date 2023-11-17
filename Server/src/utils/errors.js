module.exports = (res, error) => {
    const { response } = error;

    if (response){
        const { status, data } = response;
        const statusCode = status || 404;
        const errorMessage = data.error || "This recipe does not exist";
        if (statusCode===404) {
            return res.status(204).send(errorMessage)
        }
        
        res.status(statusCode).send(errorMessage)
    } else {
        res.status(500).send('Internal Server Error')
    }
}