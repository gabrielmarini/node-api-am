import setupApp from './app'

const port = 3000

setupApp().then(app => app.listen(port, () => console.log('app running on port ' + port)))
.catch(error => {
    console.error(error);
    process.exit(1);
});

// app.listen(3000, ()=>{
//     console.log("Server online")
// })