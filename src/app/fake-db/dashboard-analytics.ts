export class AnalyticsDashboardDb
{
    public static widgets = {
        widget1: {
            chartType: 'line',
            datasets : {
                '2015': [
                    {
                        label: 'Sales',
                        data : [4, 3, 3.4, 2.2, 2.9, 3.9, 2.5],
                        fill : 'start'

                    }
                ],
                '2016': [
                    {
                        label: 'Sales',
                        data : [2.2, 2.9, 3.9, 2.5, 3.8, 3.2, 2.9],
                        fill : 'start'

                    }
                ],
                '2017': [
                    {
                        label: 'Sales',
                        data : [3.9, 2.5, 3.8, 4.1, 1.9, 3, 3.8],
                        fill : 'start'

                    }
                ]

            },
            labels   : ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            colors   : [
                {
                    borderColor              : '#42a5f5',
                    backgroundColor          : '#42a5f5',
                    pointBackgroundColor     : '#1e88e5',
                    pointHoverBackgroundColor: '#1e88e5',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top  : 32,
                        left : 32,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    },
                    line : {
                        tension: 0
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display       : false,
                                drawBorder    : false,
                                tickMarkLength: 18
                            },
                            ticks    : {
                                fontColor: '#ffffff'
                            }
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min     : 1.5,
                                max     : 5,
                                stepSize: 0.5
                            }
                        }
                    ]
                },
                plugins            : {
                    filler      : {
                        propagate: false
                    },
                    xLabelsOnTop: {
                        active: true
                    }
                }
            }
        },
        widget2: {
            conversion: {
                value   : 492,
                ofTarget: 13
            },
            chartType : 'bar',
            datasets  : [
                {
                    label: 'Conversion',
                    data : [221, 428, 492, 471, 413]
                }
            ],
            labels    : ['Disel Tank 1', 'Disel Tank 2', 'Petrol (90C)', 'Petrol (95C)', 'Kerosene'],
            colors    : [
                {
                    borderColor    : '#42a5f5',
                    backgroundColor: '#42a5f5'
                }
            ],
            options   : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: true
                        }
                    ],
                    yAxes: [
                        {
                            display: true,
                            ticks  : {
                                min: 100,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget3: {
            impressions: {
                value   : '87k',
                ofTarget: 12
            },
            chartType  : 'line',
            datasets   : [
                {
                    label: 'Impression',
                    data : [67000, 54000, 82000, 57000, 72000, 57000, 87000, 72000, 89000, 98700, 112000, 136000, 110000, 149000, 98000],
                    fill : false
                }
            ],
            labels     : ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7', 'Jan 8', 'Jan 9', 'Jan 10', 'Jan 11', 'Jan 12', 'Jan 13', 'Jan 14', 'Jan 15'],
            colors     : [
                {
                    borderColor: '#5c84f1'
                }
            ],
            options    : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                elements           : {
                    point: {
                        radius          : 2,
                        borderWidth     : 1,
                        hoverRadius     : 2,
                        hoverBorderWidth: 1
                    },
                    line : {
                        tension: 0
                    }
                },
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                // min: 100,
                                // max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget4: {
            visits   : {
                value   : 882,
                ofTarget: -9
            },
            chartType: 'bar',
            datasets : [
                {
                    label: 'Visits',
                    data : [432, 428, 327, 363, 456, 267, 231]
                }
            ],
            labels   : ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            colors   : [
                {
                    borderColor    : '#f44336',
                    backgroundColor: '#f44336'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                layout             : {
                    padding: {
                        top   : 24,
                        left  : 16,
                        right : 16,
                        bottom: 16
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            display: false
                        }
                    ],
                    yAxes: [
                        {
                            display: false,
                            ticks  : {
                                min: 150,
                                max: 500
                            }
                        }
                    ]
                }
            }
        },
        widget5: {
            chartType: 'line',
            datasets : {
                'yesterday': [
                    {
                        label: 'Petrol (90C)',
                        data : [7100, 5800, 4200, 6900, 7900, 4900, 5500],
                        fill : 'start'

                    },
                    {
                        label: 'Disel',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900],
                        fill : 'start'

                    },
                    {
                        label: 'Petrol (95C)',
                        data : [5200, 4900, 6900, 5500, 4800, 7200, 5900],
                        fill : 'start'

                    },
                    {
                        label: 'Kerosene',
                        data : [1090, 3000, 3040, 2020, 2090, 3900, 2050],
                        fill : 'start'

                    }
                ],
                'today'    : [
                    {
                        label: 'Petrol (90C)',
                        data : [5200, 4900, 6900, 5500, 4800, 7200, 5900],
                        fill : 'start'

                    },
                    {
                        label: 'Disel',
                        data : [1090, 3000, 3040, 2020, 2090, 3900, 2050],
                        fill : 'start'

                    },
                    {
                        label: 'Petrol (95C)',
                        data : [7100, 5800, 4200, 6900, 7900, 4900, 5500],
                        fill : 'start'

                    },
                    {
                        label: 'Kerosene',
                        data : [3000, 3400, 4100, 3800, 2200, 3200, 2900],
                        fill : 'start'

                    }
                ]
            },
            labels   : ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
            colors   : [
                {
                    borderColor              : 'rgba(251, 13, 231, 0.6)',
                    backgroundColor          : 'rgba(251, 13, 231, 0.01)',
                    pointBackgroundColor     : 'rgba(251, 13, 231, 0.6)',
                    pointHoverBackgroundColor: 'rgba(251, 13, 231, 0.6)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(30, 136, 229, 0.5)',
                    backgroundColor          : 'rgba(30, 136, 229, 0.01)',
                    pointBackgroundColor     : 'rgba(30, 136, 229, 0.5)',
                    pointHoverBackgroundColor: 'rgba(30, 136, 229, 0.5)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(13, 251, 33, 0.71)',
                    backgroundColor          : 'rgba(13, 251, 33, 0.01)',
                    pointBackgroundColor     : 'rgba(13, 251, 33, 0.71)',
                    pointHoverBackgroundColor: 'rgba(13, 251, 33, 0.71)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                },
                {
                    borderColor              : 'rgba(163, 13, 0, 0.9)',
                    backgroundColor          : 'rgba(163, 13, 0, 0.01)',
                    pointBackgroundColor     : 'rgba(163, 13, 0, 0.9)',
                    pointHoverBackgroundColor: 'rgba(163, 13, 0, 0.9)',
                    pointBorderColor         : '#ffffff',
                    pointHoverBorderColor    : '#ffffff'
                }
            ],
            options  : {
                spanGaps           : false,
                legend             : {
                    display: false
                },
                maintainAspectRatio: false,
                tooltips           : {
                    position : 'nearest',
                    mode     : 'index',
                    intersect: false
                },
                layout             : {
                    padding: {
                        left : 24,
                        right: 32
                    }
                },
                elements           : {
                    point: {
                        radius          : 4,
                        borderWidth     : 2,
                        hoverRadius     : 4,
                        hoverBorderWidth: 2
                    }
                },
                scales             : {
                    xAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            ticks    : {
                                fontColor: 'rgba(0,0,0,0.54)'
                            }
                        }
                    ],
                   /*  yAxes: [
                        {
                            gridLines: {
                                tickMarkLength: 16
                            },
                            ticks    : {
                                stepSize: 1000
                            }
                        }
                    ] */

                    yAxes: [
                        {
                            display: true,
                            ticks  : {
                                min     : 0,
                                max     : 8000,
                                stepSize: 1000
                            }
                        }
                    ]
                },
                plugins            : {
                    filler: {
                        propagate: false
                    }
                }
            }
        },
        widget6: {
            markers: [
                {
                    lat  : 52,
                    lng  : -73,
                    label: '120'
                },
                {
                    lat  : 37,
                    lng  : -104,
                    label: '498'
                },
                {
                    lat  : 21,
                    lng  : -7,
                    label: '443'
                },
                {
                    lat  : 55,
                    lng  : 75,
                    label: '332'
                },
                {
                    lat  : 51,
                    lng  : 7,
                    label: '50'
                },
                {
                    lat  : 31,
                    lng  : 12,
                    label: '221'
                },
                {
                    lat  : 45,
                    lng  : 44,
                    label: '455'
                },
                {
                    lat  : -26,
                    lng  : 134,
                    label: '231'
                },
                {
                    lat  : -9,
                    lng  : -60,
                    label: '67'
                },
                {
                    lat  : 33,
                    lng  : 104,
                    label: '665'
                }
            ],
            styles : [
                {
                    'featureType': 'administrative',
                    'elementType': 'labels.text.fill',
                    'stylers'    : [
                        {
                            'color': '#444444'
                        }
                    ]
                },
                {
                    'featureType': 'landscape',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#f2f2f2'
                        }
                    ]
                },
                {
                    'featureType': 'poi',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'road',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'saturation': -100
                        },
                        {
                            'lightness': 45
                        }
                    ]
                },
                {
                    'featureType': 'road.highway',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'simplified'
                        }
                    ]
                },
                {
                    'featureType': 'road.arterial',
                    'elementType': 'labels.icon',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'transit',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'visibility': 'off'
                        }
                    ]
                },
                {
                    'featureType': 'water',
                    'elementType': 'all',
                    'stylers'    : [
                        {
                            'color': '#039be5'
                        },
                        {
                            'visibility': 'on'
                        }
                    ]
                }
            ]
        },
        widget7: {
            scheme : {
                domain: ['#4867d2', '#FB0D68', '#1DFB0D']
            },
            devices: [
                {
                    name  : 'Petrol (95C)',
                    value :52.8,
                    change: -0.6
                },
                {
                    name  : 'Disel',
                    value : 6.1,
                    change: 0.7
                },
                {
                    name  : 'Other Items',
                    value : 41.1,
                    change: 0.1
                }
            ]
        },
        widget8: {
            scheme : {
                domain: ['#5c84f1']
            },
            today  : '59',
            change : {
                value     : 31,
                percentage: 2.05
            },
            data   : [
                {
                    name  : 'Sales',
                    series: [
                        {
                            name : 'Jan 1',
                            value: 54
                        },
                        {
                            name : 'Jan 2',
                            value: 53
                        },
                        {
                            name : 'Jan 3',
                            value: 57
                        },
                        {
                            name : 'Jan 4',
                            value: 51
                        },
                        {
                            name : 'Jan 5',
                            value: 54
                        },
                        {
                            name : 'Jan 6',
                            value: 53
                        },
                        {
                            name : 'Jan 7',
                            value: 54
                        }
                    ]
                }
            ],
            dataMin: 50,
            dataMax: 65
        },
        widget9: {
            rows: [
                {
                    title     : 'XHD 40 Desil Engine Oil',
                    clicks    : 480.00,
                    conversion: 54.65
                },
                {
                    title     : '2T Oil',
                    clicks    : 448.00,
                    conversion: 55.25
                },
                {
                    title     : 'VG 68 Hydrolic Oil',
                    clicks    : 475.00,
                    conversion: 49.17
                },
                {
                    title     : 'SAE 90 Gear Oil',
                    clicks    : 610.00,
                    conversion: 45.41
                },
                {
                    title     : 'Supro (15WHO) 1L Oil',
                    clicks    : 720.00,
                    conversion: 65.00
                }
            ]
        }
    };
}
