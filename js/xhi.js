/*
 * xhi.js - common root module
*/
/*jslint         browser : true, continue : true,
   devel : true,  indent : 2,      maxerr : 50,
  newcap : true,   nomen : true, plusplus : true,
  regexp : true,  sloppy : true,     vars : false,
   white : true,    todo : true,  unparam : true
*/
/*global xhi:true */

var xhi = (function () {
  // ================= BEGIN MODULE SCOPE VARIABLES ====================
  'use strict';
  //noinspection MagicNumberJS
  var
    __Object  = Object,

    vMap = {
      // We will need these eventually ...
      // __typeof = function ( a ) { return typeof a; },
      // __Array  = Array,
      // __Date   = Date,
      _100p_        : '100%',
      _String_      : String,
      _Number_      : Number,
      _Object_      : __Object,
      _JSON_        : JSON,

      _activeElement_   : 'activeElement',
      _add_             : 'add',
      _addClass_        : 'addClass',
      _ajax_            : 'ajax',
      _append_          : 'append',
      _appendChild_     : 'appendChild',
      _appendTo_        : 'appendTo',
      _apply_           : 'apply',
      _bind_            : 'bind',
      _blur_            : 'blur',
      _body_            : 'body',
      _blank_           : '',
      _block_           : 'block',
      _call_            : 'call',
      _carouscroll_     : 'carouscroll',
      _children_        : 'children',
      _clone_           : 'clone',
      _closest_         : 'closest',
      _concat_          : 'concat',
      _css_             : 'css',
      _cssText_         : 'cssText',
      _createElement_   : 'createElement',
      _createTextNode_  : 'createTextNode',
      _data_            : 'data',
      _disabled_        : 'disabled',
      _display_         : 'display',
      _done_            : 'done',
      _each_            : 'each',
      _empty_           : 'empty',
      _extend_          : 'extend',
      _eq_              : 'eq',
      _fadeIn_          : 'fadeIn',
      _fadeOut_         : 'fadeOut',
      _fail_            : 'fail',
      _false_           : false,
      _filter_          : 'filter',
      _find_            : 'find',
      _focus_           : 'focus',
      _font_weight_     : 'font-weight',
      _forEach_         : 'forEach',
      _fromCharCode_    : 'fromCharCode',
      _getElsByTagName_ : 'getElementsByTagName',
      _get_             : 'get',
      _getKeys_         : __Object.keys,
      _id_              : 'id',
      _index_           : 'index',
      _indexOf_         : 'indexOf',
      _innerHTML_       : 'innerHTML',
      _innerText_       : 'innerText',
      _hasOwnProp_      : 'hasOwnProperty',
      _hasClass_        : 'hasClass',
      _head_            : 'head',
      _hide_            : 'hide',
      _html_            : 'html',
      _height_          : 'height',
      _join_            : 'join',
      _keyup_           : 'keyup',
      _keydown_         : 'keydown',
      _left_            : 'left',
      _length_          : 'length',
      _map_             : 'map',
      _makeDsObj_       : 'makeDragScrollObj',
      _null_            : null,
      _on_              : 'on',
      _onload_          : 'onload',
      _outerHeight_     : 'outerHeight',
      _outerHTML_       : 'outerHTML',
      _outerWidth_      : 'outerWidth',
      _offset_          : 'offset',
      _parent_          : 'parent',
      _parse_           : 'parse',
      _pop_             : 'pop',
      _prepend_         : 'prepend',
      _prop_            : 'prop',
      _push_            : 'push',
      _remove_          : 'remove',
      _removeAttr_      : 'removeAttr',
      _removeClass_     : 'removeClass',
      _removeChild_     : 'removeChild',
      _replace_         : 'replace',
      _right_           : 'right',
      _scroll_          : 'scroll',
      _scrollHeight_    : 'scrollHeight',
      _scrollLeft_      : 'scrollLeft',
      _scrollTop_       : 'scrollTop',
      _setAttribute_    : 'setAttribute',
      _shift_           : 'shift',
      _show_            : 'show',
      _slice_           : 'slice',
      _splice_          : 'splice',
      _split_           : 'split',
      _stringify_       : 'stringify',
      _style_           : 'style',
      _target_          : 'target',
      _text_            : 'text',
      _textContent_     : 'textContent',
      _text_css_        : 'text/css',
      _then_            : 'then',
      _transitionend_   : 'transitionend',
      _toggle_          : 'toggle',
      _toggleClass_     : 'toggleClass',
      _top_             : 'top',
      _toString_        : 'toString',
      _toUpperCase_     : 'toUpperCase',
      _trigger_         : 'trigger',
      _true_            : true,
      _unbind_          : 'unbind',
      _undef_           : undefined,
      _unshift_         : 'unshift',
      _udragstart_      : 'udragstart',
      _udragmove_       : 'udragmove',
      _udragend_        : 'udragend',
      _uheldstart_      : 'uheldstart',
      _uheldmove_       : 'uheldmove',
      _uheldend_        : 'uheldend',
      _utap_            : 'utap',
      _val_             : 'val',
      _when_            : 'when',
      _width_           : 'width',
      _z_index_         : 'z-index',

      // css psuedo selectors
      _qfocus_      : ':focus'
    },
    nMap = {
      _n1000_  : -1000,
      _n4_     : -4,
      _n3_     : -3,
      _n2_     : -2,
      _n1_     : -1,
      _d1_     : 0.1,
      _d2_     : 0.2,
      _d5_     : 0.5,
      _0_      : 0,
      _1_      : 1,
      _2_      : 2,
      _3_      : 3,
      _4_      : 4,
      _5_      : 5,
      _6_      : 6,
      _7_      : 7,
      _8_      : 8,
      _9_      : 9,
      _10_     : 10,
      _11_     : 11,
      _12_     : 12,
      _19_     : 19,
      _22_     : 22,
      _30_     : 30,
      _50_     : 50,
      _100_    : 100,
      _200_    : 200,
      _250_    : 250,
      _500_    : 500,
      _800_    : 800,
      _1000_   : 1000,
      _2000_   : 2000,
      _3000_   : 3000,
      _4000_   : 4000,
      _5000_   : 5000
    }
    ;
  // ================== END MODULE SCOPE VARIABLES =====================

  // ====================== BEGIN PUBLIC METHODS =======================
  return {
    _nMap_ : nMap,
    _vMap_ : vMap
  };
  // ======================= END PUBLIC METHODS ========================
}());

// Node support
try { xhi._vMap_._document = document; }
catch( e1 ) { 
  try { 
    xhi._vMap_._document_ = global;
    global.xhi = xhi;
    console.warn( 'node...' );
  }
  catch( e2 ) { throw '_not_a_browser_or_node_'; }
}