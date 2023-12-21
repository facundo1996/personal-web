<template>
  <div class="">

    <div class="background-box-about-me">
      <h5 class="subtitle">Principales</h5>
      <div class="skills">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <div class="img-skill-container">
            <img :src="skill.icon" alt="">
          </div>
          <div>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="background-box-about-me mt-4">
      <h5 class="subtitle">Librerias</h5>
      <div class="skills">
        <div class="skill" v-for="(skill, index) in styled" :key="index">
          <div class="img-skill-container">
            <img :src="skill.icon" alt="">
          </div>
          <div>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>

    <div class="background-box-about-me mt-4">
      <h5 class="subtitle">Otras Tecnologias</h5>
      <div class="skills">
        <div class="skill" v-for="(skill, index) in otherSkills" :key="index">
          <div class="img-skill-container">
            <img :src="skill.icon" alt="">
          </div>
          <div>
            {{ skill.name }}
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "Skills",
  data() {
    return {
      skills: [
        {
          name: 'Vue JS',
          icon: 'https://www.svgrepo.com/show/452130/vue.svg',
        },
        {
          name: 'React JS',
          icon: 'https://www.svgrepo.com/show/452092/react.svg',
        },
        {
          name: 'Next JS',
          icon: 'https://www.svgrepo.com/show/521299/next-16.svg',
        },
        {
          name: 'JavaScript',
          icon: 'https://www.svgrepo.com/show/349419/javascript.svg',
        },
        {
          name: 'TypeScript',
          icon: 'https://www.svgrepo.com/show/374146/typescript-official.svg',
        },
        {
          name: 'Quasar',
          icon: 'https://www.svgrepo.com/show/374024/quasar.svg',
        },
        {
          name: 'Node JS',
          icon: 'https://www.svgrepo.com/show/452075/node-js.svg',
        },
        {
          name: 'HTML',
          icon: 'https://www.svgrepo.com/show/452228/html-5.svg',
        },
        {
          name: 'CSS',
          icon: 'https://www.svgrepo.com/show/452185/css-3.svg',
        },

      ],
      styled: [
        {
          name: 'Lodash',
          icon: 'https://www.svgrepo.com/show/354007/lodash.svg',
        },
        {
          name: 'jQuery',
          icon: 'https://www.svgrepo.com/show/452242/jquery.svg',
        },
        {
          name: 'Bootstrap',
          icon: 'https://www.svgrepo.com/show/353498/bootstrap.svg',
        },
        {
          name: 'Material UI',
          icon: 'https://www.svgrepo.com/show/354048/material-ui.svg',
        },
        {
          name: 'Tailwind',
          icon: 'https://www.svgrepo.com/show/374118/tailwind.svg',
        },
        {
          name: 'Vuex',
          icon: 'https://user-images.githubusercontent.com/7110136/29002857-9e802f08-7ab4-11e7-9c31-604b5d0d0c19.png',
        },
        {
          name: 'Vue Router',
          icon: 'https://www.svgrepo.com/show/452130/vue.svg',
        },
      ],
      otherSkills: [
        {
          name: 'GitHub',
          icon: 'https://www.svgrepo.com/show/512317/github-142.svg',
        },
        {
          name: 'Jira',
          icon: 'https://www.svgrepo.com/show/452241/jira.svg',
        },
        {
          name: 'Trello',
          icon: 'https://www.svgrepo.com/show/475688/trello-color.svg',
        },
        {
          name: 'Figma',
          icon: 'https://www.svgrepo.com/show/452202/figma.svg',
        },
        {
          name: 'Adobe XD',
          icon: 'https://www.svgrepo.com/show/452151/adobe-xd.svg',
        },
        {
          name: 'Postman',
          icon: 'https://www.svgrepo.com/show/354202/postman-icon.svg',
        },
        {
          name: 'Insomnia',
          icon: 'https://www.svgrepo.com/show/353904/insomnia.svg',
        },
      ]
    }
  },
}
</script>