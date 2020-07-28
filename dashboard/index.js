var defaultThemeColors = Survey
    .StylesManager
    .ThemeColors["default"];
defaultThemeColors["$main-color"] = "#007acc";
defaultThemeColors["$main-hover-color"] = "#0099ff";
defaultThemeColors["$text-color"] = "#4a4a4a";
defaultThemeColors["$header-color"] = "#0099ff";

defaultThemeColors["$header-background-color"] = "#4a4a4a";
defaultThemeColors["$body-container-background-color"] = "#f8f8f8";

Survey
    .StylesManager
    .applyTheme("bootstrap");

var json = {
    title: "311 Flooding Quiz",
    showProgressBar: "bottom",
    showTimerPanel: "top",
    maxTimeToFinishPage: 10,
    maxTimeToFinish: 25,
    firstPageIsStarted: true,
    startSurveyText: "Start Quiz",
    pages: [
        {
            questions: [
                {
                    type: "html",
                    html: "You are about to start a quiz. <br/>You have 10 seconds for every page and 25 seconds for the entire quiz of 3 questions.<br/>Please click on <b>'Start Quiz'</b> button when you are ready."
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "civilwar",
                    title: "Which Ward reported the most flooding?",
                    choices: [
                        "Ward 1", "Ward 4", "Ward 6", "Ward 7"
                    ],
                    correctAnswer: "Ward 6"
                }
            ]
        }, {
            questions: [
                {
                    type: "radiogroup",
                    name: "libertyordeath",
                    title: "Which areas reported the least flooding?",
                    choicesOrder: "random",
                    choices: [
                        "Non residential", "Residential", "Suburbs", "Downtown"
                    ],
                    correctAnswer: "Non residential"
                }
            ]
        }, {
            maxTimeToFinish: 15,
            questions: [
                {
                    type: "radiogroup",
                    name: "magnacarta",
                    title: "Did Mark demo enough research and tech skills?",
                    choicesOrder: "random",
                    choices: [
                        "Yes, absolutely", "Nope"
                    ],
                    correctAnswer: "Yes, absolutely"
                }
            ]
        }
    ],
    completedHtml: "<h4>You have answered <b>{correctedAnswers}</b> questions correctly out of <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document
            .querySelector('#surveyResult')
            //.textContent = "Result JSON:\n" + JSON.stringify(result.data, null, 3);
    });

$("#surveyElement").Survey({model: survey});