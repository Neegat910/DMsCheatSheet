<!DOCTYPE html>
<!--
The code contained in this web application is to remain in this application and not
be used in any other location except with the express permission of it's creator,
Maxwell Gariety. This includes on personal projects.
-->
<html>

<head>
  <script type='text/javascript' src='resources/js/jquery-3.2.1.js'></script>
  <script type='text/javascript'>
    // if ($(window).width() <= 800) {
    //   window.location = "localhost/mobile.php";
    // }
  </script>
      <?php
            include("resources/php/header.php");

      ?>
    <meta charset="UTF-8">
    <title>Ye Olde Inn | Home</title>
    <link rel="stylesheet" type="text/css" href="resources/css/style.css">
    <link rel="stylesheet" type="text/css" href="resources/css/master.css">
</head>

<body>
  <div id="maindiv">
    <span id="intro_img_div">
      <img id="intro_img" src="resources/images/tavern_sign.png" />
    </span>

    <table id="mainmenu">
      <tr class="maintr">
        <td class="maintd">
          <div class="mainlink">
            <a href="characters/">Manage Characters</a>
          </div>
        </td>
        <td class="maintd">
          <div class="mainlink">
            <a href="dm_screen/">DM's Screen</a>
          </div>
        </td>
      </tr>
      <tr class="maintr">
        <td class="maintd">
          <div class="mainlink">
            <a href="campaigns/">Campaigns</a>
          </div>
        </td>
        <td class="maintd">
          <div class="mainlink">
            <a href="creatures/">Bestiary</a>
          </div>
        </td>
      </tr>
      <tr class="maintr">
        <td class="maintd">
          <div class="mainlink">
            <a href="items/">Items</a>
          </div>
        </td>
        <td class="maintd">
          <div class="mainlink">
            <a href="spellbook/">Spellbook</a>
          </div>
        </td>
      </tr>
      <tr class="maintr">
        <td class="maintd">
          <div class="mainlink">
            <a href="player_space/">Player's Space</a>
          </div>
        </td>
        <td class="maintd">
          <div class="mainlink">
            <a href="encounters/">Encounter Builder</a>
          </div>
        </td>
      </tr>
    </table>
  </div>
  <script type='text/javascript' src='resources/js/main.js'></script>
</body>

</html>
