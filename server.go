package main

import (
	"github.com/gin-gonic/contrib/cors"
	"github.com/gin-gonic/gin"
)

func getHome(c *gin.Context) {
	c.HTML(200, "index.html", nil)
}

func main() {
    // Create a new Gin router
    router := gin.Default()
    router.Use(cors.Default())
    router.LoadHTMLGlob("./FrontEnd/dist/*.html")

    router.GET("/", getHome)
    // Define a route handler
    // Run the server
    router.Run()
}
