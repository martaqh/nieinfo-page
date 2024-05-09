<template>
  <div class="base-page">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@keyframes transitionIn {
  from {
    opacity: 0;
    transition: rotateX(-10deg);
  }
  to {
    opacity: 1;
    transition: rotateX(0);
  }
}

.base-page {
  max-width: 1200px;
  margin: 0 auto;
  animation: transitionIn 1.5s;
}
</style>
