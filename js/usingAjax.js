var albumHTML = "";
var search = "run";

//Star Wars global variables
var starWarsHTML = "";


function getLukeCharacter(callback){
    var starWarsAPi = "https://swapi.co/api/people/1/";
    var skyWalkerPic = "http://www.sideshowtoy.com/wp-content/uploads/2015/07/902468-product-thumb.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="' + skyWalkerPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Gender: ' + data.gender + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://www.sideshowtoy.com/wp-content/uploads/2015/07/902468-product-thumb.jpg" alt="Luke Skywalker"></a></li>';
         $('#starWars').html(starWarsHTML);
    });
}
getLukeCharacter();
//End Luke Skywalker info


  getAlbumInfo(function(result) {

//Get Yodainfo from Star Wars APi
function getYoda(callback) {
    var starWarsAPi = "https://swapi.co/api/people/20/";
    var yodaPic = "http://www.sideshowtoy.com/wp-content/uploads/2016/03/star-wars-yoda-life-size-figure-thumb-400302.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ yodaPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://www.sideshowtoy.com/wp-content/uploads/2016/03/star-wars-yoda-life-size-figure-thumb-400302.jpg" alt="Yoda"></a></li>';
        $('#starWars').html(starWarsHTML);
    }); // end of getJSON function
} //end of the callback function
getYoda();
//End Yoda info

//Getting Darth Vader Info
function getDarthVader(callback) {
    var starWarsAPi = "https://swapi.co/api/people/4/";
    var DarthVaderPic = "http://www.sideshowtoy.com/photo.php?sku=400249";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ DarthVaderPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://www.sideshowtoy.com/photo.php?sku=400249" alt="Darth Vader"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getDarthVader();
//End Darth Vader info

//Getting Darth Vader Info
function getAnakinSkyW(callback) {
    var starWarsAPi = "https://swapi.co/api/people/11/";
    var anakinSkyWPic = "http://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/350px-Anakin-Jedi.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ anakinSkyWPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://upload.wikimedia.org/wikipedia/en/thumb/7/74/Anakin-Jedi.jpg/350px-Anakin-Jedi.jpg" alt="Anakin Skywalker"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getAnakinSkyW();
//End AnakinSkyW info

//Getting Chewbacca Info
function getChewbacca(callback) {
    var starWarsAPi = "https://swapi.co/api/people/13/";
    var chewbaccaPic = "http://awdsgn.com/classes/fall09/webI/student/trad_mw/mcnamara/rmq/images/io78_p4_7_bg.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ chewbaccaPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://awdsgn.com/classes/fall09/webI/student/trad_mw/mcnamara/rmq/images/io78_p4_7_bg.jpg" alt="Chewbacca"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getChewbacca();
//End Chewbacca info

//Getting Han Solo Info
function getHanSolo(callback) {
    var starWarsAPi = "https://swapi.co/api/people/14/";
    var hanSoloPic = "http://cdn.hitfix.com/images2/assets/marchmayhem/2016/contestants/han-solo_350.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ hanSoloPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://cdn.hitfix.com/images2/assets/marchmayhem/2016/contestants/han-solo_350.jpg" alt="Han Solo"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getHanSolo();
//End Han Solo info

//Getting Palpatine Info
function getPalpatine(callback) {
    var starWarsAPi = "https://swapi.co/api/people/21/";
    var palpatinePic = "http://img09.shop-pro.jp/PA01041/118/product/18005517_o1.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ palpatinePic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://img09.shop-pro.jp/PA01041/118/product/18005517_o1.jpg" alt="Palpatine"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getPalpatine();
//End Palpatine info

//Getting QuiGonJinn Info
function getQuiGonJinn(callback) {
    var starWarsAPi = "https://swapi.co/api/people/32/";
    var quiGonJinnPic = "http://images2.fanpop.com/images/photos/4200000/Qui-Gon-Jinn-and-Obi-Wan-Kenobi-qui-gon-jinn-4207917-350-384.jpg";
    $.getJSON(starWarsAPi, function(data){
        starWarsHTML += '<li data-name="' + data.name + '">';
        starWarsHTML += '<a href="'+ quiGonJinnPic + '" data-lightbox="1" data-title="';
        starWarsHTML += 'Character Name: ' + data.name + '</br>';
        starWarsHTML += 'Birth Year: ' + data.birth_year + '</br>';
        starWarsHTML += 'Weight: ' + data.mass + '</br>';
        starWarsHTML += 'Height: ' + data.height + '</br>';
        starWarsHTML += '">';
        starWarsHTML += '<img src="http://images2.fanpop.com/images/photos/4200000/Qui-Gon-Jinn-and-Obi-Wan-Kenobi-qui-gon-jinn-4207917-350-384.jpg" alt="Qio-Gon-Jinn"></a></li>';
        $('#starWars').html(starWarsHTML);

    }); // end of getJSON function
} //end of the callback function
getQuiGonJinn();
//End QuiGonJinn info

//get additional info from api to create photo list   
    function createAlbumList() {
        $.each(result, function(i, album) {
            $.getJSON(result[i], {
                q: search,
                type: "album"
            }, function(data) {
                albumHTML += '<li data-name="' + data.artists[0].name + '">';
                albumHTML += '<a href="' + data.images[0].url + '" data-lightbox="pictures" data-title="';
                albumHTML += 'Album Name: ' + data.name + '</br>';
                albumHTML += 'Artist Name: ' + data.artists[0].name + '</br>';
                albumHTML += 'Release Date: ' + data.release_date + '</br>';
                albumHTML += 'SpotifyURL: ' + data.external_urls.spotify + '</br>';
                albumHTML += '">';
                albumHTML += '<img src="' + data.images[0].url + '"alt="' + data.name + '"></a></li>';
                $('.albums').html(albumHTML);
            });
        });
    }
    createAlbumList();
});

//Getting info for albums from Spotify APi
function getAlbumInfo(callback) {
    var spotifyAPI = "https://api.spotify.com/v1/search";
    var spotifyAlbumAPI = "https://api.spotify.com/v1/albums/";
    $.getJSON(spotifyAPI, {
        q: search,
        type: "album",
        limit: 8
    }, function(data) {
        var array = [];
       $.each(data.albums.items, function(i, album) {
            array.push(spotifyAlbumAPI + album.id);
        });
        callback(array);
    });
}
//Adding sorting buttons


$('#artistShuffle').click(function() {
    tinysort('ul.albums>li', { attr: 'data-name' });
});

$('#albumShuffle').click(function() {
    tinysort('ul.albums>li', { selector: 'img', attr: 'alt' });
});

$('#nameShuffle').click(function() {
    tinysort('ul#starWars>li', { attr: 'data-name' });
});

$('#randomShuffle').click(function() {
    tinysort('ul#starWars>li', {order: 'rand'});
});