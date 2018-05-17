import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/89cd3118fd3b4fab9f913ce7091f1761944163e8/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        var a;
var b;
var c;
var d;
var e;
var f;
var g;
var h;
var i;
var j;

var a_ans;
var b_ans;
var c_ans;
var d_ans;
var e_ans;
var f_ans;
var g_ans;
var h_ans;
var i_ans;
var j_ans;
/* These variables above are Global Variables 
that are the questions that will be later used
*/
function start(){
quizCreation();    
    }
/* This is the main program that Creates and subsequently 
asks the questions of the quiz */
function quizCreation(x){
for(var i = 0; i < 10; i++){
/* This For Loop creates the question based on the 
number of times the loop runs*/
    if(i = 1){
        a = readLine("Enter Question ");
        // Above, the variable is set to a User Inputted Question//
        if(a == "END"){
            break;
        }
        // Above, the Sentinel Ends the program when "END" is typed by the User//
        a_ans = readLine("Enter Answer ");
        // The user creates the correct answer to their question //
        var question = readLine(a + " ");
        // The question is asked //
        if(question == a_ans){
            println("Correct");
        /* This is what prints when the correct answer is typed 
        Below, is what is printed when the wrong answer is inputted.
        */
        }else{
            println("Incorrect")
        }
    }
    if(i = 2){
        b = readLine("Enter Question ");
        if(b == "END"){
            break;
        }
        b_ans = readLine("Enter Answer ");
        var question2 = readLine(b + " ");
    if(question2 == b_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 3){
        c = readLine("Enter Question ");
        if(c == "END"){
            break;
        }
        c_ans = readLine("Enter Answer ");
        var question3 = readLine(c + " ");
    if(question3 == c_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 4){
        d = readLine("Enter Question "); 
        if(d == "END"){
            break;
        }
        d_ans = readLine("Enter Answer ");
        var question4 = readLine(d + " ");
    if(question4 == d_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 5){
        e = readLine("Enter Question "); 
        if(e == "END"){
            break;
        }
        e_ans = readLine("Enter Answer ");
        var question5 = readLine(e + " ");
    if(question5 == e_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 6){
        f = readLine("Enter Question "); 
        if(f == "END"){
            break;
        }
        f_ans = readLine("Enter Answer ");
        var question6 = readLine(f + " ");
    if(question6 == f_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 7){
        g = readLine("Enter Question "); 
        if(g == "END"){
            break;
        }
        g_ans = readLine("Enter Answer ");
        var question7 = readLine(g + " ");
    if(question7 == g_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 8){
        h = readLine("Enter Question "); 
        if(h == "END"){
            break;
        }
        h_ans = readLine("Enter Answer ");
        var question8 = readLine(h + " ");
    if(question8 == h_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 9){
        i = readLine("Enter Question "); 
        if(i == "END"){
            break;
        }
        i_ans = readLine("Enter Answer ");
        var question9 = readLine(i + " ");
    if(question9 == i_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    if(i = 10){
        j = readLine("Enter Question "); 
        if(j == "END"){
            break;
        }
        j_ans = readLine("Enter Answer ");
        var question10 = readLine(j + " ");
        if(question10 == j_ans){
            println("Correct");
        }else{
            println("Incorrect")
        }
    }
    
   
}
}



        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!false) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (false) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (false) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
