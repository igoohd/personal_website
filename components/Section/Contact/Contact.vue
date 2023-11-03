<template>
  <div
    class="bg-beige-100 min-h-screen bg-right-to-left-waves bg-no-repeat bg-[length:848px_406px] md:bg-[length:100%] bg-[right_bottom] relative"
  >
    <NuxtLayout>
      <div class="select-none flex flex-col gap-2 mt-10 sm:absolute sm:top-1/2 sm:-translate-y-1/2">
        <h1 class="text-2xl sm:text-4xl mb-1 sm:mb-4">{{ $t("role") }}</h1>
        <h2 class="text-4xl sm:text-6xl font-bold mb-px sm:mb-3">Igor Duarte</h2>
        <Button class="w-32 sm:w-48 text-base sm:text-2xl">Contate-me</Button>
      </div>
      <div class="flex absolute bottom-2.5 mx-auto inset-x-0 w-max">
        <SVGArrowScroll class="cursor-pointer"/>
      </div>
    </NuxtLayout>
  </div>
</template>