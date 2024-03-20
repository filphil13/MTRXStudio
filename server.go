package main

import (
	"github.com/gin-contrib/static"
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
	router.LoadHTMLGlob("FrontEnd/dist/*.html")

	router.Use(static.Serve("/", static.LocalFile("FrontEnd/dist", true)))

	router.GET("/home", getHome)
	// Define a route handler
	// Run the server
	router.Run()
}
