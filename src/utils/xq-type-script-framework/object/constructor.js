//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/// <reference path="./ext.d.ts" /> 

Object.prototype.xq_isNull = function () {
  if (typeof this == 'boolean') {
    return false;
  }
  if (typeof this == 'number') {
    return false;
  }
  if (this instanceof Array) {
    if (this.length == 0) return true;
  } else if (this instanceof Object) {
    if (JSON.stringify(this) === '{}') return true;
  } else {
    if (this == 'null' || this == null || this == 'undefined' || this == undefined || this == '') return true;
    return false;
  }
  return false;

}

Object.prototype.xq_isNotNull = function() {
  return !this.xq_isNull();
}
