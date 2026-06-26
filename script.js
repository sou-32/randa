// *** ←このマークが付いている変数は、仮にその値で設定している変数。firestore導入後にここにプレイヤーの情報を対応させる
// 

const game_start = document.getElementById("GameStart");
const egg_move = document.getElementById("egg_move");
const fragment_eff = document.getElementById("fragment_eff");
const scatter_eff = document.getElementById("scatter_eff");
const egg_st_animation = document.getElementById("egg_st_animation");
const start_bg = document.getElementById("start_bg");
//footer
const footer_buttons = document.querySelectorAll(".select_menu");
const play_scr = document.getElementById("play_scr");
const ranking_scr = document.getElementById("ranking_scr");
const skin_scr = document.getElementById("skin_scr");
const account_scr = document.getElementById("account_scr");

//プレイ画面
const new_try = document.getElementById("new_try");
const stop_try = document.getElementById("stop_try");
const start_retry = document.getElementById("start_retry");

const mode_Mvleft_btn = document.getElementById("mode_Mvleft_btn");
const mode_Mvright_btn = document.getElementById("mode_Mvright_btn");
let select_mode_mv = document.getElementById("select_mode_mv");
let select_mode = document.querySelectorAll(".eggs");
const mode_txt = document.getElementById("mode_txt");
const play_state = "false"; // ***
const trying_mode = 4; // ***

//キャラ着せ替え
const skin_hats = document.querySelectorAll(".skin_hat");
const skin_accesarys = document.querySelectorAll(".skin_accesary");
const now_hat_btn = document.getElementById("now_hat_btn");
const hats_display = document.getElementById("hats");
const now_accesary_btn = document.getElementById("now_accesary_btn");
const accesarys_display = document.getElementById("accesarys");


const confirmed_hat = document.getElementById("now_hat_btn");
const confirmed_accesary = document.getElementById("now_accesary_btn");
// アイテム説明
const explain_item_display= document.getElementById("explain_item");
const item_name = document.getElementById("item_name");
const about_item = document.getElementById("about_item");
//アカウント画面
const create_accountbtn = document.getElementById("create_accountbtn");
const login_accountbtn = document.getElementById("login_accountbtn");
//現在選択中のモード
let now_index = 3; //初期値(練習モード)
// モードの種類数
let eggs_num = 6; //6個
// モードのindex
let eggs_index = [1,2,3,4,5,6];
const modes = [
        {
                need_type:30000,
                result_bg:"./src/result_bg/.svg",
                egg_svg:"./src/egg/egg.svg",
                color:"",
                name:"超級",
                unique_id:5
        },
        {
                need_type:100000,
                result_bg:"./src/result_bg/.svg",
                egg_svg:"",
                color:"",
                name:"地獄級",
                unique_id:6
        },
        {
                need_type:1000,
                egg_svg:"./src/egg/egg.svg",
                result_bg:"./src/result_bg/.svg",
                color:"",
                name:"練習",
                unique_id:1
        },
        {
                need_type:1000,
                egg_svg:"./src/egg/egg.svg",
                result_bg:"./src/result_bg/.svg",
                color:"",
                name:"初級",
                unique_id:2
        },
        {
                need_type:5000,
                result_bg:"./src/result_bg/.svg",
                egg_svg:"./src/egg/egg.svg",
                color:"",
                name:"中級",
                unique_id:3
        },
        {
                need_type:10000,
                result_bg:"./src/result_bg/.svg",
                egg_svg:"./src/egg/egg.svg",
                color:"",
                name:"上級",
                unique_id:4
        }
]

const items_explain_hat = [["帽子なし",""],["木のヘルメット","木の模様はくちばしで傷つけて作った。"],["鉄のヘルメット","そこそこ頑丈なヘルメット。鉄製のためとても重い"],["金のヘルメット","光り輝く金のヘルメット。軍隊長の贈られる貴重なヘルメット。"],["木の枝","枝の中から虫が湧いて出てくることがある"],["野球帽",""],["シルクハット",""],["角帽",""],["三角コーン",""],["最後の一本",""],["王冠",""],["ナイトキャップ",""],["うさぎの耳",""],["ヤンキーヘア",""],["五つ星",""],["新たな生命",""],["鳥スタンプ",""],["タトゥー(上)",""],["優等生",""],["「本人です」ハット",""],["弱点丸出し",""],["お金持ちの子供ウィッグ",""],["くまさんの耳",""],["一部省略",""],["TOP100入り!",""],["悪魔のカチューシャ",""],["少年のヘルメット",""]];
const items_explain_accesary = [["アクセサリーなし",""],["普通の丸めがね",""],["四角のめがね",""],["会社員のめがね",""],["研究者のめがね",""],["",""],["星めがね",""],["ハートのめがね",""],["木のマスク",""],["鉄のマスク",""],["金のマスク",""],["とげメガネ",""],["ドットメガネ",""],["眼帯",""],["スマートグラス",""],["パワーグラス",""],["タトゥー(下)",""],["ぱっちりおめめ",""],["まんまるおめめ",""],["へんなおめめ",""],["こわいおめめ",""],["にっこりおめめ",""],["ぐっすりおめめ",""],["ウィンクおめめ",""],["おねむおめめ",""],["ハンターのおめめ",""]];
// モード選択

console.log(select_mode);

        let trying_mode_index = [];
        if(trying_mode != "" || trying_mode != null || trying_mode != undefined){
                for(let i = 0; i < eggs_num; i++){
                        // trying_modeから続く数字を並べる。最後の番まで到達したら1から数字を並べる
                        let input_num = trying_mode+i
                        if(input_num > eggs_num){
                                input_num = input_num-eggs_num;
                        }                
                        // 数字を配列に格納していく
                        if(i <= eggs_num-3){
                                trying_mode_index[i+2] = input_num;
                        }
                        else if(i >= eggs_num-2){
                                
                                trying_mode_index[i-(eggs_num-2)] = input_num;
                        }
                }
        }

select_mode.forEach(function(egg,index){
        if(index==(now_index-1)){
                egg.style.transform = "scale(1.5)";
        }
        else if(index!=now_index){
                egg.style.transform = "scale(1.0)";
        }
});
mode_Mvleft_btn.addEventListener('click',()=>{
        const tmp_eggs_index = [...trying_mode_index];
        for(let i=0; i < eggs_num-1; i++){
                trying_mode_index[i+1] = tmp_eggs_index[i];
        }
        trying_mode_index[0] = tmp_eggs_index[eggs_num-1];
        console.log(trying_mode_index[2]);

        mode_txt.innerText = modes[(trying_mode_index[2]-1)].name;
        select_mode_mv.classList.add('eggs_scroll_left');
        setTimeout(()=>{
                select_mode_mv.classList.remove('eggs_scroll_left');
                // Dom構造における要素の並び替え
                select_mode_mv.insertBefore(select_mode[eggs_num-1],select_mode[0]);
                // 要素更新し直し
                select_mode_mv = document.getElementById("select_mode_mv");
                select_mode = document.querySelectorAll(".eggs");
                select_mode.forEach(function(egg,index){
                if(index==(now_index-1)){
                        egg.style.transform = "scale(1.5)";
                }
                else if(index!=(now_index-1)){
                        egg.style.transform = "scale(1.0)";
                }
                });
        },100);
});
// 右のボタンが押された時
// 2~eggs_num-1の間で数字を変異させる
mode_Mvright_btn.addEventListener('click',()=>{
        const tmp_eggs_index = [...trying_mode_index];
        for(let i=0; i < eggs_num-1; i++){
                trying_mode_index[i] = tmp_eggs_index[i+1];
        }
        trying_mode_index[eggs_num-1] = tmp_eggs_index[0];
        console.log(trying_mode_index[2]);
        mode_txt.innerText = modes[(trying_mode_index[2]-1)].name;
        select_mode_mv.classList.add('eggs_scroll_right');
        setTimeout(()=>{
                select_mode_mv.classList.remove('eggs_scroll_right');
                // Dom構造における要素の並び替え
                select_mode_mv.insertBefore(select_mode[0],select_mode[eggs_num]);
                // 要素更新し直し
                select_mode_mv = document.getElementById("select_mode_mv");
                select_mode = document.querySelectorAll(".eggs");
                select_mode.forEach(function(egg,index){
                if(index==(now_index-1)){
                        egg.style.transform = "scale(1.5)";
                }
                else if(index!=(now_index-1)){
                        egg.style.transform = "scale(1.0)";
                }
                });
        },100);
});

// 挑戦するボタンクリック
new_try.addEventListener('click',()=>{
        console.log("挑戦するボタンがクリックされました");
});
//ランキング画面

//キャラクターパーツ
const character_accesary = document.getElementById("character_accesary");
const character_hat = document.getElementById("character_hat");
const hats = {
        "co-nn":{
                detail:"初級をクリアした者に与えられる。",
                comment:"道端に落ちていたコーン。かぶってみると案外落ち着く。"
        },
        "ahoge":{
                detail:"鬼級をクリアした者に与えられる。",
                 comment:"おじさんにもらった、謎の薬を飲んでみたら生えてきた。なぜか近くに好みの子がいるとまっすぐになる。"
        },
        "kakubou":{
                detail:"",
                comment:"",
        }
}
const player_accessory = ["co-nn","ahoge"];
//全画面の非表示
play_scr.style.display = ranking_scr.style.display = skin_scr.style.display = account_scr.style.display = "none";
game_start.addEventListener('click',()=>{
        game_start.style.display="none";
        egg_move.style.display = "none";
        fragment_eff.classList.remove('fragment_none');
        fragment_eff.classList.add('fragment');
        scatter_eff.classList.add('scatter_eff');
        egg_st_animation.classList.add('egg');

        setTimeout(() => {
                // アニメーションが終わったオブジェクトの表示だけ消す
                fragment_eff.style.display = "";
                fragment_eff.style.display = "none";
                scatter_eff.style.display = "none";
                egg_st_animation.style.display = "none";
                start_bg.style.display = "none";
        }, 2000);
        setTimeout(() => {
                //　プレイ画面表示
                play_scr.classList.add("play_scr"); play_scr.style.display = "block";
                mode_Mvleft_btn.style.display = mode_Mvright_btn.style.display = "block";

                // playerのプレイ中判別
                if(play_state ==="true"){
                        console.log("pureityuu");
                        stop_try.style.display="block";
                        start_retry.style.display="block";
                        new_try.style.display="none";
                        mode_Mvleft_btn.style.display = mode_Mvright_btn.style.display = "none";

                }
                else if(play_state==="false"){
                        console.log("notプレイ中");
                        new_try.style.display="block";
                        stop_try.style.display="none";
                        start_retry.style.display="none";
                }
                // フッタークリックイベント
                footer_buttons.forEach(button => {
                        button.addEventListener('click',(event)=>{
                                const target = event.currentTarget;
                                const clicked_menu = target.dataset.footerbtns;
                                // 全てのディスプレイをオフ
                                play_scr.style.display = ranking_scr.style.display = skin_scr.style.display = account_scr.style.display = "none";
                                if(clicked_menu==="D-play"){
                                        play_scr.style.display = "block";
                                }
                                if(clicked_menu==="D-ranking"){
                                        ranking_scr.style.display = "block";
                                }
                                if(clicked_menu==="D-skin"){
                                        skin_scr.style.display = "block";
                                }
                                if(clicked_menu==="D-account"){
                                        account_scr.style.display = "block";
                                }
                                
                        });
                });
                //キャラクター着せ替え画面
                // console.log(   "url('./src/character_create/hat/"+ "3" +".svg')"  );
                skin_hats.forEach(button => {
                        button.addEventListener('click',(event)=>{
                                explain_item_display.style.display = "block";
                                const target = event.currentTarget;
                                const clicked_btn = target.dataset.hatbtns;
                                character_hat.style.backgroundImage = confirmed_hat.style.backgroundImage ="url('./src/character_create/hat/"+clicked_btn+".svg')" ;
                                item_name.innerText = "〈"+items_explain_hat[clicked_btn][0]+"〉";
                                about_item.innerText = items_explain_hat[clicked_btn][1];
                                console.log(clicked_btn);

                        });
                });
                skin_accesarys.forEach(button => {
                        button.addEventListener('click',(event)=>{
                                explain_item_display.style.display = "block";
                                const target = event.currentTarget;
                                const clicked_btn = target.dataset.accesarybtns;
                                character_accesary.style.backgroundImage = confirmed_accesary.style.backgroundImage = "url('./src/character_create/accesary/"+clicked_btn+".svg')" ;
                                item_name.innerText= "〈"+items_explain_accesary[clicked_btn][0]+"〉";
                                about_item.innerText= items_explain_accesary[clicked_btn][1];
                                console.log(clicked_btn);

                        });
                });
                now_hat_btn.addEventListener('click',()=>{
                        accesarys_display.style.display="none";
                        hats_display.style.display="block";
                });
                now_accesary_btn.addEventListener('click',()=>{
                        hats_display.style.display="none";
                        accesarys_display.style.display="block";
                });
                //アカウント画面

        },10);
});
