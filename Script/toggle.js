function toggleParagraph(element) {
    const container = element.closest('.toggle-container');
    const paragraph = container.querySelector('.toggle-paragraph');
    
    if (paragraph.style.display === 'none') {
        paragraph.style.display = 'block';
    } else {
        paragraph.style.display = 'none';
    }
}