(() => {

    /*
    Persistent Storage
     */
    let db ={
        settings:
            {

            }
    };

    let settings = {
        color: "gold",
        country: "India",
        language: "en-uk"
    };
    let host ="";
    let firstInstance = true;
    let countries = [
        {name: 'Afghanistan', code: 'AF'},
        {name: 'Åland Islands', code: 'AX'},
        {name: 'Albania', code: 'AL'},
        {name: 'Algeria', code: 'DZ'},
        {name: 'American Samoa', code: 'AS'},
        {name: 'Andorra', code: 'AD'},
        {name: 'Angola', code: 'AO'},
        {name: 'Anguilla', code: 'AI'},
        {name: 'Antarctica', code: 'AQ'},
        {name: 'Antigua and Barbuda', code: 'AG'},
        {name: 'Argentina', code: 'AR'},
        {name: 'Armenia', code: 'AM'},
        {name: 'Aruba', code: 'AW'},
        {name: 'Australia', code: 'AU'},
        {name: 'Austria', code: 'AT'},
        {name: 'Azerbaijan', code: 'AZ'},
        {name: 'Bahamas', code: 'BS'},
        {name: 'Bahrain', code: 'BH'},
        {name: 'Bangladesh', code: 'BD'},
        {name: 'Barbados', code: 'BB'},
        {name: 'Belarus', code: 'BY'},
        {name: 'Belgium', code: 'BE'},
        {name: 'Belize', code: 'BZ'},
        {name: 'Benin', code: 'BJ'},
        {name: 'Bermuda', code: 'BM'},
        {name: 'Bhutan', code: 'BT'},
        {name: 'Bolivia', code: 'BO'},
        {name: 'Bosnia and Herzegovina', code: 'BA'},
        {name: 'Botswana', code: 'BW'},
        {name: 'Bouvet Island', code: 'BV'},
        {name: 'Brazil', code: 'BR'},
        {name: 'British Indian Ocean Territory', code: 'IO'},
        {name: 'Brunei Darussalam', code: 'BN'},
        {name: 'Bulgaria', code: 'BG'},
        {name: 'Burkina Faso', code: 'BF'},
        {name: 'Burundi', code: 'BI'},
        {name: 'Cambodia', code: 'KH'},
        {name: 'Cameroon', code: 'CM'},
        {name: 'Canada', code: 'CA'},
        {name: 'Cape Verde', code: 'CV'},
        {name: 'Cayman Islands', code: 'KY'},
        {name: 'Central African Republic', code: 'CF'},
        {name: 'Chad', code: 'TD'},
        {name: 'Chile', code: 'CL'},
        {name: 'China', code: 'CN'},
        {name: 'Christmas Island', code: 'CX'},
        {name: 'Cocos (Keeling) Islands', code: 'CC'},
        {name: 'Colombia', code: 'CO'},
        {name: 'Comoros', code: 'KM'},
        {name: 'Congo', code: 'CG'},
        {name: 'Congo, The Democratic Republic of the', code: 'CD'},
        {name: 'Cook Islands', code: 'CK'},
        {name: 'Costa Rica', code: 'CR'},
        {name: 'Cote D\'Ivoire', code: 'CI'},
        {name: 'Croatia', code: 'HR'},
        {name: 'Cuba', code: 'CU'},
        {name: 'Cyprus', code: 'CY'},
        {name: 'Czech Republic', code: 'CZ'},
        {name: 'Denmark', code: 'DK'},
        {name: 'Djibouti', code: 'DJ'},
        {name: 'Dominica', code: 'DM'},
        {name: 'Dominican Republic', code: 'DO'},
        {name: 'Ecuador', code: 'EC'},
        {name: 'Egypt', code: 'EG'},
        {name: 'El Salvador', code: 'SV'},
        {name: 'Equatorial Guinea', code: 'GQ'},
        {name: 'Eritrea', code: 'ER'},
        {name: 'Estonia', code: 'EE'},
        {name: 'Ethiopia', code: 'ET'},
        {name: 'Falkland Islands (Malvinas)', code: 'FK'},
        {name: 'Faroe Islands', code: 'FO'},
        {name: 'Fiji', code: 'FJ'},
        {name: 'Finland', code: 'FI'},
        {name: 'France', code: 'FR'},
        {name: 'French Guiana', code: 'GF'},
        {name: 'French Polynesia', code: 'PF'},
        {name: 'French Southern Territories', code: 'TF'},
        {name: 'Gabon', code: 'GA'},
        {name: 'Gambia', code: 'GM'},
        {name: 'Georgia', code: 'GE'},
        {name: 'Germany', code: 'DE'},
        {name: 'Ghana', code: 'GH'},
        {name: 'Gibraltar', code: 'GI'},
        {name: 'Greece', code: 'GR'},
        {name: 'Greenland', code: 'GL'},
        {name: 'Grenada', code: 'GD'},
        {name: 'Guadeloupe', code: 'GP'},
        {name: 'Guam', code: 'GU'},
        {name: 'Guatemala', code: 'GT'},
        {name: 'Guernsey', code: 'GG'},
        {name: 'Guinea', code: 'GN'},
        {name: 'Guinea-Bissau', code: 'GW'},
        {name: 'Guyana', code: 'GY'},
        {name: 'Haiti', code: 'HT'},
        {name: 'Heard Island and Mcdonald Islands', code: 'HM'},
        {name: 'Holy See (Vatican City State)', code: 'VA'},
        {name: 'Honduras', code: 'HN'},
        {name: 'Hong Kong', code: 'HK'},
        {name: 'Hungary', code: 'HU'},
        {name: 'Iceland', code: 'IS'},
        {name: 'India', code: 'IN'},
        {name: 'Indonesia', code: 'ID'},
        {name: 'Iran, Islamic Republic Of', code: 'IR'},
        {name: 'Iraq', code: 'IQ'},
        {name: 'Ireland', code: 'IE'},
        {name: 'Isle of Man', code: 'IM'},
        {name: 'Israel', code: 'IL'},
        {name: 'Italy', code: 'IT'},
        {name: 'Jamaica', code: 'JM'},
        {name: 'Japan', code: 'JP'},
        {name: 'Jersey', code: 'JE'},
        {name: 'Jordan', code: 'JO'},
        {name: 'Kazakhstan', code: 'KZ'},
        {name: 'Kenya', code: 'KE'},
        {name: 'Kiribati', code: 'KI'},
        {name: 'Korea, Democratic People\'S Republic of', code: 'KP'},
        {name: 'Korea, Republic of', code: 'KR'},
        {name: 'Kuwait', code: 'KW'},
        {name: 'Kyrgyzstan', code: 'KG'},
        {name: 'Lao People\'S Democratic Republic', code: 'LA'},
        {name: 'Latvia', code: 'LV'},
        {name: 'Lebanon', code: 'LB'},
        {name: 'Lesotho', code: 'LS'},
        {name: 'Liberia', code: 'LR'},
        {name: 'Libyan Arab Jamahiriya', code: 'LY'},
        {name: 'Liechtenstein', code: 'LI'},
        {name: 'Lithuania', code: 'LT'},
        {name: 'Luxembourg', code: 'LU'},
        {name: 'Macao', code: 'MO'},
        {name: 'Macedonia, The Former Yugoslav Republic of', code: 'MK'},
        {name: 'Madagascar', code: 'MG'},
        {name: 'Malawi', code: 'MW'},
        {name: 'Malaysia', code: 'MY'},
        {name: 'Maldives', code: 'MV'},
        {name: 'Mali', code: 'ML'},
        {name: 'Malta', code: 'MT'},
        {name: 'Marshall Islands', code: 'MH'},
        {name: 'Martinique', code: 'MQ'},
        {name: 'Mauritania', code: 'MR'},
        {name: 'Mauritius', code: 'MU'},
        {name: 'Mayotte', code: 'YT'},
        {name: 'Mexico', code: 'MX'},
        {name: 'Micronesia, Federated States of', code: 'FM'},
        {name: 'Moldova, Republic of', code: 'MD'},
        {name: 'Monaco', code: 'MC'},
        {name: 'Mongolia', code: 'MN'},
        {name: 'Montserrat', code: 'MS'},
        {name: 'Morocco', code: 'MA'},
        {name: 'Mozambique', code: 'MZ'},
        {name: 'Myanmar', code: 'MM'},
        {name: 'Namibia', code: 'NA'},
        {name: 'Nauru', code: 'NR'},
        {name: 'Nepal', code: 'NP'},
        {name: 'Netherlands', code: 'NL'},
        {name: 'Netherlands Antilles', code: 'AN'},
        {name: 'New Caledonia', code: 'NC'},
        {name: 'New Zealand', code: 'NZ'},
        {name: 'Nicaragua', code: 'NI'},
        {name: 'Niger', code: 'NE'},
        {name: 'Nigeria', code: 'NG'},
        {name: 'Niue', code: 'NU'},
        {name: 'Norfolk Island', code: 'NF'},
        {name: 'Northern Mariana Islands', code: 'MP'},
        {name: 'Norway', code: 'NO'},
        {name: 'Oman', code: 'OM'},
        {name: 'Pakistan', code: 'PK'},
        {name: 'Palau', code: 'PW'},
        {name: 'Palestinian Territory, Occupied', code: 'PS'},
        {name: 'Panama', code: 'PA'},
        {name: 'Papua New Guinea', code: 'PG'},
        {name: 'Paraguay', code: 'PY'},
        {name: 'Peru', code: 'PE'},
        {name: 'Philippines', code: 'PH'},
        {name: 'Pitcairn', code: 'PN'},
        {name: 'Poland', code: 'PL'},
        {name: 'Portugal', code: 'PT'},
        {name: 'Puerto Rico', code: 'PR'},
        {name: 'Qatar', code: 'QA'},
        {name: 'Reunion', code: 'RE'},
        {name: 'Romania', code: 'RO'},
        {name: 'Russian Federation', code: 'RU'},
        {name: 'RWANDA', code: 'RW'},
        {name: 'Saint Helena', code: 'SH'},
        {name: 'Saint Kitts and Nevis', code: 'KN'},
        {name: 'Saint Lucia', code: 'LC'},
        {name: 'Saint Pierre and Miquelon', code: 'PM'},
        {name: 'Saint Vincent and the Grenadines', code: 'VC'},
        {name: 'Samoa', code: 'WS'},
        {name: 'San Marino', code: 'SM'},
        {name: 'Sao Tome and Principe', code: 'ST'},
        {name: 'Saudi Arabia', code: 'SA'},
        {name: 'Senegal', code: 'SN'},
        {name: 'Serbia and Montenegro', code: 'CS'},
        {name: 'Seychelles', code: 'SC'},
        {name: 'Sierra Leone', code: 'SL'},
        {name: 'Singapore', code: 'SG'},
        {name: 'Slovakia', code: 'SK'},
        {name: 'Slovenia', code: 'SI'},
        {name: 'Solomon Islands', code: 'SB'},
        {name: 'Somalia', code: 'SO'},
        {name: 'South Africa', code: 'ZA'},
        {name: 'South Georgia and the South Sandwich Islands', code: 'GS'},
        {name: 'Spain', code: 'ES'},
        {name: 'Sri Lanka', code: 'LK'},
        {name: 'Sudan', code: 'SD'},
        {name: 'Suriname', code: 'SR'},
        {name: 'Svalbard and Jan Mayen', code: 'SJ'},
        {name: 'Swaziland', code: 'SZ'},
        {name: 'Sweden', code: 'SE'},
        {name: 'Switzerland', code: 'CH'},
        {name: 'Syrian Arab Republic', code: 'SY'},
        {name: 'Taiwan, Province of China', code: 'TW'},
        {name: 'Tajikistan', code: 'TJ'},
        {name: 'Tanzania, United Republic of', code: 'TZ'},
        {name: 'Thailand', code: 'TH'},
        {name: 'Timor-Leste', code: 'TL'},
        {name: 'Togo', code: 'TG'},
        {name: 'Tokelau', code: 'TK'},
        {name: 'Tonga', code: 'TO'},
        {name: 'Trinidad and Tobago', code: 'TT'},
        {name: 'Tunisia', code: 'TN'},
        {name: 'Turkey', code: 'TR'},
        {name: 'Turkmenistan', code: 'TM'},
        {name: 'Turks and Caicos Islands', code: 'TC'},
        {name: 'Tuvalu', code: 'TV'},
        {name: 'Uganda', code: 'UG'},
        {name: 'Ukraine', code: 'UA'},
        {name: 'United Arab Emirates', code: 'AE'},
        {name: 'United Kingdom', code: 'GB'},
        {name: 'United States', code: 'US'},
        {name: 'United States Minor Outlying Islands', code: 'UM'},
        {name: 'Uruguay', code: 'UY'},
        {name: 'Uzbekistan', code: 'UZ'},
        {name: 'Vanuatu', code: 'VU'},
        {name: 'Venezuela', code: 'VE'},
        {name: 'Viet Nam', code: 'VN'},
        {name: 'Virgin Islands, British', code: 'VG'},
        {name: 'Virgin Islands, U.S.', code: 'VI'},
        {name: 'Wallis and Futuna', code: 'WF'},
        {name: 'Western Sahara', code: 'EH'},
        {name: 'Yemen', code: 'YE'},
        {name: 'Zambia', code: 'ZM'},
        {name: 'Zimbabwe', code: 'ZW'}
    ];
    const f1= (e)=>{
        db.user = e.user;
        if (db.user.role === "Physician"){
            db.healthIssues = e.healthIssuesM ? e.healthIssuesM : [];
            db.healthIssuesP = e.healthIssuesP ? e.healthIssuesP:[];
            localStorage.setItem("db", JSON.stringify(db));
        }
        if (db.user.role === "Patient"){
            db.physicians = e.physicians ? e.physicians: [];
            db.healthIssues = e.healthIssues ? e.healthIssues: [];
            localStorage.setItem("db", JSON.stringify(db));
        }
        location.reload(true)
        };
    async function refreshDB(){
        let response = await fetch('http://health-tracker-serve.herokuapp.com/refreshDB', {
            method: 'POST',
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify({username: db.user.username})
        });

        let result = await response.json();
        if(result['status'] === 200){
            f1(result);
        }
    }

    /*
    Persistent Storage
     */


    /*
    Icons
     */

    const arrowLeftT ="data:image/png;base64,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";
    const arrowRightT ="data:image/png;base64,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";
    const errorC ="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA2ZJREFUWIXNmU9oFFcYwH/f22wOpRbd7EoyM3pJMbmv2FvBILRpRbyUgFrJwYPBBEQQpKUHodRDodiapHhpKeRQ0YuJ9lQDHvxDmhyFbkAPZndj3KxEI4UkOl8Pu5v9m92d3dXJDxbmfe/Nez/ezvDe+0ZoAIUA9u4DoAeBKCK9qHYBH2abvEY1iUgMmAMzTWJpRsD1OpZ4ErNCeyBwBuEEYHscK44ygbwdk8SLeEsFtbMzQsD9HhgEbfcoVjrkOri/oe3fSTK53LSgOuFjqLkCGmpOrIw0qsOSXP6zWqMtBTVKkMXIOMKpFouVKlyl8/mIzLFRsbainGV9gGzcAPrfqVuev9DgV5JM/ldaUSaoUYI8i9zEi9y+HujpLY7F/oX5mAdH/Zudy1/KI9YLo21l7TJ/q7eZO3wEzp0vjv30Y+ZXN3KIlfDPsDxUGDWFBXXCx9/9M1cNOa1WZKAwsimott2ByuX3L1WCyLhaVjhXLJjBjR+AcIVb3jMaQjYu5koGQO2QAwz6pVSOnFJr117IzaAGhptfIVqJtkPbEIBRMAjH/VYqQ/haIWCwd38COH77VMDG6Yia7JZpm2L6DMp+vzW2RIka0H1+e1ShxyCmy2+LKnQZ8tv07cgOU7uNvxjgtd8SVVg1qLvot0UVFg3IvN8WVYgZhFm/LbZEmDVgpv322BJxp9tILM1gRxaAPQ13NB+DW5PlsaaQpyyk5wRArcglhAtN9thqLkki9U1G0A450Pa4qT1h98dwcjBz/cfv8ORxM3JriNst8XRi89ipdvhXkNMNdWfZcOcu7PgoU159BX2fwmKyMT1hVOKpESg8k8j6t0DNXElFPuvPy0Hm+vMvGpODNG6w+EwCIPFXL1AdaajLlyvlsZUKsfoYKkwqFa3FmUSOXPXc5dQkPLyfLz+4B1M3vasJY5JIXS8OlaAQwAnfQOWop84DAYhm976z/4DrOVd5m0TqqMCbqoKwmTy6DjT8IHnkFhocqCt5lCOTRAr/0vCbXS/CGPHU2dKZy1fXQK3IAMIorc86pIAzpc9cKTU3rJJMXYP2XmAcWGuB2BrCKLLWW0sOvCbRnQ4b1wxnD/pe1+4FYAJxxySeTtR7kyfBHAoGp2M/mD6UKNADYlP4GQKNA/MIs4g7nV34Pb/a/wOOJP9yYbR3DwAAAABJRU5ErkJggg==";
    const bg ="data:image/jpeg;base64,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";


    /*
    Colors
     */
    class EventColorScheme{

        constructor() {
        }

        getPrimary(){
            return "4099ff"
        }
        getPrimaryLight(){
            return "4099ff"
        }
        getPrimaryDark(){
            return "003c82"
        }
        getSuccess(){
            return "2ed8b6"
        }
        getSuccessLight(){
            return "2ed8b6"
        }
        getSuccessDark(){
            return "105a4b"
        }
        getInfo(){
            return "00bcd4"
        }
        getInfoLight(){
            return "00bcd4"
        }
        getInfoDark(){
            return "004c56"
        }
        getWarning(){
            return "ffb64d"
        }
        getWarningLight(){
            return "ffb64d"
        }
        getWarningDark(){
            return "875000"
        }
        getDanger(){
            return "ff5370"
        }
        getDangerLight(){
            return "ff5370"
        }
        getDangerDark(){
            return "8a0017"
        }
        getDisabled(){
            return "EBEBE4"
        }
    }

    let colors ={
        primaryColor: "ffcf68",
        secondaryColor: "",
        tertiaryColor: "",
        quaternaryColor: "",
        quinaryColor: "",
        denaryColor: ""
    };
    let themes = {

        gold: "ffcf68",
        maroon: "800000",
        navy: "000080",
        indigo: "4B0082",
        green: "00FF00",
        black: "000000",

    };
    if(localStorage.getItem('settings')){
        let ad = JSON.parse(localStorage.getItem('settings'));
        settings = ad;
        colors.primaryColor = themes[settings.color];
    }




    let ECS = new EventColorScheme();
  /*
  Summary Items
   */
    class HealthSummary extends HDivision{
        constructor(id,icon,title,result=0) {
            super('hs'+id);
            this.icon = new HIcon('i'+this.id, icon);
            this.addCustomStyle([
                Width(100,'px'),
                Height(100,'px'),
                Position(),
                BackgroundColor(colors.primaryColor),
                BorderRadius(100),
                Float("left"),
                Margin(5,'px').setLeft(1),
                FontFamily("Calibri"),
                FontSize(11,'pt')
            ]);

            this.icon.addCustomStyle([
                Padding(0,'px').setTop(3).setLeft(5),
                Width(20,'px'),
                Height(20,'px'),
                Float("left")
            ]);
            this.title = Paragraph('title'+this.id).setTextContent(title).addCustomStyle([
                Display("inline"),
                Width(60,'px'),
                TextAlignment("center"),
                Color("FFFFFF"),
                Margin(0,'px').setTop(5).setLeft(20),
                Position(),
                Float("left")
            ]);
            this.result = Paragraph('result'+this.id).setTextContent(result).
            addCustomStyle([
                Margin(0),
                FontFamily("Calibri"),
                FontSize(25),
                Color("FFFFFF"),
                FontWeight("bold"),
                TextAlignment("center")
            ]);
            let titlePanel = Division('titlePanel'+this.id).addCustomStyle([
                Width(140,'px'),
                Height(40),
                Overflow("hidden")
            ]);
            titlePanel.addComponent([ this.title]);
            this.addComponent([titlePanel,this.result]);
        }
        getTitle(){
            return this.title
        }
        getIcon(){
            return this.icon
        }
        getResult(){
            return this.result
        }
    }
    class HealthSummary2 extends HDivision{
        constructor(id,icon,title,result=0) {
            super('hs'+id);
            this.icon = new HIcon('i'+this.id, icon);
            this.addCustomStyle([
                Width(120,'px'),
                Height(120,'px'),
                Position(),
                BorderRadius(5),
                BackgroundColor(colors.primaryColor),
                Color("FFFFFF"),
                Float("left"),
                Margin(5,'px').setLeft(((screen.width-80) - (0.8*(screen.width-75)))/2),
                FontFamily("Segoe UI"),
                FontSize(11,'pt')
            ]);

            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.icon.addCustomStyle([
                Padding(0,'px').setTop(3).setLeft(5),
                Width(20,'px'),
                Height(20,'px'),
                Float("left")
            ]);
            this.title = Paragraph('title'+this.id).setTextContent(title).addCustomStyle([
                Display("inline"),
                Width(95,'px'),
                Margin(0),
                Position(),
                Float("left")
            ]);
            this.result = Paragraph('result'+this.id).setTextContent(result).
            addCustomStyle([
                Margin(0),
                FontFamily("Segoe UI"),
                FontSize(20),
                FontWeight("bold"),
                TextAlignment("center")
            ]);
            let titlePanel = Division('titlePanel'+this.id).addCustomStyle([
                Padding(0,'px').setTop(5).setLeft(5),
                Width(140,'px'),
                Height(40),
                Overflow("hidden")
            ]);
            titlePanel.addComponent([this.icon, this.title]);
            this.addComponent([titlePanel,this.result]);
        }
        getTitle(){
            return this.title
        }
        getIcon(){
            return this.icon
        }
        getResult(){
            return this.result
        }
    }

    /*
        Headers
     */

    class SymptomHeader extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Height(25,'px'),
                Margin("auto",""),
                FontWeight("bold"),
                FontSize(11,'pt'),
                FontFamily("Calibri")
            ]);
            this.symptom = Paragraph(this.id+'s').addCustomStyle([
                    Margin(0,'px').setTop(4).setLeft(5),
                Color(ECS.getDangerDark())
                ]
            ).setTextContent("Initial Symptoms");
            this.addComponent(this.symptom);
        }
    }
    class PrescriptionHeader extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Height(25,'px'),
                Margin("auto",""),
                FontWeight("bold"),
                FontSize(11,'pt'),
                FontFamily("Calibri")
            ]);
            this.drug = Paragraph(this.id+'d').addCustomStyle([
                    Margin(0,'px').setTop(4).setLeft(5),
                    Width(40),
                    Display("inline"),
                    Float("left"),
                    OverflowX("scroll"),
                ]
            ).setTextContent("Drug");
            this.dosage = Paragraph(this.id+'ds').addCustomStyle([
                    Margin(0,'px').setTop(4).setLeft(5),
                    Width(40),
                    Display("inline"),
                    Float("left"),
                    OverflowX("scroll"),
                ]
            ).setTextContent("Dosage");
            this.addComponent([this.drug,this.dosage]);
        }
    }
    class DailyReportHeader extends HDivision{

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Height(25,'px'),
                Margin("auto",""),
                FontWeight("bold"),
                FontSize(11,'pt'),
                FontFamily("Calibri")
            ]);
            this.day = Paragraph(this.id+'dr').addCustomStyle([
                    Margin(0,'px').setTop(4).setLeft(5),
                    Width(15),
                    Display("inline"),
                    Float("left"),
                    OverflowX("scroll"),
                ]
            ).setTextContent("Day");
            this.symptom = Paragraph(this.id+'sr').addCustomStyle([
                    Margin(0,'px').setTop(4).setLeft(5),
                    Width(80),
                    Display("inline"),
                    Float("left"),
                    OverflowX("scroll"),
                ]
            ).setTextContent("Report");
            this.addComponent([this.day, this.symptom]);
        }
    }


    /*
    Helper Components
     */
    class Helper {
        static computeLPSArray(pat, M, lps = []) {
            let len = 0;
            let i = 1;
            lps[0] = 0;

            while (i < M) {
                if (pat.charAt(i) === pat.charAt(len)) {
                    len++;
                    lps[i] = len;
                    i++;
                }
                else
                {
                    if (len !== 0) {
                        len = lps[len - 1];

                    }
                    else
                    {
                        lps[i] = len;
                        i++;
                    }
                }
            }
        };
        static KMPSearch(pat, txt) {
            pat = pat.toLowerCase();
            txt = txt.toLowerCase();
            let M = pat.length;
            let N = txt.length;

            let lps = [];
            let j = 0;

            Helper.computeLPSArray(pat, M, lps);

            let i = 0;
            while (i < N) {
                if (pat.charAt(j) === txt.charAt(i)) {
                    j++;
                    i++;
                }
                if (j === M) {
                    return true;
                }

                else if (i < N && pat.charAt(j) !== txt.charAt(i)) {
                    if (j !== 0)
                        j = lps[j - 1];
                    else
                        i = i + 1;
                }
            }
            return false;
        }
        static numberWithCommas(x) {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
    }
    class GenButton extends HDivision{
        constructor(id, text,width,color1,color2) {
            super(id);
            this.addCustomStyle([
                Width(width,'px'),
                Height(15,'px'),
                Padding(5,'px').setTop(15),
                BorderRadius(2,'px'),
                BackgroundColor(color1),
                Transition(),
                Border("thin",BORDERSTYLE.INSET,colors.primaryColor),
            ]);
            this.color1=color1;
            this.color2=color2;
            this.paragraph = Paragraph(this.id+'_p').addCustomStyle(
                [
                    FontFamily("calibri"),
                    Width(width,'px'),
                    FontWeight(500),
                    FontSize(11,'pt'),
                    Height(20,'px'),
                    TextAlignment("center"),
                    Color("FFFFFF"),
                    Cursor(),
                    Transition(),
                    Margin("auto",''),
                    Position("relative"),
                    PositionTop(-5,'px')

                ]
            ).setTextContent(text);
            this.addComponent([this.paragraph]);
            this.addMouseListener(this)
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);



        }
        mouseOver(e){
            this.addCustomStyle([
                BackgroundColor(this.color2)
            ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    class PButton extends HButton{
        constructor(id,alt= "", mouseListener){
            super("pButton_"+id);
            this.alt = alt;
            this.addCustomStyle(
                [
                    BackgroundColor(colors.primaryColor),
                    Border("thin",'hidden'),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(60, 'px'),
                    Width(60, 'px'),
                    FontSize(12,'px'),
                    FontWeight("bold"),
                    TextDecoration(),
                    BorderRadius(100,'px'),
                    Display("inline-block"),
                    Transition("all","500ms","ease")
                ]
            );
            this.setDataRole("none");
            this.paragraph = new HSpan("p_"+id).setTextContent(alt);
            this.paragraph.addCustomStyle(
                [
                    Display("inline-block"),
                    Color("FFFFFF"),
                    TextAlignment('center')
                ]
            );
            this.addComponent(this.paragraph);
            this.addMouseListener(mouseListener)
        }

    }
    class PButton2 extends HButton{
        constructor(id,icons, mouseListener){
            super("pButton_"+id);
            this.addCustomStyle(
                [
                    BackgroundColor(colors.primaryColor),
                    Border("thin",'hidden'),
                    Margin(0, 'px').setTop(5).setRight(10),
                    Height(60, 'px'),
                    Width(60, 'px'),
                    FontSize(12,'px'),
                    FontWeight("bold"),
                    TextDecoration(),
                    BorderRadius(100,'px'),
                    Display("inline-block"),
                    Transition("all","500ms","ease")
                ]
            );
            this.setDataRole("none");
            this.icon = new HIcon(this.id+ "i",icons);
            this.addComponent(this.icon);
            this.addMouseListener(mouseListener)
        }

    }
    class Table extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Height(screen.height-100,'px'),
                Width(screen.width-80,'px'),
                Overflow("hidden"),
                Position("relative"),
            ]);
            this.seed = (screen.height - 200)/60;
            this.items=[];
            this.current=0;
            this.position =0;
            this.max = 0;
            this.center =Division(this.id+"_center").addCustomStyle([
                Width(screen.width-125,'px'),
                Height(screen.height-210,'px'),
                Position(),
                Float("left"),
                Overflow("scroll"),
                Transition()
            ]);
            this.container = Division(this.id+"_con1").addCustomStyle([
                Width(100),
                Height(60,'px'),
                Position("absolute"),
                PositionTop(this.position,'px'),
                Overflow("hidden"),
                Transition()
            ]);
            this.center.addComponent(this.container);
            this.top = Division(this.id+"_top").addCustomStyle([
                Width(100),
                Height(50,'px')
            ]);
            this.sInput =Input(this.id+"_searchBar","search","search",250,"Search").addCustomStyle([
                Width(130,'px'),
                Height(25,'px'),
                Border("thin","solid","#"+colors.primaryColor),
                BorderRadius(5,'px'),
                FontSize(11),
                FontFamily("segoe UI"),
                Position("absolute"),
                PositionRight(10,'px'),
                PositionTop(5,'px'),
            ]);
            this.sInput.setDataRole("none");
            this.sInput.addDocumentListener(this);
            this.top.addComponent([this.sInput]);
            this.bottom = Division(this.id+"_bottom").addCustomStyle([
                Width(100),
                Height(50,'px'),
                Position("absolute"),
                PositionBottom(0)
            ]);
            this.text1 = Paragraph(this.id+"t1").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("Page");
            this.textP = Paragraph(this.id+"tP").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent(this.current+1);
            this.textof = Paragraph(this.id+"tof").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)

            ]).setTextContent("of");
            this.textM = Paragraph(this.id+"tM").addCustomStyle([
                Display("inline"),

            ]).setTextContent(this.max+1);
            this.pos = Division(this.id+"_posD").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Position('absolute'),
                PositionRight(80),
                Display("inline")
            ]);
            this.pos.addComponent([this.text1,this.textP,this.textof,this.textM]);

            this.textI = TextInput(this.id+"textI","",3).addCustomStyle([
                Height(10,'px'),
                Width(15,'px'),
                Margin(0,'px').setRight(2),
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Border("thin","solid","#"+colors.primaryColor),
                BorderRadius(5,'px'),
            ]);
            this.textI.setDataRole("none");
            this.textI.addKeyListener(this);
            this.textDL = Paragraph(this.id+"tDL").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent("/");
            this.textM2 = Paragraph(this.id+"tM2").addCustomStyle([
                Display("inline"),
                Margin(0,'px').setRight(2)
            ]).setTextContent(this.max+1);
            this.go = new PButton(this.id+"_go","",this).addCustomStyle(
                [
                    Width(15,'px'),
                    Height(15,'px'),
                    Display("inline")
                ]
            );
            this.go.setDataRole("none");

            this.posS = Division(this.id+"_posDS").addCustomStyle([
                FontFamily("segoe ui"),
                FontSize(9,'pt'),
                Position('absolute'),
                PositionRight(10),
                PositionBottom(35),
                Display("inline")
            ]);
            this.posS.addComponent([this.textI,this.textDL,this.textM2, this.go]);
            this.bottom.addComponent([this.pos,this.posS]);
            this.leftIcon = new HImage(this.id+"_lIcon", arrowLeftT).addCustomStyle([
                Height(15,'px'),
                Position(),
                PositionTop((screen.height-230)/2,'px'),
                PositionLeft(5,'px'),
            ]);
            this.rightIcon = new HImage(this.id+"_RIcon", arrowRightT).addCustomStyle([
                Height(15,'px'),
                Position(),
                PositionTop((screen.height-230)/2,'px'),
                PositionLeft(5,'px'),

            ]);

            this.leftIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.leftIcon,windowEvent));
            });
            this.rightIcon.domElement.addEventListener("click", (windowEvent) => {
                this.mouseClicked(new MouseEvent("click",this.rightIcon,windowEvent));
            });
            this.go.domElement.addEventListener("click", (windowEvent)=>{
                this.mouseClicked(new MouseEvent("click",this.go,windowEvent));
            });
            this.left = Division(this.id+"_left").addCustomStyle([
                Width(20,'px'),
                Height(this.domElement.clientHeight-100,'px'),
                Position(),
                Float("left"),
            ]);
            this.left.addComponent(this.leftIcon);
            this.right = Division(this.id+"_right").addCustomStyle([
                Width(20,'px'),
                Height(this.domElement.offsetHeight-100,'px'),
                Position("absolute"),
                PositionRight(10,'px')
            ]);
            this.right.addComponent(this.rightIcon);
            this.addComponent([
                this.top,this.left,this.center,this.right,this.bottom
            ])
        }

        search(pattern){
            let count = 0;
            let myFunction =(element, index ) =>{
                if(!this.check(pattern, element)){
                    element.setVisible(false);
                    count++;
                }
                else {
                    element.setVisible(true);
                }
            };
            this.items.forEach(myFunction);
            this.max = Math.trunc((this.items.length-count)/this.seed) > 4 ? 4:Math.trunc((this.items.length-count)/this.seed)
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
            this.position=0;
            this.current=0;
            this.container.addCustomStyle(PositionTop((this.position)));
            this.textP.setTextContent(this.current+1)
        }

        check(pattern,  item){
            if (pattern.length !== 0){
                if(Helper.KMPSearch(pattern,item.getAilment()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getDate()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getPhysician()))
                    return true;
                if(Helper.KMPSearch(pattern,item.getPeriod()))
                    return true;

                return false;
            }
            else return  true;
        }
        documentChanged(e){
            if(e.getSource() === this.sInput)
                this.search(e.getSource().getInputText());
        }
        keyPressed(e){
            if(e.getSource() === this.textI && e.getWindowEvent().keyCode === 13){
                try {
                    this.goto(parseInt(e.getSource().getInputText()))
                }
                catch (e){

                }
            }
        }
        goto(index){
            if( index-1 <= this.max && Number.isInteger(index) && index > 0){
                this.current = index-1;
                this.position = -(this.seed*60) * (index-1);
                this.container.addCustomStyle(PositionTop(this.position));
                this.textP.setTextContent(this.current+1)
            }
        }

        addDownloadable(downloadable){
            try{
                downloadable.forEach((item)=>{
                    this.paginate(item);
                })
            }
            catch(e){
                this.paginate(downloadable);
            }
        }

        paginate(item){
            if(this.items.length < 90){
                this.container.addCustomStyle([
                    Height(60*(this.items.length+1),'px')]);
                this.container.addComponent(item);
                this.adjustValues(item);
            }
        }
        adjustValues(item){
            this.max = Math.trunc((this.items.length+1)/this.seed) > 4 ? 4:Math.trunc((this.items.length+1)/this.seed);
            this.items.push(item);
            this.textM.setTextContent(this.max+1);
            this.textM2.setTextContent(this.max+1);
        }

        switch(button){
            if(button === this.leftIcon && this.current > 0){
                this.container.addCustomStyle(PositionTop((this.position +(screen.height-210))));
                this.current--;
                this.position = this.position +(this.seed*65);
                this.textP.setTextContent(this.current+1);
            }
            if(button === this.rightIcon && this.current < this.max){
                this.container.addCustomStyle(PositionTop((this.position -(screen.height-210))));
                this.current++;
                this.position = this.position -(this.seed*65);
                this.textP.setTextContent(this.current+1);
            }

        }


        mouseOut(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([

                ])
            }
        }

        mouseOver(e) {
            if (e.getSource() instanceof PButton) {
                e.getSource().addCustomStyle([

                ])
            }
        }

        mouseClicked(e){
            if(e.getSource() === this.leftIcon || e.getSource() === this.rightIcon)
                this.switch(e.getSource());

            if(e.getSource() === this.go){
                try {
                    this.goto(parseInt(this.textI.getInputText()))
                }
                catch (e){

                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){
        }
        mouseMoved(e){
        }
        mouseDown(e){
        }
        mouseUp(e){
        }

    }
    class LoaderSmall extends HDivision{
        constructor(id="loader-wrapper") {
            super(id);
            this.addCustomStyle([Opacity(1),
                Transition("opacity","1000ms")]);
            this.loader = Division("loaderSmall").addCustomStyle([
                Opacity(1),
                Transition("opacity","1000ms")
            ]);
            this.addComponent([this.loader])
        }

        fadeIn(){
            this.addCustomStyle(Display("block"));
            this.addCustomStyle(Opacity(1));
            this.loader.addCustomStyle(Opacity(1));
        }

        fadeOut(){
            this.addCustomStyle(Opacity(0));
            this.loader.addCustomStyle(Opacity(0));
            this.addCustomStyle(Display("none"))
        }
    }
    class GenButtonRounded extends GenButton{


        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.addCustomStyle(BorderRadius(15,'px'))
        }
    }
    class SubmitButton extends GenButtonRounded{
        constructor(id, text, width, color1, color2) {
            super(id, text, width, color1, color2);
            this.loader = new LoaderSmall(this.id+"loader");
            this.loader.fadeOut();
            this.addComponent(this.loader);
            this.turnOff();
        }

        turnOff(){
            this.addCustomStyle([
                BackgroundColor(ECS.getDisabled())
            ]);
            this.disabled=true;

        }
        turnOn(){
            this.addCustomStyle([
                BackgroundColor(this.color1)
            ]);
            this.disabled=false;
        }

        fadeIn(){
            this.loader.fadeIn();
        }

        fadeOut(){
            this.loader.fadeOut();
        }
        isDisabled(){
            return this.disabled;
        }

        mouseClicked(e){

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color1)
                ]);



        }
        mouseOver(e){
            if(!this.disabled)
                this.addCustomStyle([
                    BackgroundColor(this.color2)
                ]);

        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    /*
    Top Pages
     */

    class Login extends HDivision{
        constructor(id) {
            super('login');
            this.addCustomStyle(
                [
                    Width(100,'vw'),
                    Height(100,'vh'),
                    Position("fixed"),
                    PositionTop(0,'px'),
                    ZIndex(0),
                    Opacity(1),
                    BackgroundColor("FFFFFF"),
                    ZIndex(200)
                ]
            );
            this.setDataRole("page");
            this.title= Paragraph(this.id+'title').setTextContent("Health Tracker").addCustomStyle([
                FontSize(24,'pt'),
                Width(100),
                Height(70,'px'),
                FontWeight("bold"),
                FontFamily("calibri"),
                Margin(0),
                Padding(0,'px').setLeft(10).setTop(10),
                BackgroundColor(colors.primaryColor),
                Color("FFFFFF")
            ]);
            this.container = Division(this.id+"_con").addCustomStyle([
                Width(screen.width-40,'px'),
                Height(400,'px'),
                Margin("auto",''),
                Overflow("hidden"),
                Position("relative"),
                PositionTop(25,'px'),
                BorderRadius(2,'px'),
                Overflow("hidden")
            ]);
            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";

            this.body = Division(this.id+"_body").addCustomStyle([
                Position("relative"),
                Width(screen.width-40,'px'),
                Height(400,'px'),
                BackgroundColor("FFFFFF"),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);
            this.formBox = Division(this.id+"_formBox").addCustomStyle([
                Width(90),
                Height(300,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                Margin("auto","")
            ]);
            this.formBox.domElement.style.marginTop="50px";
            this.header = Division(this.id+"_header").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxt = Paragraph(this.id+"_hTxt").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(0).setTop(15),
                FontWeight("bold")

            ]).setTextContent("Sign In");
            this.content = Division("content").addCustomStyle([
                Width(100,),
                Height(200,'px')
            ]);
            this.labelUN = Label(this.id+"_usernameL",this.id+"_username").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputUN= Input(this.id+"_username","text","username",50,"Username:")
                .addCustomStyle([
                    Height(45,'px'),
                    FontFamily("calibri"),
                    Width(95),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPW = Label(this.id+"_passwordL",this.id+"_password").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputPW= Input(this.id+"_password","password","password",50,"Password:")
                .addCustomStyle([
                    Height(45,'px'),
                    Width(95),
                    FontFamily("calibri"),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);



            this.inputUN.setDataRole("none");
            this.inputPW.setDataRole("none");

            this.inputUN.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.submit = new SubmitButton("btnLogin","Sign In", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.setDataRole("none");
            this.submit.addMouseListener(this);
            this.inputUN.addMouseListener(this);
            this.inputPW.addMouseListener(this);
            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);


            this.noaccount= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(120,'px'),
                FontFamily("calibri"),
                Color(colors.primaryColor)

            ]);
            this.forgotPassword = Paragraph(this.id+"_fP").addCustomStyle([
                Position(),
                Float("right"),
                Margin(0,'px').setRight(25)
            ]).setTextContent("Forgot Password?");

            this.nay = Anchor(this.id+"_nay","/#register").addCustomStyle([
                Margin(0,'px').setLeft(25)
            ]).setTextContent("No Account Yet?");

            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");



            this.body.addComponent([this.formBox, this.noaccount]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([this.labelUN,this.inputUN,this.labelPW,this.inputPW,this.submit]);
            this.noaccount.addComponent([this.forgotPassword,this.nay, this.toastP]);

            this.container.addComponent([this.body]);
            this.addComponent([this.title,this.container]);

            this.unLValid= false;
            this.passLValid= false;

            this.checked =false;
        }

        toast(text){
            this.toastP.setTextContent(text);
        }
        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }
        inputsValid(){
            return this.unValid && this.passValid;
        }
        documentChanged(e){
            if (e.getSource() === this.inputUN){
                this.checkUsernameL();
            }
            if (e.getSource() === this.inputPW){
                this.checkPWL();
            }

        }

        checkUsernameL(){
            if(this.inputUN.getInputText().length < 1){
                this.unValid = false;
                this.enableSubmit();
            }
            else{
                this.unValid = true;
                this.enableSubmit();
            }
        }
        checkPWL(){
            if(this.inputPW.getInputText().length < 1){
                this.passValid = false;
                this.enableSubmit();
            }
            else{
                this.passValid = true;
                this.enableSubmit();
            }
        }
        packageL(){
            let json = {};
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPW.getInputText();
            return json;

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/login', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.submit){
                        if(!this.submit.isDisabled()){
                            this.submit.turnOff();
                            this.submit.fadeIn();
                            this.sendR(this.packageL(), (e)=>{

                                this.submit.fadeOut();
                                db.user = e.user;
                                if (db.user.role === "Physician"){
                                    db.healthIssues = e.healthIssuesM ? e.healthIssuesM : [];
                                    db.healthIssuesP = e.healthIssuesP ? e.healthIssuesP:[];
                                    localStorage.setItem("db", JSON.stringify(db));
                                }
                                if (db.user.role === "Patient"){
                                    db.physicians = e.physicians ? e.physicians: [];
                                    db.healthIssues = e.healthIssues ? e.healthIssues: [];
                                    localStorage.setItem("db", JSON.stringify(db));
                                }

                                start();



                                let a = document.createElement('a');
                                a.href = window.location.pathname+"#index";
                                a.click()

                            }, (e)=>{
                                this.submit.fadeOut();
                                this.toast("Error logging you in!")
                            },'login')
                        }
                    }
                    if (e.getSource() === this.nay) {
                    }
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)"))
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword){
                e.getSource().addCustomStyle(Color(colors.primaryColor))
            }

        }
        mouseOver(e){
            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "#"+colors.primaryColor))
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword){
                e.getSource().addCustomStyle(Color("00000"))
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class Register extends HDivision{
        constructor() {
            super('register');
            this.addCustomStyle(
                [
                    Width(100,'vw'),
                    Height(100,'vh'),
                    Position("fixed"),
                    PositionTop(0,'px'),
                    ZIndex(0),
                    Opacity(1),
                    BackgroundColor("FFFFFF"),
                    ZIndex(200)
                ]
            );
            this.setDataRole("page");
            this.title= Paragraph(this.id+'title').setTextContent("Health Tracker").addCustomStyle([
                FontSize(24,'pt'),
                Width(100),
                Position("fixed"),
                ZIndex(300),
                Height(70,'px'),
                FontWeight("bold"),
                FontFamily("calibri"),
                Margin(0),
                Padding(0,'px').setLeft(10).setTop(10),
                BackgroundColor(colors.primaryColor),
                Color("FFFFFF")
            ]);
            this.container = Division(this.id+"_con").addCustomStyle([
                Width(700,'px'),
                Margin("auto",''),
                Overflow("hidden"),
                Position("relative"),
                PositionTop(25,'px'),
                BorderRadius(2,'px'),
                Overflow("hidden")
            ]);
            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";

            this.body = Division(this.id+"_body").addCustomStyle([
                Position("relative"),
                Width(screen.width-20,'px'),
                Height(800,'px'),
                BackgroundColor("FFFFFF"),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);
            this.formBox = Division(this.id+"_formBox").addCustomStyle([
                Width(90),
                Height(700,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                Margin("auto","")
            ]);
            this.formBox.domElement.style.marginTop="50px";
            this.header = Division(this.id+"_header").addCustomStyle([
                Height(50,'px'),
                Width(100),
                Overflow("hidden")
            ]);
            this.headerTxt = Paragraph(this.id+"_hTxt").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                Margin(0,'px').setLeft(0).setTop(15),
                FontWeight("bold")

            ]).setTextContent("Register");
            this.content = Division("content").addCustomStyle([
                Width(100,),
                Height(200,'px')
            ]);
            this.labelFN = Label(this.id+"_firstnameL",this.id+"_firstname").setTextContent("First Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputFN= Input(this.id+"_firstname","text","firstname",50,"First Name:")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelLN = Label(this.id+"_lastnameL",this.id+"_lastname").setTextContent("Last Name:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputLN= Input(this.id+"_lastname","text","lastname",50,"Last Name:")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelUN = Label(this.id+"_usernameL",this.id+"_username").setTextContent("Username:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputUN= Input(this.id+"_username","text","username",50,"Username:")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelEmail = Label(this.id+"_emailL",this.id+"_email").setTextContent("Email").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputEmail= Input(this.id+"_email","text","email",50,"Email:")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelRole = Label(this.id+"_roleL",this.id+"_role").setTextContent("Role:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputRole= DropDown(this.id+"_role","role")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.inputRole.addComponent([
                DropDownOption('patientD',"patient",'patient',true).setTextContent("Patient")
                    .setDataRole("none"),
                DropDownOption('patientD',"physician",'physician',true).setTextContent("Physician")
                    .setDataRole("none"),

            ]);
            this.labelCategory = Label(this.id+"_categoryL",this.id+"_category").setTextContent("Category:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputCategory= Input(this.id+"_category","text","category",50,"Category:")
                .addCustomStyle([
                    Height(30,'px'),
                    FontFamily("calibri"),
                    Width(90),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")

                ]);
            this.labelPW = Label(this.id+"_passwordL",this.id+"_password").setTextContent("Password:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputPW= Input(this.id+"_password","password","password",50,"Password:")
                .addCustomStyle([
                    Height(30,'px'),
                    Width(90),
                    FontFamily("calibri"),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);
            this.labelPWR = Label(this.id+"_passwordRL",this.id+"_passwordR").setTextContent("Repeat password:").addCustomStyle([
                FontFamily("calibri"),
                Width(90),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.inputPWR= Input(this.id+"_passwordR","password","passwordR",50,"Repeat password:")
                .addCustomStyle([
                    Height(30,'px'),
                    Width(90),
                    FontFamily("calibri"),
                    Display("block"),
                    Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                    Padding(5,'px'),
                    Transition(),
                    BorderRadius(3,'px'),
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)")
                ]);


            this.errFN = new HImage("errFN",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);
            this.errLN = new HImage("errLN",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);
            this.errUN = new HImage("errUN",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);
            this.errEm = new HImage("errEM",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);
            this.errPs = new HImage("errPs",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);
            this.errPsC = new HImage("errPsC",errorC).addCustomStyle([
                Position(),
                Float("left"),
                Width(0,'px'),
            ]);

            this.inputFN.setDataRole("none");
            this.inputLN.setDataRole("none");
            this.inputUN.setDataRole("none");
            this.inputEmail.setDataRole("none");
            this.inputRole.setDataRole("none");
            this.inputCategory.setDataRole("none");
            this.inputPW.setDataRole("none");
            this.inputPWR.setDataRole("none");

            this.inputUN.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.inputPW.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.submit = new SubmitButton("btnRegister","Register", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.setDataRole("none");


            this.noaccount= Division(this.id+"NAcc").addCustomStyle([
                Width(100),
                Height(120,'px'),
                FontFamily("calibri"),
                Color(colors.primaryColor)

            ]);
            this.forgotPassword = Paragraph(this.id+"_fP").addCustomStyle([
                Position(),
                Float("right"),
                Margin(0,'px').setRight(25)
            ]).setTextContent("Forgot Password?");

            this.nay = Anchor(this.id+"_login","/#login").addCustomStyle([
                Margin(0,'px').setLeft(25)
            ]).setTextContent("Sign in Instead");

            this.toastP = Paragraph(this.id+"_toastP").addCustomStyle([
                Display("block"),
                Position(),
                FontSize(10,'pt'),
                Float("right"),
                Margin(0,'px').setRight(20),
                Color(ECS.getDanger())
            ]).setTextContent("");



            this.body.addComponent([this.formBox, this.noaccount]);
            this.header.addComponent(this.headerTxt);
            this.formBox.addComponent([this.header,this.content]);
            this.content.addComponent([
                this.errFN,this.labelFN,this.inputFN,this.errLN,
                this.labelLN,this.inputLN,this.errEm,
                this.labelEmail,this.inputEmail,this.errUN,
                this.labelUN,this.inputUN,
                this.labelRole,this.inputRole,
                this.labelCategory,this.inputCategory,this.errPs,
                this.labelPW,this.inputPW, this.errPsC,
                this.labelPWR,this.inputPWR,
                this.submit]);
            this.noaccount.addComponent([this.forgotPassword,this.nay, this.toastP]);

            this.container.addComponent([this.body]);
            this.addComponent([this.title,this.container]);

            this.inputUN.addDocumentListener(this);
            this.inputPW.addDocumentListener(this);
            this.inputFN.addDocumentListener(this);
            this.inputLN.addDocumentListener(this);
            this.inputUN.addDocumentListener(this);
            this.inputEmail.addDocumentListener(this);
            this.inputPWR.addDocumentListener(this);
            this.fnValid= false;
            this.fnValid= false;
            this.lnValid= false;
            this.unValid= false;
            this.emailValid= false;
            this.passValid= false;
            this.submit.addMouseListener(this);

            this.checked =false;
        }

        enableSubmitR(){
            if(this.inputsValidR()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }

        inputsValidR(){
            return this.fnValid &&this.lnValid &&this.unValid && this.emailValid && this.passValid;
        }
        packageR(){
            let json = {};
            json['firstName']=this.inputFN.getInputText();
            json['lastName']=this.inputLN.getInputText();
            json['email']=this.inputEmail.getInputText();
            json['category']=this.inputCategory.getInputText();
            json['role']=this.inputRole.getSelected();
            json['username']=this.inputUN.getInputText();
            json['password']=this.inputPWR.getInputText();
            return (json);
        }
        async checkUsername(){
            if(this.inputUN.getInputText().length < 4){
                this.errUN.addCustomStyle(Width(12,'px'));
                this.unValid = false;
                this.enableSubmitR();
            }
            else{
                this.errUN.addCustomStyle(Width(0,'px'));
                let json = {};
                json['username']=this.inputUN.getInputText();
                await this.sendR(json, ()=>{
                    this.errUN.addCustomStyle(Width(0,'px'));
                    this.unValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errUN.addCustomStyle(Width(12,'px'));
                    this.unValid = false;
                    this.enableSubmitR();
                },'checkUsername');
            }
        }
        async checkEmail(){
            if(this.inputEmail.getInputText().length < 3){
                this.errEm.addCustomStyle(Width(12,'px'));
                this.emailValid = false;
                this.enableSubmitR();
            }

            else{
                this.errEm.addCustomStyle(Width(0,'px'));
                let json = {};
                json['email']=this.inputEmail.getInputText();
                await this.sendR(json, ()=>{
                    this.errEm.addCustomStyle(Width(0,'px'));
                    this.emailValid = true;
                    this.enableSubmitR();
                }, ()=>{
                    this.errEm.addCustomStyle(Width(12,'px'));
                    this.emailValid = false;
                    this.enableSubmitR();
                },'checkEmail');
            }
        }
        checkPWR(){
            if(this.inputPW.getInputText().length < 8){
                this.passValid = false;
                this.errPs.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.errPs.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
            if(this.checked){
                if(this.inputPW.getInputText() !== this.inputPW.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkPWR2(){
            if(!this.checked){
                this.checked = true;
            }
            if(this.inputPWR.getInputText().length < 8){
                this.passValid = false;
                this.errPsC.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                if(this.inputPWR.getInputText() !== this.inputPWR.getInputText()){
                    this.errPsC.addCustomStyle(Width(12,'px'));
                    this.passValid = false;
                    this.enableSubmitR();
                }
                else{
                    this.errPsC.addCustomStyle(Width(0,'px'));
                    this.passValid = true;
                    this.enableSubmitR();
                }
            }
        }
        checkFN(){
            if(this.inputFN.getInputText().length < 1){
                this.fnValid = false;
                this.errFN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.fnValid = true;
                this.errFN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        checkLN(){
            if(this.inputLN.getInputText().length < 1){
                this.lnValid = false;
                this.errLN.addCustomStyle(Width(12,'px'));
                this.enableSubmitR();
            }
            else{
                this.lnValid = true;
                this.errLN.addCustomStyle(Width(0,'px'));
                this.enableSubmitR();
            }
        }
        toast(text){
            this.toastP.setTextContent(text);
        }
        enableSubmit(){
            if(this.inputsValid()){
                this.submit.turnOn();
            }
            else{
                this.submit.turnOff();
            }
        }
        inputsValid(){
            return this.unLValid && this.passLValid;
        }
        documentChanged(e){
            if (e.getSource() === this.inputFN){
                this.checkFN();
            }
            if (e.getSource() === this.inputLN){
                this.checkLN();
            }
            if (e.getSource() === this.inputUN){
                this.checkUsername();
            }
            if (e.getSource() === this.inputEmail){
                this.checkEmail()
            }
            if (e.getSource() === this.inputPW){
                this.checkPWR();
            }
            if (e.getSource() === this.inputPWR){
                this.checkPWR2();
            }

        }

        async sendR(parameters, func1,func2, type){
            parameters.type =type;
            let response = await fetch('http://health-tracker-serve.herokuapp.com/register', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.submit){
                        if(!this.submit.isDisabled()){
                            this.submit.turnOff();
                            this.submit.fadeIn();
                            this.sendR(this.packageR(), (e)=>{
                                this.submit.fadeOut();
                                this.toast("Registration Successful!");
                                let a = document.createElement('a');
                                a.href =window.location.href.replace("register","login");
                                a.click()

                                }, (e)=>{
                                this.submit.fadeOut();
                                this.toast("Error registering User!")
                            },'register')
                        }
                    }
                    if (e.getSource() === this.nay) {
                        this.body.addCustomStyle(Width(0));
                        this.image.addCustomStyle(Width(250, 'px'));
                    }
                    if (e.getSource() === this.nayR){
                        this.body.addCustomStyle(Width(350,'px'));
                        this.image.addCustomStyle(Width(350,'px'));
                    }
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "rgba(0, 0, 0, 0.1)"))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon2
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getPrimaryColor()))
            }

        }
        mouseOver(e){
            if(e.getSource() instanceof HInput){
                e.getSource().addCustomStyle(
                    Border("1px","solid", "#"+colorScheme.getDenaryColor()))
            }
            if(e.getSource() === this.closeIcon || e.getSource() === this.closeIconR){
                e.getSource().domElement.src = closeIcon
            }
            if(e.getSource() === this.nay || e.getSource() === this.forgotPassword || e.getSource() === this.nayR || e.getSource() === this.forgotPasswordR){
                e.getSource().addCustomStyle(Color(colorScheme.getBlackColor()))
            }
        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class Index extends HDivision{
        constructor() {
            super('index');
            this.mainViewB = new HDivision("mainViewB");
            this.mainViewB.addCustomStyle([
                Width(screen.width-75,'px'),
                Height(screen.height,'px'),
                Position("relative"),
                PositionLeft(72,'px')
            ]);

            this.createNew = new HAnchor("cretenew", "/#cHI").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(83,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(0),
                BackgroundColor(ECS.getSuccess()),
                Color("FFFFFF"),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Create New");

            if (db.user.role === "Physician"){
                this.createNew.addCustomStyle(Display("none"))
            }
            this.createNew.domElement.style.color ="#FFFFFF";
            this.createNew.setDataRel();
            this.createNewPage = new CreateHealthIssue();
            this.setDataRole("page");
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Position()
            ]);
            this.titleSection = Division(this.id+'titleSection');
            this.titleSection.addCustomStyle([
                Height(60,'px'),
                Width(screen.width-90,'px'),
                BottomBorder("thin", "solid"),
                Padding(0,'px').setLeft(10).setTop(5)

            ]);


            this.itemSection = Division(this.id+'itemSection');
            this.itemSection.addCustomStyle([
                Height(100,'px'),
                Width(100),
                Padding(0,'px').setLeft(10).setTop(5)
            ]);

            this.pageTitle = Paragraph(this.id+"pageTitle").setTextContent("Hi, " + db.user.firstName +"!");
            this.pageTitle.addCustomStyle([
                FontFamily("Calibri"),
                Height(50,'px'),
                Padding(0),
                Float("left"),
                Margin(0,'px').setTop(10),
                FontSize(13,'pt'),
                FontStyle("italic")
            ]);

            this.titleSection.addComponent([this.pageTitle, this.createNew, this.createNewPage]);
            this.summariesDiv = Division('summariesDiv');
            this.summariesDiv.addCustomStyle([
                Margin(0,'px').setTop(20),
                Position(),
                Display("inline"),
                Float("left"),
                Width(100)
            ]);
            this.chartDiv = Division('chartDiv');
            this.chartDiv.addCustomStyle([
                Margin(0,'px').setTop(20),
                Border("thin","solid"),
                Height(150,'px'),
                Display("inline"),
                Float("left"),
                Width(95)
            ]);
            let isSick = false;
            let solved = db.healthIssues.length;
            db.healthIssues.forEach((item)=>{
                if (item.level < 2){
                    isSick = true;
                    solved--;
                }
            });

            if (db.user.role === "Physician")
                        this.hsSum = new HealthSummary(this.id +'hsSum',["fa", "fa-heart"],"Rating",
                            (solved *100/(db.healthIssues.length)) +"%");
            else
                this.hsSum = new HealthSummary(this.id +'hsSum',["fa", "fa-heart"],"Health Status", isSick ? "ill": "Fit");
            this.hsIssue = new HealthSummary(this.id +'hsIssue',["fa", "fa-layer-group"],"Health Issues Logged", db.healthIssues.length);
            this.hsSolved = new HealthSummary(this.id +'hsSolved',["fa", "fa-ambulance"],"Health Solved", solved);

            this.summariesDiv.addComponent([
                this.hsSum,this.hsIssue,this.hsSolved
            ]);

            this.mainViewB.addComponent([
                this.titleSection, this.summariesDiv, /*this.chartDiv*/
            ]);
            this.addComponent([
                this.mainViewB
            ]);
        }

        update(){
            this.pageTitle.setTextContent("Health Tracker");
        }
    }
    class HealthIssues extends HDivision{

        constructor(id="") {
            super('healthIssues'+id);
            this.count=0;

            this.healthIssuesB = new HDivision("healthIssuesB");
            this.healthIssuesB.addCustomStyle([
                Width(screen.width-75,'px'),
                Height(screen.height,'px'),
                Padding(0,'px').setTop(10),
                Position("relative"),
                PositionLeft(75,'px')
            ]);
            this.setDataRole("page");
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Position()
            ]);
            this.titleSection = Division(this.id+'titleSection');
            this.titleSection.addCustomStyle([
                Height(80,'px'),
                Width(90),
                Padding(0,'px').setLeft(10).setTop(5),
                Margin("auto","")
            ]);

            this.itemSection = Division('titleSection');
            this.itemSection.addCustomStyle([
                Height(60,'px'),
                Width(100),
                Padding(0,'px').setLeft(10).setTop(5)
            ]);

            this.pageTitle = Paragraph(this.id+"pageTitle").setTextContent("Good Day " + db.user.firstName +"!");
            this.pageTitle2 = Paragraph(this.id+"pageTitle2").setTextContent("Please select a Health Issue!");
            if (id==="pend"){
                this.pageTitle = Paragraph("pageTitle").setTextContent("Health Issues Pending");
            }
            this.pageTitle.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(14,'pt'),
                FontWeight("bold"),
                Margin(0,'px').setTop(10)
            ]);
            this.pageTitle2.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(12,'pt'),
                FontStyle("italic"),
                Margin(0,'px').setTop(5)
            ]);
            this.titleSection.addComponent([this.pageTitle, this.pageTitle2]);
            this.table = new Table(this.id+"dis");
            this.healthIssuesB.addComponent([
                this.titleSection, this.table
            ]);
            this.addComponent([
                this.healthIssuesB
            ]);
        }
        populate(){
            db.healthIssues.forEach((item,index)=>{
                    this.table.addDownloadable(
                        new HealthIssue("hiPa_"+index,
                            item.ailment,
                            12, item.physician,index,
                            item.date));
                }
            )
        }
        repopulate(){

            this.count=0;
            while (this.table.container.domElement.firstChild) {
                this.table.container.domElement.removeChild(this.table.container.domElement.firstChild);
            }
            db.healthIssues.forEach((item,index)=>{
                    this.table.addDownloadable(
                        new HealthIssue("hiPa_"+index,
                            item.ailment,
                            12, item.physician,index,
                            item.date));
                }
            )
        }
    }
    class HealthIssuesPending extends HDivision{
        constructor(id="") {
            super('healthIssues'+id);
            this.healthIssuesB = new HDivision(this.id+"healthIssuesB");
            this.healthIssuesB.addCustomStyle([
                Width(screen.width-75,'px'),
                Height(screen.height,'px'),
                Padding(0,'px').setTop(10),
                Position("relative"),
                PositionLeft(75,'px')
            ]);
            this.setDataRole("page");
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Position()
            ]);
            this.titleSection = Division(this.id+'titleSection');
            this.titleSection.addCustomStyle([
                Height(80,'px'),
                Width(90),
                Padding(0,'px').setLeft(10).setTop(5),
                Margin("auto","")
            ]);

            this.itemSection = Division(this.id+'titleSection');
            this.itemSection.addCustomStyle([
                Height(60,'px'),
                Width(100),
                Padding(0,'px').setLeft(10).setTop(5)
            ]);

            this.pageTitle = Paragraph(this.id+"pageTitle").setTextContent("Good Day " + db.user.firstName +"!");
            this.pageTitle2 = Paragraph(this.id+"pageTitle2").setTextContent("Please select a Health Issue!");
            if (id==="pend"){
                this.pageTitle = Paragraph(this.id+"pageTitle").setTextContent("Health Issues Pending");
            }
            this.pageTitle.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(14,'pt'),
                FontWeight("bold"),
                Margin(0,'px').setTop(10)
            ]);
            this.pageTitle2.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(12,'pt'),
                FontStyle("italic"),
                Margin(0,'px').setTop(5)
            ]);
            this.titleSection.addComponent([this.pageTitle, this.pageTitle2]);
            this.table = new Table("dis");
            this.healthIssuesB.addComponent([
                this.titleSection, this.table
            ]);
            this.addComponent([
                this.healthIssuesB
            ]);
        }
        populate(){
            db.healthIssuesP.forEach((item,index)=>{
                if(item.level === 0){
                    this.table.addDownloadable(
                        new HealthIssueP("hiPa_"+index,
                            item.ailment,
                            12, item.physician,index,
                            item.date));
                }
            })
        }
        repopulate(){

            while (this.table.container.domElement.firstChild) {
                this.table.container.domElement.removeChild(this.table.container.domElement.firstChild);
            }
            db.healthIssuesP.forEach((item,index)=>{
                if(item.level < 1){
                    this.table.addDownloadable(
                        new HealthIssueP("hiPa_"+index,
                            item.ailment,
                            12, item.physician,index,
                            item.date));
                }
            })
        }
    }

    class Physicians extends HDivision{
        constructor() {
            super('physicians');

            this.physiciansB = new HDivision("physiciansB");
            this.physiciansB.addCustomStyle([
                Width(screen.width-75,'px'),
                Height(screen.height,'px'),
                Position("relative"),
                PositionLeft(75,'px')
            ]);
            this.setDataRole("page");
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Position()
            ]);
            this.titleSection = Division(this.id+'titleSection');
            this.titleSection.addCustomStyle([
                Height(70,'px'),
                Width(90),
                Padding(0,'px').setLeft(10).setTop(5),
                Margin("auto","")
            ]);


            this.itemSection = Division('titleSection');
            this.itemSection.addCustomStyle([
                Height(60,'px'),
                Width(100),
                Padding(0,'px').setLeft(10).setTop(5)
            ]);

            this.pageTitle = Paragraph(this.id+"pageTitle").setTextContent("Physicians");
            this.pageTitle2 = Paragraph(this.id+"pageTitle2").setTextContent("View all Physicians!");
            this.pageTitle.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(14,'pt'),
                FontWeight("bold"),
                Margin(0,'px').setTop(10)
            ]);
            this.pageTitle2.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                Float("left"),
                FontSize(12,'pt'),
                FontStyle("italic"),
                Margin(0,'px').setTop(5)
            ]);
            this.titleSection.addComponent([this.pageTitle, this.pageTitle2]);
            this.table = new Table("disPhy");
            this.table.addDownloadable(new Physician("pI1", "Physician1", "Koboko", "", "Surgeon"));

            this.physiciansB.addComponent([
                this.titleSection,this.table
            ]);
            this.addComponent([
                this.physiciansB
            ]);

        }
        populate(){
            db.physicians.forEach((item,index)=>{
                    this.table.addDownloadable(
                        new Physician("hi_"+index,
                            item.firstName, item.lastName,
                            item.image,
                            item.category,index));
                }
            )
        }
        repopulate(){
            this.count=0;
            while (this.table.container.domElement.firstChild) {
                this.table.container.domElement.removeChild(this.table.container.domElement.firstChild);
            }
            db.physicians.forEach((item,index)=>{
                    this.table.addDownloadable(
                        new Physician("hi_"+index,
                            item.firstName, item.lastName,
                            item.image,
                            item.category,index));
                }
            )
        }
    }
    class Settings extends HDivision{
        constructor() {
            super('settings');
            this.settingsB = new HDivision("settingsB");
            this.settingsB.addCustomStyle([
                Width(screen.width-75,'px'),
                Height(screen.height,'px'),
                Position("relative"),
                PositionLeft(75,'px')
            ]);
            this.setDataRole("page");
            this.addCustomStyle([
                Width(screen.width,'px'),
                Height(screen.height,'px'),
                Position()
            ]);
            this.titleSection = Division(this.id+'titleSection');
            this.titleSection.addCustomStyle([
                Height(80,'px'),
                Width(90),
                Padding(0,'px').setLeft(10).setTop(5),
                Margin("auto","")
            ]);

            this.itemSection = Division('titleSection');
            this.itemSection.addCustomStyle([
                Height(60,'px'),
                Width(100),
                Padding(0,'px').setLeft(10).setTop(5)
            ]);

            this.pageTitle = Paragraph("pageTitle").setTextContent("Settings");
            this.pageTitle2 = Paragraph(this.id+"pageTitle2").setTextContent("Modify System Settings!");
            this.pageTitle.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(14,'pt'),
                FontWeight("bold"),
                Margin(0,'px').setTop(10)
            ]);
            this.pageTitle2.addCustomStyle([
                FontFamily("Calibri"),
                Height(30,'px'),
                Padding(0),
                FontSize(12,'pt'),
                FontStyle("italic"),
                Margin(0,'px').setTop(5)
            ]);
            this.titleSection.addComponent([this.pageTitle, this.pageTitle2]);

            this.form = Division('settingsForm');
            this.form.addCustomStyle([


            ]);
            this.selectThemeLabel = Label('selectColor', "selectColor").setTextContent("Choose Theme:").
            addCustomStyle([
                FontWeight("bold")
            ]);
            this.selectTheme = DropDown('selectColor',  "selectColor");
            this.selectTheme.addComponent([
                DropDownOption(this.id+ 'default',"default",'').setTextContent("")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'gold',"gold",'gold').setTextContent("Gold")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'maroon',"maroon",'maroon').setTextContent("Maroon")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'navy',"navy",'navy').setTextContent("Navy")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'indigo',"indigo",'indigo').setTextContent("Indigo")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'green',"green",'green').setTextContent("Green")
                    .setDataRole("none"),
                DropDownOption(this.id+ 'black',"black",'black').setTextContent("Black")
                    .setDataRole("none"),

            ]);
            this.selectThemeDiv = Division('selectColorDiv').addCustomStyle([
                FontFamily('segoe ui'),
                FontSize(10),
                Width(80)
            ]);
            this.selectThemeDiv.addComponent([this.selectThemeLabel, this.selectTheme]);


            this.selectCountryLabel = Label('selectCountry', "selectCountry").setTextContent("Choose Country:").
            addCustomStyle([
                FontWeight("bold")
            ]);
            this.selectCountry = DropDown('selectCountry',  "selectCountry");
            countries.forEach((item)=>{
                this.selectCountry.addComponent(
                    DropDownOption(this.id+ item.code,item.name,item.name).setTextContent(item.name)
                        .setDataRole("none"))
            });
            this.selectCountryDiv = Division('selectColorDiv').addCustomStyle([
                FontFamily('segoe ui'),
                FontSize(10),
                Width(80)
            ]);
            this.selectCountryDiv.addComponent([this.selectCountryLabel, this.selectCountry]);


            this.selectLanguageLabel = Label('selectLanguage', "selectLanguage").setTextContent("Choose Language:").
            addCustomStyle([
                FontWeight("bold")
            ]);
            this.selectLanguage = DropDown('selectLanguage',  "selectLanguage");
            this.selectLanguage.addComponent(
                DropDownOption(this.id+ "en-gb","English (United Kingdom)","en-gb",true).setTextContent("English (United Kingdom)")
                    .setDataRole("none"));
            this.selectLanguageDiv = Division('selectColorDiv').addCustomStyle([
                FontFamily('segoe ui'),
                FontSize(10),
                Width(80)
            ]);
            this.selectLanguageDiv.addComponent([this.selectLanguageLabel, this.selectLanguage]);

            this.selectTheme.addDocumentListener(this);
            this.selectCountry.addDocumentListener(this);
            this.selectLanguage.addDocumentListener(this);

            this.form.addComponent([this.selectThemeDiv, this.selectCountryDiv,  this.selectLanguageDiv]);

            this.settingsB.addComponent([
                this.titleSection,this.form
            ]);
            this.addComponent([
                this.settingsB
            ]);
        }



        documentChanged(e) {
            if(e.getEvent() === "change"){
                if (e.getSource() === this.selectTheme) {
                    settings.color = this.selectTheme.domElement.value.toLowerCase();
                    console.log(this.selectTheme.domElement.value);
                    localStorage.setItem("settings", JSON.stringify(settings));
                    location.reload(true)
                }

                if (e.getSource() === this.selectCountry) {
                    settings.country = this.selectCountry.domElement.value;
                    localStorage.setItem("settings", JSON.stringify(settings));
                    location.reload(true)

                }
                if (e.getSource() === this.selectLanguage) {
                    settings.language = this.selectLanguage.domElement.value;
                    localStorage.setItem("settings", JSON.stringify(settings));
                    location.reload(true)
                }
            }
        }

    }



    /*
    Modal Pages
     */

    class CreateHealthIssue extends HDivision{
        constructor(id) {
            super('cHI');
            this.addCustomStyle(
                [
                    Width(screen.width-60,'px'),

                    Height(420,'px'),
                    Position("fixed"),
                    PositionTop(10,'vw'),
                    ZIndex(0),
                    Overflow("hidden"),
                    Opacity(1),
                    BorderRadius(20,'px'),
                    BackgroundColor(colors.primaryColor),
                    ZIndex(600),
                ]
            );
            this.setDataRole("popup");

            this.container = Division(this.id+"_con").addCustomStyle([
                Width(screen.width-60,'px'),
                Height(370,'px'),
                Overflow("hidden"),
                Position("relative"),
                BackgroundColor(colors.primaryColor),
                BorderRadius(20,'px'),
                Overflow("hidden")
            ]);
            this.container.domElement.style.boxShadow="0px 10px 34px -15px rgb(0 0 0 / 24%)";

            this.body = Division(this.id+"_body").addCustomStyle([
                Position("relative"),
                Width(screen.width-60,'px'),
                Height(500,'px'),
                BackgroundColor("FFFFFF"),
                Overflow("hidden"),
                Display("inline"),
                Float("left"),
                Transition()
            ]);
            this.formBox = Division(this.id+"_formBox").addCustomStyle([
                Width(screen.width-60,'px'),
                Height(500,'px'),
                BorderRadius(5,'px'),
                Overflow("hidden"),
                Margin("auto","")
            ]);
            this.header = Division(this.id+"_header").addCustomStyle([
                Height(60,'px'),
                Width(100),
                BackgroundColor(colors.primaryColor),
                Overflow("hidden")
            ]);
            this.headerIcon = new HIcon(this.id+"_hIcon",["fa", "fa-hospital-o", "fa-2x"]).addCustomStyle([
                Color("FFFFFF"),
                Margin(0,'px').setLeft(10).setTop(15),
                FontWeight("bold"),
                Float("left")

            ]);
            this.headerTxt = Paragraph(this.id+"_hTxt").addCustomStyle([
                FontFamily("calibri"),
                FontSize(18,'pt'),
                BackgroundColor(colors.primaryColor),
                Color("FFFFFF"),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(10).setTop(15),
                FontWeight("bold")

            ]).setTextContent("New Health Issue");
            this.content = Division(this.id+"content").addCustomStyle([
                Width(screen.width-60,'px'),
                Height(350,'px'),
                Overflow("scroll"),
            ]);

            this.symptoms = new SymptomAdd('symptomsAdd');
            this.submit = new SubmitButton("btnCHI","Submit", 200,ECS.getSuccess(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submit.setDataRole("none");
            this.submit.turnOn();
            this.submit.addMouseListener(this);


            this.body.addComponent([this.formBox]);
            this.header.addComponent([this.headerIcon, this.headerTxt]);
            this.formBox.addComponent([this.content]);
            this.content.addComponent([this.symptoms,this.submit]);


            this.container.addComponent([this.body]);
            this.addComponent([this.header,this.container]);

            this.checked =false;
        }

        package(){
            let json = {};
            let items = [];
            let children = this.symptoms.container.domElement.children;
            for (let i = 0; i < children.length; i++) {
                items.push(children[i].children[0].value);
            }
            json.patient = db.user.username;
            json.symptoms = items;
            return json;

        }
        async sendR(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/createHealthIssue', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

         mouseClicked(e) {
            switch (e.getEvent()) {
                case"click": {
                    if (e.getSource() === this.submit) {
                        this.sendR(this.package(), async (e) => {
                            this.submit.fadeOut();
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window.location.href+"#index";
                            a.click()

                        }, (e) => {
                            this.submit.fadeOut();
                            this.toast("Error!")
                        }, 'login')
                    }
                }
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }


    }
    class HealthIssuePage extends HDivision{
        constructor(id,index, patient, symptoms, prescriptions, dailyReports,level,healthCase) {
            super(id);

            this.data = db.healthIssues[index];
            this.addCustomStyle([

                Width(screen.width-60,'px'),
                Height(screen.height-50,'px'),
                Overflow("hidden"),
                ZIndex(300),
                Margin("auto","")
            ]);
            this.level = level;
            this.setDataRole("popup");

            this.titleDiv = Division(this.id+'tDiv');
            this.healthCase = Paragraph(this.id+'hC').addCustomStyle([
                Width(screen.width-130,'px'),
                Height(40,'px'),
                FontWeight("bold"),
                Margin(0),
                Display("inline"),
                Float("left"),
                Padding(10,'px').setRight(0),
                FontSize(14,'pt'),
                FontFamily("calibri")
            ]).setTextContent(this.data.ailment);
            this.healthCaseDiv = Division(this.id+'hCD').addCustomStyle([
                Width(screen.width-80,'px'),
                Height(40,'px'),
                Margin(0),
                Color(colors.primaryColor)
            ]);
            this.healthCaseI = new HIcon(this.id+'hCI', ["fa", "fa-medkit", "fa-lg"]).addCustomStyle([
                Width(20,'px'),
                Display("inline"),
                Padding(15,'px').setRight(0),
                Float("left"),
                Height(40,'px'),
            ]);
            this.healthCaseDiv.addComponent([this.healthCaseI, this.healthCase]);

            this.patient = Paragraph(this.id+'hP').setTextContent(patient).addCustomStyle([
                Display("inline"),
                Float("right")
            ]);
            this.symptomsDiv = Division(this.id+'sDiv');
            this.symptomsTitle = Paragraph(this.id+'sT').setTextContent("Symptoms:").addCustomStyle([
                Width(100),
                Height(20,'px'),
                FontWeight("bold"),
                Margin(0),
                Color(ECS.getDangerDark()),
                Padding(10,'px').setTop(5).setBottom(5),
                FontSize(13,'pt'),
                FontFamily("calibri")

                ]
            );
            this.symptomsHeader = new SymptomHeader(this.id + 'sHd');
            this.prescriptionsDiv = Division(this.id+'pDiv');
            this.prescriptionsTitle = Paragraph(this.id+'pT').setTextContent("Prescriptions:").addCustomStyle([
                    Width(100),
                    Height(20,'px'),
                    FontWeight("bold"),
                    Margin(0),
                    Padding(10,'px').setTop(5).setBottom(5),
                    FontSize(13,'pt'),
                    FontFamily("calibri")

                ]
            );
            this.prescriptionsHeader = new PrescriptionHeader(this.id + 'pHd');
            this.dailyReportsDiv = Division(this.id+'dDiv');
            this.dailyReportsTitle = Paragraph(this.id+'dT').setTextContent("Patient Feedback:").addCustomStyle([
                    Width(100),
                    Height(20,'px'),
                    FontWeight("bold"),
                    Margin(0),
                    Padding(10,'px').setTop(5).setBottom(5),
                    FontSize(13,'pt'),
                    FontFamily("calibri")

                ]
            );
            this.dailyReportsHeader = new DailyReportHeader(this.id + 'pHd');

            this.titleDiv.addComponent([
                this.healthCaseDiv,this.patient
            ]);
            this.titleDiv.addCustomStyle([
                Height(50,'px'),
                Position("fixed"),
                OverflowY("scroll"),
                OverflowX("hidden")

            ]);


            this.bodyDiv = Division(this.id+"bodyDiv").addCustomStyle([
                OverflowY("scroll"),
                Height(screen.height-100,'px'),
                Margin(0,'px').setTop(50),

            ]);

            this.symptomsDiv.addCustomStyle([
                Width(90),
                Padding(0,'px').setTop(10).setBottom(10),
                Margin("auto",""),
                Height(150,'px'),
                OverflowY("scroll"),
                Position(),
                OverflowX("hidden"),
                Border("thin","solid", "#d3d3d3")
            ]);
            this.prescriptionsDiv.addCustomStyle([
                Width(90),
                Padding(0,'px').setTop(10).setBottom(10),
                Margin("auto",""),
                Height(150,'px'),
                Color(ECS.getSuccessDark()),
                OverflowY("scroll"),
                Border("thin","solid", "#d3d3d3")
            ]);
            this.dailyReportsDiv.addCustomStyle([
                Width(90),
                Margin("auto",""),
                Padding(0,'px').setTop(10).setBottom(10),
                Height(150,'px'),
                Color(ECS.getPrimaryDark()),
                OverflowY("scroll"),
                Border("thin","solid", "#d3d3d3")
            ]);

            this.symptomsDiv.addComponent([this.symptomsTitle,this.symptomsHeader]);
            this.prescriptionsDiv.addComponent([this.prescriptionsTitle,this.prescriptionsHeader]);
            this.dailyReportsDiv.addComponent([this.dailyReportsTitle,this.dailyReportsHeader]);

            this.addPrescription = new HParagraph(this.id+ "addPrescription").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(100,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getDanger()),
                Color("FFFFFF"),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Prescribe");
            this.addPrescription.domElement.style.color ="#FFFFFF";
            this.addPrescription.addMouseListener(this);


            this.certify = new HParagraph(this.id+ "addPrescription").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(100,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getSuccess()),
                Color(ECS.getSuccess()),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Certify");
            this.certify.domElement.style.color ="#FFFFFF";
            this.certify.addMouseListener(this);

            this.addPrescriptionPage = new PrescriptionAdd(this.id+ "addPrescriptionPage", this.data.ailment);

            this.addDReport = new HParagraph(this.id+ "addFeedback").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(150,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getSuccess()),
                Color("FFFFFF"),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Add Feedback");
            this.addDReport.domElement.style.color ="#FFFFFF";
            this.addDReport.addMouseListener(this);

            this.addDReportPage = new DReportsAdd(this.id+ "addFeedbackPage");

            this.formDiv = Division(this.id+"formDiv").addCustomStyle([
                Width(100),
                Height(400,'px'),
                Padding(0,'px').setTop(10)
            ]);
            this.submitPrescription = new SubmitButton("btnPre","Submit", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitPrescription.setDataRole("none");
            this.submitPrescription.turnOn();
            this.submitPrescription.addMouseListener(this);
            this.submitFeedback = new SubmitButton("btnFB","Submit", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitFeedback.setDataRole("none");
            this.submitFeedback.turnOn();
            this.submitFeedback.addMouseListener(this);
            this.addPrescriptionPage.addComponent(this.submitPrescription);
            this.addDReportPage.addComponent(this.submitFeedback);

            this.formDiv.addComponent([
                this.addDReportPage, this.addPrescriptionPage,
            ]);


            this.buttonsDiv = Division(this.id+"bDiv").addCustomStyle([
                Height(40,'px')

            ]);

            if(db.user.role === "Patient"){
                if (this.data.level === 1 )
                this.buttonsDiv.addComponent([
                    this.addDReport
                ]);
            }
            if(db.user.role === "Physician"){

                if (this.data.level === 0)
                    this.buttonsDiv.addComponent([
                        this.addPrescription,
                    ]);
                if (this.data.level === 1)
                this.buttonsDiv.addComponent([
                    this.addPrescription,this.certify
                ]);

            }



            try{
                this.data.symptoms.forEach((item,index)=>{
                    this.symptomsDiv.addComponent(
                        new SymptomItem(this.id+"sym"+index, item)
                    )
                })
            }
            catch (e) {

            }
            try{
                this.data.prescriptions.forEach((item,index)=>{
                    this.prescriptionsDiv.addComponent(
                        new PrescriptionItem(this.id+"pre"+index, item.drug, item.dosage)
                    )
                })
            }
            catch (e) {

            }
            try{
                this.data.feedbacks.forEach((item,index)=>{
                    this.dailyReportsDiv.addComponent(
                        new DReportItem(this.id+"dR"+index, item.day, item.feedback)
                    )
                })
            }
            catch (e) {

            }
            this.bodyDiv.addComponent([
                this.symptomsDiv, this.prescriptionsDiv, this.dailyReportsDiv, this.buttonsDiv,this.formDiv
            ]);
            this.addComponent([
                this.titleDiv, this.bodyDiv
            ])
        }

        packagePrescriptions(){
            let json = {};
            let items = [];
            let children = this.addPrescriptionPage.container.domElement.children;
            for (let i = 0; i < children.length; i++) {
                let json2 = {};
                json2.drug= children[i].children[0].value;
                json2.dosage = children[i].children[1].value;
                items.push(json2)
            }
            json.item.ailment = this.addPrescriptionPage.ailment.domElement.value;
            json.prescriptions =items;
            json.patient = db.user.username;
            json.id = this.data['_id'];
            return json;
        }
        packageFeedback(){
            let json = {};
            let items = [];
            let children = this.addDReportPage.container.domElement.children;
            for (let i = 0; i < children.length; i++) {
                let json2 = {};
                json2.day= children[i].children[0].value;
                json2.feedback = children[i].children[1].value;
                items.push(json2)
            }
            json.feedbacks =items;
            json.patient = db.user.username;
            json.id = this.data['_id'];

            return json;

        }
        async sendP(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/addPrescription', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });
            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

        async sendF(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/addFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }
        async certifyIssue(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/certifyIssue', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify({
                    id: this.data['_id']
                })
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.addPrescription){
                        this.addPrescriptionPage.addCustomStyle([
                            Display("block")
                        ])
                    }
                    if (e.getSource()=== this.addDReport){
                        this.addDReportPage.addCustomStyle([
                            Display("block")
                        ])
                    }
                    if (e.getSource()=== this.submitPrescription){
                        this.sendP(this.packagePrescriptions(), async (e) => {
                            this.submitPrescription.fadeOut();
                            this.addPrescriptionPage.addCustomStyle([
                                Display("none")
                            ])
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window
                        }, (e) => {
                            this.submit.fadeOut();
                            this.toast("Error!")
                        }, '')
                    }
                    if (e.getSource()=== this.submitFeedback){
                        this.sendF(this.packageFeedback(), async (e) => {
                            this.submitFeedback.fadeOut();
                            this.addDReportPage.addCustomStyle([
                                Display("none")]);
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window.location.href+"#index";
                            a.click()

                        }, (e) => {
                            this.submit.fadeOut();
                        }, '')
                    }
                    if (e.getSource()=== this.certify){
                        this.certifyIssue({}, async (e) => {
                            this.certify.addCustomStyle(
                                Display("none"));
                            this.addPrescription.addCustomStyle(
                                Display("none"));
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window.location.href+"#index";
                            a.click()
                        }, (e) => {
                        }, '')
                    }

                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class HealthIssuePageP extends HDivision{
        constructor(id,index, patient, symptoms, prescriptions, dailyReports,level,healthCase) {
            super(id);

            this.data = db.healthIssuesP[index];
            this.addCustomStyle([

                Width(screen.width-60,'px'),
                Height(screen.height-50,'px'),
                Overflow("hidden"),
                ZIndex(300),
                Margin("auto","")
            ]);
            this.level = level;
            this.setDataRole("popup");

            this.titleDiv = Division(this.id+'tDiv');
            this.healthCase = Paragraph(this.id+'hC').addCustomStyle([
                Width(screen.width-130,'px'),
                Height(40,'px'),
                FontWeight("bold"),
                Margin(0),
                Display("inline"),
                Float("left"),
                Padding(10,'px').setRight(0),
                FontSize(14,'pt'),
                FontFamily("calibri")
            ]).setTextContent(this.data.ailment);
            this.healthCaseDiv = Division(this.id+'hCD').addCustomStyle([
                Width(screen.width-80,'px'),
                Height(40,'px'),
                Margin(0),
                Color(colors.primaryColor)
            ]);
            this.healthCaseI = new HIcon(this.id+'hCI', ["fa", "fa-medkit", "fa-lg"]).addCustomStyle([
                Width(20,'px'),
                Display("inline"),
                Padding(15,'px').setRight(0),
                Float("left"),
                Height(40,'px'),
            ]);
            this.healthCaseDiv.addComponent([this.healthCaseI, this.healthCase]);

            this.patient = Paragraph(this.id+'hP').setTextContent(patient).addCustomStyle([
                Display("inline"),
                Float("right")
            ]);
            this.symptomsDiv = Division(this.id+'sDiv');
            this.symptomsTitle = Paragraph(this.id+'sT').setTextContent("Symptoms:").addCustomStyle([
                    Width(100),
                    Height(20,'px'),
                    FontWeight("bold"),
                    Margin(0),
                    Color(ECS.getDangerDark()),
                    Padding(10,'px').setTop(5).setBottom(5),
                    FontSize(13,'pt'),
                    FontFamily("calibri")

                ]
            );
            this.symptomsHeader = new SymptomHeader(this.id + 'sHd');
            this.prescriptionsDiv = Division(this.id+'pDiv');
            this.prescriptionsTitle = Paragraph(this.id+'pT').setTextContent("Prescriptions:").addCustomStyle([
                    Width(100),
                    Height(20,'px'),
                    FontWeight("bold"),
                    Margin(0),
                    Padding(10,'px').setTop(5).setBottom(5),
                    FontSize(13,'pt'),
                    FontFamily("calibri")

                ]
            );
            this.prescriptionsHeader = new PrescriptionHeader(this.id + 'pHd');
            this.dailyReportsDiv = Division(this.id+'dDiv');
            this.dailyReportsTitle = Paragraph(this.id+'dT').setTextContent("Patient Feedback:").addCustomStyle([
                    Width(100),
                    Height(20,'px'),
                    FontWeight("bold"),
                    Margin(0),
                    Padding(10,'px').setTop(5).setBottom(5),
                    FontSize(13,'pt'),
                    FontFamily("calibri")

                ]
            );
            this.dailyReportsHeader = new DailyReportHeader(this.id + 'pHd');

            this.titleDiv.addComponent([
                this.healthCaseDiv,this.patient
            ]);
            this.titleDiv.addCustomStyle([
                Height(50,'px'),
                Position("fixed"),
                OverflowY("scroll"),
                OverflowX("hidden")

            ]);


            this.bodyDiv = Division(this.id+"bodyDiv").addCustomStyle([
                OverflowY("scroll"),
                Height(screen.height-100,'px'),
                Margin(0,'px').setTop(50),

            ]);

            this.symptomsDiv.addCustomStyle([
                Width(90),
                Padding(0,'px').setTop(10).setBottom(10),
                Margin("auto",""),
                Height(150,'px'),
                OverflowY("scroll"),
                Position(),
                OverflowX("hidden"),
                Border("thin","solid", "#d3d3d3")
            ]);
            this.prescriptionsDiv.addCustomStyle([
                Width(90),
                Padding(0,'px').setTop(10).setBottom(10),
                Margin("auto",""),
                Height(150,'px'),
                Color(ECS.getSuccessDark()),
                OverflowY("scroll"),
                Border("thin","solid", "#d3d3d3")
            ]);
            this.dailyReportsDiv.addCustomStyle([
                Width(90),
                Margin("auto",""),
                Padding(0,'px').setTop(10).setBottom(10),
                Height(150,'px'),
                Color(ECS.getPrimaryDark()),
                OverflowY("scroll"),
                Border("thin","solid", "#d3d3d3")
            ]);

            this.symptomsDiv.addComponent([this.symptomsTitle,this.symptomsHeader]);
            this.prescriptionsDiv.addComponent([this.prescriptionsTitle,this.prescriptionsHeader]);
            this.dailyReportsDiv.addComponent([this.dailyReportsTitle,this.dailyReportsHeader]);

            this.addPrescription = new HParagraph(this.id+ "addPrescription").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(100,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getDanger()),
                Color("FFFFFF"),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Prescribe");
            this.addPrescription.domElement.style.color ="#FFFFFF";
            this.addPrescription.addMouseListener(this);


            this.certify = new HParagraph(this.id+ "addPrescription").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(100,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getSuccess()),
                Color(ECS.getSuccess()),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Certify");
            this.certify.domElement.style.color ="#FFFFFF";
            this.certify.addMouseListener(this);

            this.addPrescriptionPage = new PrescriptionAdd(this.id+ "addPrescriptionPage", this.data.ailment);

            this.addDReport = new HParagraph(this.id+ "addFeedback").addCustomStyle([
                Display("inline"),
                Height(20,'px'),
                Width(150,'px'),
                Padding(0,'px').setTop(5).setBottom(5).setLeft(2),
                BackgroundColor(ECS.getSuccess()),
                Color("FFFFFF"),
                FontFamily("Calibri"),
                FontSize(11),
                BorderRadius(5,'px'),
                Float("right"),
                Margin(0,'px').setTop(10).setRight(20),
                TextAlignment("center"),
                TextDecoration(),
            ]).setTextContent("Add Feedback");
            this.addDReport.domElement.style.color ="#FFFFFF";
            this.addDReport.addMouseListener(this);

            this.addDReportPage = new DReportsAdd(this.id+ "addFeedbackPage");

            this.formDiv = Division(this.id+"formDiv").addCustomStyle([
                Width(100),
                Height(400,'px'),
                Padding(0,'px').setTop(10)
            ]);
            this.submitPrescription = new SubmitButton("btnPre","Submit", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitPrescription.setDataRole("none");
            this.submitPrescription.turnOn();
            this.submitPrescription.addMouseListener(this);
            this.submitFeedback = new SubmitButton("btnFB","Submit", 200,ECS.getPrimary(),ECS.getPrimaryDark()).addCustomStyle([
                Position(),
                Width(90),
                BorderRadius(2,'px'),
                Height(20,'px'),
                Margin(0,'px').setLeft(10).setTop(10),
            ]);
            this.submitFeedback.setDataRole("none");
            this.submitFeedback.turnOn();
            this.submitFeedback.addMouseListener(this);
            this.addPrescriptionPage.addComponent(this.submitPrescription);
            this.addDReportPage.addComponent(this.submitFeedback);

            this.formDiv.addComponent([
                this.addDReportPage, this.addPrescriptionPage,
            ]);


            this.buttonsDiv = Division(this.id+"bDiv").addCustomStyle([
                Height(40,'px')

            ]);

            if(db.user.role === "Patient"){
                if (this.data.level === 1 )
                    this.buttonsDiv.addComponent([
                        this.addDReport
                    ]);
            }
            if(db.user.role === "Physician"){

                if (this.data.level === 0)
                    this.buttonsDiv.addComponent([
                        this.addPrescription,
                    ]);
                if (this.data.level === 1)
                    this.buttonsDiv.addComponent([
                        this.addPrescription,this.certify
                    ]);

            }



            try{
                this.data.symptoms.forEach((item,index)=>{
                    this.symptomsDiv.addComponent(
                        new SymptomItem(this.id+"sym"+index, item)
                    )
                })
            }
            catch (e) {

            }
            try{
                this.data.prescriptions.forEach((item,index)=>{
                    this.prescriptionsDiv.addComponent(
                        new PrescriptionItem(this.id+"pre"+index, item.drug, item.dosage)
                    )
                })
            }
            catch (e) {

            }
            try{
                this.data.feedbacks.forEach((item,index)=>{
                    this.dailyReportsDiv.addComponent(
                        new DReportItem(this.id+"dR"+index, item.day, item.feedback)
                    )
                })
            }
            catch (e) {

            }
            this.bodyDiv.addComponent([
                this.symptomsDiv, this.prescriptionsDiv, this.dailyReportsDiv, this.buttonsDiv,this.formDiv
            ]);
            this.addComponent([
                this.titleDiv, this.bodyDiv
            ])
        }

        packagePrescriptions(){
            let json = {};
            let items = [];
            let children = this.addPrescriptionPage.container.domElement.children;
            for (let i = 0; i < children.length; i++) {
                let json2 = {};
                json2.drug= children[i].children[0].value;
                json2.dosage = children[i].children[1].value;
                items.push(json2)
            }
            json.ailment =this.addPrescriptionPage.ailment.domElement.value;
            json.prescriptions =items;
            json.username = db.user.username;
            json.id = this.data['_id'];
            return json;
        }
        packageFeedback(){
            let json = {};
            let items = [];
            let children = this.addDReportPage.container.domElement.children;
            for (let i = 0; i < children.length; i++) {
                let json2 = {};
                json2.day= children[i].children[0].value;
                json2.feedback = children[i].children[1].value;
                items.push(json2)
            }
            json.feedbacks =items;
            json.username = db.user.username;
            json.id = this.data['_id'];

            return json;

        }
        async sendP(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/addPrescription', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });
            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

        async sendF(parameters, func1,func2, type){
            let response = await fetch('http://health-tracker-serve.herokuapp.com/addFeedback', {
                method: 'POST',
                headers: {
                    'Content-Type': "application/json"
                },
                body: JSON.stringify(parameters)
            });

            let result = await response.json();
            if(result['status'] !== 200){
                func2(result);
            }
            else{
                func1(result);
            }
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":
                {
                    if (e.getSource()=== this.addPrescription){
                        this.addPrescriptionPage.addCustomStyle([
                            Display("block")
                        ])
                    }
                    if (e.getSource()=== this.addDReport){
                        this.addDReportPage.addCustomStyle([
                            Display("block")
                        ])
                    }
                    if (e.getSource()=== this.submitPrescription){
                        this.sendP(this.packagePrescriptions(), async (e) => {
                            this.submitPrescription.fadeOut();
                            this.addPrescriptionPage.addCustomStyle([
                                Display("none")
                            ]);
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window.location.href+"#index";
                            a.click()
                        }, (e) => {
                            this.submit.fadeOut();
                            this.toast("Error!")
                        }, '')
                    }
                    if (e.getSource()=== this.submitFeedback){
                        this.sendF(this.packageFeedback(), async (e) => {
                            this.submitFeedback.fadeOut();
                            this.addDReportPage.addCustomStyle([
                                Display("none")]);
                            await refreshDB();
                            let a = document.createElement('a');
                            a.href = window.location.href+"#index";
                            a.click()

                        }, (e) => {
                            this.submit.fadeOut();
                        }, '')
                    }

                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }


    /*
    Forms
     */

    class SymptomAdd extends HDivision{
        constructor(id) {
            super('symptomAdd');
            this.count = 0;
            this.addCustomStyle([
                Position(),
                Width(screen.width-60,'px'),
                Padding(0,'px').setLeft(3),
                Height(300,'px')

            ]);
            this.addButton = new PButton2(this.id+'add', ["fa", "fa-plus", "fa-lg"], this).addCustomStyle(
                [
                    Width(30,'px'),
                    Height(30,'px'),
                    Position("absolute"),
                    PositionBottom(20,'px'),
                    PositionRight(10,'px')
                ]
            );
            this.container = Division(this.id+"con").addCustomStyle([
                Width(screen.width-60,'px'),
                Height(240,'px'),
                Overflow("scroll"),
            ]);
            this.addComponent([this.container,this.addButton])
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    this.container.addComponent(new SymptomInput("symt"+this.count));
                    this.count++;
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class PrescriptionAdd extends HDivision{
        constructor(id, ailment) {
            super(id);
            this.count = 0;
            this.addCustomStyle([
                Position(),
                Width(screen.width-80,'px'),
                Padding(0,'px').setLeft(3),
                Margin("auto",""),
                Height(380,'px'),
                Display("none"),
                Border("thin","solid", "#d3d3d3")
            ]);
            this.t1 = Paragraph(this.id+'t1').addCustomStyle([
                Height(30,'px'),
                FontSize(13),
                FontWeight("bold"),
                Margin(0).setTop(5).setLeft(5),
                Color(colors.primaryColor)
            ]).setTextContent("Ailment");


            this.ailment = Input(this.id+"drug", 'text', this.id+'ailment',200,"Ailment:");
            this.ailment.domElement.value = ailment;
            this.ailment.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(screen.width -130,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(15),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.ailment.setDataRole("none");
            this.title = Paragraph(this.id+'title').addCustomStyle([
                Height(30,'px'),
                FontSize(13),
                FontWeight("bold"),
                Margin(0).setTop(5).setLeft(5),
                Color(ECS.getSuccess())
            ]).setTextContent("Prescribe Medication");
            this.addButton = new PButton2(this.id+'add', ["fa", "fa-plus", "fa-lg"], this).addCustomStyle(
                [
                    Width(30,'px'),
                    Height(30,'px'),
                    Position(),
                ]
            );
            this.container = Division(this.id+"con").addCustomStyle([
                Width(screen.width-90,'px'),
                Margin(0).setTop(5).setLeft(5),
                Height(270,'px'),
                OverflowY("scroll"),
                OverflowX("hidden"),
            ]);
            this.addComponent([this.t1,this.ailment, this.title,this.container,this.addButton])
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    this.container.addComponent(new PrescriptionInput("pret"+this.count));
                    this.count++;
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class DReportsAdd extends HDivision{
        constructor(id) {
            super(id);
            this.count = 0;
            this.addCustomStyle([
                Position(),
                Width(screen.width-80,'px'),
                Padding(0,'px').setLeft(3),
                Margin("auto",""),
                Height(380,'px'),
                Display("none"),
                Border("thin","solid", "#d3d3d3")

            ]);

            this.title = Paragraph(this.id+'title').addCustomStyle([
                Height(30,'px'),
                FontSize(13),
                FontWeight("bold"),
                Margin(0).setTop(5).setLeft(5),
                Color(ECS.getPrimary())
            ]).setTextContent("Add Feedback");
            this.addButton = new PButton2(this.id+'add', ["fa", "fa-plus", "fa-lg"], this).addCustomStyle(
                [
                    Width(30,'px'),
                    Height(30,'px'),
                    Position(),
                ]
            );
            this.container = Division(this.id+"con").addCustomStyle([
                Width(screen.width-90,'px'),
                Margin(0).setTop(5).setLeft(5),
                Height(270,'px'),
                OverflowY("scroll"),
                OverflowX("hidden"),
            ]);
            this.addComponent([this.title,this.container,this.addButton])
        }
        mouseClicked(e){
            switch (e.getEvent()){
                case"click":
                    this.container.addComponent(new DReportInput("fbt"+this.count));
                    this.count++;
            }
        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }

    }
    class Prescriptions extends HDivision{

        constructor(id) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Height(400),
            ])
        }
    }

    /*
    Inputs Components
     */

    class PrescriptionInput extends HDivision{
        constructor(id) {
            super(id);
            let width = screen.width-110;
            this.addCustomStyle([
                Width(width,'px'),
                Margin(0,'px').setTop(3),
                Height(40,'px'),
                Display("block"),
                Overflow("hidden")

            ]);
            this.drug = Input(this.id+"drug", 'text', this.id+'drug',200,"Drug:");
            this.dosage = Input(this.id+"dosage", 'text', this.id+'dosage',1000, "Dosage");
            this.drug.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(60,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0).setRight(5),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.dosage.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(width -120,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.drug.setDataRole("none");
            this.dosage.setDataRole("none");
            this.addComponent([this.drug,this.dosage]);
            this.deleteButton = new PButton2(this.id+"del",["fa","fa-trash", "fa-lg"],this);
            this.deleteButton.addCustomStyle([
                BackgroundColor("ff0000"),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(30,'px'),
                Height(30,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.drug.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.drug.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.addComponent([this.drug,this.dosage, this.deleteButton])
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":{
                    this.domElement.parentNode.removeChild(this.domElement)
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class DReportInput extends HDivision{
        constructor(id) {
            super(id);
            let width = screen.width-110;
            this.addCustomStyle([
                Width(width,'px'),
                Margin(0,'px').setTop(3),
                Height(40,'px'),
                Display("block"),
                Overflow("hidden")
            ]);
            this.day = Input(this.id+"day", 'text', this.id+'day',200,"Day:");
            this.welfare = Input(this.id+"welfare", 'text', this.id+'welfare',1000, "Welfare");
            this.day.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(30,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0).setRight(5),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.welfare.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(width -90,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.day.setDataRole("none");
            this.welfare.setDataRole("none");
            this.addComponent([this.day,this.welfare]);
            this.deleteButton = new PButton2(this.id+"del",["fa","fa-trash", "fa-lg"],this);
            this.deleteButton.addCustomStyle([
                BackgroundColor("ff0000"),
                Margin(0,'px').setLeft(10).setTop(0),
                Color("FFFFFF"),
                Width(30,'px'),
                Height(30,'px'),
                Display("inline"),
                Float("left")
            ]);
            this.day.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.day.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.addComponent([this.day,this.welfare, this.deleteButton])
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":{
                    this.domElement.parentNode.removeChild(this.domElement)
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }
    class SymptomInput extends HDivision{
        constructor(id) {
            super(id);
            this.addCustomStyle([
                Margin(0,'px').setTop(2).setLeft(10)
            ]);

            this.symptom = Input(this.id+"symptom", 'text', this.id+'symptom',1000, "Enter Symptom");

            this.symptom.addCustomStyle([
                Height(30,'px'),
                FontFamily("calibri"),
                Width(screen.width-140,'px'),
                Display("inline"),
                Float("left"),
                Margin(0,'px').setLeft(0).setTop(5).setBottom(5),
                Padding(5,'px'),
                Transition(),
                BorderRadius(3,'px'),
                Border("1px","solid", "rgba(0, 0, 0, 0.1)")
            ]);
            this.deleteButton = new PButton2(this.id+'add', ["fa", "fa-trash", "fa-lg"], this).addCustomStyle(
                [
                    Width(30,'px'),
                    Height(30,'px'),
                    Float("left"),
                    Margin(0,'px').setTop(10).setLeft(5),
                    BackgroundColor(ECS.getDanger()),
                    Color("FFFFFF")
                ]
            );
            this.symptom.domElement.style.boxShadow="10px 10px 34px -15px rgb(0 0 0 / 24%)";
            this.symptom.setDataRole("none");
            this.addComponent([this.symptom, this.deleteButton])
        }

        mouseClicked(e){

            switch (e.getEvent()){
                case"click":{
                    this.domElement.parentNode.removeChild(this.domElement)
                }
            }

        }
        mouseEntered(e){
        }
        mouseLeave(e){

        }
        mouseMoved(e){

        }
        mouseOut(e){

        }
        mouseOver(e){


        }
        mouseDown(e){

        }
        mouseUp(e){

        }
    }

    /*
    Display COmponents

     */

    class HealthIssue extends HDivision{
        constructor(id, ailment, period, physician,index, date= new Date()){
            super(id);
            this.index = index;
            this.addCustomStyle([
                Height(50,'px'),
                Margin(0,'px').setTop(10),
                Width(screen.width-140,'px'),
                FontFamily("calibri"),
                Overflow("hidden"),
            ]);

            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.ailment = Paragraph(this.id+'alm').setTextContent(ailment);
            this.month = Paragraph(this.id+'month').setTextContent(date.getMonth().toString());
            this.day= Paragraph(this.id+'day').setTextContent(date.getDate().toString());
            this.year = Paragraph(this.id+'year').setTextContent(date.getUTCFullYear().toString());
            this.period = Paragraph(this.id+'pd').setTextContent("PD: "+ period);
            this.physician = Paragraph(this.id+'phy').setTextContent("Physician: "+physician);

            this.date = Division(this.id+'date').addCustomStyle([
                Height(50,'px'),
                Width(50,'px'),
                FontFamily("calibri"),
                BackgroundColor("93b3ff"),
                Display("inline"),
                Float("left")
            ]);
            this.month.addCustomStyle([
                Height(20,'px'),
                Width(50,'px'),
                FontSize(14,'pt'),
                Margin(0),
                FontWeight("bold"),
                TextAlignment("center")
            ]);
            this.day.addCustomStyle([
                Height(12,'px'),
                Width(50,'px'),
                FontSize(9,'pt'),
                Margin(0),
                TextAlignment("center")
            ]);
            this.year.addCustomStyle([
                Height(15,'px'),
                Width(50,'px'),
                FontSize(11,'pt'),
                FontWeight("bold"),
                Margin(0),
                TextAlignment("center")
            ]);
            this.date.addComponent([
                this.month,this.day,this.year
            ]);

            this.ailment.addCustomStyle([
                Width(screen.width-220),
                Margin(0,'px'),
                Padding(0,'px').setLeft(10).setTop(5),
                FontSize(12),
                Width(100),
                Height(20,'px'),
            ]);
            this.secd = Division(this.id+'sec').addCustomStyle([
                Width(screen.width-220,'px'),
                Display("inline"),
                Float("left")

            ]);
            this.items = Division(this.id+'it').addCustomStyle([

                Width(screen.width-220,'px'),
                FontSize(8,'pt'),
                Padding(5,'px').setLeft(10),
                Overflow("hidden")

            ]);

            this.physician.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin(0,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.period.addCustomStyle([
                Width(30,'px'),
                Margin(0,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.enter = new HAnchor(this.id+'enter',"/#"+ this.id+ "page")
                .addCustomStyle([
                    Width(20,'px'),
                    Height(20,'px'),
                    Margin(0,'px').setTop(15),
                    Color(ECS.getPrimaryDark())
                ]);
            this.enter.setDataRel();

            this.page = new HealthIssuePage(this.id+"page", index);
            this.enterI = new HIcon(this.id+'enter', ["fa",'fa-sign-in','fa-lg']);
            this.enter.addComponent(this.enterI);

            this.items.addComponent([
                this.physician, this.period,
            ]);
            this.secd.addComponent([this.ailment,this.items]);

            this.addComponent([
                this.date,this.secd, this.enter, this.page
            ])
        }
        getAilment(){
            return this.ailment.getTextContent();
        }
        getDate(){
            return this.date.getTextContent();
        }
        getPeriod(){
            return this.period.getTextContent();
        }
        getPhysician(){
            return this.physician.getTextContent();
        }
    }
    class HealthIssueP extends HDivision{
        constructor(id, ailment, period, physician,index, date= new Date()){
            super(id+'as');
            this.index = index;
            this.addCustomStyle([
                Height(50,'px'),
                Margin(0,'px').setTop(10),
                Width(screen.width-140,'px'),
                FontFamily("calibri"),
                Overflow("hidden"),
            ]);

            this.domElement.style.boxShadow="1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.ailment = Paragraph(this.id+'alm').setTextContent(ailment);
            this.month = Paragraph(this.id+'month').setTextContent(date.getMonth().toString());
            this.day= Paragraph(this.id+'day').setTextContent(date.getDate().toString());
            this.year = Paragraph(this.id+'year').setTextContent(date.getUTCFullYear().toString());
            this.period = Paragraph(this.id+'pd').setTextContent("PD: "+ period);
            this.physician = Paragraph(this.id+'phy').setTextContent("Physician: "+physician);

            this.date = Division(this.id+'date').addCustomStyle([
                Height(50,'px'),
                Width(50,'px'),
                FontFamily("calibri"),
                BackgroundColor("93b3ff"),
                Display("inline"),
                Float("left")
            ]);
            this.month.addCustomStyle([
                Height(20,'px'),
                Width(50,'px'),
                FontSize(14,'pt'),
                Margin(0),
                FontWeight("bold"),
                TextAlignment("center")
            ]);
            this.day.addCustomStyle([
                Height(12,'px'),
                Width(50,'px'),
                FontSize(9,'pt'),
                Margin(0),
                TextAlignment("center")
            ]);
            this.year.addCustomStyle([
                Height(15,'px'),
                Width(50,'px'),
                FontSize(11,'pt'),
                FontWeight("bold"),
                Margin(0),
                TextAlignment("center")
            ]);
            this.date.addComponent([
                this.month,this.day,this.year
            ]);

            this.ailment.addCustomStyle([
                Width(screen.width-220),
                Margin(0,'px'),
                Padding(0,'px').setLeft(10).setTop(5),
                FontSize(12),
                Width(100),
                Height(20,'px'),
            ]);
            this.secd = Division(this.id+'sec').addCustomStyle([
                Width(screen.width-220,'px'),
                Display("inline"),
                Float("left")

            ]);
            this.items = Division(this.id+'it').addCustomStyle([

                Width(screen.width-220,'px'),
                FontSize(8,'pt'),
                Padding(5,'px').setLeft(10),
                Overflow("hidden")

            ]);

            this.physician.addCustomStyle([
                Width(screen.width-250,'px'),
                Margin(0,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.period.addCustomStyle([
                Width(30,'px'),
                Margin(0,'px'),
                Height(20,'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.enter = new HAnchor(this.id+'enter',"/#"+ this.id+ "page")
                .addCustomStyle([
                    Width(20,'px'),
                    Height(20,'px'),
                    Margin(0,'px').setTop(15),
                    Color(ECS.getPrimaryDark())
                ]);
            this.enter.setDataRel();

            this.page = new HealthIssuePageP(this.id+"page", index);
            this.enterI = new HIcon(this.id+'enter', ["fa",'fa-sign-in','fa-lg']);
            this.enter.addComponent(this.enterI);

            this.items.addComponent([
                this.physician, this.period,
            ]);
            this.secd.addComponent([this.ailment,this.items]);

            this.addComponent([
                this.date,this.secd, this.enter, this.page
            ])
        }
        getAilment(){
            return this.ailment.getTextContent();
        }
        getDate(){
            return this.date.getTextContent();
        }
        getPeriod(){
            return this.period.getTextContent();
        }
        getPhysician(){
            return this.physician.getTextContent();
        }
    }
    class Physician extends HDivision{

        constructor(id, firstname, lastname, image,category,index) {
            super(id);
            this.index = index;
            this.addCustomStyle([
                Height(50, 'px'),
                Margin(0, 'px').setTop(10),
                Width(screen.width - 140, 'px'),
                FontFamily("calibri"),
                Overflow("hidden"),
            ]);

            this.domElement.style.boxShadow = "1px 1px 5px 0 rgba(0, 0, 0, 0.25)," +
                "-1px -1px 5px 0 rgba(255, 255, 255, 0.3)";
            this.ailment = Paragraph(this.id + 'alm').setTextContent(lastname +", " + firstname);
            this.period = Paragraph(this.id + 'pd').setTextContent("PD: " + null);
            this.physician = Paragraph(this.id + 'phy').setTextContent("Category: " + category);

            this.date = Division(this.id + 'date').addCustomStyle([
                Height(50, 'px'),
                Width(50, 'px'),
                FontFamily("calibri"),
                BackgroundColor(colors.primaryColor),
                BorderRadius(50),
                Display("inline"),
                Float("left")
            ]);

            this.date.addComponent([
            ]);

            this.ailment.addCustomStyle([
                Width(screen.width - 220),
                Margin(0, 'px'),
                Padding(0, 'px').setLeft(10).setTop(5),
                FontSize(12),
                Width(100),
                Height(20, 'px'),
            ]);
            this.secd = Division(this.id + 'sec').addCustomStyle([
                Width(screen.width - 220, 'px'),
                Display("inline"),
                Float("left")

            ]);
            this.items = Division(this.id + 'it').addCustomStyle([

                Width(screen.width - 220, 'px'),
                FontSize(8, 'pt'),
                Padding(5, 'px').setLeft(10),
                Overflow("hidden")

            ]);

            this.physician.addCustomStyle([
                Width(screen.width - 250, 'px'),
                Margin(0, 'px'),
                Height(20, 'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.period.addCustomStyle([
                Width(30, 'px'),
                Margin(0, 'px'),
                Height(20, 'px'),
                Display("inline"),
                Float("left"),
                OverflowX("scroll")
            ]);
            this.enter = new HAnchor(this.id + 'enter', "/#" + this.id + "page")
                .addCustomStyle([
                    Width(20, 'px'),
                    Height(20, 'px'),
                    Margin(0, 'px').setTop(15),
                    Color(ECS.getPrimaryDark())
                ]);
            this.enter.setDataRel();

            this.enterI = new HIcon(this.id + 'enter', ["fa", 'fa-sign-in', 'fa-lg']);
            this.enter.addComponent(this.enterI);

            this.items.addComponent([
                this.physician, /*this.period, */
            ]);
            this.secd.addComponent([this.ailment, this.items]);

            this.addComponent([
                this.date, this.secd, this.enter
            ])
        }
    }
    class PrescriptionItem extends HDivision{
        constructor(id,drug,dosage) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Position(),
                Overflow("hidden"),
                Margin("auto",""),
                FontSize(11,'pt'),
                BackgroundColor(ECS.getSuccess()),
                Color("FFFFFF"),
                FontFamily("Calibri")
            ]);
            this.drug = Paragraph(this.id+"drug").setTextContent(drug);
            this.dosage = Paragraph(this.id+"dosage").setTextContent(dosage);
            this.drug.addCustomStyle([
                Height(30),
                OverflowY("scroll"),
                Margin(0,'px').setLeft(5).setTop(4),
                Width(40),
                Display("inline"),
                Float("left")
            ]);
            this.dosage.addCustomStyle([
                Height(30),
                Width(55),
                Margin(0,'px').setLeft(8).setTop(4),
                OverflowY("scroll"),
                Display("inline"),
                Float("left")
            ]);
            this.addComponent([this.drug,this.dosage])
        }
    }
    class DReportItem extends HDivision{
        constructor(id,day,feedback) {
            super(id);
            this.addCustomStyle([
                Width(90),
                Position(),
                Overflow("hidden"),
                Margin("auto",""),
                FontSize(11,'pt'),
                BackgroundColor(ECS.getPrimary()),
                Color("FFFFFF"),
                FontFamily("Calibri")
            ]);
            this.day = Paragraph(this.id+"day").setTextContent(day);
            this.feedback = Paragraph(this.id+"feedback").setTextContent(feedback);
            this.day.addCustomStyle([
                Height(30),
                OverflowY("scroll"),
                Margin(0,'px').setTop(4).setLeft(5),
                Width(15),
                Display("inline"),
                Float("left")
            ]);
            this.feedback.addCustomStyle([
                Height(30),
                Width(80),
                Margin(0,'px').setTop(4).setLeft(5),
                OverflowY("scroll"),
                Display("inline"),
                Float("left")
            ]);
            this.addComponent([this.day,this.feedback])
        }
    }
    class SymptomItem extends HDivision{
        constructor(id,symptom) {

            super(id);
            this.addCustomStyle([
                Position(),
                Width(screen.width-120, 'px'),
                Margin(0,'px').setLeft(15).setTop(1),
                Overflow("hidden"),
                FontSize(11,'pt'),
                FontFamily("Calibri"),
                BackgroundColor(ECS.getDanger()),
                Color("FFFFFF")

            ]);
            this.symptomI = new HIcon(this.id+"i", ["fa","fa-thermometer"]).addCustomStyle([
                Height(20,'px'),
                Margin(0,'px').setLeft(5).setTop(5),
                Float("left")
            ]);
            this.symptom = Paragraph(this.id+"symptom").setTextContent(symptom);
            this.symptom.addCustomStyle([
                Height(25,'px'),
                Width(100,'px'),
                Margin(0,'px').setLeft(5).setTop(3),
                Display("inline"),
                Float("left")
            ]);
            this.addComponent([this.symptomI, this.symptom])
        }
    }



    let index = new HDivision('index');
    WINDOW.addComponent(index);
    WINDOW.addCustomStyle([
        Height(100, '%'),
        Width(100,'%'),
        Padding(0),
        Margin(0),
        OverflowX('hidden')
    ]);

    let start = ()=>{
        if(firstInstance){
            let register = new Register();
            let mainView = new Index();
            let healthIssues = new HealthIssues();
            let healthIssuesPending = new HealthIssuesPending("pend");
            let physicians = new Physicians();
            let settings= new Settings();


            /*
            Navigation
             */

            let nav = new HDivision("nav");
            nav.addCustomStyle([
                Width(70,'px'),
                Height(100,"vh"),
                BackgroundColor(colors.primaryColor),
                Position("fixed"),
                PositionLeft(0),
                PositionTop(0),
                ZIndex(150)
            ]);

            let profilePic = new HImage("profilePicA", "","").addCustomStyle([
                Width(50,'px'),
                Height(50,'px'),
                BorderRadius(100,"%"),
                Border("hidden"),
                Margin(0,'px').setTop(10).setLeft(10),
                BackgroundColor("ffffff")
            ]);

            let indexA = new HAnchor("index_a", "/#index").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                TextAlignment("center")
            ]);
            let indexI = new HIcon('index_i',["fa","fa-heartbeat","fa-lg"]);
            indexA.addComponent(indexI);

            let hIssuesA = new HAnchor("hIssuesA", "/#healthIssues").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                TextAlignment("center")
            ]);
            let hIssuesI = new HIcon('hIssues_i',["fa","fa-thermometer","fa-lg"]);
            hIssuesA.addComponent(hIssuesI);

            let hIssuesAP = new HAnchor("hIssuesAP", "/#healthIssuespend").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                TextAlignment("center")
            ]);
            let hIssuesIP = new HIcon('hIssues_ip',["fa","fa-thermometer","fa-lg"]);
            hIssuesAP.addComponent(hIssuesIP);

            let physiciansA = new HAnchor("physiciansA", "/#physicians").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                TextAlignment("center")
            ]);
            let physiciansI = new HIcon('physicians_i',["fa","fa-group","fa-lg"]);
            physiciansA.addComponent(physiciansI);

            let settingsA = new HAnchor("settingsA", "/#settings").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                TextAlignment("center")
            ]);
            let settingsI = new HIcon('settings_i',["fa","fa-cogs","fa-lg"]);
            settingsA.addComponent(settingsI);

            nav.addComponent([
                profilePic,
                indexA,hIssuesA,hIssuesAP,physiciansA,settingsA
            ]);

            if (db.user.role === "Physician"){
                physiciansA.addCustomStyle([
                    Display("none")
                ]);
                healthIssuesPending.populate();
                healthIssues.populate();
            }
            if (db.user.role === "Patient"){
                hIssuesAP.addCustomStyle([
                    Display("none")
                ]);
                physicians.populate();
                healthIssues.populate();
            }


            let logOutA = new HAnchor("logOutA").addCustomStyle([
                Display("block"),
                Height(30,'px'),
                Width(30,'px'),
                BackgroundColor(colors.primaryColor),
                Color("ffffff"),
                Margin(0,'px').setTop(20).setLeft(20),
                Position("absolute"),
                PositionBottom(5,'px'),
                TextAlignment("center")
            ]);
            let logOutI = new HIcon('logOut_i',["fa","fa-sign-out","fa-lg"]);
            logOutA.addComponent(logOutI);
            logOutA.domElement.onclick = ()=>{
                localStorage.removeItem('db');
                history.pushState(null, "Login","");
                let a = document.createElement('a');
                history.pushState(null,"Index","");

                a.href = window.location.pathname+"#login";
                a.click();
            };
            nav.addComponent([
                profilePic,
                indexA,hIssuesA,hIssuesAP,physiciansA,settingsA,logOutA
            ]);
            index.addComponent([
                nav,mainView,healthIssues,healthIssuesPending,physicians,settings,register,
            ]);
            firstInstance = false;
        }
        else{
            location.reload(true)
        }


    };


    if(localStorage.getItem('db')){

        /**
         *
         *
         */

        /*
            Index Summaries
         */

        db = JSON.parse(localStorage.getItem('db'));
        firstInstance = false;

        /*
            Initialization of Navigation Elements using AWT
         */

        let login = new Login();
        let register = new Register();
        let mainView = new Index();
        let healthIssues = new HealthIssues();
        let healthIssuesPending = new HealthIssuesPending("pend");
        let physicians = new Physicians();
        let settings= new Settings();



        /*
        Navigation
         */

        let nav = new HDivision("nav");
        nav.addCustomStyle([
            Width(70,'px'),
            Height(100,"vh"),
            BackgroundColor(colors.primaryColor),
            Position("fixed"),
            PositionLeft(0),
            PositionTop(0),
            ZIndex(150)
        ]);

        let profilePic = new HImage("profilePicA", "","").addCustomStyle([
            Width(50,'px'),
            Height(50,'px'),
            BorderRadius(100,"%"),
            Border("hidden"),
            Margin(0,'px').setTop(10).setLeft(10),
            BackgroundColor("ffffff")
        ]);

        let indexA = new HAnchor("index_a", "/#index").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            TextAlignment("center")
        ]);
        let indexI = new HIcon('index_i',["fa","fa-heartbeat","fa-lg"]);
        indexA.addComponent(indexI);

        let hIssuesA = new HAnchor("hIssuesA", "/#healthIssues").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            TextAlignment("center")
        ]);
        let hIssuesI = new HIcon('hIssues_i',["fa","fa-thermometer","fa-lg"]);
        hIssuesA.addComponent(hIssuesI);

        let hIssuesAP = new HAnchor("hIssuesAP", "/#healthIssuespend").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            TextAlignment("center")
        ]);
        let hIssuesIP = new HIcon('hIssues_ip',["fa","fa-hourglass-1","fa-lg"]);
        hIssuesAP.addComponent(hIssuesIP);

        let physiciansA = new HAnchor("physiciansA", "/#physicians").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            TextAlignment("center")
        ]);
        let physiciansI = new HIcon('physicians_i',["fa","fa-group","fa-lg"]);
        physiciansA.addComponent(physiciansI);

        let settingsA = new HAnchor("settingsA", "/#settings").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            TextAlignment("center")
        ]);
        let settingsI = new HIcon('settings_i',["fa","fa-cogs","fa-lg"]);
        settingsA.addComponent(settingsI);


        let logOutA = new HAnchor("logOutA").addCustomStyle([
            Display("block"),
            Height(30,'px'),
            Width(30,'px'),
            BackgroundColor(colors.primaryColor),
            Color("ffffff"),
            Margin(0,'px').setTop(20).setLeft(20),
            Position("absolute"),
            PositionBottom(5,'px'),
            TextAlignment("center")
        ]);
        let logOutI = new HIcon('logOut_i',["fa","fa-sign-out","fa-lg"]);
        logOutA.addComponent(logOutI);
        logOutA.domElement.onclick = ()=>{
            localStorage.removeItem('db');
            history.pushState(null, "Login","");
            let a = document.createElement('a');
            history.pushState(null,"Index","");

            a.href = window.location.pathname+"#login";
            a.click();
        };
        nav.addComponent([
            profilePic,
            indexA,hIssuesA,hIssuesAP,physiciansA,settingsA,logOutA
        ]);

        /**
         *
         *
         */
        if (db.user.role === "Physician"){
            physiciansA.addCustomStyle([
                Display("none")
            ]);
            healthIssuesPending.populate();
            healthIssues.populate();
        }
        if (db.user.role === "Patient"){
            hIssuesAP.addCustomStyle([
                Display("none")
            ]);
            physicians.populate();
            healthIssues.populate();
        }
        index.addComponent([
            nav,mainView,healthIssues,healthIssuesPending,physicians,settings,login,register,
        ]);


        let a = document.createElement('a');
        a.href = window.location.pathname+"#index";
        a.click();
    }
    else{
        /*
            Initialization of Navigation Elements using AWT
         */

        let login = new Login();
        let register = new Register();

        index.addComponent([
            login, register
        ]);
    }




})();