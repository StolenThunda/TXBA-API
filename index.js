import cheerio from "cheerio";
import express from 'express';
import lib from './lib.js';
const txba = new lib
const port = 5000
const app = express()

const fakeFavHTML = () => {
  //#region
  const favhtml = `
<ul class="accordion sidebar-accordion" id="favoritesListAccordion" data-accordion data-allow-all-closed="true" data-multi-expand="false">

    
        
        <li class="accordion-item is-active" data-accordion-item>
          <a class="accordion-title">Courses <sup>9</sup></a>
          <div class="accordion-content" data-tab-content>
            <ul class="sidebar-list">
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4253', true); return false;">Texas Blues Speed Workshop - Level 1</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4253" data-id="4253" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413275" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7766', true); return false;">Clapton&#8217;s Influence: Worried Mind</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7766" data-id="7766" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413276" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4302', true); return false;">5 Boxes Essential Licks (2nd Edition)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4302" data-id="4302" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413277" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4272', true); return false;">Thanksgiving Ballad 2014</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4272" data-id="4272" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413278" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('5285', true); return false;">Clapton&#8217;s Influence: Crossroad Blues w/Bonus</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-5285" data-id="5285" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413279" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4304', true); return false;">5 Essential Blues Boxes</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4304" data-id="4304" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413280" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4250', true); return false;">Essential Fretboard</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4250" data-id="4250" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413281" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4300', true); return false;">The Grip</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4300" data-id="4300" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413282" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
      
    
      
            
    
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('4252', true); return false;">Texas Blues Speed Workshop - Level 2</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-4252" data-id="4252" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413283" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>
        
            </ul>
          </div>
        </li>
      
    
    
    
    
    
        
        <li class="accordion-item " data-accordion-item>
          <a class="accordion-title">Imported	 <sup>42</sup></a>
          <div class="accordion-content" data-tab-content>
            <ul class="sidebar-list">
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10818', true); return false;">Lenny Kravitz - Always On The Run (Guitar Tutorial)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10818" data-id="10818" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413284" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10971', true); return false;">Unplugged Acoustic Blues Guitar Lesson (Part 2) - Play the blues by yourself on guitar - EP305</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10971" data-id="10971" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413285" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('10999', true); return false;">How to play - Tito &amp; Tarantula - After Dark, easy guitar lesson (FULL+SOLO)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-10999" data-id="10999" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413286" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11616', true); return false;">How To Solo Over 'Little Wing': 4 Levels - Beginner to Advanced Guitar</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11616" data-id="11616" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413287" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11136', true); return false;">Just The Two Of Us â© 3 Levels - 001</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11136" data-id="11136" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413288" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('11141', true); return false;">EASY GUITAR LESSON | ENTER SANDMAN by Metallica</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-11141" data-id="11141" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413289" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9884', true); return false;">It's Easy to Play Fast | 10 Speedy but Simple Licks | Guitar Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9884" data-id="9884" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413290" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9768', true); return false;">Acoustic Blues Guitar Lesson - 1 Bar Licks And Phrases With Chords For Beginners Or Intermediates</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9768" data-id="9768" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413291" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9787', true); return false;">Jamming Alone - Using 2 Bar Phrases With The Slow Blues In E Groove (Part 2 Of A Series)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9787" data-id="9787" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413292" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9508', true); return false;">Tennessee Whiskey - Guitar Lesson -Chris Stapleton - Intro/Rhythm/Solo w/tabs</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9508" data-id="9508" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413293" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9509', true); return false;">Tennessee Whiskey Guitar Lesson - Chris Stapelton</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9509" data-id="9509" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413294" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9271', true); return false;">Let It Be Guitar Tutorial - The Beatles Guitar Lesson |Easy Chords + Solo + Guitar Cover|</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9271" data-id="9271" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413295" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8511', true); return false;">Slow Blues Jam | Sexy Guitar Backing Track</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8511" data-id="8511" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413296" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8513', true); return false;">Eric Clapton Style Acoustic Blues Guitar Lesson !</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8513" data-id="8513" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413297" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8552', true); return false;">How To Play Breakdown (and then...) by Rowland S Howard - Guitar Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8552" data-id="8552" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413298" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8732', true); return false;">Acoustic Blues Guitar Lesson - Open Positon E Run and Licks</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8732" data-id="8732" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413299" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8875', true); return false;">How to play Smoke On The Water by Deep Purple (Rock Guitar Lesson SB-311)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8875" data-id="8875" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413300" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8955', true); return false;">Stevie Ray Vaughn - Life By The Drop (Opening Lick) Guitar Lesson - Acoustic Blues</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8955" data-id="8955" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413301" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('9118', true); return false;">How to Play like Chicago Blues Legend Magic Sam</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-9118" data-id="9118" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413302" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('8054', true); return false;">Sleepwalk - Bass cover</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-8054" data-id="8054" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413303" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7949', true); return false;">Get Deep with some Funky Texas Style Acoustic Blues | Tuesday Blues 126</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7949" data-id="7949" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413304" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7953', true); return false;">How To Play Billy Strings' Dust In A Baggie - Advanced Bluegrass Guitar Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7953" data-id="7953" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413305" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7959', true); return false;">Sleepwalk Bass Tutorial</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7959" data-id="7959" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413306" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7863', true); return false;">Wish You Were Here Guitar Lesson - Pink Floyd Complete Guitar Tutorial |Chords + Solos + TAB|</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7863" data-id="7863" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413307" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6387', true); return false;">how to play &quot;Over the Hills and Far Away&quot; on guitar by &quot;Led Zeppelin&quot; - acoustic guitar lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6387" data-id="6387" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413308" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7147', true); return false;">The Black Keys Thickfreakness Guitar Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7147" data-id="7147" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413309" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('7155', true); return false;">30 Hot Rod Guitar Licks - #4 Hot Rod - Bill Kirchen</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-7155" data-id="7155" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413310" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6964', true); return false;">Man of Constant Sorrow | Guitar Lesson Tutorial</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6964" data-id="6964" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413311" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6907', true); return false;">ZZ Top - Jesus Just Left Chicago (Bass cover with tabs)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6907" data-id="6907" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413312" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6796', true); return false;">Kelly Valleau - Havana (Camila Cabello) - Fingerstyle Guitar</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6796" data-id="6796" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413313" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6777', true); return false;">Darren Watson | FREE BLUES GUITAR LESSON | Delta Blues Fingerstyle Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6777" data-id="6777" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413314" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6610', true); return false;">How to play Have you ever Seen the Rain - Creedence Clearwater Revival / GuiTabs Guitar Lesson</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6610" data-id="6610" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413315" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6605', true); return false;">Jimmy Brown show us how to play Led Zepplin Immigrant Song</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6605" data-id="6605" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413316" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6521', true); return false;">how to play Angie on guitar by the Rolling Stones - acoustic guitar lesson_tutorial</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6521" data-id="6521" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413317" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6549', true); return false;">The Easiest Blues on Acoustic Guitar | Beginner Friendly</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6549" data-id="6549" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413318" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6522', true); return false;">John Mayer Gives Blues Guitar Lesson (2018)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6522" data-id="6522" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413319" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6552', true); return false;">Patience  - Guns N Roses / MusikMan #056</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6552" data-id="6552" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413320" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6547', true); return false;">Blues BASS LESSON with TAB - 12 Bar Bass Lines in A (including Turnarounds)</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6547" data-id="6547" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413321" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6350', true); return false;">Cornell Dupree Hot Licks Full VHS</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6350" data-id="6350" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413322" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6349', true); return false;">Ghost Riders in the Sky: Guitar Cover, The Outlaws, Full Song</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6349" data-id="6349" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413323" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6371', true); return false;">Lil Nas X - Old Town Road ft. Billy Ray Cyrus [Remix Instrumental]</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6371" data-id="6371" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413324" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
      
    
      
              <li class="sidebar-list-item button play ">
                <a class="sidebar-list-item-link" onClick="thePlayer.openPackage('6159', true); return false;">50 Texas Blues Licks - #19 Double Stop Lenny - Guitar Lesson - Corey Congilio</a>
                
                  <form action="https://texasbluesalley.com/?ACT=330" accept-charset="utf-8" id="submitFavorite-6159" data-id="6159" data-action="remove" class="submitFavoriteForm" method="post"><div style="display:none">
<input type="hidden" name="params_id" value="8413325" />
</div>
                      <input type="hidden" name="delete" value="yes" />
                      <a class="sidebar-list-item-button delete-button" onClick="thePlayer.favoritesManager.removeFavoriteFromList(this); return false;"></a>
                  </form>
                
              </li>

    
        
            </ul>
          </div>
        </li>
      
    

    
    
    
    
    
  
</ul>
<script type="text/javascript">
$(function() {$('#favoritesListAccordion').foundation();}); 
</script> 


`;
  //#endregion

  const $ = cheerio.load(favhtml);
  const mockHtml = $(".accordion-title");
  return mockHtml;
}
app.get( '/', ( req, res ) => {
  // const str = async () => await txba.getFavs()
  // console.log( str )
  res.json(txba.parseFavoriteData(fakeFavHTML()))
  // res.set( 'Content-Type', 'text/html' );
  // res.send( Buffer.from(`<pre>${str}</pre>`) );
} )

app.get( '/defaultSearchEntries', ( req, res ) => {
  res.json(
    txba.parseSearchResults(
      txba.static.defaultSearch
    )
  )
})

app.get( '/txba', ( req, res ) => {
  res.json(txba)
})
app.listen( port, () => console.log( `listening on port: ${port}` ) )