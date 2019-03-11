class ClearButton extends PaintFunction {
    constructor(contextReal, contextDraft) {
        super();
        this.contextReal = contextReal;
        this.contextDraft = contextDraft;
    };
};
$('#clear').on("click", function () {
    contextReal.fillStyle = "white";
    contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
    contextDraft.fillStyle = "white";
    contextDraft.fillRect(0, 0, canvasReal.width, canvasReal.height);
})