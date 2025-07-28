import Reveal from 'reveal.js';
import Markdown from 'reveal.js/plugin/markdown/markdown.esm.js';
import Notes from 'reveal.js/plugin/notes/notes.esm.js';
import Highlight from 'reveal.js/plugin/highlight/highlight.esm.js';

// Initialize Reveal.js
const deck = new Reveal({
    // Display presentation control arrows
    controls: true,
    
    // Help the user learn the controls by providing hints
    controlsTutorial: true,
    
    // Determines where controls appear
    controlsLayout: 'bottom-right',
    
    // Visibility rule for backwards navigation arrows
    controlsBackArrows: 'faded',
    
    // Display a presentation progress bar
    progress: true,
    
    // Display the page number of the current slide
    slideNumber: 'c/t',
    
    // Add the current slide number to the URL hash
    hash: true,
    
    // Push each slide change to the browser history
    history: true,
    
    // Enable keyboard shortcuts
    keyboard: true,
    
    // Enable the slide overview mode
    overview: true,
    
    // Vertical centering of slides
    center: false,
    
    // Enables touch navigation
    touch: true,
    
    // Loop the presentation
    loop: false,
    
    // Change the presentation direction to be RTL
    rtl: false,
    
    // Randomizes the order of slides each time the presentation loads
    shuffle: false,
    
    // Turns fragments on and off globally
    fragments: true,
    
    // Flags whether to include the current fragment in the URL
    fragmentInURL: true,
    
    // Flags if the presentation is running in an embedded mode
    embedded: false,
    
    // Flags if we should show a help overlay when ? is pressed
    help: true,
    
    // Flags if speaker notes should be visible to all viewers
    showNotes: false,
    
    // Global override for autoplaying embedded media
    autoPlayMedia: false,
    
    // Global override for preloading lazy-loaded iframes
    preloadIframes: null,
    
    // Number of milliseconds between automatically proceeding to the next slide
    autoSlide: 0,
    
    // Stop auto-sliding after user input
    autoSlideStoppable: true,
    
    // Use this method for navigation when auto-sliding
    autoSlideMethod: null,
    
    // Specify the average time in seconds that you think you will spend
    // presenting each slide. This is used to show a pacing timer in the
    // speaker view
    defaultTiming: 120,
    
    // Specify the total time in seconds that is available to present
    totalTime: 1800, // 30 minutes
    
    // Specify the minimum amount of time you want to allot to each slide
    minimumTimePerSlide: 0,
    
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    
    // Hides the address bar on mobile devices
    hideAddressBar: true,
    
    // Opens links in an iframe preview overlay
    previewLinks: false,
    
    // Transition style
    transition: 'slide', // none/fade/slide/convex/concave/zoom
    
    // Transition speed
    transitionSpeed: 'default', // default/fast/slow
    
    // Transition style for full page slide backgrounds
    backgroundTransition: 'fade', // none/fade/slide/convex/concave/zoom
    
    // Number of slides away from the current that are visible
    viewDistance: 3,
    
    // Parallax background image
    parallaxBackgroundImage: '',
    
    // Parallax background size
    parallaxBackgroundSize: '',
    
    // Number of pixels to move the parallax background per slide
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,
    
    // The display mode that will be used to show slides
    display: 'block',
    
    // Initialize plugins
    plugins: [ Markdown, Notes, Highlight ]
});

deck.initialize();

// Add custom event listeners for interactive elements
document.addEventListener('DOMContentLoaded', () => {
    // Handle video embeds - ensure they don't autoplay
    const videos = document.querySelectorAll('iframe[src*="youtube.com"]');
    videos.forEach(video => {
        const src = video.getAttribute('src');
        if (src && !src.includes('autoplay=0')) {
            video.setAttribute('src', src + (src.includes('?') ? '&' : '?') + 'autoplay=0');
        }
    });
    
    // Add click handlers for any interactive elements
    const interactiveElements = document.querySelectorAll('.interactive');
    interactiveElements.forEach(element => {
        element.addEventListener('click', (e) => {
            e.stopPropagation(); // Prevent slide navigation
        });
    });
});

// Export for debugging if needed
window.deck = deck;