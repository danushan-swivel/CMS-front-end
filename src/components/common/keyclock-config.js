import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: 'http://localhost:8089/auth/',
    realm: 'gene-project',
    clientId: 'gene-project-client',
});



export default keycloak;