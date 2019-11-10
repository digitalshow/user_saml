OC.L10N.register(
    "user_saml",
    {
    "This user account is disabled, please contact your administrator." : "Detta användarkontot är avstängt, kontakta din administratör.",
    "Saved" : "Sparad",
    "Provider" : "Leverantör",
    "Unknown error, please check the log file for more details." : "Okänt fel, kontrollera loggfilen för mer detaljer.",
    "Direct log in" : "Direkt inloggning",
    "SSO & SAML log in" : "SSO & SAML-inloggning",
    "This page should not be visited directly." : "Den här sidan ska inte besökas direkt.",
    "Provider " : "Leverantör",
    "X.509 certificate of the Service Provider" : "X.509-certifikat av leverantören",
    "Private key of the Service Provider" : "Privat nyckel från leverantören",
    "Indicates that the nameID of the <samlp:logoutRequest> sent by this SP will be encrypted." : "Indikerar att nameID av <samlp:logoutRequest> som skickats av SP kommer att krypteras.",
    "Indicates whether the <samlp:AuthnRequest> messages sent by this SP will be signed. [Metadata of the SP will offer this info]" : "Indikerar om <samlp:AuthnRequest> meddelanden från denna SP kommer att undertecknas. [Metadata av SP kommer att erbjuda denna information]",
    "Indicates whether the  <samlp:logoutRequest> messages sent by this SP will be signed." : "Indikerar om <samlp:logoutRequest> meddelanden från denna SP kommer att undertecknas.",
    "Indicates whether the  <samlp:logoutResponse> messages sent by this SP will be signed." : "Indikerar om <samlp:logoutResponse> meddelanden från denna SP kommer att undertecknas.",
    "Whether the metadata should be signed." : "Huruvida metadata bör undertecknas.",
    "Indicates a requirement for the <samlp:Response>, <samlp:LogoutRequest> and <samlp:LogoutResponse> elements received by this SP to be signed." : "Indikerar ett krav för <samlp:Response>, <samlp:LogoutRequest> och <samlp:LogoutResponse> delar mottaget av denna SP signeras.",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be signed. [Metadata of the SP will offer this info]" : "Indikerar ett krav för de mottagna <saml:Assertion>-objekten av denna SP att signeras. [Metadata av SP'n erbjuder denna information]",
    "Indicates a requirement for the <saml:Assertion> elements received by this SP to be encrypted." : "Indikerar ett krav för de mottagna <saml:Assertion>-objekten från denna SP att krypteras.",
    " Indicates a requirement for the NameID element on the SAMLResponse received by this SP to be present." : "Indikerar ett krav för objektet NameID på SAMLResponse mottaget av denna SP ska finnas.",
    "Indicates a requirement for the NameID received by this SP to be encrypted." : "Indikerar ett krav för NameID mottagen av denna SP att vara krypterad.",
    "Indicates if the SP will validate all received XML." : "Indikerar om SP'n kommer validera alla mottagna XML.",
    "ADFS URL-Encodes SAML data as lowercase, and the toolkit by default uses uppercase. Enable for ADFS compatibility on signature verification." : "ADFS webbadress avkodar SAML-data som små bokstäver och verktyget använder stora bokstäver som standard. Aktivera för ADFS-kompatibilitet för signaturverifiering.",
    "Attribute to map the UID to." : "Attribut för att mappa UID till.",
    "Only allow authentication if an account exists on some other backend. (e.g. LDAP)" : "Tillåt bara tillgång om ett konto finns på någon annan backend. (t.ex. LDAP)",
    "Attribute to map the displayname to." : "Attribut att mappa visningsnamnet till",
    "Attribute to map the email address to." : "Attribut att mappa epost-adress till.",
    "Attribute to map the quota to." : "Attribut att mappa quota till.",
    "Attribute to map the users groups to." : "Attribut att mappa användargrupper till.",
    "Attribute to map the users home to." : "Attribut att mappa hemkataloger till.",
    "Email address" : "E-postadress",
    "Encrypted" : "Krypterad",
    "Entity" : "Entity",
    "Kerberos" : "Kerberos",
    "Persistent" : "Persistent",
    "Transient" : "Transient",
    "Unspecified" : "Unspecified",
    "Windows domain qualified name" : "Windows domain qualified name",
    "X509 subject name" : "X509 subject name",
    "Use SAML auth for the %s desktop clients (requires user re-authentication)" : "Använd SAML-autentisering för %s skrivbordsklienter (kräver att användarna loggar in på nytt)",
    "Optional display name of the identity provider (default: \"SSO & SAML log in\")" : "Frivilligt visningsnamn av den identifierande aktören (standard: \"SSO & SAML inloggning\")",
    "Allow the use of multiple user back-ends (e.g. LDAP)" : "Tillåt användning av flera användarkataloger (t.ex. LDAP)",
    "SSO & SAML authentication" : "SSO & SAML-autentisering",
    "Authenticate using single sign-on" : "Autentisera med single sign-on",
    "Using the SSO & SAML app of your Nextcloud you can make it easily possible to integrate your existing Single-Sign-On solution with Nextcloud. In addition, you can use the Nextcloud LDAP user provider to keep the convenience for users. (e.g. when sharing)\nThe following providers are supported and tested at the moment:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Authentication via Environment Variable**\n\t* Kerberos (mod_auth_kerb)\n\t* Any other provider that authenticates using the environment variable\n\nWhile theoretically any other authentication provider implementing either one of those standards is compatible, we like to note that they are not part of any internal test matrix." : "Med hjälp av SSO & SAML-appen i din Nextcloud kan du enkelt integrera din befintliga Single-Sign-On-lösning med Nextcloud. Dessutom kan du använda Nextcloud LDAP-användarleverantören för att hålla bekvämligheten för användarna. (t.ex. vid delning)\nFöljande leverantörer stöds och testas för tillfället:\n\n* **SAML 2.0**\n\t* OneLogin\n\t* Shibboleth\n\t* Active Directory Federation Services (ADFS)\n\n* **Autentisering via miljövariabel**\n\t* Kerberos (mod_auth_kerb)\n\t* Alla andra leverantörer som autentiserar med hjälp av miljövariabeln\n\nMedan teoretiskt någon annan autentiseringsleverantör som implementerar någon av dessa standarder är kompatibel, vill vi notera att de inte ingår i någon intern testmatris.",
    "Open documentation" : "Öppna dokumentationen",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you enabled \"%s\" or you go directly to the URL %s." : "Var säker på att konfigurera en administratörs-användare som kommer åt instansen via SSO. Inloggning med ditt vanliga %s konto kommer inte vara möjligt längre, om du inte aktiverat \"%s\" eller gå direkt till webbadressen %s.",
    "Make sure to configure an administrative user that can access the instance via SSO. Logging-in with your regular %s account won't be possible anymore, unless you go directly to the URL %s." : "Var säker på att konfigurera en administratörs-användare som kommer åt instansen via SSO. Inloggning med ditt vanliga %s konto kommer inte vara möjligt längre, om du inte går direkt till webbadressen %s.",
    "Please choose whether you want to authenticate using the SAML provider built-in in Nextcloud or whether you want to authenticate against an environment variable." : "Vänligen välj om du vill autentisera med SAML-leverantören inbyggd i Nextcloud eller om du vill autentisera mot en miljövariabel.",
    "Use built-in SAML authentication" : "Använd den inbyggda SAML-autentiseringen",
    "Use environment variable" : "Använd miljövariabel",
    "Global settings" : "Globala inställningar",
    "Remove identity provider" : "Radera identity provider",
    "Add identity provider" : "Lägg till identity provider",
    "General" : "Allmänt",
    "Service Provider Data" : "Leverantörsdata",
    "If your Service Provider should use certificates you can optionally specify them here." : "Om din tjänstleverantör använder certifikat kan du välja att ange dem här.",
    "Show Service Provider settings…" : "Visa leverantörsinställningar",
    "Name ID format" : "Name ID format",
    "Identity Provider Data" : "Identity Provider Data",
    "Configure your IdP settings here." : "Konfigurera dina IdP-inställningar här.",
    "Identifier of the IdP entity (must be a URI)" : "Identifierare av IdP'n (måste vara en URI)",
    "URL Target of the IdP where the SP will send the Authentication Request Message" : "Webbadressmål av IdP där SP skickar autentiseringsförfrågningsmeddelandet",
    "Show optional Identity Provider settings…" : "Visa valbara Identity Provider inställningar...",
    "URL Location of the IdP where the SP will send the SLO Request" : "Webbadressplatsen för IdP där SP skickar SLO-förfrågan",
    "Public X.509 certificate of the IdP" : "Publikt X.509-certifikat av IdP'n",
    "Attribute mapping" : "Attributmappning",
    "If you want to optionally map attributes to the user you can configure these here." : "Om du vill mappa attributen till användaren kan du konfigurera dessa här",
    "Show attribute mapping settings…" : "Visa inställningar för attributmappning",
    "Security settings" : "Säkerhetsinställningar",
    "For increased security we recommend enabling the following settings if supported by your environment." : "För ökad säkerhet rekommenderar vi att följande inställningar aktiveras om de stöds av din miljö.",
    "Show security settings…" : "Visa säkerhetsinställningar...",
    "Signatures and encryption offered" : "Signatur och kryptering erbjuden",
    "Signatures and encryption required" : "Signaturer och kryptering krävs",
    "Download metadata XML" : "Hämta metadata XML-fil",
    "Reset settings" : "Återställ inställningar",
    "Metadata invalid" : "Metadata ogiltig",
    "Metadata valid" : "Metadata giltig",
    "Error" : "Fel",
    "Account not provisioned." : "Konto inte förberett",
    "Your account is not provisioned, access to this service is thus not possible." : "Ditt konto är inte förberett, tillgång till tjänsten är därför inte möjligt.",
    "Choose a authentication provider" : "Välj en autentiseringsleverantör"
},
"nplurals=2; plural=(n != 1);");
