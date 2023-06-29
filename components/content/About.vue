<template>
    <main class="pt-8 pb-20 lg:pb-28 lg:pt-12 relative">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-1 lg:grid-cols-4">
                <div class="lg:pr-8"></div>

                <article class="mt-12 lg:mt-0 prose-lg lg:prose-xl col-span-4">
                    <h2>
                        <div class="font-rubik font-bold text-yellow-200 text-xl sm:text-2xl md:text-3xl glow-yellow-txt">
                            <slot name="title" />
                        </div>
                    </h2>
                    <p>
                        <div class="mt-3 max-w-md font-ubuntu text-cyan-100 sm:text-lg md:mt-5 md:text-xl md:max-w-2xl glow-cyan-txt pb-20">
                            <slot name="description" />
                        </div>
                    </p>
                </article>

            </div>
        </div>
    </main>
</template>