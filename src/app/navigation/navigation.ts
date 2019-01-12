import { FuseNavigation } from '@fuse/types';

export const navigation: FuseNavigation[] = [
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
        icon : 'send',
        url  : '/project/'
    },

    {
        id   : 'forms',
        title: 'Forms',
        type : 'item',
        icon : 'description',
        url  : '/forms/'
    },

    {
        id       : 'calendar',
        title    : 'Calendar',
        translate: 'NAV.CALENDAR',
        type     : 'item',
        icon     : 'today',
        url      : '/calendar/'
    },
    
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

];
