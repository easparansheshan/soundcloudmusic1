SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/tracks/51442761', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/191214159', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/556842441', function (sound) {

        $('#start2').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop2').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/345819962', function (sound) {

        $('#start3').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop3').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    //english songs
    SC.stream('/tracks/649577930', function (sound) {

        $('#start5').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop5').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/179383705', function (sound) {

        $('#start6').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop6').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/345819962', function (sound) {

        $('#start7').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop7').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/556842441', function (sound) {

        $('#start8').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop8').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });

}); 

// aathi song
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168167974&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/my-songs-10" title="Rahul Rockzzz" target="_blank" style="color: #cccccc; text-decoration: none;">Rahul Rockzzz</a> · <a href="https://soundcloud.com/my-songs-10/12316546sdf546465" title="Aathi-Kaththi(2014)" target="_blank" style="color: #cccccc; text-decoration: none;">Aathi-Kaththi(2014)</a></div>
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/51442761&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/praveena-rajah-1" title="Praveena Rajah 1" target="_blank" style="color: #cccccc; text-decoration: none;">Praveena Rajah 1</a> · <a href="https://soundcloud.com/praveena-rajah-1/sets/kathi-songs" title="kathi songs" target="_blank" style="color: #cccccc; text-decoration: none;">kathi songs</a></div>

//enakena yarum ilaye
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191214159&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/insanegowtham" title="Gowtham" target="_blank" style="color: #cccccc; text-decoration: none;">Gowtham</a> · <a href="https://soundcloud.com/insanegowtham/enakenna-yarum-ila" title="Enakenna Yaarum Illaye - Aakko Tamil Movie Single | Anirudh Ravichander" target="_blank" style="color: #cccccc; text-decoration: none;">Enakenna Yaarum Illaye - Aakko Tamil Movie Single | Anirudh Ravichander</a></div>

//usure pohuthe song
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345819962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/arrsong" title="Ar Rahman Tamil Songs" target="_blank" style="color: #cccccc; text-decoration: none;">Ar Rahman Tamil Songs</a> · <a href="https://soundcloud.com/arrsong/usure-pogudhey-1" title="Usure Pogudhey" target="_blank" style="color: #cccccc; text-decoration: none;">Usure Pogudhey</a></div>

//rowdy baby
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/556842441&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/thepavelstar" title="ThePavelStar" target="_blank" style="color: #cccccc; text-decoration: none;">ThePavelStar</a> · <a href="https://soundcloud.com/thepavelstar/maari-2-rowdy-baby-dhanush-sai-pallavi-yuvan" title="Maari 2 - Rowdy Baby - Dhanush, Sai Pallavi ,Yuvan" target="_blank" style="color: #cccccc; text-decoration: none;">Maari 2 - Rowdy Baby - Dhanush, Sai Pallavi ,Yuvan</a></div>

//English i am rider
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/649577930&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/ankit-srdr" title="Ankit Sharma ✪" target="_blank" style="color: #cccccc; text-decoration: none;">Ankit Sharma ✪</a> · <a href="https://soundcloud.com/ankit-srdr/imran-khan-i-am-a-rider-satisfya8d-audio" title="Imran Khan I Am A Rider Satisfya(8D AUDIO)USE HEADPHONES" target="_blank" style="color: #cccccc; text-decoration: none;">Imran Khan I Am A Rider Satisfya(8D AUDIO)USE HEADPHONES</a></div>

// i am so lonely
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/179383705&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/v-giang-xu-n" title="Võ Giang Xuân" target="_blank" style="color: #cccccc; text-decoration: none;">Võ Giang Xuân</a> · <a href="https://soundcloud.com/v-giang-xu-n/i-am-so-lonely-broken-angel-broken-angel" title="I Am So Lonely Broken Angel - Broken Angel" target="_blank" style="color: #cccccc; text-decoration: none;">I Am So Lonely Broken Angel - Broken Angel</a></div>