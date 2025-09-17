export default getProfileOfUser = (req, res) => {
    try {
        console.log("Printing user profile controller");
        return res.status(200)
    } catch (error) {
        console.error("Error in getProfileOfUser",error.message);
        return res.status(500).json({ error: "Internal Server Error" });
        
    }
}