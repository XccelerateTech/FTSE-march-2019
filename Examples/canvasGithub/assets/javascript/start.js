 // Switch based on User input, for example like clickong a button or something else. We will talk about this part in the section after this one. 
        // currentFunction = new DrawingLine(contextReal,contextDraft);

        
        currentFunction = new DrawingRectangle(contextReal, contextDraft);

        // $('#line').click(()=>{
        //     currentFunction = new DrawingLine(contextReal, contextDraft)
        // })

        // $('#rectangle').click(()=>{
        //     currentFunction = new DrawingRectangle(contextReal, contextDraft)
        // })
//         $('#clear').on("click", function () {
//     contextReal.fillStyle = "white";
//     contextReal.fillRect(0, 0, canvasReal.width, canvasReal.height);
//     contextDraft.fillStyle = "white";
//     contextDraft.fillRect(0, 0, canvasReal.width, canvasReal.height);
//     currentFunction = new DrawingRectangle(contextReal, contextDraft);
// })