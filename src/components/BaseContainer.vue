<template>
  <div class="base-container">
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

.base-container {
  max-width: 1400px;
  margin: 0 auto;
  animation: transitionIn 1.5s;
  // padding: 0 48px;

  @include medium {
    padding: 0 48px;
  }
}
</style>
