SC.initialize({
    client_id: '340f063c670272fac27cfa67bffcafc4'
});

$(document).ready(function () {

    SC.stream('/tracks/966127855', function (sound) {

        $('#start').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/168167974', function (sound) {

        $('#start1').click(function (e) {
            e.preventDefault();
            sound.start();
        });

        $('#stop1').click(function (e) {
            e.preventDefault();
            sound.stop();
        });

    });
    SC.stream('/tracks/191214159', function (sound) {

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

}); 

// aathi song
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/168167974&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/my-songs-10" title="Rahul Rockzzz" target="_blank" style="color: #cccccc; text-decoration: none;">Rahul Rockzzz</a> · <a href="https://soundcloud.com/my-songs-10/12316546sdf546465" title="Aathi-Kaththi(2014)" target="_blank" style="color: #cccccc; text-decoration: none;">Aathi-Kaththi(2014)</a></div>

//enakena yarum ilaye
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/191214159&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/insanegowtham" title="Gowtham" target="_blank" style="color: #cccccc; text-decoration: none;">Gowtham</a> · <a href="https://soundcloud.com/insanegowtham/enakenna-yarum-ila" title="Enakenna Yaarum Illaye - Aakko Tamil Movie Single | Anirudh Ravichander" target="_blank" style="color: #cccccc; text-decoration: none;">Enakenna Yaarum Illaye - Aakko Tamil Movie Single | Anirudh Ravichander</a></div>

//usure pohuthe song
//<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/345819962&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/arrsong" title="Ar Rahman Tamil Songs" target="_blank" style="color: #cccccc; text-decoration: none;">Ar Rahman Tamil Songs</a> · <a href="https://soundcloud.com/arrsong/usure-pogudhey-1" title="Usure Pogudhey" target="_blank" style="color: #cccccc; text-decoration: none;">Usure Pogudhey</a></div>