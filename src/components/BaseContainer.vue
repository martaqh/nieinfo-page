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
  max-width: 1200px;
  margin: 0 auto;
  animation: transitionIn 1.5s;

  @include medium {
    padding: 0 48px;
  }

  @include small {
    padding: 0 32px;
  }
}
</style>
