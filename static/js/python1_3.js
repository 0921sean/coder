var num=1;
var quiz_list = {
    1: {'type':'block', 'question1': `<span class='highlight_text'>+</span>기호로, 문자열 값을 이어붙여 하나의 값을 만들어낼 수 있는데, 이를 <span class='highlight_text'>표현식(expression)</span>이라고 부릅니다`, 'question2': 'print() 안에 "오리"에 “너구리”를 덧붙여 하나의 문자열을 출력해볼까요?',
    'bogi2': 'print("오리"', 'bogi3': '"너구리")','block1': `-`, 'block2': '+', 'block3': '*', 'answer': '2', 'input_text1': true, 'output': "오리너구리"},
    2: {'type':'block', 'question1': "표현식(expression)에 변수를 입력하면, 변수명이 아니라 변수의 <span class='highlight_text'>값(value)</span>을 사용하는 거예요.", 'question2': `<span class='highlight_text'>“Followers: “</span>에 변수 <span class='highlight_text'>followers</span>를 덧붙여 확인해봅시다.`, 
    'bogi': 'followers = "55"', 'bogi2': 'print("Followers: "', 'bogi4': ')', 'block1': `followers`, 'block2': `+`, 'answer': '21', 'input_text1': true, 'input_text2': true, 'output': 'Followers: 55'},
    3: {'type':'multiple', 'question1': "변수 <span class='highlight_text'>label</span>의 값은 무엇일까요?", 'question2': ``, 
    'default_code': `label = "Name: " + "Joe"`, 'choice1': '"Joe"', 'choice2': `"Name: Joe"`, 'answer': '2'},
    4: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': `user = "coder_love_holic" <br> print("Username:" + user)`, 'choice1': `Username:user`, 'choice2': `Username:CO:DER_love_holic`, 'answer': '2', 'output': 'Username:CO:DER_love_holic'},
    5: {'type':'block', 'question1': `콘솔에 <span class='highlight_text'>다산정약용</span>을 출력해보세요.`, 'question2': ``, 
    'bogi': 'title = "다산" <br/> name = "정약용"', 'bogi2': 'print(', 'bogi5': ')', 'block1': `+`, 'block2': `title`, 'block3': 'name', 'answer': '213', 'input_text1': true, 'input_text2': true, 'input_text3': true, 'output': '다산정약용'},
    6: {'type':'block', 'question1': `파이썬의 다양한 자료형 중 <span class='highlight_text'>숫자형</span>은 (문자열과 달리) 좌우를 따옴표로 둘러싸지 않고 숫자만 작성해요.`, 'question2': ``, 
    'bogi2' : 'coder_users = ', 'block1': `<1000>`, 'block2': `"1000"`, 'block3': '1000', 'answer': '3', 'input_text1': true},
    7: {'type': 'block', 'question1': '숫자형 값을 갖는 변수로 계산을 할 수도 있어요', 'question2': '<span class="highlight_text">number_of_steps에 1을 더해 결과를 확인해봅시다.',
    'bogi': `number_of_steps = 10 <br/> print("You're on step: ")`, 'bogi2': 'print(number_of_steps', 'bogi4': ')', 'block1': '+', 'block2': '=', 'block3': '1', 'answer': '13', 'input_text1': true, 'input_text2': true, 'output': "You're on step: <br/> 11"}, 
    8: {'type': 'block', 'question1': '변수에 계산 결과를 저장할 수도 있어요', 'question2': '변수 <span class="highlight_text">total에 <span class="highlight_text">men+women</span>의 값을 저장해봅시다!',
    'bogi': `men = 10 <br/> women = 8`, 'bogi2': ' ', 'bogi3': ' = men','bogi5': '<br/> &nbsp; print("Total number: ") <br/> &nbsp; print(total)', 'block1': '+', 'block2': 'women', 'block3': 'total', 'answer': '312', 'input_text1': true, 'input_text2': true, 'input_text3': true, 'output': "Total number : <br/> 18"}, 
    9: {'type':'multiple', 'question1': `아래의 코드는 왜 4가 아니라 <span class='highlight_text'>31</span>을 출력할까요?`, 'question2': ``, 
    'default_code': `temperature = "3" + "1" <br/> print(temperature)`, 'choice1': `“3”과 “1”이 문자열 값이기 때문에`, 'choice2': `숫자형끼리 뺄셈을 하는 표현식이기 때문에`, 'answer': '1', 'output': '31'},    
    10: {'type':'multiple', 'question1': `이 코드는 콘솔에 어떤 결과를 출력할까요?`, 'question2': ``, 
    'default_code': `area = "3 * 5" <br> print(area)`, 'choice1': `15`, 'choice2': `3 * 5`, 'answer': '2', 'output': '3 * 5'},    
    11: {'type':'block', 'question1': `변수 <span class='highlight_text'>savings</span>에 변수 <span class='highlight_text'>interest</span>를 곱해보세요.`, 'question2': ``,
    'bogi': `savings = 100 <br/> &nbsp; interest = 0.04`, 'bogi2': `print(savings`, 'bogi4': ')', 'block1': `/`, 'block2': `interest`, 'block3': '*', 'answer': '32', 'input_text1': true, 'input_text2': true, 'output': '4'}, 
    12: {'type':'block', 'question1': `<span class='highlight_text'>sum_of_grades</span>를 <span class='highlight_text'>subjects</span>로 나누어 과목별 점수의 평균값을 구해보세요.`, 'question2': ``, 
    'bogi': `sum_of_grades = 460 <br/> subjects = 5`, 'bogi2': `print(`, 'bogi5': ')', 'block1': `sum_of_grades`, 'block2': `subjects`, 'block3': '/', 'answer': '132', 'input_text1': true, 'input_text2': true, 'input_text3': true, 'output': '92'}, 
};
const num_list = ["","2","3","4","5"]
const num_list_for_input = ["1", "2", "3"]
const num_list_for_block = ["1", "2", "3"]

var value='';
var value2='';
$('.bogi2').hide()
$('.bogi3').hide()
$('.bogi4').hide()
$('.bogi5').hide()
$('.block3').hide()
$('.output_t').hide()

if (num === 1) {
    $('.bogi2').show()
    $('.bogi2').html(quiz_list[num]['bogi2'])
    $('.bogi3').show()
    $('.bogi3').html(quiz_list[num]['bogi3'])
    $('#input_text2').hide(); $('#input_text3').hide();
}

function next() {
    //output 숨기기
    $('#output').hide()
    $('.output_t').hide()
    $('.output_m').hide()

    //번호 키우기
    num++;
    value='';
    if (num > Object.keys(quiz_list).length) {
        console.log(num);
        location.href='complete_p1_3.html';
        //location.href="{% url 'python1_1_complete' %}";

    } else {
        console.log('quiz num: ', num)
    //비활 상태의 제출 버튼 띄워!
    $('.submit_btn').attr("disabled", true)
    $('#submit').show();
    //질문 내용 바꿔!
    $("#text1").html(quiz_list[num]['question1'])
    $("#text2").html(quiz_list[num]["question2"]);

    //문제 형식이 바뀐다면, 이전 문제 틀 숨기기
    if (quiz_list[num-1]['type'] != quiz_list[num]['type']) {
        var preType = quiz_list[num-1]['type']
        $("#"+preType).hide()
    }

    //progress bar fill
    $(".progress-bar").attr("style", "width: calc(100/12*" + num + "%)");
    //객관식형: 테두리 색상 없애고 선지 바꾸고, 해당 틀 띄우기
    if (quiz_list[num]['type'] === 'multiple') {
        // for (var i=1; i < quiz_list[num]['choice_num']+1; i++) {
        //     console.log('i:', i)
        //     $("#choice"+String(i)).html(quiz_list[num]["choice"+String(i)]);
        // }
        $('.choice_btn').attr("style", "border: 1px solid rgb(170, 170, 170)")
        
        $("#default_code").html(quiz_list[num]["default_code"])
        
        $("#choice"+1).html(quiz_list[num]["choice"+1]);
        $("#choice"+2).html(quiz_list[num]["choice"+2]);
        // $("#choice"+3).html(quiz_list[num]["choice"+3]);
        // $("#choice"+4).html(quiz_list[num]["choice"+4]);
        

        console.log(quiz_list[num]['type'])
        // $("#"+quiz_list[num]['type']).show();       
    } //타이핑형: 입력된 내용 지우기 + 빈칸 앞 뒤 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val("");
        $('#pre_blank').html(quiz_list[num]['pre_blank']);
        $('#after_blank').html(quiz_list[num]['after_blank']); 
        

        // $("#"+quiz_list[num]['type']).show() 
    } 
    // 블록입력형: 입력된 내용 지우기 + 길이 초기화 + 블럭 내용 바꾸고 틀 띄우기
    else if (quiz_list[num]['type'] === 'block') {
        $('.bogi').html('')
        $('.bogi2').html('')
        $('.bogi3').html('')
        $('.bogi4').html('')
        $('.bogi4').html('')
        $('.underline').attr("value", "");
        $('.underline').attr("size", '1px')          

        //보기가 객체 속성으로 존재한다면, 해당 내용 수정하여 띄우기 / 없으면 숨기기
        num_list.map((it) =>
          {if (("bogi" + it) in quiz_list[num]) {
            console.log('있네~', it);
            $('.bogi' + it).show();
            $(".bogi" + it).html(quiz_list[num]["bogi" + it]);
          } else {
            console.log('없음', it);
            $('.bogi' + it).hide();
          }})
        
          //input_text1,2,3 가 객체 속성으로 존재한다면, 해당 내용 띄우기 / 없으면 숨기기
        num_list.map((it) =>
          {if (("input_text" + it) in quiz_list[num]) {
            console.log('있네~', it);
            $('#input_text' + it).show();
          } else {
            console.log('없음', it);
            $('#input_text' + it).hide();
          }})
        
    
        if (num === 5) {
            $('.block3').show();
        }  

        $('.block1').html(quiz_list[num]['block1'])
        $('.block2').html(quiz_list[num]['block2'])
        $('.block3').html(quiz_list[num]['block3'])
        $('.blocks').show()
    } 
    
    $("#"+quiz_list[num]['type']).show()
    // if (num === 5) {$(".code_background").hide()}
    // if (num === 6) {$(".code_background").show()}
    } 
}

function delete_key() {
    if ($('#input_text3').attr('value') !== "") {
        $('#input_text3').attr('value', "")
        value = value.slice(0, -1);
        console.log('3번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else if ($('#input_text2').attr('value') !== "") {
        $('#input_text2').attr('value', "")
        value = value.slice(0, -1);
        console.log('2번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else if ($('#input_text1').attr('value') !== "") {
        $('#input_text1').attr('value', "")
        value = value.slice(0, -1);
        console.log('1번 지움', value)
        if (value === "") {
            $('.submit_btn').attr("disabled", true)
        }
    } else {
        return;
    }
}

$('.first_next_btn').click(function() {
    setTimeout(() => $(".progress-bar").attr("style", "width: calc(100/12*1%)"), 500);
    $('.explanation').hide();
    $('.question').show();
})

//[객관식형] 선지 선택 시, 제출 버튼 활성화 + 값 받아와서 콘솔에 출력
$('.choice_btn').click(function() {
    $('.submit_btn').attr("disabled", false)
    value = $(this).prop('value');
    // 테두리 표시도 toggle 방식으로 수정해야 함
    // $('#choice'+value).attr('style', 'border: 2px solid blue')
    console.log('선택: ',value)
    
}) 

//[타이핑형] 뭐라도 입력해야 제출 버튼 활성화됨
$('#input_text').on("input", function (e) {
    $('#input_text').attr('size', $('#input_text').val().length)
    if ($('#input_text').val() != '') {
        $('.submit_btn').attr("disabled", false);
    } else {
        $('.submit_btn').attr("disabled", true);
    }
    
})


//[블록입력형] 블록 1: value에 버튼 id 누적 + 제출 버튼 활성화 + 버튼 한 번 클릭 시 input 하나의 placeholder 내용에 버튼 내용 띄우기 
$('.block1').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '1'
        console.log(value)
        $('#input_text1').attr("value", $('.block1').html())
        $('#input_text1').attr("size", $('#input_text1').val().length)

    } else {
        if (num === 1 || num === 6) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '1'
            console.log(value)
            $('#input_text2').attr("value", $('.block1').html())
            $('#input_text2').attr("size", $('#input_text2').val().length)

        } else {
            if(num === 2 || num === 7 || num === 11) {
                return;
            } else {
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '1'
                console.log(value)
                $('#input_text3').attr("value", $('.block1').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }
        
    }      
    }   
})

//[블록입력형] 블록 2: 위와 동일
$('.block2').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '2'
        console.log(value)
        $('#input_text1').attr("value", $('.block2').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
        if (num === 1 || num === 6) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '2'
            console.log(value)
            $('#input_text2').attr("value", $('.block2').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 
        } else {
            if (num === 2 || num === 7 || num === 11) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '2'
                console.log(value)
                $('#input_text3').attr("value", $('.block2').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }      
    }  
})

//[블록입력형] 블록 3: 위와 동일
$('.block3').click(function () {
    $('.submit_btn').attr("disabled", false)
    var input_value = $('#input_text1').attr('value')
    if (input_value === "") {
        value += '3'
        console.log(value)
        $('#input_text1').attr("value", $('.block3').html())
        $('#input_text1').attr("size", $('#input_text1').val().length) 
    } else {
            if (num === 1 || num === 6) {
            return;
        }
        var input_value = $('#input_text2').attr('value')
        if(input_value === "") {
            value += '3'
            console.log(value)
            $('#input_text2').attr("value", $('.block3').html())
            $('#input_text2').attr("size", $('#input_text2').val().length) 

        } else {
            if (num === 2 || num === 7 || num === 11) {
                return;
            }
            var input_value = $('#input_text3').attr('value')
            if(input_value === "") {
                value += '3'
                console.log(value)
                $('#input_text3').attr("value", $('.block3').html())
                $('#input_text3').attr("size", $('#input_text3').val().length) 
            } else {
                return;
            }
        }      
    }   
})

//제출 버튼: 제출 폼 숨기기
$('.submit_btn').click(function() {
    $('#submit').hide();
    
    // 선지 버튼들 비활성화 하는 거 뭐 때문인지는 모르는데 안 됨 ㅠㅋ
    // $(".choice_btn").attr("disalbed", true);

    //[타이핑형] 답 저장: 입력할 때마다 value값에 저장하려니 console 차는 게 싫어서, '제출'할 때 저장함 
    if (quiz_list[num]['type'] === 'typing') {
        value = $('#input_text').val()
        console.log('제출한 답?', value)
        console.log('진짜 답은?', quiz_list[num]['answer'])
    }

    //정답 비교하고, 각 문구/버튼 띄움
    if (value === quiz_list[num]['answer']) {
        console.log('정답~')
        $('.blocks').hide();
        if ('output' in quiz_list[num]) {
            console.log('output 있어~')
            $('.output-code').html(quiz_list[num]['output'])
            console.log(quiz_list[num]['output'])
            if (quiz_list[num]['type'] === 'block') {
                console.log('뷰')
                $('#output').show();
            } else if (quiz_list[num]['type'] === 'typing') {
                $('.output_t').show();
            } else if (quiz_list[num]['type'] === 'multiple') {
                $('.output_m').show();
            }
        }
        $('#correct').show();
    } else {
        $("#not_correct").show();
    }
    if (quiz_list[num]['type'] === 'multiple') {$('#choice'+value).attr("style", "border: 2px solid blue")}

})

//재시도 버튼: 오답 문구 숨기고, 비활 상태의 제출 버튼 보이기 + (혹시 모르니) 저장했던 답안 지우기
$('.retry_btn').click(function() {
    $('#not_correct').hide();
    if (quiz_list[num]['type'] === 'typing') {
        $('#input_text').val('');
    } else if (quiz_list[num]['type'] === 'block') {
        $('#input_text1').attr("value", "");
        $('#input_text3').attr("value", "");
        $('#input_text1').attr("size", '1px')
        $('#input_text3').attr("size", '1px')                    
        $('#input_text2').attr("value", "");  
        $('#input_text2').attr("size", '1px')           
    } else if (quiz_list[num]['type'] === 'multiple') {
        $('#choice'+value).attr("style", "border: 1px solid rgb(170, 170, 170)")
    }
     $('.submit_btn').attr("disabled", true)
    value = ""; //필요 없는 코드일지도
    $('#submit').show();

})

//skip(오답)과 다음(정답) 버튼: 오답 문구 숨기고, next 함수 실행
$('.skip_btn').click(function() {
    $('#not_correct').hide();
    next();
})

$('.correct_btn').click(function() {
    $('#correct').hide();
    next();
})


$('.block_delete').click(function() {
    delete_key();
})