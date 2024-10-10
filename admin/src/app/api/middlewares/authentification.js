import { config as configDotenv } from "dotenv";
configDotenv();
import jwt from "jsonwebtoken";

const middleware = (req, res, next) => {
  try {
    // RECUPERER LE TOKEN DANS L'ENTETE
    const token = req.headers.authorization.split(' ')[1];
    console.log(` le token : ${token}`)
    //COMPARER CE TOKEN AU KEY_SECRET
    const verifyAndDecoded = jwt.verify(token, process.env.SECRET_KEY);

    //RECUPERER USERID DANS CE TOKEN
    const userId = verifyAndDecoded.userId;
    console.log(` le userId : ${userId}`)
    //INSERER USERID DANS UN NOUVEAU OBJET QUI SERA UTILISER ULTERIEUREMENT
    req.auth = { userId: userId };

    //ACCEDER A LA ROUTE SUIVANTE
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Le token est invalide ' });
  }
};

module.exports = middleware;