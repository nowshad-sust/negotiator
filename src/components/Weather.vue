<template>
  <v-card v-if="!error" class="mx-auto mt-5 mb-3" max-width="300">
    <v-list-item two-line>
      <v-list-item-content>
        <v-list-item-title class="headline">{{ name }}</v-list-item-title>
        <v-list-item-subtitle>{{ dateTimeLondon }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-card-text>
      <v-row align="center">
        <v-col class="display-3" cols="12"> {{ temp }}&deg;C </v-col>
        <v-col class="display-6" cols="12">
          Feels like {{ feelsLike }}&deg;C
        </v-col>
      </v-row>
    </v-card-text>

    <v-list-item>
      <v-list-item-icon>
        <v-icon>mdi-send</v-icon>
      </v-list-item-icon>
      <v-list-item-subtitle>{{ windSpeed }} meter/sec</v-list-item-subtitle>
    </v-list-item>
  </v-card>
  <v-card v-else class="mx-auto mt-5 mb-3" max-width="300">
    <v-alert color="red" border="left" elevation="2" colored-border>
      {{ error }}
    </v-alert>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { state, actions } from '../store';

@Component({})
export default class Weather extends Vue {
  name = 'London';
  temp = 0;
  feelsLike = 0;
  windSpeed = 0;

  get dateTimeLondon() {
    const date = new Date();
    return date.toLocaleString('en-GB', { timeZone: 'Europe/London' });
  }
  get error() {
    return state.error;
  }

  created() {
    this.fetchWeather();
  }

  async fetchWeather() {
    const appId = process.env.VUE_APP_WEATHER_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&appid=${appId}`;
    try {
      const { main, wind } = await fetch(url).then(res => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error();
        }
      });
      this.temp = parseInt(main.temp);
      this.feelsLike = parseInt(main.feels_like);
      this.windSpeed = parseFloat(wind.speed.toFixed(2));
    } catch {
      actions.setError('Failed to fetch London weather data!');
    }
  }
}
</script>

<style></style>
