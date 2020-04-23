<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Менджер паролей</h1>
      </div>

      <v-spacer></v-spacer>

      <v-btn
      float
      color="primary"
      v-for="(link,i) in menuLinks "
      :key='i' 
      :to="link.url"
       >
        <span class="mr-2">{{link.title}}</span>
      </v-btn>
      
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>


export default {
  name: 'App',

  components: {
   
  },

  data: () =>({
 
      menuLinks: [
        {title: 'Профиль', url:'/profile'},
        {title: 'Добавить ресурс', url:'/addResource'},
        {title: 'Мои пароли', url:'/mypass'},
        {title: 'Выход',url:'/logout'},
        {title: 'Вход' ,url:'/login'},
      ]
    
  })
};
</script>
