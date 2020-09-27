package main
import (
	"net/http"
	"fmt"
)
func main(){
	file := http.FileServer(http.Dir("public/"))
	http.Handle("/", http.StripPrefix("/", file))
	http.ListenAndServe(":2020", nil)
	fmt.Println("Blog Zen aktif! Yey....")
}
