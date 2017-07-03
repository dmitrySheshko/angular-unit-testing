export default ['Restangular', (Restangular) => {
    Restangular.setErrorInterceptor((response) => {
        if (response.status === 401 || response.status === 403) {
            //console.log(response.status);
        }
    });
}];