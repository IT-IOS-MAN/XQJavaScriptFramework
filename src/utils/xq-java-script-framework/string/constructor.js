//
//  Array Extend
//
//  Created by IT_IOS_MAN on 2022/11/18.
//  优秀的代码千篇一律，优雅的架构万里挑一
//  Copyright © 2020 IT_IOS_MAN. All rights reserved.
//

/// <reference path="./ext.d.ts" /> 

String.prototype.xq_isEmpty = function () {
    return this.xq_isNull() || this.length == 0;
}

String.prototype.xq_isNotEmpty = function () {
    return !this.xq_isEmpty();
}