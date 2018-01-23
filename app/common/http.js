/**
 * Created by panmin on 18-1-22.
 * Email: panminzzu@126.com
 */

const http = {
    get:(url,successCallback,failCallback)=>{
        fetch(url)
            .then((response)=>response.text())
            .then(responseText=>{
                const result = JSON.parse(responseText);
                successCallback(result);
            })
            .catch(err=>{
                failCallback(err);
            })
    },
    post:(url,data,successCallback,failCallback)=>{
        let formData = new FormData();
        Object.keys(data).map(function(key) {
            const value = data[key];
            formData.append(key, value);
        });

        let fetchOptions = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                // 'Content-Type': 'application/json'
                'Content-Type': 'multipart/form-data',
            },
            body: formData
            // body: JSON.stringify(data)
        };

        fetch(url, fetchOptions)
            .then((response) => response.text())
            .then((responseText) => {
                let result = JSON.parse(responseText);
                successCallback(result);
            })
            .catch((err) => {
                failCallback(err);
            });
    }
};

export default http;