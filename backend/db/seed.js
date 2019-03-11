const Song = require("./models/song");

Song.remove({}).then(function() {
  Song.create({
    title: "The Next",
    notes: "78-88bpm 23/24/27",
    lyrics:
      "VERSE 1 - Surfaced up from the depths of my soul Alone in pain, I was hurting my brain I was eaten whole, I was eaten whole Criticized, doubt had me paralyzed Darkened skies making me Realize, I had to open my eyes CHORUS - I made mistakes, you made some too I owned up to mine, and got over you I spent  two years, two years in mourning Meanwhile you're adoring The next... The next... The next VERSE 2	- Time with you really shattered my soul Down the drain, I was hurting my brain Down that rabbit hole, down that rabbit hole You gave your charms to another man’s arms It helps you to ignore your pain, wounds And scars, it won’t get you far CHORUS - I made mistakes, you made some too I owned up to mine, and got over you I spent  two years, two years in mourning Meanwhile you're adoring The next... The next... The next BRIDGE	- My path is clear and no thanks to you I don’t start fights I can’t aford to lose Escape from hurt was long overdue The next will have to get over you soon",
    author: "Konjo"
  });

  Song.create({
    title: "Comic Jams",
    notes: "120-130bpm 27",
    lyrics:
      "VERSE - I was hung up on my ex, my life was a mess I didn’t know where to go You liked how I sang, hit it off with a bang You helped me find my flow CHORUS - Sarcastic and bold, I did what you told I bounced back from where I had been The lawyer with the rhythm, the gift I'd been given When I think about you I grin Oh, I wish you we-ell Oh, I wish you we-ell VERSE - You were obsessed, cause I look good in vests We had everything we need Written in comic sans, you put it in my hands Oh yeah, you set me free CHORUS - Sarcastic and bold, I did what you told I bounced back from where I had been The lawyer with rhythm, the gift I'd been given When I think about you I grin BRIDGE - Did you ever? Find what inspires Did you ever? Live your desires Did you ever? Get out of this town Did you ever? See the whole world up and down Up and down now CHORUS - Sarcastic and bold, I did what you told I bounced back from where I had been The lawyer with rhythm, the gift I'd been given When I think about you I grin Sarcastic and bold, I did what you told I bounced back from where I had been The lawyer with rhythm, the gift I'd been given When I think about you I grin Oh, I miss you And your Comic Jams",
    author: "Konjo"
  });

  Song.create({
    title: "Hard to Let Go (Never See You Again)",
    notes: "120-130bpm 27",
    lyrics:
      "VERSE - Why is it so hard to let go? Your face in the crowd told me everything I needed to know Why is it so hard to let go? CHORUS - Love wasn’t our fate, Too little too late, My unspoken apology My confessions, and your concession Oh and the choices we made Too little too late, Love wasn’t our fate And love was not our fate VERSE - Why did we ever let go? Far in the mirror the skyline grew distant, I looked out the window I couldn’t contend for an instant Why did we ever let go? CHORUS - Love wasn’t our fate, (Love isn’t our fate) Too little too late, (Too little too late) My unspoken apology My confessions, (My confessions) and your concessions, (Your concessions) Oh and the choices we made Too little too late, (Too little too late) Love wasn’t our fate, (Love isn’t our fate) And love was not our fate BRIDGE - Na Na Na Na Na, Na Na Na Na Na As I stared through the window And the plane left the sky My Love on the ground But my Body flew high Numb to the world after two years Surrendering up to my big fears The earth spun below me But I still stayed in space I closed my eyes to drift We both tried to hide Cause Goddamn our pride We didn’t even say goodbye I knew I would never see you again (We didn’t even say goodbye) Your face, you never cried and my eyes were still dry A part of me died I knew I would never see you again (We didn’t even say goodbye) REPRISE ENDING - Why is it so hard to let go?",
    author: "Konjo"
  });

  Song.create({
    title: "The Look in Your Eyes",
    notes: "85-95bpm 56",
    lyrics:
      "VERSE - I’m stuck with these memories And thinking about every… mistake, mistake Marine corps meets the peace corps and I’m sore, From all these memories I been thinking, ohhh I’ve been thinking, ohhh about you, about you How it ended, defriended, Hearts were blended, I’m so blue CHORUS - And I have to remember Teary eyes in a crowd full of scorn And I have to remember That awful ride, that you confide, you could’ve died And I have to remember I have to be, deliberate, considerate and kind And I have to remember The look in your eyes VERSE - We had both seen the world around And been thrown down, our fair share I couldn’t see that you needed me You needed me, but I, but I wasn’t there CHORUS And I have to remember Teary eyes in a crowd full of scorn And I have to remember The look in your eyes BRIDGE - I’m stuck with these memories Trying to Shake It Off, You were mine, Can’t keep those tears from your eyes And I have to remember",
    author: "Konjo"
  });
});
