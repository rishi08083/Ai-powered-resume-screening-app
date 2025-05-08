exports.getHealthController = (req, res) => {
    const response = {
        status: "success",
        message: "WORKING",
        data: {}
    };
    res.status(200).json(response);
};
