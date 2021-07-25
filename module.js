function isTargetSheet(activeSheetName) {

    if (activeSheetName == "Aエリア") {

        return true;

    } else if (activeSheetName == "Cエリア") {

        return true;

    } else {

        return false;
    }
}

function needRemind(activeCellColumn, oldValue) {

    if (activeCellColumn != 4) {

        console.log("通知対象外");
        return false;

    } else if (oldValue != null) {

        console.log("通知対象外");
        return false;

    } else {

        return true;
    }
}

function editRemind(mapNo, area, staff, status) {

    console.log("通知対象: " + "\n"
        + "---------" + "\n"
        + "mapNo: " + mapNo + "\n"
        + "area: " + area + "\n"
        + "staff: " + staff + "\n"
        + "status: " + status + "\n"
        + "---------"
    );

    /* 参考
        https://qiita.com/nakagawa1017/items/8b966af00fe271ff05fb
    */
    const message = ("以下の物品のステータスが変更されました: " + "\\n"
            + "---------" + "\\n"
            + "mapNo: " + mapNo + "\\n"
            + "area: " + area + "\\n"
            + "staff: " + staff + "\\n"
            + "status: " + status + "\\n"
            + "---------"
        );

    return Browser.msgBox(message, Browser.Buttons.OK);
}