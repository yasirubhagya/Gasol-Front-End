import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [

    {
        id       : 'dashboard',
        title    : 'Dashboard',
        type     : 'group',
        icon     : 'apps',     
        children :[

            {
                id   : 'analytics',
                title: 'Analytics',
                type : 'item',
                icon : 'timeline',
                url  : '/analytics/'
            },

            {
                id   : 'project',
                title: 'Project',
                type : 'item',
                icon : 'archive',
                url  : '/project/'
            },
        ]
    },
    {
        id       : 'applications',
        title    : 'Entries',
        type     : 'group',
        icon     : 'apps',     
        children :[

            {
                id   : 'forms',
                title: 'Forms',
                type : 'collapsable',
                icon : 'description',
                children: [
                    {
                        id: 'form1',
                        title: 'Static Data',
                        type: 'item',
                        url  : '/forms/'
                    },
                    {
                        id: 'form2',
                        title: 'Income & Expenditures',
                        type: 'item',
                        url  : '/forms2/'
                    },
                    {
                        id: 'form3',
                        title: 'Meter Readings',
                        type: 'item',
                        url  : '/forms3/'
                    }
                ]
            },
            {
                id       : 'calendar',
                title    : 'Calendar',
                translate: 'NAV.CALENDAR',
                type     : 'item',
                icon     : 'today',
                url      : '/calendar/'
            }
        ] 
    },

    {
        id       : 'about',
        title    : 'About',
        type     : 'group',
        icon     : 'apps',     
        children :[
            
            {
                id   : 'coming-soon',
                title: 'Coming Soon',
                type : 'item',
                icon : 'alarm',
                url  : '/coming-soon/'
            },
            
            {
                id   : 'faq',
                title: 'Faq',
                type : 'item',
                icon : 'help',
                url  : '/faq/'
            },

            {
                id   : 'knowledge-base',
                title: 'Knowledge-base',
                type : 'item',
                icon : 'import_contacts',
                url  : '/knowledge-base/'
            },

            {
                id   : 'change-log',
                title: 'Change-log',
                type : 'item',
                icon : 'update',
                url  : '/change-log/'
            }
        ]
    }

];
