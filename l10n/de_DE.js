OC.L10N.register(
    "user_saml",
    {
    "Saved" : "Gespeichert",
    "X.509 certificate of the Service Provider" : "X.509-Zertifikat des Diensteanbieters",
    "Private key of the Service Provider" : "Privater Schlüssel des Diensteanbieters",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Zeigt an, dass die von dieser SP gesendete nameID von <samlp:logoutRequest> verschlüsselt wird.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Zeigt an, ob die von diesem SP gesendeten <samlp:logoutRequest> - Nachrichten signiert werden. [Die Metadaten des SP zeigen diese Infos an]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Zeigt an, ob die von diesem SP gesendeten <samlp:logoutRequest> - Nachrichten signiert werden.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Zeigt an, ob die von diesem SP gesendeten  <samlp:logoutResponse> - Nachrichten signiert werden.",
    "Whether the metadata should be signed." : "Ob die Metadatein signiert werden sollen.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Zeigt an, dass die von dieser SP empfangenen <samlp:Response>, <samlp:LogoutRequest> und <samlp:LogoutResponse> Elemente signiert sein müssen.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Zeigt an, dass die <saml:Assertion> Elemente die von dieser SP empfangen wurden verschlüsselt sein müssen. [Metadaten der SP enthalten diese Informationen]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Zeigt an, dass die <saml:Assertion> Elemente die von dieser SP empfangen wurden verschlüsselt sein müssen.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Zeigt an, dass das NameID-Element der SAML-Antwort dieses SP vorhanden sein muss.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Zeigt an, dass die NameID die von diesem SP empfangen wird verschlüsselt sein muss.",
    "Indicates if the SP will validate all received XMLs." : "Zeigt an, ob der SP alle empfangenen XMLs prüfen wird.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS kodiert SAML-URL-Daten in Kleinbuchstaben und das Toolkit nutzt als Standard Großbuchstaben. Diese Option für ADFS-Kompatibilität bei Signatur-Überprüfung aktivieren.",
    "Attribute to map the UID to." : "Attribut dem die UID zugeordnet werden soll.",
    "Only allow authentication if an account is existent on some other backend. (e.g. LDAP)" : "Einloggen nur erlauben, wenn ein Konto auf einem anderen Backend vorhanden ist (z.B. LDAP)",
    "Attribute to map the displayname to." : "Attribut dem der Anzeigename zugeordnet werden soll.",
    "Attribute to map the email address to." : "Attribut dem die E-Mail zugeordnet werden soll.",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "SAML-Authentifizierung für die %s Desktop-Clients nutzen (erfordert eine Neu-Authentifizierung der Nutzer)",
    "SSO & SAML authentication" : "SSO & SAML-Authentifizierung",
    "Open documentation" : "Dokumentation öffnen",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Bitte auswählen ob die Authentifizierung via in Nextcloud integriertem SAML erfolgen soll oder gegen eine Umgebungsvariable.",
    "Use built-in SAML authentication" : "Integrierte SAML-Authentifizierung benutzen",
    "Use environment variable" : "Nutze Umgebungsvariable",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore." : "Es muss ein Benutzer mit Admin-Rechten vorhanden sein, der sich via SSO einloggen kann. Eine Anmeldung mit Ihrem normalen Zugang %s wird nicht mehr möglich sein.",
    "General" : "Allgemein",
    "Service Provider Data" : "Diensteanbieter-Daten",
    "If your Service Provider should use certificates you can optionally specify them here." : "Sollte Ihr Diensteanbieter Zertifikate benutzen dann haben Sie hier die Möglichkeit diese anzugeben.",
    "Show Service Provider settings ..." : "Zeige die Diensteanbieter-Einstellungen...",
    "Identity Provider Data" : "Daten des  Authentifizierungsdienstes",
    "Configure your IdP settings here." : "Richten Sie hier ihre Authentifizierungsdiensteinstelllungen ein.",
    "Identifier of the IdP entity (must be a URI)" : "Identifikationsmerkmal des IdP (muss URI sein)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "URL Ziel des Identifizierungsdiensteanbieters an den der SP die Anmeldungsanfrage senden soll",
    "Show optional Identity Provider settings ..." : "Zusätzliche Authentifizierungsdiensteeinstellungen anzeigen",
    "URL Location of the IdP where the SP will send the SLO Request" : "URL-Adresse des Autenthifizierungsdienstes an den der SP die SLO-Anfrage senden soll",
    "Public X.509 certificate of the IdP" : "Öffentliches X.509-Zertifikat des IdP",
    "Attribute mapping" : "Attribute zuordnen",
    "If you want to optionally map SAML attributes to the user you can configure these here." : "Wenn Sie optional die SAML-Attribute zu dem Nutzer zuordnen möchten, können Sie dies hier durchführen.",
    "Show attribute mapping settings ..." : "Einstellungen der Attribute-Zuordnung anzeigen ...",
    "Security settings" : "Sicherheitseinstellungen",
    "For increased security we recommend enabling the following settings if supported by your environment." : "Um die Sicherheit zu erhöhen empfehlen wir die nachfolgenden Einstellungen, soweit diese von Ihrer Installation unterstützt werden.",
    "Show security settings ..." : "Zeige die Sicherheitseinstellungen...",
    "Signatures and encryption offered" : "Signaturen und Verschlüsselung werden angeboten",
    "Signatures and encryption required" : "Signaturen und Verschlüsselung erforderlich",
    "Download metadata XML" : "Lade Metadaten-XML herunter",
    "Metadata invalid" : "Metadaten sind ungültig",
    "Metadata valid" : "Metadaten sind gültig",
    "Account not provisioned." : "Konto nicht bereitgestellt.",
    "Your account is not provisioned, access to this service is thus not possible." : "Ihr Konto wird nicht bereitgestellt. Der Zugriff ist daher nicht möglich."
},
"nplurals=2; plural=(n != 1);");
