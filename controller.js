function onEdit(e) {
    const activeSpreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const activeSheet = activeSpreadsheet.getActiveSheet();
    const activeSheetName = activeSheet.getName();

    console.log("シート名:" + activeSheetName);

    if (!isTargetSheet(activeSheetName)) {

        return console.log("監視対象シートではないので処理を終了します");
    }

    const activeCell = activeSheet.getActiveCell();
    const activeCellRow = activeCell.getRow();
    const activeCellColumn = activeCell.getColumn();
    const activeValue = activeCell.getValue();
    const oldValue = e.oldValue;

    console.log("ActiveCellColumn: " + activeCellColumn);
    console.log("ActiveCellRow: " + activeCellRow);

    if (needRemind(activeCellColumn, oldValue)) {

        let mapNo = activeSheet.getRange(activeCellRow, 1).getValue();
        let area = activeSheet.getRange(activeCellRow, 2).getValue();
        const staff = activeSheet.getRange(activeCellRow, 3).getValue();
        const status = activeValue;

        //セルが空だったらひとつ上のセルを参照する
        //汚いけど一旦これで
        if (mapNo == "") {

            for (var row = activeCellRow; row > 0; row--) {

                mapNo = activeSheet.getRange(row, 1).getValue();

                if (mapNo != "") {

                    break;
                }
            }
        }

        if (area == "") {

            for (var row = activeCellRow; row > 0; row--) {

                area = activeSheet.getRange(row, 2).getValue();

                if (area != "") {

                    break;
                }
            }
        }

        return editRemind(mapNo, area, staff, status);
    }
}