import Router from "express";
import { printHelloWorld } from "../controllers/hwController";

const hwrouter = Router()
hwrouter.get("/", printHelloWorld)

export default hwrouter;