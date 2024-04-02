export const schemaParseMiddleWare = (schema) => (req, res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (e) {
    return res.status(400).send(e.issues[0].message);
  }
};
