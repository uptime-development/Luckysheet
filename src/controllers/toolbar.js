import locale from '../locale/locale';
import luckysheetConfigsetting from './luckysheetConfigsetting';

import { getObjType, camel2split } from '../utils/util';

// 默认的工具栏按钮
export const defaultToolbar = [
    'undo',
    'redo',
    '|',
    'numberDecrease',
    'numberIncrease',
    '|',
    'fontSize',
    '|',

    'bold',
    'italic',
    'strikethrough',
    'underline',
    'textColor',
    '|',

    'fillColor',
    'border',
    'mergeCell',
    '|',

    'horizontalAlignMode',
    'verticalAlignMode',
    '|',

    'link',
    'postil',
    '|',

    'function',
    'frozenMode',
    '|',
    'importExcel',
];

// 工具栏按钮 id 关系
export const toolbarIdMap = {
    undo: '#luckysheet-icon-undo', //Undo redo
    redo: '#luckysheet-icon-redo',
    paintFormat: ['#luckysheet-icon-paintformat'], //Format brush
    currencyFormat: '#luckysheet-icon-currency', //currency format
    percentageFormat: '#luckysheet-icon-percent', //Percentage format
    numberDecrease: '#luckysheet-icon-fmt-decimal-decrease', //'Decrease the number of decimal places'
    numberIncrease: '#luckysheet-icon-fmt-decimal-increase', //'Increase the number of decimal places
    moreFormats: '#luckysheet-icon-fmt-other', //'More Formats'
    font: '#luckysheet-icon-font-family', //'font'
    fontSize: '#luckysheet-icon-font-size', //'Font size'
    bold: '#luckysheet-icon-bold', //'Bold (Ctrl+B)'
    italic: '#luckysheet-icon-italic', //'Italic (Ctrl+I)'
    strikethrough: '#luckysheet-icon-strikethrough', //'Strikethrough (Alt+Shift+5)'
    underline: '#luckysheet-icon-underline', //'Underline (Alt+Shift+6)'
    textColor: ['#luckysheet-icon-text-color', '#luckysheet-icon-text-color-menu'], //'Text color'
    fillColor: ['#luckysheet-icon-cell-color', '#luckysheet-icon-cell-color-menu'], //'Cell color'
    border: ['#luckysheet-icon-border-all', '#luckysheet-icon-border-menu'], //'border'
    mergeCell: ['#luckysheet-icon-merge-button', '#luckysheet-icon-merge-menu'], //'Merge cells'
    horizontalAlignMode: ['#luckysheet-icon-align', '#luckysheet-icon-align-menu'], //'Horizontal alignment'
    verticalAlignMode: ['#luckysheet-icon-valign', '#luckysheet-icon-valign-menu'], //'Vertical alignment'
    textWrapMode: ['#luckysheet-icon-textwrap', '#luckysheet-icon-textwrap-menu'], //'Wrap mode'
    textRotateMode: ['#luckysheet-icon-rotation', '#luckysheet-icon-rotation-menu'], //'Text Rotation Mode'
    image: '#luckysheet-insertImg-btn-title', //'Insert link'
    link: '#luckysheet-insertLink-btn-title', //'Insert picture'
    chart: '#luckysheet-chart-btn-title', //'chart' (the icon is hidden, but if the chart plugin is configured, you can still create a new chart by right click)
    postil: '#luckysheet-icon-postil', //'comment'
    pivotTable: ['#luckysheet-pivot-btn-title'], //'PivotTable'
    function: ['#luckysheet-icon-function', '#luckysheet-icon-function-menu'], //'formula'
    frozenMode: ['#luckysheet-freezen-btn-horizontal', '#luckysheet-icon-freezen-menu'], //'freeze mode'
    sortAndFilter: '#luckysheet-icon-autofilter', //'sort and filter'
    conditionalFormat: '#luckysheet-icon-conditionformat', //'Conditional Format'
    dataVerification: '#luckysheet-dataVerification-btn-title', // 'Data Verification'
    splitColumn: '#luckysheet-splitColumn-btn-title', //'Split column'
    screenshot: '#luckysheet-chart-btn-screenshot', //'screenshot'
    findAndReplace: '#luckysheet-icon-seachmore', //'Find and Replace'
    protection: '#luckysheet-icon-protection', // 'Worksheet protection'
    print: '#luckysheet-icon-print', // 'print'
    importExcel: '#luckysheet-import-excel' // 'print'
};

// 创建工具栏按钮的html
export function createToolbarHtml() {
    const toolbar = locale().toolbar;
    const fontarray = locale().fontarray;
    const defaultFmtArray = locale().defaultFmt;
    const htmlMap = {
        undo: `<div class="luckysheet-toolbar-button luckysheet-inline-block disabled" data-tips="${toolbar.undo}"
        id="luckysheet-icon-undo" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-undo iconfont luckysheet-iconfont-qianjin"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        redo: `<div class="luckysheet-toolbar-button luckysheet-inline-block disabled" data-tips="${toolbar.redo}"
        id="luckysheet-icon-redo" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-redo iconfont luckysheet-iconfont-houtui"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
        numberDecrease: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.numberDecrease}"
        id="luckysheet-icon-fmt-decimal-decrease" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block toolbar-decimal-icon"
                    style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-decimal-increase iconfont luckysheet-iconfont-jianxiaoxiaoshuwei" style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Decrease the number of decimal places'
        numberIncrease: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.numberIncrease}"
        id="luckysheet-icon-fmt-decimal-increase" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block toolbar-decimal-icon"
                    style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-decimal-increase iconfont luckysheet-iconfont-zengjiaxiaoshuwei" style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Increase the number of decimal places
        fontSize: `<div class="luckysheet-toolbar-select luckysheet-toolbar-zoom-combobox luckysheet-toolbar-combo-button luckysheet-inline-block"
        data-tips="${toolbar.fontSize}" id="luckysheet-icon-font-size" style="user-select: none;">
            <div class="luckysheet-toolbar-combo-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-combo-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div aria-posinset="4" aria-setsize="7" class="luckysheet-inline-block luckysheet-toolbar-combo-button-caption"
                    style="user-select: none;">
                        <input aria-label="${toolbar.fontSize}" class="luckysheet-toolbar-combo-button-input luckysheet-toolbar-textinput"
                        role="combobox" style="user-select: none;" tabindex="-1" type="text" value="10"
                        />
                    </div>
                    <div class="luckysheet-toolbar-combo-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Font size'
        bold: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.bold}"
        id="luckysheet-icon-bold" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-bold iconfont luckysheet-iconfont-jiacu"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Bold (Ctrl+B)'
        italic: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.italic}"
        id="luckysheet-icon-italic" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-italic iconfont luckysheet-iconfont-wenbenqingxie1"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Italic (Ctrl+I)'
        strikethrough: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.strikethrough}"
        id="luckysheet-icon-strikethrough" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-strikethrough iconfont luckysheet-iconfont-wenbenshanchuxian"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Strikethrough (Alt+Shift+5)'
        underline: `<div class="luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.underline}"
        id="luckysheet-icon-underline" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-underline iconfont luckysheet-iconfont-wenbenxiahuaxian"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>`, //'Underline (Alt+Shift+6)'
        textColor: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-text-color"
        data-tips="${toolbar.textColor}" id="luckysheet-icon-text-color" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-color-menu-button-indicator" style="border-bottom-color: rgb(0, 0, 0); user-select: none;">
                            <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                                <div class="text-color-bar" style="background-color:${luckysheetConfigsetting.defaultTextColor}"></div>
                                <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-text-color iconfont luckysheet-iconfont-wenbenyanse"
                                style="user-select: none;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.chooseColor}..." id="luckysheet-icon-text-color-menu" role="button"
        style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Text color'
        fillColor: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-cell-color"
        data-tips="${toolbar.fillColor}" id="luckysheet-icon-cell-color" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-color-menu-button-indicator" style="border-bottom-color: rgb(255, 255, 255); user-select: none;">
                            <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                                <div class="text-color-bar" style="background-color:${luckysheetConfigsetting.defaultCellColor}"></div>
                                <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-cell-color iconfont luckysheet-iconfont-tianchong"
                                style="user-select: none;">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.chooseColor}..." id="luckysheet-icon-cell-color-menu" role="button"
        style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Cell color'
        border: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-border-all"
        data-tips="${toolbar.border}" id="luckysheet-icon-border-all" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-border-all iconfont luckysheet-iconfont-quanjiabiankuang"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.borderStyle}..." id="luckysheet-icon-border-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'border'
        mergeCell: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-merge-button"
        data-tips="${toolbar.mergeCell}" id="luckysheet-icon-merge-button" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-merge iconfont luckysheet-iconfont-hebing"
                        style="user-select: none;">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.chooseMergeType}..." id="luckysheet-icon-merge-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Merge cells'
        horizontalAlignMode: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-align"
        data-tips="${toolbar.horizontalAlign}" id="luckysheet-icon-align" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-align-left iconfont luckysheet-iconfont-wenbenzuoduiqi"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.alignment}..." id="luckysheet-icon-align-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Horizontal alignment'
        verticalAlignMode: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-valign"
        data-tips="${toolbar.verticalAlign}" id="luckysheet-icon-valign" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-valign-bottom iconfont luckysheet-iconfont-dibuduiqi"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.alignment}..." id="luckysheet-icon-valign-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Vertical alignment'
        textWrapMode: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-textwrap"
        data-tips="${toolbar.textWrap}" id="luckysheet-icon-textwrap" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-textwrap-clip iconfont luckysheet-iconfont-jieduan"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.textWrapMode}..." id="luckysheet-icon-textwrap-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'Wrap mode'

        link: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block" data-tips="${toolbar.insertLink}" id="luckysheet-insertLink-btn-title" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block" style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-rotation-none iconfont luckysheet-iconfont-lianjie" style="user-select: none;"> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Insert link'(TODO)
        postil: `<div class="luckysheet-toolbar-select luckysheet-toolbar-menu-button luckysheet-inline-block" data-tips="${toolbar.postil}"
        id="luckysheet-icon-postil" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon-img-container luckysheet-toolbar-menu-button-caption luckysheet-inline-block iconfont luckysheet-iconfont-zhushi"
                    style="user-select: none;">
                    </div>
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'comment'
        function: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-icon-function"
        data-tips="${toolbar.autoSum}" id="luckysheet-icon-function" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                        <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-function iconfont luckysheet-iconfont-jisuan"
                        style="user-select: none;">
                        </div>
                    </div>
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        ${toolbar.sum}
                    </div>
                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.moreFunction}..." id="luckysheet-icon-function-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'formula'
        frozenMode: `<div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block luckysheet-freezen-btn-horizontal"
        data-tips="${toolbar.freezeTopRow}" id="luckysheet-freezen-btn-horizontal" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">

                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block"
                    style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
                            <div aria-hidden="true" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-rotation-none iconfont luckysheet-iconfont-dongjie1"
                            style="user-select: none;">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div class="luckysheet-toolbar-button-split-right luckysheet-toolbar-menu-button luckysheet-inline-block"
        data-tips="${toolbar.moreOptions}..." id="luckysheet-icon-freezen-menu" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-menu-button-outer-box luckysheet-inline-block"
            style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block"
                style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-dropdown luckysheet-inline-block iconfont luckysheet-iconfont-xiayige"
                    style="user-select: none;">
                    </div>
                </div>
            </div>
        </div>`, //'freeze mode'
        importExcel: `<input id="luckysheet-excelUpload" type="file" accept=".xlsx" style="display:none;" />
        <div class="luckysheet-toolbar-button-split-left luckysheet-toolbar-button luckysheet-inline-block" id="luckysheet-import-excel" role="button" style="user-select: none;">
            <div class="luckysheet-toolbar-button-outer-box luckysheet-inline-block" style="user-select: none;">
                <div class="luckysheet-toolbar-menu-button-inner-box luckysheet-inline-block" style="user-select: none;">
                    <div class="luckysheet-toolbar-menu-button-caption luckysheet-inline-block" style="user-select: none;">
                        <div class="luckysheet-icon luckysheet-inline-block " style="user-select: none;">
<svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" viewBox="0 0 1000 1000" class="luckysheet-icon-img-container luckysheet-icon-img luckysheet-icon-rotation-none" style="user-select: none; padding: 4px;">
  <path d="M279 17a98 98 0 0 0-62 62c-4 11-5 16-6 72l-1 60-100 1H10v631h201l1 28c1 24 2 31 6 44 9 29 28 52 53 64l14 7 306 1c341 0 320 1 345-13 16-8 35-27 43-43 12-24 11-5 11-329V305L864 159 738 13H513c-216 0-224 0-234 4zm414 159 1 97 5 14a115 115 0 0 0 81 75c14 3 21 4 84 4l69 1c2 4-6 501-8 508-5 19-24 37-43 41-7 1-98 2-288 2l-278-1-10-5c-19-11-29-29-31-54l-1-15h398V212H275v-42c0-52 1-57 17-73 18-18 3-17 215-17h186v96zm-85 352v252H73V276h535v252z"/>
  <path d="m197 401 56 76 32 42-10 12-69 87-60 76 56-1h56l39-51 40-53c1 0 19 23 39 52l37 53h111l-12-16c-23-30-118-154-119-157-1-1 19-28 56-76l57-76c1-1-24-1-56-1h-56l-27 40-29 40-27-40-25-40H173l24 33z"/>
</svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>`, // 'Insert link'(TODO)
    };

    const showtoolbar = luckysheetConfigsetting.showtoolbar;
    const showtoolbarConfig = luckysheetConfigsetting.showtoolbarConfig;

    const buttonHTML = ['<div class="luckysheet-toolbar-left-theme"></div>'];

    if (getObjType(showtoolbarConfig) === 'array') {
        if (!showtoolbar) {
            return '';
        }
        let i = 0;
        showtoolbarConfig.forEach(function(key, i) {
            if (key === '|') {
                const nameKeys = showtoolbarConfig[i - 1]
                if(nameKeys !== '|') {
                    buttonHTML.push(
                        `<div id="toolbar-separator-${camel2split(nameKeys)}" class="luckysheet-toolbar-separator luckysheet-inline-block" style="user-select: none;"></div>`
                        );
                }
            } else {
                buttonHTML.push(htmlMap[key]);
            }
        });
        return buttonHTML.join('');
    }

    const config = defaultToolbar.reduce(function(total, curr) {
        if (curr !== '|') {
            total[curr] = true;
        }
        return total;
    }, {});

    if (!showtoolbar) {
        for (let s in config) {
            config[s] = false;
        }
    }

    if (JSON.stringify(showtoolbarConfig) !== '{}') {
        if(showtoolbarConfig.hasOwnProperty('undoRedo')){
            config.undo = config.redo = showtoolbarConfig.undoRedo;
        }
        Object.assign(config, showtoolbarConfig);
    }
    for (let i = 0; i < defaultToolbar.length; i++) {
        let key = defaultToolbar[i];
        if (!config[key] && key !== '|') {
            if (defaultToolbar[i + 1] === '|') {
                i++;
            }
            continue;
        }
        if (key === '|') {
            const nameKeys = defaultToolbar[i - 1]
            if(nameKeys !== '|') {
                buttonHTML.push(
                    `<div id="toolbar-separator-${camel2split(nameKeys)}" class="luckysheet-toolbar-separator luckysheet-inline-block" style="user-select: none;"></div>`
                );
            }
        } else {
            buttonHTML.push(htmlMap[key]);
        }
    }
    return buttonHTML.join('');
}
