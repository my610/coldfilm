<template>
  <div class="text-center" v-show="loading">
    <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
    <span class="sr-only">Loading...</span>
  </div>
</template>
<script>
  export default {
    props: {
      loading: {
        type: Boolean,
        required: true
      }
    }
  }
</script>
<style>
  /*!
  *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome
  *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)
  */
  /* FONT PATH
  * -------------------------- */
  @font-face {
    font-family: 'FontAwesome';
    src: url('/static/font-awesome/fonts/fontawesome-webfont.eot?v=4.7.0');
    src: url('/static/font-awesome/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
    url('/static/font-awesome/fonts/fontawesome-webfont.woff2?v=4.7.0') format('woff2'),
    url('/static/font-awesome/fonts/fontawesome-webfont.woff?v=4.7.0') format('woff'),
    url('/static/font-awesome/fonts/fontawesome-webfont.ttf?v=4.7.0') format('truetype'),
    url('/static/font-awesome/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular')
    format('svg');
    font-weight: normal;
    font-style: normal;
  }

  .fa-pulse {
    -webkit-animation: fa-spin 1s infinite steps(8);
    animation: fa-spin 1s infinite steps(8);
  }

  .fa {
    display: inline-block;
    font: normal normal normal 14px/1 FontAwesome;
    font-size: inherit;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .fa-spinner:before {
    content: "\f110";
  }

  .fa-3x {
    font-size: 3em;
  }

  .fa-fw {
    width: 1.28571429em;
    text-align: center;
  }
</style>
