// Function to display the details for selected destinations and manage comments and reviews
function showDetails(location) {
    let content = '';
    if (location === 'visakhapatnam') {
        content = `
            <div class="destination-details">
                <h3>Visakhapatnam, India</h3>
                <div class="star-rating">
                    <span class="star" data-value="1" onclick="setRating(event, 'visakhapatnam')">★</span>
                    <span class="star" data-value="2" onclick="setRating(event, 'visakhapatnam')">★</span>
                    <span class="star" data-value="3" onclick="setRating(event, 'visakhapatnam')">★</span>
                    <span class="star" data-value="4" onclick="setRating(event, 'visakhapatnam')">★</span>
                    <span class="star" data-value="5" onclick="setRating(event, 'visakhapatnam')">★</span>
                </div>
                <div class="reviews" id="vizag-reviews"></div>
                <h4>Leave a Comment:</h4>
                <textarea rows="3" class="form-control" placeholder="Your comment here..." id="vizag-comment"></textarea>
                <button class="btn btn-success mt-2" onclick="submitComment('visakhapatnam')">Submit</button>
                <div class="sub-attraction">
                    <div class="description">
                        <strong>Borra Caves:</strong> A stunning network of caves formed by the Gosthani River.
                    </div>
                    <img src="borra caves.jpg" alt="Borra Caves" class="img-fluid">
                </div>
                <div class="sub-attraction">
                    <div class="description">
                        <strong>Kailasagiri Hill:</strong> Offers panoramic views of the city and the sea.
                    </div>
                    <img src="kailashgiri.jpg" alt="Kailasagiri Hill" class="img-fluid">
                </div>
                <div class="sub-attraction">
                    <div class="description">
                        <strong>Submarine Museum:</strong> A unique museum showcasing a real submarine.
                    </div>
                    <img src="submarine.jpg" alt="Submarine Museum" class="img-fluid">
                </div>
                <div class="sub-attraction">
                    <div class="description">
                        <strong>Rose Hill Church:</strong> A church with a beautiful view of the city and sea.
                    </div>
                    <img src="rose hill church.jpg" alt="Rose Hill Church" class="img-fluid">
                </div>
                <div class="sub-attraction">
                    <div class="description">
                        <strong>Indra Gandhi Zoological Park:</strong> A must-visit for wildlife lovers.
                    </div>
                    <img src="zoo.jpg" alt="Indra Gandhi Zoological Park" class="img-fluid">
                </div>
            </div>
        `;
    }
    
    } else if (location === 'bali') {
        content = `
            <div class="destination-details">
                <h3>Bali, Indonesia</h3>
                <div class="star-rating" id="bali-stars">
                    <span class="star" data-value="1" onclick="setRating(event, 'bali')">★</span>
                    <span class="star" data-value="2" onclick="setRating(event, 'bali')">★</span>
                    <span class="star" data-value="3" onclick="setRating(event, 'bali')">★</span>
                    <span class="star" data-value="4" onclick="setRating(event, 'bali')">★</span>
                    <span class="star" data-value="5" onclick="setRating(event, 'bali')">★</span>
                </div>
                <div class="reviews" id="bali-reviews"></div>
                <h4>Leave a Comment:</h4>
                <textarea rows="3" class="form-control" placeholder="Your comment here..." id="bali-comment"></textarea>
                <button class="btn btn-success mt-2" onclick="submitComment('bali')">Submit</button>
                <div class="sub-attraction">
                    <strong>Uluwatu Temple:</strong> A clifftop temple with stunning ocean views.
                    <img src="bali.png" alt="Uluwatu Temple" class="img-fluid">
                </div>
            </div>
        `;
    } else if (location === 'tokyo') {
        content = `
            <div class="destination-details">
                <h3>Tokyo, Japan</h3>
                <div class="star-rating" id="tokyo-stars">
                    <span class="star" data-value="1" onclick="setRating(event, 'tokyo')">★</span>
                    <span class="star" data-value="2" onclick="setRating(event, 'tokyo')">★</span>
                    <span class="star" data-value="3" onclick="setRating(event, 'tokyo')">★</span>
                    <span class="star" data-value="4" onclick="setRating(event, 'tokyo')">★</span>
                    <span class="star" data-value="5" onclick="setRating(event, 'tokyo')">★</span>
                </div>
                <div class="reviews" id="tokyo-reviews"></div>
                <h4>Leave a Comment:</h4>
                <textarea rows="3" class="form-control" placeholder="Your comment here..." id="tokyo-comment"></textarea>
                <button class="btn btn-success mt-2" onclick="submitComment('tokyo')">Submit</button>
                <div class="sub-attraction">
                    <strong>Shibuya Crossing:</strong> Famous for its busy pedestrian crossing and neon lights.
                    <img src="tokyo.png" alt="Shibuya Crossing" class="img-fluid">
                </div>
            </div>
        `;
    } else if (location === 'paris') {
        content = `
            <div class="destination-details">
                <h3>Paris, France</h3>
                <div class="star-rating" id="paris-stars">
                    <span class="star" data-value="1" onclick="setRating(event, 'paris')">★</span>
                    <span class="star" data-value="2" onclick="setRating(event, 'paris')">★</span>
                    <span class="star" data-value="3" onclick="setRating(event, 'paris')">★</span>
                    <span class="star" data-value="4" onclick="setRating(event, 'paris')">★</span>
                    <span class="star" data-value="5" onclick="setRating(event, 'paris')">★</span>
                </div>
                <div class="reviews" id="paris-reviews"></div>
                <h4>Leave a Comment:</h4>
                <textarea rows="3" class="form-control" placeholder="Your comment here..." id="paris-comment"></textarea>
                <button class="btn btn-success mt-2" onclick="submitComment('paris')">Submit</button>
                <div class="sub-attraction">
                    <strong>Eiffel Tower:</strong> The iconic symbol of Paris and one of the most famous landmarks in the world.
                    <img src="effiel tower.png" alt="Eiffel Tower" class="img-fluid">
                </div>
            </div>
        `;
    }
    document.getElementById('destination-container').innerHTML = content;
}

// Global variable to store current rating
let currentRating = 0;

// Function to set the star rating for the destination
function setRating(event, location) {
    const starValue = parseInt(event.target.getAttribute('data-value'));
    currentRating = starValue;
    
    // Highlight the selected stars
    const stars = document.querySelectorAll(`#${location}-stars .star`);
    stars.forEach(star => {
        const value = parseInt(star.getAttribute('data-value'));
        if (value <= currentRating) {
            star.classList.add('selected');
        } else {
            star.classList.remove('selected');
        }
    });
}

// Function to reset star ratings after submission
function resetStars(location) {
    const stars = document.querySelectorAll(`#${location}-stars .star`);
    stars.forEach(star => {
        star.classList.remove('selected');
    });
}

// Function to handle comment submission for each destination
function submitComment(location) {
    const commentTextarea = document.getElementById(`${location}-comment`);
    const comment = commentTextarea.value.trim();
    
    if (comment) {
        const reviewsDiv = document.getElementById(`${location}-reviews`);
        
        // Create a new div to hold the comment and rating
        const newComment = document.createElement('div');
        newComment.classList.add('review');
        newComment.innerHTML = `
            <strong>Rating: ${currentRating} stars</strong><br>
            <p>${comment}</p>
        `;
        
        // Append the new comment to the reviews div
        reviewsDiv.appendChild(newComment);
        
        // Clear the textarea after submission
        commentTextarea.value = '';
        
        // Reset the current rating
        currentRating = 0;
        resetStars(location);
    } else {
        alert('Please enter a comment before submitting.');
    }
}
