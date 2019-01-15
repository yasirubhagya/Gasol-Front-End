export class ProjectDashboardDb
{
    public static projects = [
        {
            'name': 'ACME Corp. Backend App'
        },
        {
            'name': 'ACME Corp. Frontend App'
        },
        {
            'name': 'Creapond'
        },
        {
            'name': 'Withinpixels'
        }
    ];

    public static widgets = {
        'widget1'      : {
            'ranges'      : {
                'DY' : 'Yesterday',
                'DT' : 'Today',
                'DTM': 'Tomorrow'
            },
            'currentRange': 'DT',
            'data'        : {
                'label': 'DUE TASKS',
                'count': {
                    'DY' : 21,
                    'DT' : 25,
                    'DTM': 19
                },
                'extra': {
                    'label': 'Completed',
                    'count': {
                        'DY' : 6,
                        'DT' : 7,
                        'DTM': '-'
                    }

                }
            },
            'detail'      : 'Details about the due tasks.'
        },
        'widget2'      : {
            'title' : 'Overdue',
            'data'  : {
                'label': 'TASKS',
                'count': 4,
                'extra': {
                    'label': 'Yesterday\'s overdue',
                    'count': 2
                }
            },
            'detail': 'Details about the overdue tasks.'
        },
        'widget3'      : {
            'title' : 'Issues',
            'data'  : {
                'label': 'OPEN',
                'count': 32,
                'extra': {
                    'label': 'Closed today',
                    'count': 0
                }
            },
            'detail': 'Details about the Open Tasks.'
        },
        'widget4'      : {
            'title' : 'Features',
            'data'  : {
                'label': 'PROPOSALS',
                'count': 42,
                'extra': {
                    'label': 'Implemented',
                    'count': 8
                }
            },
            'detail': 'Details about the Proposals.'
        },
        'widget5'      : {
            'title'     : 'Customers Threshold',
            'ranges'    : {
                'TW': 'This Week',
                '2W': '2 Weeks Ago',
                'LM': 'Last Month'
            },
            'mainChart' : {
                '2W': [
                    {
                        'name'  : 'ceylinco',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 37000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 43000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Plan Sri Lanka',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 27310.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 62690.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Sathosa',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 50000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 60000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'CEB(Maintenance)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 40510.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 59490.00
                            }
                        ]
                    },
                    {
                        'name'  : 'DGM(Anuradhapura)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 10000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 70000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Upali Funerals',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 25116.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 74884.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Grand',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 70536.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 49464.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Premarathna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 50500.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 49500.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Somarthna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 15000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 85000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mrs.Dhammi',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 5000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 65000.00
                            }
                        ]
                    }

                ],
                'LM': [
                    {
                        'name'  : 'ceylinco',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 85000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 5000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Plan Sri Lanka',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 80000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Sathosa',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 97000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 13000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'CEB(Maintenance)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 100000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 0
                            }
                        ]
                    },
                    {
                        'name'  : 'DGM(Anuradhapura)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 50000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 30000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Upali Funerals',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 82000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 12000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Grand',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 110000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 10000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Premarathna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 99000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 1000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Somarthna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 40000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 60000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mrs.Dhammi',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 15000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 55000.00
                            }
                        ]
                    }

                ],
                'TW': [
                    {
                        'name'  : 'ceylinco',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 3245.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 76755.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Plan Sri Lanka',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 9383.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 80617.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Sathosa',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 18000.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 92000.00
                            }
                        ]
                    },
                    {
                        'name'  : 'CEB(Maintenance)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 32595.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 67405.00
                            }
                        ]
                    },
                    {
                        'name'  : 'DGM(Anuradhapura)',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 4305.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 75695.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Upali Funerals',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 11612.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 88388.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Grand',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 52407.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 77593.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Premarathna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 29889.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 70111.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mr.Somarthna',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 8500.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 91500.00
                            }
                        ]
                    },
                    {
                        'name'  : 'Mrs.Dhammi',
                        'series': [
                            {
                                'name' : 'issues',
                                'value': 4220.00
                            },
                            {
                                'name' : 'closed issues',
                                'value': 65780.00
                            }
                        ]
                    }

                ],
            },
            'supporting': {
                'created'  : {
                    'label': 'CREATED',
                    'count': {
                        '2W': 48,
                        'LW': 46,
                        'TW': 54
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CREATED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'Created',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'closed'   : {
                    'label': 'CLOSED',
                    'count': {
                        '2W': 27,
                        'LW': 31,
                        'TW': 26
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'CLOSED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'reOpened' : {
                    'label': 'RE-OPENED',
                    'count': {
                        '2W': 4,
                        'LW': 5,
                        'TW': 2
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'RE-OPENED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 2
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 1
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 4
                                    }
                                ]
                            }
                        ]
                    }
                },
                'wontFix'  : {
                    'label': 'WON\'T FIX',
                    'count': {
                        '2W': 6,
                        'LW': 3,
                        'TW': 4
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'WON\'T FIX',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'needsTest': {
                    'label': 'NEEDS TEST',
                    'count': {
                        '2W': 10,
                        'LW': 7,
                        'TW': 8
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'NEEDS TEST',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ]
                    }
                },
                'fixed'    : {
                    'label': 'FIXED',
                    'count': {
                        '2W': 21,
                        'LW': 17,
                        'TW': 14
                    },
                    'chart': {
                        '2W': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 8
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 1
                                    }
                                ]
                            }
                        ],
                        'LW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 7
                                    }
                                ]
                            }
                        ],
                        'TW': [
                            {
                                'name'  : 'FIXED',
                                'series': [
                                    {
                                        'name' : 'Mon',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Tue',
                                        'value': 7
                                    },
                                    {
                                        'name' : 'Wed',
                                        'value': 4
                                    },
                                    {
                                        'name' : 'Thu',
                                        'value': 6
                                    },
                                    {
                                        'name' : 'Fri',
                                        'value': 5
                                    },
                                    {
                                        'name' : 'Sat',
                                        'value': 3
                                    },
                                    {
                                        'name' : 'Sun',
                                        'value': 2
                                    }
                                ]
                            }
                        ]
                    }
                }
            }
        },
        'widget6'      : {
            'title'      : 'Task Distribution',
            'ranges'     : {
                'TW': 'Today',
                'LW': 'Next Week',
                '2W': 'This Month'
            },
            'mainChart'  : {
                'TW': [
                    {
                        'name' : 'Oil Level in the Tanks',
                        'value': 15
                    },
                    {
                        'name' : 'Threshold Limits of Customers',
                        'value': 20
                    },
                    {
                        'name' : 'Order Oil for the Tanks',
                        'value': 38
                    },
                    {
                        'name' : 'Pay Bills',
                        'value': 27
                    }
                ],
                'LW': [
                    {
                        'name' : 'Oil Level in the Tanks',
                        'value': 15
                    },
                    {
                        'name' : 'Threshold Limits of Customers',
                        'value': 20
                    },
                    {
                        'name' : 'Order Oil for the Tanks',
                        'value': 38
                    },
                    {
                        'name' : 'Pay Bills',
                        'value': 27
                    }
                ],
                '2W': [
                    {
                        'name' : 'Oil Level in the Tanks',
                        'value': 15
                    },
                    {
                        'name' : 'Threshold Limits of Customers',
                        'value': 20
                    },
                    {
                        'name' : 'Order Oil for the Tanks',
                        'value': 38
                    },
                    {
                        'name' : 'Pay Bills',
                        'value': 27
                    }
                ]
            },
            /* 'footerLeft' : {
                'title': 'Tasks Added',
                'count': {
                    '2W': 487,
                    'LW': 526,
                    'TW': 594
                }
            },
            'footerRight': {
                'title': 'Tasks Completed',
                'count': {
                    '2W': 193,
                    'LW': 260,
                    'TW': 287
                }
            } */
        },
        'widget7'      : {
            'title'   : 'Schedule',
            'ranges'  : {
                'T' : 'Today',
                'TM': 'Tomorrow'
            },
            'schedule': {
                'T' : [
                    {
                        'title'   : 'Group Meeting',
                        'time'    : 'In 32 minutes',
                        'location': 'Room 1B'
                    },
                    {
                        'title': 'Coffee Break',
                        'time' : '10:30 AM'
                    },
                    {
                        'title': 'Public Beta Release',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Dinner with David',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Jane\'s Birthday Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'Overseer\'s Retirement Party',
                        'time' : '21:30 PM'
                    }
                ],
                'TM': [
                    {
                        'title': 'Marketing Meeting',
                        'time' : '09:00 AM'
                    },
                    {
                        'title': 'Public Announcement',
                        'time' : '11:00 AM'
                    },
                    {
                        'title': 'Lunch',
                        'time' : '12:10 PM'
                    },
                    {
                        'title': 'Meeting with Beta Testers',
                        'time' : '15:00 AM'
                    },
                    {
                        'title': 'Live Stream',
                        'time' : '17:30 PM'
                    },
                    {
                        'title': 'Release Party',
                        'time' : '19:30 PM'
                    },
                    {
                        'title': 'CEO\'s Party',
                        'time' : '22:30 PM'
                    }
                ]
            }
        },
        'widget8'      : {
            'title'    : 'Income Distribution',
            'mainChart': [
                {
                    'name' : 'Disel',
                    'value': 12
                },
                {
                    'name' : 'Petrol(90C)',
                    'value': 17
                },
                {
                    'name' : 'Petrol(95C)',
                    'value': 28
                },
                {
                    'name' : 'Kerosene',
                    'value': 25
                },
                {
                    'name' : 'Order Item',
                    'value': 15
                }
            ]
        },
        'widget9'      : {
            'title'         : 'Cash Flow',
            'ranges'        : {
                'TW': 'Today',
                'LW': 'This Week',
                '2W': 'This Month'
            },
            'weeklySpent'   : {
                'title': 'Income',
                'count': {
                    '2W': '5,000,682.85',
                    'LW': '1,050,445.34',
                    'TW': '3,000,630.15'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 1
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 3
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 2
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 4
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 2
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 1
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 6
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 3
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 6
                                }
                            ]
                        }
                    ]
                }
            },
            'totalSpent'    : {
                'title': 'Expenditure',
                'count': {
                    '2W': '3,900,682.85',
                    'LW': '500,128.19',
                    'TW': '2,000,758.34'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 2
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 7
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 5
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 7
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 8
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 6
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 6
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 7
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 5
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 4
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 7
                                }
                            ]
                        }
                    ]
                }
            },
           /*  'remaining'     : {
                'title': 'REMAINING',
                'count': {
                    '2W': '94.317,15',
                    'LW': '92.871,81',
                    'TW': '89.241,66'
                },
                'chart': {
                    '2W': [
                        {
                            'name'  : 'CREATED',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 1
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 5
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 7
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'LW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 3
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 2
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 1
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 4
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 8
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 4
                                }
                            ]
                        }
                    ],
                    'TW': [
                        {
                            'name'  : 'Created',
                            'series': [
                                {
                                    'name' : 'Mon',
                                    'value': 2
                                },
                                {
                                    'name' : 'Tue',
                                    'value': 4
                                },
                                {
                                    'name' : 'Wed',
                                    'value': 8
                                },
                                {
                                    'name' : 'Thu',
                                    'value': 6
                                },
                                {
                                    'name' : 'Fri',
                                    'value': 2
                                },
                                {
                                    'name' : 'Sat',
                                    'value': 5
                                },
                                {
                                    'name' : 'Sun',
                                    'value': 1
                                }
                            ]
                        }
                    ]

                   'weeklySpent'   : {
                'title': 'Income',
                'count': {
                    '2W': '5,000,682.85',
                    'LW': '1,050,445.34',
                    'TW': '3,000,630.15'
                },
                }
            }, */
   
            'totalBudget'   : {
                'title': 'Profit',
                
                'count': {
                    '2W': '1,100,000.00',
                    'LW': '550,317.15',
                    'TW': '999,871.81'
                },
            }
        },
        'widget10'     : {
            'title': 'Budget Details',
            'table': {
                'columns': [
                    {
                        'title': 'Budget Type'
                    },
                    {
                        'title': 'Total Budget'
                    },
                    {
                        'title': 'Spent ($)'
                    },
                    {
                        'title': 'Spent (%)'
                    },
                    {
                        'title': 'Remaining ($)'
                    },
                    {
                        'title': 'Remaining (%)'
                    }
                ],
                'rows'   : [
                    [
                        {
                            'value'  : 'Wireframing',
                            'classes': 'mat-primary-bg',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$14,880.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$14,000.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%94.08',
                            'classes': 'text-success',
                            'icon'   : 'trending_up'
                        },
                        {
                            'value'  : '$880.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%5.92',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Design',
                            'classes': 'mat-green-bg',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$21,080.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$17,240.34',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%81.78',
                            'classes': 'text-success',
                            'icon'   : 'trending_up'
                        },
                        {
                            'value'  : '$3,839.66',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%18.22',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Coding',
                            'classes': 'mat-red-bg',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$3,518.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%10.13',
                            'classes': 'text-danger',
                            'icon'   : 'trending_down'
                        },
                        {
                            'value'  : '$31,202.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%89.87',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Marketing',
                            'classes': 'mat-accent-bg',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$0.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%0.00',
                            'classes': 'text-info',
                            'icon'   : 'trending_flat'
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%100.00',
                            'classes': '',
                            'icon'   : ''
                        }
                    ],
                    [
                        {
                            'value'  : 'Extra',
                            'classes': 'mat-orange-bg',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$18,600.00',
                            'classes': 'text-bold',
                            'icon'   : ''
                        },
                        {
                            'value'  : '$0.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%0.00',
                            'classes': 'text-info',
                            'icon'   : 'trending_flat'
                        },
                        {
                            'value'  : '$34,720.00',
                            'classes': '',
                            'icon'   : ''
                        },
                        {
                            'value'  : '%100.00',
                            'classes': '',
                            'icon'   : ''
                        }
                    ]
                ]
            }
        },
        'widget11'     : {
            'title': 'Employees',
            'table': {
                'columns': ['avatar', 'name', 'position', 'office', 'email', 'phone'],
                'rows'   : [
                    {
                        avatar  : 'assets/images/avatars/Rashmi.jpg',
                        name    : 'Rashmi Thilakarathne',
                        position: 'Manager',
                        office  : 'Anuradhapura',
                        email   : 'Rashmi@qualon.xyz',
                        phone   : '+94 71 524 9658'
                    }
                   /*  {
                        avatar  : 'assets/images/avatars/katherine.jpg',
                        name    : 'Kathy Anderson',
                        position: 'Recruiting Manager',
                        office  : 'Solţānābād',
                        email   : 'kanderson49@mail.com.br',
                        phone   : '+23 572 311 1136'
                    },
                    {
                        avatar  : 'assets/images/avatars/andrew.jpg',
                        name    : 'Mark Turner',
                        position: 'Recruiting Manager',
                        office  : 'Neftegorsk',
                        email   : 'mturner4a@mail.com',
                        phone   : '+01 139 803 9263'
                    },
                    {
                        avatar  : 'assets/images/avatars/jane.jpg',
                        name    : 'Kathryn Martinez',
                        position: 'Director of Sales',
                        office  : 'Palekastro',
                        email   : 'kmartinez4b@mail.com',
                        phone   : '+25 467 022 5393'
                    },
                    {
                        avatar  : 'assets/images/avatars/alice.jpg',
                        name    : 'Annie Gonzales',
                        position: 'Actuary',
                        office  : 'Candon',
                        email   : 'agonzales4c@mail.edu',
                        phone   : '+99 891 619 7138'
                    },
                    {
                        avatar  : 'assets/images/avatars/vincent.jpg',
                        name    : 'Howard King',
                        position: 'Human Resources',
                        office  : 'Bergen op Zoom',
                        email   : 'hking4d@mail.gov',
                        phone   : '+46 984 348 1409'
                    },
                    {
                        avatar  : 'assets/images/avatars/joyce.jpg',
                        name    : 'Elizabeth Dixon',
                        position: 'Electrical Engineer',
                        office  : 'Písečná',
                        email   : 'edixon4e@mail.gov',
                        phone   : '+33 332 067 9063'
                    },
                    {
                        avatar  : 'assets/images/avatars/danielle.jpg',
                        name    : 'Dorothy Morris',
                        position: 'Office Assistant',
                        office  : 'Magsaysay',
                        email   : 'dmorris4f@mail.com',
                        phone   : '+05 490 958 6120'
                    },
                    {
                        avatar  : 'assets/images/avatars/carl.jpg',
                        name    : 'Mark Gonzales',
                        position: 'Quality Control',
                        office  : 'Matsue-shi',
                        email   : 'mgonzales4g@mail.com',
                        phone   : '+03 168 394 9935'
                    },
                    {
                        avatar  : 'assets/images/avatars/profile.jpg',
                        name    : 'Catherine Rogers',
                        position: 'Programmer Analyst',
                        office  : 'Kangar',
                        email   : 'crogers4h@mail.com',
                        phone   : '+86 235 407 5373'
                    },
                    {
                        avatar  : 'assets/images/avatars/garry.jpg',
                        name    : 'Ruth Grant',
                        position: 'Community Outreach',
                        office  : 'Beaune',
                        email   : 'rgrant4i@mail.pl',
                        phone   : '+36 288 083 8460'
                    },
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Phyllis Gutierrez',
                        position: 'Administrative Assistant',
                        office  : 'Shlissel’burg',
                        email   : 'pgutierrez4j@mail.net',
                        phone   : '+52 749 861 9304'
                    }, {
                        avatar  : 'assets/images/avatars/alice.jpg',
                        name    : 'Lillian Morris',
                        position: 'Media Planner',
                        office  : 'Berlin',
                        email   : 'lmorris4k@mail.de',
                        phone   : '+59 695 110 3856'
                    }, {
                        avatar  : 'assets/images/avatars/vincent.jpg',
                        name    : 'Jeremy Anderson',
                        position: 'Systems Engineer',
                        office  : 'Lũng Hồ',
                        email   : 'janderson4l@mail.uk',
                        phone   : '+40 384 115 1448'
                    },
                    {
                        avatar  : 'assets/images/avatars/carl.jpg',
                        name    : 'Arthur Lawrence',
                        position: 'Nurse Practicioner',
                        office  : 'Sarkanjut',
                        email   : 'alawrence4m@mail.com',
                        phone   : '+36 631 599 7867'
                    }, {
                        avatar  : 'assets/images/avatars/andrew.jpg',
                        name    : 'David Simmons',
                        position: 'Social Worker',
                        office  : 'Ushumun',
                        email   : 'dsimmons4n@mail.com',
                        phone   : '+01 189 681 4417'
                    }, {
                        avatar  : 'assets/images/avatars/danielle.jpg',
                        name    : 'Daniel Johnston',
                        position: 'Help Desk',
                        office  : 'São Carlos',
                        email   : 'djohnston4o@mail.gov',
                        phone   : '+60 028 943 7919'
                    },

                    {
                        avatar  : 'assets/images/avatars/joyce.jpg',
                        name    : 'Ann King',
                        position: 'Internal Auditor',
                        office  : 'Liren',
                        email   : 'aking4p@mail.com',
                        phone   : '+91 103 932 6545'
                    },
                    {
                        avatar  : 'assets/images/avatars/james.jpg',
                        name    : 'Phillip Franklin',
                        position: 'VP Accounting',
                        office  : 'Soba',
                        email   : 'pfranklin4q@mail.com',
                        phone   : '+25 820 986 7626'
                    },
                    {
                        avatar  : 'assets/images/avatars/garry.jpg',
                        name    : 'Gary Gonzalez',
                        position: 'Speech Pathologist',
                        office  : 'Gangkou',
                        email   : 'ggonzalez4r@mail.cc',
                        phone   : '+10 862 046 7916'
                    } */
                ]
            }
        },
        'weatherWidget': {
            'locations'      : {
                'NewYork': {
                    'name'           : 'New York',
                    'icon'           : 'icon-rainy2',
                    'temp'           : {
                        'C': '22',
                        'F': '72'
                    },
                    'windSpeed'      : {
                        'KMH': 12,
                        'MPH': 7.5
                    },
                    'windDirection'  : 'NW',
                    'rainProbability': '98%',
                    'next3Days'      : [
                        {
                            'name': 'Sunday',
                            'icon': 'icon-rainy',
                            'temp': {
                                'C': '21',
                                'F': '70'
                            }
                        },
                        {
                            'name': 'Sunday',
                            'icon': 'icon-cloudy',
                            'temp': {
                                'C': '19',
                                'F': '66'
                            }
                        },
                        {
                            'name': 'Tuesday',
                            'icon': 'icon-windy3',
                            'temp': {
                                'C': '24',
                                'F': '75'
                            }
                        }
                    ]
                }
            },
            'currentLocation': 'NewYork',
            'tempUnit'       : 'C',
            'speedUnit'      : 'KMH'
        }
    };
}
