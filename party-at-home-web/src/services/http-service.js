import 'whatwg-fetch';


class HttpService{
    
    getProducts = () =>{
        var promise = new Promise((resolve, reject) =>{
                                  
                                  
        fetch('http://localhost:9000/product').then(response => {
                //{ console.log(response.json());
                resolve(response.json());
            });
        });
        return promise;
    }
}

export default HttpService;