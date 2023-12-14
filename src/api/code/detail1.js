const mapLevelScene = [

]
const mapLevel = [
  {
    'id': 1001,
    'parentId': -1,
    'children': [ ],
    'key': 1001,
    'levelKey:': 1001,
    'title': '道路',
    'disableCheckbox': false,
    'scopedSlots': {
      'icon': 'icon',
      'title': 'title'
    },
    'props': {
      'levelModelId': 1001,
      'levelModelName': '道路',
      'dataFrom': 1,
      'page': 1,
      'limit': 10
    },
    'class': 'selected-class',
    'vp': {
      'pos': { 'x': 477913.9738571264, 'y': 5466880.540277503, 'z': 716.0623340960942 },
      'target': { 'x': 478498.7802206801, 'y': 5470828.477398603, 'z': -535.8389322914084 },
      'up': { 'x': -0.01585983956788394, 'y': 0.3043653134837632, 'z': 0.9524233415014697 },
      'bbox': {
        'max': {
          'x': 482300.2875,
          'y': 5473898.479,
          'z': 500
        },
        'min': {
          'x': 476300.2875,
          'y': 5467896.707,
          'z': -500
        }
      }
    },
    'tunnels': [
      {
        'cLines': [
          [
            {
              'bulge': 0,
              'pos': {
                'x': 477953.545,
                'y': 5469393.457,
                'z': -232
              }
            },
            {
              'bulge': 0,
              'pos': {
                'x': 478113.546,
                'y': 5469869.087,
                'z': -232
              }
            }
          ]
        ],
        'cate': 0,
        'gem': {
          'color': '0xbfc7cd'
        },
        'id': 100,
        'key': 100,
        'visible': false,
        'lLines': [
          [
            {
              'bulge': 0,
              'pos': {
                'x': 477949.112,
                'y': 5469392.554,
                'z': -232
              }
            },
            {
              'bulge': 0,
              'pos': {
                'x': 477955.802,
                'y': 5469412.442,
                'z': -232
              }
            }
          ]
        ],
        'levelKey': '1001',
        'modelType': 4,
        'name': '',
        'rLines': [
          [
            {
              'bulge': -0.4142135623731025,
              'pos': {
                'x': 477960.497,
                'y': 5469395.036,
                'z': -232
              }
            },
            {
              'bulge': 0,
              'pos': {
                'x': 477958.61,
                'y': 5469398.836,
                'z': -232
              }
            }
          ]
        ],
        'scopedSlots': {
          'cate': '3d',
          'color': '0x666666',
          'height': 8,
          'title': ''
        },
        'type': 0
      }
    ]
  },
  {
    'id': 1002,
    'parentId': -1,
    'children': [ ],
    'key': 1002,
    'levelKey:': 1002,
    'title': 'gis图层',
    'disableCheckbox': false,
    'scopedSlots': {
      'icon': 'icon',
      'title': 'title'
    },
    'props': {
      'levelModelId': 1002,
      'levelModelName': 'gis图层',
      'dataFrom': 1,
      'page': 1,
      'limit': 10
    },
    'class': 'selected-class',
    'tunnels': [
      {
        'key': 1,
        'cate': 0,
        'type': 0,
        'name': 'gis图层',
        'levelId': 1002,
        'layer': 'gis',
        'light': {
          'ambientLight': {
            'color': '0xaab8b8'
          },
          'defaultSunLight': {
            'color': '0xcccccc'
          }
        },
        'backgroundProp': {
          'img': '/textures/background/bg.png'
        },
        'id': 1,
        'needEmissive': true,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/modelHD3.FBX'
        },
        'physics': {
          'mass': 0,
          'zeroGround': true
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478949.0955698874,
            'y': 5469717.306896504,
            'z': -313.797375
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 1.2529454582844546
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 12,
        'cate': 0,
        'type': 0,
        'name': '主斜井',
        'levelId': 1002,
        'id': 12,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/zhu.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '主斜井',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 477950.1301394161,
            'y': 5470060.164163998,
            'z': -149.2787386541363
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 0.8558553409666662
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 13,
        'cate': 0,
        'type': 0,
        'name': '副平硐',
        'levelId': 1002,
        'id': 13,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/fu.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '副平硐',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479568.4340018978,
            'y': 5471061.083802578,
            'z': -226.9581066831528
          },
          'rotation': {
            'x': -0.039889034440970556,
            'y': 0.006100491740323125,
            'z': -3.0242801727892377
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 14,
        'cate': 0,
        'type': 0,
        'name': '回风斜井',
        'levelId': 1002,
        'id': 14,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/huifeng.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fan-tunnel',
          'icon': 'sbny-chejian.png',
          'title': '回风斜井',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479423.24172076955,
            'y': 5471163.593017326,
            'z': -233.99391310080654
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -3.060563967188341
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 127,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 127,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-2.FBX'
        },
        // 'physics': {
        //   'mass': 2
        // },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479306.4772661451,
            'y': 5470913.469508904,
            'z': -297.50108361660807
          },
          'rotation': {
            'x': 0.0,
            'y': 0.0,
            'z': 1.06
          },
          'scale': {
            'x': 0.6722355818940678,
            'y': 0.8488181267096191,
            'z': 0.4202808348945229
          }
        }
      },
      {
        'key': 1272,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1272,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479240.01947920106,
            'y': 5470954.090270175,
            'z': -293.31797637892168
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1273,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1273,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479236.7432455454,
            'y': 5470948.610939453,
            'z': -293.18609515067016
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1274,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1274,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479234.54446995555,
            'y': 5470942.830358908,
            'z': -293.74574831689768
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1275,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1275,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479237.30514207896,
            'y': 5470940.308321997,
            'z': -293.76407988324493
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1276,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1276,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479240.31298541895,
            'y': 5470945.881086778,
            'z': -293.2108973468838
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1277,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1277,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479243.0244469891,
            'y': 5470951.147334282,
            'z': -293.6398421623757
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1278,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1278,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479252.2957987731,
            'y': 5470946.6908033695,
            'z': -293.1746856759819
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1279,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1279,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479248.9856029971,
            'y': 5470941.325702198,
            'z': -293.3130417037978
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1280,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1280,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479246.2318344749,
            'y': 5470935.295089163,
            'z': -293.22681413288825
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1281,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1281,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479253.42131727183,
            'y': 5470931.344978672,
            'z': -293.6091913794478
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1282,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1282,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479257.16498928,
            'y': 5470937.013410413,
            'z': -293.23019469965774
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1283,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1283,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479259.88597100443,
            'y': 5470942.854491883,
            'z': -293.4975224845637
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1284,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1284,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479271.1019224784,
            'y': 5470936.720839135,
            'z': -293.154144494301
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1285,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1285,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479267.0171232874,
            'y': 5470931.133344788,
            'z': -293.2525516083149
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 1286,
        'cate': 0,
        'type': 0,
        'name': '煤层',
        'levelId': 1002,
        'id': 1286,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/MEI10101-21.FBX'
        },
        'physics': {
          'mass': 1
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479264.2415135885,
            'y': 5470924.444378422,
            'z': -293.49165229251835
          },
          'rotation': {
            'x': 0.03087216180583346,
            'y': -0.08699421630264477,
            'z': 1.1073270747788473
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 16,
        'cate': 0,
        'type': 0,
        'name': '采空区',
        'levelId': 1002,
        'id': 16,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/stone.FBX'
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479315.2670548233,
            'y': 5470924.42246454,
            'z': -304.98
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.06
          },
          'scale': {
            'x': 1.25,
            'y': 0.96,
            'z': 2.624
          }
        }
      },
      {
        'key': 161,
        'cate': 0,
        'type': 0,
        'name': '采空区',
        'levelId': 1002,
        'id': 161,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/stone.FBX'
        },
        'visible': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479301.55957279226,
            'y': 5470905.954314608,
            'z': -304.98
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.06
          },
          'scale': {
            'x': 3.589299027363203,
            'y': 0.9882831471187629,
            'z': 3.0173199432779403
          }
        }
      },
      {
        'key': 17,
        'cate': 0,
        'type': 0,
        'name': '10110',
        'levelId': 1002,
        'id': 17,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/hd/10110yunshucao.FBX'
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478734.4967934096,
            'y': 5470065.025490553,
            'z': -305.0894464264704
          },
          'rotation': {
            'x': -0.004320284154141454,
            'y': 0.0014236450312067992,
            'z': 1.2483554847389162
          },
          'scale': {
            'x': 1,
            'y': 1.032028785844989,
            'z': 1.078755849636504
          }
        }
      },
      {
        'key': 18,
        'cate': 0,
        'type': 0,
        'name': '水沟',
        'levelId': 1002,
        'id': 18,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/other/nanyizhupaishui.FBX'
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478352.0989829569,
            'y': 5470446.251608636,
            'z': -330.7118545292651
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 1.2563013713269864
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 19,
        'cate': 0,
        'type': 0,
        'name': '水沟',
        'levelId': 1002,
        'id': 19,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/other/10101paishui-2.FBX'
        },
        'visible': true,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478949.0955698874,
            'y': 5469717.306896504,
            'z': -313.797375
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 1.2529454582844546
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'id': 10021,
    'parentId': -1,
    'children': [ ],
    'key': 10012,
    'levelKey:': 1002,
    'title': '外轮廓场景',
    'disableCheckbox': false,
    'scopedSlots': {
      'icon': 'icon',
      'title': 'title'
    },
    'props': {
      'levelModelId': 1002,
      'levelModelName': '外轮廓场景',
      'dataFrom': 1,
      'page': 1,
      'limit': 10
    },
    'class': 'selected-class',
    'tunnels': [
      {
        'key': 103,
        'cate': 0,
        'type': 0,
        'name': '辅运大巷',
        'levelId': 1002,
        'id': 103,
        'visible': true,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2fuyun.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '辅运大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478645.4972627263,
            'y': 5470660.01918155,
            'z': -309.3093498890591
          },
          'rotation': {
            'x': 0.07525148564631559,
            'y': -0.08875348579382382,
            'z': -1.87934735881756
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1.5
          }
        }
      },
      {
        'key': 104,
        'cate': 0,
        'type': 0,
        'name': '回风大巷',
        'levelId': 1002,
        'id': 104,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2huifengda.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fan-tunnel',
          'icon': 'sbny-chejian.png',
          'title': '回风大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478504.983893437,
            'y': 5470818.239655377,
            'z': -320.5583888479266
          },
          'rotation': {
            'x': 0.0518653634723491,
            'y': -0.08130068488291682,
            'z': -1.8813335211917106
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1.5
          }
        }
      },
      {
        'key': 105,
        'cate': 0,
        'type': 0,
        'name': '西翼回风大巷',
        'levelId': 1002,
        'id': 105,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2xiyihui.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fan-tunnel',
          'icon': 'sbny-chejian.png',
          'title': '西翼回风大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 477959.0761995607,
            'y': 5469923.82414252,
            'z': -359.0956253203903
          },
          'rotation': {
            'x': 0.04410412370218796,
            'y': -0.0788152644692798,
            'z': -1.8883335211917105
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 106,
        'cate': 0,
        'type': 0,
        'name': '西翼辅运大巷',
        'levelId': 1002,
        'id': 106,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2xiyifu.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '西翼辅运大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 100,
              'y': -30,
              'z': 12
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 477987.1782690419,
            'y': 5469853.528498427,
            'z': -364.69240190320215
          },
          'rotation': {
            'x': 0.06559429612074687,
            'y': -0.0858335904789434,
            'z': -1.886566274304024
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 107,
        'cate': 0,
        'type': 0,
        'name': '西翼主运大巷',
        'levelId': 1002,
        'id': 107,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2xiyizhu.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '西翼主运大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478043.79997940746,
            'y': 5469836.980606979,
            'z': -368.29085685154274
          },
          'rotation': {
            'x': 0.10062340092720633,
            'y': -0.09680206485106237,
            'z': -1.877484816523406
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 108,
        'cate': 0,
        'type': 0,
        'name': '南翼主运大巷',
        'levelId': 1002,
        'id': 108,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2nanyizhu.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '南翼主运大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 70,
              'y': 100,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478995.1520076492,
            'y': 5469808.6494667,
            'z': -298.3304675278611
          },
          'rotation': {
            'x': 0.07123113397432079,
            'y': -0.18805198664499834,
            'z': -1.8816615714997942
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 109,
        'cate': 0,
        'type': 0,
        'name': '南翼辅运大巷',
        'levelId': 1002,
        'id': 109,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2nanyifu.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag chute',
          'icon': 'sbny-chejian.png',
          'title': '南翼辅运大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479007.83803050313,
            'y': 5469845.025254671,
            'z': -299.5989970299171
          },
          'rotation': {
            'x': 0.0462134851064716,
            'y': -0.1564399621491211,
            'z': -1.885577012842263
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 110,
        'cate': 0,
        'type': 0,
        'name': '南翼回风大巷',
        'levelId': 1002,
        'id': 110,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/2nanyihui.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fan-tunnel',
          'icon': 'sbny-chejian.png',
          'title': '南翼回风大巷',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 6
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478946.38861479115,
            'y': 5469968.07371207,
            'z': -300.21127496501697
          },
          'rotation': {
            'x': 0.0462134851064716,
            'y': -0.1564399621491211,
            'z': -1.885577012842263
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 111,
        'cate': 0,
        'type': 0,
        'name': '10101工作面',
        'levelId': 1002,
        'id': 111,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10101.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10101工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 111
              }
            }
          }
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479093.2894108869,
            'y': 5470515.491575763,
            'z': -311.02834150373104
          },
          'rotation': {
            'x': -0.08676225793631842,
            'y': 0.005233745924919225,
            'z': 1.2512878732807762
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 112,
        'cate': 0,
        'type': 0,
        'name': '10102工作面',
        'levelId': 1002,
        'id': 112,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10102.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10102工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478665.7620236798,
            'y': 5469681.560959303,
            'z': -351.60537416754323
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 113,
        'cate': 0,
        'type': 0,
        'name': '10103工作面',
        'levelId': 1002,
        'id': 113,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10103.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10103工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479257.23474963027,
            'y': 5470378.573519352,
            'z': -288.70224909770366
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 114,
        'cate': 0,
        'type': 0,
        'name': '10104工作面',
        'levelId': 1002,
        'id': 114,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10104.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10104工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478738.2104180887,
            'y': 5469272.36212574,
            'z': -323.91433126727964
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 115,
        'cate': 0,
        'type': 0,
        'name': '10105工作面',
        'levelId': 1002,
        'id': 115,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10105.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10105工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479413.6737586279,
            'y': 5470249.981088533,
            'z': -274.5081889265983
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 116,
        'cate': 0,
        'type': 0,
        'name': '10106工作面',
        'levelId': 1002,
        'id': 116,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10106.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10106工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478890.5357395989,
            'y': 5469102.441498083,
            'z': -336.7930244720785
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 117,
        'cate': 0,
        'type': 0,
        'name': '10107工作面',
        'levelId': 1002,
        'id': 117,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10107.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10107工作面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479589.04600456153,
            'y': 5470064.917555694,
            'z': -287.35349542159804
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 119,
        'cate': 0,
        'type': 0,
        'name': '10108工作面',
        'levelId': 1002,
        'id': 119,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10108.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10108工作面2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 479249.5360546765,
            'y': 5469105.832674263,
            'z': -328.424886041946
          },
          'rotation': {
            'x': -0.025348963277080812,
            'y': -0.04547600935356433,
            'z': 1.2436608224963308
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 122,
        'cate': 0,
        'type': 0,
        'name': '中央水泵房',
        'levelId': 1002,
        'id': 122,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-ZYSBF.FBX'
        },
        'visible': false,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag pool',
          'icon': 'sbny-chejian.png',
          'title': '中央水泵房',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478437.2190297164,
            'y': 5470301.477899202,
            'z': -328.0793015213111
          },
          'rotation': {
            'x': -0.025348963277080822,
            'y': -0.045476009353564335,
            'z': 1.3297700051408892
          },
          'scale': {
            'x': 1.2704557508234458,
            'y': 1.0224591024092498,
            'z': 1
          }
        }
      },
      {
        'key': 123,
        'cate': 0,
        'type': 0,
        'name': '中央变电所',
        'levelId': 1002,
        'id': 123,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-ZYBDS.FBX'
        },
        'visible': false,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag power',
          'icon': 'sbny-chejian.png',
          'title': '中央变电所',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478494.6432147138,
            'y': 5470264.350209579,
            'z': -321.08750885107224
          },
          'rotation': {
            'x': 0.0007032223802472941,
            'y': 0.02663473327415295,
            'z': 1.2529087401302164
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 124,
        'cate': 0,
        'type': 0,
        'name': '中央水仓',
        'levelId': 1002,
        'id': 124,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-ZYSC.FBX'
        },
        'visible': false,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag pool',
          'icon': 'sbny-chejian.png',
          'title': '中央水仓',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478471.5482524092,
            'y': 5470214.914969448,
            'z': -325.3694630254662
          },
          'rotation': {
            'x': 0.0007032223802472941,
            'y': 0.02663473327415295,
            'z': 1.2529087401302164
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 126,
        'cate': 0,
        'type': 0,
        'name': '10110',
        'levelId': 1002,
        'id': 126,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/wlk/3-10110wailunkuo.FBX'
        },
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag task',
          'icon': 'sbny-chejian.png',
          'title': '10110掘进面',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 100,
              'y': 0,
              'z': 10
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 17
              }
            }
          }
        },
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478740.9783929606,
            'y': 5470057.807800382,
            'z': -311.6805554619624
          },
          'rotation': {
            'x': 0.02331066962106057,
            'y': -0.06763623784033057,
            'z': -2.099516825024729
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'id': 1003,
    'parentId': -1,
    'children': [],
    'key': 1003,
    'levelKey:': 1003,
    'title': '模型图层',
    'disableCheckbox': false,
    'scopedSlots': {
      'icon': 'icon',
      'title': 'title'
    },
    'props': {
      'levelModelId': 12981,
      'levelModelName': '模型图层',
      'dataFrom': 1,
      'page': 1,
      'limit': 10
    },
    'class': 'selected-class',
    'tunnels': [
      {
        'key': 22056,
        'cate': 0,
        'type': 0,
        'name': '双臂采煤机',
        'levelId': 1003,
        'id': 22056,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/5/shuangbi.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag ksjx',
          'icon': 'sbny-ksjx.png',
          'title': '双臂采煤机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22056
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479245.7329311708,
            'y': 5470936.405885358,
            'z': -301.6999115724231
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.08
          },
          'scale': {
            'x': 0.7889526899217338,
            'y': 1,
            'z': 1
          }
        },
        'animationReapet': true
      },
      {
        'key': 22057,
        'cate': 0,
        'type': 0,
        'name': '掘进机',
        'levelId': 1003,
        'id': 22057,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/4/juejinji_shun1.FBX'
        },
        'visible': false,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag gongchengche',
          'icon': 'sbny-gongchengche.png',
          'title': '掘进机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 3,
              'y': 0,
              'z': 4.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22057
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478167.1323555985,
            'y': 5469074.398309057,
            'z': -373.57025901582665
          },
          "rotation": {
            "x": 0.013,
            "y": -0.08318633290197192,
            "z": 1.0532037
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'animations': [
          {
            'name': '开始掘进',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 60
            },
            'animationReapet': true
          },
          {
            'name': '停止掘进',
            'animationId': 1,
            'frame': {
              'start': 0,
              'end': 10
            }
          }
        ]
      },
      {
        'key': 22059,
        'cate': 0,
        'type': 0,
        'name': '工人',
        'levelId': 1003,
        'id': 22059,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/person/kg/kg_yellow.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag person-0',
          'icon': 'worker.png',
          'title': '李爱国',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0.5,
              'y': 0.5,
              'z': 2.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22059
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479306.52366022946,
            'y': 5470911.433574099,
            'z': -304.3262536910586
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': -2.0092225068329412
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'animations': [
          {
            'name': '走路',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 120
            },
            'animationReapet': true
          },
          {
            'name': '停止',
            'animationId': 1,
            'frame': {
              'start': 0,
              'end': 10
            }
          }
        ]
      },
      {
        'key': 22159,
        'cate': 0,
        'type': 0,
        'name': '工人',
        'levelId': 1003,
        'id': 22159,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/person/kg/kg_blue.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag person-1',
          'title': '王友善',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': -0.5,
              'y': -0.5,
              'z': 2.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22159
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479246.5591372818,
            'y': 5470944.70000718,
            'z': -304.2015216196886
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.0092225068329412
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'animations': [
          {
            'name': '走路',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 120
            },
            'animationReapet': true
          },
          {
            'name': '停止',
            'animationId': 1,
            'frame': {
              'start': 0,
              'end': 10
            }
          }
        ]
      },
      {
        "key": 23060,
        "cate": 0,
        "type": 0,
        "name": "司机",
        "levelId": 1003,
        "id": 23060,
        "visible": true,
        "modelurl": {
          "isPublic": true,
          "fbx": "/pmodel/zhmk/person/kg/kg_blue.FBX"
        },
        "scopedSlots": {
          "cate": "2d",
          "class": "interest-tag person-1",
          "title": "王建国",
          "style": {
            "height": "32px",
            "width": "32px",
            "offsetH": "-16px",
            "textPos": "center",
            "backgroundColor": "#88888888",
            "pos": {
              "x": 0,
              "y": 0,
              "z": 1.5
            },
            "fontStyle": "font-size: 14px;font-weight: 300 ; color:#e6e6e6;"
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 23060
              }
            }
          }
        },
        "gem": {
          "color": "0xF4F4F4",
          "position": {
            "x": 478169.86478374095,
            "y": 5469079.493320561,
            "z": -372.75698233095363
          },
          "rotation": {
            "x": 0.07,
            "y": 0,
            "z": -0.52
          },
          "scale": {
            "x": 1.2,
            "y": 1.2,
            "z": 1.2
          }
        },
        'animations': [
          {
            'name': '走路',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 120
            },
            'animationReapet': false
          },
          {
            'name': '停止',
            'animationId': 1,
            'frame': {
              'start': 0,
              'end': 10
            }
          }
        ]
      },
      {
        'key': 8100,
        'cate': 0,
        'type': 0,
        'name': '破碎机',
        'levelId': 1003,
        'id': 8100,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/sb/PSJ.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag psj',
          'title': '破碎机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 8100
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479220.1473831405,
            'y': 5470937.1674275305,
            'z': -304.9478534450554
          },
          "rotation": {
            "x": 0.0,
            "y": -0.0,
            "z": 2.6338
          },
          'scale': {
            'x': 0.9264963203006538,
            'y': 0.8779794734610701,
            'z': 0.8124729005856376
          }
        }
      },
      {
        'key': 8200,
        'cate': 0,
        'type': 0,
        'name': '转载机',
        'levelId': 1003,
        'id': 8200,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'gltf': '/pmodel/zhmk/sb/ZZJ.gltf'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'title': '转载机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 8200
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479211.62748958636,
            'y': 5470922.581712053,
            'z': -303.0625092592464
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.064
          },
          'scale': {
            'x': 0.8444102146957979,
            'y': 0.6419283870351333,
            'z': 0.8780116792458108
          }
        }
      },
      {
        'key': 8400,
        'cate': 0,
        'type': 0,
        'name': '斜板',
        'levelId': 1003,
        'id': 8400,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/sb/ZZJ3.FBX'
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479227.0015878189,
            'y': 5470948.083802109,
            'z': -304.4074345973917
          },
          'rotation': {
            'x': 0.0,
            'y': 0.0,
            'z': 2.08
          },
          'scale': {
            'x': 0.7153242410217803,
            'y': 0.9582665022903013,
            'z': 0.7331750180146397
          }
        }
      },
      {
        'key': 8401,
        'cate': 0,
        'type': 0,
        'name': '斜板1',
        'levelId': 1003,
        'id': 8401,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/sb/ZZJ2.FBX'
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479227.0362568323,
            'y': 5470948.145898048,
            'z': -304.3726663058358
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': -2.08
          },
          'scale': {
            'x': 0.8520564482511374,
            'y': 0.9582665022903013,
            'z': 0.6962369198792493
          }
        }
      },
      {
        'key': 8300,
        'cate': 0,
        'type': 0,
        'name': '传送带',
        'levelId': 1003,
        'id': 8300,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/3/chuansongdai_alone.FBX'
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478190.7227051503,
            'y': 5469110.85867851,
            'z': -369.00416962317195
          },
          'rotation': {
            'x': 0.02786605956374004,
            'y': -0.05812908524590241,
            'z': 2.6208617726203287
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 22060,
        'cate': 0,
        'type': 0,
        'name': '刮板运输机',
        'levelId': 1003,
        'id': 22060,
        'visible': false,
        'modelurl': {
          'isPublic': true,
          'fbx': '/pmodel/zhmk/5/guaban.FBX'
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'icon': 'sbny-ksjx.png',
          'title': '刮板运输机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22060
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479305.1141263406,
            'y': 5470904.058058291,
            'z': -303.3215822260789
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.08
          },
          'scale': {
            'x': 0.6526177078154712,
            'y': 1.0609848778015006,
            'z': 1
          }
        },
        'animations': [
          {
            'name': '推',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 100
            },
            'animationReapet': false
          },
          {
            'name': '拉',
            'animationId': 1,
            'frame': {
              'start': 50,
              'end': 100
            }
          }
        ]
      }
    ]
  }
]
const treeDataUse = [{
  title: 'xxx煤矿地下',
  value: 'xxx煤矿地下',
  key: 1001,
  parentKey: '',
  children: [
    {
      title: '主斜井',
      value: '主斜井',
      key: 12,
      parentKey: '',
      children: []
    },
    {
      title: '副平硐',
      value: '副平硐',
      key: 13,
      parentKey: '',
      children: []
    },
    {
      title: '回风斜井',
      value: '回风斜井',
      key: 14,
      parentKey: '',
      children: []
    },
    {
      title: '一采区',
      value: '一采区',
      key: 102,
      parentKey: '',
      children: [
        {
          title: '10101工作面',
          value: '10101工作面',
          key: 111,
          parentKey: 102,
          children: []
        }, {
          title: '10102工作面',
          value: '10102工作面',
          key: 112,
          parentKey: 102,
          children: []
        }, {
          title: '10103工作面',
          value: '10103工作面',
          key: 113,
          parentKey: 102,
          children: []
        }, {
          title: '10104工作面',
          value: '10104工作面',
          key: 114,
          parentKey: 102,
          children: []
        }, {
          title: '10105工作面',
          value: '10105工作面',
          key: 115,
          parentKey: 102,
          children: []
        }, {
          title: '10106工作面',
          value: '10106工作面',
          key: 116,
          parentKey: 102,
          children: []
        }, {
          title: '10107工作面',
          value: '10107工作面',
          key: 117,
          parentKey: 102,
          children: []
        }, {
          title: '10108工作面',
          value: '10108工作面',
          key: 118,
          parentKey: 102,
          children: []
        }, {
          title: '10109工作面',
          value: '10109工作面',
          key: 119,
          parentKey: 102,
          children: []
        }, {
          title: '南翼主运大巷',
          value: '南翼主运大巷',
          key: 108,
          parentKey: 102,
          children: []
        }, {
          title: '南翼辅运大巷',
          value: '南翼辅运大巷',
          key: 109,
          parentKey: 102,
          children: []
        }, {
          title: '南翼回风大巷',
          value: '南翼回风大巷',
          key: 110,
          parentKey: 102,
          children: []
        }
      ]
    },
    {
      title: '二采区',
      value: '二采区',
      key: 101,
      parentKey: '',
      children: []
    },
    {
      title: '辅运大巷',
      value: '辅运大巷',
      key: 103,
      parentKey: '',
      children: []
    },
    {
      title: '回风大巷',
      value: '回风大巷',
      key: 104,
      parentKey: '',
      children: []
    },
    {
      title: '西翼回风大巷',
      value: '西翼回风大巷',
      key: 105,
      parentKey: '',
      children: []
    },
    {
      title: '西翼辅运大巷',
      value: '西翼辅运大巷',
      key: 106,
      parentKey: '',
      children: []
    },
    {
      title: '西翼主运大巷',
      value: '西翼主运大巷',
      key: 107,
      parentKey: '',
      children: []
    },
    {
      title: '南翼主运巷',
      value: '南翼主运巷',
      key: 108,
      parentKey: '',
      children: []
    },
    {
      title: '南翼辅运巷',
      value: '南翼辅运巷',
      key: 109,
      parentKey: '',
      children: []
    },
    {
      title: '南翼回风巷',
      value: '南翼回风巷',
      key: 110,
      parentKey: '',
      children: []
    },
    {
      title: '采区变电所',
      value: '采区变电所',
      key: 120,
      parentKey: '',
      children: []
    },
    {
      title: '采区水泵房',
      value: '采区水泵房',
      key: 121,
      parentKey: '',
      children: []
    },
    {
      title: '中央水泵房',
      value: '中央水泵房',
      key: 122,
      parentKey: '',
      children: []
    },
    {
      title: '中央变电所',
      value: '中央变电所',
      key: 123,
      parentKey: '',
      children: []
    },
    {
      title: '中央水仓',
      value: '中央水仓',
      key: 124,
      parentKey: '',
      children: []
    },
    {
      title: '采区水仓',
      value: '采区水仓',
      key: 125,
      parentKey: '',
      children: []
    },
    {
      title: '10110运输顺槽',
      value: '10110运输顺槽',
      key: 126,
      parentKey: '',
      children: []
    }
  ]
}]
const poiJsonSb = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/fengji.FBX'
    },
    'list': [
      {
        'key': 9200,
        'cate': 0,
        'type': 0,
        'name': '风机-主',
        'levelId': 1003,
        'id': 9200,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-fengji.png',
          'title': '风机-主',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 480167.0585112084,
            'y': 5471223.779916963,
            'z': -162.78379137298998
          },
          'rotation': {
            'x': -0.005453071671277052,
            'y': -0.18312226693063324,
            'z': -1.4408332970041515
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9201,
        'cate': 0,
        'type': 0,
        'name': '风机-备',
        'levelId': 1003,
        'id': 9201,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-fengji.png',
          'title': '风机-备',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 480162.98819317,
            'y': 5471224.4842779115,
            'z': -164.91533227118404
          },
          'rotation': {
            'x': -0.005453071671277052,
            'y': -0.18312226693063324,
            'z': -1.4408332970041515
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/bianyaqi.FBX'
    },
    'list': [
      {
        'key': 9000,
        'cate': 0,
        'type': 0,
        'name': '干式变压器',
        'levelId': 1003,
        'id': 9000,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '干式变压器0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478921.36856143735,
            'y': 5469958.344856561,
            'z': -298.9931405005045
          },
          'rotation': {
            'x': 0.07261359724722763,
            'y': 0.0013731243237756535,
            'z': -0.4757462372880677
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9001,
        'cate': 0,
        'type': 0,
        'name': '干式变压器',
        'levelId': 1003,
        'id': 9001,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '干式变压器1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478918.97409712547,
            'y': 5469953.709365425,
            'z': -299.32703645112815
          },
          'rotation': {
            'x': 0.07261359724722763,
            'y': 0.0013731243237756535,
            'z': -0.4757462372880677
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9002,
        'cate': 0,
        'type': 0,
        'name': '干式变压器',
        'levelId': 1003,
        'id': 9002,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '干式变压器2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 3
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478464.41863470786,
            'y': 5470272.93060194,
            'z': -323.38200188515316
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.295089939911934
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9003,
        'cate': 0,
        'type': 0,
        'name': '干式变压器',
        'levelId': 1003,
        'id': 9003,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '干式变压器3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478461.0158081546,
            'y': 5470276.189666855,
            'z': -323.51853403159083
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.295089939911934
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/peidiankaiguan.FBX'
    },
    'list': [
      {
        'key': 8900,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8900,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478922.64743364597,
            'y': 5469954.027451548,
            'z': -299.1895775632146
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.4598401771804018
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8901,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8901,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478924.2313880804,
            'y': 5469957.00900196,
            'z': -299.11849804650876
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.4598401771804018
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8902,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8902,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478925.41427885694,
            'y': 5469959.23561177,
            'z': -298.9673789792024
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.4598401771804018
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8903,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8903,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478926.9212910767,
            'y': 5469962.072330307,
            'z': -298.7067002682551
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.4598401771804018
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8904,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8904,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关4',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478462.226492949,
            'y': 5470278.993397855,
            'z': -323.5957306407014
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8905,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8905,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关5',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478460.82417716883,
            'y': 5470280.324519282,
            'z': -323.71456478177566
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8906,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8906,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关6',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478459.32310781936,
            'y': 5470281.749380644,
            'z': -323.8109267670624
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8907,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8907,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关7',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478458.02253986214,
            'y': 5470282.983919896,
            'z': -323.878184920443
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8908,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8908,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关8',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478456.74430447543,
            'y': 5470284.1972603835,
            'z': -323.9593739567135
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8909,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8909,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关9',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478455.4660014514,
            'y': 5470285.410665073,
            'z': -323.98434385830114
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8910,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8910,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关10',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478454.0603798677,
            'y': 5470286.744924471,
            'z': -324.04494610657116
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 8911,
        'cate': 0,
        'type': 0,
        'name': '真空配电开关',
        'levelId': 1003,
        'id': 8911,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '配电开关11',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478452.50347481825,
            'y': 5470287.99142969,
            'z': -324.1410377057745
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -2.3301546524423054
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/wasichuanganqi.FBX'
    },
    'list': [
      {
        'key': 8600,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8600,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-warning.gif',
          'title': '瓦斯传感器0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479382.24018098897,
            'y': 5470866.117601741,
            'z': -300.2655999455859
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      },
      {
        'key': 8601,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8601,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-warning.gif',
          'title': '瓦斯传感器1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479393.4725660157,
            'y': 5470890.791564883,
            'z': -299.8641317459022
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      },
      {
        'key': 8602,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8602,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'title': '瓦斯传感器2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478929.825369986,
            'y': 5470017.494077698,
            'z': -300.32919550100354
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/fengsuchuanganqi.FBX'
    },
    'list': [
      {
        'key': 8700,
        'cate': 0,
        'type': 0,
        'name': '风速传感器',
        'levelId': 1003,
        'id': 8700,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '风速传感器',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479263.2958432561,
            'y': 5470647.039058934,
            'z': -245.59784411266114
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 8701,
        'cate': 0,
        'type': 0,
        'name': '风速传感器',
        'levelId': 1003,
        'id': 8701,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '风速传感器',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479375.91165745753,
            'y': 5470857.817464526,
            'z': -230.44050310190065
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/wenduchuanganqi.FBX'
    },
    'list': [
      {
        'key': 8800,
        'cate': 0,
        'type': 0,
        'name': '温度传感器0',
        'levelId': 1003,
        'id': 8800,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '温度传感器0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'scale': {
              'x': 0.015,
              'y': 0.015,
              'z': 0.015
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478923.72208379983,
            'y': 5469959.803218273,
            'z': -293.4100227746412
          },
          'rotation': {
            'x': -0.02920824588330622,
            'y': 0.04765583246376422,
            'z': -0.44834497545059077
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 8801,
        'cate': 0,
        'type': 0,
        'name': '温度传感器',
        'levelId': 1003,
        'id': 8801,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'worker.png',
          'title': '温度传感器1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'scale': {
              'x': 0.015,
              'y': 0.015,
              'z': 0.015
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478463.08452062507,
            'y': 5470276.849996933,
            'z': -317.9348891074632
          },
          'rotation': {
            'x': -0.1148798770134763,
            'y': -0.08408611797511557,
            'z': -2.398313395704852
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/shuibeng.FBX'
    },
    'list': [
      {
        'key': 9500,
        'cate': 0,
        'type': 0,
        'name': '水泵',
        'levelId': 1003,
        'id': 9500,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '水泵0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478889.011884045,
            'y': 5469936.070649147,
            'z': -297.8162036927863
          },
          'rotation': {
            'x': 0.006147047733425281,
            'y': -0.04672183364532052,
            'z': -0.7494245307021302
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9501,
        'cate': 0,
        'type': 0,
        'name': '水泵',
        'levelId': 1003,
        'id': 9501,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '水泵1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478893.5919423334,
            'y': 5469941.649894135,
            'z': -298.348117961448
          },
          'rotation': {
            'x': 0.006147047733425281,
            'y': -0.04672183364532052,
            'z': -0.7494245307021302
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9502,
        'cate': 0,
        'type': 0,
        'name': '水泵',
        'levelId': 1003,
        'id': 9502,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '水泵2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478883.6712755384,
            'y': 5469930.9753133925,
            'z': -299.85144652146937
          },
          'rotation': {
            'x': 0.006147047733425285,
            'y': -0.0467218336453205,
            'z': -0.7377494244346765
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9503,
        'cate': 0,
        'type': 0,
        'name': '水泵',
        'levelId': 1003,
        'id': 9503,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '水泵3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478432.2381859468,
            'y': 5470283.143837071,
            'z': -324.1969109360203
          },
          'rotation': {
            'x': 0.01418895860199833,
            'y': -0.03422923109733341,
            'z': 0.9426522477549526
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      },
      {
        'key': 9504,
        'cate': 0,
        'type': 0,
        'name': '水泵',
        'levelId': 1003,
        'id': 9504,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '水泵4',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478418.8137043206,
            'y': 5470293.951100823,
            'z': -324.3710792154772
          },
          'rotation': {
            'x': 0.01418895860199833,
            'y': -0.03422923109733341,
            'z': 0.9426522477549526
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/shuiguan.FBX'
    },
    'list': [
      {
        'key': 22161,
        'cate': 0,
        'type': 0,
        'name': '水管',
        'levelId': 1003,
        'id': 22161,
        'visible': false,
        'scopedSlots': {
          'cate': '3d',
          'default': true,
          'icon': 'sbny-ksjx.png',
          'title': '排水管',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478590.7290088438,
            'y': 5470208.744778367,
            'z': -316.9181039205458
          },
          'rotation': {
            'x': -0.02141479743856979,
            'y': -0.09288756162877741,
            'z': -2.07247476260655
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        }
      }
    ]
  }

]
const poiJsonWork = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/2/yeya.FBX'
    },
    'list': [
      {
        'key': 8000,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8000,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag ksjx',
          'icon': 'sbny-ksjx.png',
          'title': '液压支架',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 3,
              'y': 0,
              'z': 7
            },
            'rotation': {
              'x': 1.5707963,
              'y': -1.5707963,
              'z': 0
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 8000
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479241.5879358147,
            'y': 5470949.681028152,
            'z': -305.04211565159125
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        },
        'animations': [
          {
            'name': '底板抬起',
            'animationId': 0,
            'frame': {
              'start': 20,
              'end': 50
            }
          },
          {
            'name': '底板收回',
            'animationId': 1,
            'frame': {
              'start': 90,
              'end': 130
            }
          },
          {
            'name': '顶板抬起',
            'animationId': 2,
            'frame': {
              'start': 130,
              'end': 170
            },
            'animationReapet': 'once'
          },
          {
            'name': '顶板收回',
            'animationId': 3,
            'frame': {
              'start': 190,
              'end': 230
            }
          }
        ]
      },
      {
        'key': 8001,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8001,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479243.70383193885,
            'y': 5470948.493017471,
            'z': -305.05438847851025
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8002,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8002,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479245.7702659019,
            'y': 5470947.31446735,
            'z': -305.05462987405815
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8003,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8003,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479247.8502398349,
            'y': 5470946.154496181,
            'z': -305.054829166244
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8004,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8004,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479249.94324909005,
            'y': 5470944.992634403,
            'z': -305.05506347501085
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8005,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8005,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479252.0261100927,
            'y': 5470943.851269895,
            'z': -305.05525723583514
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8006,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8006,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479254.10823034315,
            'y': 5470942.701241502,
            'z': -305.05539821389635
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8007,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8007,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479256.2018873054,
            'y': 5470941.534626132,
            'z': -305.05558736561414
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8008,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8008,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479258.3019921813,
            'y': 5470940.384055981,
            'z': -305.05583172554554
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8009,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8009,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479260.39604211034,
            'y': 5470939.230456356,
            'z': -305.0560550043962
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8010,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8010,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479262.47200136614,
            'y': 5470938.0723524,
            'z': -305.0561951612184
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8011,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8011,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479264.5811484024,
            'y': 5470936.969549962,
            'z': -305.05624527224114
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8012,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8012,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479266.67131671915,
            'y': 5470935.799568162,
            'z': -305.0564740113461
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8013,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8013,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479268.72483213723,
            'y': 5470934.662919653,
            'z': -305.0566541166141
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8014,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8014,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479270.8037341471,
            'y': 5470933.507633034,
            'z': -305.05687334844373
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8015,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8015,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479272.89486806124,
            'y': 5470932.330598144,
            'z': -305.0571421912328
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8016,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8016,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479275.0222890855,
            'y': 5470931.184564153,
            'z': -305.05729591880913
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8017,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8017,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479277.1143477573,
            'y': 5470929.991204252,
            'z': -305.05757268693475
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8018,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8018,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479279.2116050325,
            'y': 5470928.789358284,
            'z': -305.0578059813341
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8019,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8019,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479281.3426583344,
            'y': 5470927.651710042,
            'z': -305.0579311842127
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8020,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8020,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479283.4442958961,
            'y': 5470926.488085224,
            'z': -305.05814245136924
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8021,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8021,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479285.5300640039,
            'y': 5470925.346786176,
            'z': -305.0583138279745
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8022,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8022,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479287.6075220568,
            'y': 5470924.258326948,
            'z': -305.05840234294203
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8023,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8023,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479289.6953469384,
            'y': 5470923.10895165,
            'z': -305.05856444773497
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8024,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8024,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479291.8025251562,
            'y': 5470921.951860015,
            'z': -305.0587490961067
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8025,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8025,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479293.9246288975,
            'y': 5470920.825360429,
            'z': -305.05887561241155
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8026,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8026,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479296.00958962657,
            'y': 5470919.6640769495,
            'z': -305.05907792776895
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8027,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8027,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479298.1310088139,
            'y': 5470918.487719237,
            'z': -305.0592656678217
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8028,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8028,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479300.227169279,
            'y': 5470917.319347209,
            'z': -305.05946065516525
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8029,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8029,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479302.27843266586,
            'y': 5470916.19527393,
            'z': -305.0596528132144
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8030,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8030,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479304.3053722076,
            'y': 5470915.060247226,
            'z': -305.05987084715974
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8031,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8031,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479306.41253186885,
            'y': 5470913.888717055,
            'z': -305.0600728393283
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8032,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8032,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479308.475239619,
            'y': 5470912.705823371,
            'z': -305.06030758633847
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8033,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8033,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479310.4608464511,
            'y': 5470911.617356497,
            'z': -305.06045694579666
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 80331,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 80331,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479312.61746108346,
            'y': 5470910.4136740565,
            'z': -305.0606823900937
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1.038587212002598,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 80332,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 80332,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479314.8351721903,
            'y': 5470909.1730551245,
            'z': -305.0609257236909
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1.0629509238920405,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8034,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8034,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479316.9540777861,
            'y': 5470907.99464896,
            'z': -305.06110481969847
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8035,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8035,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479319.01381252735,
            'y': 5470906.8292550715,
            'z': -305.061364829318
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8036,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8036,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479321.11540113756,
            'y': 5470905.643414938,
            'z': -305.06159577747457
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8037,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8037,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479323.2058620358,
            'y': 5470904.512411212,
            'z': -305.06174573675645
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8038,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8038,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479325.24838366476,
            'y': 5470903.395575128,
            'z': -305.06191297417246
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8039,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8039,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479327.3460383775,
            'y': 5470902.218054274,
            'z': -305.0621231914116
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8040,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8040,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479329.4381248283,
            'y': 5470901.038673347,
            'z': -305.06234323483864
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8041,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8041,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479331.53600800224,
            'y': 5470899.867506053,
            'z': -305.06256316834475
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8042,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8042,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479333.6420135974,
            'y': 5470898.693681871,
            'z': -305.0627663343084
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8043,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8043,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479335.74177154555,
            'y': 5470897.500352098,
            'z': -305.0630127606262
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8044,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8044,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479337.8360820162,
            'y': 5470896.321174423,
            'z': -305.0632678816807
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8045,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8045,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479339.91045457846,
            'y': 5470895.166087113,
            'z': -305.06347269643845
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8046,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8046,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479341.99992146634,
            'y': 5470893.987743074,
            'z': -305.06369823466054
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8047,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8047,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479344.0846281126,
            'y': 5470892.807261952,
            'z': -305.06394929327126
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8048,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8048,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479346.15763818193,
            'y': 5470891.677322824,
            'z': -305.06409735975535
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8049,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8049,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479348.22964608856,
            'y': 5470890.55391822,
            'z': -305.064221621453
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8050,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8050,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479350.3274451325,
            'y': 5470889.368964158,
            'z': -305.064489016264
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8051,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8051,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479352.44781458675,
            'y': 5470888.198231451,
            'z': -305.064679166794
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8052,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8052,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479354.5470125835,
            'y': 5470887.042269492,
            'z': -305.06486063250657
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8053,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8053,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479356.6248407417,
            'y': 5470885.872583544,
            'z': -305.06506855268464
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8054,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8054,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479358.73396931606,
            'y': 5470884.703275172,
            'z': -305.0652722930028
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8055,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8055,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479360.8492505806,
            'y': 5470883.535897429,
            'z': -305.06543136652596
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8056,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8056,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479362.90198051324,
            'y': 5470882.379029167,
            'z': -305.0656433224022
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8057,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8057,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479364.9116357358,
            'y': 5470881.252850606,
            'z': -305.06584684025495
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8058,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8058,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479366.9829884582,
            'y': 5470880.064174534,
            'z': -305.06607579240665
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8059,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8059,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479369.0307993858,
            'y': 5470878.919347717,
            'z': -305.066273484084
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      },
      {
        'key': 8060,
        'cate': 0,
        'type': 0,
        'name': '液压支架',
        'levelId': 1003,
        'id': 8060,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479371.10056433873,
            'y': 5470877.741630005,
            'z': -305.0665097654739
          },
          'rotation': {
            'x': -0.0020024045235354677,
            'y': -0.007288436110230272,
            'z': -0.5177638611331702
          },
          'scale': {
            'x': 1,
            'y': 1.401,
            'z': 1.1501587028118079
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/3/chuansongdai_alone.FBX'
    },
    'list': [
      {
        'key': 22258,
        'cate': 0,
        'type': 0,
        'name': '传送带',
        'levelId': 1003,
        'id': 22258,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'icon': 'sbny-ksjx.png',
          'title': '皮带运输机',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': -10,
              'z': 2
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 22258
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479165.11338478886,
            'y': 5470836.192114005,
            'z': -303.5701567099262
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 2.634415296877917
          },
          'scale': {
            'x': 0.58534516974434,
            'y': 6.8305317143164554,
            'z': 0.5820185720898471
          }
        },
        'animations': [
          {
            'name': '开始传送',
            'animationId': 0,
            'frame': {
              'start': 0,
              'end': 150
            },
            'animationReapet': false
          },
          {
            'name': '停止传送',
            'animationId': 1,
            'frame': {
              'start': 0,
              'end': 10
            }
          }
        ]
      }
    ]
  },
  {
    "modelurl": {
      "isPublic": true,
      "fbx": "/pmodel/zhmk/hd/MEI10101.FBX"
    },
    "list": [
      {
        "key": 800,
        "cate": 0,
        "type": 0,
        "name": "煤刀0",
        "levelId": 1002,
        "id": 800,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479296.3379111138,
            "y": 5470899.104507643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 801,
        "cate": 0,
        "type": 0,
        "name": "煤刀1",
        "levelId": 1002,
        "id": 801,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479291.143645244,
            "y": 5470889.835730643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 802,
        "cate": 0,
        "type": 0,
        "name": "煤刀2",
        "levelId": 1002,
        "id": 802,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479285.9493793743,
            "y": 5470880.566953643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 803,
        "cate": 0,
        "type": 0,
        "name": "煤刀3",
        "levelId": 1002,
        "id": 803,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479280.7551135045,
            "y": 5470871.298176643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 804,
        "cate": 0,
        "type": 0,
        "name": "煤刀4",
        "levelId": 1002,
        "id": 804,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479275.56084763474,
            "y": 5470862.029399643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 805,
        "cate": 0,
        "type": 0,
        "name": "煤刀5",
        "levelId": 1002,
        "id": 805,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479270.36658176495,
            "y": 5470852.760622643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 806,
        "cate": 0,
        "type": 0,
        "name": "煤刀6",
        "levelId": 1002,
        "id": 806,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479265.1723158952,
            "y": 5470843.491845643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 807,
        "cate": 0,
        "type": 0,
        "name": "煤刀7",
        "levelId": 1002,
        "id": 807,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479259.9780500254,
            "y": 5470834.223068643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 808,
        "cate": 0,
        "type": 0,
        "name": "煤刀8",
        "levelId": 1002,
        "id": 808,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479254.7837841557,
            "y": 5470824.954291644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 809,
        "cate": 0,
        "type": 0,
        "name": "煤刀9",
        "levelId": 1002,
        "id": 809,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479249.5895182859,
            "y": 5470815.685514644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 810,
        "cate": 0,
        "type": 0,
        "name": "煤刀10",
        "levelId": 1002,
        "id": 810,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479244.39525241614,
            "y": 5470806.416737644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 811,
        "cate": 0,
        "type": 0,
        "name": "煤刀11",
        "levelId": 1002,
        "id": 811,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479239.20098654635,
            "y": 5470797.147960643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 812,
        "cate": 0,
        "type": 0,
        "name": "煤刀12",
        "levelId": 1002,
        "id": 812,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479234.0067206766,
            "y": 5470787.8791836435,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 813,
        "cate": 0,
        "type": 0,
        "name": "煤刀13",
        "levelId": 1002,
        "id": 813,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479228.8124548068,
            "y": 5470778.610406644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 814,
        "cate": 0,
        "type": 0,
        "name": "煤刀14",
        "levelId": 1002,
        "id": 814,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479223.6181889371,
            "y": 5470769.341629644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 815,
        "cate": 0,
        "type": 0,
        "name": "煤刀15",
        "levelId": 1002,
        "id": 815,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479218.4239230673,
            "y": 5470760.072852644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 816,
        "cate": 0,
        "type": 0,
        "name": "煤刀16",
        "levelId": 1002,
        "id": 816,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479213.2296571975,
            "y": 5470750.804075644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 817,
        "cate": 0,
        "type": 0,
        "name": "煤刀17",
        "levelId": 1002,
        "id": 817,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479208.03539132775,
            "y": 5470741.535298645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 818,
        "cate": 0,
        "type": 0,
        "name": "煤刀18",
        "levelId": 1002,
        "id": 818,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479202.84112545796,
            "y": 5470732.266521645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 819,
        "cate": 0,
        "type": 0,
        "name": "煤刀19",
        "levelId": 1002,
        "id": 819,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479197.6468595882,
            "y": 5470722.997744644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 820,
        "cate": 0,
        "type": 0,
        "name": "煤刀20",
        "levelId": 1002,
        "id": 820,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479192.4525937184,
            "y": 5470713.728967644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 821,
        "cate": 0,
        "type": 0,
        "name": "煤刀21",
        "levelId": 1002,
        "id": 821,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479187.2583278487,
            "y": 5470704.4601906445,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 822,
        "cate": 0,
        "type": 0,
        "name": "煤刀22",
        "levelId": 1002,
        "id": 822,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479182.0640619789,
            "y": 5470695.191413645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 823,
        "cate": 0,
        "type": 0,
        "name": "煤刀23",
        "levelId": 1002,
        "id": 823,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479176.86979610915,
            "y": 5470685.922636645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 824,
        "cate": 0,
        "type": 0,
        "name": "煤刀24",
        "levelId": 1002,
        "id": 824,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479171.67553023936,
            "y": 5470676.653859645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 825,
        "cate": 0,
        "type": 0,
        "name": "煤刀25",
        "levelId": 1002,
        "id": 825,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479166.4812643696,
            "y": 5470667.385082645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 826,
        "cate": 0,
        "type": 0,
        "name": "煤刀26",
        "levelId": 1002,
        "id": 826,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479161.2869984998,
            "y": 5470658.116305645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 827,
        "cate": 0,
        "type": 0,
        "name": "煤刀27",
        "levelId": 1002,
        "id": 827,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479156.0927326301,
            "y": 5470648.847528645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 828,
        "cate": 0,
        "type": 0,
        "name": "煤刀28",
        "levelId": 1002,
        "id": 828,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479150.8984667603,
            "y": 5470639.578751645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 829,
        "cate": 0,
        "type": 0,
        "name": "煤刀29",
        "levelId": 1002,
        "id": 829,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479145.70420089056,
            "y": 5470630.309974645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 830,
        "cate": 0,
        "type": 0,
        "name": "煤刀30",
        "levelId": 1002,
        "id": 830,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479140.50993502076,
            "y": 5470621.0411976455,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 831,
        "cate": 0,
        "type": 0,
        "name": "煤刀31",
        "levelId": 1002,
        "id": 831,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479135.315669151,
            "y": 5470611.772420646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 832,
        "cate": 0,
        "type": 0,
        "name": "煤刀32",
        "levelId": 1002,
        "id": 832,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479130.1214032812,
            "y": 5470602.503643646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 833,
        "cate": 0,
        "type": 0,
        "name": "煤刀33",
        "levelId": 1002,
        "id": 833,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479124.92713741143,
            "y": 5470593.234866645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 834,
        "cate": 0,
        "type": 0,
        "name": "煤刀34",
        "levelId": 1002,
        "id": 834,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479119.7328715417,
            "y": 5470583.966089645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 835,
        "cate": 0,
        "type": 0,
        "name": "煤刀35",
        "levelId": 1002,
        "id": 835,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479114.5386056719,
            "y": 5470574.697312646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 836,
        "cate": 0,
        "type": 0,
        "name": "煤刀36",
        "levelId": 1002,
        "id": 836,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479109.34433980216,
            "y": 5470565.428535646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 837,
        "cate": 0,
        "type": 0,
        "name": "煤刀37",
        "levelId": 1002,
        "id": 837,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479104.15007393237,
            "y": 5470556.159758646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 838,
        "cate": 0,
        "type": 0,
        "name": "煤刀38",
        "levelId": 1002,
        "id": 838,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479098.95580806263,
            "y": 5470546.890981646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 839,
        "cate": 0,
        "type": 0,
        "name": "煤刀39",
        "levelId": 1002,
        "id": 839,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479093.76154219283,
            "y": 5470537.6222046465,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 840,
        "cate": 0,
        "type": 0,
        "name": "煤刀40",
        "levelId": 1002,
        "id": 840,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479088.5672763231,
            "y": 5470528.353427646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 841,
        "cate": 0,
        "type": 0,
        "name": "煤刀41",
        "levelId": 1002,
        "id": 841,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479083.3730104533,
            "y": 5470519.084650646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 842,
        "cate": 0,
        "type": 0,
        "name": "煤刀42",
        "levelId": 1002,
        "id": 842,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479078.17874458357,
            "y": 5470509.815873646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 843,
        "cate": 0,
        "type": 0,
        "name": "煤刀43",
        "levelId": 1002,
        "id": 843,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479072.98447871377,
            "y": 5470500.547096646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 844,
        "cate": 0,
        "type": 0,
        "name": "煤刀44",
        "levelId": 1002,
        "id": 844,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479067.79021284403,
            "y": 5470491.278319647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 845,
        "cate": 0,
        "type": 0,
        "name": "煤刀45",
        "levelId": 1002,
        "id": 845,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479062.59594697424,
            "y": 5470482.009542647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 846,
        "cate": 0,
        "type": 0,
        "name": "煤刀46",
        "levelId": 1002,
        "id": 846,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479057.4016811045,
            "y": 5470472.740765647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 847,
        "cate": 0,
        "type": 0,
        "name": "煤刀47",
        "levelId": 1002,
        "id": 847,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479052.2074152347,
            "y": 5470463.471988646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 848,
        "cate": 0,
        "type": 0,
        "name": "煤刀48",
        "levelId": 1002,
        "id": 848,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479047.0131493649,
            "y": 5470454.2032116465,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 849,
        "cate": 0,
        "type": 0,
        "name": "煤刀49",
        "levelId": 1002,
        "id": 849,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479041.8188834952,
            "y": 5470444.934434647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 850,
        "cate": 0,
        "type": 0,
        "name": "煤刀50",
        "levelId": 1002,
        "id": 850,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479036.6246176254,
            "y": 5470435.665657647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 851,
        "cate": 0,
        "type": 0,
        "name": "煤刀51",
        "levelId": 1002,
        "id": 851,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479031.43035175564,
            "y": 5470426.396880647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 852,
        "cate": 0,
        "type": 0,
        "name": "煤刀52",
        "levelId": 1002,
        "id": 852,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479026.23608588584,
            "y": 5470417.128103647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 853,
        "cate": 0,
        "type": 0,
        "name": "煤刀53",
        "levelId": 1002,
        "id": 853,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479021.0418200161,
            "y": 5470407.859326648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 854,
        "cate": 0,
        "type": 0,
        "name": "煤刀54",
        "levelId": 1002,
        "id": 854,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479015.8475541463,
            "y": 5470398.590549648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 855,
        "cate": 0,
        "type": 0,
        "name": "煤刀55",
        "levelId": 1002,
        "id": 855,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479010.6532882766,
            "y": 5470389.321772647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 856,
        "cate": 0,
        "type": 0,
        "name": "煤刀56",
        "levelId": 1002,
        "id": 856,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479005.4590224068,
            "y": 5470380.052995647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 857,
        "cate": 0,
        "type": 0,
        "name": "煤刀57",
        "levelId": 1002,
        "id": 857,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479000.26475653704,
            "y": 5470370.7842186475,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 858,
        "cate": 0,
        "type": 0,
        "name": "煤刀58",
        "levelId": 1002,
        "id": 858,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478995.07049066725,
            "y": 5470361.515441648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 859,
        "cate": 0,
        "type": 0,
        "name": "煤刀59",
        "levelId": 1002,
        "id": 859,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478989.8762247975,
            "y": 5470352.246664648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 860,
        "cate": 0,
        "type": 0,
        "name": "煤刀60",
        "levelId": 1002,
        "id": 860,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478984.6819589277,
            "y": 5470342.977887648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 861,
        "cate": 0,
        "type": 0,
        "name": "煤刀61",
        "levelId": 1002,
        "id": 861,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478979.487693058,
            "y": 5470333.709110648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 862,
        "cate": 0,
        "type": 0,
        "name": "煤刀62",
        "levelId": 1002,
        "id": 862,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478974.2934271882,
            "y": 5470324.440333648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 863,
        "cate": 0,
        "type": 0,
        "name": "煤刀63",
        "levelId": 1002,
        "id": 863,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478969.09916131845,
            "y": 5470315.171556648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 864,
        "cate": 0,
        "type": 0,
        "name": "煤刀64",
        "levelId": 1002,
        "id": 864,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478963.90489544865,
            "y": 5470305.902779648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 865,
        "cate": 0,
        "type": 0,
        "name": "煤刀65",
        "levelId": 1002,
        "id": 865,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478958.71062957885,
            "y": 5470296.634002648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 866,
        "cate": 0,
        "type": 0,
        "name": "煤刀66",
        "levelId": 1002,
        "id": 866,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478953.5163637091,
            "y": 5470287.3652256485,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 867,
        "cate": 0,
        "type": 0,
        "name": "煤刀67",
        "levelId": 1002,
        "id": 867,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478948.3220978393,
            "y": 5470278.096448649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 868,
        "cate": 0,
        "type": 0,
        "name": "煤刀68",
        "levelId": 1002,
        "id": 868,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478943.1278319696,
            "y": 5470268.827671649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 869,
        "cate": 0,
        "type": 0,
        "name": "煤刀69",
        "levelId": 1002,
        "id": 869,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478937.9335660998,
            "y": 5470259.558894648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 870,
        "cate": 0,
        "type": 0,
        "name": "煤刀70",
        "levelId": 1002,
        "id": 870,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478932.73930023005,
            "y": 5470250.290117648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 871,
        "cate": 0,
        "type": 0,
        "name": "煤刀71",
        "levelId": 1002,
        "id": 871,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478927.54503436026,
            "y": 5470241.021340649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 872,
        "cate": 0,
        "type": 0,
        "name": "煤刀72",
        "levelId": 1002,
        "id": 872,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478922.3507684905,
            "y": 5470231.752563649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 873,
        "cate": 0,
        "type": 0,
        "name": "煤刀73",
        "levelId": 1002,
        "id": 873,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478917.1565026207,
            "y": 5470222.483786649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 874,
        "cate": 0,
        "type": 0,
        "name": "煤刀74",
        "levelId": 1002,
        "id": 874,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478911.962236751,
            "y": 5470213.215009649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 875,
        "cate": 0,
        "type": 0,
        "name": "煤刀75",
        "levelId": 1002,
        "id": 875,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478906.7679708812,
            "y": 5470203.9462326495,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 876,
        "cate": 0,
        "type": 0,
        "name": "煤刀76",
        "levelId": 1002,
        "id": 876,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478901.57370501145,
            "y": 5470194.677455649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 877,
        "cate": 0,
        "type": 0,
        "name": "煤刀77",
        "levelId": 1002,
        "id": 877,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478896.37943914166,
            "y": 5470185.408678649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 878,
        "cate": 0,
        "type": 0,
        "name": "煤刀78",
        "levelId": 1002,
        "id": 878,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478891.1851732719,
            "y": 5470176.139901649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 879,
        "cate": 0,
        "type": 0,
        "name": "煤刀79",
        "levelId": 1002,
        "id": 879,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478885.9909074021,
            "y": 5470166.871124649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 880,
        "cate": 0,
        "type": 0,
        "name": "煤刀80",
        "levelId": 1002,
        "id": 880,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478880.79664153233,
            "y": 5470157.60234765,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 881,
        "cate": 0,
        "type": 0,
        "name": "煤刀81",
        "levelId": 1002,
        "id": 881,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478875.6023756626,
            "y": 5470148.33357065,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 882,
        "cate": 0,
        "type": 0,
        "name": "煤刀82",
        "levelId": 1002,
        "id": 882,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478870.4081097928,
            "y": 5470139.06479365,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 883,
        "cate": 0,
        "type": 0,
        "name": "煤刀83",
        "levelId": 1002,
        "id": 883,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478865.21384392306,
            "y": 5470129.79601665,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 884,
        "cate": 0,
        "type": 0,
        "name": "煤刀84",
        "levelId": 1002,
        "id": 884,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478860.01957805327,
            "y": 5470120.52723965,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 885,
        "cate": 0,
        "type": 0,
        "name": "煤刀85",
        "levelId": 1002,
        "id": 885,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478854.82531218353,
            "y": 5470111.25846265,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 886,
        "cate": 0,
        "type": 0,
        "name": "煤刀86",
        "levelId": 1002,
        "id": 886,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478849.63104631373,
            "y": 5470101.98968565,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 887,
        "cate": 0,
        "type": 0,
        "name": "煤刀87",
        "levelId": 1002,
        "id": 887,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478849.99247248453,
            "y": 5470096.4478968885,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 0.793
          },
          "scale": {
            "x": 3.938,
            "y": 0.7786,
            "z": 1
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/hd/HD-10.FBX'
    },
    'list': [
      {
        'key': 700,
        'cate': 0,
        'type': 0,
        'name': '掘刀0',
        'levelId': 1002,
        'id': 700,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478162.2446914415,
            'y': 5469066.3063190235,
            'z': -373.8316399563232
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1.0445
          }
        }
      },
      {
        'key': 701,
        'cate': 0,
        'type': 0,
        'name': '掘刀1',
        'levelId': 1002,
        'id': 701,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478157.00367463595,
            'y': 5469057.080299235,
            'z': -374.38202772774355
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1.0445
          }
        }
      },
      {
        'key': 702,
        'cate': 0,
        'type': 0,
        'name': '掘刀2',
        'levelId': 1002,
        'id': 702,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478151.7626578304,
            'y': 5469047.8542794455,
            'z': -374.9324154991639
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1.0445
          }
        }
      },
      {
        'key': 703,
        'cate': 0,
        'type': 0,
        'name': '掘刀3',
        'levelId': 1002,
        'id': 703,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478146.52164102485,
            'y': 5469038.628259657,
            'z': -375.4828032705842
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1.0445
          }
        }
      },
      {
        'key': 704,
        'cate': 0,
        'type': 0,
        'name': '掘刀4',
        'levelId': 1002,
        'id': 704,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478141.2806242193,
            'y': 5469029.4022398675,
            'z': -376.03319104200455
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 705,
        'cate': 0,
        'type': 0,
        'name': '掘刀5',
        'levelId': 1002,
        'id': 705,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478136.03960741375,
            'y': 5469020.176220079,
            'z': -376.5835788134249
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 706,
        'cate': 0,
        'type': 0,
        'name': '掘刀6',
        'levelId': 1002,
        'id': 706,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478130.7985906082,
            'y': 5469010.95020029,
            'z': -377.1339665848452
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 707,
        'cate': 0,
        'type': 0,
        'name': '掘刀7',
        'levelId': 1002,
        'id': 707,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478125.55757380265,
            'y': 5469001.724180501,
            'z': -377.68435435626554
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 708,
        'cate': 0,
        'type': 0,
        'name': '掘刀8',
        'levelId': 1002,
        'id': 708,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478120.3165569971,
            'y': 5468992.498160712,
            'z': -378.2347421276859
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 709,
        'cate': 0,
        'type': 0,
        'name': '掘刀9',
        'levelId': 1002,
        'id': 709,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478115.07554019155,
            'y': 5468983.272140924,
            'z': -378.7851298991062
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      },
      {
        'key': 710,
        'cate': 0,
        'type': 0,
        'name': '掘刀10',
        'levelId': 1002,
        'id': 710,
        'visible': false,
        'noEvent': false,
        'gem': {
          'color': '0xFFFFFF',
          'position': {
            'x': 478109.834523386,
            'y': 5468974.046121134,
            'z': -379.33551767052654
          },
          'rotation': {
            'x': 0.0205,
            'y': -0.0688,
            'z': 2.6244
          },
          'scale': {
            'x': 1.025,
            'y': 1.08,
            'z': 1
          }
        }
      }
    ]
  },
  {
    "modelurl": {
      "isPublic": true,
      "fbx": "/pmodel/zhmk/hd/stone-10.FBX"
    },
    "list": [
      {
        "key": 599,
        "cate": 0,
        "type": 0,
        "name": "原点石刀",
        "levelId": 1002,
        "id": 599,
        "visible": true,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479311.92070872313,
            "y": 5470926.910838642,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 600,
        "cate": 0,
        "type": 0,
        "name": "石刀0",
        "levelId": 1002,
        "id": 600,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479306.72644285334,
            "y": 5470917.642061642,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 601,
        "cate": 0,
        "type": 0,
        "name": "石刀1",
        "levelId": 1002,
        "id": 601,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479301.5321769836,
            "y": 5470908.373284643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 602,
        "cate": 0,
        "type": 0,
        "name": "石刀2",
        "levelId": 1002,
        "id": 602,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479296.3379111138,
            "y": 5470899.104507643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 603,
        "cate": 0,
        "type": 0,
        "name": "石刀3",
        "levelId": 1002,
        "id": 603,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479291.143645244,
            "y": 5470889.835730643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 604,
        "cate": 0,
        "type": 0,
        "name": "石刀4",
        "levelId": 1002,
        "id": 604,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479285.9493793743,
            "y": 5470880.566953643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 605,
        "cate": 0,
        "type": 0,
        "name": "石刀5",
        "levelId": 1002,
        "id": 605,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479280.7551135045,
            "y": 5470871.298176643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 606,
        "cate": 0,
        "type": 0,
        "name": "石刀6",
        "levelId": 1002,
        "id": 606,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479275.56084763474,
            "y": 5470862.029399643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 607,
        "cate": 0,
        "type": 0,
        "name": "石刀7",
        "levelId": 1002,
        "id": 607,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479270.36658176495,
            "y": 5470852.760622643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 608,
        "cate": 0,
        "type": 0,
        "name": "石刀8",
        "levelId": 1002,
        "id": 608,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479265.1723158952,
            "y": 5470843.491845643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 609,
        "cate": 0,
        "type": 0,
        "name": "石刀9",
        "levelId": 1002,
        "id": 609,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479259.9780500254,
            "y": 5470834.223068643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 610,
        "cate": 0,
        "type": 0,
        "name": "石刀10",
        "levelId": 1002,
        "id": 610,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479254.7837841557,
            "y": 5470824.954291644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 611,
        "cate": 0,
        "type": 0,
        "name": "石刀11",
        "levelId": 1002,
        "id": 611,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479249.5895182859,
            "y": 5470815.685514644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 612,
        "cate": 0,
        "type": 0,
        "name": "石刀12",
        "levelId": 1002,
        "id": 612,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479244.39525241614,
            "y": 5470806.416737644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 613,
        "cate": 0,
        "type": 0,
        "name": "石刀13",
        "levelId": 1002,
        "id": 613,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479239.20098654635,
            "y": 5470797.147960643,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 614,
        "cate": 0,
        "type": 0,
        "name": "石刀14",
        "levelId": 1002,
        "id": 614,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479234.0067206766,
            "y": 5470787.8791836435,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 615,
        "cate": 0,
        "type": 0,
        "name": "石刀15",
        "levelId": 1002,
        "id": 615,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479228.8124548068,
            "y": 5470778.610406644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 616,
        "cate": 0,
        "type": 0,
        "name": "石刀16",
        "levelId": 1002,
        "id": 616,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479223.6181889371,
            "y": 5470769.341629644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 617,
        "cate": 0,
        "type": 0,
        "name": "石刀17",
        "levelId": 1002,
        "id": 617,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479218.4239230673,
            "y": 5470760.072852644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 618,
        "cate": 0,
        "type": 0,
        "name": "石刀18",
        "levelId": 1002,
        "id": 618,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479213.2296571975,
            "y": 5470750.804075644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 619,
        "cate": 0,
        "type": 0,
        "name": "石刀19",
        "levelId": 1002,
        "id": 619,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479208.03539132775,
            "y": 5470741.535298645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 620,
        "cate": 0,
        "type": 0,
        "name": "石刀20",
        "levelId": 1002,
        "id": 620,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479202.84112545796,
            "y": 5470732.266521645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 621,
        "cate": 0,
        "type": 0,
        "name": "石刀21",
        "levelId": 1002,
        "id": 621,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479197.6468595882,
            "y": 5470722.997744644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 622,
        "cate": 0,
        "type": 0,
        "name": "石刀22",
        "levelId": 1002,
        "id": 622,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479192.4525937184,
            "y": 5470713.728967644,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 623,
        "cate": 0,
        "type": 0,
        "name": "石刀23",
        "levelId": 1002,
        "id": 623,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479187.2583278487,
            "y": 5470704.4601906445,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 624,
        "cate": 0,
        "type": 0,
        "name": "石刀24",
        "levelId": 1002,
        "id": 624,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479182.0640619789,
            "y": 5470695.191413645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 625,
        "cate": 0,
        "type": 0,
        "name": "石刀25",
        "levelId": 1002,
        "id": 625,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479176.86979610915,
            "y": 5470685.922636645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 626,
        "cate": 0,
        "type": 0,
        "name": "石刀26",
        "levelId": 1002,
        "id": 626,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479171.67553023936,
            "y": 5470676.653859645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 627,
        "cate": 0,
        "type": 0,
        "name": "石刀27",
        "levelId": 1002,
        "id": 627,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479166.4812643696,
            "y": 5470667.385082645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 628,
        "cate": 0,
        "type": 0,
        "name": "石刀28",
        "levelId": 1002,
        "id": 628,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479161.2869984998,
            "y": 5470658.116305645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 629,
        "cate": 0,
        "type": 0,
        "name": "石刀29",
        "levelId": 1002,
        "id": 629,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479156.0927326301,
            "y": 5470648.847528645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 630,
        "cate": 0,
        "type": 0,
        "name": "石刀30",
        "levelId": 1002,
        "id": 630,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479150.8984667603,
            "y": 5470639.578751645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 631,
        "cate": 0,
        "type": 0,
        "name": "石刀31",
        "levelId": 1002,
        "id": 631,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479145.70420089056,
            "y": 5470630.309974645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 632,
        "cate": 0,
        "type": 0,
        "name": "石刀32",
        "levelId": 1002,
        "id": 632,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479140.50993502076,
            "y": 5470621.0411976455,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 633,
        "cate": 0,
        "type": 0,
        "name": "石刀33",
        "levelId": 1002,
        "id": 633,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479135.315669151,
            "y": 5470611.772420646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 634,
        "cate": 0,
        "type": 0,
        "name": "石刀34",
        "levelId": 1002,
        "id": 634,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479130.1214032812,
            "y": 5470602.503643646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 635,
        "cate": 0,
        "type": 0,
        "name": "石刀35",
        "levelId": 1002,
        "id": 635,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479124.92713741143,
            "y": 5470593.234866645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 636,
        "cate": 0,
        "type": 0,
        "name": "石刀36",
        "levelId": 1002,
        "id": 636,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479119.7328715417,
            "y": 5470583.966089645,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 637,
        "cate": 0,
        "type": 0,
        "name": "石刀37",
        "levelId": 1002,
        "id": 637,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479114.5386056719,
            "y": 5470574.697312646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 6368,
        "cate": 0,
        "type": 0,
        "name": "石刀38",
        "levelId": 1002,
        "id": 638,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479109.34433980216,
            "y": 5470565.428535646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 639,
        "cate": 0,
        "type": 0,
        "name": "石刀39",
        "levelId": 1002,
        "id": 639,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479104.15007393237,
            "y": 5470556.159758646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 640,
        "cate": 0,
        "type": 0,
        "name": "石刀40",
        "levelId": 1002,
        "id": 640,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479098.95580806263,
            "y": 5470546.890981646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 641,
        "cate": 0,
        "type": 0,
        "name": "石刀41",
        "levelId": 1002,
        "id": 641,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479093.76154219283,
            "y": 5470537.6222046465,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 642,
        "cate": 0,
        "type": 0,
        "name": "石刀42",
        "levelId": 1002,
        "id": 642,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479088.5672763231,
            "y": 5470528.353427646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 643,
        "cate": 0,
        "type": 0,
        "name": "石刀43",
        "levelId": 1002,
        "id": 643,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479083.3730104533,
            "y": 5470519.084650646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 644,
        "cate": 0,
        "type": 0,
        "name": "石刀44",
        "levelId": 1002,
        "id": 644,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479078.17874458357,
            "y": 5470509.815873646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 645,
        "cate": 0,
        "type": 0,
        "name": "石刀45",
        "levelId": 1002,
        "id": 645,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479072.98447871377,
            "y": 5470500.547096646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 646,
        "cate": 0,
        "type": 0,
        "name": "石刀46",
        "levelId": 1002,
        "id": 646,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479067.79021284403,
            "y": 5470491.278319647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 647,
        "cate": 0,
        "type": 0,
        "name": "石刀47",
        "levelId": 1002,
        "id": 647,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479062.59594697424,
            "y": 5470482.009542647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 648,
        "cate": 0,
        "type": 0,
        "name": "石刀48",
        "levelId": 1002,
        "id": 648,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479057.4016811045,
            "y": 5470472.740765647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 649,
        "cate": 0,
        "type": 0,
        "name": "石刀49",
        "levelId": 1002,
        "id": 649,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479052.2074152347,
            "y": 5470463.471988646,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 650,
        "cate": 0,
        "type": 0,
        "name": "石刀50",
        "levelId": 1002,
        "id": 650,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479047.0131493649,
            "y": 5470454.2032116465,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 651,
        "cate": 0,
        "type": 0,
        "name": "石刀51",
        "levelId": 1002,
        "id": 651,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479041.8188834952,
            "y": 5470444.934434647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 652,
        "cate": 0,
        "type": 0,
        "name": "石刀52",
        "levelId": 1002,
        "id": 652,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479036.6246176254,
            "y": 5470435.665657647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 653,
        "cate": 0,
        "type": 0,
        "name": "石刀53",
        "levelId": 1002,
        "id": 653,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479031.43035175564,
            "y": 5470426.396880647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 654,
        "cate": 0,
        "type": 0,
        "name": "石刀54",
        "levelId": 1002,
        "id": 654,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479026.23608588584,
            "y": 5470417.128103647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 655,
        "cate": 0,
        "type": 0,
        "name": "石刀55",
        "levelId": 1002,
        "id": 655,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479021.0418200161,
            "y": 5470407.859326648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 656,
        "cate": 0,
        "type": 0,
        "name": "石刀56",
        "levelId": 1002,
        "id": 656,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479015.8475541463,
            "y": 5470398.590549648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 657,
        "cate": 0,
        "type": 0,
        "name": "石刀57",
        "levelId": 1002,
        "id": 657,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479010.6532882766,
            "y": 5470389.321772647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 658,
        "cate": 0,
        "type": 0,
        "name": "石刀58",
        "levelId": 1002,
        "id": 658,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479005.4590224068,
            "y": 5470380.052995647,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 659,
        "cate": 0,
        "type": 0,
        "name": "石刀59",
        "levelId": 1002,
        "id": 659,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 479000.26475653704,
            "y": 5470370.7842186475,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 660,
        "cate": 0,
        "type": 0,
        "name": "石刀60",
        "levelId": 1002,
        "id": 660,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478995.07049066725,
            "y": 5470361.515441648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 661,
        "cate": 0,
        "type": 0,
        "name": "石刀61",
        "levelId": 1002,
        "id": 661,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478989.8762247975,
            "y": 5470352.246664648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 662,
        "cate": 0,
        "type": 0,
        "name": "石刀62",
        "levelId": 1002,
        "id": 662,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478984.6819589277,
            "y": 5470342.977887648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 663,
        "cate": 0,
        "type": 0,
        "name": "石刀63",
        "levelId": 1002,
        "id": 663,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478979.487693058,
            "y": 5470333.709110648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 664,
        "cate": 0,
        "type": 0,
        "name": "石刀64",
        "levelId": 1002,
        "id": 664,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478974.2934271882,
            "y": 5470324.440333648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 665,
        "cate": 0,
        "type": 0,
        "name": "石刀65",
        "levelId": 1002,
        "id": 665,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478969.09916131845,
            "y": 5470315.171556648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 666,
        "cate": 0,
        "type": 0,
        "name": "石刀66",
        "levelId": 1002,
        "id": 666,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478963.90489544865,
            "y": 5470305.902779648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 667,
        "cate": 0,
        "type": 0,
        "name": "石刀67",
        "levelId": 1002,
        "id": 667,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478958.71062957885,
            "y": 5470296.634002648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 668,
        "cate": 0,
        "type": 0,
        "name": "石刀68",
        "levelId": 1002,
        "id": 668,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478953.5163637091,
            "y": 5470287.3652256485,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 669,
        "cate": 0,
        "type": 0,
        "name": "石刀69",
        "levelId": 1002,
        "id": 669,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478948.3220978393,
            "y": 5470278.096448649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 670,
        "cate": 0,
        "type": 0,
        "name": "石刀70",
        "levelId": 1002,
        "id": 670,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478943.1278319696,
            "y": 5470268.827671649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 671,
        "cate": 0,
        "type": 0,
        "name": "石刀71",
        "levelId": 1002,
        "id": 671,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478937.9335660998,
            "y": 5470259.558894648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 672,
        "cate": 0,
        "type": 0,
        "name": "石刀72",
        "levelId": 1002,
        "id": 672,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478932.73930023005,
            "y": 5470250.290117648,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 673,
        "cate": 0,
        "type": 0,
        "name": "石刀73",
        "levelId": 1002,
        "id": 673,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478927.54503436026,
            "y": 5470241.021340649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 674,
        "cate": 0,
        "type": 0,
        "name": "石刀74",
        "levelId": 1002,
        "id": 674,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478922.3507684905,
            "y": 5470231.752563649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 675,
        "cate": 0,
        "type": 0,
        "name": "石刀75",
        "levelId": 1002,
        "id": 675,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478917.1565026207,
            "y": 5470222.483786649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 676,
        "cate": 0,
        "type": 0,
        "name": "石刀76",
        "levelId": 1002,
        "id": 676,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478911.962236751,
            "y": 5470213.215009649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 677,
        "cate": 0,
        "type": 0,
        "name": "石刀77",
        "levelId": 1002,
        "id": 677,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478906.7679708812,
            "y": 5470203.9462326495,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 678,
        "cate": 0,
        "type": 0,
        "name": "石刀78",
        "levelId": 1002,
        "id": 678,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478901.57370501145,
            "y": 5470194.677455649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 679,
        "cate": 0,
        "type": 0,
        "name": "石刀79",
        "levelId": 1002,
        "id": 679,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478896.37943914166,
            "y": 5470185.408678649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 680,
        "cate": 0,
        "type": 0,
        "name": "石刀80",
        "levelId": 1002,
        "id": 680,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478891.1851732719,
            "y": 5470176.139901649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 681,
        "cate": 0,
        "type": 0,
        "name": "石刀81",
        "levelId": 1002,
        "id": 681,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478885.9909074021,
            "y": 5470166.871124649,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 682,
        "cate": 0,
        "type": 0,
        "name": "石刀82",
        "levelId": 1002,
        "id": 682,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478880.79664153233,
            "y": 5470157.60234765,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      },
      {
        "key": 683,
        "cate": 0,
        "type": 0,
        "name": "石刀83",
        "levelId": 1002,
        "id": 683,
        "visible": false,
        "gem": {
          "color": "0xFFFFFF",
          "position": {
            "x": 478875.6023756626,
            "y": 5470148.33357065,
            "z": -305.6456452636628
          },
          "rotation": {
            "x": 0,
            "y": 0,
            "z": 1.06
          },
          "scale": {
            "x": 1.06,
            "y": 0.82,
            "z": 1
          }
        }
      }
    ]
  }
]
const poiJsonCamera = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/camera/model.fbx'
    },
    'list': [
      {
        'key': 19001,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19001,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag camera',
          'icon': 'sbny-camera.png',
          'title': '摄像头1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 19001
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479225.99836855393,
            'y': 5470953.412247622,
            'z': -300.9535086706232
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.5415713774015914
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 19002,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19002,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag camera',
          'icon': 'sbny-camera.png',
          'title': '摄像头2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479048.2366776504,
            'y': 5470633.030437328,
            'z': -300.5246798533031
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 0
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 19003,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19003,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag camera',
          'icon': 'sbny-camera.png',
          'title': '摄像头3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478795.06962211826,
            'y': 5470177.000095717,
            'z': -301.1629728978393
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.5664212137874918
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 19004,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19004,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag camera',
          'icon': 'sbny-camera.png',
          'title': '摄像头4',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478922.904127919,
            'y': 5470013.572802973,
            'z': -300.243652726702
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 0
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 19005,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19005,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-camera.png',
          'class': 'interest-tag camera',
          'title': '摄像头5',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479123.67966506677,
            'y': 5470389.901411065,
            'z': -300.1409906307402
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': -0.6789882257081356
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      },
      {
        'key': 19006,
        'cate': 0,
        'type': 0,
        'name': '摄像头',
        'levelId': 1003,
        'id': 19006,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag camera',
          'icon': 'sbny-camera.png',
          'title': '摄像头6',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479388.4200807969,
            'y': 5470876.9403442,
            'z': -300.536284511617
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.5751585672505843
          },
          'scale': {
            'x': 2,
            'y': 2,
            'z': 2
          }
        }
      }
    ]
  }
]
const poiJsonEscape = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/camera/model.fbx'
    },
    'list': [
      {
        'key': 29001,
        'cate': 0,
        'type': 0,
        'name': '逃生出口',
        'levelId': 1003,
        'id': 29001,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-escape.png',
          'title': '逃生出口',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 477540.88013490906,
            'y': 5469589.098571665,
            'z': 27.311538741149576
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 0
          },
          'scale': {
            'x': 0.001,
            'y': 0.001,
            'z': 0.001
          }
        }
      },
      {
        'key': 29002,
        'cate': 0,
        'type': 0,
        'name': '逃生出口',
        'levelId': 1003,
        'id': 29002,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-escape.png',
          'title': '逃生出口',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 480307.257767734,
            'y': 5471151.439217991,
            'z': -165.6775528245885
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 0
          },
          'scale': {
            'x': 0.001,
            'y': 0.001,
            'z': 0.001
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/sb/wasichuanganqi.FBX'
    },
    'list': [
      {
        'key': 8600,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8600,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag cgq',
          'icon': 'sbny-cgq.png',
          'title': '瓦斯传感器0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 8600
              }
            }
          }
        },
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479382.24018098897,
            'y': 5470866.117601741,
            'z': -300.2655999455859
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      },
      {
        'key': 8601,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8601,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag cgq',
          'icon': 'sbny-cgq.png',
          'title': '瓦斯传感器1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479393.4725660157,
            'y': 5470890.791564883,
            'z': -299.8641317459022
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      },
      {
        'key': 8602,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 8602,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag cgq',
          'icon': 'sbny-cgq.png',
          'title': '瓦斯传感器2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478929.825369986,
            'y': 5470017.494077698,
            'z': -300.32919550100354
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      },
      {
        'key': 86000,
        'cate': 0,
        'type': 0,
        'name': '瓦斯传感器',
        'levelId': 1003,
        'id': 86000,
        'scopedSlots': {
          'cate': '2d',
          'icon': 'sbny-warning.gif',
          'title': '瓦斯传感器0',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'visible': false,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479382.3246885935,
            'y': 5470866.07500201,
            'z': -299.55328771932284
          },
          'rotation': {
            'x': 0,
            'y': 0,
            'z': 2.674675640008098
          },
          'scale': {
            'x': 4,
            'y': 4,
            'z': 4
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/guangbo.FBX'
    },
    'list': [
      {
        'key': 1601,
        'cate': 0,
        'type': 0,
        'name': '广播话站1',
        'levelId': 1003,
        'id': 1601,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479354.2649408508,
            'y': 5470820.006206876,
            'z': -304.0232544862306
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.087368422661579
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag broadcast',
          'icon': 'sbny-cgq.png',
          'title': '广播话站1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        }
      },
      {
        'key': 1602,
        'cate': 0,
        'type': 0,
        'name': '广播话站2',
        'levelId': 1003,
        'id': 1602,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479203.1077010662,
            'y': 5470904.047262854,
            'z': -304.8927017371734
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': -2.075076934571743
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag broadcast',
          'icon': 'sbny-cgq.png',
          'title': '广播话站2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        }
      },
      {
        'key': 1603,
        'cate': 0,
        'type': 0,
        'name': '广播话站3',
        'levelId': 1003,
        'id': 1603,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478814.2048197415,
            'y': 5470210.552342948,
            'z': -304.7828329406803
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.0629006645156878
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag broadcast',
          'icon': 'sbny-cgq.png',
          'title': '广播话站3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        }
      },
      {
        'key': 1604,
        'cate': 0,
        'type': 0,
        'name': '广播话站4',
        'levelId': 1003,
        'id': 1604,
        'visible': true,
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 479013.95542002935,
            'y': 5470570.437835125,
            'z': -304.29074784970976
          },
          'rotation': {
            'x': 0.0,
            'y': -0.0,
            'z': 1.0527851750537434
          },
          'scale': {
            'x': 1,
            'y': 1,
            'z': 1
          }
        },
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag broadcast',
          'icon': 'sbny-cgq.png',
          'title': '广播话站4',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 0.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        }
      }
    ]
  }
]
const mapInner = []
const keyTypeList = [
  {
    index: 0,
    loadWorkPoi: false,
    loadSbPoi: false,
    loadCameraPoi: false,
    loadEscapePoi: false,
    equipmenthshow: [
      15, 16, 17, 18, 19, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 126
    ],
    equipmenthide: [1, 12, 13, 14, 100, 120, 121, 122, 123, 124, 125, 127, 1001, 1002, 1003, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8401, 8700, 8701, 8800, 8801, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9200, 9201, 9500, 9501, 9502, 9503, 9504, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22056, 22057, 22059, 22060, 22159, 22161, 22258, 23060, 29001, 29002, 86000, 118, 8600, 8601, 8602,
      1081, 1082, 1083, 1084, 1085, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111]
  }, {
    index: 1,
    loadWorkPoi: true,
    loadSbPoi: false,
    loadCameraPoi: false,
    loadEscapePoi: false,
    equipmenthshow: [
      1002, 1, 12, 13, 14, 15, 127, 16, 17, 18, 19, 101, 103, 104, 105, 106, 107, 108, 109, 110,
      22056, 22057, 22060, 8401, 8100, 8200, 8300, // 10101工作面
      22258, 22358, 22458, 22558, // 传送带 10101工作面
      8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, // 液压支架 10101工作面
      8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019,
      8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029,
      8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039,
      8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049,
      8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060,
      22059, 22159, 23060// 10101工作面 人员定位
    ],
    equipmenthide: [80331, 80332, 100, 111, 112, 113, 114, 115, 116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 1001, 1003, 8400, 8700, 8701, 8800, 8801, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9200, 9201, 9500, 9501, 9502, 9503, 9504, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22161, 29001, 29002, 86000, 101, 22358, 22458, 22558, 8600, 8601, 8602,
      1081, 1082, 1083, 1084, 1085, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111]
  }, {
    index: 2, // 视频监控
    loadWorkPoi: false,
    loadSbPoi: false,
    loadCameraPoi: true,
    loadEscapePoi: false,
    equipmenthshow: [
      19001, 19002, 19003, 19004, 19005, 19006, // 摄像头
      1002, 1, 12, 13, 14, 15, 127, 16, 17, 18, 19,
      22258, 22159
    ],
    equipmenthide: [100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 1001, 1003, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8401, 8700, 8701, 8800, 8801, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9200, 9201, 9500, 9501, 9502, 9503, 9504, 10012, 22056, 22057, 22059, 22060, 22161, 23060, 29001, 29002, 86000, 8600, 8601, 8602,
      1081, 1082, 1083, 1084, 1085, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111]
  }, {
    index: 3,
    loadWorkPoi: false,
    loadSbPoi: false,
    loadEscapePoi: true,
    equipmenthshow: [
      8600, 8601, 8602, 8800, 8801, 23059, 24059, 29001, 29002, 22059, 22159,
      1002, 1, 12, 13, 14, 16, 17
      // 22258, 22056, 22060, 8401, 8002, 8003 // 皮带运输机什么一系列
    ],
    equipmenthide: [22258, 22056, 22060, 8401, 8002, 8003 , 15, 18, 19, 100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 127, 1001, 1003, 8000, 8001, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8700, 8701, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9200, 9201, 9500, 9501, 9502, 9503, 9504, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22057, 22161, 23060, 86000, 23059, 24059,
      1081, 1082, 1083, 1084, 1085, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 1272, 1273, 1274, 1275, 1276, 1277, 1278, 1279, 1280, 1281, 1282, 1283, 1284, 1285, 1286]
  }, {
    index: 4,
    loadWorkPoi: false,
    loadSbPoi: false,
    loadCameraPoi: false,
    loadEscapePoi: false,
    equipmenthshow: [
      19, 18, // 水沟
      124, 125, // 水仓
      121, // 中央水泵房
      122, // 采区水泵房
      9500, 9501, 9502, 9503, 9504, // 水泵 排水系统
      22161, // 水管
      1002, 1, 12, 13, 14, 15, 127, 16, 17,
      1083, 1084, 1085
    ],
    equipmenthide: [100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 119, 120, 123, 126, 1001, 1003, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8401, 8700, 8701, 8800, 8801, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9200, 9201, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22056, 22057, 22059, 22060, 22159, 22258, 23060, 29001, 29002, 86000, 8600, 8601, 8602,
      1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111]
  }, {
    index: 5,
    loadWorkPoi: false,
    loadSbPoi: true,
    loadCameraPoi: false,
    loadEscapePoi: false,
    equipmenthshow: [
      9200, 9201, // 风机          通风系统
      22061, // 防风门            通风系统
      8700, 8701, // 风速传感器    通风系统
      1002, 1, 12, 13, 14, 15, 127, 16, 17
    ],
    equipmenthide: [18, 19, 100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 119, 120, 121, 122, 123, 124, 125, 126, 1001, 1003, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8401, 8800, 8801, 8900, 8901, 8902, 8903, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, 9000, 9001, 9002, 9003, 9500, 9501, 9502, 9503, 9504, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22056, 22057, 22059, 22060, 22159, 22161, 22258, 23060, 29001, 29002, 86000, 22061,
      1081, 1082, 1083, 1084, 1085, 1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111]
  }, {
    index: 6,
    loadWorkPoi: false,
    loadSbPoi: false,
    loadCameraPoi: false,
    loadEscapePoi: false,
    equipmenthshow: [
      9000, 9001, 9902, 9003, // 干式变压器   机电硐室
      8900, 8901, 8902, 8093, 8904, 8905, 8906, 8907, 8908, 8909, 8910, 8911, // 真空配电开关 机电硐室
      1002, 1, 12, 13, 14, 15, 127, 16, 17,
      1102, 1103, 1104, 1105, 1106, 1107, 1108, 1109, 1110, 1111, 120// 变压器、防爆馈电开关、采取变电所
    ],
    equipmenthide: [18, 19, 100, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 119, 120, 122, 124, 125, 126, 1001, 1003, 8000, 8001, 8002, 8003, 8004, 8005, 8006, 8007, 8008, 8009, 8010, 8011, 8012, 8013, 8014, 8015, 8016, 8017, 8018, 8019, 8020, 8021, 8022, 8023, 8024, 8025, 8026, 8027, 8028, 8029, 8030, 8031, 8032, 8033, 8034, 8035, 8036, 8037, 8038, 8039, 8040, 8041, 8042, 8043, 8044, 8045, 8046, 8047, 8048, 8049, 8050, 8051, 8052, 8053, 8054, 8055, 8056, 8057, 8058, 8059, 8060, 8100, 8200, 8300, 8400, 8401, 8700, 8701, 8800, 8801, 8903, 9002, 9200, 9201, 9500, 9501, 9502, 9503, 9504, 10012, 19001, 19002, 19003, 19004, 19005, 19006, 22056, 22057, 22059, 22060, 22159, 22161, 22258, 23060, 29001, 29002, 86000, 9902, 8093, 8600, 8601, 8602,
      1081, 1082, 1083, 1084, 1085 ]
  }]
const selectMap = [
  {
    key: 111, // 10101工作面
    point: {
      pos: { x: 479238.37783317827, y: 5471008.547254911, z: -214.92174004677594 },
      target: { x: 479283.8906567434, y: 5470715.885457444, z: -282.3885487693195 },
      up: { x: -0.006607714038579367, y: -0.22560730541076796, z: 0.9741959155429339 }
    }
  },
  {
    key: 112, // 10102工作面
    point: {
      pos: { x: 478335.19991190097, y: 5469489.245534017, z: -232.09959578851976 },
      target: { x: 478578.49133318843, y: 5469551.6518667, z: -320.54875702277747 },
      up: { x: 0.32267684119031403, y: 0.07887445665225046, z: 0.9432170886107394 }
    }
  },
  {
    key: 113, // 10103工作面
    point: {
      pos: { x: 479440.0088672778, y: 5470933.343520181, z: -197.15745208477443 },
      target: { x: 479457.6837087693, y: 5470756.744482489, z: -235.56271945180862 },
      up: { x: -0.016419004955888564, y: -0.2140447306638052, z: 0.9766858602188266 }
    }
  },
  {
    key: 126, // 10110工作面
    point: {
      pos: { x: 478190.43196381023, y: 5469042.556758813, z: -358.2349768325677 },
      target: { x: 478165.20108208153, y: 5469075.567562377, z: -372.0874078638947 },
      up: { x: -0.22700555296889294, y: 0.22419647820487482, z: 0.9477364707986261 }
    }
  },
  {
    key: 17, // 10110工作面
    point: {
      pos: { x: 478181.30677768774,y: 5469032.272039321, z: -360.1706036129696 },
      target: { x: 478164.1107452753, y: 5469067.483209789, z: -370.00966456970536 },
      up: { x: -0.1762632727906593, y: 0.18411917873207723, z: 0.9669702098245695 }
    }
  },
  {
    key: 22057, // 掘进机
    point: {
      pos: { x: 478170.98405206506, y: 5469053.431834762, z: -365.4663224704963 },
      target: { x: 478163.36645758926, y: 5469066.746853759, z: -371.45800606184423 },
      up: { x: -0.23250094066052157, y: 0.2853829617834778, z: 0.9297848556067602 }
    }
  }, {
    key: 102, // 一采区
    point: {
      pos: { x: 478389.8459719682, y: 5470228.929232671, z: -250.38891111683316 },
      target: { x: 478437.4563183536, y: 5470302.450851091, z: -324.9816436587842 },
      up: { x: 0.42201863422455904, y: 0.49638466490480054, z: 0.7586188349985787 }
    }
  },
  {
    key: 122, // 中央水泵房
    point: {
      pos: { x: 478389.8459719682, y: 5470228.929232671, z: -250.38891111683316 },
      target: { x: 478437.456318353, y: 5470302.450851091, z: -324.9816436587842 },
      up: { x: 0.42201863422455904, y: 0.49638466490480054, z: 0.7586188349985787 }
    }
  },
  {
    key: 121, // 采区水泵房
    point: {
      pos: { x: 478865.7642108781, y: 5469962.062294246, z: -291.9332150431588 },
      target: { x: 478885.61465855374, y: 5469941.144538642, z: -299.69488544352674 },
      up: { x: 0.14874737018898007, y: -0.21684069372367187, z: 0.9648079256553169 }
    }
  },
  {
    key: 22159, // 王友善
    point: {
      pos: { x: 479203.60725290375, y: 5470960.795583414, z: -296.3456458445381 },
      target: { x: 479246.52654686535, y: 5470937.433818645, z: -298.63543973154475 },
      up: { x: 0.03650845026726981, y: -0.030830869438582653, z: 0.9988576427843767 }
    }
  },
  {
    key: 22059, // 李爱国
    point: {
      pos: { x: 479294.0076851615, y: 5470920.017101989, z: -238.2920998916272 },
      target: { x: 479303.1105560735, y: 5470915.778267605, z: -238.83422723849915 },
      up: { x: -0.012990904358554245, y: -0.1542517530406934, z: 0.987946169124533 }
    }
  },
  {
    key: 22258, // 传送带
    point: {
      pos: { x: 479182.21273217216, y: 5470935.046828362, z: -278.8789014138718 },
      target: { x: 479205.3856231411, y: 5470887.876576562, z: -303.4919797651719 },
      up: { x: 0.18508785783914314, y: -0.381610225626715, z: 0.9056026284069976 }
    }
  },
  {
    key: 9200, // 风机
    point: {
      pos: { x: 480164.4995330513, y: 5471206.055904299, z: -156.28700195091423 },
      target: { x: 480168.490118122, y: 5471223.87375378, z: -161.82734391170314 },
      up: { x: -0.0018312142113584046, y: 0.2972939948587459, z: 0.9547842307429848 }
    }
  },
  {
    key: 9201, // 风机
    point: {
      pos: { x: 480157.34390138905, y: 5471205.302361642, z: -154.52277781040473 },
      target: { x: 480164.0113816257, y: 5471223.582983668, z: -164.6938899757889 },
      up: { x: 0.02139713395751441, y: 0.4801165361639207, z: 0.876943712196169 }
    }
  },
  {
    key: 8700, // 风速传感器
    point: {
      pos: { x: 479379.4135742999, y: 5470864.399897878, z: -225.64035925562803 },
      target: { x: 479368.7866335492, y: 5470848.6535766125, z: -237.07644107796648 },
      up: { x: -0.18527404534380984, y: -0.4925385639496455, z: 0.8503406912199348 }
    }
  },
  {
    key: 8701, // 风速传感器
    point: {
      pos: { x: 479267.2767748513, y: 5470654.578700371, z: -241.11750530392868 },
      target: { x: 479260.3269581618, y: 5470642.975884029, z: -251.080894465049 },
      up: { x: -0.18364445959068557, y: -0.5747690572819455, z: 0.7974429404370603 }
    }
  },
  {
    key: 8600, // 瓦斯传感器
    point: {
      pos: { x: 479371.7957993261, y: 5470852.4053373225, z: -222.42553294651833 },
      target: { x: 479389.7776857339, y: 5470887.761606597, z: -234.16754519281898 },
      up: { x: -0.009813315453658806, y: 0.3196553749203907, z: 0.9474830553230738 }
    }
  },
  {
    key: 8601, // 瓦斯传感器
    point: {
      pos: { x: 479383.42452911247, y: 5470871.227966357, z: -222.96036413721478 },
      target: { x: 479392.7473634914, y: 5470889.954668126, z: -228.62680465558196 },
      up: { x: -0.01998041315699628, y: 0.2986597485614883, z: 0.9541504795781949 }
    }
  },
  {
    key: 8602, // 瓦斯传感器
    point: {
      pos: { x: 478940.68727007566, y: 5470043.085147179, z: -285.9522418184334 },
      target: { x: 478924.33535125485, y: 5470007.282258924, z: -297.13788288642326 },
      up: { x: -0.19651703560859532, y: -0.20950301522184167, z: 0.9578567436358053 }
    }
  },
  {
    key: 22056, // 双臂采煤机
    point: {
      pos: { x: 479229.3119533992, y: 5470948.0672435975, z: -238.35325225185417 },
      target: { x: 479245.9434145048, y: 5470937.084264756, z: -240.0171865225614 },
      up: { x: -0.002887927679474502, y: -0.15406498449245232, z: 0.9880564965765264 }
    }
  },
  {
    key: 22060, // 刮板机
    point: {
      pos: { x: 479293.50989150786, y: 5470912.4946051575, z: -236.14166651146382 },
      target: { x: 479311.1229191695, y: 5470903.168024626, z: -237.81383641302585 },
      up: { x: 0.012470063582252458, y: -0.15359973507524627, z: 0.9880544615045724 }
    }
  },
  {
    key: 8000, // 液压支架
    point: {
      pos: { x: 479226.4069328747, y: 5470955.414480237, z: -239.62391105080317 },
      target: { x: 479253.45732279314, y: 5470946.415599726, z: -240.1731321276285 },
      up: { x: -0.023809141848349803, y: -0.13205002791591483, z: 0.990957070155853 }
    }
  },
  {
    key: 8001, // 液压支架
    point: {
      pos: { x: 479226.4069328747, y: 5470955.414480237, z: -239.62391105080317 },
      target: { x: 479253.45732279314, y: 5470946.415599726, z: -240.1731321276285 },
      up: { x: -0.023809141848349803, y: -0.13205002791591483, z: 0.990957070155853 }
    }
  },
  {
    key: 23060, // 液压支架
    point: {
      pos: { x: 478177.188733393, y: 5469069.299661455, z: -367.4782557074269 },
      target: { x: 478170.68417300517, y: 5469077.809897741, z: -371.0494338822527 },
      up: { x: -0.22700555296889294, y: 0.22419647820487484, z: 0.9477364707986261 }
    }
  },
  {
    key: 19001, // 摄像头
    point: {
      pos: { x: 479230.136182954, y: 5470940.700581385, z: -232.10457055020737 },
      target: { x: 479231.46150795167, y: 5470963.161376594, z: -239.54679375700374 },
      up: { x: -0.0410786922821748, y: 0.31644454500596947, z: 0.9477211567630883 }
    }
  },
  {
    key: 19002, // 摄像头
    point: {
      pos: { x: 479057.1673302714, y: 5470614.581135893, z: -257.72047431858266 },
      target: { x: 479064.8954882617, y: 5470643.563939043, z: -265.82867057729123 },
      up: { x: 0.02836215061460146, y: 0.2622853703400695, z: 0.9645734668329321 }
    }
  },
  {
    key: 19003, // 摄像头
    point: {
      pos: { x: 478788.32436826895, y: 5470156.505657251, z: -284.61180762298125 },
      target: { x: 478796.0786848455, y: 5470167.91174208, z: -288.51941672188275 },
      up: { x: 0.11913052520973352, y: 0.2483479375645156, z: 0.9613174396996649 }
    }
  },
  {
    key: 19004, // 摄像头
    point: {
      pos: { x: 478923.5489943258, y: 5469999.025074512, z: -285.5182795855078 },
      target: { x: 478939.6937534082, y: 5470045.760975234, z: -298.4427682962941 },
      up: { x: 0.043060702903373514, y: 0.2524458823727176, z: 0.9666523947823966 }
    }
  },
  {
    key: 19005, // 摄像头
    point: {
      pos: { x: 479130.7289634921, y: 5470379.191418158, z: -257.97297347289947 },
      target: { x: 479130.66223880625, y: 5470403.023955422, z: -264.3554437002805 },
      up: { x: -0.040171441526764454, y: 0.2583752854086779, z: 0.9652090277114397 }
    }
  },
  {
    key: 19006, // 摄像头
    point: {
      pos: { x: 479398.4457558451, y: 5470869.229675113, z: -219.79144285387324 },
      target: { x: 479389.73859212064, y: 5470888.909510983, z: -225.90656291428286 },
      up: { x: -0.14764833335669844, y: 0.23332471720497736, z: 0.9611241054089855 }
    }
  },
  {
    key: 1084, // 水泵1
    point: {
      pos: { x: 478872.2217412059, y: 5469939.584718907, z: -298.7054525032092 },
      target: { x: 478878.4714290618, y: 5469933.132325551, z: -300.263156477872 },
      up: { x: 0.1309759512834843, y: -0.11096997711480389, z: 0.9851552996175491 }
    }
  },
  {
    key: 1083, // 水泵2
    point: {
      pos: { x: 478878.4414045877, y: 5469946.354615135, z: -298.42334580629597 },
      target: { x: 478884.5051289909, y: 5469940.479225366, z: -299.01943853165375 },
      up: { x: 0.039741634172302344, y: -0.06017622454596688, z: 0.9973963226885939 }
    }
  },
  {
    key: 1085, // 水泵3
    point: {
      pos: { x: 478884.2682500341, y: 5469953.517925514, z: -300.0805092997435 },
      target: { x: 478890.4224557726, y: 5469948.013199894, z: -299.823577331198 },
      up: { x: -0.035497646639211324, y: 0.00695831337353275, z: 0.9993455353170386 }
    }
  },
  {
    key: 1081, // 水泵3旁边的门
    point: {
      pos: { x: 478898.4980424165, y: 5469958.258509915, z: -297.204876962808 },
      target: { x: 478892.6111588092, y: 5469952.763056627, z: -298.86646793151647 },
      up: { x: -0.15998230279835152, y: -0.1246946557429363, z: 0.9792123904549578 }
    }
  },
  {
    key: 1082, // 水泵1旁边的门
    point: {
      pos: { x: 478865.9719000889, y: 5469923.766243059, z: -299.22228472097436 },
      target: { x: 478874.04323722934, y: 5469930.774127019, z: -299.8659864113681 },
      up: { x: -0.0029985054625314166, y: 0.09489263018176103, z: 0.995482997193929 }
    }
  },
  {
    key: 120, // 采区变电所
    point: {
      pos: { x: 478898.8696286729, y: 5469968.429276015, z: -286.59161047663497 },
      target: { x: 478924.8999586219, y: 5469957.396000622, z: -298.5756464069718 },
      up: { x: 0.3182702441172027, y: -0.244092271972264, z: 0.9160365792221458 }
    }
  },
  {
    key: 1104, // 开关
    point: {
      pos: { x: 478919.90561373025, y: 5469960.356178438, z: -297.7751866208752 },
      target: { x: 478923.6672050898, y: 5469957.936497765, z: -298.41069729400135 },
      up: { x: 0.08846734169956127, y: -0.12210969687500403, z: 0.9885660075997562 }
    }
  },
  {
    key: 1105, // 开关
    point: {
      pos: { x: 478918.86575868016, y: 5469954.889243844, z: -298.3839548891691 },
      target: { x: 478920.9500979751, y: 5469953.575006575, z: -298.6582663818097 },
      up: { x: 0.06425274928317382, y: -0.10522768996983, z: 0.9923702522109282 }
    }
  },
  {
    key: 1102, // 变压器
    point: {
      pos: { x: 478926.23905378114, y: 5469974.583639634, z: -295.68303824748 },
      target: { x: 478931.4391602095, y: 5469971.640196207, z: -297.2349049744393 },
      up: { x: 0.18952399114625906, y: -0.17459577635605847, z: 0.9662282192415164 }
    }
  },
  {
    key: 1111, // ⾼压配电开关01
    point: {
      pos: { x: 478932.5856694268, y: 5469966.174751257, z: -296.77556463950737 },
      target: { x: 478929.3786740708, y: 5469968.119374384, z: -297.177328803808 },
      up: { x: -0.10387303158717845, y: 0.034061253710966105, z: 0.9940071550570141 }
    }
  },
  {
    key: 1108, // ⾼压配电开关02
    point: {
      pos: { x: 478928.2427456934, y: 5469958.898222878, z: -297.3290462274842 },
      target: { x: 478925.03575033747, y: 5469960.842846005, z: -297.7308103917848 },
      up: { x: -0.10387303158717845, y: 0.034061253710966105, z: 0.9940071550570141 }
    }
  }
]

const selectMenu = [{
  key: 0,
  point: {
    pos: { x: 477913.9738571264, y: 5466880.540277503, z: 716.0623340960942 },
    target: { x: 478498.7802206801, y: 5470828.477398603, z: -535.8389322914084 },
    up: { x: -0.01585983956788394, y: 0.3043653134837632, z: 0.9524233415014697 }
  }
}, {
  key: 1,
  point: {
    pos: { x: 479186.540387876, y: 5470978.040359191, z: -297.7634897408839 },
    target: { x: 479240.8362324673, y: 5470944.045408937, z: -297.42159783413337 },
    up: { x: -0.009698816173113634, y: -0.005434267564108024, z: 0.9999381989407644 }
  }
}, {
  key: 2,
  point: {
    pos: { x: 478806.03005293506, y: 5471557.1533637345, z: 263.52703079926886 },
    target: { x: 479298.2015026486, y: 5470428.8855672935, z: -387.58677833247253 },
    up: { x: 0.17755880878742947, y: -0.4326416624554006, z: 0.8839084009838566 }
  }
}, {
  key: 3,
  point: {
    pos: { x: 479477.19051808136, y: 5470886.150402903, z: -147.38469512831026 },
    target: { x: 479352.03061538585, y: 5470888.2682701, z: -227.10141557348376 },
    up: { x: -0.5367511757383469, y: -0.06930646311372451, z: 0.8408892849324361 }
  }
},
  {
    key: 4,
    point: {
      pos: { x: 479637.65656862373, y: 5469959.9735368, z: 168.81380787628092 },
      target: { x: 478826.7941466337, y: 5470011.497339046, z: -321.13006682861953 },
      up: { x: -0.5191108455135393, y: -0.06742817357188005, z: 0.8520430572917033 }
    }
  },
  {
    key: 5,
    point: {
      pos: { x: 478308.50148841814, y: 5469026.047213141, z: 538.8820042796414 },
      target: { x: 478742.37109467137, y: 5470215.612985939, z: -122.97768989702361 },
      up: { x: 0.02139713395751441, y: 0.4801165361639207, z: 0.876943712196169 }
    }
  },
  {
    key: 6,
    point: {
      pos: { x: 478911.83064312855, y: 5469938.054721495, z: -296.78258276955586 },
      target: {
        x: 478923.17501288414,
        y: 5469959.891526282,
        z: -301.4910630416149 },
      up: {
        x: 0.003599918429359775,
        y: 0.2089884199643447,
        z: 0.9779114893016265}
    }
  }
]

const waterPoi = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/shuibeng/shuibeng.FBX'
    },
    'list': [
      {
        'key': 1083,
        'cate': 0,
        'type': 0,
        'name': '水泵2',
        'levelId': 1003,
        'id': 1083,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'icon': 'sbny-ksjx.png',
          'title': '水泵2',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478884.69520539977,
            'y': 5469941.134844687,
            'z': -301.40807756549947
          },
          'rotation': {
            'x': -0.0088723520874689,
            'y': -0.04714900436593125,
            'z': -2.322068412357775
          },
          'scale': {
            'x': 0.49,
            'y': 0.49,
            'z': 0.49
          }
        }
      },
      {
        'key': 1084,
        'cate': 0,
        'type': 0,
        'name': '水泵1',
        'levelId': 1003,
        'id': 1084,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'icon': 'sbny-ksjx.png',
          'title': '水泵1',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478878.6154498846,
            'y': 5469934.381547764,
            'z': -301.70521260876666
          },
          'rotation': {
            'x': -0.0088723520874689,
            'y': -0.04714900436593125,
            'z': -2.322068412357775
          },
          'scale': {
            'x': 0.49,
            'y': 0.49,
            'z': 0.49
          }
        }
      },
      {
        'key': 1085,
        'cate': 0,
        'type': 0,
        'name': '水泵3',
        'levelId': 1003,
        'id': 1085,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag vehicle',
          'icon': 'sbny-ksjx.png',
          'title': '水泵3',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 2,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478890.8471435182,
            'y': 5469947.947768897,
            'z': -301.1697053787289
          },
          'rotation': {
            'x': -0.0088723520874689,
            'y': -0.04714900436593125,
            'z': -2.322068412357775
          },
          'scale': {
            'x': 0.49,
            'y': 0.49,
            'z': 0.49
          }
        }
      }
    ]
  },

  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/exit.FBX'
    },
    'list': [
      {
        'key': 1081,
        'cate': 0,
        'type': 0,
        'name': '防水门',
        'levelId': 1003,
        'id': 1081,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fsdoor',
          'icon': 'sbny-ksjx.png',
          'title': '防水门',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478873.91661451524,
            'y': 5469931.318645205,
            'z': -301.23343726519323
          },
          'rotation': {
            'x': -0.0314109231875939,
            'y': -0.05667213201359495,
            'z': -2.3749903902443283
          },
          'scale': {
            'x': 0.7739337661921885,
            'y': 0.7739337661921885,
            'z': 0.7739337661921885
          }
        }
      },
      {
        'key': 1082,
        'cate': 0,
        'type': 0,
        'name': '防水门',
        'levelId': 1003,
        'id': 1082,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag fsdoor',
          'icon': 'sbny-ksjx.png',
          'title': '防水门',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0,
              'z': 4
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478892.9557648823,
            'y': 5469952.678855121,
            'z': -300.3388087104815
          },
          'rotation': {
            'x': -0.02901564097446627,
            'y': -0.05915468085564618,
            'z': -2.3230655213982296
          },
          'scale': {
            'x': 0.7739337661921885,
            'y': 0.7739337661921885,
            'z': 0.7739337661921885
          }
        }
      }
    ]
  }
]
const electricPoi = [
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/bianyaqi/bianyaqi.FBX'
    },
    'list': [
      {
        'key': 1102,
        'cate': 0,
        'type': 0,
        'name': '变压器01',
        'levelId': 1003,
        'id': 1102,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '变压器01',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0.25,
              'z': 1.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          }

        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478931.3768862811,
            'y': 5469971.709089209,
            'z': -298.1410466416575
          },
          'rotation': {
            'x': 0.03962514155537778,
            'y': -0.05596289231146382,
            'z': 2.643086939825913
          },
          'scale': {
            'x': 1.3685022393971122,
            'y': 1.3685022393971122,
            'z': 1.3685022393971122
          }
        }
      },
      {
        'key': 1103,
        'cate': 0,
        'type': 0,
        'name': '变压器02',
        'levelId': 1003,
        'id': 1103,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '变压器02',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0,
              'y': 0.25,
              'z': 1.5
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': ''
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478927.0368006591,
            'y': 5469963.739721741,
            'z': -298.7003279644994
          },
          'rotation': {
            'x': 0.03962514155537778,
            'y': -0.05596289231146382,
            'z': 2.643086939825913
          },
          'scale': {
            'x': 1.3685022393971122,
            'y': 1.3685022393971122,
            'z': 1.3685022393971122
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/fangbaokaiguan/fangbaokaiguan.FBX'
    },
    'list': [
      {
        'key': 1104,
        'cate': 0,
        'type': 0,
        'name': '防爆馈电开关01',
        'levelId': 1003,
        'id': 1104,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '防爆馈电开关01',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0.25,
              'y': -0.25,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1104
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478925.29518371256,
            'y': 5469958.2150414735,
            'z': -299.02703049385485
          },
          'rotation': {
            'x': 0.03962514155537776,
            'y': -0.055962892311463806,
            'z': -2.0538406727951872
          },
          'scale': {
            'x': 1.877346649034747,
            'y': 1.877346649034747,
            'z': 1.877346649034747
          }
        }
      },
      {
        'key': 1105,
        'cate': 0,
        'type': 0,
        'name': '防爆馈电开关02',
        'levelId': 1003,
        'id': 1105,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '防爆馈电开关02',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0.25,
              'y': -0.25,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1105
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478922.61475278065,
            'y': 5469953.450129461,
            'z': -299.3662191157468
          },
          'rotation': {
            'x': 0.03962514155537776,
            'y': -0.055962892311463806,
            'z': -2.0538406727951872
          },
          'scale': {
            'x': 1.877346649034747,
            'y': 1.877346649034747,
            'z': 1.877346649034747
          }
        }
      },
      {
        'key': 1106,
        'cate': 0,
        'type': 0,
        'name': '防爆馈电开关03',
        'levelId': 1003,
        'id': 1106,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '防爆馈电开关03',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0.25,
              'y': -0.25,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1106
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478920.2548099091,
            'y': 5469948.987737126,
            'z': -299.6754457840162
          },
          'rotation': {
            'x': 0.03962514155537776,
            'y': -0.055962892311463806,
            'z': -2.0538406727951872
          },
          'scale': {
            'x': 1.877346649034747,
            'y': 1.877346649034747,
            'z': 1.877346649034747
          }
        }
      },
      {
        'key': 1107,
        'cate': 0,
        'type': 0,
        'name': '防爆馈电开关04',
        'levelId': 1003,
        'id': 1107,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '防爆馈电开关04',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': 0.25,
              'y': -0.25,
              'z': 1
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1107
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478917.71021457063,
            'y': 5469944.331063296,
            'z': -300.0027275298261
          },
          'rotation': {
            'x': 0.03962514155537776,
            'y': -0.055962892311463806,
            'z': -2.0538406727951872
          },
          'scale': {
            'x': 1.877346649034747,
            'y': 1.877346649034747,
            'z': 1.877346649034747
          }
        }
      }
    ]
  },
  {
    'modelurl': {
      'isPublic': true,
      'fbx': '/pmodel/zhmk/other/gaoyakaiguan/gaoyakaiguan.FBX'
    },
    'list': [
      {
        'key': 1108,
        'cate': 0,
        'type': 0,
        'name': '高压配电开关02',
        'levelId': 1003,
        'id': 1108,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '高压配电开关02',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': -0.5,
              'y': 0.25,
              'z': 1.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 1108
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478924.07668491005,
            'y': 5469961.472823783,
            'z': -298.9091425666679
          },
          'rotation': {
            'x': 0.039625141555377774,
            'y': -0.05596289231146381,
            'z': -0.49422734895593295
          },
          'scale': {
            'x': 1.5456219881953084,
            'y': 1.5456219881953084,
            'z': 1.5456219881953084
          }
        }
      },
      {
        'key': 1109,
        'cate': 0,
        'type': 0,
        'name': '高压配电开关03',
        'levelId': 1003,
        'id': 1109,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '高压配电开关03',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': -0.5,
              'y': 0.25,
              'z': 1.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1109
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478920.58322675526,
            'y': 5469954.992099802,
            'z': -299.3619387821954
          },
          'rotation': {
            'x': 0.039625141555377774,
            'y': -0.05596289231146381,
            'z': -0.49422734895593295
          },
          'scale': {
            'x': 1.5456219881953084,
            'y': 1.5456219881953084,
            'z': 1.5456219881953084
          }
        }
      },
      {
        'key': 1110,
        'cate': 0,
        'type': 0,
        'name': '高压配电开关04',
        'levelId': 1003,
        'id': 1110,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '高压配电开关04',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': -0.5,
              'y': 0.25,
              'z': 1.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showSwitch',
              'props': {
                'key': 1110
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478916.93963376596,
            'y': 5469948.23286027,
            'z': -299.83419436487856
          },
          'rotation': {
            'x': 0.039625141555377774,
            'y': -0.05596289231146381,
            'z': -0.49422734895593295
          },
          'scale': {
            'x': 1.5456219881953084,
            'y': 1.5456219881953084,
            'z': 1.5456219881953084
          }
        }
      },
      {
        'key': 1111,
        'cate': 0,
        'type': 0,
        'name': '高压配电开关01',
        'levelId': 1003,
        'id': 1111,
        'visible': true,
        'scopedSlots': {
          'cate': '2d',
          'class': 'interest-tag elec',
          'icon': 'sbny-ksjx.png',
          'title': '高压配电开关01',
          'style': {
            'height': '32px',
            'width': '32px',
            'offsetH': '-16px',
            'textPos': 'center',
            'backgroundColor': '#88888888',
            'pos': {
              'x': -0.5,
              'y': 0.25,
              'z': 1.25
            },
            'fontStyle': 'font-size: 14px;font-weight: 300 ; color:#e6e6e6;'
          },
          'callback': {
            'onclick': {
              'iframeParent': true,
              'funname': 'showProps',
              'props': {
                'key': 1111
              }
            }
          }
        },
        'gem': {
          'color': '0xF4F4F4',
          'position': {
            'x': 478927.8360173797,
            'y': 5469968.446771948,
            'z': -298.4218856883145
          },
          'rotation': {
            'x': 0.039625141555377774,
            'y': -0.05596289231146381,
            'z': -0.49422734895593295
          },
          'scale': {
            'x': 1.5456219881953084,
            'y': 1.5456219881953084,
            'z': 1.5456219881953084
          }
        }
      }
    ]
  }
]
export const getKeyTypeList = () => {
  return keyTypeList
}
export const getTreeDataUse = () => {
  return treeDataUse
}
export const getSelectMenu = () => {
  return selectMenu
}
export const getSelectMap = () => {
  return selectMap
}
export const getPoiSbMap = () => {
  return poiJsonSb
}
export const getPoiWorkMap = () => {
  return poiJsonWork
}
export const getPoiCameraMap = () => {
  return poiJsonCamera
}
export const getPoiEscapeMap = () => {
  return poiJsonEscape
}
export const getMapLeavel = () => {
  return mapLevel
}
export const getInnerMapLeavel = () => {
  return mapInner
}
export const getMapLevelScene = () => {
  return mapLevelScene
}
export const getWaterPoi = () => {
  return waterPoi
}
export const getElectricPoi = () => {
  return electricPoi
}
