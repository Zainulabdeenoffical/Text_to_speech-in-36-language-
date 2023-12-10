# Text_to_speech-in-36-language-
#Html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Text to speach</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <h2> Text to speach</h2>
    <div><input type="text" id="text-to-speech" placeholder="Enter Text to speak"></div>
    <div> <button type="button" onclick= "audio()">Speak</button></div>
    <div class="select_language" id="language">
         <select>

       <option value="0">Select language</option>
       <option value="1">Arabic</option>
       <option value="2">chinese</option>
       <option value="3">chinese(Hong Kong SAR china)</option>
       <option value="4">chinese(Tiwan)</option>
       <option value="5">czech</option>
       <option value="6">Danish</option>
       <option value="7">Dutch(Belgium)</option>
       <option value="8">Dutch (Netherlands)</option>
       <option value="9">English( Australia)</option>
       <option value="10">English (Ireland)</option>
       <option value="11">English (South Africa)</option>
       <option value="12">English (United Kingdom)</option>
       <option value="13">English (United States)</option>
       <option value="14">Finnish (Finland) </option>
       <option value="15">French (Canada)</option>
       <option value="16">French (France)</option>
       <option value="17">German (Germany)</option>
       <option value="18">Greek (Greece)</option>
       <option value="19">Hindi (India)</option>
       <option value="20">Hungarian (Hungary)</option>
       <option value="21">indonesian (Indonesia)</option>
       <option value="22">Italian (Italy) </option>
       <option value="23">Japanese (Japan) </option>
       <option value="24">Korean (South Korea) </option>
       <option value="25">Norwegian (Norway) </option>
       <option value="26">Polish (Poland)</option>
       <option value="27">Portuguese (Brazil) </option>
       <option value="28">Portuguese (Portugal) </option>
       <option value="29">Romanian (Romania) </option>
       <option value="30">Russian (Russia) </option>
       <option value="31">Slovak (Slovakia) </option>
       <option value="32">Spanish (Mexico) </option>
       <option value="33">Spanish (Spain) </option>
       <option value="34">Swedish (Sweden) </option>
       <option value="35">Thai (Thailand)</option>
       <option value="36">Turkish (Turkey)</option>
       </select>
</div>
    <div><small>Note: <b>Enter Text  and click on speak button </b></small></div>
    <h3>Zain Ul Adeen</h3>
   <script src="speach.js"></script>
</body>
</html>
