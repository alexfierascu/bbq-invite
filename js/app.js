// Set the target date and time (Today 19:30 GMT+3)
const now = new Date();
const targetDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 19, 30, 0);

// If the target time has already passed today, it means the event is over
if (now > targetDate) {
  targetDate.setDate(targetDate.getDate() + 1); // Set to tomorrow (though this is just for demo)
}

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate.getTime() - now;

  if (distance < 0) {
    // Event has started/ended
    document.getElementById('countdown').style.display = 'none';
    document.getElementById('expired-message').style.display = 'block';
    return;
  }

  const hours = Math.floor(distance / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
  document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
  document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function showExcitement() {
  const messages = [
    "🔥 Can't wait to see you there! 🔥",
    "🍖 The grills are ready! 🍖",
    "🎉 It's going to be epic! 🎉",
    "🌭 Bring your appetite! 🌭",
    "🥩 Best BBQ of the year! 🥩"
  ];

  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
}

// Update countdown every second
updateCountdown();
setInterval(updateCountdown, 1000);

// Add some fun interactive elements
document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.container');

  // Add a subtle floating animation
  setInterval(() => {
    container.style.transform = `translateY(${Math.sin(Date.now() * 0.001) * 5}px)`;
  }, 50);
});
