<template>
  <div
    class="bg-beige-100 min-h-screen bg-right-to-left-waves bg-[length:848px_406px] sm:bg-[length:auto] bg-[right_bottom] bg-no-repeat relative"
  >
    <NuxtLayout>
      <div class="select-none flex flex-col gap-2 mt-10 sm:absolute sm:top-1/2 sm:-translate-y-1/2">
        <h1 class="text-[7vw] sm:text-[3vw]">{{ $t("role") }}</h1>
        <h2 class="text-[8vw] sm:text-[4vw] font-bold">Igor Duarte</h2>
      </div>
      <div class="flex absolute bottom-2.5 mx-auto inset-x-0 w-max">
        <SVGArrowScroll class="cursor-pointer"/>
      </div>
    </NuxtLayout>
  </div>
</template>