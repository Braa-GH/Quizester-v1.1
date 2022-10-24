

//input quiz title length counter
    let titleLength = document.querySelector("#title-length");
    let quizTitle = document.querySelector("#quiz-title");
    let maxlength = quizTitle.getAttribute("maxlength");
    titleLength.innerHTML = maxlength;
    quizTitle.oninput = function () {
        let count = maxlength - this.value.length
        titleLength.innerHTML = count.toString();
        count <= 10 ? titleLength.classList.add("text-danger") : titleLength.classList.remove("text-danger");
    }

//input quiz desc length counter
    let descLength = document.querySelector("#desc-length");
    let quizDesc = document.querySelector("#quiz-desc");
    let descMaxlength = quizDesc.getAttribute("maxlength");
    descLength.innerHTML = descMaxlength;
    quizDesc.oninput = function () {
        let count = descMaxlength - this.value.length
        descLength.innerHTML = count.toString();
        count <= 10 ? descLength.classList.add("text-danger") : descLength.classList.remove("text-danger");
    }

    //range
    let minTime = document.getElementById("minTime");
    let maxTime = document.getElementById("maxTime");
    let quizTime = document.getElementById("time");
    let timeValue = document.getElementById("timeValue");
    minTime.innerHTML = quizTime.getAttribute("min");
    maxTime.innerHTML = quizTime.getAttribute("max");
    timeValue.innerHTML = quizTime.value + " minutes";
    quizTime.oninput = function () {
        timeValue.innerHTML = this.value + " minutes";
    }


    //operation btns
    let btnCancel = document.getElementById("cancel");

    let div = document.getElementById("div");
    // operation forms
    let formCreateQuiz = document.getElementById("create-quiz-form");
    let formNewPost = document.getElementById("new-post-form");
    function newPost(){
        formNewPost.classList.add("d-block");
        formNewPost.scrollIntoView();
    }

    function hidePostForm(){
        formNewPost.classList.remove("d-block");
        document.getElementById("course-header").scrollIntoView();
    }

    function createQuiz(){
        formCreateQuiz.classList.add("d-block");
        formCreateQuiz.scrollIntoView();

    }
    function hideQuizForm(){
        formCreateQuiz.classList.remove("d-block");
        document.getElementById("course-header").scrollIntoView();
    }


    let link = document.getElementById("link");
    let btnLink = document.getElementById("link-btn");

    function urlVisibility() {
        if (link.classList.contains("d-none")){
            link.classList.remove("d-none");
        }else {
            link.classList.add("d-none");
        }
    }
















