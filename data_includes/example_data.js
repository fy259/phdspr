/*
--Toronto-Psycholinguistics-Experiments--

Template that gives examples of everything Ibex can do for experiments
*/

var shuffleSequence = seq("intro", "practice", sepWith("sep", seq("story")), sepWith("sep", seq("image")), sepWith("sep", startsWith("q")));
var practiceItemTypes = ["practice"];
var centerItems = true;


var defaults = [
    "Separator", {
        transfer: 1000, //wait for 1000ms
          //other options: "keypress", "click"
        normalMessage: "请等待下一个句子", //message to be displayed
        errorMessage: "错误，请等待下一个句子" //message to be displayed in red
    },

    "Message", {
        //"html" option is obligatory
        hideProgressBar: false,
        transfer: "keypress"
    },

    "DashedSentence", {
        //"s" option is obligatory
        mode: "self-paced reading"
          //other option: "speeded acceptability"
    },

    "Question", {
        //"as" option is obligatory
        as: ["是的", "不"],
        hasCorrect: true
          //if a question has a correct answer,
            //keep it as the first element of the "as" option
    },


    //These settings are needed for audio Type 1
    "AcceptabilityJudgment", {
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        as: ["OK"],
        //writing the "as" option here means that this is the default for
        //all AcceptabilityJudgment items
        presentAsScale: true, //presents the "as" option as a scale
        instructions: "Use number keys or click boxes to answer.",
        // leftComment: "(Bad)", //displayed on the left side of the scale
        // rightComment: "(Good)", //displayed on the right side of the scale
        //only two audio options available so far
        audioMessage: { html: "<u>Click here to play audio</u>" },
        audioTrigger: "click"
        //do not change this
        //click, we do have another option at this point of time
    },

    "DashedAcceptabilityJudgment", {
        //combination of AcceptabilityJudgment and DashedSentence
        //"s" option is obligatory
        //"q" option is obligatory
        //"as" option is obligatory
        hasCorrect: false
    },

    "Form", {
        //"html" option is obligatory
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];

var randomnumber=Math.floor(Math.random()*10000000001);
var completionCode=String("LIR" + randomnumber);
var sendingResultsMessage = "正在保存您的回答，请稍等";
var completionMessage = "您的回答已成功保存，感谢您的参与" ;
var completionErrorMessage = "保存失败，实验人员将为您提供帮助" ;



var items = [

    /*
    ===================
    SEPARATOR
    The pause needed between each item of the experiment
    ===================
    */

    //ends after timer (1000ms)
    ["sep", "Separator", {transfer: 1000, normalMessage: "请等待下一个句子"}],

    //ends when key is press
    


    /*
    ===================
    INTRODUCTION
    Can include files for Questionnaires, consent forms etc...
    ===================
    */

    //name of controller
    ["intro",
      //type
      "Form",
      //obligatory option that includes a HTML file that is a questionnaire
      {html: { include: "example_intro.html" },
      //fields that need to have the right format when taking input from user
      validators: {
        //age has to be a number
        age: function (s) { if (s.match(/^\d+$/)) return true; else return "Bad value for \u2018age\u2019"; }
        }
    } ],


    /*
    ===================
    TEXT
    Controllers that work with Text and Questions
    ===================
    */

    //text displayed word by word
    

    //all text with MC question
   

    //word by word text with fill in the blank question
    ["story", "Message", {html: "<center><i>下面是一个语境</i><br><br><br><b>小张很生气</b><br><br><br><i>按空格键开始阅读句子</i></center>"},
                
                
                  "DashedSentence", {s: "因为 小明 没有 问 他 就 用了 电脑。"},
     "Question", {hasCorrect: false, randomOrder: false,
                              //if a question has a correct answer (hasCorrect: true), you would have to put
                              //that answer as the first element in the "as" optio
                  q: "小张为什么很生气?",
                              as: ["小明用了他的电脑。", //this would be the correct answer if hasCorrect:true
                                   "小明没有用电脑。",
                                   ]}],


     ["story", "Message", {html: "<center><i>下面是一个语境</i><br><br><br><b>小王去超市</b><br><br><br><i>按空格键开始阅读句子</i></center>"},
                
                
                  "DashedSentence", {s: "他 买了 三瓶 的 水 给 妈妈。"},
     "Question", {hasCorrect: false, randomOrder: false,
                              //if a question has a correct answer (hasCorrect: true), you would have to put
                              //that answer as the first element in the "as" optio
                  q: "小王买了几瓶水?",
                              as: ["三瓶", //this would be the correct answer if hasCorrect:true
                                   "四瓶"]}],
       

   

   
       
   
["q1", "Question", {
      q: '你已读完所有的句子，确认提交吗？'
    }],

    
  
   



];



