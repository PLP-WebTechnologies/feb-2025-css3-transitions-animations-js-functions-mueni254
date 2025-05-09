// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Get DOM elements
    const bgColorPicker = document.getElementById('bgColor');
    const savePrefBtn = document.getElementById('savePref');
    const animateBtn = document.getElementById('animateBtn');
    const animatedBox = document.getElementById('animatedBox');
    
    // Load saved preferences
    loadPreferences();
    
    // Apply fade-in animation to main elements
    document.querySelector('.container').classList.add('fade-in');
    
    // Save preferences to localStorage
    savePrefBtn.addEventListener('click', function() {
        localStorage.setItem('bgColor', bgColorPicker.value);
        document.body.style.backgroundColor = bgColorPicker.value;
        showFeedback('Preferences saved!');
    });
    
    // Trigger box animation
    animateBtn.addEventListener('click', function() {
        animatedBox.classList.toggle('animate');
        this.textContent = animatedBox.classList.contains('animate') 
            ? 'Stop Animation' 
            : 'Trigger Animation';
    });
    
    // Load preferences function
    function loadPreferences() {
        const savedColor = localStorage.getItem('bgColor');
        if (savedColor) {
            document.body.style.backgroundColor = savedColor;
            bgColorPicker.value = savedColor;
        }
    }
    
    // Show feedback message
    function showFeedback(message) {
        const feedback = document.createElement('div');
        feedback.textContent = message;
        feedback.style.position = 'fixed';
        feedback.style.bottom = '20px';
        feedback.style.right = '20px';
        feedback.style.padding = '10px 20px';
        feedback.style.backgroundColor = '#4CAF50';
        feedback.style.color = 'white';
        feedback.style.borderRadius = '4px';
        feedback.style.animation = 'fadeIn 0.5s ease-in';
        document.body.appendChild(feedback);
        
        setTimeout(() => {
            feedback.style.animation = 'fadeIn 0.5s ease-in reverse';
            setTimeout(() => feedback.remove(), 500);
        }, 2000);
    }
});