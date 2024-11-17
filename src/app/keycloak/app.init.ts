import { KeycloakService } from 'keycloak-angular';

export function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080/auth', // Keycloak server URL
        realm: 'keycloak-project',                // Replace with your realm name
        clientId: 'keycloak-project',            // Replace with your client name
      },
      initOptions: {
        onLoad: 'login-required',         // Can also be 'check-sso'
        checkLoginIframe: false,
      },
    });
}
