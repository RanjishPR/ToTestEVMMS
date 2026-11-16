sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"ns/incidentscw45/test/integration/pages/IncidentsList.gen",
	"ns/incidentscw45/test/integration/pages/IncidentsObjectPage.gen"
], function (JourneyRunner, IncidentsListGenerated, IncidentsObjectPageGenerated) {
    'use strict';

    const runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('ns/incidentscw45') + '/test/flp.html#app-preview',
        pages: {
			onTheIncidentsListGenerated: IncidentsListGenerated,
			onTheIncidentsObjectPageGenerated: IncidentsObjectPageGenerated
        },
        async: true
    });

    return runner;
});

