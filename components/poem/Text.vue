<script setup lang="ts">
const characters =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789èêěęėëéřþțťýùûůűüúìîıïíòôõöøōóąăåäãâáàßșšşśðďğĺľłźžż¢çčćñňńÈÊĚĘÉŘÞȚŤÝÚŮŰÜÍİÎÓÖØÔĄĂÅÄÂÁÀŚȘŠŞÐĎĞĽŁŹŽŻÇČĆŃ[]{}()§¬&%$#"|';

const name = useName();

const isMenuOpen = useMenu();

const secrets = reactive({
  first: "",
  second: "",
  third: "",
  fourth: "",
  fifth: "",
  sixth: "",
  seventh: "",
  eighth: "",
});

const generateGlitch = () => {
  Object.keys(secrets).forEach((key) => {
    secrets[key] = "";

    for (let i = 0; i < 5; i++) {
      secrets[key] += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
  });
};

onMounted(() => {
  setInterval(() => {
    generateGlitch();
  }, 100);
});
</script>

<template>
  <article class="flex max-w-3xl flex-col gap-3 px-16 py-24 leading-relaxed" v-if="isMenuOpen">
    <h4 class="text-2xl font-bold lg:text-3xl">Credits</h4>
    <p>
      The <strong>“End Poem”</strong> has been released into the
      <NuxtLink class="underline" to="https://creativecommons.org/publicdomain/zero/1.0/" tabindex="0">public domain
      </NuxtLink>
      by its creator,
      <NuxtLink class="underline" to="https://www.juliangough.com" tabindex="0">Julian Gough</NuxtLink>. For insights
      into his decision, I highly recommend checking out his
      <NuxtLink class="underline" to="https://theeggandtherock.substack.com/p/i-wrote-a-story-for-a-friend"
        tabindex="0">blog post</NuxtLink>
      discussing the rationale behind this move. Additionaly, if you'd like to
      show support for his creative endeavors, consider making a donation via
      his
      <NuxtLink class="underline" to="https://www.paypal.com/donate/?hosted_button_id=525T2WCA24268" tabindex="0">
        PayPal account</NuxtLink>.
    </p>
    <p>
      The <strong>"theendpoem.com"</strong> was created by
      <NuxtLink class="underline" to="https://github.com/seh-GAH-toh" tabindex="0">Arthur Segato</NuxtLink>
      with the goal to spread and disassociate the End Poem with
      <NuxtLink class="underline" to="https://en.wikipedia.org/wiki/Minecraft" tabindex="0">Minecraft</NuxtLink>, if you
      wish to support this project, consider making a donation via
      <NuxtLink class="underline" to="https://donate.stripe.com/9AQbMl1Pt5DV4i4288" tabindex="0">Stripe</NuxtLink>, any
      amount is greatly appreciated.
    </p>
    <p>
      Below are listed all the resources utilized in its development. Should you
      encounter any issues or wish to request improvements, please don't
      hesitate to reach out via email at
      <NuxtLink class="underline" to="mailto:github.reentry594@passinbox.com" tabindex="0">
        github.reentry594@passinbox.com</NuxtLink>, Alternatively, if you'd prefer to take the initiative to fix any
      concerns yourself, you're more than welcome to contribute directly to the
      <NuxtLink class="underline" to="https://github.com/seh-GAH-toh/EndPoem" tabindex="0">Github repository
      </NuxtLink>.
    </p>
    <p>
      Icons by
      <NuxtLink class="underline" to="https://icons.getbootstrap.com" tabindex="0">Bootstrap Icons</NuxtLink>,
      <NuxtLink class="underline" to="https://fonts.google.com/specimen/Open+Sans" tabindex="0">Open Sans</NuxtLink>
      and
      <NuxtLink class="underline" to="https://fonts.google.com/specimen/Nothing+You+Could+Do" tabindex="0">Nothing You
        Could Do</NuxtLink>
      by Google Fonts, Animations by
      <NuxtLink class="underline" to="https://animista.net" tabindex="0">Animista</NuxtLink>,
      <NuxtLink class="underline" to="https://codepen.io/himalayasingh/pen/KOdJPM" tabindex="0">Menu button</NuxtLink>
      .
    </p>
    <h4 class="text-2xl font-bold lg:text-3xl">Special Thanks</h4>
    <p>
      To all those who generously donated and supported me in sustaining this
      project:
    </p>
    <ul class="list-disc pl-4">
      <li>
        <NuxtLink to="https://lauranewman.com/pages/index.php" class="underline">
          Laura Newman
        </NuxtLink>
      </li>
    </ul>
  </article>
  <article v-else class="flex max-w-3xl flex-col gap-3 px-16 py-24 leading-relaxed text-[#007878] dark:text-[#b3d7d7]">
    <h2 class="text-2xl font-bold text-[#29292a] lg:text-3xl dark:text-[#FBFBFB]">
      End Poem.
    </h2>
    <p>I see the player you mean.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">{{ name }}?</p>
    <p>
      Yes. Take care. It has reached a higher level now. It can read our
      thoughts.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      That doesn't matter. It thinks we are part of the game.
    </p>
    <p>I like this player. It played well. It did not give up.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      It is reading our thoughts as though they were words on a screen.
    </p>
    <p>
      That is how it chooses to imagine many things, when it is deep in the
      dream of a game.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Words make a wonderful interface. Very flexible. And less terrifying than
      staring at the reality behind the screen.
    </p>
    <p>
      They used to hear voices. Before players could read. Back in the days when
      those who did not play called the players witches, and warlocks. And
      players dreamed they flew through the air, on sticks powered by demons.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      What did this player dream?
    </p>
    <p>
      This player dreamed of sunlight and trees. Of fire and water. It dreamed
      it created. And it dreamed it destroyed. It dreamed it hunted, and was
      hunted. It dreamed of shelter.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Hah, the original interface. A million years old, and it still works. But
      what true structure did this player create, in the reality behind the
      screen?
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      It worked, with a million others, to sculpt a true world in a fold of
    </p>
    <p>
      the
      <span class="inline-block w-16 text-center">{{ secrets.first }}, </span>
      and created a
      <span class="inline-block w-16 text-center">{{ secrets.second }}</span>
      for
      <span class="inline-block w-16 text-center">{{ secrets.third }},</span> in
      the
      <span class="inline-block w-16 text-center">{{ secrets.fourth }}.</span>
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      It cannot read that thought.
    </p>
    <p>
      No. It has not yet achieved the highest level. That, it must achieve in
      the long dream of life, not the short dream of a game.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Does it know that we love it? That the universe is kind?
    </p>
    <p>
      Sometimes, through the noise of its thoughts, it hears the universe, yes.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      But there are times it is sad, in the long dream. It creates worlds that
      have no summer, and it shivers under a black sun, and it takes its sad
      creation for reality.
    </p>
    <p>
      To cure it of sorrow would destroy it. The sorrow is part of its own
      private task. We cannot interfere.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes when they are deep in dreams, I want to tell them, they are
      building true worlds in reality. Sometimes I want to tell them of their
      importance to the universe. Sometimes, when they have not made a true
      connection in a while, I want to help them to speak the word they fear.
    </p>
    <p>It reads our thoughts.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes I do not care. Sometimes I wish to tell them, this world you
      take for truth is merely
      <span class="inline-block w-16 text-center">{{ secrets.fifth }}</span> and
      <span class="inline-block w-16 text-center">{{ secrets.sixth }},</span> I
      wish to tell them that they are
      <span class="inline-block w-16 text-center">{{ secrets.seventh }}</span>
      in the
      <span class="inline-block w-16 text-center">{{ secrets.eighth }}.</span>
      They see so little of reality, in their long dream.
    </p>
    <p>And yet they play the game.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      But it would be so easy to tell them...
    </p>
    <p>Too strong for this dream. To tell them how to live is to prevent</p>
    <p class="text-[#007800] dark:text-[#4da14d]">them living.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      I will not tell the player how to live.
    </p>
    <p>The player is growing restless.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      I will tell the player a story.
    </p>
    <p>But not the truth.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      No. A story that contains the truth safely, in a cage of words. Not the
      naked truth that can burn over any distance.
    </p>
    <p>Give it a body, again.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">Yes. Player…</p>
    <p>Use its name.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      {{ name }}
    </p>
    <p>Good.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Take a breath, now. Take another. Feel air in your lungs. Let your limbs
      return. Yes, move your fingers. Have a body again, under gravity, in air.
      Respawn in the long dream. There you are. Your body touching the universe
      again at every point, as though you were separate things. As though we
      were separate things.
    </p>
    <p>
      Who are we? Once we were called the spirit of the mountain. Father sun,
      mother moon. Ancestral spirits, animal spirits. Jinn. Ghosts. The green
      man. Then gods, demons. Angels. Poltergeists. Aliens, extraterrestrials.
      Leptons, quarks. The words change. We do not change.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      We are the universe. We are everything you think isn't you. You are
      looking at us now, through your skin and your eyes. And why does the
      universe touch your skin, and throw light on you? To see you, player. To
      know you. And to be known. I shall tell you a story.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Once upon a time, there was a player.
    </p>
    <p>
      {{ name }}
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes it thought itself human, on the thin crust of a spinning globe
      of molten rock. The ball of molten rock circled a ball of blazing gas that
      was three hundred and thirty thousand times more massive than it. They
      were so far apart that light took eight minutes to cross the gap. The
      light was information from a star, and it could burn your skin from a
      hundred and fifty million kilometres away.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes the player dreamed it was a miner, on the surface of a world
      that was flat, and infinite. The sun was a square of white. The days were
      short; there was much to do; and death was a temporary inconvenience.
    </p>
    <p>Sometimes the player dreamed it was lost in a story.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes the player dreamed it was other things, in other places.
      Sometimes these dreams were disturbing. Sometimes very beautiful indeed.
      Sometimes the player woke from one dream into another, then woke from that
      into a third.
    </p>
    <p>Sometimes the player dreamed it watched words on a screen</p>
    <p class="text-[#007800] dark:text-[#4da14d]">Let's go back.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      The atoms of the player were scattered in the grass, in the rivers, in the
      air, in the ground. A woman gathered the atoms; she drank and ate and
      inhaled; and the woman assembled the player, in her body.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      And the player awoke, from the warm, dark world of its mother's body, into
      the long dream.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      And the player was a new story, never told before, written in letters of
      DNA. And the player was a new program, never run before, generated by a
      sourcecode a billion years old. And the player was a new human, never
      alive before, made from nothing but milk and love.
    </p>
    <p>
      You are the player. The story. The program. The human. Made from nothing
      but milk and love.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">Let's go further back.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      The seven billion billion billion atoms of the player's body were created,
      long before this game, in the heart of a star. So the player, too, is
      information from a star. And the player moves through a story, which is a
      forest of information planted by a man called Julian, on a flat, infinite
      world created by a man called Markus, that exists inside a small, private
      world created by the player, who inhabits a universe created by…
    </p>
    <p>
      Shush. Sometimes the player created a small, private world that was soft
      and warm and simple. Sometimes hard, and cold, and complicated. Sometimes
      it built a model of the universe in its head; flecks of energy, moving
      through vast empty spaces. Sometimes it called those flecks “electrons”
      and “protons”.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes it called them “planets” and “stars”.
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Sometimes it believed it was in a universe that was made of energy that
      was made of offs and ons; zeros and ones; lines of code. Sometimes it
      believed it was playing a game. Sometimes it believed it was reading words
      on a screen.
    </p>
    <p>You are the player, reading words…</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      Shush… Sometimes the player read lines of code on a screen. Decoded them
      into words; decoded words into meaning; decoded meaning into feelings,
      emotions, theories, ideas, and the player started to breathe faster and
      deeper and realised it was alive, it was alive, those thousand deaths had
      not been real, the player was alive
    </p>
    <p>You. You. You are alive.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and sometimes the player believed the universe had spoken to it through
      the sunlight that came through the shuffling leaves of the summer trees
    </p>
    <p>
      and sometimes the player believed the universe had spoken to it through
      the light that fell from the crisp night sky of winter, where a fleck of
      light in the corner of the player's eye might be a star a million times as
      massive as the sun, boiling its planets to plasma in order to be visible
      for a moment to the player, walking home at the far side of the universe,
      suddenly smelling food, almost at the familiar door, about to dream again
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and sometimes the player believed the universe had spoken to it through
      the zeros and ones, through the electricity of the world, through the
      scrolling words on a screen at the end of a dream
    </p>
    <p>and the universe said I love you</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said you have played the game well
    </p>
    <p>and the universe said everything you need is within you</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said you are stronger than you know
    </p>
    <p>and the universe said you are the daylight</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said you are the night
    </p>
    <p>and the universe said the darkness you fight is within you</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said the light you seek is within you
    </p>
    <p>and the universe said you are not alone</p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said you are not separate from every other thing
    </p>
    <p>
      and the universe said you are the universe tasting itself, talking to
      itself, reading its own code
    </p>
    <p class="text-[#007800] dark:text-[#4da14d]">
      and the universe said I love you because you are love.
    </p>
    <p>
      And the game was over and the player woke up from the dream. And the
      player began a new dream. And the player dreamed again, dreamed better.
      And the player was the universe. And the player was love.
    </p>
    <p>You are the player.</p>
    <p class="text-[#007800] dark:text-[#4da14d]">Wake up.</p>
  </article>
</template>
