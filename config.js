const config = {
	"gatsby": {
		"pathPrefix": "/",
		"siteUrl": "https://gredu-ds.netlify.com",
		"gaTrackingId": null,
		"trailingSlash": false
	},
	"header": {
		"logo": "${__dirname}/src/components/images/logo.svg",
		"logoLink": "http://localhost:8000/",
		"title": "Gredu Design System",
		"githubUrl": "",
		"helpUrl": "",
		"tweetText": "",
		"links": [
			{ "text": "", "link": ""}
		],
		"search": {
			"enabled": true,
			"indexName": "dev_GREDU",
			"algoliaAppId": "S1XUHMZVTD",
			"algoliaSearchKey": "a4a86cf2d8bbff44ea6b24e1ff981636",
			"algoliaAdminKey": "f54c1a6886f3f763f656d44010214d51"
		}
	},
	"sidebar": {
		"forcedNavOrder": [
			"/introduction", // add trailing slash if enabled above
    		// "/codeblock"
		],
    	"collapsedNav": [
      		 //"/codeblock"  add trailing slash if enabled above
    	],
		"links": [
			{ "text": "Gredu Official Website", "link": "https://gredu.asia"},
		],
		"frontline": false,
		"ignoreIndex": true,
	},
	"siteMetadata": {
		"title": "Gredu Design System",
		"description": "Collection of Guidelines and Components which can be used to create amazing user experiences.",
		"ogImage": null,
		"docsLocation": "#",
		"favicon": "https://gredu.asia/favicon.ico"
	},
	"pwa": {
		"enabled": false, // disabling this will also remove the existing service worker.
		"manifest": {
			"name": "Gatsby Gitbook Starter",
			"short_name": "GitbookStarter",
			"start_url": "/",
			"background_color": "#6b37bf",
			"theme_color": "#6b37bf",
			"display": "standalone",
			"crossOrigin": "use-credentials",
			icons: [
				{
					src: "src/pwa-512.png",
					sizes: `512x512`,
					type: `image/png`,
				},
			],
		},
	}
};

module.exports = config;
