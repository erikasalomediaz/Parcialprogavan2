export function getApi(url) {

        return fetch(url)
                .then(function (response) {
                        return response.json();
                     
                })
}