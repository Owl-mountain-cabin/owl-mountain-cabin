<template>
  <div class="owl-home-second-half-wrapper">
    <iframe
      src="https://www.youtube-nocookie.com/embed/Okj8qrKrVWs?si=mwrS63Jiq6DHc-V4"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.owl-home-second-half-wrapper {
  $this: "owl-home-second-half";
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
  iframe,
  object,
  embed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
