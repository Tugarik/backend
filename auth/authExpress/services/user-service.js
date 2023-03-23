export const protectedSignIn = (req, res) => {
  try {
    console.log("Protected request");
    console.log(req.user);
    res.status(200).send({
      success: true,
      message: "Access granted!",
      data: req.user,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      error: error,
    });
  }
};

export const unProtectedSignIn = (req, res) => {
  console.log("UnProtected request");
  console.log(req.body);
  res.status(200).send("UnProtected Page");
};
