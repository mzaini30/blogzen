package main
import (
	"net/http"
	"fmt"
	spa "github.com/roberthodgen/spa-server"
)
func main(){
	fmt.Println("Buka localhost:2020")
	http.ListenAndServe(":2020", spa.SpaHandler("public", "index.html"))
}
