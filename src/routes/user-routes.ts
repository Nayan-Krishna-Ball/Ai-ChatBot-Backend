//

import { Router } from "express";
import { getAllUsers, userSignup } from "../controllers/user-controllers.js";

const userRoutes = Router();

userRoutes.get("/", getAllUsers);
userRoutes.post("/signup", userSignup);

// userRoutes.post("/login", validate(loginValidator), userLogin);
// userRoutes.get("/auth-status", verifyToken, verifyUser);
// userRoutes.get("/logout", verifyToken, userLogout);

export default userRoutes;
