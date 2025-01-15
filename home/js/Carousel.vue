<template>
    <div class="carousel-container">
        <div class="carousel-wrapper" :style="{ transform: `rotateY(${currentRotation}deg)` }">
            <div
                v-for="(slide, index) in slides"
                :key="index"
                class="carousel-slide"
                :style="{
                    transform: `rotateY(${index * (360 / slides.length)}deg) translateZ(400px)`,
                    opacity: currentIndex === index ? 1 : 0.5
                }"
                @click="goToSlide(index)"
            >
                <img :src="slide.image" :alt="slide.title">
                <div class="slide-content">
                    <h3>{{ slide.title }}</h3>
                    <p>{{ slide.description }}</p>
                </div>
            </div>
        </div>
        
        <div class="carousel-controls">
            <button class="control-btn prev" @click="prevSlide">←</button>
            <div class="carousel-indicators">
                <span
                    v-for="(_, index) in slides"
                    :key="index"
                    :class="['indicator', { active: currentIndex === index }]"
                    @click="goToSlide(index)"
                ></span>
            </div>
            <button class="control-btn next" @click="nextSlide">→</button>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const slides = [
    {
        title: 'Mountain View',
        description: 'Majestic peaks touching the clouds',
        image: '/images/gradpic.JPG'
    },
    {
        title: 'Ocean Sunset',
        description: 'Golden rays reflecting on calm waters',
        image: '/images/bmk.jpg'
    },
    {
        title: 'Forest Trail',
        description: 'A serene path through ancient trees',
        image: '/images/bmk.jpg'
    },
    {
        title: 'Desert Dunes',
        description: 'Endless waves of golden sand',
        image: '/images/bmk.jpg'
    }
]

const currentIndex = ref(0)
const currentRotation = computed(() => -currentIndex.value * (360 / slides.length))

const nextSlide = () => {
    currentIndex.value = (currentIndex.value + 1) % slides.length
}

const prevSlide = () => {
    currentIndex.value = (currentIndex.value - 1 + slides.length) % slides.length
}

const goToSlide = (index) => {
    currentIndex.value = index
}

// Auto-advance slides every 5 seconds
setInterval(nextSlide, 5000)
</script>