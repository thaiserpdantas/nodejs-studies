const app = require("./app");

const port = 3331;
app.listen(port, () => {
    console.log('✨ Backend started! Port: ', port)
});
