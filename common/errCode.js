module.exports = {
  internalServerError: 500,
  accepted: 201,
  badRequest: 400,
  unauthorized: 401,
  okay: 200,
  notFound: 404,
  failed: res => {
    res
      .status(500)
      .json({ message: "There is something wrong with the server" });
  }
};
