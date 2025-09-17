const printHelloWorld = (req, res) => {
    try{
        const message = "Hello, World!";
        console.log(message);
        res.status(200).json({ message: "Successfully printed the message.",
                                data: message });
    } catch (error) {
        console.error("Error printing Hello, World!", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}

export const doNothingController = (req, res) => {
    try{
        console.log("Doing nothing...");
        return res.status(200).json({ message: "Did nothing successfully." });
    } catch (error) {
        console.error("Error doing nothing!", error.message);
        return res.status(500).json({ error: "Internal Server Error" });
    }
}

export const getDataFromFrontend = (req, res) => {
    try{
        const data = req.body;
        console.log("Data received from frontend:", data);
        res.status(200).json({ message: "Data received successfully.", data: data });
    } catch (error) {
        console.error("Error receiving data from frontend!", error.message);
        res.status(500).json({ error: "Internal Server Error" });
    }
}
export { printHelloWorld };