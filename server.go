package main
import (
	"net/http"
	spa "github.com/roberthodgen/spa-server"
)
func main(){
	http.ListenAndServe(":2020", spa.SpaHandler("public", "index.html"))
}
