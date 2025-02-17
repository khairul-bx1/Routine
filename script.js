function addTopic(subject) {
    let topicInput, topicList;
  
    switch (subject) {
      case 'programming':
        topicInput = document.getElementById('programmingTopic');
        topicList = document.getElementById('programmingTopics');
        break;
      case 'physics':
        topicInput = document.getElementById('physicsTopic');
        topicList = document.getElementById('physicsTopics');
        break;
      case 'math':
        topicInput = document.getElementById('mathTopic');
        topicList = document.getElementById('mathTopics');
        break;
      case 'english':
        topicInput = document.getElementById('englishTopic');
        topicList = document.getElementById('englishTopics');
        break;
      default:
        return;
    }
  
    const topic = topicInput.value.trim();
    if (topic) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${topic}</span>
        <button class="delete-btn" onclick="deleteTopic(this)"><i class="fas fa-trash"></i></button>
      `;
      topicList.appendChild(li);
      topicInput.value = '';
    }
  }
  
  function deleteTopic(button) {
    const li = button.parentElement;
    li.remove();
  }