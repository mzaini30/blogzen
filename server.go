package main
import (
	"net/http"
	"fmt"
	spa "github.com/roberthodgen/spa-server"
)
func main(){
	http.ListenAndServe(":2020", spa.SpaHandler("public", "index.html"))
	fmt.Println("Blog Zen aktif! Yey....")
	fmt.Println("Buka localhost:2020")
}
